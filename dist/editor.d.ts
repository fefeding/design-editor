import JBase from './components/base';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JController from './components/controller';
export default class JEditor extends JBase {
    constructor(container: any, option?: {});
    init(option: any): void;
    shapes: {
        [key: string]: typeof JBase;
    };
    ElementController: JController;
    get width(): string | number;
    set width(v: string | number);
    get height(): string | number;
    set height(v: string | number);
    get left(): string | number;
    set left(v: string | number);
    get top(): string | number;
    set top(v: string | number);
    get children(): JElement<HTMLElement>[];
    get selectedElements(): Array<JBase>;
    select(el: JBase): void;
    resize(width?: string | number, height?: string | number): void;
    addChild(child: JBase): JElement<HTMLElement>;
    removeChild(el: JElement | HTMLElement): JElement<HTMLElement>[];
    clear(): void;
    scale(x: any, y?: any): void;
    regShape(name: any, shape: any): void;
    createShape(type: any, option?: {}): any;
    createImage(url: any, option?: {}): any;
    toImage(): Promise<void>;
    toJSON(): {
        width: string | number;
        height: string | number;
        children: any[];
    };
    toString(): string;
    fromJSON(data: any): void;
}
export { JEditor, JImage, JText, };
