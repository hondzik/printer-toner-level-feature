import { css } from "lit";
export const printerTonerLevelFeatureStyles = css`
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
        background-color: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.8);
      }

      .black-as-white .black.toner .background {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.8);
      }

      .black.toner .level {
        background-color: rgba(0, 0, 0, 0.7);
      }
        
      .black-as-white .black.toner .level {
        background-color: rgba(255, 255, 255, 0.7);
      }
`;