import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

const supportsPrinterTonerLevelFeature = (stateObj) => {
  const domain = stateObj.entity_id.split(".")[0];
  if (domain !== "sensor") {
    return false;
  }

  return stateObj.attributes?.domain === "printer";
};

class PrinterTonerLevelFeature extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      stateObj: { type: Object },
    };
  }

  setConfig(config) {
    this.config = config;
    if (config && config.entity) {
      this.stateObj = this.hass?.states?.[config.entity];
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (this.config && this.config.entity) {
      this.stateObj = hass?.states?.[this.config.entity];
    }
  }

  get hass() {
    return this._hass;
  }

  render() {
    if (
      !this.config ||
      !this.hass ||
      !this.stateObj ||
      !supportsPrinterTonerLevelFeature(this.stateObj)
    ) {
      return html`<div></div>`;
    }

    const attributes = this.stateObj.attributes;
    if (attributes?.cyan_level != null) {
      return html`
        <div class="color toners">
          ${this._renderToner("cyan", attributes?.cyan_level)}
          ${this._renderToner("magenta", attributes?.magenta_level)}
          ${this._renderToner("yellow", attributes?.yellow_level)}
          ${this._renderToner("black", attributes?.black_level)}
        </div>
      `;
    } else {
      return html`
        <div class="toners">
          ${this._renderToner("black", attributes?.black_level)}
        </div>
      `;
    }
  }

  _renderToner(name, level) {
    return html`
      <div class="${name} toner">
        <div class="background">
          <div class="level" style="width: ${level}%"></div>
        </div>
        <div class="percent">${level}</div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .toners {
        display: flex;
        flex-direction: column;
        height: var(--feature-height, 42px);
        overflow: none;
      }
      .color.toners {
        /* double feature height + flex gap */
        height: calc(2 * var(--feature-height, 42px) + 12px);
      }
      .toner {
        display: flex;
        flex: 1;
        align-items: center;
      }
      .toner > :first-child {
        flex: 1;
      }
      .toner > :last-child {
        width: 45px;
        text-align: right;
      }
      .toner .background {
        border: 1px solid;
        border-radius: 5px;
        height: 8px;
      }
      .toner .level {
        height: 100%;
      }
      .toner .percent {
        font-size: var(--ha-font-size-s);
        font-weight: var(--ha-font-weight-normal);
        letter-spacing: 0.4px;
        color: var(--primary-text-color);
      }
      .toner .percent::after {
        content: "%";
        margin-left: 2px;
      }
      .cyan.toner .background {
        background-color: rgba(0, 255, 255, 0.3);
        border-color: rgba(0, 255, 255, 0.8);
      }
      .cyan.toner .level {
        background-color: rgba(0, 255, 255, 0.7);
      }
      .magenta.toner .background {
        background-color: rgba(255, 0, 255, 0.3);
        border-color: rgba(255, 0, 255, 0.8);
      }
      .magenta.toner .level {
        background-color: rgb(255, 0, 255, 0.7);
      }
      .yellow.toner .background {
        background-color: rgba(255, 255, 0, 0.3);
        border-color: rgba(255, 255, 0, 0.8);
      }
      .yellow.toner .level {
        background-color: rgba(255, 255, 0, 0.7);
      }
      .black.toner .background {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.8);
      }
      .black.toner .level {
        background-color: rgba(255, 255, 255, 0.7);
      }
    `;
  }
}

customElements.define("printer-toner-level-feature", PrinterTonerLevelFeature);

window.customCardFeatures = window.customCardFeatures || [];
window.customCardFeatures.push({
  type: "printer-toner-level-feature",
  name: "Printer toner level",
  supported: supportsPrinterTonerLevelFeature,
  configurable: false,
});
