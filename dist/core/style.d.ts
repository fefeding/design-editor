import JElementStyleMap from '../constant/styleMap';
export default class JElementStyle extends JElementStyleMap {
    constructor(option?: JElementStyleMap);
    get names(): string[];
    apply(data: JElementStyleMap, target?: CSSStyleDeclaration | JElementStyle): JElementStyle | CSSStyleDeclaration;
    applyTo(element: HTMLElement): void;
    setStyle(name: any, value: any): void;
    toJSON(): JElementStyleMap;
    static createProxy(style?: any): JElementStyle;
}
