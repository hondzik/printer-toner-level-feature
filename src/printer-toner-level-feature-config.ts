import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("printer-toner-level-feature-config")
export class PrinterTonerLevelFeatureConfig extends LitElement {
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
		return html`
            <ha-settings-row>
                <span slot="heading" data-for="show_percent">
                    Show percent remaining
                </span>
                <span slot="description" data-for="show_percent">
                    When enabled, shows the percentage of toner remaining next to the toner level bar.
                </span>
                <ha-switch
                    id="show_percent" 
                    @change=${this._onShowPercentChange}
                    .checked=${this.getBoolConfigVal("show_percent", true)} 
                    name="show_percent"
                ></ha-switch>
            </ha-settings-row>
            <ha-settings-row>
                <span slot="heading" data-for="black_as_white">
                    Black toner as white
                </span>
                <span slot="description" data-for="black_as_white">
                    When enabled, displays the black toner level bar in white color.
                </span>
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
        console.log(e);
        const checked = (e.target as HTMLInputElement).checked;
        this._updateConfig({ ...this.config, show_percent: checked });
    }

    private _onBlackAsWhiteChange(e: Event) {
        console.log(e);
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
