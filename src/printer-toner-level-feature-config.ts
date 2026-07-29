import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import setupCustomlocalize from './localize';
import { getBoolConfigVal } from './utils/config-utils';
import { autoDiscoverTonerEntities, TONER_COLORS } from './utils/toner-sources';
import type { TonerColor } from './utils/toner-sources';
import type { HomeAssistant } from 'custom-card-helpers';
import type { CSSResultGroup, TemplateResult } from 'lit';

const SWATCH_COLORS: Record<TonerColor, string> = {
  cyan: 'rgba(0, 255, 255, 0.7)',
  magenta: 'rgba(255, 0, 255, 0.7)',
  yellow: 'rgba(255, 255, 0, 0.7)',
  black: 'var(--primary-text-color)',
};

@customElement('printer-toner-level-feature-config')
export class PrinterTonerLevelFeatureConfigEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) context?: LovelaceCardFeatureContext;
  @property({ type: Object }) config: Partial<PrinterTonerLevelFeatureConfig> = {};

  setConfig(config: Partial<PrinterTonerLevelFeatureConfig>) {
    this.config = { ...config };
  }

  static get styles(): CSSResultGroup {
    return css`
      .section-label {
        font-size: var(--ha-font-size-s, 12px);
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin: 8px 0;
      }
      .source-banner {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        border-radius: 8px;
        padding: 8px 12px;
        margin-bottom: 12px;
        font-size: var(--ha-font-size-m, 14px);
        background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-text-color);
      }
      .source-banner .secondary {
        font-size: var(--ha-font-size-s, 12px);
        color: var(--secondary-text-color);
      }
      .source-row {
        display: grid;
        grid-template-columns: 92px 1fr auto;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .swatch-col {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .swatch {
        width: 14px;
        height: 14px;
        border-radius: 4px;
        flex: none;
        box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.4);
      }
      .row-tail {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: flex-end;
        min-width: 92px;
      }
      .chip {
        font-size: 11px;
        font-weight: 500;
        border-radius: 999px;
        padding: 3px 9px;
        white-space: nowrap;
      }
      .chip.auto {
        background-color: rgba(var(--rgb-state-active-color, 67, 160, 71), 0.16);
        color: var(--state-active-color, var(--success-color, #2e7d32));
      }
      .chip.manual {
        background-color: rgba(255, 152, 0, 0.16);
        color: var(--warning-color, #b26a00);
      }
      .reset-button {
        border: none;
        background: none;
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        padding: 0;
        color: var(--secondary-text-color);
      }
      .reset-button:hover {
        background-color: rgba(127, 127, 127, 0.15);
      }
      .reset-button:focus-visible {
        outline: 2px solid var(--primary-color);
      }
      .reset-button svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
      }
      ha-selector {
        display: block;
        min-width: 0;
      }
      .options {
        border-top: 1px solid var(--divider-color);
        margin-top: 8px;
      }
    `;
  }

  private get _autoEntities(): Partial<Record<TonerColor, string>> {
    if (!this.hass) return {};
    return autoDiscoverTonerEntities(this.hass, this.context?.entity_id);
  }

  private get _hasAttributeContract(): boolean {
    const stateObj = this.context?.entity_id ? this.hass?.states[this.context.entity_id] : undefined;
    return !!stateObj && stateObj.attributes?.domain === 'printer' && typeof stateObj.attributes?.black_level === 'number';
  }

  private get _deviceName(): string | undefined {
    const hass = this.hass as HassWithRegistry | undefined;
    const deviceId = this.context?.entity_id ? hass?.entities?.[this.context.entity_id]?.device_id : undefined;
    const device = deviceId ? hass?.devices?.[deviceId] : undefined;
    return device?.name_by_user ?? device?.name;
  }

  render(): TemplateResult {
    const customLocalize = setupCustomlocalize(this.hass);
    const auto = this._autoEntities;
    const autoCount = Object.keys(auto).length;

    let bannerText: string;
    if (this._hasAttributeContract && autoCount === 0) {
      bannerText = customLocalize('editor.sources.mode_attributes');
    } else if (autoCount > 0) {
      bannerText = customLocalize('editor.sources.mode_auto');
    } else {
      bannerText = customLocalize('editor.sources.mode_none');
    }
    const deviceName = autoCount > 0 ? this._deviceName : undefined;

    return html`
      <div class="section-label">${customLocalize('editor.sources.title')}</div>
      <div class="source-banner">
        <div>
          <div>${bannerText}</div>
          ${deviceName ? html`<div class="secondary">${deviceName}</div>` : nothing}
        </div>
      </div>
      ${TONER_COLORS.map((color) => this.renderSourceRow(color, customLocalize))}
      <div class="options">
        <ha-settings-row>
          <span slot="heading" data-for="show_percent">${customLocalize('editor.show_percent.label')}</span>
          <span slot="description" data-for="show_percent">${customLocalize('editor.show_percent.description')}</span>
          <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${getBoolConfigVal(this.config, 'show_percent', true)} name="show_percent"></ha-switch>
        </ha-settings-row>
        <ha-settings-row>
          <span slot="heading" data-for="black_as_white">${customLocalize('editor.black_as_white.label')}</span>
          <span slot="description" data-for="black_as_white">${customLocalize('editor.black_as_white.description')}</span>
          <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${getBoolConfigVal(this.config, 'black_as_white', true)} name="black_as_white"></ha-switch>
        </ha-settings-row>
      </div>
    `;
  }

  private renderSourceRow(color: TonerColor, customLocalize: (key: string) => string): TemplateResult {
    const manual = this.config[`${color}_entity`];
    const auto = this._autoEntities[color];
    const value = manual ?? auto ?? '';

    let chip: TemplateResult | typeof nothing = nothing;
    if (manual) {
      chip = html`<span class="chip manual">${customLocalize('editor.sources.manual')}</span>`;
    } else if (auto) {
      chip = html`<span class="chip auto">${customLocalize('editor.sources.auto')}</span>`;
    }

    return html`
      <div class="source-row">
        <div class="swatch-col">
          <span class="swatch" style="background-color: ${SWATCH_COLORS[color]}"></span>
          <span>${customLocalize('editor.colors.' + color)}</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: { domain: 'sensor' } }}
          .value=${value}
          .label=${customLocalize('editor.sources.sensor')}
          @value-changed=${(ev: CustomEvent) => this._onSourceChange(color, ev)}
        ></ha-selector>
        <div class="row-tail">
          ${chip}
          ${manual
            ? html`
                <button class="reset-button" title=${customLocalize('editor.sources.reset')} aria-label=${customLocalize('editor.sources.reset')} @click=${() => this._onSourceReset(color)}>
                  <svg viewBox="0 0 24 24"><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
                </button>
              `
            : nothing}
        </div>
      </div>
    `;
  }

  private _onSourceChange(color: TonerColor, ev: CustomEvent) {
    ev.stopPropagation();
    const value = (ev.detail?.value as string | undefined) || undefined;
    const newConfig = { ...this.config };
    if (!value || value === this._autoEntities[color]) {
      delete newConfig[`${color}_entity`];
    } else {
      newConfig[`${color}_entity`] = value;
    }
    this._updateConfig(newConfig);
  }

  private _onSourceReset(color: TonerColor) {
    const newConfig = { ...this.config };
    delete newConfig[`${color}_entity`];
    this._updateConfig(newConfig);
  }

  private _onShowPercentChange(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this._updateConfig({ ...this.config, show_percent: checked });
  }

  private _onBlackAsWhiteChange(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this._updateConfig({ ...this.config, black_as_white: checked });
  }

  private _updateConfig(newConfig: Partial<PrinterTonerLevelFeatureConfig>) {
    this.config = newConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
