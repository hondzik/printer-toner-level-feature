import type { HomeAssistant } from 'custom-card-helpers';

export {};

declare global {
  interface Window {
    customCardFeatures: CustomCardFeature[];
    customCards: CustomCard[];
  }

  interface LovelaceCardFeatureContext {
    entity_id?: string;
    area_id?: string;
  }

  interface CustomCardFeature {
    type: string;
    name: string;
    configurable?: boolean;
    isSupported?: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
  }

  interface CustomCard {
    type: string;
    name: string;
    description: string;
  }

  type FeatureConfig = {
    type: string;
  };

  type PrinterTonerLevelFeatureConfig = FeatureConfig & {
    show_percent?: boolean;
    black_as_white?: boolean;
    cyan_entity?: string;
    magenta_entity?: string;
    yellow_entity?: string;
    black_entity?: string;
  };

  // Minimal shape of the entity/device registry display data the frontend
  // attaches to the hass object (missing from custom-card-helpers' types).
  interface EntityRegistryDisplayEntry {
    entity_id: string;
    device_id?: string;
    name?: string;
  }

  interface DeviceRegistryDisplayEntry {
    id: string;
    name?: string;
    name_by_user?: string;
  }

  type HassWithRegistry = HomeAssistant & {
    entities?: Record<string, EntityRegistryDisplayEntry>;
    devices?: Record<string, DeviceRegistryDisplayEntry>;
  };
}
