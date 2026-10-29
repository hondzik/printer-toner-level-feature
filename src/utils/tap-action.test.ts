import { describe, expect, it, vi } from 'vitest';
import { buildTapAction, DEFAULT_TAP_ACTION, fireTapAction, isTapEnabled, TapHandler } from './tap-action';

function pointerEvent(button = 0) {
  return { button, stopPropagation: vi.fn() } as unknown as PointerEvent;
}

function keyEvent(key: string) {
  return { key, preventDefault: vi.fn(), stopPropagation: vi.fn() } as unknown as KeyboardEvent;
}

describe('isTapEnabled', () => {
  it('is disabled by default and for none', () => {
    expect(isTapEnabled(undefined)).toBe(false);
    expect(isTapEnabled({ action: 'none' })).toBe(false);
  });

  it('is enabled for any other action', () => {
    expect(isTapEnabled({ action: 'more-info' })).toBe(true);
    expect(isTapEnabled({ action: 'navigate', navigation_path: '/x' })).toBe(true);
  });
});

describe('buildTapAction', () => {
  it('falls back to the none action', () => {
    expect(buildTapAction('sensor.a', undefined)).toEqual({ config: { entity: 'sensor.a', tap_action: DEFAULT_TAP_ACTION }, action: 'tap' });
  });

  it('passes a custom tap action through', () => {
    const tap = { action: 'navigate', navigation_path: '/energy' };
    expect(buildTapAction('sensor.a', tap).config.tap_action).toBe(tap);
  });
});

describe('fireTapAction', () => {
  it('dispatches a bubbling, composed hass-action event with the detail', () => {
    const host = new EventTarget();
    const listener = vi.fn();
    host.addEventListener('hass-action', listener);
    const detail = buildTapAction('sensor.a', { action: 'more-info' });
    fireTapAction(host, detail);
    const ev = listener.mock.calls[0][0] as CustomEvent;
    expect(ev.detail).toBe(detail);
    expect(ev.bubbles).toBe(true);
    expect(ev.composed).toBe(true);
  });
});

describe('TapHandler', () => {
  it('taps on pointer up after a primary-button pointer down and stops propagation', () => {
    const tap = vi.fn();
    const handler = new TapHandler(() => tap);
    const down = pointerEvent();
    const up = pointerEvent();
    handler.onPointerDown(down);
    handler.onPointerUp(up);
    expect(tap).toHaveBeenCalledTimes(1);
    expect(down.stopPropagation).toHaveBeenCalled();
    expect(up.stopPropagation).toHaveBeenCalled();
  });

  it('ignores a pointer up without a matching pointer down, a secondary button and a cancelled press', () => {
    const tap = vi.fn();
    const handler = new TapHandler(() => tap);
    handler.onPointerUp(pointerEvent());
    handler.onPointerDown(pointerEvent(2));
    handler.onPointerUp(pointerEvent());
    handler.onPointerDown(pointerEvent());
    handler.onPointerCancel();
    handler.onPointerUp(pointerEvent());
    expect(tap).not.toHaveBeenCalled();
  });

  it('does nothing when the bar is not clickable', () => {
    const handler = new TapHandler(() => undefined);
    handler.onPointerDown(pointerEvent());
    expect(() => handler.onPointerUp(pointerEvent())).not.toThrow();
    const ev = keyEvent('Enter');
    handler.onKeyDown(ev);
    expect(ev.preventDefault).not.toHaveBeenCalled();
  });

  it('taps on Enter and Space but not on other keys', () => {
    const tap = vi.fn();
    const handler = new TapHandler(() => tap);
    const enter = keyEvent('Enter');
    handler.onKeyDown(enter);
    handler.onKeyDown(keyEvent(' '));
    handler.onKeyDown(keyEvent('a'));
    expect(tap).toHaveBeenCalledTimes(2);
    expect(enter.preventDefault).toHaveBeenCalled();
    expect(enter.stopPropagation).toHaveBeenCalled();
  });

  it('stops click propagation so the Tile card action does not fire', () => {
    const handler = new TapHandler(() => undefined);
    const ev = { stopPropagation: vi.fn() } as unknown as Event;
    handler.onClick(ev);
    expect(ev.stopPropagation).toHaveBeenCalled();
  });
});
