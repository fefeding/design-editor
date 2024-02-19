import { ItemType } from 'j-design-util';
import JElement from './element';
import { IJControllerItem, IJControllerComponent, IJBaseComponent } from '../constant/types';
export declare class JControllerItem extends JElement<HTMLDivElement> implements IJControllerItem {
    constructor(option: any);
    dir: ItemType | '';
    size: number;
    protected _isMoving: boolean;
    get isMoving(): boolean;
    set isMoving(v: boolean);
    dragStartPosition: {
        x: number;
        y: number;
    };
    onDragMove(event: MouseEvent): void;
    onDragStart(event: MouseEvent): void;
    onDragEnd(event: MouseEvent): void;
    resetCursor(rotation?: number): Promise<void>;
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
    get center(): {
        x: number;
        y: number;
    };
    createItem(id: any, option: any): JControllerItem;
    change(e: any): void;
    applyToTarget(): void;
    reset(isEditor?: boolean): void;
    bind(target: IJBaseComponent): void;
    unbind(target: IJBaseComponent): void;
}
