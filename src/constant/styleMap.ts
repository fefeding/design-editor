
import EventEmiter from '@fefeding/eventemitter';

export const topZIndex = 10000;

/**
 * 支持的样式属性列表
 * @public
 */
export class JElementStyleDeclaration extends EventEmiter {
    accentColor?: string;
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    alignmentBaseline?: string;
    all?: string;
    animation?: string;
    animationComposition?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string;
    animationName?: string;
    animationPlayState?: string;
    animationTimingFunction?: string;
    appearance?: string;
    aspectRatio?: string;
    backdropFilter?: string;
    backfaceVisibility?: string;
    background?: string;
    backgroundAttachment?: string;
    backgroundBlendMode?: string;
    backgroundClip?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    baselineShift?: string;
    blockSize?: string;
    border?: string;
    borderBlock?: string;
    borderBlockColor?: string;
    borderBlockEnd?: string;
    borderBlockEndColor?: string;
    borderBlockEndStyle?: string;
    borderBlockEndWidth?: string;
    borderBlockStart?: string;
    borderBlockStartColor?: string;
    borderBlockStartStyle?: string;
    borderBlockStartWidth?: string;
    borderBlockStyle?: string;
    borderBlockWidth?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomStyle?: string;
    borderBottomWidth?: string;
    borderCollapse?: string;
    borderColor?: string;
    borderEndEndRadius?: string;
    borderEndStartRadius?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderInline?: string;
    borderInlineColor?: string;
    borderInlineEnd?: string;
    borderInlineEndColor?: string;
    borderInlineEndStyle?: string;
    borderInlineEndWidth?: string;
    borderInlineStart?: string;
    borderInlineStartColor?: string;
    borderInlineStartStyle?: string;
    borderInlineStartWidth?: string;
    borderInlineStyle?: string;
    borderInlineWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string;
    borderRadius?: string;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string;
    borderSpacing?: string;
    borderStartEndRadius?: string;
    borderStartStartRadius?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderTopStyle?: string;
    borderTopWidth?: string;
    borderWidth?: string;
    bottom?: string|number;
    boxShadow?: string;
    boxSizing?: string;
    breakAfter?: string;
    breakBefore?: string;
    breakInside?: string;
    captionSide?: string;
    caretColor?: string;
    clear?: string;
    clip?: string;
    clipPath?: string;
    clipRule?: string;
    color?: string;
    colorInterpolation?: string;
    colorInterpolationFilters?: string;
    colorScheme?: string;
    columnCount?: string;
    columnFill?: string;
    columnGap?: string;
    columnRule?: string;
    columnRuleColor?: string;
    columnRuleStyle?: string;
    columnRuleWidth?: string;
    columnSpan?: string;
    columnWidth?: string;
    columns?: string;
    contain?: string;
    containIntrinsicBlockSize?: string;
    containIntrinsicHeight?: string;
    containIntrinsicInlineSize?: string;
    containIntrinsicSize?: string;
    containIntrinsicWidth?: string;
    container?: string;
    containerName?: string;
    containerType?: string;
    content?: string;
    counterIncrement?: string;
    counterReset?: string;
    counterSet?: string;
    cssFloat?: string;
    cssText?: string;
    cursor?: string;
    direction?: string;
    display?: string;
    dominantBaseline?: string;
    emptyCells?: string;
    fill?: string;
    fillOpacity?: string;
    fillRule?: string;
    filter?: string;
    flex?: string;
    flexBasis?: string;
    flexDirection?: string;
    flexFlow?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexWrap?: string;
    float?: string;
    floodColor?: string;
    floodOpacity?: string;
    font?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontOpticalSizing?: string;
    fontPalette?: string;
    fontSize?: string|number;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontSynthesis?: string;
    fontSynthesisSmallCaps?: string;
    fontSynthesisStyle?: string;
    fontSynthesisWeight?: string;
    fontVariant?: string;
    fontVariantAlternates?: string;
    fontVariantCaps?: string;
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontVariantPosition?: string;
    fontVariationSettings?: string;
    fontWeight?: string;
    forcedColorAdjust?: string;
    gap?: string;
    grid?: string;
    gridArea?: string;
    gridAutoColumns?: string;
    gridAutoFlow?: string;
    gridAutoRows?: string;
    gridColumn?: string;
    gridColumnEnd?: string;
    gridColumnGap?: string;
    gridColumnStart?: string;
    gridGap?: string;
    gridRow?: string;
    gridRowEnd?: string;
    gridRowGap?: string;
    gridRowStart?: string;
    gridTemplate?: string;
    gridTemplateAreas?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    height?: string|number;
    hyphenateCharacter?: string;
    hyphens?: string;
    imageOrientation?: string;
    imageRendering?: string;
    inlineSize?: string;
    inset?: string;
    insetBlock?: string;
    insetBlockEnd?: string;
    insetBlockStart?: string;
    insetInline?: string;
    insetInlineEnd?: string;
    insetInlineStart?: string;
    isolation?: string;
    justifyContent?: string;
    justifyItems?: string;
    justifySelf?: string;
    left?: string|number;
    length?: number;
    letterSpacing?: string;
    lightingColor?: string;
    lineBreak?: string;
    lineHeight?: string;
    listStyle?: string;
    listStyleImage?: string;
    listStylePosition?: string;
    listStyleType?: string;
    margin?: string;
    marginBlock?: string;
    marginBlockEnd?: string;
    marginBlockStart?: string;
    marginBottom?: string;
    marginInline?: string;
    marginInlineEnd?: string;
    marginInlineStart?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marker?: string;
    markerEnd?: string;
    markerMid?: string;
    markerStart?: string;
    mask?: string;
    maskClip?: string;
    maskComposite?: string;
    maskImage?: string;
    maskMode?: string;
    maskOrigin?: string;
    maskPosition?: string;
    maskRepeat?: string;
    maskSize?: string;
    maskType?: string;
    mathStyle?: string;
    maxBlockSize?: string;
    maxHeight?: string;
    maxInlineSize?: string;
    maxWidth?: string;
    minBlockSize?: string;
    minHeight?: string;
    minInlineSize?: string;
    minWidth?: string;
    mixBlendMode?: string;
    objectFit?: string;
    objectPosition?: string;
    offset?: string;
    offsetDistance?: string;
    offsetPath?: string;
    offsetRotate?: string;
    opacity?: string;
    order?: string;
    orphans?: string;
    outline?: string;
    outlineColor?: string;
    outlineOffset?: string;
    outlineStyle?: string;
    outlineWidth?: string;
    overflow?: string;
    overflowAnchor?: string;
    overflowClipMargin?: string;
    overflowWrap?: string;
    overflowX?: string;
    overflowY?: string;
    overscrollBehavior?: string;
    overscrollBehaviorBlock?: string;
    overscrollBehaviorInline?: string;
    overscrollBehaviorX?: string;
    overscrollBehaviorY?: string;
    padding?: string;
    paddingBlock?: string;
    paddingBlockEnd?: string;
    paddingBlockStart?: string;
    paddingBottom?: string;
    paddingInline?: string;
    paddingInlineEnd?: string;
    paddingInlineStart?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    page?: string;
    pageBreakAfter?: string;
    pageBreakBefore?: string;
    pageBreakInside?: string;
    paintOrder?: string;
    parentRule?: CSSRule;
    perspective?: string;
    perspectiveOrigin?: string;
    placeContent?: string;
    placeItems?: string;
    placeSelf?: string;
    pointerEvents?: string;
    position?: string;
    printColorAdjust?: string;
    quotes?: string;
    resize?: string;
    right?: string|number;
    rotate?: string;
    rowGap?: string;
    rubyPosition?: string;
    scale?: string;
    scrollBehavior?: string;
    scrollMargin?: string;
    scrollMarginBlock?: string;
    scrollMarginBlockEnd?: string;
    scrollMarginBlockStart?: string;
    scrollMarginBottom?: string;
    scrollMarginInline?: string;
    scrollMarginInlineEnd?: string;
    scrollMarginInlineStart?: string;
    scrollMarginLeft?: string;
    scrollMarginRight?: string;
    scrollMarginTop?: string;
    scrollPadding?: string;
    scrollPaddingBlock?: string;
    scrollPaddingBlockEnd?: string;
    scrollPaddingBlockStart?: string;
    scrollPaddingBottom?: string;
    scrollPaddingInline?: string;
    scrollPaddingInlineEnd?: string;
    scrollPaddingInlineStart?: string;
    scrollPaddingLeft?: string;
    scrollPaddingRight?: string;
    scrollPaddingTop?: string;
    scrollSnapAlign?: string;
    scrollSnapStop?: string;
    scrollSnapType?: string;
    scrollbarGutter?: string;
    shapeImageThreshold?: string;
    shapeMargin?: string;
    shapeOutside?: string;
    shapeRendering?: string;
    stopColor?: string;
    stopOpacity?: string;
    stroke?: string;
    strokeDasharray?: string;
    strokeDashoffset?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeMiterlimit?: string;
    strokeOpacity?: string;
    strokeWidth?: string;
    tabSize?: string;
    tableLayout?: string;
    textAlign?: string;
    textAlignLast?: string;
    textAnchor?: string;
    textCombineUpright?: string;
    textDecoration?: string;
    textDecorationColor?: string;
    textDecorationLine?: string;
    textDecorationSkipInk?: string;
    textDecorationStyle?: string;
    textDecorationThickness?: string;
    textEmphasis?: string;
    textEmphasisColor?: string;
    textEmphasisPosition?: string;
    textEmphasisStyle?: string;
    textIndent?: string;
    textOrientation?: string;
    textOverflow?: string;
    textRendering?: string;
    textShadow?: string;
    textTransform?: string;
    textUnderlineOffset?: string;
    textUnderlinePosition?: string;
    top?: string|number;
    touchAction?: string;
    transform?: string;
    transformBox?: string;
    transformOrigin?: string;
    transformStyle?: string;
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
    translate?: string;
    unicodeBidi?: string;
    userSelect?: string;
    verticalAlign?: string;
    visibility?: string;
    whiteSpace?: string;
    widows?: string;
    width?: string|number;
    willChange?: string;
    wordBreak?: string;
    wordSpacing?: string;
    wordWrap?: string;
    writingMode?: string;
    zIndex?: string|number;
}
/**
 * @public
 */
