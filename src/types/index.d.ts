import type { HassEntity } from "home-assistant-js-websocket";

export {};

declare global {
  interface Window {
    customCardFeatures: CustomCardFeature[];
    customCards: CustomCard[];
  }

  interface CustomCardFeature {
    type: string;
    name: string;
    configurable?: boolean;
    supported?: (stateObj: HassEntity) => boolean;
  }

  interface CustomCard {
    type: string;
    name: string;
    description: string;
  }

  type FeatureConfig = {
    type: string;
    entity?: string;
  };

  type PrinterTonerLevelFeatureConfig = FeatureConfig & {
    show_percent?: boolean;
    black_as_white?: boolean;
  };  
}