import { IJFonts, IJFontData } from '../constant/types';
import EventEmiter from '../constant/eventEmitter';
export declare class JFontData implements IJFontData {
    constructor(family: string, url?: string);
    family: string;
    url: string;
    label: string;
    font?: FontFace;
    get status(): FontFaceLoadStatus;
    load(url?: string): Promise<IJFontData>;
    toHtml(): string;
}
export default class JFonts extends EventEmiter implements IJFonts {
    constructor(fontSet?: Map<string, JFontData>);
    fonts: Map<string, IJFontData>;
    init(): void;
    load(name: string, url: string): Promise<IJFontData>;
    get(name: string): IJFontData | null;
    check(name: string): boolean;
}
