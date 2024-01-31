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
import JEditor from "../src/editor";
import { editorData, imageChild } from "./fixtures/editor.data";

describe("JEditor", () => {
  let window;
  let document;
  let element;
  let option;
  let editor;
  let child;

  beforeEach(() => {
    window = new Window({ url: "https://localhost:8080" });
    document = window.document;
    document.body.innerHTML = '<!DOCTYPE html><div id="test"></div>';
    element = document.getElementById("test");
    option = {
      container: element,
      style: { containerBackgroundColor: "blue" },
    };

    editor = new JEditor(option);
    child = editor.createShape("text", {
      data: {
        height: "auto",
        left: 400,
        top: 200,
        width: "auto",
        text: "请输入文本",
      },
    });
  });

  test("should init the editor correctly", () => {
    expect(editor.view).toBeDefined(); // 确保view已经设置
    expect(editor.dom.style.backgroundColor).toBe("blue"); // 检测初始化背景颜色
  });

  test("should correctly handle addChild and removeChild", () => {
    // 初始时editor.children.length不为0
    const originLen = editor.children.length;
    console.log("editor.children", editor.children.length);
    editor.addChild(child);
    expect(editor.children.length).toBe(originLen + 1);
    editor.removeChild(child);
    expect(editor.children.length).toBe(originLen);
  });

  test("should correctly handle selecting elements", () => {
    editor.addChild(child);
    child.selected = true;

    const selected = editor.selectedElements;
    expect(selected[0]).toBe(child);
  });

  test("should correctly handle scale and transformation", () => {
    editor.scale(2, 3);
    expect(editor.transform.scaleX).toBe(2);
    expect(editor.transform.scaleY).toBe(3);
  });

  test("should create shapes correctly", () => {
    const mockShape = vi.fn();

    editor.regShape("mock", mockShape);
    // 添加相应的模拟行为，如果需要
    const expectedOption = {
      something: "something",
      editor: editor,
      type: "mock",
    };
    editor.createShape("mock", { something: "something" });

    // 请在此处做适当的断言，确保mockShape 构造函数已被用正确的参数调用。
    expect(mockShape).toBeCalledWith(expectedOption);
  });

  test("should handle fromJSON correctly", () => {
    const editor = new JEditor(option);

    // 并添加适当的模拟行为和断言
    vi.spyOn(editor, "clear");
    vi.spyOn(editor, "resize");
    vi.spyOn(editor, "createShape")
    vi.spyOn(editor, "addChild");
    editor.fromJSON(editorData);

    expect(editor.target.dom.style.backgroundColor).toBe("red");
    expect(editor.clear).toBeCalled();
    expect(editor.resize).toBeCalled();
    expect(editor.createShape).toBeCalledWith(imageChild.type, imageChild);
    expect(editor.addChild).toHaveBeenCalledTimes(1); // 1个children
  });
});
