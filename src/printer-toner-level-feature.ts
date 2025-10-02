import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntity } from "home-assistant-js-websocket";
import { printerTonerLevelFeatureStyles } from "./printer-toner-level-feature.styles";
import "./printer-toner-level-feature-config";

const supportsPrinterTonerLevelFeature = (stateObj: HassEntity): boolean => {
  return stateObj.attributes?.domain === "printer" && typeof stateObj.attributes?.black_level === "number";
};

@customElement("printer-toner-level-feature")
class PrinterTonerLevelFeature extends LitElement {
  @state() _hass?: HomeAssistant;
  @property({ attribute: false }) config?: any;
  @property({ attribute: false }) stateObj?: HassEntity;

  static get properties(): { [key: string]: any } {
    return {
      hass: { type: Object },
      config: { type: Object },
      stateObj: { type: Object },
    };
  }

	static getConfigElement(): HTMLElement {
		return document.createElement('printer-toner-level-feature-config');
	}

	static getStubConfig(): any {
		return {
			type: 'printer-toner-level-feature'
		};
	}

  get isColorPrinter(): boolean { return this.stateObj?.attributes?.cyan_level != null }

	getCardSize(): number {
		return this.isColorPrinter ? 3 : 2;
	}  

  setConfig(config: PrinterTonerLevelFeatureConfig) {
    console.log(config)
    this.config = config;
    if (config && config.entity) {
      this.stateObj = this.hass?.states?.[config.entity];
    } else {
      this.stateObj = undefined;
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
    const blackAsWhite = this.getBoolConfigVal("black_as_white", true);
    
    if (this.isColorPrinter) {
      return html`
        <div class="color toners${blackAsWhite ? ' black-as-white' : ''}">
          ${this.renderToner("cyan")}
          ${this.renderToner("magenta")}
          ${this.renderToner("yellow")}
          ${this.renderToner("black")}
        </div>
      `;
    } else {
      return html`
        <div class="toners${blackAsWhite ? ' black-as-white' : ''}">
          ${this.renderToner("black")}
        </div>
      `;
    }
  }

  renderToner(color: string): TemplateResult {
    const level = this.stateObj.attributes[color + "_level"];
    const showPercent = this.getBoolConfigVal("show_percent", true);
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

window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: "printer-toner-level-feature",
  name: "Printer toner level",
  supported: supportsPrinterTonerLevelFeature,
  configurable: true,
});