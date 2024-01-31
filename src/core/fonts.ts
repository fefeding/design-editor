import { IJFonts, IJFontFace } from '../constant/types';
import { IJFontData } from '../constant/data';
import EventEmiter from '../constant/eventEmitter';

export class JFontData implements IJFontFace {
    constructor(family: string, url?: string, font?: FontFace) {
        this.family = family;
        this.url = url;
        this.font = font;
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
    
    async load(url=this.url): Promise<IJFontFace> {
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
    constructor(fonts?: Array<IJFontData> | {[key:string]: IJFontData}) {
        super();
        // 初始化默认支持的字体
        if(Array.isArray(fonts)) {
            for(const f of fonts) {
                this.fontConfigs.set(f.family, f);
            }
        }
        else if(fonts) {
            for(const name in fonts) {
                if(fonts[name] && typeof fonts[name] === 'object') this.fontConfigs.set(fonts[name].family, fonts[name]);
            }
        }
        this.init();
    }

    fontConfigs = new Map<string, IJFontData>();

    fonts = new Map<string, IJFontFace>();

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
        // 系统默认的一些字体支持
        this.fonts.set('Arial', new JFontData('Arial', '', new FontFace('Arial', '')));
    }


    // 加载字体
    async load(name: string, url?: string): Promise<IJFontFace> {
        let font = this.get(name);
        if(font) {
            if(font.url && (font.status === 'unloaded' || font.status === 'error')) return font.load();
            return font;
        }
        if(!url) {
            const config = this.fontConfigs.get(name);
            // 没有配置支持的字体，则报错
            if(!config) {
                throw Error(`没有支持的 ${name} 字体配置`);
            }
            url = config.url;
        }
        font = new JFontData(name, url);
        this.fonts.set(name, font);
        const f = await font.load();
        this.emit('load', f);// 加载字本事件
        return f;
    }

    // 获取已加载的字体
    get(name: string): IJFontFace | null {
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