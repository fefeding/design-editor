import { Point, ItemType, ControllerCursorData, IJFonts } from '@fefeding/utils';
import { IFilter, IFilterManager } from '@fefeding/css-filters';
import JElementCssStyle, { IJElementStyleDeclaration, IStyleTransform } from './styleMap';
import { JElementData, JTextData, JImageData, IJElementData, IJTexteData, IJImageData, IJFontData, JSvgData, IJSvgData } from './data';
import type EventEmitter from '@fefeding/eventemitter';
import type { JDomElement, StringKeyValue } from './elementTypes';
export { EventEmitter, JElementCssStyle, type IJElementStyleDeclaration };
/**
 * 元素参数接口
 * @public
 */
export interface IElementOption<T extends IJElementData = IJElementData> {
    id?: string;
    name?: string;
    nodeType?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    type?: string;
    editor?: IJEditor;
    transformWatchProps?: string[];
    dataType?: any;
    className?: string;
    style?: IJElementStyleDeclaration;
    visible?: boolean;
    editable?: boolean;
    /**
     * 是否支持移动
     */
    moveable?: boolean;
    data?: T;
    transform?: IStyleTransform;
    target?: IElementOption;
    /**
     * 子元素
     */
    children?: Array<IElementOption>;
    filters?: IFilter[];
    attributes?: StringKeyValue;
    /**
     * 是否保持宽高比
     */
    preserveRatio?: boolean;
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
    rotateStyle?: IJElementStyleDeclaration;
    markingLineStyle?: IJElementStyleDeclaration;
    tipStyle?: IJElementStyleDeclaration;
    skewStyle?: IJElementStyleDeclaration;
    moveStyle?: IJElementStyleDeclaration;
    scaleStyle?: IJElementStyleDeclaration;
}
export interface IControllerOption extends IControllerItemOption {
    style?: IControllerStyle;
    itemSize?: number;
    /**
     * 是否显示提示信息
     */
    tipVisible?: boolean;
    /**
     * 是否展示缩放操作杆
     */
    scaleVisible?: boolean;
    /**
     * 是否展示移动操作杆
     */
    moveVisible?: boolean;
    /**
     * 是否保持比例缩放
     */
    itemCursors?: ControllerCursorData;
    itemIcons?: {
        rotate?: string;
        skew?: string;
    };
}
/**
 * 编辑器选项接口
 * @public
 */
export interface IEditorOption extends IElementOption {
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
    init(handler: EventListenerOrEventListenerObject, target?: JDomElement): void;
    target: JDomElement;
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
export interface IElementJSON {
    data: any;
    children: Array<IElementJSON>;
    target?: IElementJSON;
}
/**
 * Represents a generic element.
 * @typeParam T - The type of the HTML element.
 * @public
 */
export interface IJElement<T extends JDomElement = JDomElement> extends EventEmitter {
    get id(): string;
    get type(): string;
    name: string;
    option: IElementOption;
    get children(): Array<IJElement<JDomElement>>;
    get dom(): T;
    parent: IJElement | undefined;
    editor: IJEditor;
    event: IJEvent;
    style: JElementCssStyle;
    data: JElementData;
    /**
     * dom上的附加属性
     */
    attributes: StringKeyValue;
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
    addChild(child: IJElement | JDomElement, parent?: IJElement): IJElement<JDomElement>;
    remove(): void;
    removeChild(el: IJElement | JDomElement): void;
    getChild(id: string): IJElement | undefined;
    /** 复制组件 */
    clone(): IJElement;
    clear(): void;
    toJSON(props?: any[], ig?: (p: IJElement) => boolean): IElementJSON;
    toString(): string;
    toHtml(): string;
    dispose(): void;
}
/**
 * Represents a base component.
 * @typeParam T - The type of the HTML element.
 * @public
 */
export interface IJBaseComponent<T extends JDomElement = JDomElement> extends IJElement<T> {
    target: IJElement<T>;
    /**
     * 类型名称
     */
    get typeName(): string;
    /**
     * 是否支持移动
     */
    moveable: boolean;
    get selected(): boolean;
    set selected(v: boolean);
    filters: IFilterManager;
    setLevel(level: number | 'next' | 'pre' | 'top' | 'bottom'): void;
}
/**
 * 文字组件接口.
 * @public
 */
export interface IJTextComponent extends IJBaseComponent<HTMLDivElement> {
    /**该文字组件的数据 */
    data: JTextData;
    /**
     * 编辑状态
     */
    contenteditable: boolean;
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
export interface IJSvgComponent extends IJBaseComponent<SVGElement> {
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
    targetMoveItem: IJControllerItem;
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
    bindEvent(dom?: JDomElement): void;
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
    toEditorPosition(pos: Point, dom?: JDomElement): Point;
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
