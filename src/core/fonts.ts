import { IJFonts, IJFontData } from '../constant/types';
import EventEmiter from '../constant/eventEmitter';

export class JFontData implements IJFontData {
    constructor(family: string, url?: string) {
        this.family = family;
        this.url = url;
    }
    family: string;
    url: string;
    // 中文名
    label: string;   
    
    font?: FontFace;

    get status(): FontFaceLoadStatus {
        if(this.font) return this.font.status;
        return 'unloaded';
    }
    
    async load(url=this.url): Promise<IJFontData> {
        this.url = url || this.url;
        if(!this.font) this.font = new FontFace(this.family, `url("${this.url}")`);
        const f = await this.font.load();
        document.fonts.add(f);// 生效
        return this;
    }

    toHtml() {
        return `@font-face {font-family: "${this.family}"; src: url("${this.url}")}`;
    }
}


export default class JFonts extends EventEmiter implements IJFonts {
    constructor(fontSet = new Map<string, JFontData>()) {
        super();
        this.fonts = fontSet;
        this.init();
    }
    fonts: Map<string, IJFontData>;

    init()  {
        if(document.fonts) {
            const fonts = document.fonts.values();
            let font = fonts.next();
            while(font && font.done && font.value) {
                if(font.value) {
                    const f = new JFontData(font.value.family);
                    f.font = font.value;
                    this.fonts.set(f.family, f);
                }
                font = fonts.next();
            }
        }
    }


    // 加载字体
    async load(name: string, url: string): Promise<IJFontData> {
        let font = this.get(name);
        if(font) return font;
        else {
            font = new JFontData(name, url);
            this.fonts.set(name, font);
            const f = await font.load();
            this.emit('load', f);// 加载字本事件
            return f;
        }
    }

    // 获取已加载的字体
    get(name: string): IJFontData | null {
        if(this.fonts) {
            if(this.fonts.has(name)) return this.fonts.get(name);
        }
        return null;
    }

    // 检查加载的字体是否存在，存在则返回字体对象
    check(name: string): boolean {
        const font = this.get(name);
        return !!font;
    }

}