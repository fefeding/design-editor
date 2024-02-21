import { Point, ItemType } from 'j-design-util';
import JElementCssStyle, { IJElementStyleDeclaration } from './styleMap';
import { JElementData, JTextData, JImageData, IJElementData, IJTexteData, IJImageData, IJFontData, JSvgData, IJSvgData } from './data';
import type EventEmitter from 'j-eventemitter';
export { EventEmitter, JElementCssStyle, type IJElementStyleDeclaration };
/**
 * 字体对象接口
 * @public
 */
export interface IJFontFace extends IJFontData {
    /**
     * 获取字体状态
     */
    get status(): FontFaceLoadStatus;
    /**
     * 加载字体
     * @returns - Promise，表示加载字体的操作
     */
    load(): Promise<IJFontFace>;
    /**
     * 将字体转换为HTML字符串
     * @returns - 字体的HTML表示
     */
    toHtml(): string;
}
/**
 * 字体管理接口
 * @public
 */
export interface IJFonts extends EventEmitter {
    /**
     * 所有的字体，按名称存储
     */
    fonts: Map<string, IJFontFace>;
    /**
     * 检查指定的字体是否已加载
     * @param name - 字体名称
     * @returns - 如果字体已经加载，返回true，否则返回false
     */
    check(name: string): boolean;
    /**
     * 加载指定的字体
     * @param name - 字体名称
     * @param url - 字体的URL
     * @returns - Promise，表示加载字体的操作
     */
    load(name: string, url?: string): Promise<IJFontFace>;
}
/**
 * 元素参数接口
 * @public
 */
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
/**
 * 文本选项接口
 * @public
 */
export interface ITextOption extends IElementOption<IJTexteData> {
    /**
     * 数据类型，应为JTextData
     */
    dataType?: JTextData;
}
/**
 * 图片选项接口
 * @public
 */
export interface IImageOption extends IElementOption<IJImageData> {
    /**
     * 数据类型，应为JImageData
     */
    dataType?: JImageData;
}
/**
 * @public
 */
export interface ISvgOption extends IElementOption<IJSvgData> {
    dataType?: JSvgData;
}
export interface IControllerItemOption extends IElementOption {
    dir?: ItemType | string;
    size?: number;
}
export interface IControllerStyle extends IJElementStyleDeclaration {
    itemStyle?: IJElementStyleDeclaration;
    markingLineStyle?: IJElementStyleDeclaration;
    tipStyle?: IJElementStyleDeclaration;
}
export interface IControllerOption extends IControllerItemOption {
    style?: IControllerStyle;
    itemSize?: number;
    tipVisible?: boolean;
}
/**
 * 编辑器选项接口
 * @public
 */
export interface IEditorOption {
    /**
     * 容器Div。可为一个html元素或一个选择器字符串。
     */
    container?: string | HTMLElement;
    /**
     * 样式选项。
     */
    style?: IJElementStyleDeclaration & {
        containerBackgroundColor?: string;
    };
    /**
     * 初始化支持的字体
     */
    fonts?: Array<IJFontData> | {
        [key: string]: IJFontData;
    };
    /**
     * 编辑器是否可以被编辑
     */
    editable?: boolean;
    /**
     * 初始属性值
     */
    data?: {
        width?: string | number;
        height?: string | number;
    };
    /**
     * 控制器选项
     */
    controllerOption?: IControllerOption;
}
/**
 * 样式转换接口，用于描述元素在空间中的定位、旋转和缩放。
 * @public
 */
export interface IStyleTransform {
    /**
     * 沿 X 轴平移的值
     */
    translateX?: string | number;
    /**
     * 沿 Y 轴平移的值
     */
    translateY?: string | number;
    /**
     * 沿 Z 轴平移的值
     */
    translateZ?: string | number;
    /**
     * 绕 X 轴旋转的值
     */
    rotateX?: number;
    /**
     * 绕 Y 轴旋转的值
     */
    rotateY?: number;
    /**
     * 绕 Z 轴旋转的值
     */
    rotateZ?: number;
    /**
     * 沿 X 轴的缩放值
     */
    scaleX?: number;
    /**
     * 沿 Y 轴的缩放值
     */
    scaleY?: number;
    /**
     * 沿 Z 轴的缩放值
     */
    scaleZ?: number;
    /**
     * 沿 X 轴的倾斜值
     */
    skewX?: number;
    /**
     * 沿 Y 轴的倾斜值
     */
    skewY?: number;
}
/**
 * 变换描述接口，继承自 IStyleTransform 和 EventEmitter
 * @public
 */
export interface ITransform extends IStyleTransform, EventEmitter {
    from(data: IStyleTransform): void;
    apply(target?: TransformWatcher | Array<TransformWatcher>): void;
    bind(target: TransformWatcher): void;
    unbind(target: TransformWatcher): void;
    toString(watchProps: Array<string> | undefined): string;
    toJSON(): IStyleTransform;
}
/**
 * Represents a transform watcher.
 * @public
 */
export interface TransformWatcher {
    target: any;
    watchProps?: Array<string>;
}
/**
 * Provides methods for managing events.
 * @public
 */
