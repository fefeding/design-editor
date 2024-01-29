import { IJFonts, IJFontData } from '../constant/types';

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
        if(!this.font) this.font = new FontFace(this.family, this.url);
        const f = await this.font.load();
        document.fonts.add(f);// 生效
        return this;
    }
}


export default class JFonts implements IJFonts {
    constructor(fontSet = new Map<string, JFontData>()) {
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
            font = new JFontData(name, `url("${url}")`);
            this.fonts.set(name, font);
            return font.load();
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