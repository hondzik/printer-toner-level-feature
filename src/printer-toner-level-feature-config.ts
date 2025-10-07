import type { HomeAssistant } from "custom-card-helpers";
import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import setupCustomlocalize from "./localize";

@customElement("printer-toner-level-feature-config")
export class PrinterTonerLevelFeatureConfig extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ type: Object }) config: any = {};

    setConfig(config: any) {
        this.config = { ...config };
    }

    static get styles(): CSSResultGroup {
        return css`
            .option {margin-bottom: 12px;}
            label {font-size: 1em; margin-left: 0.5em;}
        `;
    }

    getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }

    render(): TemplateResult {
        const customLocalize = setupCustomlocalize(this.hass);
        return html`
            <ha-settings-row>
                <span slot="heading" data-for="show_percent">${customLocalize("editor.show_percent.label")}</span>
                <span slot="description" data-for="show_percent">${customLocalize("editor.show_percent.description")}</span>
                <ha-switch
                    id="show_percent" 
                    @change=${this._onShowPercentChange}
                    .checked=${this.getBoolConfigVal("show_percent", true)} 
                    name="show_percent"
                ></ha-switch>
            </ha-settings-row>
            <ha-settings-row>
                <span slot="heading" data-for="show_percent">${customLocalize("editor.black_as_white.label")}</span>
                <span slot="description" data-for="show_percent">${customLocalize("editor.black_as_white.description")}</span>
                <ha-switch
                    id="black_as_white" 
                    @change=${this._onBlackAsWhiteChange}
                    .checked=${this.getBoolConfigVal("black_as_white", true)} 
                    name="black_as_white"
                ></ha-switch>
            </ha-settings-row>
        `;
    }

    private _onShowPercentChange(e: Event) {
        const checked = (e.target as HTMLInputElement).checked;
        this._updateConfig({ ...this.config, show_percent: checked });
    }

    private _onBlackAsWhiteChange(e: Event) {
        const checked = (e.target as HTMLInputElement).checked;
        this._updateConfig({ ...this.config, black_as_white: checked });
    }

    private _updateConfig(newConfig: any) {
        this.config = newConfig;
        this.dispatchEvent(
            new CustomEvent(
                "config-changed",
                {
                    detail: { config: this.config },
                    bubbles: true,
                    composed: true,
                }
            )
        );
    }
}