export interface IJEvent {
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    target: HTMLElement;
    /**
     * 绑定事件到html对象
     * @param name - 事件名称
     * @param  fun - 事件委托
     * @returns   返回当前绑定
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): any;
    /**
     * 从对象中移除事件到
     * @param name - 事件名称
     * @param  fun - 事件委托
     */
    off(name: string, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
}
/**
 * Represents a generic element.
 * @typeParam T - The type of the HTML element.
 * @public
 */
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
    get childrenMaxLevel(): number;
    editable: boolean;
    visible: boolean;
    setDomStyle(name: string, value: string): void;
    css(name: string | Object, value?: string | number): this;
    attr(name: string, value?: string | number | undefined): any;
    move(dx: any, dy: any): void;
    childrenSort(): Array<IJElement>;
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
/**
 * Represents a base component.
 * @typeParam T - The type of the HTML element.
 * @public
 */
export interface IJBaseComponent<T extends HTMLElement = HTMLElement> extends IJElement<T> {
    target: IJElement<T>;
    get selected(): boolean;
    set selected(v: boolean);
    setLevel(level: number | 'next' | 'pre' | 'top' | 'bottom'): void;
}
/**
 * 文字组件接口.
 * @public
 */
export interface IJTextComponent extends IJBaseComponent<HTMLDivElement> {
    /**该文字组件的数据 */
    data: JTextData;
}
/**
 * 图像组件接口.
 * 继承于 IJBaseComponent<HTMLImageElement>
 * @public
 */
export interface IJImageComponent extends IJBaseComponent<HTMLImageElement> {
    data: JImageData;
}
/**
 * @public
 */
export interface IJSvgComponent extends IJBaseComponent<HTMLDivElement> {
    data: JSvgData;
}
/**
 * 控制器项接口.
 * 继承于 IJElement<HTMLDivElement>
 * 包含了一系列属性以及和拖拽相关的方法.
 * @public
 */
export interface IJControllerItem extends IJElement<HTMLDivElement> {
    /**控制器的方向（在画布中的位置） */
    dir: ItemType | string;
    /**控制器的尺寸 */
    size: number;
    /**控制器关联的编辑器 */
    editor: IJEditor;
    get isMoving(): boolean;
    set isMoving(v: boolean);
    /**拖拽开始的位置 */
    dragStartPosition: {
        x: number;
        y: number;
    };
    /**处理拖拽移动的方法 */
    onDragMove(event: MouseEvent, pos?: Point): void;
    /**处理拖拽开始的方法 */
    onDragStart(event: MouseEvent, pos?: Point): void;
    /**处理拖拽结束的方法 */
    onDragEnd(event: MouseEvent, pos?: Point): void;
    /**重置光标 */
    resetCursor(rotation: number): void;
}
/**
 * 控制器组件接口.
 * 继承于 IJControllerItem
 * 包含旋转控制器、偏移控制器等
 * @public
 */
export interface IJControllerComponent extends IJControllerItem {
    /**控制器项的集合 */
    items: IJControllerItem[];
    /**控制旋转的控制器项 */
    rotateItem: IJControllerItem;
    /**控制偏移的控制器项 */
    skewItem: IJControllerItem;
    /**控制器关联的目标元素 */
    target: IJElement | undefined;
    /**控制器的内边距大小 */
    paddingSize: number;
    /**是否是编辑态 */
    isEditor: boolean;
    /**创建一个新的控制器项 */
    createItem(id: any, option: any): IJControllerItem;
    /**控制器变更的处理方法 */
    change(e: any): void;
    /**控制器应用到目标的方法*/
    applyToTarget(): void;
    /**重置控制器 */
    reset(isEditor?: boolean): void;
    /**绑定目标元素 */
    bind(target: IJElement): void;
    /**解绑目标元素 */
    unbind(target: IJElement): void;
}
/**
 * 编辑器接口.
 * 继承于 IJBaseComponent
 * 提供一系列和编辑器相关的方法.

 * @public
 */
export interface IJEditor extends IJBaseComponent {
    /** 查看元素属性 */
    view: IJElement<HTMLDivElement>;
    /** 文本编辑元素 */
    textEditElement?: IJElement<HTMLTextAreaElement>;
    /** @remarks 字体管理器 */
    fonts: IJFonts;
    /** 获取选定的元素 */
    get selectedElements(): Array<IJBaseComponent>;
    /**
     * 控制器
     */
    elementController: IJControllerComponent;
    /** 绑定事件 */
    bindEvent(dom?: HTMLElement): void;
    /** 选择元素 */
    select(el: IJBaseComponent): void;
    /**
     * @remarks 通过ID获取子元素
     */
    getChild(id: string): IJElement | undefined;
    /** 尺寸调整 */
    resize(width?: string | number, height?: string | number): void;
    /**
     * @remarks 转换至编辑器的位置
     */
    /**转换至编辑器的位置 */
    toEditorPosition(pos: Point, dom?: HTMLElement): Point;
    /**清空编辑器 */
    clear(): void;
    scale(x: any, y?: any): void;
    /**注册组件 */
    regShape(name: string, shape: IJBaseComponent): IJBaseComponent;
    /**创建组件 */
    createShape(type: any, option?: {}): any;
    /**从JSON导入到编辑器 */
    fromJSON(data: any): void;
}
