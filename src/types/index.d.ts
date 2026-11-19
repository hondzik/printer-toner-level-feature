import type { CustomCardFeatureEntry } from 'custom-card-helpers';

export {};

declare global {
  interface Window {
    customCardFeatures: CustomCardFeatureEntry[];
    customCards: CustomCard[];
  }

  interface CustomCard {
    type: string;
    name: string;
    description: string;
  }

  type FeatureConfig = {
    type: string;
  };

  /** HA frontend action config, as produced by the `ui_action` selector (`more-info`, `navigate`, `none`, ...). */
  type TonerActionConfig = { action: string; [key: string]: unknown };

  type PrinterTonerLevelFeatureConfig = FeatureConfig & {
    show_percent?: boolean;
    black_as_white?: boolean;
    /** Action on tap, applied to every bar; defaults to `none`. */
    tap_action?: TonerActionConfig;
    cyan_entity?: string;
    magenta_entity?: string;
    yellow_entity?: string;
    black_entity?: string;
  };
}
