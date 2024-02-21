// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";
import JControllerComponent, { JControllerItem }  from "../../src/core/controller";
// import { nwse, ns }  from "../../src/constant/styleMap";
import JEditor from '../../src/editor';
import mock from "../fixtures/mock";

const {FontFaceMock} = mock();

describe('JControllerItem', () => {
  let JControllerInstance: JControllerItem;
  let editorMock;
  let eventMock;


  beforeAll(() => {
    editorMock = {
      view: {
        on: vi.fn()
      },
      dom: {}
    };

    eventMock = {
      stopPropagation: vi.fn(),
      preventDefault: vi.fn(),
      pageX: 10,
      pageY: 10,
      x: 10,
      y: 10
    };

    JControllerInstance = new JControllerItem({ editor: editorMock });
  });

  test('instance should be created', () => {
    expect(JControllerInstance).toBeInstanceOf(JControllerItem);
  });

  test('onDragStart function', () => {
    JControllerInstance.onDragStart(eventMock);
    expect(JControllerInstance.isMoving).toBe(true);
    expect(JControllerInstance.dragStartPosition).toEqual({ x: 10, y: 10 });
  });

  test('onDragEnd function', () => {
    JControllerInstance.onDragEnd(eventMock);
    expect(JControllerInstance.isMoving).toBe(false);
  });

  test('onDragMove function', () => {
    JControllerInstance.isMoving = true;
    JControllerInstance.on('change', (event) => {
      expect(event).toEqual(
        expect.objectContaining({
          dir: '',
          offX: 0,
          offY: 0,
          oldPosition: { x: 10, y: 10 },
          newPosition: { x: 10, y: 10 },
          event: eventMock
        })
      );
    });
    JControllerInstance.onDragMove(eventMock);
  });

  // test('resetCursor function', async() => {
  //   JControllerInstance.dir = 'l'; 
  //   await JControllerInstance.resetCursor(0);
  //   console.log(JControllerInstance.style.cursor, ns)
  //   expect(JControllerInstance.style.cursor).toMatch(ns);
  //   JControllerInstance.dir = 'lt'; 
  //   await JControllerInstance.resetCursor(Math.PI / 4);
  //   expect(JControllerInstance.style.cursor).toMatch(nwse);
  // });
});


describe("JControllerComponent", () => {

    let controller;

    beforeEach(() => {
        controller = new JControllerComponent({
            editor: new JEditor(),
            visible: false
          });
    })

    test("should be instantiated correctly", () => {
        expect(controller).toBeInstanceOf(JControllerComponent);
    });

    test("should call init on instanciation", () => {
        const spy = vi.spyOn(JControllerComponent.prototype, 'init');
        new JControllerComponent({
            editor: new JEditor(),
            visible: false
          });
        expect(spy).toHaveBeenCalled();
    });

    test("should call createItem and addItem correctly", () => {
        const spy = vi.spyOn(JControllerComponent.prototype, 'createItem');
        controller.createItem('id', {/* 配置选项 */ });
        expect(spy).toHaveBeenCalledWith('id', {/* 配置选项 */ });
    });

    test("should call applyToTarget correctly", () => {
        const spy = vi.spyOn(JControllerComponent.prototype, 'applyToTarget');
        controller.applyToTarget();
        expect(spy).toHaveBeenCalled();
    });

   
   // 对其他方法进行类似的测试
});