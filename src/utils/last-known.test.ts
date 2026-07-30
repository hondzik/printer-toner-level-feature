import { describe, expect, it } from 'vitest';
import { fetchLastKnownLevel } from './last-known';
import type { HomeAssistant } from 'custom-card-helpers';

const ENTITY_ID = 'sensor.printer_black_cartridge';

function hassWithCallWS(callWS: (msg: Record<string, unknown>) => unknown): HomeAssistant {
  return { callWS } as unknown as HomeAssistant;
}

describe('fetchLastKnownLevel', () => {
  it('returns the newest numeric hourly mean, rounded', () => {
    const hass = hassWithCallWS(() => ({
      [ENTITY_ID]: [
        { start: 1000, end: 2000, mean: 12.2 },
        { start: 2000, end: 3000, mean: 34.6 },
      ],
    }));
    return fetchLastKnownLevel(hass, ENTITY_ID).then((result) => {
      expect(result).toEqual({ level: 35, start: 2000 });
    });
  });

  it('skips trailing rows with no numeric mean and uses the last valid one', () => {
    const hass = hassWithCallWS(() => ({
      [ENTITY_ID]: [
        { start: 1000, end: 2000, mean: 50 },
        { start: 2000, end: 3000, mean: null },
      ],
    }));
    return fetchLastKnownLevel(hass, ENTITY_ID).then((result) => {
      expect(result).toEqual({ level: 50, start: 1000 });
    });
  });

  it('falls back to 5-minute statistics when hourly has no data', () => {
    const calls: string[] = [];
    const hass = hassWithCallWS((msg) => {
      calls.push(msg.period as string);
      if (msg.period === 'hour') return {};
      return { [ENTITY_ID]: [{ start: 500, end: 800, mean: 77 }] };
    });
    return fetchLastKnownLevel(hass, ENTITY_ID).then((result) => {
      expect(calls).toEqual(['hour', '5minute']);
      expect(result).toEqual({ level: 77, start: 500 });
    });
  });

  it('returns undefined when neither statistics period has data', () => {
    const hass = hassWithCallWS(() => ({}));
    return fetchLastKnownLevel(hass, ENTITY_ID).then((result) => {
      expect(result).toBeUndefined();
    });
  });
});
