export const DEFAULT_TAP_ACTION: TonerActionConfig = { action: 'none' };

/** Detail of the frontend's `hass-action` event, handled by HA's own action handler (more-info, navigate, confirmation, ...). */
export type HassActionDetail = {
  config: { entity?: string; tap_action?: TonerActionConfig };
  action: 'tap';
};

export function isTapEnabled(tapAction: TonerActionConfig | undefined): boolean {
  return (tapAction?.action ?? DEFAULT_TAP_ACTION.action) !== 'none';
}

export function buildTapAction(entity: string | undefined, tapAction: TonerActionConfig | undefined): HassActionDetail {
  return { config: { entity, tap_action: tapAction ?? DEFAULT_TAP_ACTION }, action: 'tap' };
}

export function fireTapAction(host: EventTarget, detail: HassActionDetail) {
  host.dispatchEvent(new CustomEvent('hass-action', { detail, bubbles: true, composed: true }));
}

/**
 * Pointer/keyboard handling for one clickable bar. Every event is stopped so the Tile card's
 * own action doesn't fire too. `getTap` is resolved lazily on each press, so it always sees the
 * current config/state; returning undefined means the bar isn't clickable.
 */
export class TapHandler {
  private pressed = false;

  constructor(private readonly getTap: () => (() => void) | undefined) {}

  onPointerDown = (ev: PointerEvent) => {
    ev.stopPropagation();
    if (ev.button === 0) this.pressed = true;
  };

  onPointerUp = (ev: PointerEvent) => {
    ev.stopPropagation();
    if (!this.pressed) return;
    this.pressed = false;
    this.getTap()?.();
  };

  /** Moving off the bar or the browser taking over (scroll) cancels the press. */
  onPointerCancel = () => {
    this.pressed = false;
  };

  onClick = (ev: Event) => {
    ev.stopPropagation();
  };

  onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    const tap = this.getTap();
    if (!tap) return;
    ev.preventDefault();
    ev.stopPropagation();
    tap();
  };
}
