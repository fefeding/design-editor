import JElementCssStyle, { IJElementStyleDeclaration } from './styleMap';
import { JElementData, JTextData, JImageData, IJElementData, IJTexteData, IJImageData, IJFontData } from './data';
import EventEmitter from './eventEmitter';
export { IJElementStyleDeclaration };
export interface IJFontFace extends IJFontData {
    get status(): FontFaceLoadStatus;
    load(): Promise<IJFontFace>;
    toHtml(): string;
}
export interface IJFonts extends EventEmitter {
    fonts: Map<string, IJFontFace>;
    get(name: string): IJFontFace | null;
    check(name: string): boolean;
    load(name: string, url?: string): Promise<IJFontFace>;
}
export interface IElementOption<T extends IJElementData = IJElementData> {
    id?: string;
    nodeType?: keyof HTMLElementTagNameMap;
    type?: string;
    editor?: IJEditor;
    transformWatchProps?: string[];
    dataType?: JElementData;
    style?: IJElementStyleDeclaration;
    visible?: boolean;
    editable?: boolean;
    data?: T;
    transform?: IStyleTransform;
}
export interface ITextOption extends IElementOption<IJTexteData> {
    dataType?: JTextData;
}
export interface IImageOption extends IElementOption<IJImageData> {
    dataType?: JImageData;
}
export interface IEditorOption {
    container?: string | HTMLElement;
    style?: IJElementStyleDeclaration;
    fonts?: Array<IJFontFace>;
    editable?: boolean;
    data?: {
        width?: string | number;
        height?: string | number;
    };
}
export interface IStyleTransform {
    translateX?: string | number;
    translateY?: string | number;
    translateZ?: string | number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    scaleX?: number;
    scaleY?: number;
    scaleZ?: number;
    skewX?: number;
    skewY?: number;
}
export interface ITransform extends IStyleTransform, EventEmitter {
    from(data: IStyleTransform): void;
    apply(target?: TransformWatcher | Array<TransformWatcher>): void;
    bind(target: TransformWatcher): void;
    unbind(target: TransformWatcher): void;
    toString(watchProps: Array<string> | undefined): string;
    toJSON(): IStyleTransform;
}
export interface TransformWatcher {
    target: any;
    watchProps?: Array<string>;
}
export interface IJEvent {
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    target: HTMLElement;
    /**
     * 绑定事件到html对象
     *
     * @method on
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     * @returns {name, fun, target} 返回当前绑定
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): any;
    /**
     * 从对象中移除事件到
     *
     * @method off
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     */
    off(name: string, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): this;
}
export interface IJElement<T extends HTMLElement = HTMLElement> extends EventEmitter {
    get id(): string;
    get type(): string;
    get children(): IJElement<HTMLElement>[];
    get dom(): T;
    parent: IJElement | undefined;
    editor: IJEditor;
    event: IJEvent;
    style: JElementCssStyle;
    data: JElementData;
    get className(): string;
    set className(v: string);
    transform: ITransform;
    editable: boolean;
    visible: boolean;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value?: string | number | undefined): any;
    move(dx: any, dy: any): void;
    resize(w: any, h: any): void;
    addChild(child: IJElement | HTMLElement, parent?: IJElement): IJElement<HTMLElement>;
    remove(): void;
    removeChild(el: IJElement | HTMLElement): IJElement<HTMLElement>[];
    toJSON(props?: any[], ig?: (p: IJElement) => boolean): {
        children: any[];
    };
    toString(): string;
    toHtml(): string;
    dispose(): void;
}
export interface IJBaseComponent<T extends HTMLElement = HTMLElement> extends IJElement<T> {
    target: IJElement<T>;
    get selected(): boolean;
    set selected(v: boolean);
}
export interface IJTextComponent extends IJBaseComponent<HTMLDivElement> {
    data: JTextData;
}
export interface IJImageComponent extends IJBaseComponent<HTMLImageElement> {
    data: JImageData;
}
export interface IJControllerItem extends IJElement<HTMLDivElement> {
    dir: string;
    size: number;
    editor: IJEditor;
    get isMoving(): boolean;
    set isMoving(v: boolean);
    dragStartPosition: {
        x: number;
        y: number;
    };
    onDragMove(event: MouseEvent, pos?: {
        x: number;
        y: number;
    }): void;
    onDragStart(event: MouseEvent, pos?: {
        x: number;
        y: number;
    }): void;
    onDragEnd(event: MouseEvent, pos?: {
        x: number;
        y: number;
    }): void;
    resetCursor(rotation: number): void;
}
export interface IJControllerComponent extends IJControllerItem {
    items: IJControllerItem[];
    rotateItem: IJControllerItem;
    skewItem: IJControllerItem;
    target: IJElement;
    paddingSize: number;
    isEditor: boolean;
    createItem(id: any, option: any): IJControllerItem;
    change(e: any): void;
    getRotateEventPosition(e: any): {
        offX: any;
        offY: any;
    };
    rotateChange(e: any, args: any): void;
    applyToTarget(): void;
    reset(isEditor?: boolean): void;
    bind(target: IJElement): void;
    unbind(target: IJElement): void;
}
export interface IJEditor extends IJBaseComponent {
    view: IJElement<HTMLDivElement>;
    elementController: IJControllerComponent;
    textEditElement?: IJElement<HTMLTextAreaElement>;
    fonts: IJFonts;
    get selectedElements(): Array<IJBaseComponent>;
    bindEvent(dom?: HTMLElement): void;
    select(el: IJBaseComponent): void;
    getChild(id: string): IJElement | undefined;
    resize(width?: string | number, height?: string | number): void;
    toEditorPosition(pos: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    clear(): void;
    scale(x: any, y?: any): void;
    regShape(name: string, shape: IJBaseComponent): IJBaseComponent;
    createShape(type: any, option?: {}): any;
    fromJSON(data: any): void;
}