export type IJElementStyleDeclaration = Omit<JElementStyleDeclaration, keyof EventEmiter>;

/**
 * 样式属性集合
 * @public
 */
export class JElementStyleProperty {
    accentColor: string='';
    alignContent: string='';
    alignItems: string='';
    alignSelf: string='';
    alignmentBaseline: string='';
    all: string='';
    animation: string='';
    animationComposition: string='';
    animationDelay: string='';
    animationDirection: string='';
    animationDuration: string='';
    animationFillMode: string='';
    animationIterationCount: string='';
    animationName: string='';
    animationPlayState: string='';
    animationTimingFunction: string='';
    appearance: string='';
    aspectRatio: string='';
    backdropFilter: string='';
    backfaceVisibility: string='';
    background: string='';
    backgroundAttachment: string='';
    backgroundBlendMode: string='';
    backgroundClip: string='';
    backgroundColor: string='';
    backgroundImage: string='';
    backgroundOrigin: string='';
    backgroundPosition: string='';
    backgroundPositionX: string='';
    backgroundPositionY: string='';
    backgroundRepeat: string='';
    backgroundSize: string='';
    baselineShift: string='';
    blockSize: string='';
    border: string='';
    borderBlock: string='';
    borderBlockColor: string='';
    borderBlockEnd: string='';
    borderBlockEndColor: string='';
    borderBlockEndStyle: string='';
    borderBlockEndWidth: string='';
    borderBlockStart: string='';
    borderBlockStartColor: string='';
    borderBlockStartStyle: string='';
    borderBlockStartWidth: string='';
    borderBlockStyle: string='';
    borderBlockWidth: string='';
    borderBottom: string='';
    borderBottomColor: string='';
    borderBottomLeftRadius: string='';
    borderBottomRightRadius: string='';
    borderBottomStyle: string='';
    borderBottomWidth: string='';
    borderCollapse: string='';
    borderColor: string='';
    borderEndEndRadius: string='';
    borderEndStartRadius: string='';
    borderImage: string='';
    borderImageOutset: string='';
    borderImageRepeat: string='';
    borderImageSlice: string='';
    borderImageSource: string='';
    borderImageWidth: string='';
    borderInline: string='';
    borderInlineColor: string='';
    borderInlineEnd: string='';
    borderInlineEndColor: string='';
    borderInlineEndStyle: string='';
    borderInlineEndWidth: string='';
    borderInlineStart: string='';
    borderInlineStartColor: string='';
    borderInlineStartStyle: string='';
    borderInlineStartWidth: string='';
    borderInlineStyle: string='';
    borderInlineWidth: string='';
    borderLeft: string='';
    borderLeftColor: string='';
    borderLeftStyle: string='';
    borderLeftWidth: string='';
    borderRadius: string='';
    borderRight: string='';
    borderRightColor: string='';
    borderRightStyle: string='';
    borderRightWidth: string='';
    borderSpacing: string='';
    borderStartEndRadius: string='';
    borderStartStartRadius: string='';
    borderStyle: string='';
    borderTop: string='';
    borderTopColor: string='';
    borderTopLeftRadius: string='';
    borderTopRightRadius: string='';
    borderTopStyle: string='';
    borderTopWidth: string='';
    borderWidth: string='';
    bottom: string='';
    boxShadow: string='';
    boxSizing: string='';
    breakAfter: string='';
    breakBefore: string='';
    breakInside: string='';
    captionSide: string='';
    caretColor: string='';
    clear: string='';
    clip: string='';
    clipPath: string='';
    clipRule: string='';
    color: string='';
    colorInterpolation: string='';
    colorInterpolationFilters: string='';
    colorScheme: string='';
    columnCount: string='';
    columnFill: string='';
    columnGap: string='';
    columnRule: string='';
    columnRuleColor: string='';
    columnRuleStyle: string='';
    columnRuleWidth: string='';
    columnSpan: string='';
    columnWidth: string='';
    columns: string='';
    contain: string='';
    containIntrinsicBlockSize: string='';
    containIntrinsicHeight: string='';
    containIntrinsicInlineSize: string='';
    containIntrinsicSize: string='';
    containIntrinsicWidth: string='';
    container: string='';
    containerName: string='';
    containerType: string='';
    content: string='';
    counterIncrement: string='';
    counterReset: string='';
    counterSet: string='';
    cssFloat: string='';
    cssText: string='';
    cursor: string='';
    direction: string='';
    display: string='';
    dominantBaseline: string='';
    emptyCells: string='';
    fill: string='';
    fillOpacity: string='';
    fillRule: string='';
    filter: string='';
    flex: string='';
    flexBasis: string='';
    flexDirection: string='';
    flexFlow: string='';
    flexGrow: string='';
    flexShrink: string='';
    flexWrap: string='';
    float: string='';
    floodColor: string='';
    floodOpacity: string='';
    font: string='';
    fontFamily: string='';
    fontFeatureSettings: string='';
    fontKerning: string='';
    fontOpticalSizing: string='';
    fontPalette: string='';
    fontSize: string|number='';
    fontSizeAdjust: string='';
    fontStretch: string='';
    fontStyle: string='';
    fontSynthesis: string='';
    fontSynthesisSmallCaps: string='';
    fontSynthesisStyle: string='';
    fontSynthesisWeight: string='';
    fontVariant: string='';
    fontVariantAlternates: string='';
    fontVariantCaps: string='';
    fontVariantEastAsian: string='';
    fontVariantLigatures: string='';
    fontVariantNumeric: string='';
    fontVariantPosition: string='';
    fontVariationSettings: string='';
    fontWeight: string='';
    forcedColorAdjust: string='';
    gap: string='';
    grid: string='';
    gridArea: string='';
    gridAutoColumns: string='';
    gridAutoFlow: string='';
    gridAutoRows: string='';
    gridColumn: string='';
    gridColumnEnd: string='';
    gridColumnGap: string='';
    gridColumnStart: string='';
    gridGap: string='';
    gridRow: string='';
    gridRowEnd: string='';
    gridRowGap: string='';
    gridRowStart: string='';
    gridTemplate: string='';
    gridTemplateAreas: string='';
    gridTemplateColumns: string='';
    gridTemplateRows: string='';
    height: string='';
    hyphenateCharacter: string='';
    hyphens: string='';
    imageOrientation: string='';
    imageRendering: string='';
    inlineSize: string='';
    inset: string='';
    insetBlock: string='';
    insetBlockEnd: string='';
    insetBlockStart: string='';
    insetInline: string='';
    insetInlineEnd: string='';
    insetInlineStart: string='';
    isolation: string='';
    justifyContent: string='';
    justifyItems: string='';
    justifySelf: string='';
    left: string='';
    length: number;
    letterSpacing: string='';
    lightingColor: string='';
    lineBreak: string='';
    lineHeight: string='';
    listStyle: string='';
    listStyleImage: string='';
    listStylePosition: string='';
    listStyleType: string='';
    margin: string='';
    marginBlock: string='';
    marginBlockEnd: string='';
    marginBlockStart: string='';
    marginBottom: string='';
    marginInline: string='';
    marginInlineEnd: string='';
    marginInlineStart: string='';
    marginLeft: string='';
    marginRight: string='';
    marginTop: string='';
    marker: string='';
    markerEnd: string='';
    markerMid: string='';
    markerStart: string='';
    mask: string='';
    maskClip: string='';
    maskComposite: string='';
    maskImage: string='';
    maskMode: string='';
    maskOrigin: string='';
    maskPosition: string='';
    maskRepeat: string='';
    maskSize: string='';
    maskType: string='';
    mathStyle: string='';
    maxBlockSize: string='';
    maxHeight: string='';
    maxInlineSize: string='';
    maxWidth: string='';
    minBlockSize: string='';
    minHeight: string='';
    minInlineSize: string='';
    minWidth: string='';
    mixBlendMode: string='';
    objectFit: string='';
    objectPosition: string='';
    offset: string='';
    offsetDistance: string='';
    offsetPath: string='';
    offsetRotate: string='';
    opacity: string='';
    order: string='';
    orphans: string='';
    outline: string='';
    outlineColor: string='';
    outlineOffset: string='';
    outlineStyle: string='';
    outlineWidth: string='';
    overflow: string='';
    overflowAnchor: string='';
    overflowClipMargin: string='';
    overflowWrap: string='';
    overflowX: string='';
    overflowY: string='';
    overscrollBehavior: string='';
    overscrollBehaviorBlock: string='';
    overscrollBehaviorInline: string='';
    overscrollBehaviorX: string='';
    overscrollBehaviorY: string='';
    padding: string='';
    paddingBlock: string='';
    paddingBlockEnd: string='';
    paddingBlockStart: string='';
    paddingBottom: string='';
    paddingInline: string='';
    paddingInlineEnd: string='';
    paddingInlineStart: string='';
    paddingLeft: string='';
    paddingRight: string='';
    paddingTop: string='';
    page: string='';
    pageBreakAfter: string='';
    pageBreakBefore: string='';
    pageBreakInside: string='';
    paintOrder: string='';
    parentRule: CSSRule;
    perspective: string='';
    perspectiveOrigin: string='';
    placeContent: string='';
    placeItems: string='';
    placeSelf: string='';
    pointerEvents: string='';
    position: string='';
    printColorAdjust: string='';
    quotes: string='';
    resize: string='';
    right: string='';
    rotate: string='';
    rowGap: string='';
    rubyPosition: string='';
    scale: string='';
    scrollBehavior: string='';
    scrollMargin: string='';
    scrollMarginBlock: string='';
    scrollMarginBlockEnd: string='';
    scrollMarginBlockStart: string='';
    scrollMarginBottom: string='';
    scrollMarginInline: string='';
    scrollMarginInlineEnd: string='';
    scrollMarginInlineStart: string='';
    scrollMarginLeft: string='';
    scrollMarginRight: string='';
    scrollMarginTop: string='';
    scrollPadding: string='';
    scrollPaddingBlock: string='';
    scrollPaddingBlockEnd: string='';
    scrollPaddingBlockStart: string='';
    scrollPaddingBottom: string='';
    scrollPaddingInline: string='';
    scrollPaddingInlineEnd: string='';
    scrollPaddingInlineStart: string='';
    scrollPaddingLeft: string='';
    scrollPaddingRight: string='';
    scrollPaddingTop: string='';
    scrollSnapAlign: string='';
    scrollSnapStop: string='';
    scrollSnapType: string='';
    scrollbarGutter: string='';
    shapeImageThreshold: string='';
    shapeMargin: string='';
    shapeOutside: string='';
    shapeRendering: string='';
    stopColor: string='';
    stopOpacity: string='';
    stroke: string='';
    strokeDasharray: string='';
    strokeDashoffset: string='';
    strokeLinecap: string='';
    strokeLinejoin: string='';
    strokeMiterlimit: string='';
    strokeOpacity: string='';
    strokeWidth: string='';
    tabSize: string='';
    tableLayout: string='';
    textAlign: string='';
    textAlignLast: string='';
    textAnchor: string='';
    textCombineUpright: string='';
    textDecoration: string='';
    textDecorationColor: string='';
    textDecorationLine: string='';
    textDecorationSkipInk: string='';
    textDecorationStyle: string='';
    textDecorationThickness: string='';
    textEmphasis: string='';
    textEmphasisColor: string='';
    textEmphasisPosition: string='';
    textEmphasisStyle: string='';
    textIndent: string='';
    textOrientation: string='';
    textOverflow: string='';
    textRendering: string='';
    textShadow: string='';
    textTransform: string='';
    textUnderlineOffset: string='';
    textUnderlinePosition: string='';
    top: string='';
    touchAction: string='';
    transform: string='';
    transformBox: string='';
    transformOrigin: string='';
    transformStyle: string='';
    transition: string='';
    transitionDelay: string='';
    transitionDuration: string='';
    transitionProperty: string='';
    transitionTimingFunction: string='';
    translate: string='';
    unicodeBidi: string='';
    userSelect: string='';
    verticalAlign: string='';
    visibility: string='';
    webkitAlignContent: string='';
    webkitAlignItems: string='';
    webkitAlignSelf: string='';
    webkitAnimation: string='';
    webkitAnimationDelay: string='';
    webkitAnimationDirection: string='';
    webkitAnimationDuration: string='';
    webkitAnimationFillMode: string='';
    webkitAnimationIterationCount: string='';
    webkitAnimationName: string='';
    webkitAnimationPlayState: string='';
    webkitAnimationTimingFunction: string='';
    webkitAppearance: string='';
    webkitBackfaceVisibility: string='';
    webkitBackgroundClip: string='';
    webkitBackgroundOrigin: string='';
    webkitBackgroundSize: string='';
    webkitBorderBottomLeftRadius: string='';
    webkitBorderBottomRightRadius: string='';
    webkitBorderRadius: string='';
    webkitBorderTopLeftRadius: string='';
    webkitBorderTopRightRadius: string='';
    webkitBoxAlign: string='';
    webkitBoxFlex: string='';
    webkitBoxOrdinalGroup: string='';
    webkitBoxOrient: string='';
    webkitBoxPack: string='';
    webkitBoxShadow: string='';
    webkitBoxSizing: string='';
    webkitFilter: string='';
    webkitFlex: string='';
    webkitFlexBasis: string='';
    webkitFlexDirection: string='';
    webkitFlexFlow: string='';
    webkitFlexGrow: string='';
    webkitFlexShrink: string='';
    webkitFlexWrap: string='';
    webkitJustifyContent: string='';
    webkitLineClamp: string='';
    webkitMask: string='';
    webkitMaskBoxImage: string='';
    webkitMaskBoxImageOutset: string='';
    webkitMaskBoxImageRepeat: string='';
    webkitMaskBoxImageSlice: string='';
    webkitMaskBoxImageSource: string='';
    webkitMaskBoxImageWidth: string='';
    webkitMaskClip: string='';
    webkitMaskComposite: string='';
    webkitMaskImage: string='';
    webkitMaskOrigin: string='';
    webkitMaskPosition: string='';
    webkitMaskRepeat: string='';
    webkitMaskSize: string='';
    webkitOrder: string='';
    webkitPerspective: string='';
    webkitPerspectiveOrigin: string='';
    webkitTextFillColor: string='';
    webkitTextSizeAdjust: string='';
    webkitTextStroke: string='';
    webkitTextStrokeColor: string='';
    webkitTextStrokeWidth: string='';
    webkitTransform: string='';
    webkitTransformOrigin: string='';
    webkitTransformStyle: string='';
    webkitTransition: string='';
    webkitTransitionDelay: string='';
    webkitTransitionDuration: string='';
    webkitTransitionProperty: string='';
    webkitTransitionTimingFunction: string='';
    webkitUserSelect: string='';
    whiteSpace: string='';
    widows: string='';
    width: string='';
    willChange: string='';
    wordBreak: string='';
    wordSpacing: string='';
    wordWrap: string='';
    writingMode: string='';
    zIndex: string|number=0;
}
/**
 * @public
 */
