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
import JText from "../../src/components/text";
import JEditor from '../../src/editor';
import mock from "../fixtures/mock";

const {FontFaceMock} = mock();



describe("JText", () => {
  let text;
  let mockEditElement;


  beforeEach(() => {
    mockEditElement = new JEditor();

    text = new JText({
      editor: mockEditElement
    });

  });

  afterEach(()=> {
    vi.clearAllMocks();
  });

  test("should create instance and load text", () => {
    expect(text).toBeDefined();
    expect(text.target.dom.innerText).toEqual("");
  });

  test("should set and get text", () => {
    text.data.text = "test";
    expect(text.target.dom.innerText).toEqual("test");
  });

  test("should edit text", () => {
    text.editable = true;
    text.data.text = "test";
    text.edit();
    console.log('mockEditElement.dom', mockEditElement.dom.value)
    expect(mockEditElement.textEditElement.dom.value).toEqual("test");
    // expect(mockEditElement.textEditElement.attr).toHaveBeenCalledWith("data-target", text.id);
    // console.log('mockEditElement.textEditElement.dom.style', mockEditElement.textEditElement.dom.style)
    // expect(mockEditElement.textEditElement.dom.style).toMatchObject({
    //   width: expect.any(String),
    //   height: expect.any(String),
    //   top: text.data.top,
    //   left: text.data.left,
    //   fontSize: text.style.fontSize,
    //   fontFamily: text.style.fontFamily,
    //   fontWeight: text.style.fontWeight,
    //   display: "inline-block",
    // });
    // expect(mockEditElement.dom.focus).toHaveBeenCalled();
  });

  test("should close edit", async () => {
    text.editable = true;
    text.edit();
    text.closeEdit();
    expect(mockEditElement.textEditElement.dom.value).toEqual("");
    expect(mockEditElement.textEditElement.visible).toBeFalsy();
  });


  // test("should not edit if editable is false", async () => {
  //   text.editable = false;
  //   text.edit();
  //   expect(mockEditElement.textEditElement.dom.focus).not.toHaveBeenCalled();
  // });

  test("should serialize to JSON", () => {
    text.data.text = "test";
    const json = text.toJSON();
    expect(json).toBeDefined();
    expect(json.data.text).toEqual("test");
  });
});
