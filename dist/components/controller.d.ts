import JElement from '../core/element';
export declare class JControllerItem extends JElement<HTMLDivElement> {
    constructor(option: any);
    dir: string;
    size: number;
    editor: JElement;
    isMoving: boolean;
    dragStartPosition: {
        x: number;
        y: number;
    };
    onDragMove(event: MouseEvent): void;
    onDragStart(event: MouseEvent): void;
    onDragEnd(event: MouseEvent): void;
}
export default class JControllerComponent extends JControllerItem {
    constructor(option: any);
    init(option: any): void;
    items: JControllerItem[];
    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    hoverItem: JControllerItem;
    target: JElement;
    createItem(id: any, option: any): JControllerItem;
    bind(target: JElement): void;
    unbind(target: JElement): void;
}
