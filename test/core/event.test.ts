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
  // test("getEventPosition should return correct position for mouse event", () => {
  //   const click = new MouseEvent("click", { clientX: 100, clientY: 100 });
  //   const position = event.getEventPosition(click);
  //   expect(position).toEqual(
  //     expect.objectContaining({
  //       x: expect.any(Number),
  //       y: expect.any(Number),
  //       pageX: expect.any(Number),
  //       pageY: expect.any(Number),
  //     })
  //   );
  // });
});
