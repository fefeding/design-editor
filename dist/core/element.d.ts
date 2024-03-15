import EventEmiter from 'j-eventemitter';
import JEvent from '../core/event';
import JElementCssStyle from '../constant/styleMap';
import { IJElement, ITransform, IJEditor, IElementOption, IElementJSON } from '../constant/types';
import { JElementData } from '../constant/data';
/**
 * @public
 */
export default class JElement<T extends HTMLElement = HTMLElement> extends EventEmiter implements IJElement {
    constructor(option?: IElementOption<import("../constant/data").IJElementData>);
    initData(option: any): void;
    bindEvent(dom?: HTMLElement): void;
    protected _id: string;
    get id(): string;
    protected _type: string;
    get type(): string;
    private _children;
    get children(): IJElement<HTMLElement>[];
    protected _dom: T;
    get dom(): T;
    parent: IJElement | undefined;
    editor: IJEditor;
    event: JEvent;
    style: JElementCssStyle;
    data: JElementData;
    get className(): string;
    set className(v: string);
    get visible(): boolean;
    set visible(v: boolean);
    get bounds(): DOMRect;
    editable: boolean;
    transform: ITransform;
    get childrenMaxLevel(): number;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value?: string | number | undefined): any;
    move(dx: number, dy: number): void;
    childrenSort(): IJElement<HTMLElement>[];
    resize(w: any, h: any): void;
    addChild(child: IJElement | HTMLElement, parent?: IJElement): IJElement<HTMLElement>;
    remove(): void;
    removeChild(el: IJElement | HTMLElement): IJElement<HTMLElement>[];
    toJSON(props?: any[], ig?: (p: IJElement) => boolean): IElementJSON;
    toString(): string;
    toHtml(): string;
    dispose(): void;
}
