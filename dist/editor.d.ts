import { Point, IJFonts } from 'j-design-util';
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import { IJElement, IJEditor, IJControllerComponent, IJBaseComponent, IElementOption, IEditorOption, ITextOption, IImageOption } from './constant/types';
/**
 * @public
 */
export default class JEditor extends JBase implements IJEditor {
    constructor(option?: IEditorOption);
    init(option: IEditorOption): void;
    /**
     * 类型名称
     */
    get typeName(): string;
    view: JElement<HTMLDivElement>;
    protected shapes: Map<string, IJBaseComponent<import("./constant/elementTypes").JDomElement>>;
    elementController: IJControllerComponent;
    fonts: IJFonts;
    get children(): IJElement<import("./constant/elementTypes").JDomElement>[];
    get selectedElements(): Array<JBase>;
    bindEvent(dom?: HTMLElement): void;
    select(el: IJBaseComponent, event?: MouseEvent): boolean;
    resize(width?: string | number, height?: string | number): void;
    private sizeChange;
    addChild(child: IJBaseComponent): any;
    toEditorPosition(pos: Point, dom?: import("./constant/elementTypes").JDomElement): {
        x: number;
        y: number;
    };
    clear(): void;
    scale(x: number, y?: number): void;
    regShape(name: string | {
        [key: string]: IJBaseComponent;
    }, shape: IJBaseComponent): IJBaseComponent<import("./constant/elementTypes").JDomElement>;
    createShape(type: string | JElement, option?: IElementOption | ITextOption | IImageOption): any;
    fromJSON(data: any): void;
    /**
     * 生成编辑器对象
     * @param data
     * @param option
     */
    static create(option?: IEditorOption, data?: any): JEditor;
    /**
     * 渲染成html结构
     * @param container 容器
     * @param data
     */
    static renderDom(data: any, option?: IEditorOption): Promise<JEditor>;
}
export { JEditor, JImage, JText, };
