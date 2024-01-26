import JElement from '../core/element';
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> {
    constructor(option: any);
    target: JElement<T>;
    get text(): string;
    set text(v: string);
    get html(): string;
    set html(v: string);
    private _selected;
    get selected(): boolean;
    set selected(v: boolean);
    setDomStyle(name: string, value: string): void;
    toJSON(props?: any[]): {
        children: any[];
    };
}
