import EventEmiter from 'j-eventemitter';
export class JFontData {
    constructor(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    family;
    url;
    // 中文名
    label;
    font;
    get status() {
        if (this.font)
            return this.font.status;
        return 'unloaded';
    }
    async load(url = this.url) {
        this.url = url || this.url;
        if (!this.font)
            this.font = new FontFace(this.family, `url("${this.url}")`);
        const f = await this.font.load();
        document.fonts.add(f); // 生效
        return this;
    }
    toHtml() {
        return `@font-face {font-family: "${this.family}"; src: url("${this.url}")}`;
    }
}
export default class JFonts extends EventEmiter {
    constructor(fonts) {
        super();
        // 初始化默认支持的字体
        if (Array.isArray(fonts)) {
            this.registry(fonts);
        }
        else if (fonts) {
            for (const name in fonts) {
                if (fonts[name] && typeof fonts[name] === 'object')
                    this.registry(fonts[name]);
            }
        }
        this.init();
    }
    fontConfigs = new Map();
    fonts = new Map();
    init() {
        if (document.fonts) {
            const fonts = document.fonts.values();
            let font = fonts.next();
            while (font && font.done && font.value) {
                if (font.value) {
                    const f = new JFontData(font.value.family);
                    f.font = font.value;
                    this.fonts.set(f.family, f);
                }
                font = fonts.next();
            }
        }
        // 系统默认的一些字体支持
        this.fonts.set('arial', new JFontData('Arial', '', new FontFace('Arial', '')));
    }
    /**
     * 注入字体配置
     * @param font 字体
     */
    registry(font) {
        // 初始化默认支持的字体
        if (Array.isArray(font)) {
            for (const f of font) {
                this.registry(f);
            }
        }
        else if (font) {
            this.fontConfigs.set(font.family.toLocaleLowerCase(), font);
        }
    }
    // 加载字体
    async load(name, url) {
        let font = this.get(name);
        if (font) {
            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                return font.load();
            return font;
        }
        if (!url) {
            const config = this.fontConfigs.get(name.toLocaleLowerCase());
            // 没有配置支持的字体，则报错
            if (!config) {
                throw Error(`没有支持的 ${name} 字体配置`);
            }
            url = config.url;
        }
        font = new JFontData(name, url);
        this.fonts.set(name.toLocaleLowerCase(), font);
        const f = await font.load();
        this.emit('load', f); // 加载字本事件
        return f;
    }
    // 获取已加载的字体
    get(name) {
        if (this.fonts) {
            name = name.toLocaleLowerCase();
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    }
    // 检查加载的字体是否存在，存在则返回字体对象
    check(name) {
        const font = this.get(name);
        return !!font;
    }
}
