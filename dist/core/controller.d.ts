import { ItemType, ControllerCursorData } from 'j-design-util';
import JElement from './element';
import { IJControllerItem, IJControllerComponent, IJBaseComponent, IControllerOption, IControllerItemOption } from '../constant/types';
export declare class JControllerItem extends JElement<HTMLDivElement> implements IJControllerItem {
    constructor(option: IControllerItemOption);
    dir: ItemType | string;
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
    resetCursor(rotation?: number, data?: ControllerCursorData): Promise<void>;
}
export default class JControllerComponent extends JControllerItem implements IJControllerComponent {
    constructor(option: IControllerOption);
    init(option: IControllerOption): void;
    cursorData: ControllerCursorData;
    items: JControllerItem[];
    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    positionItem: JControllerItem | undefined;
    sizeItem: JControllerItem | undefined;
    target: IJBaseComponent | undefined;
    paddingSize: number;
    isEditor: boolean;
    private bindTargetPositionAndSizeHandler;
    get center(): {
        x: number;
        y: number;
    };
    createItem(id: string, option: IControllerItemOption): JControllerItem;
    change(e: any): void;
    applyToTarget(): void;
    move(dx: any, dy: any): void;
    reset(isEditor?: boolean): void;
    get isControling(): boolean;
    resetCursor(rotation?: number): Promise<void>;
    bind(target: IJBaseComponent): void;
    bindTargetPositionAndSize(): void;
    setTip(): void;
    unbind(target: IJBaseComponent): void;
}
