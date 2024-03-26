import JElementCssStyle, { JElementStyleDeclaration, JElementStyleProperty, IJElementStyleDeclaration } from '../constant/styleMap';
export default class JElementStyle extends JElementCssStyle {
    constructor(option?: IJElementStyleDeclaration, maps?: Array<string>);
    styleSaveMap: any[];
    apply(data: IJElementStyleDeclaration, target?: CSSStyleDeclaration | JElementStyleDeclaration, maps?: Array<string>): JElementStyleDeclaration | CSSStyleDeclaration;
    applyTo(element: HTMLElement): void;
    setStyle(name: any, value: any): void;
    refresh(): void;
    toJSON(maps?: Array<string>): JElementStyleProperty;
    static createProxy(style?: any, maps?: any[]): JElementStyle;
}
