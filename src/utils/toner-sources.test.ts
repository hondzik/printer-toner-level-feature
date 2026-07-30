import { describe, expect, it } from 'vitest';
import { autoDiscoverTonerEntities, hasAttributeContract, resolveTonerSources } from './toner-sources';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';

function state(overrides: Partial<HassEntity> = {}): HassEntity {
  return {
    entity_id: 'sensor.fake',
    state: '0',
    attributes: {},
    ...overrides,
  } as HassEntity;
}

describe('hasAttributeContract', () => {
  it('is false for an undefined entity', () => {
    expect(hasAttributeContract(undefined)).toBe(false);
  });

  it('is false when domain is not "printer"', () => {
    expect(hasAttributeContract(state({ attributes: { domain: 'other', black_level: 10 } }))).toBe(false);
  });

  it('is false when black_level is not a number', () => {
    expect(hasAttributeContract(state({ attributes: { domain: 'printer', black_level: '10' } }))).toBe(false);
  });

  it('is true when domain is "printer" and black_level is numeric', () => {
    expect(hasAttributeContract(state({ attributes: { domain: 'printer', black_level: 10 } }))).toBe(true);
  });
});

describe('autoDiscoverTonerEntities', () => {
  function hassWithDevice(deviceId: string, sensors: Record<string, HassEntity>): HomeAssistant {
    const entities: Record<string, { entity_id: string; device_id?: string }> = {
      'sensor.tile': { entity_id: 'sensor.tile', device_id: deviceId },
    };
    for (const id of Object.keys(sensors)) {
      entities[id] = { entity_id: id, device_id: deviceId };
    }
    return { states: sensors, entities } as unknown as HomeAssistant;
  }

  it('returns nothing without an entity registry', () => {
    const hass = { states: {} } as unknown as HomeAssistant;
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({});
  });

  it('returns nothing when the entity has no device', () => {
    const hass = { states: {}, entities: { 'sensor.tile': { entity_id: 'sensor.tile' } } } as unknown as HomeAssistant;
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({});
  });

  it('matches percent sensors on the same device by color name', () => {
    const hass = hassWithDevice('device-1', {
      'sensor.cyan_cartridge': state({ entity_id: 'sensor.cyan_cartridge', state: '80', attributes: { friendly_name: 'Printer Cyan Cartridge', unit_of_measurement: '%' } }),
      'sensor.black_cartridge': state({ entity_id: 'sensor.black_cartridge', state: '40', attributes: { friendly_name: 'Printer Black Cartridge', unit_of_measurement: '%' } }),
    });
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({
      cyan: 'sensor.cyan_cartridge',
      black: 'sensor.black_cartridge',
    });
  });

  it('ignores sensors that are not on the same device', () => {
    const hass = hassWithDevice('device-1', {
      'sensor.cyan_cartridge': state({ entity_id: 'sensor.cyan_cartridge', state: '80', attributes: { friendly_name: 'Cyan Cartridge', unit_of_measurement: '%' } }),
    });
    (hass as unknown as { entities: Record<string, { device_id?: string }> }).entities['sensor.cyan_cartridge'].device_id = 'other-device';
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({});
  });

  it('ignores non-sensor entities even on the same device', () => {
    const hass = hassWithDevice('device-1', {
      'binary_sensor.cyan_cartridge': state({ entity_id: 'binary_sensor.cyan_cartridge', state: 'on', attributes: { friendly_name: 'Cyan Cartridge', unit_of_measurement: '%' } }),
    });
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({});
  });

  it('keeps unavailable sensors and still matches them by name', () => {
    const hass = hassWithDevice('device-1', {
      'sensor.magenta_cartridge': state({ entity_id: 'sensor.magenta_cartridge', state: 'unavailable', attributes: { friendly_name: 'Magenta Cartridge' } }),
    });
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({ magenta: 'sensor.magenta_cartridge' });
  });

  it('does not assign the same sensor to two colors', () => {
    const hass = hassWithDevice('device-1', {
      'sensor.cyan_black_combo': state({ entity_id: 'sensor.cyan_black_combo', state: '50', attributes: { friendly_name: 'Cyan Black Combo', unit_of_measurement: '%' } }),
    });
    // "cyan" is checked before "black" (TONER_COLORS order), so the sole matching sensor goes to cyan only.
    expect(autoDiscoverTonerEntities(hass, 'sensor.tile')).toEqual({ cyan: 'sensor.cyan_black_combo' });
  });
});

describe('resolveTonerSources', () => {
  function makeHass(tileAttributes: Record<string, unknown>, extraStates: Record<string, HassEntity> = {}): HomeAssistant {
    return {
      states: {
        'sensor.tile': state({ entity_id: 'sensor.tile', attributes: tileAttributes }),
        ...extraStates,
      },
      entities: { 'sensor.tile': { entity_id: 'sensor.tile' } },
    } as unknown as HomeAssistant;
  }

  it('prefers a manual entity over the attribute contract', () => {
    const hass = makeHass({ domain: 'printer', black_level: 20 }, { 'sensor.manual_black': state({ entity_id: 'sensor.manual_black', state: '77' }) });
    const sources = resolveTonerSources(hass, 'sensor.tile', { type: 'custom:printer-toner-level-feature', black_entity: 'sensor.manual_black' });
    expect(sources.black).toEqual({ color: 'black', origin: 'manual', entityId: 'sensor.manual_black', level: 77 });
  });

  it('falls back to the attribute contract when there is no manual entity', () => {
    const hass = makeHass({ domain: 'printer', black_level: 20 });
    const sources = resolveTonerSources(hass, 'sensor.tile', undefined);
    expect(sources.black).toEqual({ color: 'black', origin: 'attribute', level: 20 });
  });

  it('falls back to an auto-discovered sensor when there is no manual entity or attribute', () => {
    const hass = {
      states: {
        'sensor.tile': state({ entity_id: 'sensor.tile', attributes: {} }),
        'sensor.black_cartridge': state({ entity_id: 'sensor.black_cartridge', state: '65', attributes: { friendly_name: 'Black Cartridge', unit_of_measurement: '%' } }),
      },
      entities: {
        'sensor.tile': { entity_id: 'sensor.tile', device_id: 'device-1' },
        'sensor.black_cartridge': { entity_id: 'sensor.black_cartridge', device_id: 'device-1' },
      },
    } as unknown as HomeAssistant;
    const sources = resolveTonerSources(hass, 'sensor.tile', undefined);
    expect(sources.black).toEqual({ color: 'black', origin: 'auto', entityId: 'sensor.black_cartridge', level: 65 });
  });

  it('leaves a color unresolved when no source produces it', () => {
    const hass = makeHass({});
    const sources = resolveTonerSources(hass, 'sensor.tile', undefined);
    expect(sources.cyan).toBeUndefined();
  });

  it('leaves the level undefined for an entity source with a non-numeric state', () => {
    const hass = makeHass({}, { 'sensor.manual_black': state({ entity_id: 'sensor.manual_black', state: 'unavailable' }) });
    const sources = resolveTonerSources(hass, 'sensor.tile', { type: 'custom:printer-toner-level-feature', black_entity: 'sensor.manual_black' });
    expect(sources.black).toEqual({ color: 'black', origin: 'manual', entityId: 'sensor.manual_black', level: undefined });
  });
});
