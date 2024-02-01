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
import EventEmiter from './eventEmitter';
import util from '../lib/util';
export var topZIndex = 10000;
// 支持的样式属性列表
var JElementStyleDeclaration = /** @class */ (function (_super) {
    __extends(JElementStyleDeclaration, _super);
    function JElementStyleDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementStyleDeclaration;
}(EventEmiter));
export { JElementStyleDeclaration };
// 样式属性集合
var JElementStyleProperty = /** @class */ (function () {
    function JElementStyleProperty() {
        this.accentColor = '';
        this.alignContent = '';
        this.alignItems = '';
        this.alignSelf = '';
        this.alignmentBaseline = '';
        this.all = '';
        this.animation = '';
        this.animationComposition = '';
        this.animationDelay = '';
        this.animationDirection = '';
        this.animationDuration = '';
        this.animationFillMode = '';
        this.animationIterationCount = '';
        this.animationName = '';
        this.animationPlayState = '';
        this.animationTimingFunction = '';
        this.appearance = '';
        this.aspectRatio = '';
        this.backdropFilter = '';
        this.backfaceVisibility = '';
        this.background = '';
        this.backgroundAttachment = '';
        this.backgroundBlendMode = '';
        this.backgroundClip = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.backgroundOrigin = '';
        this.backgroundPosition = '';
        this.backgroundPositionX = '';
        this.backgroundPositionY = '';
        this.backgroundRepeat = '';
        this.backgroundSize = '';
        this.baselineShift = '';
        this.blockSize = '';
        this.border = '';
        this.borderBlock = '';
        this.borderBlockColor = '';
        this.borderBlockEnd = '';
        this.borderBlockEndColor = '';
        this.borderBlockEndStyle = '';
        this.borderBlockEndWidth = '';
        this.borderBlockStart = '';
        this.borderBlockStartColor = '';
        this.borderBlockStartStyle = '';
        this.borderBlockStartWidth = '';
        this.borderBlockStyle = '';
        this.borderBlockWidth = '';
        this.borderBottom = '';
        this.borderBottomColor = '';
        this.borderBottomLeftRadius = '';
        this.borderBottomRightRadius = '';
        this.borderBottomStyle = '';
        this.borderBottomWidth = '';
        this.borderCollapse = '';
        this.borderColor = '';
        this.borderEndEndRadius = '';
        this.borderEndStartRadius = '';
        this.borderImage = '';
        this.borderImageOutset = '';
        this.borderImageRepeat = '';
        this.borderImageSlice = '';
        this.borderImageSource = '';
        this.borderImageWidth = '';
        this.borderInline = '';
        this.borderInlineColor = '';
        this.borderInlineEnd = '';
        this.borderInlineEndColor = '';
        this.borderInlineEndStyle = '';
        this.borderInlineEndWidth = '';
        this.borderInlineStart = '';
        this.borderInlineStartColor = '';
        this.borderInlineStartStyle = '';
        this.borderInlineStartWidth = '';
        this.borderInlineStyle = '';
        this.borderInlineWidth = '';
        this.borderLeft = '';
        this.borderLeftColor = '';
        this.borderLeftStyle = '';
        this.borderLeftWidth = '';
        this.borderRadius = '';
        this.borderRight = '';
        this.borderRightColor = '';
        this.borderRightStyle = '';
        this.borderRightWidth = '';
        this.borderSpacing = '';
        this.borderStartEndRadius = '';
        this.borderStartStartRadius = '';
        this.borderStyle = '';
        this.borderTop = '';
        this.borderTopColor = '';
        this.borderTopLeftRadius = '';
        this.borderTopRightRadius = '';
        this.borderTopStyle = '';
        this.borderTopWidth = '';
        this.borderWidth = '';
        this.bottom = '';
        this.boxShadow = '';
        this.boxSizing = '';
        this.breakAfter = '';
        this.breakBefore = '';
        this.breakInside = '';
        this.captionSide = '';
        this.caretColor = '';
        this.clear = '';
        this.clip = '';
        this.clipPath = '';
        this.clipRule = '';
        this.color = '';
        this.colorInterpolation = '';
        this.colorInterpolationFilters = '';
        this.colorScheme = '';
        this.columnCount = '';
        this.columnFill = '';
        this.columnGap = '';
        this.columnRule = '';
        this.columnRuleColor = '';
        this.columnRuleStyle = '';
        this.columnRuleWidth = '';
        this.columnSpan = '';
        this.columnWidth = '';
        this.columns = '';
        this.contain = '';
        this.containIntrinsicBlockSize = '';
        this.containIntrinsicHeight = '';
        this.containIntrinsicInlineSize = '';
        this.containIntrinsicSize = '';
        this.containIntrinsicWidth = '';
        this.container = '';
        this.containerName = '';
        this.containerType = '';
        this.content = '';
        this.counterIncrement = '';
        this.counterReset = '';
        this.counterSet = '';
        this.cssFloat = '';
        this.cssText = '';
        this.cursor = '';
        this.direction = '';
        this.display = '';
        this.dominantBaseline = '';
        this.emptyCells = '';
        this.fill = '';
        this.fillOpacity = '';
        this.fillRule = '';
        this.filter = '';
        this.flex = '';
        this.flexBasis = '';
        this.flexDirection = '';
        this.flexFlow = '';
        this.flexGrow = '';
        this.flexShrink = '';
        this.flexWrap = '';
        this.float = '';
        this.floodColor = '';
        this.floodOpacity = '';
        this.font = '';
        this.fontFamily = '';
        this.fontFeatureSettings = '';
        this.fontKerning = '';
        this.fontOpticalSizing = '';
        this.fontPalette = '';
        this.fontSize = '';
        this.fontSizeAdjust = '';
        this.fontStretch = '';
        this.fontStyle = '';
        this.fontSynthesis = '';
        this.fontSynthesisSmallCaps = '';
        this.fontSynthesisStyle = '';
        this.fontSynthesisWeight = '';
        this.fontVariant = '';
        this.fontVariantAlternates = '';
        this.fontVariantCaps = '';
        this.fontVariantEastAsian = '';
        this.fontVariantLigatures = '';
        this.fontVariantNumeric = '';
        this.fontVariantPosition = '';
        this.fontVariationSettings = '';
        this.fontWeight = '';
        this.forcedColorAdjust = '';
        this.gap = '';
        this.grid = '';
        this.gridArea = '';
        this.gridAutoColumns = '';
        this.gridAutoFlow = '';
        this.gridAutoRows = '';
        this.gridColumn = '';
        this.gridColumnEnd = '';
        this.gridColumnGap = '';
        this.gridColumnStart = '';
        this.gridGap = '';
        this.gridRow = '';
        this.gridRowEnd = '';
        this.gridRowGap = '';
        this.gridRowStart = '';
        this.gridTemplate = '';
        this.gridTemplateAreas = '';
        this.gridTemplateColumns = '';
        this.gridTemplateRows = '';
        this.height = '';
        this.hyphenateCharacter = '';
        this.hyphens = '';
        this.imageOrientation = '';
        this.imageRendering = '';
        this.inlineSize = '';
        this.inset = '';
        this.insetBlock = '';
        this.insetBlockEnd = '';
        this.insetBlockStart = '';
        this.insetInline = '';
        this.insetInlineEnd = '';
        this.insetInlineStart = '';
        this.isolation = '';
        this.justifyContent = '';
        this.justifyItems = '';
        this.justifySelf = '';
        this.left = '';
        this.letterSpacing = '';
        this.lightingColor = '';
        this.lineBreak = '';
        this.lineHeight = '';
        this.listStyle = '';
        this.listStyleImage = '';
        this.listStylePosition = '';
        this.listStyleType = '';
        this.margin = '';
        this.marginBlock = '';
        this.marginBlockEnd = '';
        this.marginBlockStart = '';
        this.marginBottom = '';
        this.marginInline = '';
        this.marginInlineEnd = '';
        this.marginInlineStart = '';
        this.marginLeft = '';
        this.marginRight = '';
        this.marginTop = '';
        this.marker = '';
        this.markerEnd = '';
        this.markerMid = '';
        this.markerStart = '';
        this.mask = '';
        this.maskClip = '';
        this.maskComposite = '';
        this.maskImage = '';
        this.maskMode = '';
        this.maskOrigin = '';
        this.maskPosition = '';
        this.maskRepeat = '';
        this.maskSize = '';
        this.maskType = '';
        this.mathStyle = '';
        this.maxBlockSize = '';
        this.maxHeight = '';
        this.maxInlineSize = '';
        this.maxWidth = '';
        this.minBlockSize = '';
        this.minHeight = '';
        this.minInlineSize = '';
        this.minWidth = '';
        this.mixBlendMode = '';
        this.objectFit = '';
        this.objectPosition = '';
        this.offset = '';
        this.offsetDistance = '';
        this.offsetPath = '';
        this.offsetRotate = '';
        this.opacity = '';
        this.order = '';
        this.orphans = '';
        this.outline = '';
        this.outlineColor = '';
        this.outlineOffset = '';
        this.outlineStyle = '';
        this.outlineWidth = '';
        this.overflow = '';
        this.overflowAnchor = '';
        this.overflowClipMargin = '';
        this.overflowWrap = '';
        this.overflowX = '';
        this.overflowY = '';
        this.overscrollBehavior = '';
        this.overscrollBehaviorBlock = '';
        this.overscrollBehaviorInline = '';
        this.overscrollBehaviorX = '';
        this.overscrollBehaviorY = '';
        this.padding = '';
        this.paddingBlock = '';
        this.paddingBlockEnd = '';
        this.paddingBlockStart = '';
        this.paddingBottom = '';
        this.paddingInline = '';
        this.paddingInlineEnd = '';
        this.paddingInlineStart = '';
        this.paddingLeft = '';
        this.paddingRight = '';
        this.paddingTop = '';
        this.page = '';
        this.pageBreakAfter = '';
        this.pageBreakBefore = '';
        this.pageBreakInside = '';
        this.paintOrder = '';
        this.perspective = '';
        this.perspectiveOrigin = '';
        this.placeContent = '';
        this.placeItems = '';
        this.placeSelf = '';
        this.pointerEvents = '';
        this.position = '';
        this.printColorAdjust = '';
        this.quotes = '';
        this.resize = '';
        this.right = '';
        this.rotate = '';
        this.rowGap = '';
        this.rubyPosition = '';
        this.scale = '';
        this.scrollBehavior = '';
        this.scrollMargin = '';
        this.scrollMarginBlock = '';
        this.scrollMarginBlockEnd = '';
        this.scrollMarginBlockStart = '';
        this.scrollMarginBottom = '';
        this.scrollMarginInline = '';
        this.scrollMarginInlineEnd = '';
        this.scrollMarginInlineStart = '';
        this.scrollMarginLeft = '';
        this.scrollMarginRight = '';
        this.scrollMarginTop = '';
        this.scrollPadding = '';
        this.scrollPaddingBlock = '';
        this.scrollPaddingBlockEnd = '';
        this.scrollPaddingBlockStart = '';
        this.scrollPaddingBottom = '';
        this.scrollPaddingInline = '';
        this.scrollPaddingInlineEnd = '';
        this.scrollPaddingInlineStart = '';
        this.scrollPaddingLeft = '';
        this.scrollPaddingRight = '';
        this.scrollPaddingTop = '';
        this.scrollSnapAlign = '';
        this.scrollSnapStop = '';
        this.scrollSnapType = '';
        this.scrollbarGutter = '';
        this.shapeImageThreshold = '';
        this.shapeMargin = '';
        this.shapeOutside = '';
        this.shapeRendering = '';
        this.stopColor = '';
        this.stopOpacity = '';
        this.stroke = '';
        this.strokeDasharray = '';
        this.strokeDashoffset = '';
        this.strokeLinecap = '';
        this.strokeLinejoin = '';
        this.strokeMiterlimit = '';
        this.strokeOpacity = '';
        this.strokeWidth = '';
        this.tabSize = '';
        this.tableLayout = '';
        this.textAlign = '';
        this.textAlignLast = '';
        this.textAnchor = '';
        this.textCombineUpright = '';
        this.textDecoration = '';
        this.textDecorationColor = '';
        this.textDecorationLine = '';
        this.textDecorationSkipInk = '';
        this.textDecorationStyle = '';
        this.textDecorationThickness = '';
        this.textEmphasis = '';
        this.textEmphasisColor = '';
        this.textEmphasisPosition = '';
        this.textEmphasisStyle = '';
        this.textIndent = '';
        this.textOrientation = '';
        this.textOverflow = '';
        this.textRendering = '';
        this.textShadow = '';
        this.textTransform = '';
        this.textUnderlineOffset = '';
        this.textUnderlinePosition = '';
        this.top = '';
        this.touchAction = '';
        this.transform = '';
        this.transformBox = '';
        this.transformOrigin = '';
        this.transformStyle = '';
        this.transition = '';
        this.transitionDelay = '';
        this.transitionDuration = '';
        this.transitionProperty = '';
        this.transitionTimingFunction = '';
        this.translate = '';
        this.unicodeBidi = '';
        this.userSelect = '';
        this.verticalAlign = '';
        this.visibility = '';
        this.webkitAlignContent = '';
        this.webkitAlignItems = '';
        this.webkitAlignSelf = '';
        this.webkitAnimation = '';
        this.webkitAnimationDelay = '';
        this.webkitAnimationDirection = '';
        this.webkitAnimationDuration = '';
        this.webkitAnimationFillMode = '';
        this.webkitAnimationIterationCount = '';
        this.webkitAnimationName = '';
        this.webkitAnimationPlayState = '';
        this.webkitAnimationTimingFunction = '';
        this.webkitAppearance = '';
        this.webkitBackfaceVisibility = '';
        this.webkitBackgroundClip = '';
        this.webkitBackgroundOrigin = '';
        this.webkitBackgroundSize = '';
        this.webkitBorderBottomLeftRadius = '';
        this.webkitBorderBottomRightRadius = '';
        this.webkitBorderRadius = '';
        this.webkitBorderTopLeftRadius = '';
        this.webkitBorderTopRightRadius = '';
        this.webkitBoxAlign = '';
        this.webkitBoxFlex = '';
        this.webkitBoxOrdinalGroup = '';
        this.webkitBoxOrient = '';
        this.webkitBoxPack = '';
        this.webkitBoxShadow = '';
        this.webkitBoxSizing = '';
        this.webkitFilter = '';
        this.webkitFlex = '';
        this.webkitFlexBasis = '';
        this.webkitFlexDirection = '';
        this.webkitFlexFlow = '';
        this.webkitFlexGrow = '';
        this.webkitFlexShrink = '';
        this.webkitFlexWrap = '';
        this.webkitJustifyContent = '';
        this.webkitLineClamp = '';
        this.webkitMask = '';
        this.webkitMaskBoxImage = '';
        this.webkitMaskBoxImageOutset = '';
        this.webkitMaskBoxImageRepeat = '';
        this.webkitMaskBoxImageSlice = '';
        this.webkitMaskBoxImageSource = '';
        this.webkitMaskBoxImageWidth = '';
        this.webkitMaskClip = '';
        this.webkitMaskComposite = '';
        this.webkitMaskImage = '';
        this.webkitMaskOrigin = '';
        this.webkitMaskPosition = '';
        this.webkitMaskRepeat = '';
        this.webkitMaskSize = '';
        this.webkitOrder = '';
        this.webkitPerspective = '';
        this.webkitPerspectiveOrigin = '';
        this.webkitTextFillColor = '';
        this.webkitTextSizeAdjust = '';
        this.webkitTextStroke = '';
        this.webkitTextStrokeColor = '';
        this.webkitTextStrokeWidth = '';
        this.webkitTransform = '';
        this.webkitTransformOrigin = '';
        this.webkitTransformStyle = '';
        this.webkitTransition = '';
        this.webkitTransitionDelay = '';
        this.webkitTransitionDuration = '';
        this.webkitTransitionProperty = '';
        this.webkitTransitionTimingFunction = '';
        this.webkitUserSelect = '';
        this.whiteSpace = '';
        this.widows = '';
        this.width = '';
        this.willChange = '';
        this.wordBreak = '';
        this.wordSpacing = '';
        this.wordWrap = '';
        this.writingMode = '';
        this.zIndex = 0;
    }
    return JElementStyleProperty;
}());
export { JElementStyleProperty };
var JElementCssStyle = /** @class */ (function (_super) {
    __extends(JElementCssStyle, _super);
    function JElementCssStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(JElementCssStyle.prototype, "names", {
        // 所有样式名称
        get: function () {
            var e_1, _a;
            if (!JElementCssStyle.styleNamesMap.length) {
                var map = new JElementStyleProperty();
                var keys = Object.getOwnPropertyNames(map);
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var k = keys_1_1.value;
                        var t = typeof map[k];
                        if (t === 'string' || t === 'number')
                            JElementCssStyle.styleNamesMap.push(k);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return JElementCssStyle.styleNamesMap;
        },
        enumerable: false,
        configurable: true
    });
    JElementCssStyle.styleNamesMap = [];
    return JElementCssStyle;
}(JElementStyleDeclaration));
export default JElementCssStyle;
// 最外层容器默认样式
export var ContainerDefaultStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: 'auto',
    height: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    margin: '0',
    zIndex: '0',
    display: 'inline-block',
    overflow: 'visible'
};
export var nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
export var ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
// 操作杠指针
export var ControlerCursors = {
    'l': '',
    'lt': nwse,
    't': ns,
    'tr': '',
    'r': '',
    'rb': nwse,
    'b': ns,
    'lb': '',
    'rotate': 'pointer',
    'skew': 'pointer',
    // 根据角度旋转指针
    get: function (dir, rotation) {
        if (rotation === void 0) { rotation = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var rotationKey, key, cursor, normal, normal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (dir === 'rotate' || dir === 'skew')
                            return [2 /*return*/, this[dir]];
                        rotationKey = Number(rotation.toFixed(2));
                        key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
                        cursor = this[key];
                        if (!!cursor) return [3 /*break*/, 11];
                        if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) return [3 /*break*/, 6];
                        if (!(rotation === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, util.rotateImage(ns, Math.PI / 2)];
                    case 1:
                        cursor = _a.sent();
                        this['l'] = this['r'] = cursor;
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.get(dir, 0)];
                    case 3:
                        normal = _a.sent();
                        return [4 /*yield*/, util.rotateImage(normal, rotation)];
                    case 4:
                        cursor = _a.sent();
                        this[key] = cursor;
                        _a.label = 5;
                    case 5: return [3 /*break*/, 11];
                    case 6:
                        if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) return [3 /*break*/, 11];
                        if (!(rotation === 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, util.rotateImage(nwse, Math.PI / 2)];
                    case 7:
                        cursor = _a.sent();
                        return [2 /*return*/, this['tr'] = this['lb'] = cursor];
                    case 8: return [4 /*yield*/, this.get(dir, 0)];
                    case 9:
                        normal = _a.sent();
                        return [4 /*yield*/, util.rotateImage(normal, rotation)];
                    case 10:
                        cursor = _a.sent();
                        this[key] = cursor;
                        _a.label = 11;
                    case 11: return [2 /*return*/, cursor];
                }
            });
        });
    }
};
export var ControlItemIcons = {
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};
