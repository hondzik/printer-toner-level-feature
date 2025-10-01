import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("printer-toner-level-feature-config")
export class PrinterTonerLevelFeatureConfig extends LitElement {
	@property({ type: Object }) config: any = {};

	setConfig(config: any) {
		this.config = { ...config };
	}
	
	static get styles() {
		return css`
			.option {margin-bottom: 12px;}
			label {font-size: 1em; margin-left: 0.5em;}
		`;
	}

	render() {
		return html`
			<div class="option">
				<input type="checkbox" id="show_percent" .checked=${!!this.config.show_percent} @change=${this._onShowPercentChange} />
				<label for="show_percent">Show percent remaining</label>
			</div>
			<div class="option">
				<input type="checkbox" id="black_as_white" .checked=${!!this.config.black_as_white} @change=${this._onBlackAsWhiteChange} />
				<label for="black_as_white">Black toner as white</label>
			</div>
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
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: this.config },
			bubbles: true,
			composed: true,
		}));
	}
}
