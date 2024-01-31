// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";
import JFonts, { JFontData }   from "../../src/core/fonts";
import mock from "../fixtures/mock";

const {FontFaceMock} = mock();

let fontDataInstance;
beforeAll(() => {
  fontDataInstance = new JFontData('Arial', 'https://example.com/arial.ttf');
});

describe('JFontData Class', () => {


  test('instance should be created', () => {
    expect(fontDataInstance).toBeInstanceOf(JFontData);
  });

  test('load function', async () => {
    const loadedFont = await fontDataInstance.load();
    expect(loadedFont.status).toEqual('loaded');
    expect(FontFaceMock).toHaveBeenCalledWith('Arial', 'url("https://example.com/arial.ttf")');
  });

  test('toHtml function', () => {
    expect(fontDataInstance.toHtml()).toEqual('@font-face {font-family: "Arial"; src: url("https://example.com/arial.ttf")}');
  });



});

describe('JFonts Class', () => {
  let jFontsInstance, mapInstance;

  beforeAll(() => {
    mapInstance = new Map();
    jFontsInstance = new JFonts(mapInstance);
  });

  test('instance should be created', () => {
    expect(jFontsInstance).toBeInstanceOf(JFonts);
  });

  test('load function', async () => {
    const loadedFont = await jFontsInstance.load('Arial2', 'https://example.com/arial.ttf');
    expect(loadedFont.status).toEqual('loaded');
    expect(jFontsInstance.fonts.has('Arial2')).toEqual(true);
  });

  test('get function', () => {
    const font = jFontsInstance.get('Arial');
    expect(font).toBeInstanceOf(JFontData);
  });

  test('check function', () => {
    const exist = jFontsInstance.check('Arial');
    expect(exist).toBe(true);
  });
});