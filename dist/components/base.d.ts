import JElement from '../core/element';
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> {
    constructor(option: any);
    init(option: any): void;
    target: JElement<T>;
    get text(): string;
    set text(v: string);
    get html(): string;
    set html(v: string);
    setDomStyle(name: string, value: string): void;
}
