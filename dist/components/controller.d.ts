import JElement from '../core/element';
export declare class JControllerItem extends JElement<HTMLDivElement> {
    constructor(option: any);
    dir: string;
    size: number;
    editor: JElement;
}
export default class JControllerComponent extends JControllerItem {
    constructor(option: any);
    init(option: any): void;
    items: JControllerItem[];
    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    hoverItem: JControllerItem;
    dragStartPosition: {
        x: number;
        y: number;
    };
    createItem(id: any, option: any): JControllerItem;
    bind(target: JElement): void;
}
