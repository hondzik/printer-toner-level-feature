import { LitElement, html, css, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntity } from "home-assistant-js-websocket";
import { printerTonerLevelFeatureStyles } from "./printer-toner-level-feature.styles";
import "./printer-toner-level-feature-config";

const supportsPrinterTonerLevelFeature = (stateObj: HassEntity): boolean => {
  const domain = stateObj.entity_id.split(".")[0];
  if (domain !== "sensor") {
    return false;
  }
  return stateObj.attributes?.domain === "printer";
};


@customElement("printer-toner-level-feature")
class PrinterTonerLevelFeature extends LitElement {
  @state() _hass?: HomeAssistant;
  @property({ attribute: false }) config?: any;
  @property({ attribute: false }) stateObj?: HassEntity;

  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      stateObj: { type: Object },
    };
  }

  setConfig(config: any) {
    this.config = config;
    if (config && config.entity) {
      this.stateObj = this.hass?.states?.[config.entity];
    }
  }

  getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
    return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
  }

  set hass(hass: HomeAssistant | undefined) {
    this._hass = hass;
    if (this.config && this.config.entity) {
      this.stateObj = hass?.states?.[this.config.entity];
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }


  render(): TemplateResult {
    if (!this.config || !this.hass || !this.stateObj || !supportsPrinterTonerLevelFeature(this.stateObj)) {
      return html`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;
    }

    const attributes = this.stateObj.attributes;
    const showPercent = this.getBoolConfigVal("show_percent", true);
    const blackAsWhite = this.getBoolConfigVal("black_as_white", true);
    
    if (attributes?.cyan_level != null) {
      return html`
        <div class="color toners ${blackAsWhite ? 'black-as-white' : ''}">
          ${PrinterTonerLevelFeature.renderToner("cyan", attributes?.cyan_level, showPercent)}
          ${PrinterTonerLevelFeature.renderToner("magenta", attributes?.magenta_level, showPercent)}
          ${PrinterTonerLevelFeature.renderToner("yellow", attributes?.yellow_level, showPercent)}
          ${PrinterTonerLevelFeature.renderToner("black", attributes?.black_level, showPercent)}
        </div>
      `;
    } else {
      return html`
        <div class="toners ${blackAsWhite ? 'black-as-white' : ''}">
          ${PrinterTonerLevelFeature.renderToner("black", attributes?.black_level, showPercent)}
        </div>
      `;
    }
  }

  static renderToner(color: string, level: number, showPercent: boolean) {
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
    return printerTonerLevelFeatureStyles
  }
}

(window as any).customCardFeatures = (window as any).customCardFeatures || [];
(window as any).customCardFeatures.push({
  type: "printer-toner-level-feature",
  name: "Printer toner level",
  supported: supportsPrinterTonerLevelFeature,
  configurable: true,
  getConfigElement: () => document.createElement("printer-toner-level-feature-config")
});