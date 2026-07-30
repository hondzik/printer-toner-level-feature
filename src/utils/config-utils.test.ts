import { describe, expect, it } from 'vitest';
import { getBoolConfigVal } from './config-utils';

describe('getBoolConfigVal', () => {
  it('returns the default when config is undefined', () => {
    expect(getBoolConfigVal(undefined, 'show_percent', true)).toBe(true);
    expect(getBoolConfigVal(undefined, 'show_percent', false)).toBe(false);
  });

  it('returns the default when the key is absent from config', () => {
    expect(getBoolConfigVal({ type: 'custom:printer-toner-level-feature' }, 'black_as_white', true)).toBe(true);
  });

  it('returns the coerced value when the key is present', () => {
    expect(getBoolConfigVal({ type: 'custom:printer-toner-level-feature', show_percent: false }, 'show_percent', true)).toBe(false);
    expect(getBoolConfigVal({ type: 'custom:printer-toner-level-feature', black_as_white: true }, 'black_as_white', false)).toBe(true);
  });
});
