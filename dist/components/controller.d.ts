import JElement from '../core/element';
export declare class JControllerItem extends JElement<HTMLDivElement> {
    constructor(option: any);
    dir: string;
    size: number;
    editor: JElement;
    protected _isMoving: boolean;
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
export default class JControllerComponent extends JControllerItem {
    constructor(option: any);
    init(option: any): void;
    items: JControllerItem[];
    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    target: JElement;
    paddingSize: number;
    isEditor: boolean;
    createItem(id: any, option: any): JControllerItem;
    change(e: any): void;
    getRotateEventPosition(e: any): {
        offX: any;
        offY: any;
    };
    rotateChange(e: any, args: any): void;
    applyToTarget(): void;
    reset(isEditor?: boolean): void;
    bind(target: JElement): void;
    unbind(target: JElement): void;
}
