// @vitest-environment happy-dom
import { expect, describe, test, beforeEach, afterEach, vi } from "vitest";
import JEvent from "../../src/core/event";


describe("JEvent class", () => {
  let event: JEvent;
  let target: HTMLElement;
  let handler: any;
  beforeEach(() => {
    target = document.createElement("div");
    handler = vi.fn();
    event = new JEvent(target);
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
  test(".removeEvent with event handler", () => {
    event.bindEvent("click", handler, false, target);
    event.removeEvent("click", handler, false, target);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
  test(".removeEvent only name", () => {
    event.bindEvent("click", handler, false, target);
    event.removeEvent("click");
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });

  
  test(".removeEvent 参数不同不会被删除", () => {
    event.bindEvent("mousedown", handler, false, target);
    event.removeEvent("mousedown", ()=>{});
    const mousedownEvent = new Event("mousedown");
    target.dispatchEvent(mousedownEvent);
    expect(handler).toHaveBeenCalled();
    
    event.removeEvent("mousedown", ()=>{}, true);
    const mousedownEvent2 = new Event("mousedown");
    target.dispatchEvent(mousedownEvent2);
    expect(handler).toHaveBeenCalled();
  });

  
  test(".dispose 移除所有事件", () => {
    event.bindEvent("click", handler, false, target);
    event.dispose();
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
});
