import JElement from '../core/element';
import { IJControllerItem, IJControllerComponent, IJBaseComponent, IJEditor } from '../constant/types';
export declare class JControllerItem extends JElement<HTMLDivElement> implements IJControllerItem {
    constructor(option: any);
    dir: string;
    size: number;
    editor: IJEditor;
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
export default class JControllerComponent extends JControllerItem implements IJControllerComponent {
    constructor(option: any);
    init(option: any): void;
    items: JControllerItem[];
    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    target: IJBaseComponent;
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
    bind(target: IJBaseComponent): void;
    unbind(target: IJBaseComponent): void;
}
