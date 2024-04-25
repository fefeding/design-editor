import EventEmiter from 'j-eventemitter';
import JEvent from '../core/event';
import JElementCssStyle from '../constant/styleMap';
import { IJElement, ITransform, IJEditor, IElementOption, IElementJSON } from '../constant/types';
import { JElementData } from '../constant/data';
import { JDomElement, StringKeyValue } from '../constant/elementTypes';
/**
 * @public
 */
export default class JElement<T extends JDomElement = JDomElement> extends EventEmiter implements IJElement {
    constructor(option?: IElementOption<import("../constant/data").IJElementData>);
    initData(option: any): void;
    bindEvent(dom?: JDomElement): void;
    protected _id: string;
    get id(): string;
    get name(): string;
    set name(v: string);
    protected _option: any;
    get option(): any;
    protected _type: string;
    get type(): string;
    protected _children: IJElement<JDomElement>[];
    get children(): IJElement<JDomElement>[];
    protected _dom: T;
    get dom(): T;
    /**
     * 当前组件new指向的class，可用于复制
     */
    protected componentType: any;
    /**
     * dom上的附加属性
     */
    attributes: StringKeyValue;
    parent: IJElement | undefined;
    editor: IJEditor;
    event: JEvent;
    style: JElementCssStyle;
    data: JElementData;
    get className(): string;
    set className(v: string);
    get visible(): boolean;
    set visible(v: boolean);
    get bounds(): {
        height: number;
        width: number;
        x: number;
        y: number;
    };
    editable: boolean;
    transform: ITransform;
    get childrenMaxLevel(): number;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value?: string | number | undefined): any;
    move(dx: number, dy: number): void;
    childrenSort(): IJElement<JDomElement>[];
    resize(w: any, h: any): void;
    addChild(child: IJElement | Element, parent?: IJElement): IJElement<JDomElement>;
    remove(): void;
    removeChild(el: IJElement | Element): void;
    getChild(id: string): IJElement | undefined;
    /**
     * 复制当前组件
     * @returns 当前组件同类型副本
     */
    clone(): IJElement;
    toJSON(props?: any[], ig?: (p: IJElement) => boolean): IElementJSON;
    toString(): string;
    toHtml(): string;
    dispose(): void;
}
