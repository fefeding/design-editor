import { IFilterManager } from '@fefeding/css-filters';
import { IElementOption, IJBaseComponent, IJElement } from '../constant/types';
import JElement from '../core/element';
import { JDomElement } from '../constant/elementTypes';
/**
 * @public
 */
export default class JBaseComponent<T extends JDomElement = JDomElement> extends JElement<T> implements IJBaseComponent {
    constructor(option?: IElementOption<import("..").IJElementData>);
    target: IJElement<T>;
    filters: IFilterManager;
    /**
     * 类型名称
     */
    get typeName(): string;
    /**
     * 是否支持移动
     */
    moveable: boolean;
    private _selected;
    get selected(): boolean;
    set selected(v: boolean);
    setLevel(level: number | 'next' | 'pre' | 'top' | 'bottom'): void;
    private getMyNextLevelChildren;
    private getMyPreLevelChildren;
    addChild(child: IJBaseComponent | IJElement | JDomElement): any;
    removeChild(el: IJElement | JDomElement): void;
    protected bindElementEvent(el: IJElement): void;
    getChild(id: string): IJElement | undefined;
    setDomStyle(name: string, value: string): void;
    toJSON(props?: any[]): import("../constant/types").IElementJSON;
}