export default abstract class JElementCssStyle extends JElementStyleDeclaration {
    static styleNamesMap = [] as Array<string>;
    // 所有样式名称
    get names() {
        
        if(!JElementCssStyle.styleNamesMap.length) {
            const map = new JElementStyleProperty();
            const keys = Object.getOwnPropertyNames(map);
            for(const k of keys) {
                const t = typeof map[k];
                if(t === 'string' || t === 'number') JElementCssStyle.styleNamesMap.push(k);
            }
        }
        return JElementCssStyle.styleNamesMap;
    }

    // 可以保存的样式白名单
    styleSaveMap: Array<string>;

    // 把样式应用到元素或当前对象
    abstract apply(data: JElementStyleDeclaration, target?: CSSStyleDeclaration | JElementStyleDeclaration, maps?: Array<string>);

    // 样式对应的元素
    abstract applyTo(element: HTMLElement);

    // 设置样式
    abstract setStyle(name, value);

    // 触发所有更新到dom
    abstract refresh();

    // 转为json
    abstract toJSON(): JElementStyleProperty;
}

/**
 * 样式转换接口，用于描述元素在空间中的定位、旋转和缩放。
 * @public
 */
export interface IStyleTransform {
    /**
     * 沿 X 轴平移的值
     */
    translateX?: string|number;

