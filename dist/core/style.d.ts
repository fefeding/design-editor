import JElementStyleMap from '../constant/styleMap';
export default class JElementStyle extends JElementStyleMap {
    constructor(option?: JElementStyleMap);
    get names(): string[];
    apply(data: JElementStyleMap, target?: CSSStyleDeclaration | JElementStyleMap): JElementStyleMap | CSSStyleDeclaration;
    applyTo(element: HTMLElement): void;
}
