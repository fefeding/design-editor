import EventEmiter from 'j-eventemitter';
export const topZIndex = 10000;
/**
 * 支持的样式属性列表
 * @public
 */
export class JElementStyleDeclaration extends EventEmiter {
    accentColor;
    alignContent;
    alignItems;
    alignSelf;
    alignmentBaseline;
    all;
    animation;
    animationComposition;
    animationDelay;
    animationDirection;
    animationDuration;
    animationFillMode;
    animationIterationCount;
    animationName;
    animationPlayState;
    animationTimingFunction;
    appearance;
    aspectRatio;
    backdropFilter;
    backfaceVisibility;
    background;
    backgroundAttachment;
    backgroundBlendMode;
    backgroundClip;
    backgroundColor;
    backgroundImage;
    backgroundOrigin;
    backgroundPosition;
    backgroundPositionX;
    backgroundPositionY;
    backgroundRepeat;
    backgroundSize;
    baselineShift;
    blockSize;
    border;
    borderBlock;
    borderBlockColor;
    borderBlockEnd;
    borderBlockEndColor;
    borderBlockEndStyle;
    borderBlockEndWidth;
    borderBlockStart;
    borderBlockStartColor;
    borderBlockStartStyle;
    borderBlockStartWidth;
    borderBlockStyle;
    borderBlockWidth;
    borderBottom;
    borderBottomColor;
    borderBottomLeftRadius;
    borderBottomRightRadius;
    borderBottomStyle;
    borderBottomWidth;
    borderCollapse;
    borderColor;
    borderEndEndRadius;
    borderEndStartRadius;
    borderImage;
    borderImageOutset;
    borderImageRepeat;
    borderImageSlice;
    borderImageSource;
    borderImageWidth;
    borderInline;
    borderInlineColor;
    borderInlineEnd;
    borderInlineEndColor;
    borderInlineEndStyle;
    borderInlineEndWidth;
    borderInlineStart;
    borderInlineStartColor;
    borderInlineStartStyle;
    borderInlineStartWidth;
    borderInlineStyle;
    borderInlineWidth;
    borderLeft;
    borderLeftColor;
    borderLeftStyle;
    borderLeftWidth;
    borderRadius;
    borderRight;
    borderRightColor;
    borderRightStyle;
    borderRightWidth;
    borderSpacing;
    borderStartEndRadius;
    borderStartStartRadius;
    borderStyle;
    borderTop;
    borderTopColor;
    borderTopLeftRadius;
    borderTopRightRadius;
    borderTopStyle;
    borderTopWidth;
    borderWidth;
    bottom;
    boxShadow;
    boxSizing;
    breakAfter;
    breakBefore;
    breakInside;
    captionSide;
    caretColor;
    clear;
    clip;
    clipPath;
    clipRule;
    color;
    colorInterpolation;
    colorInterpolationFilters;
    colorScheme;
    columnCount;
    columnFill;
    columnGap;
    columnRule;
    columnRuleColor;
    columnRuleStyle;
    columnRuleWidth;
    columnSpan;
    columnWidth;
    columns;
    contain;
    containIntrinsicBlockSize;
    containIntrinsicHeight;
    containIntrinsicInlineSize;
    containIntrinsicSize;
    containIntrinsicWidth;
    container;
    containerName;
    containerType;
    content;
    counterIncrement;
    counterReset;
    counterSet;
    cssFloat;
    cssText;
    cursor;
    direction;
    display;
    dominantBaseline;
    emptyCells;
    fill;
    fillOpacity;
    fillRule;
    filter;
    flex;
    flexBasis;
    flexDirection;
    flexFlow;
    flexGrow;
    flexShrink;
    flexWrap;
    float;
    floodColor;
    floodOpacity;
    font;
    fontFamily;
    fontFeatureSettings;
    fontKerning;
    fontOpticalSizing;
    fontPalette;
    fontSize;
    fontSizeAdjust;
    fontStretch;
    fontStyle;
    fontSynthesis;
    fontSynthesisSmallCaps;
    fontSynthesisStyle;
    fontSynthesisWeight;
    fontVariant;
    fontVariantAlternates;
    fontVariantCaps;
    fontVariantEastAsian;
    fontVariantLigatures;
    fontVariantNumeric;
    fontVariantPosition;
    fontVariationSettings;
    fontWeight;
    forcedColorAdjust;
    gap;
    grid;
    gridArea;
    gridAutoColumns;
    gridAutoFlow;
    gridAutoRows;
    gridColumn;
    gridColumnEnd;
    gridColumnGap;
    gridColumnStart;
    gridGap;
    gridRow;
    gridRowEnd;
    gridRowGap;
    gridRowStart;
    gridTemplate;
    gridTemplateAreas;
    gridTemplateColumns;
    gridTemplateRows;
    height;
    hyphenateCharacter;
    hyphens;
    imageOrientation;
    imageRendering;
    inlineSize;
    inset;
    insetBlock;
    insetBlockEnd;
    insetBlockStart;
    insetInline;
    insetInlineEnd;
    insetInlineStart;
    isolation;
    justifyContent;
    justifyItems;
    justifySelf;
    left;
    length;
    letterSpacing;
    lightingColor;
    lineBreak;
    lineHeight;
    listStyle;
    listStyleImage;
    listStylePosition;
    listStyleType;
    margin;
    marginBlock;
    marginBlockEnd;
    marginBlockStart;
    marginBottom;
    marginInline;
    marginInlineEnd;
    marginInlineStart;
    marginLeft;
    marginRight;
    marginTop;
    marker;
    markerEnd;
    markerMid;
    markerStart;
    mask;
    maskClip;
    maskComposite;
    maskImage;
    maskMode;
    maskOrigin;
    maskPosition;
    maskRepeat;
    maskSize;
    maskType;
    mathStyle;
    maxBlockSize;
    maxHeight;
    maxInlineSize;
    maxWidth;
    minBlockSize;
    minHeight;
    minInlineSize;
    minWidth;
    mixBlendMode;
    objectFit;
    objectPosition;
    offset;
    offsetDistance;
    offsetPath;
    offsetRotate;
    opacity;
    order;
    orphans;
    outline;
    outlineColor;
    outlineOffset;
    outlineStyle;
    outlineWidth;
    overflow;
    overflowAnchor;
    overflowClipMargin;
    overflowWrap;
    overflowX;
    overflowY;
    overscrollBehavior;
    overscrollBehaviorBlock;
    overscrollBehaviorInline;
    overscrollBehaviorX;
    overscrollBehaviorY;
    padding;
    paddingBlock;
    paddingBlockEnd;
    paddingBlockStart;
    paddingBottom;
    paddingInline;
    paddingInlineEnd;
    paddingInlineStart;
    paddingLeft;
    paddingRight;
    paddingTop;
    page;
    pageBreakAfter;
    pageBreakBefore;
    pageBreakInside;
    paintOrder;
    parentRule;
    perspective;
    perspectiveOrigin;
    placeContent;
    placeItems;
    placeSelf;
    pointerEvents;
    position;
    printColorAdjust;
    quotes;
    resize;
    right;
    rotate;
    rowGap;
    rubyPosition;
    scale;
    scrollBehavior;
    scrollMargin;
    scrollMarginBlock;
    scrollMarginBlockEnd;
    scrollMarginBlockStart;
    scrollMarginBottom;
    scrollMarginInline;
    scrollMarginInlineEnd;
    scrollMarginInlineStart;
    scrollMarginLeft;
    scrollMarginRight;
    scrollMarginTop;
    scrollPadding;
    scrollPaddingBlock;
    scrollPaddingBlockEnd;
    scrollPaddingBlockStart;
    scrollPaddingBottom;
    scrollPaddingInline;
    scrollPaddingInlineEnd;
    scrollPaddingInlineStart;
    scrollPaddingLeft;
    scrollPaddingRight;
    scrollPaddingTop;
    scrollSnapAlign;
    scrollSnapStop;
    scrollSnapType;
    scrollbarGutter;
    shapeImageThreshold;
    shapeMargin;
    shapeOutside;
    shapeRendering;
    stopColor;
    stopOpacity;
    stroke;
    strokeDasharray;
    strokeDashoffset;
    strokeLinecap;
    strokeLinejoin;
    strokeMiterlimit;
    strokeOpacity;
    strokeWidth;
    tabSize;
    tableLayout;
    textAlign;
    textAlignLast;
    textAnchor;
    textCombineUpright;
    textDecoration;
    textDecorationColor;
    textDecorationLine;
    textDecorationSkipInk;
    textDecorationStyle;
    textDecorationThickness;
    textEmphasis;
    textEmphasisColor;
    textEmphasisPosition;
    textEmphasisStyle;
    textIndent;
    textOrientation;
    textOverflow;
    textRendering;
    textShadow;
    textTransform;
    textUnderlineOffset;
    textUnderlinePosition;
    top;
    touchAction;
    transform;
    transformBox;
    transformOrigin;
    transformStyle;
    transition;
    transitionDelay;
    transitionDuration;
    transitionProperty;
    transitionTimingFunction;
    translate;
    unicodeBidi;
    userSelect;
    verticalAlign;
    visibility;
    whiteSpace;
    widows;
    width;
    willChange;
    wordBreak;
    wordSpacing;
    wordWrap;
    writingMode;
    zIndex;
}
/**
 * 样式属性集合
 * @public
 */
