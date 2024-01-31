// @vitest-environment happy-dom
import {
  expect,
  describe,
  test,
  beforeEach,
  beforeAll,
  afterEach,
  vi,
} from "vitest";
import { Window } from "happy-dom";
import Transform from "../../src/constant/transform";

describe("Transform", () => {
  let window;
  let document;
  let element;

  beforeEach(() => {
    window = new Window({ url: "https://localhost:8080" });
    document = window.document;
    document.body.innerHTML = '<!DOCTYPE html><div id="test"></div>';
    element = document.getElementById("test");
  });

  test("should initialize and apply options", () => {
    const trans = new Transform({ translateX: 50, translateY: 100 });

    expect(trans.translateX).toBe(50);
    expect(trans.translateY).toBe(100);
    expect(trans.rotateX).toBe(0); // 由于没有在构造函数中指定，应该是默认值
  });

  test("should handle transformations correctly", () => {
    const trans = new Transform({
      translateX: "20%",
      translateY: "30%",
      rotateX: 45,
    });

    expect(trans.translateXString).toBe("translateX(20%)");
    expect(trans.translateYString).toBe("translateY(30%)");
    expect(trans.rotateXString).toBe("rotateX(45rad)");
    // 继续测试其他转换属性

    const expectedJSON = {
      translateX: "20%",
      translateY: "30%",
      translateZ: 0,
      rotateX: 45,
      rotateY: 0,
      rotateZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      skewX: 0,
      skewY: 0,
    };
    expect(trans.toJSON()).toEqual(expectedJSON);
  });

  test("should apply transformations to target", () => {
    // 设定一个模拟对象模拟css操作
    element.css = vi.fn();

    const trans = new Transform({
      translateX: "20%",
      translateY: "30%",
      scaleX: 2,
    });
    trans.bind({
      target: element,
      watchProps: ["translateX", "translateY", "scaleX"],
    });

    // 元素的transform属性应该被改变
    expect(element.css).toHaveBeenCalledWith(
      "transform",
      "translateX(20%) translateY(30%) scaleX(2)"
    );

    trans.translateX = "50%";
    trans.apply();
    expect(element.css).toHaveBeenCalledWith(
      "transform",
      "translateX(50%) translateY(30%) scaleX(2)"
    );
  });

  test("should unbind correctly from target", () => {
    const target = {
      target: element,
      watchProps: ["translateX", "translateY", "scaleX"],
    };
    const trans = new Transform();
    trans.bind(target);

    expect(trans.targets.length).toBe(1);

    trans.unbind(target);
    expect(trans.targets.length).toBe(0);
  });
});
