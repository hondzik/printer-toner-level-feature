import { describe, expect, it } from 'vitest';
import setupCustomlocalize from './localize';
import type { HomeAssistant } from 'custom-card-helpers';

function hassWithLanguage(language: string): HomeAssistant {
  return { locale: { language } } as unknown as HomeAssistant;
}

describe('setupCustomlocalize', () => {
  it('translates a known key in the requested language', () => {
    const localize = setupCustomlocalize(hassWithLanguage('cs'));
    expect(localize('feature.last_known')).toBe('Poslední známá hodnota');
  });

  it('falls back to English when the requested language is not available', () => {
    const localize = setupCustomlocalize(hassWithLanguage('xx'));
    expect(localize('feature.last_known')).toBe('Last known value');
  });

  it('falls back to English when hass is not provided', () => {
    const localize = setupCustomlocalize(undefined);
    expect(localize('feature.last_known')).toBe('Last known value');
  });

  it('returns the key itself when missing from every language', () => {
    const localize = setupCustomlocalize(hassWithLanguage('en'));
    expect(localize('editor.does_not_exist')).toBe('editor.does_not_exist');
  });
});