    /**
     * 沿 Y 轴平移的值
     */
    translateY?: string|number;

    /**
     * 沿 Z 轴平移的值
     */
    translateZ?: string|number;

    /**
     * 绕 X 轴旋转的值
     */
    rotateX?: number;

    /**
     * 绕 Y 轴旋转的值
     */
    rotateY?: number;

    /**
     * 绕 Z 轴旋转的值
     */
    rotateZ?: number;

    /**
     * 沿 X 轴的缩放值
     */
    scaleX?: number;

    /**
     * 沿 Y 轴的缩放值
     */
    scaleY?: number;

    /**
     * 沿 Z 轴的缩放值
     */
    scaleZ?: number;

    /**
     * 沿 X 轴的倾斜值
     */
    skewX?: number;

    /**
     * 沿 Y 轴的倾斜值
     */
    skewY?: number;
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
    //padding: '0',
    transformOrigin: 'center center',
    transform: 'none',
    //"paddingTop": '0',
    //"paddingLeft": '0',
    //"paddingRight": '0',
    //"paddingBottom": '0',
    //margin: '0',
    //"marginTop": '0',
    //"marginLeft": '0',
    //"marginRight": '0',
    //"marginBottom": '0',
    zIndex: '0',
    display: 'inline-block',
    overflow: 'visible',
    'filter': 'none',
}


