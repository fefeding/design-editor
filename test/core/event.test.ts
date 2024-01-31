// @vitest-environment happy-dom
import { expect, describe, test, beforeEach, afterEach, vi } from "vitest";
import JEvent from "../../src/core/event";


describe("JEvent class", () => {
  let event: JEvent;
  let target: HTMLElement;
  let handler: any;
  beforeEach(() => {
    event = new JEvent();
    target = document.createElement("div");
    handler = vi.fn();
    document.body.appendChild(target);
  });
  afterEach(() => {
    target.remove();
    handler.mockReset();
  });
  test("init should bind supported events", () => {
    event.init(handler, target);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).toHaveBeenCalled();
  });
  test("bindEvent should bind single event", () => {
    event.bindEvent("click", handler, false, target);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).toHaveBeenCalled();
  });
  test("bindEvent should bind multiple events", () => {
    event.bindEvent(["click", "mouseover"], handler, false, target);
    const clickEvent = new Event("click");
    const mouseoverEvent = new Event("mouseover");
    target.dispatchEvent(clickEvent);
    target.dispatchEvent(mouseoverEvent);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  test("removeEvent should remove event handler", () => {
    event.bindEvent("click", handler, false, target);
    event.removeEvent("click", handler, false, target);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
  test(".dispose 移除所有事件", () => {
    event.bindEvent("click", handler, false, target);
    event.dispose();
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
});
