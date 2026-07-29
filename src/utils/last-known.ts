import type { HomeAssistant } from 'custom-card-helpers';

export type LastKnownLevel = {
  /** Rounded percent value of the newest long-term statistics row. */
  level: number;
  /** Start of that statistics period (epoch ms), i.e. how old the value is. */
  start: number;
};

type StatisticsRow = { start: number; end: number; mean?: number | null };
type StatisticsResult = Record<string, StatisticsRow[]>;

const LOOKBACK_DAYS = 365;

/**
 * Fetch the last known toner level of an entity from the recorder's
 * long-term statistics. Unlike raw history these survive the recorder
 * purge, so a value is found no matter how long the printer has been
 * off — toner cannot change while it is.
 */
export async function fetchLastKnownLevel(hass: HomeAssistant, entityId: string): Promise<LastKnownLevel | undefined> {
  const start = new Date(Date.now() - LOOKBACK_DAYS * 86400 * 1000).toISOString();
  const result = await hass.callWS<StatisticsResult>({
    type: 'recorder/statistics_during_period',
    start_time: start,
    statistic_ids: [entityId],
    period: 'day',
    types: ['mean'],
  });
  const rows = result?.[entityId] ?? [];
  for (let i = rows.length - 1; i >= 0; i--) {
    const mean = rows[i].mean;
    if (typeof mean === 'number') return { level: Math.round(mean), start: rows[i].start };
  }
  return undefined;
}
