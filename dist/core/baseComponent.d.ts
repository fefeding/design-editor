import { IJBaseComponent, IJElement } from '../constant/types';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> implements IJBaseComponent {
    constructor(option?: any);
    target: IJElement<T>;
    private _selected;
    get selected(): boolean;
    set selected(v: boolean);
    setLevel(level: number | 'next' | 'pre' | 'top' | 'bottom'): void;
    private getMyNextLevelChildren;
    private getMyPreLevelChildren;
    setDomStyle(name: string, value: string): void;
    toJSON(props?: any[]): {
        children: any[];
    };
}
