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
  };
}
