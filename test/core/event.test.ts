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
  test("on should bind single event", () => {
    event.on("click", handler, false);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).toHaveBeenCalled();
  });
  test("on should bind multiple events", () => {
    event.on(["click", "mouseover"], handler, false);
    const clickEvent = new Event("click");
    const mouseoverEvent = new Event("mouseover");
    target.dispatchEvent(clickEvent);
    target.dispatchEvent(mouseoverEvent);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  test(".off 3个参数", () => {
    event.on("click", handler, false);
    event.off("click", handler, false);
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
  test(".off 1个参数", () => {
    event.on("click", handler, false);
    event.off("click");
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });

  
  test(".off 参数不同不会被删除", () => {
    event.on("mousedown", handler, false);
    event.off("mousedown", ()=>{});
    const mousedownEvent = new Event("mousedown");
    target.dispatchEvent(mousedownEvent);
    expect(handler).toHaveBeenCalled();
    
    event.off("mousedown", ()=>{}, true);
    const mousedownEvent2 = new Event("mousedown");
    target.dispatchEvent(mousedownEvent2);
    expect(handler).toHaveBeenCalled();
  });

  
  test(".dispose 移除所有事件", () => {
    event.on("click", handler, false);
    event.dispose();
    const clickEvent = new Event("click");
    target.dispatchEvent(clickEvent);
    expect(handler).not.toHaveBeenCalled();
  });
});
