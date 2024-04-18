import { IJElementData } from './data';
import { IStyleTransform } from './styleMap';
export declare type StringKeyValue = {
    [key: string]: string;
};
export declare type JDomElement = HTMLElement | SVGElement;
export declare type SvgLinearGradientDom = {
    id: string;
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
};
export declare type SvgRadialGradientDom = {
    id: string;
    cx?: string;
    cy?: string;
    r?: string;
    fx?: string;
    fy?: string;
};
export declare type SvgGradientStopDom = {
    offset?: string;
};
export type DomNodeType = 'div' | 'img' | 'span' | 'document' | 'page' | 'frame' | 'ellipse' | 'svg' | 'defs' | 'linearGradient' | 'radialGradient' | 'stop' | 'polygon' | 'mask' | 'rect' | 'line' | 'circle' | 'path' | 'g' | 'feOffset' | 'feBlend' | 'filter' | 'polyline' | 'filter';
export declare type DomNode = {
    id?: string;
    name?: string;
    type: DomNodeType;
    style: CSSStyleDeclaration;
    data: IJElementData;
    attributes?: StringKeyValue;
    isElement?: boolean;
    isMask?: boolean;
    transform?: IStyleTransform;
    visible?: boolean;
    preserveRatio?: boolean;
    text?: string;
    url?: string;
    children: DomNode[];
    backgroundImageUrl?: string;
    fill?: string;
} & SvgLinearGradientDom & SvgRadialGradientDom & SvgGradientStopDom;
