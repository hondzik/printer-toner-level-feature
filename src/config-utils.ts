export function getBoolConfigVal(config: Partial<PrinterTonerLevelFeatureConfig> | undefined, key: keyof PrinterTonerLevelFeatureConfig, defaultValue: boolean): boolean {
  const value = config?.[key];
  return value !== undefined ? !!value : defaultValue;
}
