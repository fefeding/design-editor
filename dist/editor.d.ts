import { Point } from 'j-design-util';
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import { IJElement, IJEditor, IJControllerComponent, IJBaseComponent, IJFonts, IElementOption, IEditorOption, ITextOption, IImageOption } from './constant/types';
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
    protected shapes: Map<string, IJBaseComponent<HTMLElement>>;
    elementController: IJControllerComponent;
    fonts: IJFonts;
    get children(): IJElement<HTMLElement>[];
    get selectedElements(): Array<JBase>;
    bindEvent(dom?: HTMLElement): void;
    select(el: IJBaseComponent, event?: MouseEvent): void;
    resize(width?: string | number, height?: string | number): void;
    private sizeChange;
    addChild(child: IJBaseComponent): IJElement<HTMLElement>;
    toEditorPosition(pos: Point, dom?: HTMLElement): {
        x: number;
        y: number;
    };
    clear(): void;
    scale(x: number, y?: number): void;
    regShape(name: string | {
        [key: string]: IJBaseComponent;
    }, shape: IJBaseComponent): IJBaseComponent<HTMLElement>;
    createShape(type: string | JElement, option?: IElementOption | ITextOption | IImageOption): any;
    fromJSON(data: any): void;
    /**
     * 渲染成html结构
     * @param container 容器
     * @param data
     */
    static renderDom(data: any, option?: IEditorOption): Promise<unknown>;
}
export { JEditor, JImage, JText, };
