import JBase from './components/base';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JController from './components/controller';
export default class JEditor extends JBase {
    constructor(option?: any);
    init(option: any): void;
    view: JElement<HTMLDivElement>;
    shapes: {
        [key: string]: typeof JBase;
    };
    ElementController: JController;
    get children(): JElement<HTMLElement>[];
    get selectedElements(): Array<JBase>;
    bindEvent(dom?: HTMLElement): void;
    select(el: JBase): void;
    resize(width?: string | number, height?: string | number): void;
    addChild(child: JBase): JElement<HTMLElement>;
    removeChild(el: JElement | HTMLElement): JElement<HTMLElement>[];
    toEditorPosition(pos: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    clear(): void;
    scale(x: any, y?: any): void;
    regShape(name: any, shape: any): void;
    createShape(type: any, option?: {}): any;
    createImage(url: any, option?: {}): any;
    fromJSON(data: any): void;
}
export { JEditor, JImage, JText, };
