import JTransform from '../constant/transform';
import JElement from '../core/element';
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> {
    constructor(option: any);
    target: JElement<T>;
    transform: JTransform;
    get text(): string;
    set text(v: string);
    get html(): string;
    set html(v: string);
    setDomStyle(name: string, value: string): void;
}
