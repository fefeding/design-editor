import { IJFonts, IJFontData } from '../constant/types';
export declare class JFontData implements IJFontData {
    constructor(family: string, url?: string);
    family: string;
    url: string;
    label: string;
    font?: FontFace;
    get status(): FontFaceLoadStatus;
    load(url?: string): Promise<IJFontData>;
}
export default class JFonts implements IJFonts {
    constructor(fontSet?: Map<string, JFontData>);
    fonts: Map<string, IJFontData>;
    init(): void;
    load(name: string, url: string): Promise<IJFontData>;
    get(name: string): IJFontData | null;
    check(name: string): boolean;
}
