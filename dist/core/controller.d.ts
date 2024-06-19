import { ItemType, ControllerCursorData, ChangeData } from '@fefeding/utils';
import JElement from './element';
import { IJControllerItem, IJControllerComponent, IJBaseComponent, IControllerOption, IControllerItemOption } from '../constant/types';
export declare class JControllerItem extends JElement<HTMLDivElement> implements IJControllerItem {
    constructor(option: IControllerItemOption);
    dir: ItemType | string;
    size: number;
    get option(): IControllerItemOption;
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
    /**
     * 改变大小时，是否保持宽高比
     */
    preserveRatio: boolean;
    init(option: IControllerOption): void;
    cursorData: ControllerCursorData;
    items: JControllerItem[];
    masks: HTMLElement[];
    rotateItem: JControllerItem;
    targetMoveItem: JControllerItem;
    targetScaleItem: JControllerItem;
    positionItem: JControllerItem | undefined;
    sizeItem: JControllerItem | undefined;
    target: IJBaseComponent | undefined;
    paddingSize: number;
    isEditor: boolean;
    private bindTargetPositionAndSizeHandler;
    get center(): import("@fefeding/utils").Point;
    createItem(id: string, option: IControllerItemOption): JControllerItem;
    initMasks(): boolean;
    change(e: any): void;
    checkPreserveRatio(arg: ChangeData): void;
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
