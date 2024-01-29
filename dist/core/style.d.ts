import JElementCssStyle, { JElementStyleDeclaration, JElementStyleProperty } from '../constant/styleMap';
export default class JElementStyle extends JElementCssStyle {
    constructor(option?: JElementStyleDeclaration);
    apply(data: JElementStyleDeclaration, target?: CSSStyleDeclaration | JElementStyleDeclaration): JElementStyleDeclaration | CSSStyleDeclaration;
    applyTo(element: HTMLElement): void;
    setStyle(name: any, value: any): void;
    refresh(): void;
    toJSON(): JElementStyleProperty;
    static createProxy(style?: any): JElementStyle;
}
