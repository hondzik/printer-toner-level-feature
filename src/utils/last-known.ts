import type { HomeAssistant } from 'custom-card-helpers';

export type LastKnownLevel = {
  /** Rounded percent value of the newest long-term statistics row. */
  level: number;
  /** Start of that statistics period (epoch ms), i.e. how old the value is. */
  start: number;
};

type StatisticsRow = { start: number; end: number; mean?: number | null };
type StatisticsResult = Record<string, StatisticsRow[]>;

const LONG_TERM_LOOKBACK_DAYS = 365;
const SHORT_TERM_LOOKBACK_DAYS = 10;

/**
 * Fetch the last known toner level of an entity from the recorder's
 * statistics. Long-term (hourly) statistics survive the recorder purge,
 * so a value is found no matter how long the printer has been off —
 * toner cannot change while it is. Freshly added sensors have no hourly
 * rows until the first top-of-the-hour compile, so fall back to the
 * short-term (5-minute) statistics in that case.
 */
export async function fetchLastKnownLevel(hass: HomeAssistant, entityId: string): Promise<LastKnownLevel | undefined> {
  return (await queryLastMean(hass, entityId, 'hour', LONG_TERM_LOOKBACK_DAYS)) ?? (await queryLastMean(hass, entityId, '5minute', SHORT_TERM_LOOKBACK_DAYS));
}

async function queryLastMean(hass: HomeAssistant, entityId: string, period: 'hour' | '5minute', lookbackDays: number): Promise<LastKnownLevel | undefined> {
  const start = new Date(Date.now() - lookbackDays * 86400 * 1000).toISOString();
  const result = await hass.callWS<StatisticsResult>({
    type: 'recorder/statistics_during_period',
    start_time: start,
    statistic_ids: [entityId],
    period,
    types: ['mean'],
  });
  const rows = result?.[entityId] ?? [];
  for (let i = rows.length - 1; i >= 0; i--) {
    const mean = rows[i].mean;
    if (typeof mean === 'number') return { level: Math.round(mean), start: rows[i].start };
  }
  return undefined;
}
