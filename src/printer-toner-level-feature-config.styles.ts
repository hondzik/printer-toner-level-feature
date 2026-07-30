import { css } from 'lit';

export const printerTonerLevelFeatureConfigStyles = css`
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
    background-color: rgba(76, 175, 80, 0.16);
    color: var(--success-color, #2e7d32);
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
