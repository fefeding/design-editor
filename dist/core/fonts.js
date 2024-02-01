var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import EventEmiter from '../constant/eventEmitter';
var JFontData = /** @class */ (function () {
    function JFontData(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    Object.defineProperty(JFontData.prototype, "status", {
        get: function () {
            if (this.font)
                return this.font.status;
            return 'unloaded';
        },
        enumerable: false,
        configurable: true
    });
    JFontData.prototype.load = function (url) {
        if (url === void 0) { url = this.url; }
        return __awaiter(this, void 0, void 0, function () {
            var f;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.url = url || this.url;
                        if (!this.font)
                            this.font = new FontFace(this.family, "url(\"".concat(this.url, "\")"));
                        return [4 /*yield*/, this.font.load()];
                    case 1:
                        f = _a.sent();
                        document.fonts.add(f); // 生效
                        return [2 /*return*/, this];
                }
            });
        });
    };
    JFontData.prototype.toHtml = function () {
        return "@font-face {font-family: \"".concat(this.family, "\"; src: url(\"").concat(this.url, "\")}");
    };
    return JFontData;
}());
export { JFontData };
var JFonts = /** @class */ (function (_super) {
    __extends(JFonts, _super);
    function JFonts(fonts) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.fontConfigs = new Map();
        _this.fonts = new Map();
        // 初始化默认支持的字体
        if (Array.isArray(fonts)) {
            try {
                for (var fonts_1 = __values(fonts), fonts_1_1 = fonts_1.next(); !fonts_1_1.done; fonts_1_1 = fonts_1.next()) {
                    var f = fonts_1_1.value;
                    _this.fontConfigs.set(f.family.toLocaleLowerCase(), f);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fonts_1_1 && !fonts_1_1.done && (_a = fonts_1.return)) _a.call(fonts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (fonts) {
            for (var name_1 in fonts) {
                if (fonts[name_1] && typeof fonts[name_1] === 'object')
                    _this.fontConfigs.set(fonts[name_1].family.toLocaleLowerCase(), fonts[name_1]);
            }
        }
        _this.init();
        return _this;
    }
    JFonts.prototype.init = function () {
        if (document.fonts) {
            var fonts = document.fonts.values();
            var font = fonts.next();
            while (font && font.done && font.value) {
                if (font.value) {
                    var f = new JFontData(font.value.family);
                    f.font = font.value;
                    this.fonts.set(f.family, f);
                }
                font = fonts.next();
            }
        }
        // 系统默认的一些字体支持
        this.fonts.set('arial', new JFontData('Arial', '', new FontFace('Arial', '')));
    };
    // 加载字体
    JFonts.prototype.load = function (name, url) {
        return __awaiter(this, void 0, void 0, function () {
            var font, config, f;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        font = this.get(name);
                        if (font) {
                            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                                return [2 /*return*/, font.load()];
                            return [2 /*return*/, font];
                        }
                        if (!url) {
                            config = this.fontConfigs.get(name.toLocaleLowerCase());
                            // 没有配置支持的字体，则报错
                            if (!config) {
                                throw Error("\u6CA1\u6709\u652F\u6301\u7684 ".concat(name, " \u5B57\u4F53\u914D\u7F6E"));
                            }
                            url = config.url;
                        }
                        font = new JFontData(name, url);
                        this.fonts.set(name.toLocaleLowerCase(), font);
                        return [4 /*yield*/, font.load()];
                    case 1:
                        f = _a.sent();
                        this.emit('load', f); // 加载字本事件
                        return [2 /*return*/, f];
                }
            });
        });
    };
    // 获取已加载的字体
    JFonts.prototype.get = function (name) {
        if (this.fonts) {
            name = name.toLocaleLowerCase();
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    };
    // 检查加载的字体是否存在，存在则返回字体对象
    JFonts.prototype.check = function (name) {
        var font = this.get(name);
        return !!font;
    };
    return JFonts;
}(EventEmiter));
export default JFonts;
