import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';

export const TONER_COLORS = ['cyan', 'magenta', 'yellow', 'black'] as const;
export type TonerColor = (typeof TONER_COLORS)[number];

export type TonerOrigin = 'manual' | 'attribute' | 'auto';

export type TonerSource = {
  color: TonerColor;
  origin: TonerOrigin;
  /** Set for entity-backed sources (origin manual/auto). */
  entityId?: string;
  /** Undefined when the backing entity is unavailable/non-numeric. */
  level?: number;
};

const COLOR_WORDS: Record<TonerColor, string[]> = {
  cyan: ['cyan'],
  magenta: ['magenta'],
  yellow: ['yellow'],
  black: ['black'],
};

/** The original attribute contract: `domain: "printer"` plus a numeric `black_level`. */
export function hasAttributeContract(stateObj: HassEntity | undefined): boolean {
  return !!stateObj && stateObj.attributes?.domain === 'printer' && typeof stateObj.attributes?.black_level === 'number';
}

/**
 * Find cartridge sensors on the same device as the given entity.
 *
 * Looks up the entity's device in the registry, collects its percent sensors
 * and assigns them to colors by matching color words against the friendly
 * name / entity id. Sensors that are currently unavailable are still
 * considered (their unit attribute may be stripped), the name match alone
 * decides then.
 */
export function autoDiscoverTonerEntities(hass: HomeAssistant, entityId?: string): Partial<Record<TonerColor, string>> {
  const registry = (hass as HassWithRegistry).entities;
  const deviceId = entityId ? registry?.[entityId]?.device_id : undefined;
  if (!registry || !deviceId) return {};

  const candidates = Object.values(registry)
    .filter((entry) => entry.device_id === deviceId && entry.entity_id.startsWith('sensor.'))
    .map((entry) => ({ entityId: entry.entity_id, stateObj: hass.states[entry.entity_id] }))
    .filter(({ stateObj }) => {
      if (!stateObj) return false;
      if (stateObj.attributes?.unit_of_measurement === '%') return true;
      // unavailable sensors may have their unit stripped — keep them and let the name match decide
      return stateObj.state === 'unavailable' || stateObj.state === 'unknown';
    })
    .sort((a, b) => a.entityId.localeCompare(b.entityId));

  const result: Partial<Record<TonerColor, string>> = {};
  const used = new Set<string>();
  for (const color of TONER_COLORS) {
    const match = candidates.find(({ entityId: id, stateObj }) => {
      if (used.has(id)) return false;
      const name = `${stateObj?.attributes?.friendly_name ?? ''} ${id}`.toLowerCase();
      return COLOR_WORDS[color].some((word) => name.includes(word));
    });
    if (match) {
      result[color] = match.entityId;
      used.add(match.entityId);
    }
  }
  return result;
}

/**
 * Resolve the toner level source for every color, in precedence order:
 * explicit `<color>_entity` from the config, `<color>_level` attribute on the
 * tile entity (the original contract), auto-discovered device sensor.
 */
export function resolveTonerSources(hass: HomeAssistant, entityId: string | undefined, config: Partial<PrinterTonerLevelFeatureConfig> | undefined): Partial<Record<TonerColor, TonerSource>> {
  const stateObj = entityId ? hass.states[entityId] : undefined;
  const auto = autoDiscoverTonerEntities(hass, entityId);

  const sources: Partial<Record<TonerColor, TonerSource>> = {};
  for (const color of TONER_COLORS) {
    const manualEntity = config?.[`${color}_entity`];
    if (manualEntity) {
      sources[color] = entitySource(hass, color, manualEntity, 'manual');
      continue;
    }
    const attrLevel = stateObj?.attributes?.[color + '_level'];
    if (typeof attrLevel === 'number') {
      sources[color] = { color, origin: 'attribute', level: attrLevel };
      continue;
    }
    const autoEntity = auto[color];
    if (autoEntity) {
      sources[color] = entitySource(hass, color, autoEntity, 'auto');
    }
  }
  return sources;
}

function entitySource(hass: HomeAssistant, color: TonerColor, entityId: string, origin: TonerOrigin): TonerSource {
  const value = Number(hass.states[entityId]?.state);
  return { color, origin, entityId, level: Number.isFinite(value) ? value : undefined };
}
