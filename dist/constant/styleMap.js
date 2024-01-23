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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import EventEmiter from 'eventemitter3';
// 支持的样式属性列表
var JElementStyleMap = /** @class */ (function (_super) {
    __extends(JElementStyleMap, _super);
    function JElementStyleMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementStyleMap;
}(EventEmiter));
export default JElementStyleMap;
// 样式属性集合
var JElementStyleProperty = /** @class */ (function (_super) {
    __extends(JElementStyleProperty, _super);
    function JElementStyleProperty() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.accentColor = '';
        _this.alignContent = '';
        _this.alignItems = '';
        _this.alignSelf = '';
        _this.alignmentBaseline = '';
        _this.all = '';
        _this.animation = '';
        _this.animationComposition = '';
        _this.animationDelay = '';
        _this.animationDirection = '';
        _this.animationDuration = '';
        _this.animationFillMode = '';
        _this.animationIterationCount = '';
        _this.animationName = '';
        _this.animationPlayState = '';
        _this.animationTimingFunction = '';
        _this.appearance = '';
        _this.aspectRatio = '';
        _this.backdropFilter = '';
        _this.backfaceVisibility = '';
        _this.background = '';
        _this.backgroundAttachment = '';
        _this.backgroundBlendMode = '';
        _this.backgroundClip = '';
        _this.backgroundColor = '';
        _this.backgroundImage = '';
        _this.backgroundOrigin = '';
        _this.backgroundPosition = '';
        _this.backgroundPositionX = '';
        _this.backgroundPositionY = '';
        _this.backgroundRepeat = '';
        _this.backgroundSize = '';
        _this.baselineShift = '';
        _this.blockSize = '';
        _this.border = '';
        _this.borderBlock = '';
        _this.borderBlockColor = '';
        _this.borderBlockEnd = '';
        _this.borderBlockEndColor = '';
        _this.borderBlockEndStyle = '';
        _this.borderBlockEndWidth = '';
        _this.borderBlockStart = '';
        _this.borderBlockStartColor = '';
        _this.borderBlockStartStyle = '';
        _this.borderBlockStartWidth = '';
        _this.borderBlockStyle = '';
        _this.borderBlockWidth = '';
        _this.borderBottom = '';
        _this.borderBottomColor = '';
        _this.borderBottomLeftRadius = '';
        _this.borderBottomRightRadius = '';
        _this.borderBottomStyle = '';
        _this.borderBottomWidth = '';
        _this.borderCollapse = '';
        _this.borderColor = '';
        _this.borderEndEndRadius = '';
        _this.borderEndStartRadius = '';
        _this.borderImage = '';
        _this.borderImageOutset = '';
        _this.borderImageRepeat = '';
        _this.borderImageSlice = '';
        _this.borderImageSource = '';
        _this.borderImageWidth = '';
        _this.borderInline = '';
        _this.borderInlineColor = '';
        _this.borderInlineEnd = '';
        _this.borderInlineEndColor = '';
        _this.borderInlineEndStyle = '';
        _this.borderInlineEndWidth = '';
        _this.borderInlineStart = '';
        _this.borderInlineStartColor = '';
        _this.borderInlineStartStyle = '';
        _this.borderInlineStartWidth = '';
        _this.borderInlineStyle = '';
        _this.borderInlineWidth = '';
        _this.borderLeft = '';
        _this.borderLeftColor = '';
        _this.borderLeftStyle = '';
        _this.borderLeftWidth = '';
        _this.borderRadius = '';
        _this.borderRight = '';
        _this.borderRightColor = '';
        _this.borderRightStyle = '';
        _this.borderRightWidth = '';
        _this.borderSpacing = '';
        _this.borderStartEndRadius = '';
        _this.borderStartStartRadius = '';
        _this.borderStyle = '';
        _this.borderTop = '';
        _this.borderTopColor = '';
        _this.borderTopLeftRadius = '';
        _this.borderTopRightRadius = '';
        _this.borderTopStyle = '';
        _this.borderTopWidth = '';
        _this.borderWidth = '';
        _this.bottom = '';
        _this.boxShadow = '';
        _this.boxSizing = '';
        _this.breakAfter = '';
        _this.breakBefore = '';
        _this.breakInside = '';
        _this.captionSide = '';
        _this.caretColor = '';
        _this.clear = '';
        _this.clip = '';
        _this.clipPath = '';
        _this.clipRule = '';
        _this.color = '';
        _this.colorInterpolation = '';
        _this.colorInterpolationFilters = '';
        _this.colorScheme = '';
        _this.columnCount = '';
        _this.columnFill = '';
        _this.columnGap = '';
        _this.columnRule = '';
        _this.columnRuleColor = '';
        _this.columnRuleStyle = '';
        _this.columnRuleWidth = '';
        _this.columnSpan = '';
        _this.columnWidth = '';
        _this.columns = '';
        _this.contain = '';
        _this.containIntrinsicBlockSize = '';
        _this.containIntrinsicHeight = '';
        _this.containIntrinsicInlineSize = '';
        _this.containIntrinsicSize = '';
        _this.containIntrinsicWidth = '';
        _this.container = '';
        _this.containerName = '';
        _this.containerType = '';
        _this.content = '';
        _this.counterIncrement = '';
        _this.counterReset = '';
        _this.counterSet = '';
        _this.cssFloat = '';
        _this.cssText = '';
        _this.cursor = '';
        _this.direction = '';
        _this.display = '';
        _this.dominantBaseline = '';
        _this.emptyCells = '';
        _this.fill = '';
        _this.fillOpacity = '';
        _this.fillRule = '';
        _this.filter = '';
        _this.flex = '';
        _this.flexBasis = '';
        _this.flexDirection = '';
        _this.flexFlow = '';
        _this.flexGrow = '';
        _this.flexShrink = '';
        _this.flexWrap = '';
        _this.float = '';
        _this.floodColor = '';
        _this.floodOpacity = '';
        _this.font = '';
        _this.fontFamily = '';
        _this.fontFeatureSettings = '';
        _this.fontKerning = '';
        _this.fontOpticalSizing = '';
        _this.fontPalette = '';
        _this.fontSize = '';
        _this.fontSizeAdjust = '';
        _this.fontStretch = '';
        _this.fontStyle = '';
        _this.fontSynthesis = '';
        _this.fontSynthesisSmallCaps = '';
        _this.fontSynthesisStyle = '';
        _this.fontSynthesisWeight = '';
        _this.fontVariant = '';
        _this.fontVariantAlternates = '';
        _this.fontVariantCaps = '';
        _this.fontVariantEastAsian = '';
        _this.fontVariantLigatures = '';
        _this.fontVariantNumeric = '';
        _this.fontVariantPosition = '';
        _this.fontVariationSettings = '';
        _this.fontWeight = '';
        _this.forcedColorAdjust = '';
        _this.gap = '';
        _this.grid = '';
        _this.gridArea = '';
        _this.gridAutoColumns = '';
        _this.gridAutoFlow = '';
        _this.gridAutoRows = '';
        _this.gridColumn = '';
        _this.gridColumnEnd = '';
        _this.gridColumnGap = '';
        _this.gridColumnStart = '';
        _this.gridGap = '';
        _this.gridRow = '';
        _this.gridRowEnd = '';
        _this.gridRowGap = '';
        _this.gridRowStart = '';
        _this.gridTemplate = '';
        _this.gridTemplateAreas = '';
        _this.gridTemplateColumns = '';
        _this.gridTemplateRows = '';
        _this.height = '';
        _this.hyphenateCharacter = '';
        _this.hyphens = '';
        _this.imageOrientation = '';
        _this.imageRendering = '';
        _this.inlineSize = '';
        _this.inset = '';
        _this.insetBlock = '';
        _this.insetBlockEnd = '';
        _this.insetBlockStart = '';
        _this.insetInline = '';
        _this.insetInlineEnd = '';
        _this.insetInlineStart = '';
        _this.isolation = '';
        _this.justifyContent = '';
        _this.justifyItems = '';
        _this.justifySelf = '';
        _this.left = '';
        _this.letterSpacing = '';
        _this.lightingColor = '';
        _this.lineBreak = '';
        _this.lineHeight = '';
        _this.listStyle = '';
        _this.listStyleImage = '';
        _this.listStylePosition = '';
        _this.listStyleType = '';
        _this.margin = '';
        _this.marginBlock = '';
        _this.marginBlockEnd = '';
        _this.marginBlockStart = '';
        _this.marginBottom = '';
        _this.marginInline = '';
        _this.marginInlineEnd = '';
        _this.marginInlineStart = '';
        _this.marginLeft = '';
        _this.marginRight = '';
        _this.marginTop = '';
        _this.marker = '';
        _this.markerEnd = '';
        _this.markerMid = '';
        _this.markerStart = '';
        _this.mask = '';
        _this.maskClip = '';
        _this.maskComposite = '';
        _this.maskImage = '';
        _this.maskMode = '';
        _this.maskOrigin = '';
        _this.maskPosition = '';
        _this.maskRepeat = '';
        _this.maskSize = '';
        _this.maskType = '';
        _this.mathStyle = '';
        _this.maxBlockSize = '';
        _this.maxHeight = '';
        _this.maxInlineSize = '';
        _this.maxWidth = '';
        _this.minBlockSize = '';
        _this.minHeight = '';
        _this.minInlineSize = '';
        _this.minWidth = '';
        _this.mixBlendMode = '';
        _this.objectFit = '';
        _this.objectPosition = '';
        _this.offset = '';
        _this.offsetDistance = '';
        _this.offsetPath = '';
        _this.offsetRotate = '';
        _this.opacity = '';
        _this.order = '';
        _this.orphans = '';
        _this.outline = '';
        _this.outlineColor = '';
        _this.outlineOffset = '';
        _this.outlineStyle = '';
        _this.outlineWidth = '';
        _this.overflow = '';
        _this.overflowAnchor = '';
        _this.overflowClipMargin = '';
        _this.overflowWrap = '';
        _this.overflowX = '';
        _this.overflowY = '';
        _this.overscrollBehavior = '';
        _this.overscrollBehaviorBlock = '';
        _this.overscrollBehaviorInline = '';
        _this.overscrollBehaviorX = '';
        _this.overscrollBehaviorY = '';
        _this.padding = '';
        _this.paddingBlock = '';
        _this.paddingBlockEnd = '';
        _this.paddingBlockStart = '';
        _this.paddingBottom = '';
        _this.paddingInline = '';
        _this.paddingInlineEnd = '';
        _this.paddingInlineStart = '';
        _this.paddingLeft = '';
        _this.paddingRight = '';
        _this.paddingTop = '';
        _this.page = '';
        _this.pageBreakAfter = '';
        _this.pageBreakBefore = '';
        _this.pageBreakInside = '';
        _this.paintOrder = '';
        _this.perspective = '';
        _this.perspectiveOrigin = '';
        _this.placeContent = '';
        _this.placeItems = '';
        _this.placeSelf = '';
        _this.pointerEvents = '';
        _this.position = '';
        _this.printColorAdjust = '';
        _this.quotes = '';
        _this.resize = '';
        _this.right = '';
        _this.rotate = '';
        _this.rowGap = '';
        _this.rubyPosition = '';
        _this.scale = '';
        _this.scrollBehavior = '';
        _this.scrollMargin = '';
        _this.scrollMarginBlock = '';
        _this.scrollMarginBlockEnd = '';
        _this.scrollMarginBlockStart = '';
        _this.scrollMarginBottom = '';
        _this.scrollMarginInline = '';
        _this.scrollMarginInlineEnd = '';
        _this.scrollMarginInlineStart = '';
        _this.scrollMarginLeft = '';
        _this.scrollMarginRight = '';
        _this.scrollMarginTop = '';
        _this.scrollPadding = '';
        _this.scrollPaddingBlock = '';
        _this.scrollPaddingBlockEnd = '';
        _this.scrollPaddingBlockStart = '';
        _this.scrollPaddingBottom = '';
        _this.scrollPaddingInline = '';
        _this.scrollPaddingInlineEnd = '';
        _this.scrollPaddingInlineStart = '';
        _this.scrollPaddingLeft = '';
        _this.scrollPaddingRight = '';
        _this.scrollPaddingTop = '';
        _this.scrollSnapAlign = '';
        _this.scrollSnapStop = '';
        _this.scrollSnapType = '';
        _this.scrollbarGutter = '';
        _this.shapeImageThreshold = '';
        _this.shapeMargin = '';
        _this.shapeOutside = '';
        _this.shapeRendering = '';
        _this.stopColor = '';
        _this.stopOpacity = '';
        _this.stroke = '';
        _this.strokeDasharray = '';
        _this.strokeDashoffset = '';
        _this.strokeLinecap = '';
        _this.strokeLinejoin = '';
        _this.strokeMiterlimit = '';
        _this.strokeOpacity = '';
        _this.strokeWidth = '';
        _this.tabSize = '';
        _this.tableLayout = '';
        _this.textAlign = '';
        _this.textAlignLast = '';
        _this.textAnchor = '';
        _this.textCombineUpright = '';
        _this.textDecoration = '';
        _this.textDecorationColor = '';
        _this.textDecorationLine = '';
        _this.textDecorationSkipInk = '';
        _this.textDecorationStyle = '';
        _this.textDecorationThickness = '';
        _this.textEmphasis = '';
        _this.textEmphasisColor = '';
        _this.textEmphasisPosition = '';
        _this.textEmphasisStyle = '';
        _this.textIndent = '';
        _this.textOrientation = '';
        _this.textOverflow = '';
        _this.textRendering = '';
        _this.textShadow = '';
        _this.textTransform = '';
        _this.textUnderlineOffset = '';
        _this.textUnderlinePosition = '';
        _this.top = '';
        _this.touchAction = '';
        _this.transform = '';
        _this.transformBox = '';
        _this.transformOrigin = '';
        _this.transformStyle = '';
        _this.transition = '';
        _this.transitionDelay = '';
        _this.transitionDuration = '';
        _this.transitionProperty = '';
        _this.transitionTimingFunction = '';
        _this.translate = '';
        _this.unicodeBidi = '';
        _this.userSelect = '';
        _this.verticalAlign = '';
        _this.visibility = '';
        _this.webkitAlignContent = '';
        _this.webkitAlignItems = '';
        _this.webkitAlignSelf = '';
        _this.webkitAnimation = '';
        _this.webkitAnimationDelay = '';
        _this.webkitAnimationDirection = '';
        _this.webkitAnimationDuration = '';
        _this.webkitAnimationFillMode = '';
        _this.webkitAnimationIterationCount = '';
        _this.webkitAnimationName = '';
        _this.webkitAnimationPlayState = '';
        _this.webkitAnimationTimingFunction = '';
        _this.webkitAppearance = '';
        _this.webkitBackfaceVisibility = '';
        _this.webkitBackgroundClip = '';
        _this.webkitBackgroundOrigin = '';
        _this.webkitBackgroundSize = '';
        _this.webkitBorderBottomLeftRadius = '';
        _this.webkitBorderBottomRightRadius = '';
        _this.webkitBorderRadius = '';
        _this.webkitBorderTopLeftRadius = '';
        _this.webkitBorderTopRightRadius = '';
        _this.webkitBoxAlign = '';
        _this.webkitBoxFlex = '';
        _this.webkitBoxOrdinalGroup = '';
        _this.webkitBoxOrient = '';
        _this.webkitBoxPack = '';
        _this.webkitBoxShadow = '';
        _this.webkitBoxSizing = '';
        _this.webkitFilter = '';
        _this.webkitFlex = '';
        _this.webkitFlexBasis = '';
        _this.webkitFlexDirection = '';
        _this.webkitFlexFlow = '';
        _this.webkitFlexGrow = '';
        _this.webkitFlexShrink = '';
        _this.webkitFlexWrap = '';
        _this.webkitJustifyContent = '';
        _this.webkitLineClamp = '';
        _this.webkitMask = '';
        _this.webkitMaskBoxImage = '';
        _this.webkitMaskBoxImageOutset = '';
        _this.webkitMaskBoxImageRepeat = '';
        _this.webkitMaskBoxImageSlice = '';
        _this.webkitMaskBoxImageSource = '';
        _this.webkitMaskBoxImageWidth = '';
        _this.webkitMaskClip = '';
        _this.webkitMaskComposite = '';
        _this.webkitMaskImage = '';
        _this.webkitMaskOrigin = '';
        _this.webkitMaskPosition = '';
        _this.webkitMaskRepeat = '';
        _this.webkitMaskSize = '';
        _this.webkitOrder = '';
        _this.webkitPerspective = '';
        _this.webkitPerspectiveOrigin = '';
        _this.webkitTextFillColor = '';
        _this.webkitTextSizeAdjust = '';
        _this.webkitTextStroke = '';
        _this.webkitTextStrokeColor = '';
        _this.webkitTextStrokeWidth = '';
        _this.webkitTransform = '';
        _this.webkitTransformOrigin = '';
        _this.webkitTransformStyle = '';
        _this.webkitTransition = '';
        _this.webkitTransitionDelay = '';
        _this.webkitTransitionDuration = '';
        _this.webkitTransitionProperty = '';
        _this.webkitTransitionTimingFunction = '';
        _this.webkitUserSelect = '';
        _this.whiteSpace = '';
        _this.widows = '';
        _this.width = '';
        _this.willChange = '';
        _this.wordBreak = '';
        _this.wordSpacing = '';
        _this.wordWrap = '';
        _this.writingMode = '';
        _this.zIndex = '';
        return _this;
    }
    return JElementStyleProperty;
}(JElementStyleMap));
export { JElementStyleProperty };
// 最外层容器默认样式
export var ContainerDefaultStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    right: 'auto',
    bottom: 'auto',
    padding: '1px',
    margin: '0'
};
