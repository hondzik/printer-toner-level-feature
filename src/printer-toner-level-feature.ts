import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getBoolConfigVal } from './config-utils';
import { printerTonerLevelFeatureStyles } from './printer-toner-level-feature.styles';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { TemplateResult, CSSResultGroup } from 'lit';
import './printer-toner-level-feature-config';

const supportsPrinterTonerLevelFeature = (hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean => {
  const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
  return !!stateObj && stateObj.attributes?.domain === 'printer' && typeof stateObj.attributes?.black_level === 'number';
};

@customElement('printer-toner-level-feature')
export class PrinterTonerLevelFeature extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) config?: PrinterTonerLevelFeatureConfig;
  @property({ attribute: false }) context?: LovelaceCardFeatureContext;

  static getConfigElement(): HTMLElement {
    return document.createElement('printer-toner-level-feature-config');
  }

  static getStubConfig(): PrinterTonerLevelFeatureConfig {
    return {
      type: 'custom:printer-toner-level-feature',
    };
  }

  get stateObj(): HassEntity | undefined {
    return this.context?.entity_id ? this.hass?.states[this.context.entity_id] : undefined;
  }

  // hui-card-feature.ts assigns `element.stateObj = ...` directly on every render
  // for legacy custom-card-feature compatibility. Without this setter, that
  // assignment throws (assigning to a getter-only accessor from strict-mode
  // code) and aborts the render, leaving the feature blank. State is derived
  // from context/hass above, so the assigned value is intentionally ignored.
  set stateObj(_stateObj: HassEntity | undefined) {
    void _stateObj;
  }

  get isColorPrinter(): boolean {
    return this.stateObj?.attributes?.cyan_level != null;
  }

  getCardSize(): number {
    return this.isColorPrinter ? 3 : 2;
  }

  setConfig(config: PrinterTonerLevelFeatureConfig) {
    this.config = config;
  }

  render(): TemplateResult {
    if (!this.config || !this.hass || !this.context || !supportsPrinterTonerLevelFeature(this.hass, this.context)) {
      return html`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;
    }

    const blackAsWhite = getBoolConfigVal(this.config, 'black_as_white', true);
    if (this.isColorPrinter) {
      return html`
        <div class="color toners${blackAsWhite ? ' black-as-white' : ''}">
          ${this.renderToner('cyan')} ${this.renderToner('magenta')} ${this.renderToner('yellow')} ${this.renderToner('black')}
        </div>
      `;
    } else {
      return html` <div class="toners${blackAsWhite ? ' black-as-white' : ''}">${this.renderToner('black')}</div> `;
    }
  }

  renderToner(color: string): TemplateResult {
    const level = this.stateObj?.attributes[color + '_level'] ?? 0;
    const showPercent = getBoolConfigVal(this.config, 'show_percent', true);
    return html`
      <div class="${color} toner">
        <div class="background">
          <div class="level" style="width: ${level}%;"></div>
        </div>
        ${showPercent ? html`<div class="percent">${level}</div>` : nothing}
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return printerTonerLevelFeatureStyles;
  }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'printer-toner-level-feature',
  name: 'Printer toner level',
  isSupported: supportsPrinterTonerLevelFeature,
  configurable: true,
});