export class JElementStyleProperty {
    accentColor = '';
    alignContent = '';
    alignItems = '';
    alignSelf = '';
    alignmentBaseline = '';
    all = '';
    animation = '';
    animationComposition = '';
    animationDelay = '';
    animationDirection = '';
    animationDuration = '';
    animationFillMode = '';
    animationIterationCount = '';
    animationName = '';
    animationPlayState = '';
    animationTimingFunction = '';
    appearance = '';
    aspectRatio = '';
    backdropFilter = '';
    backfaceVisibility = '';
    background = '';
    backgroundAttachment = '';
    backgroundBlendMode = '';
    backgroundClip = '';
    backgroundColor = '';
    backgroundImage = '';
    backgroundOrigin = '';
    backgroundPosition = '';
    backgroundPositionX = '';
    backgroundPositionY = '';
    backgroundRepeat = '';
    backgroundSize = '';
    baselineShift = '';
    blockSize = '';
    border = '';
    borderBlock = '';
    borderBlockColor = '';
    borderBlockEnd = '';
    borderBlockEndColor = '';
    borderBlockEndStyle = '';
    borderBlockEndWidth = '';
    borderBlockStart = '';
    borderBlockStartColor = '';
    borderBlockStartStyle = '';
    borderBlockStartWidth = '';
    borderBlockStyle = '';
    borderBlockWidth = '';
    borderBottom = '';
    borderBottomColor = '';
    borderBottomLeftRadius = '';
    borderBottomRightRadius = '';
    borderBottomStyle = '';
    borderBottomWidth = '';
    borderCollapse = '';
    borderColor = '';
    borderEndEndRadius = '';
    borderEndStartRadius = '';
    borderImage = '';
    borderImageOutset = '';
    borderImageRepeat = '';
    borderImageSlice = '';
    borderImageSource = '';
    borderImageWidth = '';
    borderInline = '';
    borderInlineColor = '';
    borderInlineEnd = '';
    borderInlineEndColor = '';
    borderInlineEndStyle = '';
    borderInlineEndWidth = '';
    borderInlineStart = '';
    borderInlineStartColor = '';
    borderInlineStartStyle = '';
    borderInlineStartWidth = '';
    borderInlineStyle = '';
    borderInlineWidth = '';
    borderLeft = '';
    borderLeftColor = '';
    borderLeftStyle = '';
    borderLeftWidth = '';
    borderRadius = '';
    borderRight = '';
    borderRightColor = '';
    borderRightStyle = '';
    borderRightWidth = '';
    borderSpacing = '';
    borderStartEndRadius = '';
    borderStartStartRadius = '';
    borderStyle = '';
    borderTop = '';
    borderTopColor = '';
    borderTopLeftRadius = '';
    borderTopRightRadius = '';
    borderTopStyle = '';
    borderTopWidth = '';
    borderWidth = '';
    bottom = '';
    boxShadow = '';
    boxSizing = '';
    breakAfter = '';
    breakBefore = '';
    breakInside = '';
    captionSide = '';
    caretColor = '';
    clear = '';
    clip = '';
    clipPath = '';
    clipRule = '';
    color = '';
    colorInterpolation = '';
    colorInterpolationFilters = '';
    colorScheme = '';
    columnCount = '';
    columnFill = '';
    columnGap = '';
    columnRule = '';
    columnRuleColor = '';
    columnRuleStyle = '';
    columnRuleWidth = '';
    columnSpan = '';
    columnWidth = '';
    columns = '';
    contain = '';
    containIntrinsicBlockSize = '';
    containIntrinsicHeight = '';
    containIntrinsicInlineSize = '';
    containIntrinsicSize = '';
    containIntrinsicWidth = '';
    container = '';
    containerName = '';
    containerType = '';
    content = '';
    counterIncrement = '';
    counterReset = '';
    counterSet = '';
    cssFloat = '';
    cssText = '';
    cursor = '';
    direction = '';
    display = '';
    dominantBaseline = '';
    emptyCells = '';
    fill = '';
    fillOpacity = '';
    fillRule = '';
    filter = '';
    flex = '';
    flexBasis = '';
    flexDirection = '';
    flexFlow = '';
    flexGrow = '';
    flexShrink = '';
    flexWrap = '';
    float = '';
    floodColor = '';
    floodOpacity = '';
    font = '';
    fontFamily = '';
    fontFeatureSettings = '';
    fontKerning = '';
    fontOpticalSizing = '';
    fontPalette = '';
    fontSize = '';
    fontSizeAdjust = '';
    fontStretch = '';
    fontStyle = '';
    fontSynthesis = '';
    fontSynthesisSmallCaps = '';
    fontSynthesisStyle = '';
    fontSynthesisWeight = '';
    fontVariant = '';
    fontVariantAlternates = '';
    fontVariantCaps = '';
    fontVariantEastAsian = '';
    fontVariantLigatures = '';
    fontVariantNumeric = '';
    fontVariantPosition = '';
    fontVariationSettings = '';
    fontWeight = '';
    forcedColorAdjust = '';
    gap = '';
    grid = '';
    gridArea = '';
    gridAutoColumns = '';
    gridAutoFlow = '';
    gridAutoRows = '';
    gridColumn = '';
    gridColumnEnd = '';
    gridColumnGap = '';
    gridColumnStart = '';
    gridGap = '';
    gridRow = '';
    gridRowEnd = '';
    gridRowGap = '';
    gridRowStart = '';
    gridTemplate = '';
    gridTemplateAreas = '';
    gridTemplateColumns = '';
    gridTemplateRows = '';
    height = '';
    hyphenateCharacter = '';
    hyphens = '';
    imageOrientation = '';
    imageRendering = '';
    inlineSize = '';
    inset = '';
    insetBlock = '';
    insetBlockEnd = '';
    insetBlockStart = '';
    insetInline = '';
    insetInlineEnd = '';
    insetInlineStart = '';
    isolation = '';
    justifyContent = '';
    justifyItems = '';
    justifySelf = '';
    left = '';
    length;
    letterSpacing = '';
    lightingColor = '';
    lineBreak = '';
    lineHeight = '';
    listStyle = '';
    listStyleImage = '';
    listStylePosition = '';
    listStyleType = '';
    margin = '';
    marginBlock = '';
    marginBlockEnd = '';
    marginBlockStart = '';
    marginBottom = '';
    marginInline = '';
    marginInlineEnd = '';
    marginInlineStart = '';
    marginLeft = '';
    marginRight = '';
    marginTop = '';
    marker = '';
    markerEnd = '';
    markerMid = '';
    markerStart = '';
    mask = '';
    maskClip = '';
    maskComposite = '';
    maskImage = '';
    maskMode = '';
    maskOrigin = '';
    maskPosition = '';
    maskRepeat = '';
    maskSize = '';
    maskType = '';
    mathStyle = '';
    maxBlockSize = '';
    maxHeight = '';
    maxInlineSize = '';
    maxWidth = '';
    minBlockSize = '';
    minHeight = '';
    minInlineSize = '';
    minWidth = '';
    mixBlendMode = '';
    objectFit = '';
    objectPosition = '';
    offset = '';
    offsetDistance = '';
    offsetPath = '';
    offsetRotate = '';
    opacity = '';
    order = '';
    orphans = '';
    outline = '';
    outlineColor = '';
    outlineOffset = '';
    outlineStyle = '';
    outlineWidth = '';
    overflow = '';
    overflowAnchor = '';
    overflowClipMargin = '';
    overflowWrap = '';
    overflowX = '';
    overflowY = '';
    overscrollBehavior = '';
    overscrollBehaviorBlock = '';
    overscrollBehaviorInline = '';
    overscrollBehaviorX = '';
    overscrollBehaviorY = '';
    padding = '';
    paddingBlock = '';
    paddingBlockEnd = '';
    paddingBlockStart = '';
    paddingBottom = '';
    paddingInline = '';
    paddingInlineEnd = '';
    paddingInlineStart = '';
    paddingLeft = '';
    paddingRight = '';
    paddingTop = '';
    page = '';
    pageBreakAfter = '';
    pageBreakBefore = '';
    pageBreakInside = '';
    paintOrder = '';
    parentRule;
    perspective = '';
    perspectiveOrigin = '';
    placeContent = '';
    placeItems = '';
    placeSelf = '';
    pointerEvents = '';
    position = '';
    printColorAdjust = '';
    quotes = '';
    resize = '';
    right = '';
    rotate = '';
    rowGap = '';
    rubyPosition = '';
    scale = '';
    scrollBehavior = '';
    scrollMargin = '';
    scrollMarginBlock = '';
    scrollMarginBlockEnd = '';
    scrollMarginBlockStart = '';
    scrollMarginBottom = '';
    scrollMarginInline = '';
    scrollMarginInlineEnd = '';
    scrollMarginInlineStart = '';
    scrollMarginLeft = '';
    scrollMarginRight = '';
    scrollMarginTop = '';
    scrollPadding = '';
    scrollPaddingBlock = '';
    scrollPaddingBlockEnd = '';
    scrollPaddingBlockStart = '';
    scrollPaddingBottom = '';
    scrollPaddingInline = '';
    scrollPaddingInlineEnd = '';
    scrollPaddingInlineStart = '';
    scrollPaddingLeft = '';
    scrollPaddingRight = '';
    scrollPaddingTop = '';
    scrollSnapAlign = '';
    scrollSnapStop = '';
    scrollSnapType = '';
    scrollbarGutter = '';
    shapeImageThreshold = '';
    shapeMargin = '';
    shapeOutside = '';
    shapeRendering = '';
    stopColor = '';
    stopOpacity = '';
    stroke = '';
    strokeDasharray = '';
    strokeDashoffset = '';
    strokeLinecap = '';
    strokeLinejoin = '';
    strokeMiterlimit = '';
    strokeOpacity = '';
    strokeWidth = '';
    tabSize = '';
    tableLayout = '';
    textAlign = '';
    textAlignLast = '';
    textAnchor = '';
    textCombineUpright = '';
    textDecoration = '';
    textDecorationColor = '';
    textDecorationLine = '';
    textDecorationSkipInk = '';
    textDecorationStyle = '';
    textDecorationThickness = '';
    textEmphasis = '';
    textEmphasisColor = '';
    textEmphasisPosition = '';
    textEmphasisStyle = '';
    textIndent = '';
    textOrientation = '';
    textOverflow = '';
    textRendering = '';
    textShadow = '';
    textTransform = '';
    textUnderlineOffset = '';
    textUnderlinePosition = '';
    top = '';
    touchAction = '';
    transform = '';
    transformBox = '';
    transformOrigin = '';
    transformStyle = '';
    transition = '';
    transitionDelay = '';
    transitionDuration = '';
    transitionProperty = '';
    transitionTimingFunction = '';
    translate = '';
    unicodeBidi = '';
    userSelect = '';
    verticalAlign = '';
    visibility = '';
    webkitAlignContent = '';
    webkitAlignItems = '';
    webkitAlignSelf = '';
    webkitAnimation = '';
    webkitAnimationDelay = '';
    webkitAnimationDirection = '';
    webkitAnimationDuration = '';
    webkitAnimationFillMode = '';
    webkitAnimationIterationCount = '';
    webkitAnimationName = '';
    webkitAnimationPlayState = '';
    webkitAnimationTimingFunction = '';
    webkitAppearance = '';
    webkitBackfaceVisibility = '';
    webkitBackgroundClip = '';
    webkitBackgroundOrigin = '';
    webkitBackgroundSize = '';
    webkitBorderBottomLeftRadius = '';
    webkitBorderBottomRightRadius = '';
    webkitBorderRadius = '';
    webkitBorderTopLeftRadius = '';
    webkitBorderTopRightRadius = '';
    webkitBoxAlign = '';
    webkitBoxFlex = '';
    webkitBoxOrdinalGroup = '';
    webkitBoxOrient = '';
    webkitBoxPack = '';
    webkitBoxShadow = '';
    webkitBoxSizing = '';
    webkitFilter = '';
    webkitFlex = '';
    webkitFlexBasis = '';
    webkitFlexDirection = '';
    webkitFlexFlow = '';
    webkitFlexGrow = '';
    webkitFlexShrink = '';
    webkitFlexWrap = '';
    webkitJustifyContent = '';
    webkitLineClamp = '';
    webkitMask = '';
    webkitMaskBoxImage = '';
    webkitMaskBoxImageOutset = '';
    webkitMaskBoxImageRepeat = '';
    webkitMaskBoxImageSlice = '';
    webkitMaskBoxImageSource = '';
    webkitMaskBoxImageWidth = '';
    webkitMaskClip = '';
    webkitMaskComposite = '';
    webkitMaskImage = '';
    webkitMaskOrigin = '';
    webkitMaskPosition = '';
    webkitMaskRepeat = '';
    webkitMaskSize = '';
    webkitOrder = '';
    webkitPerspective = '';
    webkitPerspectiveOrigin = '';
    webkitTextFillColor = '';
    webkitTextSizeAdjust = '';
    webkitTextStroke = '';
    webkitTextStrokeColor = '';
    webkitTextStrokeWidth = '';
    webkitTransform = '';
    webkitTransformOrigin = '';
    webkitTransformStyle = '';
    webkitTransition = '';
    webkitTransitionDelay = '';
    webkitTransitionDuration = '';
    webkitTransitionProperty = '';
    webkitTransitionTimingFunction = '';
    webkitUserSelect = '';
    whiteSpace = '';
    widows = '';
    width = '';
    willChange = '';
    wordBreak = '';
    wordSpacing = '';
    wordWrap = '';
    writingMode = '';
    zIndex = 0;
}
/**
 * @public
 */