/**
 * 默认编辑器样式
 */
export const editorDefaultCssContent = 
    `.j-design-editor-container {
        border: none;
        font: normal normal normal 14px/normal Arial,sans-serif;
        background-color: transparent;
        color: #000;
        box-sizing: content-box;
        word-break: break-word;
        overflow-wrap: break-word;
    }
    .j-design-editor-container * {
        box-sizing: content-box;
        margin: 0;
        padding: 0;
        outline: none;     
        transition: color 0.3s ease;
    }
    .j-design-editor-container.selected {
        box-shadow: 0 0 1px rgba(6,155,181,1);
    }
    .j-design-editor-container:hover {
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);
    }
    .j-design-editor-container .j-design-editor-component-target {
        display: block;
        cursor: pointer;
        width: 100%;
        height: 100%;   
    }
    .j-design-editor-controller {     
        cursor: move;    
        border: 1px solid rgba(6,155,181,1);
        background-color: transparent;
        position: absolute;
    }
    .j-design-editor-controller .item{     
        border: 1px solid #ccc;
        background-color: #fff;
        position: absolute;
    }
    
    .j-design-editor-controller .item-move,.j-design-editor-controller .item-scale {
        box-shadow: 0 0 2px 2px #eee;
        opacity: 0.5;
    }
    .j-design-editor-controller .item-move:hover,.j-design-editor-controller .item-scale:hover {
        opacity: 0.9;
    }
    .j-design-editor-controller .item-rotate {
        opacity: 0.5;
    }
    .j-design-editor-controller .item-rotate:hover {
        opacity: 1;
    }
    .j-design-editor-container div[contenteditable="true"]:empty:before{
        content: ' ';
        -webkit-tap-highlight-color:transparent;
        -webkit-user-modify:read-write;
        outline:none;
        border:none;
    }
    `;

    // 编辑器默认样式，并且不可改
export const editorDefaultStyle = {
    'boxShadow': '0 0 10px 10px #ccc',
    'position': 'absolute',
    //'backgroundSize': '100% 100%',   
    'left': '0',
    'top': '0',
    'right': '0',
    'bottom': '0'
    //transformOrigin: 'center top',         
}
