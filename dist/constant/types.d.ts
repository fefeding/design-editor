import JElementCssStyle from './styleMap';
import EventEmitter from 'eventemitter3';
export interface IJFontData {
    label: string;
    family: string;
    url: string;
    get status(): FontFaceLoadStatus;
    load(): Promise<IJFontData>;
}
export interface IJFonts {
    fonts: Map<string, IJFontData>;
    get(name: string): IJFontData | null;
    check(name: string): boolean;
    load(name: string, url: string): Promise<IJFontData>;
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
     * @method bindEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     * @returns {name, fun, target} 返回当前绑定
     */
    bindEvent(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): any;
    /**
     * 从对象中移除事件到
     *
     * @method removeEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     */
    removeEvent(name: string, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): this;
    /**
     * 获取元素事件触发的位置
     *
     * @method getEventPosition
     * @static
     * @param {eventArg} evt 当前触发事件的参数
     * @return {point} 事件触发的位置
     */
    getEventPosition(evt: MouseEvent, target?: any): {
        x: number;
        y: number;
        pageX: number;
        pageY: number;
        isTouch: boolean;
    };
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
    get x(): number | string;
    set x(v: number | string);
    get y(): number | string;
    set y(v: number | string);
    get top(): string | number;
    set top(v: string | number);
    get left(): string | number;
    set left(v: string | number);
    get right(): number | string;
    set right(v: number | string);
    get bottom(): number | string;
    set bottom(v: number | string);
    get width(): string | number;
    set width(v: string | number);
    get height(): string | number;
    set height(v: string | number);
    set rotation(v: number);
    get rotation(): number;
    set angle(v: number);
    get angle(): number;
    get visible(): boolean;
    set visible(v: boolean);
    get zIndex(): number;
    set zIndex(v: number);
    get className(): string;
    set className(v: string);
    transform: ITransform;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value: string | number | undefined): any;
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
}
export interface IJBaseComponent<T extends HTMLElement = HTMLElement> extends IJElement<T> {
    target: IJElement<T>;
    get selected(): boolean;
    set selected(v: boolean);
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
    fonts: IJFonts;
    get selectedElements(): Array<IJBaseComponent>;
    bindEvent(dom?: HTMLElement): void;
    select(el: IJBaseComponent): void;
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
    createImage(url: any, option?: {}): any;
    fromJSON(data: any): void;
}