export default class JElementCssStyle extends JElementStyleDeclaration {
    static styleNamesMap = [];
    // 所有样式名称
    get names() {
        if (!JElementCssStyle.styleNamesMap.length) {
            const map = new JElementStyleProperty();
            const keys = Object.getOwnPropertyNames(map);
            for (const k of keys) {
                const t = typeof map[k];
                if (t === 'string' || t === 'number')
                    JElementCssStyle.styleNamesMap.push(k);
            }
        }
        return JElementCssStyle.styleNamesMap;
    }
}
// 最外层容器默认样式
export const ContainerDefaultStyle = {
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
/**
 * 默认编辑器样式
 */
export const editorDefaultCssContent = `.j-design-editor-container {
        border: 1px solid transparent;
    }
    .j-design-editor-container.selected {
        box-shadow: none!important;
        border: 1px solid rgba(6,155,181,1);
    }
    .j-design-editor-container:hover {
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
    }
    .j-design-editor-controller .item-skew {
        box-shadow: 0 0 2px 2px #ccc;
        opacity: 0.2;
    }
    .j-design-editor-controller .item-skew:hover {
        opacity: 0.9;
    }
    .j-design-editor-controller .item-rotate {
        opacity: 0.5;
    }
    .j-design-editor-controller .item-rotate:hover {
        opacity: 1;
    }
    `;
