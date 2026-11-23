import { v as Gx, r as v, o as K, g as pn, w as Tf, x as Tm, y as Vx, c as Tc, E as Yx, A as Xx, B as Zx, R as q, F as Cn } from "./index-DRgKPvaD.mjs";
const Jx = [
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#A855F7",
  "#C084FC",
  "#D8B4FE",
  "#E9D5FF"
], Qx = [
  "#60A5FA",
  "#818CF8",
  "#A78BFA",
  "#C084FC",
  "#D8B4FE",
  "#E9D5FF",
  "#F3E8FF"
];
function ew(e) {
  return e ? Qx : Jx;
}
function tw() {
  const { isDark: e } = Gx();
  return v.useMemo(
    () => ({
      isDark: e,
      axisLabelColor: e ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)",
      axisLineColor: e ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)",
      splitLineColor: e ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
      tooltipBackground: e ? "#1f1f1f" : "#ffffff",
      tooltipCursorFill: e ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
      primaryBarColor: e ? "#818CF8" : "#6051F5",
      primaryLineColor: e ? "#818CF8" : "#6051F5",
      primaryAreaColor: e ? "#818CF8" : "#6051F5",
      primaryAreaOpacity: e ? 0.25 : 0.18
    }),
    [e]
  );
}
function rw(e, t = {}) {
  const {
    xCount: r = 0,
    xLabelFormatter: n,
    rotateThreshold: i = 10,
    yName: a,
    yLabelFormatter: o
  } = t, { axisLabelColor: u, axisLineColor: l, splitLineColor: c } = e, f = r > i, s = {
    tick: { fill: u, fontSize: 12 },
    axisLine: { stroke: l },
    tickLine: { stroke: l }
  };
  f && (s.angle = -30, s.textAnchor = "end", s.height = 50), n && (s.tickFormatter = n);
  const d = {
    tick: { fill: u, fontSize: 12 },
    axisLine: !1,
    tickLine: !1
  };
  return a && (d.width = 64, d.label = {
    value: a,
    angle: -90,
    position: "insideLeft",
    style: { textAnchor: "middle" },
    fill: u,
    fontSize: 12
  }), o && (d.tickFormatter = o), { xAxis: s, yAxis: d, grid: {
    stroke: c,
    strokeDasharray: "3 3",
    vertical: !1
  } };
}
var nw = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Mc(e) {
  if (typeof e != "string")
    return !1;
  var t = nw;
  return t.includes(e);
}
var iw = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], aw = new Set(iw);
function Mm(e) {
  return typeof e != "string" ? !1 : aw.has(e);
}
function Dm(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function Be(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Mm(r) || Dm(r)) && (t[r] = e[r]);
  return t;
}
function ir(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ v.isValidElement(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return Be(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? Be(e) : null;
}
function Fe(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Mm(r) || Dm(r) || Mc(r)) && (t[r] = e[r]);
  return t;
}
function ow(e) {
  return e == null ? null : /* @__PURE__ */ v.isValidElement(e) ? Fe(e.props) : typeof e == "object" && !Array.isArray(e) ? Fe(e) : null;
}
var uw = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ml() {
  return Ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ml.apply(null, arguments);
}
function lw(e, t) {
  if (e == null) return {};
  var r, n, i = cw(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function cw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Dc = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: u,
    title: l,
    desc: c
  } = e, f = lw(e, uw), s = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = K("recharts-surface", o);
  return /* @__PURE__ */ v.createElement("svg", Ml({}, Fe(f), {
    className: d,
    width: n,
    height: i,
    style: u,
    viewBox: "".concat(s.x, " ").concat(s.y, " ").concat(s.width, " ").concat(s.height),
    ref: t
  }), /* @__PURE__ */ v.createElement("title", null, l), /* @__PURE__ */ v.createElement("desc", null, c), r);
}), sw = ["children", "className"];
function Dl() {
  return Dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dl.apply(null, arguments);
}
function fw(e, t) {
  if (e == null) return {};
  var r, n, i = dw(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var se = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = fw(e, sw), a = K("recharts-layer", n);
  return /* @__PURE__ */ v.createElement("g", Dl({
    className: a
  }, Fe(i), {
    ref: t
  }), r);
}), Nm = /* @__PURE__ */ v.createContext(null), vw = () => v.useContext(Nm);
function ie(e) {
  return function() {
    return e;
  };
}
const $m = Math.cos, oa = Math.sin, ht = Math.sqrt, ua = Math.PI, ro = 2 * ua, Nl = Math.PI, $l = 2 * Nl, yr = 1e-6, pw = $l - yr;
function Lm(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function hw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Lm;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class mw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Lm : hw(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, l = n - t, c = i - r, f = o - t, s = u - r, d = f * f + s * s;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > yr) if (!(Math.abs(s * l - c * f) > yr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, h = i - u, m = l * l + c * c, g = p * p + h * h, y = Math.sqrt(m), b = Math.sqrt(d), x = a * Math.tan((Nl - Math.acos((m + d - g) / (2 * y * b))) / 2), w = x / b, O = x / y;
      Math.abs(w - 1) > yr && this._append`L${t + w * f},${r + w * s}`, this._append`A${a},${a},0,0,${+(s * p > f * h)},${this._x1 = t + O * l},${this._y1 = r + O * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), l = n * Math.sin(i), c = t + u, f = r + l, s = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > yr || Math.abs(this._y1 - f) > yr) && this._append`L${c},${f}`, n && (d < 0 && (d = d % $l + $l), d > pw ? this._append`A${n},${n},0,1,${s},${t - u},${r - l}A${n},${n},0,1,${s},${this._x1 = c},${this._y1 = f}` : d > yr && this._append`A${n},${n},0,${+(d >= Nl)},${s},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Nc(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new mw(t);
}
function $c(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Rm(e) {
  this._context = e;
}
Rm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function no(e) {
  return new Rm(e);
}
function zm(e) {
  return e[0];
}
function Bm(e) {
  return e[1];
}
function Fm(e, t) {
  var r = ie(!0), n = null, i = no, a = null, o = Nc(u);
  e = typeof e == "function" ? e : e === void 0 ? zm : ie(e), t = typeof t == "function" ? t : t === void 0 ? Bm : ie(t);
  function u(l) {
    var c, f = (l = $c(l)).length, s, d = !1, p;
    for (n == null && (a = i(p = o())), c = 0; c <= f; ++c)
      !(c < f && r(s = l[c], c, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(s, c, l), +t(s, c, l));
    if (p) return a = null, p + "" || null;
  }
  return u.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ie(+l), u) : e;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ie(+l), u) : t;
  }, u.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : ie(!!l), u) : r;
  }, u.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n;
  }, u;
}
function Mi(e, t, r) {
  var n = null, i = ie(!0), a = null, o = no, u = null, l = Nc(c);
  e = typeof e == "function" ? e : e === void 0 ? zm : ie(+e), t = typeof t == "function" ? t : ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Bm : ie(+r);
  function c(s) {
    var d, p, h, m = (s = $c(s)).length, g, y = !1, b, x = new Array(m), w = new Array(m);
    for (a == null && (u = o(b = l())), d = 0; d <= m; ++d) {
      if (!(d < m && i(g = s[d], d, s)) === y)
        if (y = !y)
          p = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), h = d - 1; h >= p; --h)
            u.point(x[h], w[h]);
          u.lineEnd(), u.areaEnd();
        }
      y && (x[d] = +e(g, d, s), w[d] = +t(g, d, s), u.point(n ? +n(g, d, s) : x[d], r ? +r(g, d, s) : w[d]));
    }
    if (b) return u = null, b + "" || null;
  }
  function f() {
    return Fm().defined(i).curve(o).context(a);
  }
  return c.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ie(+s), n = null, c) : e;
  }, c.x0 = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ie(+s), c) : e;
  }, c.x1 = function(s) {
    return arguments.length ? (n = s == null ? null : typeof s == "function" ? s : ie(+s), c) : n;
  }, c.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ie(+s), r = null, c) : t;
  }, c.y0 = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ie(+s), c) : t;
  }, c.y1 = function(s) {
    return arguments.length ? (r = s == null ? null : typeof s == "function" ? s : ie(+s), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : ie(!!s), c) : i;
  }, c.curve = function(s) {
    return arguments.length ? (o = s, a != null && (u = o(a)), c) : o;
  }, c.context = function(s) {
    return arguments.length ? (s == null ? a = u = null : u = o(a = s), c) : a;
  }, c;
}
class Km {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function yw(e) {
  return new Km(e, !0);
}
function gw(e) {
  return new Km(e, !1);
}
const Lc = {
  draw(e, t) {
    const r = ht(t / ua);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ro);
  }
}, bw = {
  draw(e, t) {
    const r = ht(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Wm = ht(1 / 3), xw = Wm * 2, ww = {
  draw(e, t) {
    const r = ht(t / xw), n = r * Wm;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Pw = {
  draw(e, t) {
    const r = ht(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Ow = 0.8908130915292852, qm = oa(ua / 10) / oa(7 * ua / 10), Aw = oa(ro / 10) * qm, Sw = -$m(ro / 10) * qm, Ew = {
  draw(e, t) {
    const r = ht(t * Ow), n = Aw * r, i = Sw * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = ro * a / 5, u = $m(o), l = oa(o);
      e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i);
    }
    e.closePath();
  }
}, tu = ht(3), _w = {
  draw(e, t) {
    const r = -ht(t / (tu * 3));
    e.moveTo(0, r * 2), e.lineTo(-tu * r, -r), e.lineTo(tu * r, -r), e.closePath();
  }
}, nt = -0.5, it = ht(3) / 2, Ll = 1 / ht(12), Iw = (Ll / 2 + 1) * 3, jw = {
  draw(e, t) {
    const r = ht(t / Iw), n = r / 2, i = r * Ll, a = n, o = r * Ll + r, u = -a, l = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, l), e.lineTo(nt * n - it * i, it * n + nt * i), e.lineTo(nt * a - it * o, it * a + nt * o), e.lineTo(nt * u - it * l, it * u + nt * l), e.lineTo(nt * n + it * i, nt * i - it * n), e.lineTo(nt * a + it * o, nt * o - it * a), e.lineTo(nt * u + it * l, nt * l - it * u), e.closePath();
  }
};
function Cw(e, t) {
  let r = null, n = Nc(i);
  e = typeof e == "function" ? e : ie(e || Lc), t = typeof t == "function" ? t : ie(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ie(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : ie(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function la() {
}
function ca(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Um(e) {
  this._context = e;
}
Um.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ca(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        ca(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function kw(e) {
  return new Um(e);
}
function Hm(e) {
  this._context = e;
}
Hm.prototype = {
  areaStart: la,
  areaEnd: la,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ca(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Tw(e) {
  return new Hm(e);
}
function Gm(e) {
  this._context = e;
}
Gm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ca(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Mw(e) {
  return new Gm(e);
}
function Vm(e) {
  this._context = e;
}
Vm.prototype = {
  areaStart: la,
  areaEnd: la,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Dw(e) {
  return new Vm(e);
}
function Mf(e) {
  return e < 0 ? -1 : 1;
}
function Df(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Mf(a) + Mf(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Nf(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ru(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function sa(e) {
  this._context = e;
}
sa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ru(this, this._t0, Nf(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ru(this, Nf(this, r = Df(this, e, t)), r);
          break;
        default:
          ru(this, this._t0, r = Df(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ym(e) {
  this._context = new Xm(e);
}
(Ym.prototype = Object.create(sa.prototype)).point = function(e, t) {
  sa.prototype.point.call(this, t, e);
};
function Xm(e) {
  this._context = e;
}
Xm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function Nw(e) {
  return new sa(e);
}
function $w(e) {
  return new Ym(e);
}
function Zm(e) {
  this._context = e;
}
Zm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = $f(e), i = $f(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function $f(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Lw(e) {
  return new Zm(e);
}
function io(e, t) {
  this._context = e, this._t = t;
}
io.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Rw(e) {
  return new io(e, 0.5);
}
function zw(e) {
  return new io(e, 0);
}
function Bw(e) {
  return new io(e, 1);
}
function _r(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Rl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Fw(e, t) {
  return e[t];
}
function Kw(e) {
  const t = [];
  return t.key = e, t;
}
function Ww() {
  var e = ie([]), t = Rl, r = _r, n = Fw;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Kw), u, l = o.length, c = -1, f;
    for (const s of a)
      for (u = 0, ++c; u < l; ++u)
        (o[u][c] = [0, +n(s, o[u].key, c, a)]).data = s;
    for (u = 0, f = $c(t(o)); u < l; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ie(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : ie(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Rl : typeof a == "function" ? a : ie(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? _r, i) : r;
  }, i;
}
function qw(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    _r(e, t);
  }
}
function Uw(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    _r(e, t);
  }
}
function Hw(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], s = f[n][1] || 0, d = f[n - 1][1] || 0, p = (s - d) / 2, h = 0; h < u; ++h) {
          var m = e[t[h]], g = m[n][1] || 0, y = m[n - 1][1] || 0;
          p += g - y;
        }
        l += s, c += p * s;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= c / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, _r(e, t);
  }
}
var nu = {}, iu = {}, Lf;
function Gw() {
  return Lf || (Lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(iu)), iu;
}
var au = {}, Rf;
function Jm() {
  return Rf || (Rf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(au)), au;
}
var ou = {}, zf;
function Rc() {
  return zf || (zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      var n;
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is((n = r == null ? void 0 : r.valueOf) == null ? void 0 : n.call(r), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(ou)), ou;
}
var uu = {}, lu = {}, Bf;
function Vw() {
  return Bf || (Bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(lu)), lu;
}
var Ff;
function zc() {
  return Ff || (Ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Vw(), r = /* @__PURE__ */ Rc();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const a = [], o = i.length;
      if (o === 0)
        return a;
      let u = 0, l = "", c = "", f = !1;
      for (i.charCodeAt(0) === 46 && (a.push(""), u++); u < o; ) {
        const s = i[u];
        c ? s === "\\" && u + 1 < o ? (u++, l += i[u]) : s === c ? c = "" : l += s : f ? s === '"' || s === "'" ? c = s : s === "]" ? (f = !1, a.push(l), l = "") : l += s : s === "[" ? (f = !0, l && (a.push(l), l = "")) : s === "." ? l && (a.push(l), l = "") : l += s, u++;
      }
      return l && a.push(l), a;
    }
    e.toPath = n;
  })(uu)), uu;
}
var Kf;
function Bc() {
  return Kf || (Kf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Gw(), r = /* @__PURE__ */ Jm(), n = /* @__PURE__ */ Rc(), i = /* @__PURE__ */ zc();
    function a(u, l, c) {
      if (u == null)
        return c;
      switch (typeof l) {
        case "string": {
          if (t.isUnsafeProperty(l))
            return c;
          const f = u[l];
          return f === void 0 ? r.isDeepKey(l) ? a(u, i.toPath(l), c) : c : f;
        }
        case "number":
        case "symbol": {
          typeof l == "number" && (l = n.toKey(l));
          const f = u[l];
          return f === void 0 ? c : f;
        }
        default: {
          if (Array.isArray(l))
            return o(u, l, c);
          if (Object.is(l == null ? void 0 : l.valueOf(), -0) ? l = "-0" : l = String(l), t.isUnsafeProperty(l))
            return c;
          const f = u[l];
          return f === void 0 ? c : f;
        }
      }
    }
    function o(u, l, c) {
      if (l.length === 0)
        return c;
      let f = u;
      for (let s = 0; s < l.length; s++) {
        if (f == null || t.isUnsafeProperty(l[s]))
          return c;
        f = f[l[s]];
      }
      return f === void 0 ? c : f;
    }
    e.get = a;
  })(nu)), nu;
}
var cu, Wf;
function Yw() {
  return Wf || (Wf = 1, cu = Bc().get), cu;
}
var Xw = /* @__PURE__ */ Yw();
const Ir = /* @__PURE__ */ pn(Xw);
var Zw = 4;
function tr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zw, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function ve(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + tr(u) + a : i + a;
  }, "");
}
var _e = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, St = (e) => typeof e == "number" && e != +e, jr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, D = (e) => (typeof e == "number" || e instanceof Number) && !St(e), Et = (e) => D(e) || typeof e == "string", Jw = 0, Yn = (e) => {
  var t = ++Jw;
  return "".concat(e || "").concat(t);
}, Ne = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!D(t) && typeof t != "string")
    return n;
  var a;
  if (jr(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return St(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Qm = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function ee(e, t, r) {
  return D(e) && D(t) ? tr(e + r * (t - e)) : t;
}
function ey(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Ir(n, t)) === r);
}
var Qw = (e) => {
  for (var t = e.length, r = 0, n = 0, i = 0, a = 0, o = 1 / 0, u = -1 / 0, l = 0, c = 0, f = 0; f < t; f++) {
    var s, d;
    l = ((s = e[f]) === null || s === void 0 ? void 0 : s.cx) || 0, c = ((d = e[f]) === null || d === void 0 ? void 0 : d.cy) || 0, r += l, n += c, i += l * c, a += l * l, o = Math.min(o, l), u = Math.max(u, l);
  }
  var p = t * a !== r * r ? (t * i - r * n) / (t * a - r * r) : 0;
  return {
    xmin: o,
    xmax: u,
    a: p,
    b: (n - p * r) / t
  };
}, Q = (e) => e === null || typeof e > "u", di = (e) => Q(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function He(e) {
  return e != null;
}
function Lr() {
}
var eP = ["type", "size", "sizeType"];
function zl() {
  return zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zl.apply(null, arguments);
}
function qf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qf(Object(r), !0).forEach(function(n) {
      tP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tP(e, t, r) {
  return (t = rP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rP(e) {
  var t = nP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iP(e, t) {
  if (e == null) return {};
  var r, n, i = aP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function aP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ty = {
  symbolCircle: Lc,
  symbolCross: bw,
  symbolDiamond: ww,
  symbolSquare: Pw,
  symbolStar: Ew,
  symbolTriangle: _w,
  symbolWye: jw
}, oP = Math.PI / 180, uP = (e) => {
  var t = "symbol".concat(di(e));
  return ty[t] || Lc;
}, lP = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * oP;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, cP = (e, t) => {
  ty["symbol".concat(di(e))] = t;
}, ao = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = iP(e, eP), a = Uf(Uf({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = uP(o), p = Cw().type(d).size(lP(r, n, o)), h = p();
    if (h !== null)
      return h;
  }, {
    className: l,
    cx: c,
    cy: f
  } = a, s = Fe(a);
  return D(c) && D(f) && D(r) ? /* @__PURE__ */ v.createElement("path", zl({}, s, {
    className: K("recharts-symbols", l),
    transform: "translate(".concat(c, ", ").concat(f, ")"),
    d: u()
  })) : null;
};
ao.registerSymbol = cP;
var ry = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, Fc = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ v.isValidElement(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    Mc(i) && typeof r[i] == "function" && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, sP = (e, t, r) => (n) => (e(t, r, n), null), hn = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    Mc(i) && typeof a == "function" && (n || (n = {}), n[i] = sP(a, t, r));
  }), n;
}, fP = (e) => Array.isArray(e) && e.length > 0;
function Hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hf(Object(r), !0).forEach(function(n) {
      vP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vP(e, t, r) {
  return (t = pP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pP(e) {
  var t = hP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function he(e, t) {
  var r = dP({}, e), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fa.apply(null, arguments);
}
function Gf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ny(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gf(Object(r), !0).forEach(function(n) {
      mP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mP(e, t, r) {
  return (t = yP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yP(e) {
  var t = gP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ot = 32, bP = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle",
  labelStyle: {}
};
function xP(e) {
  if (typeof e == "object" && e !== null && "strokeDasharray" in e)
    return String(e.strokeDasharray);
}
function wP(e) {
  var {
    data: t,
    iconType: r,
    inactiveColor: n
  } = e, i = ot / 2, a = ot / 6, o = ot / 3, u = t.inactive ? n : t.color, l = r ?? t.type;
  if (l === "none")
    return null;
  if (l === "plainline")
    return /* @__PURE__ */ v.createElement("line", {
      strokeWidth: 4,
      fill: "none",
      stroke: u,
      strokeDasharray: xP(t.payload),
      x1: 0,
      y1: i,
      x2: ot,
      y2: i,
      className: "recharts-legend-icon"
    });
  if (l === "line")
    return /* @__PURE__ */ v.createElement("path", {
      strokeWidth: 4,
      fill: "none",
      stroke: u,
      d: "M0,".concat(i, "h").concat(o, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(2 * o, ",").concat(i, `
            H`).concat(ot, "M").concat(2 * o, ",").concat(i, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(o, ",").concat(i),
      className: "recharts-legend-icon"
    });
  if (l === "rect")
    return /* @__PURE__ */ v.createElement("path", {
      stroke: "none",
      fill: u,
      d: "M0,".concat(ot / 8, "h").concat(ot, "v").concat(ot * 3 / 4, "h").concat(-ot, "z"),
      className: "recharts-legend-icon"
    });
  if (/* @__PURE__ */ v.isValidElement(t.legendIcon)) {
    var c = ny({}, t);
    return delete c.legendIcon, /* @__PURE__ */ v.cloneElement(t.legendIcon, c);
  }
  return /* @__PURE__ */ v.createElement(ao, {
    fill: u,
    cx: i,
    cy: i,
    size: ot,
    sizeType: "diameter",
    type: l
  });
}
function PP(e) {
  var {
    payload: t,
    iconSize: r,
    layout: n,
    formatter: i,
    inactiveColor: a,
    iconType: o,
    labelStyle: u
  } = e, l = {
    x: 0,
    y: 0,
    width: ot,
    height: ot
  }, c = {
    display: n === "horizontal" ? "inline-block" : "block",
    marginRight: 10
  }, f = {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: 4
  };
  return t.map((s, d) => {
    var p = s.formatter || i, h = K({
      "recharts-legend-item": !0,
      ["legend-item-".concat(d)]: !0,
      inactive: s.inactive
    });
    if (s.type === "none")
      return null;
    var m = typeof u == "object" ? ny({}, u) : {};
    m.color = s.inactive ? a : m.color || s.color;
    var g = p ? p(s.value, s, d) : s.value;
    return /* @__PURE__ */ v.createElement("li", fa({
      className: h,
      style: c,
      key: "legend-item-".concat(d)
    }, hn(e, s, d)), /* @__PURE__ */ v.createElement(Dc, {
      width: r,
      height: r,
      viewBox: l,
      style: f,
      "aria-label": "".concat(s.value, " legend icon")
    }, /* @__PURE__ */ v.createElement(wP, {
      data: s,
      iconType: o,
      inactiveColor: a
    })), /* @__PURE__ */ v.createElement("span", {
      className: "recharts-legend-item-text",
      style: m
    }, g));
  });
}
var OP = (e) => {
  var t = he(e, bP), {
    payload: r,
    layout: n,
    align: i
  } = t;
  if (!r || !r.length)
    return null;
  var a = {
    padding: 0,
    margin: 0,
    textAlign: n === "horizontal" ? i : "left"
  };
  return /* @__PURE__ */ v.createElement("ul", {
    className: "recharts-default-legend",
    style: a
  }, /* @__PURE__ */ v.createElement(PP, fa({}, t, {
    payload: r
  })));
}, su = {}, fu = {}, Vf;
function AP() {
  return Vf || (Vf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], u = n(o, a, r);
        i.has(u) || i.set(u, o);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(fu)), fu;
}
var du = {}, Yf;
function SP() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(du)), du;
}
var vu = {}, Xf;
function iy() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(vu)), vu;
}
var pu = {}, hu = {}, mu = {}, Zf;
function EP() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(mu)), mu;
}
var Jf;
function ay() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ EP();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(hu)), hu;
}
var yu = {}, Qf;
function _P() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(yu)), yu;
}
var ed;
function IP() {
  return ed || (ed = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ay(), r = /* @__PURE__ */ _P();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(pu)), pu;
}
var gu = {}, bu = {}, td;
function jP() {
  return td || (td = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Bc();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(bu)), bu;
}
var xu = {}, wu = {}, Pu = {}, Ou = {}, rd;
function oy() {
  return rd || (rd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(Ou)), Ou;
}
var Au = {}, nd;
function uy() {
  return nd || (nd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(Au)), Au;
}
var Su = {}, id;
function ly() {
  return id || (id = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(Su)), Su;
}
var ad;
function CP() {
  return ad || (ad = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oy(), r = /* @__PURE__ */ uy(), n = /* @__PURE__ */ ly();
    function i(f, s, d) {
      return typeof d != "function" ? i(f, s, () => {
      }) : a(f, s, function p(h, m, g, y, b, x) {
        const w = d(h, m, g, y, b, x);
        return w !== void 0 ? !!w : a(h, m, p, x);
      }, /* @__PURE__ */ new Map());
    }
    function a(f, s, d, p) {
      if (s === f)
        return !0;
      switch (typeof s) {
        case "object":
          return o(f, s, d, p);
        case "function":
          return Object.keys(s).length > 0 ? a(f, { ...s }, d, p) : n.isEqualsSameValueZero(f, s);
        default:
          return t.isObject(f) ? typeof s == "string" ? s === "" : !0 : n.isEqualsSameValueZero(f, s);
      }
    }
    function o(f, s, d, p) {
      if (s == null)
        return !0;
      if (Array.isArray(s))
        return l(f, s, d, p);
      if (s instanceof Map)
        return u(f, s, d, p);
      if (s instanceof Set)
        return c(f, s, d, p);
      const h = Object.keys(s);
      if (f == null || r.isPrimitive(f))
        return h.length === 0;
      if (h.length === 0)
        return !0;
      if (p != null && p.has(s))
        return p.get(s) === f;
      p == null || p.set(s, f);
      try {
        for (let m = 0; m < h.length; m++) {
          const g = h[m];
          if (!r.isPrimitive(f) && !(g in f) || s[g] === void 0 && f[g] !== void 0 || s[g] === null && f[g] !== null || !d(f[g], s[g], g, f, s, p))
            return !1;
        }
        return !0;
      } finally {
        p == null || p.delete(s);
      }
    }
    function u(f, s, d, p) {
      if (s.size === 0)
        return !0;
      if (!(f instanceof Map))
        return !1;
      for (const [h, m] of s.entries()) {
        const g = f.get(h);
        if (d(g, m, h, f, s, p) === !1)
          return !1;
      }
      return !0;
    }
    function l(f, s, d, p) {
      if (s.length === 0)
        return !0;
      if (!Array.isArray(f))
        return !1;
      const h = /* @__PURE__ */ new Set();
      for (let m = 0; m < s.length; m++) {
        const g = s[m];
        let y = !1;
        for (let b = 0; b < f.length; b++) {
          if (h.has(b))
            continue;
          const x = f[b];
          let w = !1;
          if (d(x, g, m, f, s, p) && (w = !0), w) {
            h.add(b), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function c(f, s, d, p) {
      return s.size === 0 ? !0 : f instanceof Set ? l([...f], [...s], d, p) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = c;
  })(Pu)), Pu;
}
var od;
function cy() {
  return od || (od = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ CP();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(wu)), wu;
}
var Eu = {}, _u = {}, Iu = {}, ud;
function kP() {
  return ud || (ud = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(Iu)), Iu;
}
var ju = {}, ld;
function Kc() {
  return ld || (ld = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(ju)), ju;
}
var Cu = {}, cd;
function sy() {
  return cd || (cd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", l = "[object Map]", c = "[object Set]", f = "[object Array]", s = "[object Function]", d = "[object ArrayBuffer]", p = "[object Object]", h = "[object Error]", m = "[object DataView]", g = "[object Uint8Array]", y = "[object Uint8ClampedArray]", b = "[object Uint16Array]", x = "[object Uint32Array]", w = "[object BigUint64Array]", O = "[object Int8Array]", P = "[object Int16Array]", S = "[object Int32Array]", E = "[object BigInt64Array]", I = "[object Float32Array]", j = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = f, e.bigInt64ArrayTag = E, e.bigUint64ArrayTag = w, e.booleanTag = i, e.dataViewTag = m, e.dateTag = u, e.errorTag = h, e.float32ArrayTag = I, e.float64ArrayTag = j, e.functionTag = s, e.int16ArrayTag = P, e.int32ArrayTag = S, e.int8ArrayTag = O, e.mapTag = l, e.numberTag = n, e.objectTag = p, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = b, e.uint32ArrayTag = x, e.uint8ArrayTag = g, e.uint8ClampedArrayTag = y;
  })(Cu)), Cu;
}
var ku = {}, Tu = {}, sd;
function TP() {
  return sd || (sd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof Tf == "object" && Tf || /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
    e.globalThis = t;
  })(Tu)), Tu;
}
var fd;
function MP() {
  return fd || (fd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ TP();
    function r(n) {
      return typeof t.globalThis.Buffer < "u" && t.globalThis.Buffer.isBuffer(n);
    }
    e.isBuffer = r;
  })(ku)), ku;
}
var Mu = {}, dd;
function DP() {
  return dd || (dd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(Mu)), Mu;
}
var vd;
function fy() {
  return vd || (vd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kP(), r = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ sy(), i = /* @__PURE__ */ MP(), a = /* @__PURE__ */ uy(), o = /* @__PURE__ */ DP();
    function u(s, d) {
      return l(s, void 0, s, /* @__PURE__ */ new Map(), d);
    }
    function l(s, d, p, h = /* @__PURE__ */ new Map(), m = void 0) {
      const g = m == null ? void 0 : m(s, d, p, h);
      if (g !== void 0)
        return g;
      if (a.isPrimitive(s))
        return s;
      if (h.has(s))
        return h.get(s);
      if (Array.isArray(s)) {
        const y = new Array(s.length);
        h.set(s, y);
        for (let b = 0; b < s.length; b++)
          y[b] = l(s[b], b, p, h, m);
        return Object.hasOwn(s, "index") && (y.index = s.index), Object.hasOwn(s, "input") && (y.input = s.input), y;
      }
      if (s instanceof Date)
        return new Date(s.getTime());
      if (s instanceof RegExp) {
        const y = new RegExp(s.source, s.flags);
        return y.lastIndex = s.lastIndex, y;
      }
      if (s instanceof Map) {
        const y = /* @__PURE__ */ new Map();
        h.set(s, y);
        for (const [b, x] of s)
          y.set(b, l(x, b, p, h, m));
        return y;
      }
      if (s instanceof Set) {
        const y = /* @__PURE__ */ new Set();
        h.set(s, y);
        for (const b of s)
          y.add(l(b, void 0, p, h, m));
        return y;
      }
      if (i.isBuffer(s))
        return s.subarray();
      if (o.isTypedArray(s)) {
        const y = new (Object.getPrototypeOf(s)).constructor(s.length);
        h.set(s, y);
        for (let b = 0; b < s.length; b++)
          y[b] = l(s[b], b, p, h, m);
        return y;
      }
      if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
        return s.slice(0);
      if (s instanceof DataView) {
        const y = new DataView(s.buffer.slice(0), s.byteOffset, s.byteLength);
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (typeof File < "u" && s instanceof File) {
        const y = new File([s], s.name, {
          type: s.type
        });
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (typeof Blob < "u" && s instanceof Blob) {
        const y = new Blob([s], { type: s.type });
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (s instanceof Error) {
        const y = structuredClone(s);
        return h.set(s, y), y.message = s.message, y.name = s.name, y.stack = s.stack, y.cause = s.cause, y.constructor = s.constructor, c(y, s, p, h, m), y;
      }
      if (s instanceof Boolean) {
        const y = new Boolean(s.valueOf());
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (s instanceof Number) {
        const y = new Number(s.valueOf());
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (s instanceof String) {
        const y = new String(s.valueOf());
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      if (typeof s == "object" && f(s)) {
        const y = Object.create(Object.getPrototypeOf(s));
        return h.set(s, y), c(y, s, p, h, m), y;
      }
      return s;
    }
    function c(s, d, p = s, h, m) {
      const g = [...Object.keys(d), ...t.getSymbols(d)];
      for (let y = 0; y < g.length; y++) {
        const b = g[y], x = Object.getOwnPropertyDescriptor(s, b);
        (x == null || x.writable) && (s[b] = l(d[b], b, p, h, m));
      }
    }
    function f(s) {
      switch (r.getTag(s)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = u, e.cloneDeepWithImpl = l, e.copyProperties = c;
  })(_u)), _u;
}
var pd;
function NP() {
  return pd || (pd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fy();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(Eu)), Eu;
}
var hd;
function $P() {
  return hd || (hd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cy(), r = /* @__PURE__ */ NP();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e.matches = n;
  })(xu)), xu;
}
var Du = {}, Nu = {}, $u = {}, md;
function LP() {
  return md || (md = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fy(), r = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ sy();
    function i(a, o) {
      return t.cloneDeepWith(a, (u, l, c, f) => {
        const s = o == null ? void 0 : o(u, l, c, f);
        if (s !== void 0)
          return s;
        if (typeof a == "object") {
          if (r.getTag(a) === n.objectTag && typeof a.constructor != "function") {
            const d = {};
            return f.set(a, d), t.copyProperties(d, a, c, f), d;
          }
          switch (Object.prototype.toString.call(a)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const d = new a.constructor(a == null ? void 0 : a.valueOf());
              return t.copyProperties(d, a), d;
            }
            case n.argumentsTag: {
              const d = {};
              return t.copyProperties(d, a), d.length = a.length, d[Symbol.iterator] = a[Symbol.iterator], d;
            }
            default:
              return;
          }
        }
      });
    }
    e.cloneDeepWith = i;
  })($u)), $u;
}
var yd;
function RP() {
  return yd || (yd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ LP();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(Nu)), Nu;
}
var Lu = {}, Ru = {}, gd;
function dy() {
  return gd || (gd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(Ru)), Ru;
}
var zu = {}, bd;
function zP() {
  return bd || (bd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Kc();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(zu)), zu;
}
var xd;
function BP() {
  return xd || (xd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Jm(), r = /* @__PURE__ */ dy(), n = /* @__PURE__ */ zP(), i = /* @__PURE__ */ zc();
    function a(o, u) {
      let l;
      if (Array.isArray(u) ? l = u : typeof u == "string" && t.isDeepKey(u) && (o == null ? void 0 : o[u]) == null ? l = i.toPath(u) : l = [u], l.length === 0)
        return !1;
      let c = o;
      for (let f = 0; f < l.length; f++) {
        const s = l[f];
        if ((c == null || !Object.hasOwn(c, s)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(s) && s < c.length))
          return !1;
        c = c[s];
      }
      return !0;
    }
    e.has = a;
  })(Lu)), Lu;
}
var wd;
function FP() {
  return wd || (wd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cy(), r = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ RP(), i = /* @__PURE__ */ Bc(), a = /* @__PURE__ */ BP();
    function o(u, l) {
      switch (typeof u) {
        case "object": {
          Object.is(u == null ? void 0 : u.valueOf(), -0) && (u = "-0");
          break;
        }
        case "number": {
          u = r.toKey(u);
          break;
        }
      }
      return l = n.cloneDeep(l), function(c) {
        const f = i.get(c, u);
        return f === void 0 ? a.has(c, u) : l === void 0 ? f === void 0 : t.isMatch(f, l);
      };
    }
    e.matchesProperty = o;
  })(Du)), Du;
}
var Pd;
function KP() {
  return Pd || (Pd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iy(), r = /* @__PURE__ */ jP(), n = /* @__PURE__ */ $P(), i = /* @__PURE__ */ FP();
    function a(o) {
      if (o == null)
        return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e.iteratee = a;
  })(gu)), gu;
}
var Od;
function WP() {
  return Od || (Od = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ AP(), r = /* @__PURE__ */ SP(), n = /* @__PURE__ */ iy(), i = /* @__PURE__ */ IP(), a = /* @__PURE__ */ KP();
    function o(u, l = n.identity) {
      return i.isArrayLikeObject(u) ? t.uniqBy(Array.from(u), r.ary(a.iteratee(l), 1)) : [];
    }
    e.uniqBy = o;
  })(su)), su;
}
var Bu, Ad;
function qP() {
  return Ad || (Ad = 1, Bu = WP().uniqBy), Bu;
}
var UP = /* @__PURE__ */ qP();
const Sd = /* @__PURE__ */ pn(UP);
function vy(e, t, r) {
  return t === !0 ? Sd(e, r) : typeof t == "function" ? Sd(e, t) : e;
}
var Fu = { exports: {} }, Ku = {};
var Ed;
function HP() {
  if (Ed) return Ku;
  Ed = 1;
  var e = Tm(), t = Vx();
  function r(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, u = e.useMemo, l = e.useDebugValue;
  return Ku.useSyncExternalStoreWithSelector = function(c, f, s, d, p) {
    var h = a(null);
    if (h.current === null) {
      var m = { hasValue: !1, value: null };
      h.current = m;
    } else m = h.current;
    h = u(
      function() {
        function y(P) {
          if (!b) {
            if (b = !0, x = P, P = d(P), p !== void 0 && m.hasValue) {
              var S = m.value;
              if (p(S, P))
                return w = S;
            }
            return w = P;
          }
          if (S = w, n(x, P)) return S;
          var E = d(P);
          return p !== void 0 && p(S, E) ? (x = P, S) : (x = P, w = E);
        }
        var b = !1, x, w, O = s === void 0 ? null : s;
        return [
          function() {
            return y(f());
          },
          O === null ? void 0 : function() {
            return y(O());
          }
        ];
      },
      [f, s, d, p]
    );
    var g = i(c, h[0], h[1]);
    return o(
      function() {
        m.hasValue = !0, m.value = g;
      },
      [g]
    ), l(g), g;
  }, Ku;
}
var _d;
function GP() {
  return _d || (_d = 1, Fu.exports = HP()), Fu.exports;
}
var VP = GP(), Wc = /* @__PURE__ */ v.createContext(null), YP = (e) => e, te = () => {
  var e = v.useContext(Wc);
  return e ? e.store.dispatch : YP;
}, Ji = () => {
}, XP = () => Ji, ZP = (e, t) => e === t;
function N(e) {
  var t = v.useContext(Wc), r = v.useMemo(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : Ji, [t, e]);
  return VP.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : XP, t ? t.store.getState : Ji, t ? t.store.getState : Ji, r, ZP);
}
function JP(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function QP(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function eO(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Id = (e) => Array.isArray(e) ? e : [e];
function tO(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return eO(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function rO(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var nO = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, iO = typeof WeakRef < "u" ? WeakRef : nO, aO = 0, jd = 1;
function Di() {
  return {
    s: aO,
    v: void 0,
    o: null,
    p: null
  };
}
function py(e, t = {}) {
  let r = Di();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    var s;
    let u = r;
    const { length: l } = arguments;
    for (let d = 0, p = l; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let m = u.o;
        m === null && (u.o = m = /* @__PURE__ */ new WeakMap());
        const g = m.get(h);
        g === void 0 ? (u = Di(), m.set(h, u)) : u = g;
      } else {
        let m = u.p;
        m === null && (u.p = m = /* @__PURE__ */ new Map());
        const g = m.get(h);
        g === void 0 ? (u = Di(), m.set(h, u)) : u = g;
      }
    }
    const c = u;
    let f;
    if (u.s === jd)
      f = u.v;
    else if (f = e.apply(null, arguments), a++, n) {
      const d = ((s = i == null ? void 0 : i.deref) == null ? void 0 : s.call(i)) ?? i;
      d != null && n(d, f) && (f = d, a !== 0 && a--), i = typeof f == "object" && f !== null || typeof f == "function" ? new iO(f) : f;
    }
    return c.s = jd, c.v = f, f;
  }
  return o.clearCache = () => {
    r = Di(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function oO(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, u, l = {}, c = i.pop();
    typeof c == "object" && (l = c, c = i.pop()), JP(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const f = {
      ...r,
      ...l
    }, {
      memoize: s,
      memoizeOptions: d = [],
      argsMemoize: p = py,
      argsMemoizeOptions: h = []
    } = f, m = Id(d), g = Id(h), y = tO(i), b = s(function() {
      return a++, c.apply(
        null,
        arguments
      );
    }, ...m), x = p(function() {
      o++;
      const O = rO(
        y,
        arguments
      );
      return u = b.apply(null, O), u;
    }, ...g);
    return Object.assign(x, {
      resultFunc: c,
      memoizedResultFunc: b,
      dependencies: y,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: s,
      argsMemoize: p
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var A = /* @__PURE__ */ oO(py), uO = Object.assign(
  (e, t = A) => {
    QP(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, u, l) => (o[r[l]] = u, o), {})
    );
  },
  { withTypes: () => uO }
), Wu = {}, qu = {}, Uu = {}, Cd;
function lO() {
  return Cd || (Cd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), u = t(i);
        if (o === u && o === 0) {
          if (n < i)
            return a === "desc" ? 1 : -1;
          if (n > i)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? u - o : o - u;
      }
      return 0;
    };
    e.compareValues = r;
  })(Uu)), Uu;
}
var Hu = {}, Gu = {}, kd;
function hy() {
  return kd || (kd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Gu)), Gu;
}
var Td;
function cO() {
  return Td || (Td = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hy(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e.isKey = i;
  })(Hu)), Hu;
}
var Md;
function sO() {
  return Md || (Md = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lO(), r = /* @__PURE__ */ cO(), n = /* @__PURE__ */ zc();
    function i(a, o, u, l) {
      if (a == null)
        return [];
      u = l ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((p) => String(p));
      const c = (p, h) => {
        let m = p;
        for (let g = 0; g < h.length && m != null; ++g)
          m = m[h[g]];
        return m;
      }, f = (p, h) => h == null || p == null ? h : typeof p == "object" && "key" in p ? Object.hasOwn(h, p.key) ? h[p.key] : c(h, p.path) : typeof p == "function" ? p(h) : Array.isArray(p) ? c(h, p) : typeof h == "object" ? h[p] : h, s = o.map((p) => (Array.isArray(p) && p.length === 1 && (p = p[0]), p == null || typeof p == "function" || Array.isArray(p) || r.isKey(p) ? p : { key: p, path: n.toPath(p) }));
      return a.map((p) => ({
        original: p,
        criteria: s.map((h) => f(h, p))
      })).slice().sort((p, h) => {
        for (let m = 0; m < s.length; m++) {
          const g = t.compareValues(p.criteria[m], h.criteria[m], u[m]);
          if (g !== 0)
            return g;
        }
        return 0;
      }).map((p) => p.original);
    }
    e.orderBy = i;
  })(qu)), qu;
}
var Vu = {}, Dd;
function fO() {
  return Dd || (Dd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (u, l) => {
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          Array.isArray(f) && l < a ? o(f, l + 1) : i.push(f);
        }
      };
      return o(r, 0), i;
    }
    e.flatten = t;
  })(Vu)), Vu;
}
var Yu = {}, Nd;
function my() {
  return Nd || (Nd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ dy(), r = /* @__PURE__ */ ay(), n = /* @__PURE__ */ oy(), i = /* @__PURE__ */ ly();
    function a(o, u, l) {
      return n.isObject(l) && (typeof u == "number" && r.isArrayLike(l) && t.isIndex(u) && u < l.length || typeof u == "string" && u in l) ? i.isEqualsSameValueZero(l[u], o) : !1;
    }
    e.isIterateeCall = a;
  })(Yu)), Yu;
}
var $d;
function dO() {
  return $d || ($d = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sO(), r = /* @__PURE__ */ fO(), n = /* @__PURE__ */ my();
    function i(a, ...o) {
      const u = o.length;
      return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e.sortBy = i;
  })(Wu)), Wu;
}
var Xu, Ld;
function vO() {
  return Ld || (Ld = 1, Xu = dO().sortBy), Xu;
}
var pO = /* @__PURE__ */ vO();
const oo = /* @__PURE__ */ pn(pO);
var yy = (e) => e.legend.settings, hO = (e) => e.legend.size, mO = (e) => e.legend.payload, yO = A([mO, yy], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? oo(n, r) : n;
});
function gO() {
  return N(yO);
}
var Ni = 1;
function gy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = v.useState({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = v.useCallback(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > Ni || Math.abs(o.left - t.left) > Ni || Math.abs(o.top - t.top) > Ni || Math.abs(o.width - t.width) > Ni) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function ke(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bO = typeof Symbol == "function" && Symbol.observable || "@@observable", Rd = bO, Zu = () => Math.random().toString(36).substring(7).split("").join("."), xO = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Zu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Zu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Zu()}`
}, da = xO;
function qc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function by(e, t, r) {
  if (typeof e != "function")
    throw new Error(ke(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(ke(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(ke(1));
    return r(by)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, l = !1;
  function c() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((g, y) => {
      o.set(y, g);
    }));
  }
  function f() {
    if (l)
      throw new Error(ke(3));
    return i;
  }
  function s(g) {
    if (typeof g != "function")
      throw new Error(ke(4));
    if (l)
      throw new Error(ke(5));
    let y = !0;
    c();
    const b = u++;
    return o.set(b, g), function() {
      if (y) {
        if (l)
          throw new Error(ke(6));
        y = !1, c(), o.delete(b), a = null;
      }
    };
  }
  function d(g) {
    if (!qc(g))
      throw new Error(ke(7));
    if (typeof g.type > "u")
      throw new Error(ke(8));
    if (typeof g.type != "string")
      throw new Error(ke(17));
    if (l)
      throw new Error(ke(9));
    try {
      l = !0, i = n(i, g);
    } finally {
      l = !1;
    }
    return (a = o).forEach((b) => {
      b();
    }), g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(ke(10));
    n = g, d({
      type: da.REPLACE
    });
  }
  function h() {
    const g = s;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(ke(11));
        function b() {
          const w = y;
          w.next && w.next(f());
        }
        return b(), {
          unsubscribe: g(b)
        };
      },
      [Rd]() {
        return this;
      }
    };
  }
  return d({
    type: da.INIT
  }), {
    dispatch: d,
    subscribe: s,
    getState: f,
    replaceReducer: p,
    [Rd]: h
  };
}
function wO(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: da.INIT
    }) > "u")
      throw new Error(ke(12));
    if (typeof r(void 0, {
      type: da.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ke(13));
  });
}
function xy(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    wO(r);
  } catch (a) {
    i = a;
  }
  return function(o = {}, u) {
    if (i)
      throw i;
    let l = !1;
    const c = {};
    for (let f = 0; f < n.length; f++) {
      const s = n[f], d = r[s], p = o[s], h = d(p, u);
      if (typeof h > "u")
        throw u && u.type, new Error(ke(14));
      c[s] = h, l = l || h !== p;
    }
    return l = l || n.length !== Object.keys(o).length, l ? c : o;
  };
}
function va(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function PO(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(ke(15));
    };
    const o = {
      getState: i.getState,
      dispatch: (l, ...c) => a(l, ...c)
    }, u = e.map((l) => l(o));
    return a = va(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function wy(e) {
  return qc(e) && "type" in e && typeof e.type == "string";
}
var Py = Symbol.for("immer-nothing"), zd = Symbol.for("immer-draftable"), Ke = Symbol.for("immer-state");
function ft(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Qe = Object, an = Qe.getPrototypeOf, pa = "constructor", uo = "prototype", Bl = "configurable", ha = "enumerable", Qi = "writable", Xn = "value", zt = (e) => !!e && !!e[Ke];
function pt(e) {
  var t;
  return e ? Oy(e) || co(e) || !!e[zd] || !!((t = e[pa]) != null && t[zd]) || so(e) || fo(e) : !1;
}
var OO = Qe[uo][pa].toString(), Bd = /* @__PURE__ */ new WeakMap();
function Oy(e) {
  if (!e || !Uc(e))
    return !1;
  const t = an(e);
  if (t === null || t === Qe[uo])
    return !0;
  const r = Qe.hasOwnProperty.call(t, pa) && t[pa];
  if (r === Object)
    return !0;
  if (!Jr(r))
    return !1;
  let n = Bd.get(r);
  return n === void 0 && (n = Function.toString.call(r), Bd.set(r, n)), n === OO;
}
function lo(e, t, r = !0) {
  vi(e) === 0 ? (r ? Reflect.ownKeys(e) : Qe.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function vi(e) {
  const t = e[Ke];
  return t ? t.type_ : co(e) ? 1 : so(e) ? 2 : fo(e) ? 3 : 0;
}
var Fd = (e, t, r = vi(e)) => r === 2 ? e.has(t) : Qe[uo].hasOwnProperty.call(e, t), Fl = (e, t, r = vi(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), ma = (e, t, r, n = vi(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function AO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var co = Array.isArray, so = (e) => e instanceof Map, fo = (e) => e instanceof Set, Uc = (e) => typeof e == "object", Jr = (e) => typeof e == "function", Ju = (e) => typeof e == "boolean";
function SO(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var Mt = (e) => e.copy_ || e.base_, Hc = (e) => e.modified_ ? e.copy_ : e.base_;
function Kl(e, t) {
  if (so(e))
    return new Map(e);
  if (fo(e))
    return new Set(e);
  if (co(e))
    return Array[uo].slice.call(e);
  const r = Oy(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Qe.getOwnPropertyDescriptors(e);
    delete n[Ke];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[Qi] === !1 && (u[Qi] = !0, u[Bl] = !0), (u.get || u.set) && (n[o] = {
        [Bl]: !0,
        [Qi]: !0,
        // could live with !!desc.set as well here...
        [ha]: u[ha],
        [Xn]: e[o]
      });
    }
    return Qe.create(an(e), n);
  } else {
    const n = an(e);
    if (n !== null && r)
      return { ...e };
    const i = Qe.create(n);
    return Qe.assign(i, e);
  }
}
function Gc(e, t = !1) {
  return vo(e) || zt(e) || !pt(e) || (vi(e) > 1 && Qe.defineProperties(e, {
    set: $i,
    add: $i,
    clear: $i,
    delete: $i
  }), Qe.freeze(e), t && lo(
    e,
    (r, n) => {
      Gc(n, !0);
    },
    !1
  )), e;
}
function EO() {
  ft(2);
}
var $i = {
  [Xn]: EO
};
function vo(e) {
  return e === null || !Uc(e) ? !0 : Qe.isFrozen(e);
}
var ya = "MapSet", Wl = "Patches", Kd = "ArrayMethods", Ay = {};
function Cr(e) {
  const t = Ay[e];
  return t || ft(0, e), t;
}
var Wd = (e) => !!Ay[e], Zn, Sy = () => Zn, _O = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Wd(ya) ? Cr(ya) : void 0,
  arrayMethodsPlugin_: Wd(Kd) ? Cr(Kd) : void 0
});
function qd(e, t) {
  t && (e.patchPlugin_ = Cr(Wl), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ql(e) {
  Ul(e), e.drafts_.forEach(IO), e.drafts_ = null;
}
function Ul(e) {
  e === Zn && (Zn = e.parent_);
}
var Ud = (e) => Zn = _O(Zn, e);
function IO(e) {
  const t = e[Ke];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Hd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[Ke].modified_ && (ql(t), ft(4)), pt(e) && (e = Gd(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[Ke].base_,
      e,
      t
    );
  } else
    e = Gd(t, r);
  return jO(t, e, !0), ql(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Py ? e : void 0;
}
function Gd(e, t) {
  if (vo(t))
    return t;
  const r = t[Ke];
  if (!r)
    return ga(t, e.handledSet_, e);
  if (!po(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    Iy(r, e);
  }
  return r.copy_;
}
function jO(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Gc(t, r);
}
function Ey(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var po = (e, t) => e.scope_ === t, CO = [];
function _y(e, t, r, n) {
  const i = Mt(e), a = e.type_;
  if (n !== void 0 && Fl(i, n, a) === t) {
    ma(i, n, r, a);
    return;
  }
  if (!e.draftLocations_) {
    const u = e.draftLocations_ = /* @__PURE__ */ new Map();
    lo(i, (l, c) => {
      if (zt(c)) {
        const f = u.get(c) || [];
        f.push(l), u.set(c, f);
      }
    });
  }
  const o = e.draftLocations_.get(t) ?? CO;
  for (const u of o)
    ma(i, u, r, a);
}
function kO(e, t, r) {
  e.callbacks_.push(function(i) {
    var u;
    const a = t;
    if (!a || !po(a, i))
      return;
    (u = i.mapSetPlugin_) == null || u.fixSetContents(a);
    const o = Hc(a);
    _y(e, a.draft_ ?? a, o, r), Iy(a, i);
  });
}
function Iy(e, t) {
  var n;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (((n = e.assigned_) == null ? void 0 : n.size) ?? 0) > 0)) {
    const { patchPlugin_: i } = t;
    if (i) {
      const a = i.getPath(e);
      a && i.generatePatches_(e, a, t);
    }
    Ey(e);
  }
}
function TO(e, t, r) {
  const { scope_: n } = e;
  if (zt(r)) {
    const i = r[Ke];
    po(i, n) && i.callbacks_.push(function() {
      ea(e);
      const o = Hc(i);
      _y(e, r, o, t);
    });
  } else pt(r) && e.callbacks_.push(function() {
    const a = Mt(e);
    e.type_ === 3 ? a.has(r) && ga(r, n.handledSet_, n) : Fl(a, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && ga(
      Fl(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function ga(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || zt(e) || t.has(e) || !pt(e) || vo(e) || (t.add(e), lo(e, (n, i) => {
    if (zt(i)) {
      const a = i[Ke];
      if (po(a, r)) {
        const o = Hc(a);
        ma(e, n, o, e.type_), Ey(a);
      }
    } else pt(i) && ga(i, t, r);
  })), e;
}
function MO(e, t) {
  const r = co(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Sy(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, a = ba;
  r && (i = [n], a = Jn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var ba = {
  get(e, t) {
    if (t === Ke)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r != null && r.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = Mt(e);
    if (!Fd(i, t, e.type_))
      return DO(e, i, t);
    const a = i[t];
    if (e.finalized_ || !pt(a) || n && e.operationMethod && (r != null && r.isMutatingArrayMethod(
      e.operationMethod
    )) && SO(t))
      return a;
    if (a === Qu(e.base_, t)) {
      ea(e);
      const o = e.type_ === 1 ? +t : t, u = Gl(e.scope_, a, e, o);
      return e.copy_[o] = u;
    }
    return a;
  },
  has(e, t) {
    return t in Mt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Mt(e));
  },
  set(e, t, r) {
    const n = jy(Mt(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Qu(Mt(e), t), a = i == null ? void 0 : i[Ke];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (AO(r, i) && (r !== void 0 || Fd(e.base_, t, e.type_)))
        return !0;
      ea(e), Hl(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), TO(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return ea(e), Qu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Hl(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Mt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Qi]: !0,
      [Bl]: e.type_ !== 1 || t !== "length",
      [ha]: n[ha],
      [Xn]: r[t]
    };
  },
  defineProperty() {
    ft(11);
  },
  getPrototypeOf(e) {
    return an(e.base_);
  },
  setPrototypeOf() {
    ft(12);
  }
}, Jn = {};
for (let e in ba) {
  let t = ba[e];
  Jn[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Jn.deleteProperty = function(e, t) {
  return Jn.set.call(this, e, t, void 0);
};
Jn.set = function(e, t, r) {
  return ba.set.call(this, e[0], t, r, e[0]);
};
function Qu(e, t) {
  const r = e[Ke];
  return (r ? Mt(r) : e)[t];
}
function DO(e, t, r) {
  var i;
  const n = jy(t, r);
  return n ? Xn in n ? n[Xn] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function jy(e, t) {
  if (!(t in e))
    return;
  let r = an(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = an(r);
  }
}
function Hl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Hl(e.parent_));
}
function ea(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = Kl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var NO = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (Jr(r) && !Jr(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(c = o, ...f) {
          return u.produce(c, (s) => n.call(this, s, ...f));
        };
      }
      Jr(n) || ft(6), i !== void 0 && !Jr(i) && ft(7);
      let a;
      if (pt(r)) {
        const o = Ud(this), u = Gl(o, r, void 0);
        let l = !0;
        try {
          a = n(u), l = !1;
        } finally {
          l ? ql(o) : Ul(o);
        }
        return qd(o, i), Hd(a, o);
      } else if (!r || !Uc(r)) {
        if (a = n(r), a === void 0 && (a = r), a === Py && (a = void 0), this.autoFreeze_ && Gc(a, !0), i) {
          const o = [], u = [];
          Cr(Wl).generateReplacementPatches_(r, a, {
            patches_: o,
            inversePatches_: u
          }), i(o, u);
        }
        return a;
      } else
        ft(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (Jr(r))
        return (u, ...l) => this.produceWithPatches(u, (c) => r(c, ...l));
      let i, a;
      return [this.produce(r, n, (u, l) => {
        i = u, a = l;
      }), i, a];
    }, Ju(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Ju(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Ju(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    pt(t) || ft(8), zt(t) && (t = ut(t));
    const r = Ud(this), n = Gl(r, t, void 0);
    return n[Ke].isManual_ = !0, Ul(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[Ke];
    (!n || !n.isManual_) && ft(9);
    const { scope_: i } = n;
    return qd(i, r), Hd(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = Cr(Wl).applyPatches_;
    return zt(t) ? i(t, r) : this.produce(
      t,
      (a) => i(a, r)
    );
  }
};
function Gl(e, t, r, n) {
  const [i, a] = so(t) ? Cr(ya).proxyMap_(t, r) : fo(t) ? Cr(ya).proxySet_(t, r) : MO(t, r);
  return ((r == null ? void 0 : r.scope_) ?? Sy()).drafts_.push(i), a.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], a.key_ = n, r && n !== void 0 ? kO(r, a, n) : a.callbacks_.push(function(l) {
    var f;
    (f = l.mapSetPlugin_) == null || f.fixSetContents(a);
    const { patchPlugin_: c } = l;
    a.modified_ && c && c.generatePatches_(a, [], l);
  }), i;
}
function ut(e) {
  return zt(e) || ft(10, e), Cy(e);
}
function Cy(e) {
  if (!pt(e) || vo(e))
    return e;
  const t = e[Ke];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Kl(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Kl(e, !0);
  return lo(
    r,
    (i, a) => {
      ma(r, i, Cy(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var $O = new NO(), ky = $O.produce;
function Ty(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var LO = Ty(), RO = Ty, zO = { NODE_ENV: "production" }, BO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? va : va.apply(null, arguments);
};
function tt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(et(0));
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => wy(n) && n.type === e, r;
}
var My = class Kn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Kn.prototype);
  }
  static get [Symbol.species]() {
    return Kn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Kn(...t[0].concat(this)) : new Kn(...t.concat(this));
  }
};
function Vd(e) {
  return pt(e) ? ky(e, () => {
  }) : e;
}
function Li(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function FO(e) {
  return typeof e == "boolean";
}
var KO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new My();
  return r && (FO(r) ? o.push(LO) : o.push(RO(r.extraArgument))), o;
}, Dy = "RTK_autoBatch", ae = () => (e) => ({
  payload: e,
  meta: {
    [Dy]: !0
  }
}), Yd = (e) => (t) => {
  setTimeout(t, e);
}, WO = (e, t) => (r) => {
  let n = !1;
  const i = () => {
    n || (n = !0, cancelAnimationFrame(a), clearTimeout(o), r());
  }, a = e(i), o = setTimeout(i, t);
}, Ny = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? WO(window.requestAnimationFrame, 100) : Yd(10)
  ) : e.type === "callback" ? e.queueNotification : Yd(e.timeout), c = () => {
    o = !1, a && (a = !1, u.forEach((f) => f()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const s = () => i && f(), d = n.subscribe(s);
      return u.add(f), () => {
        d(), u.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var s;
      try {
        return i = !((s = f == null ? void 0 : f.meta) != null && s[Dy]), a = !i, a && (o || (o = !0, l(c))), n.dispatch(f);
      } finally {
        i = !0;
      }
    }
  });
}, qO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new My(e);
  return n && i.push(Ny(typeof n == "object" ? n : void 0)), i;
};
function UO(e) {
  const t = KO(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: a = void 0,
    enhancers: o = void 0
  } = e || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (qc(r))
    u = xy(r);
  else
    throw new Error(et(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let c = va;
  i && (c = BO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: zO.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = PO(...l), s = qO(f);
  let d = typeof o == "function" ? o(s) : s();
  const p = c(...d);
  return by(u, a, p);
}
function $y(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(et(28));
      if (u in t)
        throw new Error(et(29));
      return t[u] = o, i;
    },
    addAsyncThunk(a, o) {
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function HO(e) {
  return typeof e == "function";
}
function GO(e, t) {
  let [r, n, i] = $y(t), a;
  if (HO(e))
    a = () => Vd(e());
  else {
    const u = Vd(e);
    a = () => u;
  }
  function o(u = a(), l) {
    let c = [r[l.type], ...n.filter(({
      matcher: f
    }) => f(l)).map(({
      reducer: f
    }) => f)];
    return c.filter((f) => !!f).length === 0 && (c = [i]), c.reduce((f, s) => {
      if (s)
        if (zt(f)) {
          const p = s(f, l);
          return p === void 0 ? f : p;
        } else {
          if (pt(f))
            return ky(f, (d) => s(d, l));
          {
            const d = s(f, l);
            if (d === void 0) {
              if (f === null)
                return f;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return f;
    }, u);
  }
  return o.getInitialState = a, o;
}
var VO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", YO = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += VO[Math.random() * 64 | 0];
  return t;
}, XO = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ZO(e, t) {
  return `${e}/${t}`;
}
function JO({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[XO];
  return function(i) {
    const {
      name: a,
      reducerPath: o = a
    } = i;
    if (!a)
      throw new Error(et(11));
    const u = (typeof i.reducers == "function" ? i.reducers(e1()) : i.reducers) || {}, l = Object.keys(u), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(w, O) {
        const P = typeof w == "string" ? w : w.type;
        if (!P)
          throw new Error(et(12));
        if (P in c.sliceCaseReducersByType)
          throw new Error(et(13));
        return c.sliceCaseReducersByType[P] = O, f;
      },
      addMatcher(w, O) {
        return c.sliceMatchers.push({
          matcher: w,
          reducer: O
        }), f;
      },
      exposeAction(w, O) {
        return c.actionCreators[w] = O, f;
      },
      exposeCaseReducer(w, O) {
        return c.sliceCaseReducersByName[w] = O, f;
      }
    };
    l.forEach((w) => {
      const O = u[w], P = {
        reducerName: w,
        type: ZO(a, w),
        createNotation: typeof i.reducers == "function"
      };
      r1(O) ? i1(P, O, f, t) : t1(P, O, f);
    });
    function s() {
      const [w = {}, O = [], P = void 0] = typeof i.extraReducers == "function" ? $y(i.extraReducers) : [i.extraReducers], S = {
        ...w,
        ...c.sliceCaseReducersByType
      };
      return GO(i.initialState, (E) => {
        for (let I in S)
          E.addCase(I, S[I]);
        for (let I of c.sliceMatchers)
          E.addMatcher(I.matcher, I.reducer);
        for (let I of O)
          E.addMatcher(I.matcher, I.reducer);
        P && E.addDefaultCase(P);
      });
    }
    const d = (w) => w, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let m;
    function g(w, O) {
      return m || (m = s()), m(w, O);
    }
    function y() {
      return m || (m = s()), m.getInitialState();
    }
    function b(w, O = !1) {
      function P(E) {
        let I = E[w];
        return typeof I > "u" && O && (I = Li(h, P, y)), I;
      }
      function S(E = d) {
        const I = Li(p, O, () => /* @__PURE__ */ new WeakMap());
        return Li(I, E, () => {
          const j = {};
          for (const [C, _] of Object.entries(i.selectors ?? {}))
            j[C] = QO(_, E, () => Li(h, E, y), O);
          return j;
        });
      }
      return {
        reducerPath: w,
        getSelectors: S,
        get selectors() {
          return S(P);
        },
        selectSlice: P
      };
    }
    const x = {
      name: a,
      reducer: g,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: y,
      ...b(o),
      injectInto(w, {
        reducerPath: O,
        ...P
      } = {}) {
        const S = O ?? o;
        return w.inject({
          reducerPath: S,
          reducer: g
        }, P), {
          ...x,
          ...b(S, !0)
        };
      }
    };
    return x;
  };
}
function QO(e, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    return typeof u > "u" && n && (u = r()), e(u, ...o);
  }
  return i.unwrapped = e, i;
}
var $e = /* @__PURE__ */ JO();
function e1() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function t1({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !n1(n))
      throw new Error(et(17));
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? tt(e, o) : tt(e));
}
function r1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function n1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function i1({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(et(18));
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: l,
    settled: c,
    options: f
  } = r, s = i(e, a, f);
  n.exposeAction(t, s), o && n.addCase(s.fulfilled, o), u && n.addCase(s.pending, u), l && n.addCase(s.rejected, l), c && n.addMatcher(s.settled, c), n.exposeCaseReducer(t, {
    fulfilled: o || Ri,
    pending: u || Ri,
    rejected: l || Ri,
    settled: c || Ri
  });
}
function Ri() {
}
var a1 = "task", Ly = "listener", Ry = "completed", Vc = "cancelled", o1 = `task-${Vc}`, u1 = `task-${Ry}`, Vl = `${Ly}-${Vc}`, l1 = `${Ly}-${Ry}`, ho = class {
  constructor(e) {
    this.code = e, this.message = `${a1} ${Vc} (reason: ${e})`;
  }
  code;
  name = "TaskAbortError";
  message;
}, Yc = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(et(32));
}, xa = () => {
}, zy = (e, t = xa) => (e.catch(t), e), By = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Ar = (e) => {
  if (e.aborted)
    throw new ho(e.reason);
};
function Fy(e, t) {
  let r = xa;
  return new Promise((n, i) => {
    const a = () => i(new ho(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = By(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = xa;
  });
}
var c1 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof ho ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t == null || t();
  }
}, wa = (e) => (t) => zy(Fy(e, t).then((r) => (Ar(e), r))), Ky = (e) => {
  const t = wa(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: tn
} = Object, Xd = {}, mo = "listenerMiddleware", s1 = (e, t) => {
  const r = (n) => By(e, () => n.abort(e.reason));
  return (n, i) => {
    Yc(n);
    const a = new AbortController();
    r(a);
    const o = c1(async () => {
      Ar(e), Ar(a.signal);
      const u = await n({
        pause: wa(a.signal),
        delay: Ky(a.signal),
        signal: a.signal
      });
      return Ar(a.signal), u;
    }, () => a.abort(u1));
    return i != null && i.autoJoin && t.push(o.catch(xa)), {
      result: wa(e)(o),
      cancel() {
        a.abort(o1);
      }
    };
  };
}, f1 = (e, t) => {
  const r = async (n, i) => {
    Ar(t);
    let a = () => {
    };
    const u = [new Promise((l, c) => {
      let f = e({
        predicate: n,
        effect: (s, d) => {
          d.unsubscribe(), l([s, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        f(), c();
      };
    })];
    i != null && u.push(new Promise((l) => setTimeout(l, i, null)));
    try {
      const l = await Fy(t, Promise.race(u));
      return Ar(t), l;
    } finally {
      a();
    }
  };
  return ((n, i) => zy(r(n, i)));
}, Wy = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = tt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(et(21));
  return Yc(a), {
    predicate: i,
    type: t,
    effect: a
  };
}, qy = /* @__PURE__ */ tn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Wy(e);
  return {
    id: YO(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(et(22));
    }
  };
}, {
  withTypes: () => qy
}), Zd = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = Wy(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, Yl = (e) => {
  e.pending.forEach((t) => {
    t.abort(Vl);
  });
}, d1 = (e, t) => () => {
  for (const r of t.keys())
    Yl(r);
  e.clear();
}, Jd = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Uy = /* @__PURE__ */ tn(/* @__PURE__ */ tt(`${mo}/add`), {
  withTypes: () => Uy
}), v1 = /* @__PURE__ */ tt(`${mo}/removeAll`), Hy = /* @__PURE__ */ tn(/* @__PURE__ */ tt(`${mo}/remove`), {
  withTypes: () => Hy
}), p1 = (...e) => {
  console.error(`${mo}/error`, ...e);
}, pi = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (p) => {
    const h = r.get(p) ?? 0;
    r.set(p, h + 1);
  }, i = (p) => {
    const h = r.get(p) ?? 1;
    h === 1 ? r.delete(p) : r.set(p, h - 1);
  }, {
    extra: a,
    onError: o = p1
  } = e;
  Yc(o);
  const u = (p) => (p.unsubscribe = () => t.delete(p.id), t.set(p.id, p), (h) => {
    p.unsubscribe(), h != null && h.cancelActive && Yl(p);
  }), l = ((p) => {
    const h = Zd(t, p) ?? qy(p);
    return u(h);
  });
  tn(l, {
    withTypes: () => l
  });
  const c = (p) => {
    const h = Zd(t, p);
    return h && (h.unsubscribe(), p.cancelActive && Yl(h)), !!h;
  };
  tn(c, {
    withTypes: () => c
  });
  const f = async (p, h, m, g) => {
    const y = new AbortController(), b = f1(l, y.signal), x = [];
    try {
      p.pending.add(y), n(p), await Promise.resolve(p.effect(
        h,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        tn({}, m, {
          getOriginalState: g,
          condition: (w, O) => b(w, O).then(Boolean),
          take: b,
          delay: Ky(y.signal),
          pause: wa(y.signal),
          extra: a,
          signal: y.signal,
          fork: s1(y.signal, x),
          unsubscribe: p.unsubscribe,
          subscribe: () => {
            t.set(p.id, p);
          },
          cancelActiveListeners: () => {
            p.pending.forEach((w, O, P) => {
              w !== y && (w.abort(Vl), P.delete(w));
            });
          },
          cancel: () => {
            y.abort(Vl), p.pending.delete(y);
          },
          throwIfCancelled: () => {
            Ar(y.signal);
          }
        })
      ));
    } catch (w) {
      w instanceof ho || Jd(o, w, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(x), y.abort(l1), i(p), p.pending.delete(y);
    }
  }, s = d1(t, r);
  return {
    middleware: (p) => (h) => (m) => {
      if (!wy(m))
        return h(m);
      if (Uy.match(m))
        return l(m.payload);
      if (v1.match(m)) {
        s();
        return;
      }
      if (Hy.match(m))
        return c(m.payload);
      let g = p.getState();
      const y = () => {
        if (g === Xd)
          throw new Error(et(23));
        return g;
      };
      let b;
      try {
        if (b = h(m), t.size > 0) {
          const x = p.getState(), w = Array.from(t.values());
          for (const O of w) {
            let P = !1;
            try {
              P = O.predicate(m, x, g);
            } catch (S) {
              P = !1, Jd(o, S, {
                raisedBy: "predicate"
              });
            }
            P && f(O, m, p, y);
          }
        }
      } finally {
        g = Xd;
      }
      return b;
    },
    startListening: l,
    stopListening: c,
    clearListeners: s
  };
};
function et(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var h1 = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, Gy = $e({
  name: "chartLayout",
  initialState: h1,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: m1,
  setLayout: y1,
  setChartSize: g1,
  setScale: b1
} = Gy.actions, x1 = Gy.reducer;
function Vy(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function _t(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function Qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qd(Object(r), !0).forEach(function(n) {
      w1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function w1(e, t, r) {
  return (t = P1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P1(e) {
  var t = O1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function O1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V(e, t, r) {
  return Q(e) || Q(t) ? r : Et(t) ? Ir(e, t, r) : typeof t == "function" ? t(e) : r;
}
var A1 = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: u
    } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && D(e[a]))
      return Qr(Qr({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && D(e[o]))
      return Qr(Qr({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, qt = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", Yy = (e, t, r, n) => {
  if (n)
    return e.map((u) => u.coordinate);
  var i, a, o = e.map((u) => (u.coordinate === t && (i = !0), u.coordinate === r && (a = !0), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, Xy = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: a,
    scale: o,
    realScaleType: u,
    isCategorical: l,
    categoricalDomain: c,
    tickCount: f,
    ticks: s,
    niceTicks: d,
    axisType: p
  } = e;
  if (!o)
    return null;
  var h = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, m = i === "category" && o.bandwidth ? o.bandwidth() / h : 0;
  if (m = p === "angleAxis" && a && a.length >= 2 ? _e(a[0] - a[1]) * 2 * m : m, s || d) {
    var g = (s || d || []).map((y, b) => {
      var x = n ? n.indexOf(y) : y, w = o.map(x);
      return H(w) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: w + m,
        value: y,
        offset: m,
        index: b
      } : null;
    }).filter(He);
    return g;
  }
  return l && c ? c.map((y, b) => {
    var x = o.map(y);
    return H(x) ? {
      coordinate: x + m,
      value: y,
      index: b,
      offset: m
    } : null;
  }).filter(He) : o.ticks && f != null ? o.ticks(f).map((y, b) => {
    var x = o.map(y);
    return H(x) ? {
      coordinate: x + m,
      value: y,
      index: b,
      offset: m
    } : null;
  }).filter(He) : o.domain().map((y, b) => {
    var x = o.map(y);
    return H(x) ? {
      coordinate: x + m,
      // @ts-expect-error can't use Date as an index
      value: n ? n[y] : y,
      index: b,
      offset: m
    } : null;
  }).filter(He);
}, S1 = (e, t) => {
  if (!t || t.length !== 2 || !D(t[0]) || !D(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!D(e[0]) || e[0] < r) && (i[0] = r), (!D(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, E1 = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var l = e[u], c = l == null ? void 0 : l[i];
          if (c != null) {
            var f = c[1], s = c[0], d = St(f) ? s : f;
            d >= 0 ? (c[0] = a, a += d, c[1] = a) : (c[0] = o, o += d, c[1] = o);
          }
        }
  }
}, _1 = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = e[o], l = u == null ? void 0 : u[i];
          if (l != null) {
            var c = St(l[1]) ? l[0] : l[1];
            c >= 0 ? (l[0] = a, a += c, l[1] = a) : (l[0] = 0, l[1] = 0);
          }
        }
  }
}, I1 = {
  sign: E1,
  // @ts-expect-error definitelytyped types are incorrect
  expand: qw,
  // @ts-expect-error definitelytyped types are incorrect
  none: _r,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Uw,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Hw,
  positive: _1
}, j1 = (e, t, r) => {
  var n, i = (n = I1[r]) !== null && n !== void 0 ? n : _r, a = Ww().keys(t).value((u, l) => Number(V(u, l, 0))).order(Rl).offset(i), o = a(e);
  return o.forEach((u, l) => {
    u.forEach((c, f) => {
      var s = V(e[f], t[l], 0);
      Array.isArray(s) && s.length === 2 && D(s[0]) && D(s[1]) && (c[0] = s[0], c[1] = s[1]);
    });
  }), o;
};
function C1(e) {
  return e == null ? void 0 : String(e);
}
function Pa(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: a,
    dataKey: o
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Q(i[t.dataKey])) {
      var u = ey(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r != null && r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = V(i, Q(o) ? t.dataKey : o), c = t.scale.map(l);
  return D(c) ? c : null;
}
var ev = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: a,
    index: o
  } = e;
  if (t.type === "category")
    return r[o] ? r[o].coordinate + n : null;
  var u = V(a, t.dataKey, t.scale.domain()[o]);
  if (Q(u))
    return null;
  var l = t.scale.map(u);
  return D(l) ? l - i / 2 + n : null;
}, k1 = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, T1 = (e) => {
  var t = e.flat(2).filter(D);
  return [Math.min(...t), Math.max(...t)];
}, M1 = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], D1 = (e, t, r) => {
  if (e != null)
    return M1(Object.keys(e).reduce((n, i) => {
      var a = e[i];
      if (!a)
        return n;
      var {
        stackedData: o
      } = a, u = o.reduce((l, c) => {
        var f = Vy(c, t, r), s = T1(f);
        return !H(s[0]) || !H(s[1]) ? l : [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, tv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, rv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, on = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = oo(t, (f) => f.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var l = i[o], c = i[o - 1];
      a = Math.min(((l == null ? void 0 : l.coordinate) || 0) - ((c == null ? void 0 : c.coordinate) || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function nv(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return Qr(Qr({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function ur(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var N1 = (e, t) => {
  if (t === "horizontal")
    return e.relativeX;
  if (t === "vertical")
    return e.relativeY;
}, $1 = (e, t) => t === "centric" ? e.angle : e.radius, Ut = (e) => e.layout.width, Ht = (e) => e.layout.height, L1 = (e) => e.layout.scale, Zy = (e) => e.layout.margin, yo = A((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), go = A((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), Jy = "data-recharts-item-index", Xc = "data-recharts-item-id", hi = 60;
function iv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iv(Object(r), !0).forEach(function(n) {
      R1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R1(e, t, r) {
  return (t = z1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z1(e) {
  var t = B1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var F1 = (e) => e.brush.height;
function K1(e) {
  var t = go(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : hi;
      return r + i;
    }
    return r;
  }, 0);
}
function W1(e) {
  var t = go(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : hi;
      return r + i;
    }
    return r;
  }, 0);
}
function q1(e) {
  var t = yo(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function U1(e) {
  var t = yo(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Oe = A([Ut, Ht, Zy, F1, K1, W1, q1, U1, yy, hO], (e, t, r, n, i, a, o, u, l, c) => {
  var f = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, s = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + u
  }, d = zi(zi({}, s), f), p = d.bottom;
  d.bottom += n, d = A1(d, l, c);
  var h = e - d.left - d.right, m = t - d.top - d.bottom;
  return zi(zi({
    brushBottom: p
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(h, 0),
    height: Math.max(m, 0)
  });
}), H1 = A(Oe, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Zc = A(Ut, Ht, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), G1 = /* @__PURE__ */ v.createContext(null), Ie = () => v.useContext(G1) != null, bo = (e) => e.brush, xo = A([bo, Oe, Zy], (e, t, r) => ({
  height: e.height,
  x: D(e.x) ? e.x : t.left,
  y: D(e.y) ? e.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0),
  width: D(e.width) ? e.width : t.width
})), el = {}, tl = {}, rl = {}, av;
function V1() {
  return av || (av = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, u = null;
      const l = a != null && a.includes("leading"), c = a == null || a.includes("trailing"), f = () => {
        u !== null && (r.apply(o, u), o = void 0, u = null);
      }, s = () => {
        c && f(), m();
      };
      let d = null;
      const p = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, s();
        }, n);
      }, h = () => {
        d !== null && (clearTimeout(d), d = null);
      }, m = () => {
        h(), o = void 0, u = null;
      }, g = () => {
        f();
      }, y = function(...b) {
        if (i != null && i.aborted)
          return;
        o = this, u = b;
        const x = d == null;
        p(), l && x && f();
      };
      return y.schedule = p, y.cancel = m, y.flush = g, i == null || i.addEventListener("abort", m, { once: !0 }), y;
    }
    e.debounce = t;
  })(rl)), rl;
}
var ov;
function Y1() {
  return ov || (ov = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ V1();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = !1, trailing: u = !0, maxWait: l } = a, c = Array(2);
      o && (c[0] = "leading"), u && (c[1] = "trailing");
      let f, s = null;
      const d = t.debounce(function(...m) {
        f = n.apply(this, m), s = null;
      }, i, { edges: c }), p = function(...m) {
        return l != null && (s === null && (s = Date.now()), Date.now() - s >= l) ? (f = n.apply(this, m), s = Date.now(), d.cancel(), d.schedule(), f) : (d.apply(this, m), f);
      }, h = () => (d.flush(), f);
      return p.cancel = d.cancel, p.flush = h, p;
    }
    e.debounce = r;
  })(tl)), tl;
}
var uv;
function X1() {
  return uv || (uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Y1();
    function r(n, i = 0, a = {}) {
      const { leading: o = !0, trailing: u = !0 } = a;
      return t.debounce(n, i, {
        leading: o,
        maxWait: i,
        trailing: u
      });
    }
    e.throttle = r;
  })(el)), el;
}
var nl, lv;
function Z1() {
  return lv || (lv = 1, nl = X1().throttle), nl;
}
var J1 = /* @__PURE__ */ Z1();
const Q1 = /* @__PURE__ */ pn(J1);
var Oa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
}, wt = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, Qy = (e, t, r) => {
  var {
    width: n = wt.width,
    height: i = wt.height,
    aspect: a,
    maxHeight: o
  } = r, u = jr(n) ? e : Number(n), l = jr(i) ? t : Number(i);
  return a && a > 0 && (u ? l = u / a : l && (u = l * a), o && l != null && l > o && (l = o)), {
    calculatedWidth: u,
    calculatedHeight: l
  };
}, eA = {
  width: 0,
  height: 0,
  overflow: "visible"
}, tA = {
  width: 0,
  overflowX: "visible"
}, rA = {
  height: 0,
  overflowY: "visible"
}, nA = {}, iA = (e) => {
  var {
    width: t,
    height: r
  } = e, n = jr(t), i = jr(r);
  return n && i ? eA : n ? tA : i ? rA : nA;
};
function aA(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = wt.width, a = wt.height) : i === void 0 ? i = n && n > 0 ? void 0 : wt.width : a === void 0 && (a = n && n > 0 ? void 0 : wt.height), {
    width: i,
    height: a
  };
}
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xl.apply(null, arguments);
}
function cv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cv(Object(r), !0).forEach(function(n) {
      oA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oA(e, t, r) {
  return (t = uA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uA(e) {
  var t = lA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eg = /* @__PURE__ */ v.createContext(wt.initialDimension);
function cA(e) {
  return _t(e.width) && _t(e.height);
}
function tg(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = v.useMemo(() => ({
    width: r,
    height: n
  }), [r, n]);
  return cA(i) ? /* @__PURE__ */ v.createElement(eg.Provider, {
    value: i
  }, t) : null;
}
var Jc = () => v.useContext(eg), sA = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    aspect: r,
    initialDimension: n = wt.initialDimension,
    width: i,
    height: a,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = wt.minWidth,
    minHeight: u,
    maxHeight: l,
    children: c,
    debounce: f = wt.debounce,
    id: s,
    className: d,
    onResize: p,
    style: h = {}
  } = e, m = v.useRef(null), g = v.useRef();
  g.current = p, v.useImperativeHandle(t, () => m.current);
  var [y, b] = v.useState({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = v.useCallback((E, I) => {
    b((j) => {
      var C = Math.round(E), _ = Math.round(I);
      return j.containerWidth === C && j.containerHeight === _ ? j : {
        containerWidth: C,
        containerHeight: _
      };
    });
  }, []);
  v.useEffect(() => {
    if (m.current == null || typeof ResizeObserver > "u")
      return Lr;
    var E = (_) => {
      var z, M = _[0];
      if (M != null) {
        var {
          width: R,
          height: W
        } = M.contentRect;
        x(R, W), (z = g.current) === null || z === void 0 || z.call(g, R, W);
      }
    };
    f > 0 && (E = Q1(E, f, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver(E), {
      width: j,
      height: C
    } = m.current.getBoundingClientRect();
    return x(j, C), I.observe(m.current), () => {
      I.disconnect();
    };
  }, [x, f]);
  var {
    containerWidth: w,
    containerHeight: O
  } = y;
  Oa(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: P,
    calculatedHeight: S
  } = Qy(w, O, {
    width: i,
    height: a,
    aspect: r,
    maxHeight: l
  });
  return Oa(P != null && P > 0 || S != null && S > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, S, i, a, o, u, r), /* @__PURE__ */ v.createElement("div", {
    id: s ? "".concat(s) : void 0,
    className: K("recharts-responsive-container", d),
    style: sv(sv({}, h), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: u,
      maxHeight: l
    }),
    ref: m
  }, /* @__PURE__ */ v.createElement("div", {
    style: iA({
      width: i,
      height: a
    })
  }, /* @__PURE__ */ v.createElement(tg, {
    width: P,
    height: S
  }, c)));
}), Bi = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r = Jc();
  if (_t(r.width) && _t(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = aA({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: o
  } = Qy(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return D(a) && D(o) ? /* @__PURE__ */ v.createElement(tg, {
    width: a,
    height: o
  }, e.children) : /* @__PURE__ */ v.createElement(sA, Xl({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function Qc(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var mi = () => {
  var e, t = Ie(), r = N(H1), n = N(xo), i = (e = N(bo)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, fA = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, rg = () => {
  var e;
  return (e = N(Oe)) !== null && e !== void 0 ? e : fA;
}, es = () => N(Ut), ts = () => N(Ht), dA = () => N((e) => e.layout.margin), J = (e) => e.layout.layoutType, Rr = () => N(J), ng = () => {
  var e = Rr();
  if (e === "horizontal" || e === "vertical")
    return e;
}, ig = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, vA = () => {
  var e = Rr();
  return e !== void 0;
}, yi = (e) => {
  var t = te(), r = Ie(), {
    width: n,
    height: i
  } = e, a = Jc(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), v.useEffect(() => {
    !r && _t(o) && _t(u) && t(g1({
      width: o,
      height: u
    }));
  }, [t, r, o, u]), null;
}, ag = Symbol.for("immer-nothing"), fv = Symbol.for("immer-draftable"), rt = Symbol.for("immer-state");
function dt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Qn = Object.getPrototypeOf;
function un(e) {
  return !!e && !!e[rt];
}
function kr(e) {
  var t;
  return e ? og(e) || Array.isArray(e) || !!e[fv] || !!((t = e.constructor) != null && t[fv]) || gi(e) || Po(e) : !1;
}
var pA = Object.prototype.constructor.toString(), dv = /* @__PURE__ */ new WeakMap();
function og(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = dv.get(r);
  return n === void 0 && (n = Function.toString.call(r), dv.set(r, n)), n === pA;
}
function Aa(e, t, r = !0) {
  wo(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function wo(e) {
  const t = e[rt];
  return t ? t.type_ : Array.isArray(e) ? 1 : gi(e) ? 2 : Po(e) ? 3 : 0;
}
function Zl(e, t) {
  return wo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ug(e, t, r) {
  const n = wo(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function hA(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function gi(e) {
  return e instanceof Map;
}
function Po(e) {
  return e instanceof Set;
}
function gr(e) {
  return e.copy_ || e.base_;
}
function Jl(e, t) {
  if (gi(e))
    return new Map(e);
  if (Po(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = og(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[rt];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[o]
      });
    }
    return Object.create(Qn(e), n);
  } else {
    const n = Qn(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function rs(e, t = !1) {
  return Oo(e) || un(e) || !kr(e) || (wo(e) > 1 && Object.defineProperties(e, {
    set: Fi,
    add: Fi,
    clear: Fi,
    delete: Fi
  }), Object.freeze(e), t && Object.values(e).forEach((r) => rs(r, !0))), e;
}
function mA() {
  dt(2);
}
var Fi = {
  value: mA
};
function Oo(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var yA = {};
function Tr(e) {
  const t = yA[e];
  return t || dt(0, e), t;
}
var ei;
function lg() {
  return ei;
}
function gA(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function vv(e, t) {
  t && (Tr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ql(e) {
  ec(e), e.drafts_.forEach(bA), e.drafts_ = null;
}
function ec(e) {
  e === ei && (ei = e.parent_);
}
function pv(e) {
  return ei = gA(ei, e);
}
function bA(e) {
  const t = e[rt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function hv(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[rt].modified_ && (Ql(t), dt(4)), kr(e) && (e = Sa(t, e), t.parent_ || Ea(t, e)), t.patches_ && Tr("Patches").generateReplacementPatches_(
    r[rt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Sa(t, r, []), Ql(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ag ? e : void 0;
}
function Sa(e, t, r) {
  if (Oo(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[rt];
  if (!i)
    return Aa(
      t,
      (a, o) => mv(e, i, t, a, o, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return Ea(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = !1;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = !0), Aa(
      o,
      (l, c) => mv(
        e,
        i,
        a,
        l,
        c,
        r,
        u
      ),
      n
    ), Ea(e, a, !1), r && e.patches_ && Tr("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function mv(e, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o)
    return;
  const u = Oo(i);
  if (!(u && !o)) {
    if (un(i)) {
      const l = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Zl(t.assigned_, n) ? a.concat(n) : void 0, c = Sa(e, i, l);
      if (ug(r, n, c), un(c))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else o && r.add(i);
    if (kr(i) && !u) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u)
        return;
      Sa(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (gi(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Ea(e, i);
    }
  }
}
function Ea(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && rs(t, r);
}
function xA(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : lg(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = ns;
  r && (i = [n], a = ti);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var ns = {
  get(e, t) {
    if (t === rt)
      return e;
    const r = gr(e);
    if (!Zl(r, t))
      return wA(e, r, t);
    const n = r[t];
    return e.finalized_ || !kr(n) ? n : n === il(e.base_, t) ? (al(e), e.copy_[t] = rc(n, e)) : n;
  },
  has(e, t) {
    return t in gr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(gr(e));
  },
  set(e, t, r) {
    const n = cg(gr(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = il(gr(e), t), a = i == null ? void 0 : i[rt];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (hA(r, i) && (r !== void 0 || Zl(e.base_, t)))
        return !0;
      al(e), tc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return il(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, al(e), tc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = gr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    dt(11);
  },
  getPrototypeOf(e) {
    return Qn(e.base_);
  },
  setPrototypeOf() {
    dt(12);
  }
}, ti = {};
Aa(ns, (e, t) => {
  ti[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ti.deleteProperty = function(e, t) {
  return ti.set.call(this, e, t, void 0);
};
ti.set = function(e, t, r) {
  return ns.set.call(this, e[0], t, r, e[0]);
};
function il(e, t) {
  const r = e[rt];
  return (r ? gr(r) : e)[t];
}
function wA(e, t, r) {
  var i;
  const n = cg(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function cg(e, t) {
  if (!(t in e))
    return;
  let r = Qn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Qn(r);
  }
}
function tc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && tc(e.parent_));
}
function al(e) {
  e.copy_ || (e.copy_ = Jl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var PA = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(l = a, ...c) {
          return o.produce(l, (f) => r.call(this, f, ...c));
        };
      }
      typeof r != "function" && dt(6), n !== void 0 && typeof n != "function" && dt(7);
      let i;
      if (kr(t)) {
        const a = pv(this), o = rc(t, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? Ql(a) : ec(a);
        }
        return vv(a, n), hv(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === ag && (i = void 0), this.autoFreeze_ && rs(i, !0), n) {
          const a = [], o = [];
          Tr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        dt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (l) => t(l, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof (e == null ? void 0 : e.useStrictIteration) == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    kr(e) || dt(8), un(e) && (e = OA(e));
    const t = pv(this), r = rc(e, void 0);
    return r[rt].isManual_ = !0, ec(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[rt];
    (!r || !r.isManual_) && dt(9);
    const { scope_: n } = r;
    return vv(n, t), hv(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Tr("Patches").applyPatches_;
    return un(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function rc(e, t) {
  const r = gi(e) ? Tr("MapSet").proxyMap_(e, t) : Po(e) ? Tr("MapSet").proxySet_(e, t) : xA(e, t);
  return (t ? t.scope_ : lg()).drafts_.push(r), r;
}
function OA(e) {
  return un(e) || dt(10, e), sg(e);
}
function sg(e) {
  if (!kr(e) || Oo(e))
    return e;
  const t = e[rt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Jl(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Jl(e, !0);
  return Aa(
    r,
    (i, a) => {
      ug(r, i, sg(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var AA = new PA();
AA.produce;
var SA = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, fg = $e({
  name: "legend",
  initialState: SA,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: ae()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = ut(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: ae()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = ut(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ae()
    }
  }
}), {
  setLegendSize: yv,
  setLegendSettings: EA,
  addLegendPayload: dg,
  replaceLegendPayload: vg,
  removeLegendPayload: pg
} = fg.actions, _A = fg.reducer, ol = { exports: {} }, ul = {};
var gv;
function IA() {
  if (gv) return ul;
  gv = 1;
  var e = Tm();
  function t(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, u = e.useDebugValue;
  return ul.useSyncExternalStoreWithSelector = function(l, c, f, s, d) {
    var p = i(null);
    if (p.current === null) {
      var h = { hasValue: !1, value: null };
      p.current = h;
    } else h = p.current;
    p = o(
      function() {
        function g(O) {
          if (!y) {
            if (y = !0, b = O, O = s(O), d !== void 0 && h.hasValue) {
              var P = h.value;
              if (d(P, O))
                return x = P;
            }
            return x = O;
          }
          if (P = x, r(b, O)) return P;
          var S = s(O);
          return d !== void 0 && d(P, S) ? (b = O, P) : (b = O, x = S);
        }
        var y = !1, b, x, w = f === void 0 ? null : f;
        return [
          function() {
            return g(c());
          },
          w === null ? void 0 : function() {
            return g(w());
          }
        ];
      },
      [c, f, s, d]
    );
    var m = n(l, p[0], p[1]);
    return a(
      function() {
        h.hasValue = !0, h.value = m;
      },
      [m]
    ), u(m), m;
  }, ul;
}
var bv;
function jA() {
  return bv || (bv = 1, ol.exports = IA()), ol.exports;
}
jA();
function CA(e) {
  e();
}
function kA() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      CA(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var xv = {
  notify() {
  },
  get: () => []
};
function TA(e, t) {
  let r, n = xv, i = 0, a = !1;
  function o(m) {
    f();
    const g = n.subscribe(m);
    let y = !1;
    return () => {
      y || (y = !0, g(), s());
    };
  }
  function u() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return a;
  }
  function f() {
    i++, r || (r = e.subscribe(l), n = kA());
  }
  function s() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = xv);
  }
  function d() {
    a || (a = !0, f());
  }
  function p() {
    a && (a = !1, s());
  }
  const h = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return h;
}
var MA = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", DA = /* @__PURE__ */ MA(), NA = () => typeof navigator < "u" && navigator.product === "ReactNative", $A = /* @__PURE__ */ NA(), LA = () => DA || $A ? v.useLayoutEffect : v.useEffect, RA = /* @__PURE__ */ LA();
function wv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function zA(e, t) {
  if (wv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !wv(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var ll = /* @__PURE__ */ Symbol.for("react-redux-context"), cl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function BA() {
  if (!v.createContext) return {};
  const e = cl[ll] ?? (cl[ll] = /* @__PURE__ */ new Map());
  let t = e.get(v.createContext);
  return t || (t = v.createContext(
    null
  ), e.set(v.createContext, t)), t;
}
var FA = /* @__PURE__ */ BA();
function KA(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = v.useMemo(() => {
    const l = TA(i);
    return {
      store: i,
      subscription: l,
      getServerState: n ? () => n : void 0
    };
  }, [i, n]), o = v.useMemo(() => i.getState(), [i]);
  RA(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), o !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || FA;
  return /* @__PURE__ */ v.createElement(u.Provider, { value: a }, t);
}
var WA = KA, qA = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius",
  "throttledEvents"
]);
function UA(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function zr(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (qA.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!zA(e[n], t[n]))
        return !1;
    } else if (!UA(e[n], t[n]))
      return !1;
  return !0;
}
var HA = ["contextPayload"];
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nc.apply(null, arguments);
}
function Pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(r), !0).forEach(function(n) {
      GA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GA(e, t, r) {
  return (t = VA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VA(e) {
  var t = YA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XA(e, t) {
  if (e == null) return {};
  var r, n, i = ZA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ZA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function JA(e) {
  return e.value;
}
function QA(e) {
  var {
    contextPayload: t
  } = e, r = XA(e, HA), n = vy(t, e.payloadUniqBy, JA), i = ln(ln({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ v.isValidElement(e.content) ? /* @__PURE__ */ v.cloneElement(e.content, i) : typeof e.content == "function" ? /* @__PURE__ */ v.createElement(e.content, i) : /* @__PURE__ */ v.createElement(OP, i);
}
function eS(e, t, r, n, i, a) {
  var {
    layout: o,
    align: u,
    verticalAlign: l
  } = t, c, f;
  return (!e || (e.left === void 0 || e.left === null) && (e.right === void 0 || e.right === null)) && (u === "center" && o === "vertical" ? c = {
    left: ((n || 0) - a.width) / 2
  } : c = u === "right" ? {
    right: r && r.right || 0
  } : {
    left: r && r.left || 0
  }), (!e || (e.top === void 0 || e.top === null) && (e.bottom === void 0 || e.bottom === null)) && (l === "middle" ? f = {
    top: ((i || 0) - a.height) / 2
  } : f = l === "bottom" ? {
    bottom: r && r.bottom || 0
  } : {
    top: r && r.top || 0
  }), ln(ln({}, c), f);
}
function tS(e) {
  var t = te();
  return v.useEffect(() => {
    t(EA(e));
  }, [t, e]), null;
}
function rS(e) {
  var t = te();
  return v.useEffect(() => (t(yv(e)), () => {
    t(yv({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function nS(e, t, r, n) {
  return e === "vertical" && t != null ? {
    height: t
  } : e === "horizontal" ? {
    width: r || n
  } : null;
}
var iS = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
};
function aS(e) {
  var t = he(e, iS), r = gO(), n = vw(), i = dA(), {
    width: a,
    height: o,
    wrapperStyle: u,
    portal: l
  } = t, [c, f] = gy([r]), s = es(), d = ts();
  if (s == null || d == null)
    return null;
  var p = s - ((i == null ? void 0 : i.left) || 0) - ((i == null ? void 0 : i.right) || 0), h = nS(t.layout, o, a, p), m = l ? u : ln(ln({
    position: "absolute",
    width: (h == null ? void 0 : h.width) || a || "auto",
    height: (h == null ? void 0 : h.height) || o || "auto"
  }, eS(u, t, i, s, d, c)), u), g = l ?? n;
  if (g == null || r == null)
    return null;
  var y = /* @__PURE__ */ v.createElement("div", {
    className: "recharts-legend-wrapper",
    style: m,
    ref: f
  }, /* @__PURE__ */ v.createElement(tS, {
    layout: t.layout,
    align: t.align,
    verticalAlign: t.verticalAlign,
    itemSorter: t.itemSorter
  }), !l && /* @__PURE__ */ v.createElement(rS, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ v.createElement(QA, nc({}, t, h, {
    margin: i,
    chartWidth: s,
    chartHeight: d,
    contextPayload: r
  })));
  return /* @__PURE__ */ Tc.createPortal(y, g);
}
var Wn = /* @__PURE__ */ v.memo(aS, zr);
Wn.displayName = "Legend";
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ic.apply(null, arguments);
}
function Ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(r), !0).forEach(function(n) {
      oS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oS(e, t, r) {
  return (t = uS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uS(e) {
  var t = lS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cS(e) {
  return Array.isArray(e) && Et(e[0]) && Et(e[1]) ? e.join(" ~ ") : e;
}
var Ur = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: !1
};
function sS(e, t) {
  return t == null ? e : oo(e, t);
}
var fS = (e) => {
  var {
    separator: t = Ur.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = Ur.labelStyle,
    payload: a,
    formatter: o,
    itemSorter: u,
    wrapperClassName: l,
    labelClassName: c,
    label: f,
    labelFormatter: s,
    accessibilityLayer: d = Ur.accessibilityLayer
  } = e, p = () => {
    if (a && a.length) {
      var O = {
        padding: 0,
        margin: 0
      }, P = sS(a, u), S = P.map((E, I) => {
        if (!E || E.type === "none")
          return null;
        var j = E.formatter || o || cS, {
          value: C,
          name: _
        } = E, z = C, M = _;
        if (j) {
          var R = j(C, _, E, I, a);
          if (Array.isArray(R))
            [z, M] = R;
          else if (R != null)
            z = R;
          else
            return null;
        }
        var W = kn(kn({}, Ur.itemStyle), {}, {
          color: E.color || Ur.itemStyle.color
        }, n);
        return /* @__PURE__ */ v.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(I),
          style: W
        }, Et(M) ? /* @__PURE__ */ v.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, M) : null, Et(M) ? /* @__PURE__ */ v.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ v.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, z), /* @__PURE__ */ v.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, E.unit || ""));
      });
      return /* @__PURE__ */ v.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: O
      }, S);
    }
    return null;
  }, h = kn(kn({}, Ur.contentStyle), r), m = kn({
    margin: 0
  }, i), g = !Q(f), y = g ? f : "", b = K("recharts-default-tooltip", l), x = K("recharts-tooltip-label", c);
  g && s && a !== void 0 && a !== null && (y = s(f, a));
  var w = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ v.createElement("div", ic({
    className: b,
    style: h
  }, w), /* @__PURE__ */ v.createElement("p", {
    className: x,
    style: m
  }, /* @__PURE__ */ v.isValidElement(y) ? y : "".concat(y)), p());
}, Tn = "recharts-tooltip-wrapper", dS = {
  visibility: "hidden"
};
function vS(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return K(Tn, {
    ["".concat(Tn, "-right")]: D(r) && t && D(t.x) && r >= t.x,
    ["".concat(Tn, "-left")]: D(r) && t && D(t.x) && r < t.x,
    ["".concat(Tn, "-bottom")]: D(n) && t && D(t.y) && n >= t.y,
    ["".concat(Tn, "-top")]: D(n) && t && D(t.y) && n < t.y
  });
}
function Av(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u,
    viewBox: l,
    viewBoxDimension: c
  } = e;
  if (a && D(a[n]))
    return a[n];
  var f = r[n] - u - (i > 0 ? i : 0), s = r[n] + i;
  if (t[n])
    return o[n] ? f : s;
  var d = l[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var p = f, h = d;
    return p < h ? Math.max(s, d) : Math.max(f, d);
  }
  if (c == null)
    return 0;
  var m = s + u, g = d + c;
  return m > g ? Math.max(f, d) : Math.max(s, d);
}
function pS(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function hS(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: a,
    reverseDirection: o,
    tooltipBox: u,
    useTranslate3d: l,
    viewBox: c
  } = e, f, s, d;
  return u.height > 0 && u.width > 0 && r ? (s = Av({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Av({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: a,
    reverseDirection: o,
    tooltipDimension: u.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), f = pS({
    translateX: s,
    translateY: d,
    useTranslate3d: l
  })) : f = dS, {
    cssProperties: f,
    cssClasses: vS({
      translateX: s,
      translateY: d,
      coordinate: r
    })
  };
}
var mS = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), bi = {
  isSsr: mS()
};
function hg() {
  var [e, t] = v.useState(() => bi.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return v.useEffect(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e;
}
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sv(Object(r), !0).forEach(function(n) {
      yS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yS(e, t, r) {
  return (t = gS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gS(e) {
  var t = bS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xS(e) {
  if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active)
    return "transform ".concat(e.animationDuration, "ms ").concat(e.animationEasing);
}
function wS(e) {
  var t, r, n, i, a, o, u = hg(), [l, c] = v.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  v.useEffect(() => {
    var h = (m) => {
      if (m.key === "Escape") {
        var g, y, b, x;
        c({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (g = (y = e.coordinate) === null || y === void 0 ? void 0 : y.x) !== null && g !== void 0 ? g : 0,
            y: (b = (x = e.coordinate) === null || x === void 0 ? void 0 : x.y) !== null && b !== void 0 ? b : 0
          }
        });
      }
    };
    return document.addEventListener("keydown", h), () => {
      document.removeEventListener("keydown", h);
    };
  }, [(t = e.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e.coordinate) === null || r === void 0 ? void 0 : r.y]), l.dismissed && (((n = (i = e.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== l.dismissedAtCoordinate.x || ((a = (o = e.coordinate) === null || o === void 0 ? void 0 : o.y) !== null && a !== void 0 ? a : 0) !== l.dismissedAtCoordinate.y) && c(Hr(Hr({}, l), {}, {
    dismissed: !1
  }));
  var {
    cssClasses: f,
    cssProperties: s
  } = hS({
    allowEscapeViewBox: e.allowEscapeViewBox,
    coordinate: e.coordinate,
    offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
    offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
    position: e.position,
    reverseDirection: e.reverseDirection,
    tooltipBox: {
      height: e.lastBoundingBox.height,
      width: e.lastBoundingBox.width
    },
    useTranslate3d: e.useTranslate3d,
    viewBox: e.viewBox
  }), d = e.hasPortalFromProps ? {} : Hr(Hr({
    transition: xS({
      prefersReducedMotion: u,
      isAnimationActive: e.isAnimationActive,
      active: e.active,
      animationDuration: e.animationDuration,
      animationEasing: e.animationEasing
    })
  }, s), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  }), p = Hr(Hr({}, d), {}, {
    visibility: !l.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
  }, e.wrapperStyle);
  return /* @__PURE__ */ v.createElement("div", {
    // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
    xmlns: "http://www.w3.org/1999/xhtml",
    tabIndex: -1,
    className: f,
    style: p,
    ref: e.innerRef
  }, e.children);
}
var PS = /* @__PURE__ */ v.memo(wS), mg = () => {
  var e;
  return (e = N((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ac.apply(null, arguments);
}
function Ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), !0).forEach(function(n) {
      OS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OS(e, t, r) {
  return (t = AS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AS(e) {
  var t = SS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Iv = {
  curveBasisClosed: Tw,
  curveBasisOpen: Mw,
  curveBasis: kw,
  curveBumpX: yw,
  curveBumpY: gw,
  curveLinearClosed: Dw,
  curveLinear: no,
  curveMonotoneX: Nw,
  curveMonotoneY: $w,
  curveNatural: Lw,
  curveStep: Rw,
  curveStepAfter: Bw,
  curveStepBefore: zw
}, _a = (e) => H(e.x) && H(e.y), jv = (e) => e.base != null && _a(e.base) && _a(e), Mn = (e) => e.x, Dn = (e) => e.y, ES = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(di(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = Iv["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return Iv[r] || no;
}, Cv = {
  connectNulls: !1,
  type: "linear"
}, _S = (e) => {
  var {
    type: t = Cv.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = Cv.connectNulls
  } = e, o = ES(t, i), u = a ? r.filter(_a) : r;
  if (Array.isArray(n)) {
    var l, c = r.map((h, m) => _v(_v({}, h), {}, {
      base: n[m]
    }));
    i === "vertical" ? l = Mi().y(Dn).x1(Mn).x0((h) => h.base.x) : l = Mi().x(Mn).y1(Dn).y0((h) => h.base.y);
    var f = l.defined(jv).curve(o), s = a ? c.filter(jv) : c;
    return f(s);
  }
  var d;
  i === "vertical" && D(n) ? d = Mi().y(Dn).x1(Mn).x0(n) : D(n) ? d = Mi().x(Mn).y1(Dn).y0(n) : d = Fm().x(Mn).y(Dn);
  var p = d.defined(_a).curve(o);
  return p(u);
}, Ao = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, a = Rr();
  if ((!r || !r.length) && !n)
    return null;
  var o = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || a,
    connectNulls: e.connectNulls
  }, u = r && r.length ? _S(o) : n;
  return /* @__PURE__ */ v.createElement("path", ac({}, Be(e), Fc(e), {
    className: K("recharts-curve", t),
    d: u === null ? void 0 : u,
    ref: i
  }));
}, IS = ["x", "y", "top", "left", "width", "height", "className"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oc.apply(null, arguments);
}
function kv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kv(Object(r), !0).forEach(function(n) {
      CS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CS(e, t, r) {
  return (t = kS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kS(e) {
  var t = TS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MS(e, t) {
  if (e == null) return {};
  var r, n, i = DS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function DS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var NS = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), $S = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: u
  } = e, l = MS(e, IS), c = jS({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, l);
  return !D(t) || !D(r) || !D(a) || !D(o) || !D(n) || !D(i) ? null : /* @__PURE__ */ v.createElement("path", oc({}, Fe(c), {
    className: K("recharts-cross", u),
    d: NS(t, r, a, o, n, i)
  }));
};
function LS(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tv(Object(r), !0).forEach(function(n) {
      RS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RS(e, t, r) {
  return (t = zS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zS(e) {
  var t = BS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FS = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), yg = (e, t, r) => e.map((n) => "".concat(FS(n), " ").concat(t, "ms ").concat(r)).join(","), KS = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), ri = (e, t) => Object.keys(t).reduce((r, n) => Mv(Mv({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(r), !0).forEach(function(n) {
      WS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WS(e, t, r) {
  return (t = qS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qS(e) {
  var t = US(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function US(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ia = (e, t, r) => e + (t - e) * r, uc = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, gg = (e, t, r) => {
  var n = ri((i, a) => {
    if (uc(a)) {
      var [o, u] = e(a.from, a.to, a.velocity);
      return Pe(Pe({}, a), {}, {
        from: o,
        velocity: u
      });
    }
    return a;
  }, t);
  return r < 1 ? ri((i, a) => uc(a) && n[i] != null ? Pe(Pe({}, a), {}, {
    velocity: Ia(a.velocity, n[i].velocity, r),
    from: Ia(a.from, n[i].from, r)
  }) : a, t) : gg(e, n, r - 1);
};
function HS(e, t, r, n, i, a) {
  var o, u = n.reduce((d, p) => Pe(Pe({}, d), {}, {
    [p]: {
      from: e[p],
      velocity: 0,
      to: t[p]
    }
  }), {}), l = () => ri((d, p) => p.from, u), c = () => !Object.values(u).filter(uc).length, f = null, s = (d) => {
    o || (o = d);
    var p = d - o, h = p / r.dt;
    u = gg(r, u, h), i(Pe(Pe(Pe({}, e), t), l())), o = d, c() || (f = a.setTimeout(s));
  };
  return () => (f = a.setTimeout(s), () => {
    var d;
    (d = f) === null || d === void 0 || d();
  });
}
function GS(e, t, r, n, i, a, o) {
  var u = null, l = i.reduce((s, d) => {
    var p = e[d], h = t[d];
    return p == null || h == null ? s : Pe(Pe({}, s), {}, {
      [d]: [p, h]
    });
  }, {}), c, f = (s) => {
    c || (c = s);
    var d = (s - c) / n, p = ri((m, g) => Ia(...g, r(d)), l);
    if (a(Pe(Pe(Pe({}, e), t), p)), d < 1)
      u = o.setTimeout(f);
    else {
      var h = ri((m, g) => Ia(...g, r(1)), l);
      a(Pe(Pe(Pe({}, e), t), h));
    }
  };
  return () => (u = o.setTimeout(f), () => {
    var s;
    (s = u) === null || s === void 0 || s();
  });
}
const VS = (e, t, r, n, i, a) => {
  var o = KS(e, t);
  return r == null ? () => (i(Pe(Pe({}, e), t)), () => {
  }) : r.isStepper === !0 ? HS(e, t, r, o, i, a) : GS(e, t, r, n, o, i, a);
};
var ja = 1e-4, bg = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], xg = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Nv = (e, t) => (r) => {
  var n = bg(e, t);
  return xg(n, r);
}, YS = (e, t) => (r) => {
  var n = bg(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return xg(i, r);
}, XS = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, ZS = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = XS(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, JS = (e, t, r, n) => {
  var i = Nv(e, r), a = Nv(t, n), o = YS(e, r), u = (c) => c > 1 ? 1 : c < 0 ? 0 : c, l = (c) => {
    for (var f = c > 1 ? 1 : c, s = f, d = 0; d < 8; ++d) {
      var p = i(s) - f, h = o(s);
      if (Math.abs(p - f) < ja || h < ja)
        return a(s);
      s = u(s - p / h);
    }
    return a(s);
  };
  return l.isStepper = !1, l;
}, $v = function() {
  return JS(...ZS(...arguments));
}, QS = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, u, l) => {
    var c = -(o - u) * r, f = l * n, s = l + (c - f) * i / 1e3, d = l * i / 1e3 + o;
    return Math.abs(d - u) < ja && Math.abs(s) < ja ? [u, 0] : [d, s];
  };
  return a.isStepper = !0, a.dt = i, a;
}, eE = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return $v(e);
      case "spring":
        return QS();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return $v(e);
    }
  return typeof e == "function" ? e : null;
};
function tE(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var u = o, [l, ...c] = u;
        if (typeof l == "number") {
          i = e.setTimeout(a.bind(null, c), l);
          return;
        }
        a(l), i = e.setTimeout(a.bind(null, c));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class rE {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function nE() {
  return tE(new rE());
}
var iE = /* @__PURE__ */ v.createContext(nE);
function aE(e, t) {
  var r = v.useContext(iE);
  return v.useMemo(() => t ?? r(e), [e, t, r]);
}
var oE = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, Lv = {
  t: 0
}, sl = {
  t: 1
};
function mn(e) {
  var t = he(e, oE), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: u,
    onAnimationStart: l,
    children: c
  } = t, f = hg(), s = r === "auto" ? !bi.isSsr && !f : r, d = aE(t.animationId, t.animationManager), [p, h] = v.useState(s ? Lv : sl), m = v.useRef(null);
  return v.useEffect(() => {
    s || h(sl);
  }, [s]), v.useEffect(() => {
    if (!s || !n)
      return Lr;
    var g = VS(Lv, sl, eE(a), i, h, d.getTimeoutController()), y = () => {
      m.current = g();
    };
    return d.start([l, o, y, i, u]), () => {
      d.stop(), m.current && m.current(), u();
    };
  }, [s, n, i, a, o, l, u, d]), c(p.t);
}
function yn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = v.useRef(Yn(t)), n = v.useRef(e);
  return n.current !== e && (r.current = Yn(t), n.current = e), r.current;
}
var uE = ["radius"], lE = ["radius"], Rv, zv, Bv, Fv, Kv, Wv, qv, Uv, Hv, Gv;
function Vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(r), !0).forEach(function(n) {
      cE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cE(e, t, r) {
  return (t = sE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sE(e) {
  var t = fE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ca.apply(null, arguments);
}
function Xv(e, t) {
  if (e == null) return {};
  var r, n, i = dE(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function yt(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Zv = (e, t, r, n, i) => {
  var a = tr(r), o = tr(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), l = o >= 0 ? 1 : -1, c = a >= 0 ? 1 : -1, f = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, s;
  if (u > 0 && Array.isArray(i)) {
    for (var d = [0, 0, 0, 0], p = 0, h = 4; p < h; p++) {
      var m, g = (m = i[p]) !== null && m !== void 0 ? m : 0;
      d[p] = g > u ? u : g;
    }
    s = ve(Rv || (Rv = yt(["M", ",", ""])), e, t + l * d[0]), d[0] > 0 && (s += ve(zv || (zv = yt(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], f, e + c * d[0], t)), s += ve(Bv || (Bv = yt(["L ", ",", ""])), e + r - c * d[1], t), d[1] > 0 && (s += ve(Fv || (Fv = yt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], f, e + r, t + l * d[1])), s += ve(Kv || (Kv = yt(["L ", ",", ""])), e + r, t + n - l * d[2]), d[2] > 0 && (s += ve(Wv || (Wv = yt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], f, e + r - c * d[2], t + n)), s += ve(qv || (qv = yt(["L ", ",", ""])), e + c * d[3], t + n), d[3] > 0 && (s += ve(Uv || (Uv = yt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], f, e, t + n - l * d[3])), s += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var y = Math.min(u, i);
    s = ve(Hv || (Hv = yt(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + l * y, y, y, f, e + c * y, t, e + r - c * y, t, y, y, f, e + r, t + l * y, e + r, t + n - l * y, y, y, f, e + r - c * y, t + n, e + c * y, t + n, y, y, f, e, t + n - l * y);
  } else
    s = ve(Gv || (Gv = yt(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return s;
}, Jv = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, wg = (e) => {
  var t = he(e, Jv), r = v.useRef(null), [n, i] = v.useState(-1);
  v.useEffect(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var F = r.current.getTotalLength();
        F && i(F);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: u,
    height: l,
    radius: c,
    className: f
  } = t, {
    animationEasing: s,
    animationDuration: d,
    animationBegin: p,
    isAnimationActive: h,
    isUpdateAnimationActive: m
  } = t, g = v.useRef(u), y = v.useRef(l), b = v.useRef(a), x = v.useRef(o), w = v.useMemo(() => ({
    x: a,
    y: o,
    width: u,
    height: l,
    radius: c
  }), [a, o, u, l, c]), O = yn(w, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || l !== +l || u === 0 || l === 0)
    return null;
  var P = K("recharts-rectangle", f);
  if (!m) {
    var S = Fe(t), {
      radius: E
    } = S, I = Xv(S, uE);
    return /* @__PURE__ */ v.createElement("path", Ca({}, I, {
      x: tr(a),
      y: tr(o),
      width: tr(u),
      height: tr(l),
      radius: typeof c == "number" ? c : void 0,
      className: P,
      d: Zv(a, o, u, l, c)
    }));
  }
  var j = g.current, C = y.current, _ = b.current, z = x.current, M = "0px ".concat(n === -1 ? 1 : n, "px"), R = "".concat(n, "px ").concat(n, "px"), W = yg(["strokeDasharray"], d, typeof s == "string" ? s : Jv.animationEasing);
  return /* @__PURE__ */ v.createElement(mn, {
    animationId: O,
    key: O,
    canBegin: n > 0,
    duration: d,
    easing: s,
    isActive: m,
    begin: p
  }, (F) => {
    var Y = ee(j, u, F), B = ee(C, l, F), G = ee(_, a, F), ye = ee(z, o, F);
    r.current && (g.current = Y, y.current = B, b.current = G, x.current = ye);
    var ue;
    h ? F > 0 ? ue = {
      transition: W,
      strokeDasharray: R
    } : ue = {
      strokeDasharray: M
    } : ue = {
      strokeDasharray: R
    };
    var Ye = Fe(t), {
      radius: We
    } = Ye, Tt = Xv(Ye, lE);
    return /* @__PURE__ */ v.createElement("path", Ca({}, Tt, {
      radius: typeof c == "number" ? c : void 0,
      className: P,
      d: Zv(G, ye, Y, B, c),
      ref: r,
      style: Yv(Yv({}, ue), t.style)
    }));
  });
};
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qv(Object(r), !0).forEach(function(n) {
      vE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vE(e, t, r) {
  return (t = pE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pE(e) {
  var t = hE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ka = Math.PI / 180, mE = (e) => e * 180 / Math.PI, ge = (e, t, r, n) => ({
  x: e + Math.cos(-ka * n) * r,
  y: t + Math.sin(-ka * n) * r
}), Pg = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, yE = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, gE = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = yE({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var u = (r - i) / o, l = Math.acos(u);
  return n > a && (l = 2 * Math.PI - l), {
    radius: o,
    angle: mE(l),
    angleInRadian: l
  };
}, bE = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, xE = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, wE = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: a
  } = gE({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: u
  } = t;
  if (i < o || i > u || i === 0)
    return null;
  var {
    startAngle: l,
    endAngle: c
  } = bE(t), f = a, s;
  if (l <= c) {
    for (; f > c; )
      f -= 360;
    for (; f < l; )
      f += 360;
    s = f >= l && f <= c;
  } else {
    for (; f > l; )
      f -= 360;
    for (; f < c; )
      f += 360;
    s = f >= c && f <= l;
  }
  return s ? ep(ep({}, t), {}, {
    radius: i,
    angle: xE(f, t)
  }) : null;
};
function Og(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = ge(t, r, n, i), u = ge(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
var tp, rp, np, ip, ap, op, up;
function lc() {
  return lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lc.apply(null, arguments);
}
function xr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var PE = (e, t) => {
  var r = _e(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Ki = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: u,
    cornerIsExternal: l
  } = e, c = u * (o ? 1 : -1) + n, f = Math.asin(u / c) / ka, s = l ? i : i + a * f, d = ge(t, r, c, s), p = ge(t, r, n, s), h = l ? i - a * f : i, m = ge(t, r, c * Math.cos(f * ka), h);
  return {
    center: d,
    circleTangency: p,
    lineTangency: m,
    theta: f
  };
}, Ag = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, u = PE(a, o), l = a + u, c = ge(t, r, i, a), f = ge(t, r, i, l), s = ve(tp || (tp = xr(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), c.x, c.y, i, i, +(Math.abs(u) > 180), +(a > l), f.x, f.y);
  if (n > 0) {
    var d = ge(t, r, n, a), p = ge(t, r, n, l);
    s += ve(rp || (rp = xr(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), p.x, p.y, n, n, +(Math.abs(u) > 180), +(a <= l), d.x, d.y);
  } else
    s += ve(np || (np = xr(["L ", ",", " Z"])), t, r);
  return s;
}, OE = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: u,
    startAngle: l,
    endAngle: c
  } = e, f = _e(c - l), {
    circleTangency: s,
    lineTangency: d,
    theta: p
  } = Ki({
    cx: t,
    cy: r,
    radius: i,
    angle: l,
    sign: f,
    cornerRadius: a,
    cornerIsExternal: u
  }), {
    circleTangency: h,
    lineTangency: m,
    theta: g
  } = Ki({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -f,
    cornerRadius: a,
    cornerIsExternal: u
  }), y = u ? Math.abs(l - c) : Math.abs(l - c) - p - g;
  if (y < 0)
    return o ? ve(ip || (ip = xr(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : Ag({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: l,
      endAngle: c
    });
  var b = ve(ap || (ap = xr(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(f < 0), s.x, s.y, i, i, +(y > 180), +(f < 0), h.x, h.y, a, a, +(f < 0), m.x, m.y);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: w,
      theta: O
    } = Ki({
      cx: t,
      cy: r,
      radius: n,
      angle: l,
      sign: f,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), {
      circleTangency: P,
      lineTangency: S,
      theta: E
    } = Ki({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -f,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), I = u ? Math.abs(l - c) : Math.abs(l - c) - O - E;
    if (I < 0 && a === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += ve(op || (op = xr(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), S.x, S.y, a, a, +(f < 0), P.x, P.y, n, n, +(I > 180), +(f > 0), x.x, x.y, a, a, +(f < 0), w.x, w.y);
  } else
    b += ve(up || (up = xr(["L", ",", "Z"])), t, r);
  return b;
}, AE = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Sg = (e) => {
  var t = he(e, AE), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: u,
    cornerIsExternal: l,
    startAngle: c,
    endAngle: f,
    className: s
  } = t;
  if (a < i || c === f)
    return null;
  var d = K("recharts-sector", s), p = a - i, h = Ne(o, p, 0, !0), m;
  return h > 0 && Math.abs(c - f) < 360 ? m = OE({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(h, p / 2),
    forceCornerRadius: u,
    cornerIsExternal: l,
    startAngle: c,
    endAngle: f
  }) : m = Ag({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: c,
    endAngle: f
  }), /* @__PURE__ */ v.createElement("path", lc({}, Fe(t), {
    className: d,
    d: m
  }));
};
function SE(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (ry(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        angle: u
      } = t, l = ge(n, i, a, u), c = ge(n, i, o, u);
      return [{
        x: l.x,
        y: l.y
      }, {
        x: c.x,
        y: c.y
      }];
    }
    return Og(t);
  }
}
var fl = {}, dl = {}, vl = {}, lp;
function EE() {
  return lp || (lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hy();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(vl)), vl;
}
var cp;
function _E() {
  return cp || (cp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ EE();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(dl)), dl;
}
var sp;
function IE() {
  return sp || (sp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ my(), r = /* @__PURE__ */ _E();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), l = new Array(u);
      for (let c = 0; c < u; c++)
        l[c] = i, i += o;
      return l;
    }
    e.range = n;
  })(fl)), fl;
}
var pl, fp;
function jE() {
  return fp || (fp = 1, pl = IE().range), pl;
}
var CE = /* @__PURE__ */ jE();
const Eg = /* @__PURE__ */ pn(CE);
var mt = (e) => e.chartData, xi = A([mt], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), gn = (e, t, r, n) => n ? xi(e) : mt(e), kE = (e, t, r) => r ? xi(e) : mt(e), TE = A([gn], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
}), ME = A([xi], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
}), DE = A([mt], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
function Ot(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (H(t) && H(r))
      return !0;
  }
  return !1;
}
function dp(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function _g(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (H(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (H(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (Ot(o))
      return o;
  }
}
function NE(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (Ot(n))
          return dp(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, u;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (D(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t == null ? void 0 : t[0]));
        } catch {
        }
      else if (typeof i == "string" && tv.test(i)) {
        var l = tv.exec(i);
        if (l == null || l[1] == null || t == null)
          o = void 0;
        else {
          var c = +l[1];
          o = t[0] - c;
        }
      } else
        o = t == null ? void 0 : t[0];
      if (a === "auto")
        t != null && (u = Math.max(...t));
      else if (D(a))
        u = a;
      else if (typeof a == "function")
        try {
          t != null && (u = a(t == null ? void 0 : t[1]));
        } catch {
        }
      else if (typeof a == "string" && rv.test(a)) {
        var f = rv.exec(a);
        if (f == null || f[1] == null || t == null)
          u = void 0;
        else {
          var s = +f[1];
          u = t[1] + s;
        }
      } else
        u = t == null ? void 0 : t[1];
      var d = [o, u];
      if (Ot(d))
        return t == null ? d : dp(d, t, r);
    }
  }
}
var bn = 1e9, $E = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, as, ce = !0, ct = "[DecimalError] ", Sr = ct + "Invalid argument: ", is = ct + "Exponent out of range: ", xn = Math.floor, br = Math.pow, LE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Je, Ee = 1e7, oe = 7, Ig = 9007199254740991, Ta = xn(Ig / oe), $ = {};
$.absoluteValue = $.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
$.comparedTo = $.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
$.decimalPlaces = $.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * oe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
$.dividedBy = $.div = function(e) {
  return Lt(this, new this.constructor(e));
};
$.dividedToIntegerBy = $.idiv = function(e) {
  var t = this, r = t.constructor;
  return re(Lt(t, new r(e), 0, 1), r.precision);
};
$.equals = $.eq = function(e) {
  return !this.cmp(e);
};
$.exponent = function() {
  return be(this);
};
$.greaterThan = $.gt = function(e) {
  return this.cmp(e) > 0;
};
$.greaterThanOrEqualTo = $.gte = function(e) {
  return this.cmp(e) >= 0;
};
$.isInteger = $.isint = function() {
  return this.e > this.d.length - 2;
};
$.isNegative = $.isneg = function() {
  return this.s < 0;
};
$.isPositive = $.ispos = function() {
  return this.s > 0;
};
$.isZero = function() {
  return this.s === 0;
};
$.lessThan = $.lt = function(e) {
  return this.cmp(e) < 0;
};
$.lessThanOrEqualTo = $.lte = function(e) {
  return this.cmp(e) < 1;
};
$.logarithm = $.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Je)) throw Error(ct + "NaN");
  if (r.s < 1) throw Error(ct + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Je) ? new n(0) : (ce = !1, t = Lt(ni(r, a), ni(e, a), a), ce = !0, re(t, i));
};
$.minus = $.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? kg(t, e) : jg(t, (e.s = -e.s, e));
};
$.modulo = $.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ct + "NaN");
  return r.s ? (ce = !1, t = Lt(r, e, 0, 1).times(e), ce = !0, r.minus(t)) : re(new n(r), i);
};
$.naturalExponential = $.exp = function() {
  return Cg(this);
};
$.naturalLogarithm = $.ln = function() {
  return ni(this);
};
$.negated = $.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
$.plus = $.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? jg(t, e) : kg(t, (e.s = -e.s, e));
};
$.precision = $.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Sr + e);
  if (t = be(i) + 1, n = i.d.length - 1, r = n * oe + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
$.squareRoot = $.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(ct + "NaN");
  }
  for (e = be(u), ce = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Pt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = xn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Lt(u, a, o + 2)).times(0.5), Pt(a.d).slice(0, o) === (t = Pt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (re(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return ce = !0, re(n, r);
};
$.times = $.mul = function(e) {
  var t, r, n, i, a, o, u, l, c, f = this, s = f.constructor, d = f.d, p = (e = new s(e)).d;
  if (!f.s || !e.s) return new s(0);
  for (e.s *= f.s, r = f.e + e.e, l = d.length, c = p.length, l < c && (a = d, d = p, p = a, o = l, l = c, c = o), a = [], o = l + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      u = a[i] + p[n] * d[i - n - 1] + t, a[i--] = u % Ee | 0, t = u / Ee | 0;
    a[i] = (a[i] + t) % Ee | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ce ? re(e, s.precision) : e;
};
$.toDecimalPlaces = $.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (It(e, 0, bn), t === void 0 ? t = n.rounding : It(t, 0, 8), re(r, e + be(r) + 1, t));
};
$.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Mr(n, !0) : (It(e, 0, bn), t === void 0 ? t = i.rounding : It(t, 0, 8), n = re(new i(n), e + 1, t), r = Mr(n, !0, e + 1)), r;
};
$.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Mr(i) : (It(e, 0, bn), t === void 0 ? t = a.rounding : It(t, 0, 8), n = re(new a(i), e + be(i) + 1, t), r = Mr(n.abs(), !1, e + be(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
$.toInteger = $.toint = function() {
  var e = this, t = e.constructor;
  return re(new t(e), be(e) + 1, t.rounding);
};
$.toNumber = function() {
  return +this;
};
$.toPower = $.pow = function(e) {
  var t, r, n, i, a, o, u = this, l = u.constructor, c = 12, f = +(e = new l(e));
  if (!e.s) return new l(Je);
  if (u = new l(u), !u.s) {
    if (e.s < 1) throw Error(ct + "Infinity");
    return u;
  }
  if (u.eq(Je)) return u;
  if (n = l.precision, e.eq(Je)) return re(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Ig) {
      for (i = new l(Je), t = Math.ceil(n / oe + 4), ce = !1; r % 2 && (i = i.times(u), pp(i.d, t)), r = xn(r / 2), r !== 0; )
        u = u.times(u), pp(u.d, t);
      return ce = !0, e.s < 0 ? new l(Je).div(i) : re(i, n);
    }
  } else if (a < 0) throw Error(ct + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, ce = !1, i = e.times(ni(u, n + c)), ce = !0, i = Cg(i), i.s = a, i;
};
$.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = be(i), n = Mr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (It(e, 1, bn), t === void 0 ? t = a.rounding : It(t, 0, 8), i = re(new a(i), e, t), r = be(i), n = Mr(i, e <= r || r <= a.toExpNeg, e)), n;
};
$.toSignificantDigits = $.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (It(e, 1, bn), t === void 0 ? t = n.rounding : It(t, 0, 8)), re(new n(r), e, t);
};
$.toString = $.valueOf = $.val = $.toJSON = $[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = be(e), r = e.constructor;
  return Mr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function jg(e, t) {
  var r, n, i, a, o, u, l, c, f = e.constructor, s = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), ce ? re(t, s) : t;
  if (l = e.d, c = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, u = c.length) : (n = c, i = o, u = l.length), o = Math.ceil(s / oe), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = l.length, a = c.length, u - a < 0 && (a = u, n = c, c = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + c[a] + r) / Ee | 0, l[a] %= Ee;
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return t.d = l, t.e = i, ce ? re(t, s) : t;
}
function It(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Sr + e);
}
function Pt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = oe - n.length, r && (a += Jt(r)), a += n;
    o = e[t], n = o + "", r = oe - n.length, r && (a += Jt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Lt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Ee | 0, o = a / Ee | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, l;
    if (a != o)
      l = a > o ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ee + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, l, c, f, s, d, p, h, m, g, y, b, x, w, O, P, S, E, I = n.constructor, j = n.s == i.s ? 1 : -1, C = n.d, _ = i.d;
    if (!n.s) return new I(n);
    if (!i.s) throw Error(ct + "Division by zero");
    for (l = n.e - i.e, S = _.length, O = C.length, p = new I(j), h = p.d = [], c = 0; _[c] == (C[c] || 0); ) ++c;
    if (_[c] > (C[c] || 0) && --l, a == null ? b = a = I.precision : o ? b = a + (be(n) - be(i)) + 1 : b = a, b < 0) return new I(0);
    if (b = b / oe + 2 | 0, c = 0, S == 1)
      for (f = 0, _ = _[0], b++; (c < O || f) && b--; c++)
        x = f * Ee + (C[c] || 0), h[c] = x / _ | 0, f = x % _ | 0;
    else {
      for (f = Ee / (_[0] + 1) | 0, f > 1 && (_ = e(_, f), C = e(C, f), S = _.length, O = C.length), w = S, m = C.slice(0, S), g = m.length; g < S; ) m[g++] = 0;
      E = _.slice(), E.unshift(0), P = _[0], _[1] >= Ee / 2 && ++P;
      do
        f = 0, u = t(_, m, S, g), u < 0 ? (y = m[0], S != g && (y = y * Ee + (m[1] || 0)), f = y / P | 0, f > 1 ? (f >= Ee && (f = Ee - 1), s = e(_, f), d = s.length, g = m.length, u = t(s, m, d, g), u == 1 && (f--, r(s, S < d ? E : _, d))) : (f == 0 && (u = f = 1), s = _.slice()), d = s.length, d < g && s.unshift(0), r(m, s, g), u == -1 && (g = m.length, u = t(_, m, S, g), u < 1 && (f++, r(m, S < g ? E : _, g))), g = m.length) : u === 0 && (f++, m = [0]), h[c++] = f, u && m[0] ? m[g++] = C[w] || 0 : (m = [C[w]], g = 1);
      while ((w++ < O || m[0] !== void 0) && b--);
    }
    return h[0] || h.shift(), p.e = l, re(p, o ? a + be(p) + 1 : a);
  };
})();
function Cg(e, t) {
  var r, n, i, a, o, u, l = 0, c = 0, f = e.constructor, s = f.precision;
  if (be(e) > 16) throw Error(is + be(e));
  if (!e.s) return new f(Je);
  for (ce = !1, u = s, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(br(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(Je), f.precision = u; ; ) {
    if (i = re(i.times(e), u), r = r.times(++l), o = a.plus(Lt(i, r, u)), Pt(o.d).slice(0, u) === Pt(a.d).slice(0, u)) {
      for (; c--; ) a = re(a.times(a), u);
      return f.precision = s, t == null ? (ce = !0, re(a, s)) : a;
    }
    a = o;
  }
}
function be(e) {
  for (var t = e.e * oe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function hl(e, t, r) {
  if (t > e.LN10.sd())
    throw ce = !0, r && (e.precision = r), Error(ct + "LN10 precision limit exceeded");
  return re(new e(e.LN10), t);
}
function Jt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ni(e, t) {
  var r, n, i, a, o, u, l, c, f, s = 1, d = 10, p = e, h = p.d, m = p.constructor, g = m.precision;
  if (p.s < 1) throw Error(ct + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Je)) return new m(0);
  if (t == null ? (ce = !1, c = g) : c = t, p.eq(10))
    return t == null && (ce = !0), hl(m, c);
  if (c += d, m.precision = c, r = Pt(h), n = r.charAt(0), a = be(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Pt(p.d), n = r.charAt(0), s++;
    a = be(p), n > 1 ? (p = new m("0." + r), a++) : p = new m(n + "." + r.slice(1));
  } else
    return l = hl(m, c + 2, g).times(a + ""), p = ni(new m(n + "." + r.slice(1)), c - d).plus(l), m.precision = g, t == null ? (ce = !0, re(p, g)) : p;
  for (u = o = p = Lt(p.minus(Je), p.plus(Je), c), f = re(p.times(p), c), i = 3; ; ) {
    if (o = re(o.times(f), c), l = u.plus(Lt(o, new m(i), c)), Pt(l.d).slice(0, c) === Pt(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(hl(m, c + 2, g).times(a + ""))), u = Lt(u, new m(s), c), m.precision = g, t == null ? (ce = !0, re(u, g)) : u;
    u = l, i += 2;
  }
}
function vp(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = xn(r / oe), e.d = [], n = (r + 1) % oe, r < 0 && (n += oe), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= oe; n < i; ) e.d.push(+t.slice(n, n += oe));
      t = t.slice(n), n = oe - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ce && (e.e > Ta || e.e < -Ta)) throw Error(is + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function re(e, t, r) {
  var n, i, a, o, u, l, c, f, s = e.d;
  for (o = 1, a = s[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += oe, i = t, c = s[f = 0];
  else {
    if (f = Math.ceil((n + 1) / oe), a = s.length, f >= a) return e;
    for (c = a = s[f], o = 1; a >= 10; a /= 10) o++;
    n %= oe, i = n - oe + o;
  }
  if (r !== void 0 && (a = br(10, o - i - 1), u = c / a % 10 | 0, l = t < 0 || s[f + 1] !== void 0 || c % a, l = r < 4 ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / br(10, o - i) : 0 : s[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !s[0])
    return l ? (a = be(e), s.length = 1, t = t - a - 1, s[0] = br(10, (oe - t % oe) % oe), e.e = xn(-t / oe) || 0) : (s.length = 1, s[0] = e.e = e.s = 0), e;
  if (n == 0 ? (s.length = f, a = 1, f--) : (s.length = f + 1, a = br(10, oe - n), s[f] = i > 0 ? (c / br(10, o - i) % br(10, i) | 0) * a : 0), l)
    for (; ; )
      if (f == 0) {
        (s[0] += a) == Ee && (s[0] = 1, ++e.e);
        break;
      } else {
        if (s[f] += a, s[f] != Ee) break;
        s[f--] = 0, a = 1;
      }
  for (n = s.length; s[--n] === 0; ) s.pop();
  if (ce && (e.e > Ta || e.e < -Ta))
    throw Error(is + be(e));
  return e;
}
function kg(e, t) {
  var r, n, i, a, o, u, l, c, f, s, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), ce ? re(t, p) : t;
  if (l = e.d, s = t.d, n = t.e, c = e.e, l = l.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = l, o = -o, u = s.length) : (r = s, n = c, u = l.length), i = Math.max(Math.ceil(p / oe), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = s.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (l[i] != s[i]) {
        f = l[i] < s[i];
        break;
      }
    o = 0;
  }
  for (f && (r = l, l = s, s = r, t.s = -t.s), u = l.length, i = s.length - u; i > 0; --i) l[u++] = 0;
  for (i = s.length; i > o; ) {
    if (l[--i] < s[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Ee - 1;
      --l[a], l[i] += Ee;
    }
    l[i] -= s[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, ce ? re(t, p) : t) : new d(0);
}
function Mr(e, t, r) {
  var n, i = be(e), a = Pt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Jt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Jt(-i - 1) + a, r && (n = r - o) > 0 && (a += Jt(n))) : i >= o ? (a += Jt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Jt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Jt(n))), e.s < 0 ? "-" + a : a;
}
function pp(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Tg(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Sr + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return vp(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Sr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, LE.test(a)) vp(o, a);
    else throw Error(Sr + a);
  }
  if (i.prototype = $, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Tg, i.config = i.set = RE, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function RE(e) {
  if (!e || typeof e != "object")
    throw Error(ct + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    bn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (xn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Sr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Sr + r + ": " + n);
  return this;
}
var as = Tg($E);
Je = new as(1);
const U = as;
function Mg(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new U(e).abs().log(10).toNumber()) + 1, t;
}
function Dg(e, t, r) {
  for (var n = new U(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Ng = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, os = (e, t, r) => {
  if (e.lte(0))
    return new U(0);
  var n = Mg(e.toNumber()), i = new U(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new U(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = u.mul(i);
  return t ? new U(l.toNumber()) : new U(Math.ceil(l.toNumber()));
}, $g = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new U(0);
  var i = [1, 2, 2.5, 5], a = e.toNumber(), o = Math.floor(new U(a).abs().log(10).toNumber()), u = new U(10).pow(o), l = e.div(u).toNumber(), c = i.findIndex((p) => p >= l - 1e-10);
  if (c === -1 && (u = u.mul(10), c = 0), c += r, c >= i.length) {
    var f = Math.floor(c / i.length);
    c %= i.length, u = u.mul(new U(10).pow(f));
  }
  var s = (n = i[c]) !== null && n !== void 0 ? n : 1, d = new U(s).mul(u);
  return t ? d : new U(Math.ceil(d.toNumber()));
}, zE = (e, t, r) => {
  var n = new U(1), i = new U(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new U(10).pow(Mg(e) - 1), i = new U(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new U(Math.floor(e)));
  } else e === 0 ? i = new U(Math.floor((t - 1) / 2)) : r || (i = new U(Math.floor(e)));
  for (var o = Math.floor((t - 1) / 2), u = [], l = 0; l < t; l++)
    u.push(i.add(new U(l - o).mul(n)).toNumber());
  return u;
}, Lg = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : os;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new U(0),
      tickMin: new U(0),
      tickMax: new U(0)
    };
  var u = o(new U(r).sub(t).div(n - 1), i, a), l;
  t <= 0 && r >= 0 ? l = new U(0) : (l = new U(t).add(r).div(2), l = l.sub(new U(l).mod(u)));
  var c = Math.ceil(l.sub(t).div(u).toNumber()), f = Math.ceil(new U(r).sub(l).div(u).toNumber()), s = c + f + 1;
  return s > n ? Lg(t, r, n, i, a + 1, o) : (s < n && (f = r > 0 ? f + (n - s) : f, c = r > 0 ? c : c + (n - s)), {
    step: u,
    tickMin: l.sub(new U(c).mul(u)),
    tickMax: l.add(new U(f).mul(u))
  });
}, hp = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", u = Math.max(i, 2), [l, c] = Ng([r, n]);
  if (l === -1 / 0 || c === 1 / 0) {
    var f = c === 1 / 0 ? [l, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), c];
    return r > n ? f.reverse() : f;
  }
  if (l === c)
    return zE(l, i, a);
  var s = o === "snap125" ? $g : os, {
    step: d,
    tickMin: p,
    tickMax: h
  } = Lg(l, c, u, a, 0, s), m = Dg(p, h.add(new U(0.1).mul(d)), d);
  return r > n ? m.reverse() : m;
}, mp = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [u, l] = Ng([n, i]);
  if (u === -1 / 0 || l === 1 / 0)
    return [n, i];
  if (u === l)
    return [u];
  var c = o === "snap125" ? $g : os, f = Math.max(r, 2), s = c(new U(l).sub(u).div(f - 1), a, 0), d = [...Dg(new U(u), new U(l), s), l];
  return a === !1 && (d = d.map((p) => Math.round(p))), n > i ? d.reverse() : d;
}, Rg = (e) => e.rootProps.maxBarSize, BE = (e) => e.rootProps.barGap, zg = (e) => e.rootProps.barCategoryGap, FE = (e) => e.rootProps.barSize, wi = (e) => e.rootProps.stackOffset, Bg = (e) => e.rootProps.reverseStackOrder, us = (e) => e.options.chartName, ls = (e) => e.rootProps.syncId, Fg = (e) => e.rootProps.syncMethod, cs = (e) => e.options.eventEmitter, pe = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, dr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, gt = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !0,
  includeHidden: !1,
  radiusAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "auto"
}, So = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function Eo(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return qt(e, t) ? "category" : "number";
}
function yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(r), !0).forEach(function(n) {
      KE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KE(e, t, r) {
  return (t = WE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WE(e) {
  var t = qE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gp = {
  allowDataOverflow: dr.allowDataOverflow,
  allowDecimals: dr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: dr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: dr.reversed,
  scale: dr.scale,
  tick: dr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: dr.type,
  unit: void 0,
  niceTicks: "auto"
}, bp = {
  allowDataOverflow: gt.allowDataOverflow,
  allowDecimals: gt.allowDecimals,
  allowDuplicatedCategory: gt.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: gt.radiusAxisId,
  includeHidden: gt.includeHidden,
  name: void 0,
  reversed: gt.reversed,
  scale: gt.scale,
  tick: gt.tick,
  tickCount: gt.tickCount,
  ticks: void 0,
  type: gt.type,
  unit: void 0,
  niceTicks: "auto"
}, UE = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, ss = A([UE, ig], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = Eo(t, "angleAxis", gp.type)) !== null && r !== void 0 ? r : "category";
  return Ma(Ma({}, gp), {}, {
    type: n
  });
}), HE = (e, t) => e.polarAxis.radiusAxis[t], fs = A([HE, ig], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = Eo(t, "radiusAxis", bp.type)) !== null && r !== void 0 ? r : "category";
  return Ma(Ma({}, bp), {}, {
    type: n
  });
}), _o = (e) => e.polarOptions, ds = A([Ut, Ht, Oe], Pg), Kg = A([_o, ds], (e, t) => {
  if (e != null)
    return Ne(e.innerRadius, t, 0);
}), Wg = A([_o, ds], (e, t) => {
  if (e != null)
    return Ne(e.outerRadius, t, t * 0.8);
}), GE = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, qg = A([_o], GE);
A([ss, qg], So);
var Ug = A([ds, Kg, Wg], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
A([fs, Ug], So);
var Hg = A([J, _o, Kg, Wg, Ut, Ht], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: u,
      startAngle: l,
      endAngle: c
    } = t;
    return {
      cx: Ne(o, i, i / 2),
      cy: Ne(u, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: l,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), fe = (e, t) => t, Pi = (e, t, r) => r;
function vs(e) {
  return e == null ? void 0 : e.id;
}
function Gg(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((u) => {
    var l, c = (l = u.data) !== null && l !== void 0 ? l : n;
    if (!(c == null || c.length === 0)) {
      var f = vs(u);
      c.forEach((s, d) => {
        var p = a == null || i ? d : String(V(s, a, null)), h = V(s, u.dataKey, 0), m;
        o.has(p) ? m = o.get(p) : m = {}, Object.assign(m, {
          [f]: h
        }), o.set(p, m);
      });
    }
  }), Array.from(o.values());
}
function Io(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var jo = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Co(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function VE(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var je = (e) => {
  var t = J(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, wn = (e) => e.tooltip.settings.axisId;
function ps(e) {
  if (e != null) {
    var t = e.ticks, r = e.bandwidth, n = e.range(), i = [Math.min(...n), Math.max(...n)];
    return {
      domain: () => e.domain(),
      range: (function(a) {
        function o() {
          return a.apply(this, arguments);
        }
        return o.toString = function() {
          return a.toString();
        }, o;
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(a) {
        var o = i[0], u = i[1];
        return o <= u ? a >= o && a <= u : a >= u && a <= o;
      },
      bandwidth: r ? () => r.call(e) : void 0,
      ticks: t ? (a) => t.call(e, a) : void 0,
      map: (a, o) => {
        var u = e(a);
        if (u != null) {
          if (e.bandwidth && o !== null && o !== void 0 && o.position) {
            var l = e.bandwidth();
            switch (o.position) {
              case "middle":
                u += l / 2;
                break;
              case "end":
                u += l;
                break;
            }
          }
          return u;
        }
      }
    };
  }
}
var Vg = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!Ot(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var a = t[i];
            H(a) && ((r === void 0 || a < r) && (r = a), (n === void 0 || a > n) && (n = a));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function rr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function YE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function hs(e) {
  let t, r, n;
  e.length !== 2 ? (t = rr, r = (u, l) => rr(e(u), l), n = (u, l) => e(u) - l) : (t = e === rr || e === YE ? e : XE, r = e, n = e);
  function i(u, l, c = 0, f = u.length) {
    if (c < f) {
      if (t(l, l) !== 0) return f;
      do {
        const s = c + f >>> 1;
        r(u[s], l) < 0 ? c = s + 1 : f = s;
      } while (c < f);
    }
    return c;
  }
  function a(u, l, c = 0, f = u.length) {
    if (c < f) {
      if (t(l, l) !== 0) return f;
      do {
        const s = c + f >>> 1;
        r(u[s], l) <= 0 ? c = s + 1 : f = s;
      } while (c < f);
    }
    return c;
  }
  function o(u, l, c = 0, f = u.length) {
    const s = i(u, l, c, f - 1);
    return s > c && n(u[s - 1], l) > -n(u[s], l) ? s - 1 : s;
  }
  return { left: i, center: o, right: a };
}
function XE() {
  return 0;
}
function Yg(e) {
  return e === null ? NaN : +e;
}
function* ZE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const JE = hs(rr), Oi = JE.right;
hs(Yg).center;
class xp extends Map {
  constructor(t, r = t_) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(wp(this, t));
  }
  has(t) {
    return super.has(wp(this, t));
  }
  set(t, r) {
    return super.set(QE(this, t), r);
  }
  delete(t) {
    return super.delete(e_(this, t));
  }
}
function wp({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function QE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function e_({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function t_(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function r_(e = rr) {
  if (e === rr) return Xg;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Xg(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const n_ = Math.sqrt(50), i_ = Math.sqrt(10), a_ = Math.sqrt(2);
function Da(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= n_ ? 10 : a >= i_ ? 5 : a >= a_ ? 2 : 1;
  let u, l, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), l = Math.round(t * c), u / c < e && ++u, l / c > t && --l, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), l = Math.round(t / c), u * c < e && ++u, l * c > t && --l), l < u && 0.5 <= r && r < 2 ? Da(e, t, r * 2) : [u, l, c];
}
function cc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Da(t, e, r) : Da(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, l = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) l[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) l[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) l[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) l[c] = (i + c) * o;
  return l;
}
function sc(e, t, r) {
  return t = +t, e = +e, r = +r, Da(e, t, r)[2];
}
function fc(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? sc(t, e, r) : sc(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Pp(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Op(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Zg(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Xg : r_(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, c = t - r + 1, f = Math.log(l), s = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * s * (l - s) / l) * (c - l / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * s / l + d)), h = Math.min(n, Math.floor(t + (l - c) * s / l + d));
      Zg(e, t, p, h, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Nn(e, r, t), i(e[n], a) > 0 && Nn(e, r, n); o < u; ) {
      for (Nn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Nn(e, r, u) : (++u, Nn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Nn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function o_(e, t, r) {
  if (e = Float64Array.from(ZE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Op(e);
    if (t >= 1) return Pp(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Pp(Zg(e, a).subarray(0, a + 1)), u = Op(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function u_(e, t, r = Yg) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function l_(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function st(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const dc = Symbol("implicit");
function ms() {
  var e = new xp(), t = [], r = [], n = dc;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== dc) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new xp();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return ms(t, r).unknown(n);
  }, st.apply(i, arguments), i;
}
function ys() {
  var e = ms().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, l = 0, c = 0, f = 0.5;
  delete e.unknown;
  function s() {
    var d = t().length, p = i < n, h = p ? i : n, m = p ? n : i;
    a = (m - h) / Math.max(1, d - l + c * 2), u && (a = Math.floor(a)), h += (m - h - a * (d - l)) * f, o = a * (1 - l), u && (h = Math.round(h), o = Math.round(o));
    var g = l_(d).map(function(y) {
      return h + a * y;
    });
    return r(p ? g.reverse() : g);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), s()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, s()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, s();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, s()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (l = Math.min(1, c = +d), s()) : l;
  }, e.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), s()) : l;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, s()) : c;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), s()) : f;
  }, e.copy = function() {
    return ys(t(), [n, i]).round(u).paddingInner(l).paddingOuter(c).align(f);
  }, st.apply(s(), arguments);
}
function Jg(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Jg(t());
  }, e;
}
function c_() {
  return Jg(ys.apply(null, arguments).paddingInner(1));
}
function gs(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Qg(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ai() {
}
var ii = 0.7, Na = 1 / ii, rn = "\\s*([+-]?\\d+)\\s*", ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", At = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", s_ = /^#([0-9a-f]{3,8})$/, f_ = new RegExp(`^rgb\\(${rn},${rn},${rn}\\)$`), d_ = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), v_ = new RegExp(`^rgba\\(${rn},${rn},${rn},${ai}\\)$`), p_ = new RegExp(`^rgba\\(${At},${At},${At},${ai}\\)$`), h_ = new RegExp(`^hsl\\(${ai},${At},${At}\\)$`), m_ = new RegExp(`^hsla\\(${ai},${At},${At},${ai}\\)$`), Ap = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
gs(Ai, oi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Sp,
  // Deprecated! Use color.formatHex.
  formatHex: Sp,
  formatHex8: y_,
  formatHsl: g_,
  formatRgb: Ep,
  toString: Ep
});
function Sp() {
  return this.rgb().formatHex();
}
function y_() {
  return this.rgb().formatHex8();
}
function g_() {
  return eb(this).formatHsl();
}
function Ep() {
  return this.rgb().formatRgb();
}
function oi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = s_.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? _p(t) : r === 3 ? new Ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Wi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Wi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = f_.exec(e)) ? new Ge(t[1], t[2], t[3], 1) : (t = d_.exec(e)) ? new Ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = v_.exec(e)) ? Wi(t[1], t[2], t[3], t[4]) : (t = p_.exec(e)) ? Wi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = h_.exec(e)) ? Cp(t[1], t[2] / 100, t[3] / 100, 1) : (t = m_.exec(e)) ? Cp(t[1], t[2] / 100, t[3] / 100, t[4]) : Ap.hasOwnProperty(e) ? _p(Ap[e]) : e === "transparent" ? new Ge(NaN, NaN, NaN, 0) : null;
}
function _p(e) {
  return new Ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Wi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ge(e, t, r, n);
}
function b_(e) {
  return e instanceof Ai || (e = oi(e)), e ? (e = e.rgb(), new Ge(e.r, e.g, e.b, e.opacity)) : new Ge();
}
function vc(e, t, r, n) {
  return arguments.length === 1 ? b_(e) : new Ge(e, t, r, n ?? 1);
}
function Ge(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
gs(Ge, vc, Qg(Ai, {
  brighter(e) {
    return e = e == null ? Na : Math.pow(Na, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ge(Er(this.r), Er(this.g), Er(this.b), $a(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ip,
  // Deprecated! Use color.formatHex.
  formatHex: Ip,
  formatHex8: x_,
  formatRgb: jp,
  toString: jp
}));
function Ip() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}`;
}
function x_() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}${wr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jp() {
  const e = $a(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Er(this.r)}, ${Er(this.g)}, ${Er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $a(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function wr(e) {
  return e = Er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Cp(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new vt(e, t, r, n);
}
function eb(e) {
  if (e instanceof vt) return new vt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ai || (e = oi(e)), !e) return new vt();
  if (e instanceof vt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new vt(o, u, l, e.opacity);
}
function w_(e, t, r, n) {
  return arguments.length === 1 ? eb(e) : new vt(e, t, r, n ?? 1);
}
function vt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
gs(vt, w_, Qg(Ai, {
  brighter(e) {
    return e = e == null ? Na : Math.pow(Na, e), new vt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new vt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ge(
      ml(e >= 240 ? e - 240 : e + 120, i, n),
      ml(e, i, n),
      ml(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new vt(kp(this.h), qi(this.s), qi(this.l), $a(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $a(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${kp(this.h)}, ${qi(this.s) * 100}%, ${qi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function kp(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function qi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ml(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const bs = (e) => () => e;
function P_(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function O_(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function A_(e) {
  return (e = +e) == 1 ? tb : function(t, r) {
    return r - t ? O_(t, r, e) : bs(isNaN(t) ? r : t);
  };
}
function tb(e, t) {
  var r = t - e;
  return r ? P_(e, r) : bs(isNaN(e) ? t : e);
}
const Tp = (function e(t) {
  var r = A_(t);
  function n(i, a) {
    var o = r((i = vc(i)).r, (a = vc(a)).r), u = r(i.g, a.g), l = r(i.b, a.b), c = tb(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = u(f), i.b = l(f), i.opacity = c(f), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function S_(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function E_(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function __(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Pn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function I_(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function La(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function j_(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Pn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var pc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yl = new RegExp(pc.source, "g");
function C_(e) {
  return function() {
    return e;
  };
}
function k_(e) {
  return function(t) {
    return e(t) + "";
  };
}
function T_(e, t) {
  var r = pc.lastIndex = yl.lastIndex = 0, n, i, a, o = -1, u = [], l = [];
  for (e = e + "", t = t + ""; (n = pc.exec(e)) && (i = yl.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: La(n, i) })), r = yl.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? k_(l[0].x) : C_(t) : (t = l.length, function(c) {
    for (var f = 0, s; f < t; ++f) u[(s = l[f]).i] = s.x(c);
    return u.join("");
  });
}
function Pn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? bs(t) : (r === "number" ? La : r === "string" ? (n = oi(t)) ? (t = n, Tp) : T_ : t instanceof oi ? Tp : t instanceof Date ? I_ : E_(t) ? S_ : Array.isArray(t) ? __ : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? j_ : La)(e, t);
}
function xs(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function M_(e, t) {
  t === void 0 && (t = e, e = Pn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function D_(e) {
  return function() {
    return e;
  };
}
function Ra(e) {
  return +e;
}
var Mp = [0, 1];
function ze(e) {
  return e;
}
function hc(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : D_(isNaN(t) ? NaN : 0.5);
}
function N_(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function $_(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = hc(i, n), a = r(o, a)) : (n = hc(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function L_(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = hc(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var l = Oi(e, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function Si(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ko() {
  var e = Mp, t = Mp, r = Pn, n, i, a, o = ze, u, l, c;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== ze && (o = N_(e[0], e[d - 1])), u = d > 2 ? L_ : $_, l = c = null, s;
  }
  function s(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = u(e.map(n), t, r)))(n(o(d)));
  }
  return s.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), La)))(d)));
  }, s.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Ra), f()) : e.slice();
  }, s.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, s.rangeRound = function(d) {
    return t = Array.from(d), r = xs, f();
  }, s.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : ze, f()) : o !== ze;
  }, s.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, s.unknown = function(d) {
    return arguments.length ? (a = d, s) : a;
  }, function(d, p) {
    return n = d, i = p, f();
  };
}
function ws() {
  return ko()(ze, ze);
}
function R_(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function za(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function cn(e) {
  return e = za(Math.abs(e)), e ? e[1] : NaN;
}
function z_(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function B_(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var F_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ui(e) {
  if (!(t = F_.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Ps({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
ui.prototype = Ps.prototype;
function Ps(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ps.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function K_(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Ba;
function W_(e, t) {
  var r = za(e, t);
  if (!r) return Ba = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Ba = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + za(e, Math.max(0, t + a - 1))[0];
}
function Dp(e, t) {
  var r = za(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Np = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: R_,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Dp(e * 100, t),
  r: Dp,
  s: W_,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function $p(e) {
  return e;
}
var Lp = Array.prototype.map, Rp = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function q_(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? $p : z_(Lp.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? $p : B_(Lp.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(s, d) {
    s = ui(s);
    var p = s.fill, h = s.align, m = s.sign, g = s.symbol, y = s.zero, b = s.width, x = s.comma, w = s.precision, O = s.trim, P = s.type;
    P === "n" ? (x = !0, P = "g") : Np[P] || (w === void 0 && (w = 12), O = !0, P = "g"), (y || p === "0" && h === "=") && (y = !0, p = "0", h = "=");
    var S = (d && d.prefix !== void 0 ? d.prefix : "") + (g === "$" ? r : g === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : ""), E = (g === "$" ? n : /[%p]/.test(P) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), I = Np[P], j = /[defgprs%]/.test(P);
    w = w === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function C(_) {
      var z = S, M = E, R, W, F;
      if (P === "c")
        M = I(_) + M, _ = "";
      else {
        _ = +_;
        var Y = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? l : I(Math.abs(_), w), O && (_ = K_(_)), Y && +_ == 0 && m !== "+" && (Y = !1), z = (Y ? m === "(" ? m : u : m === "-" || m === "(" ? "" : m) + z, M = (P === "s" && !isNaN(_) && Ba !== void 0 ? Rp[8 + Ba / 3] : "") + M + (Y && m === "(" ? ")" : ""), j) {
          for (R = -1, W = _.length; ++R < W; )
            if (F = _.charCodeAt(R), 48 > F || F > 57) {
              M = (F === 46 ? i + _.slice(R + 1) : _.slice(R)) + M, _ = _.slice(0, R);
              break;
            }
        }
      }
      x && !y && (_ = t(_, 1 / 0));
      var B = z.length + _.length + M.length, G = B < b ? new Array(b - B + 1).join(p) : "";
      switch (x && y && (_ = t(G + _, G.length ? b - M.length : 1 / 0), G = ""), h) {
        case "<":
          _ = z + _ + M + G;
          break;
        case "=":
          _ = z + G + _ + M;
          break;
        case "^":
          _ = G.slice(0, B = G.length >> 1) + z + _ + M + G.slice(B);
          break;
        default:
          _ = G + z + _ + M;
          break;
      }
      return a(_);
    }
    return C.toString = function() {
      return s + "";
    }, C;
  }
  function f(s, d) {
    var p = Math.max(-8, Math.min(8, Math.floor(cn(d) / 3))) * 3, h = Math.pow(10, -p), m = c((s = ui(s), s.type = "f", s), { suffix: Rp[8 + p / 3] });
    return function(g) {
      return m(h * g);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Ui, Os, rb;
U_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function U_(e) {
  return Ui = q_(e), Os = Ui.format, rb = Ui.formatPrefix, Ui;
}
function H_(e) {
  return Math.max(0, -cn(Math.abs(e)));
}
function G_(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(cn(t) / 3))) * 3 - cn(Math.abs(e)));
}
function V_(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, cn(t) - cn(e)) + 1;
}
function nb(e, t, r, n) {
  var i = fc(e, t, r), a;
  switch (n = ui(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = G_(i, o)) && (n.precision = a), rb(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = V_(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = H_(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Os(n);
}
function lr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return cc(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return nb(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], l, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); f-- > 0; ) {
      if (c = sc(o, u, r), c === l)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      l = c;
    }
    return e;
  }, e;
}
function ib() {
  var e = ws();
  return e.copy = function() {
    return Si(e, ib());
  }, st.apply(e, arguments), lr(e);
}
function ab(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ra), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return ab(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ra) : [0, 1], lr(r);
}
function ob(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function zp(e) {
  return Math.log(e);
}
function Bp(e) {
  return Math.exp(e);
}
function Y_(e) {
  return -Math.log(-e);
}
function X_(e) {
  return -Math.exp(-e);
}
function Z_(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function J_(e) {
  return e === 10 ? Z_ : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Q_(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Fp(e) {
  return (t, r) => -e(-t, r);
}
function As(e) {
  const t = e(zp, Bp), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = Q_(n), a = J_(n), r()[0] < 0 ? (i = Fp(i), a = Fp(a), e(Y_, X_)) : e(zp, Bp), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const l = r();
    let c = l[0], f = l[l.length - 1];
    const s = f < c;
    s && ([c, f] = [f, c]);
    let d = i(c), p = i(f), h, m;
    const g = u == null ? 10 : +u;
    let y = [];
    if (!(n % 1) && p - d < g) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (h = 1; h < n; ++h)
            if (m = d < 0 ? h / a(-d) : h * a(d), !(m < c)) {
              if (m > f) break;
              y.push(m);
            }
      } else for (; d <= p; ++d)
        for (h = n - 1; h >= 1; --h)
          if (m = d > 0 ? h / a(-d) : h * a(d), !(m < c)) {
            if (m > f) break;
            y.push(m);
          }
      y.length * 2 < g && (y = cc(c, f, g));
    } else
      y = cc(d, p, Math.min(p - d, g)).map(a);
    return s ? y.reverse() : y;
  }, t.tickFormat = (u, l) => {
    if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = ui(l)).precision == null && (l.trim = !0), l = Os(l)), u === 1 / 0) return l;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let s = f / a(Math.round(i(f)));
      return s * n < n - 0.5 && (s *= n), s <= c ? l(f) : "";
    };
  }, t.nice = () => r(ob(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function ub() {
  const e = As(ko()).domain([1, 10]);
  return e.copy = () => Si(e, ub()).base(e.base()), st.apply(e, arguments), e;
}
function Kp(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Wp(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Ss(e) {
  var t = 1, r = e(Kp(t), Wp(t));
  return r.constant = function(n) {
    return arguments.length ? e(Kp(t = +n), Wp(t)) : t;
  }, lr(r);
}
function lb() {
  var e = Ss(ko());
  return e.copy = function() {
    return Si(e, lb()).constant(e.constant());
  }, st.apply(e, arguments);
}
function qp(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function eI(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function tI(e) {
  return e < 0 ? -e * e : e * e;
}
function Es(e) {
  var t = e(ze, ze), r = 1;
  function n() {
    return r === 1 ? e(ze, ze) : r === 0.5 ? e(eI, tI) : e(qp(r), qp(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, lr(t);
}
function _s() {
  var e = Es(ko());
  return e.copy = function() {
    return Si(e, _s()).exponent(e.exponent());
  }, st.apply(e, arguments), e;
}
function rI() {
  return _s.apply(null, arguments).exponent(0.5);
}
function Up(e) {
  return Math.sign(e) * e * e;
}
function nI(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function cb() {
  var e = ws(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = nI(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Up(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Ra)).map(Up)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return cb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, st.apply(i, arguments), lr(i);
}
function sb() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = u_(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Oi(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(rr), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return sb().domain(e).range(t).unknown(n);
  }, st.apply(a, arguments);
}
function fb() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[Oi(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(l) {
    var c = i.indexOf(l);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return fb().domain([e, t]).range(i).unknown(a);
  }, st.apply(lr(o), arguments);
}
function db() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Oi(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return db().domain(e).range(t).unknown(r);
  }, st.apply(i, arguments);
}
const gl = /* @__PURE__ */ new Date(), bl = /* @__PURE__ */ new Date();
function Ae(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const l = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return l;
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return l;
  }, i.filter = (a) => Ae((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (gl.setTime(+a), bl.setTime(+o), e(gl), e(bl), Math.floor(r(gl, bl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Fa = Ae(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Fa.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ae((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Fa);
Fa.range;
const Nt = 1e3, lt = Nt * 60, $t = lt * 60, Bt = $t * 24, Is = Bt * 7, Hp = Bt * 30, xl = Bt * 365, Pr = Ae((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Nt);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCSeconds());
Pr.range;
const js = Ae((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt);
}, (e, t) => {
  e.setTime(+e + t * lt);
}, (e, t) => (t - e) / lt, (e) => e.getMinutes());
js.range;
const Cs = Ae((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * lt);
}, (e, t) => (t - e) / lt, (e) => e.getUTCMinutes());
Cs.range;
const ks = Ae((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt - e.getMinutes() * lt);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
ks.range;
const Ts = Ae((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
Ts.range;
const Ei = Ae(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * lt) / Bt,
  (e) => e.getDate() - 1
);
Ei.range;
const To = Ae((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Bt, (e) => e.getUTCDate() - 1);
To.range;
const vb = Ae((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Bt, (e) => Math.floor(e / Bt));
vb.range;
function Br(e) {
  return Ae((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * lt) / Is);
}
const Mo = Br(0), Ka = Br(1), iI = Br(2), aI = Br(3), sn = Br(4), oI = Br(5), uI = Br(6);
Mo.range;
Ka.range;
iI.range;
aI.range;
sn.range;
oI.range;
uI.range;
function Fr(e) {
  return Ae((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Is);
}
const Do = Fr(0), Wa = Fr(1), lI = Fr(2), cI = Fr(3), fn = Fr(4), sI = Fr(5), fI = Fr(6);
Do.range;
Wa.range;
lI.range;
cI.range;
fn.range;
sI.range;
fI.range;
const Ms = Ae((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ms.range;
const Ds = Ae((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ds.range;
const Ft = Ae((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ft.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ae((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ft.range;
const Kt = Ae((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ae((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Kt.range;
function pb(e, t, r, n, i, a) {
  const o = [
    [Pr, 1, Nt],
    [Pr, 5, 5 * Nt],
    [Pr, 15, 15 * Nt],
    [Pr, 30, 30 * Nt],
    [a, 1, lt],
    [a, 5, 5 * lt],
    [a, 15, 15 * lt],
    [a, 30, 30 * lt],
    [i, 1, $t],
    [i, 3, 3 * $t],
    [i, 6, 6 * $t],
    [i, 12, 12 * $t],
    [n, 1, Bt],
    [n, 2, 2 * Bt],
    [r, 1, Is],
    [t, 1, Hp],
    [t, 3, 3 * Hp],
    [e, 1, xl]
  ];
  function u(c, f, s) {
    const d = f < c;
    d && ([c, f] = [f, c]);
    const p = s && typeof s.range == "function" ? s : l(c, f, s), h = p ? p.range(c, +f + 1) : [];
    return d ? h.reverse() : h;
  }
  function l(c, f, s) {
    const d = Math.abs(f - c) / s, p = hs(([, , g]) => g).right(o, d);
    if (p === o.length) return e.every(fc(c / xl, f / xl, s));
    if (p === 0) return Fa.every(Math.max(fc(c, f, s), 1));
    const [h, m] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return h.every(m);
  }
  return [u, l];
}
const [dI, vI] = pb(Kt, Ds, Do, vb, Ts, Cs), [pI, hI] = pb(Ft, Ms, Mo, Ei, ks, js);
function wl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Pl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function $n(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mI(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, l = e.shortMonths, c = Ln(i), f = Rn(i), s = Ln(a), d = Rn(a), p = Ln(o), h = Rn(o), m = Ln(u), g = Rn(u), y = Ln(l), b = Rn(l), x = {
    a: F,
    A: Y,
    b: B,
    B: G,
    c: null,
    d: Jp,
    e: Jp,
    f: zI,
    g: YI,
    G: ZI,
    H: $I,
    I: LI,
    j: RI,
    L: hb,
    m: BI,
    M: FI,
    p: ye,
    q: ue,
    Q: th,
    s: rh,
    S: KI,
    u: WI,
    U: qI,
    V: UI,
    w: HI,
    W: GI,
    x: null,
    X: null,
    y: VI,
    Y: XI,
    Z: JI,
    "%": eh
  }, w = {
    a: Ye,
    A: We,
    b: Tt,
    B: In,
    c: null,
    d: Qp,
    e: Qp,
    f: rj,
    g: dj,
    G: pj,
    H: QI,
    I: ej,
    j: tj,
    L: yb,
    m: nj,
    M: ij,
    p: jn,
    q: qe,
    Q: th,
    s: rh,
    S: aj,
    u: oj,
    U: uj,
    V: lj,
    w: cj,
    W: sj,
    x: null,
    X: null,
    y: fj,
    Y: vj,
    Z: hj,
    "%": eh
  }, O = {
    a: j,
    A: C,
    b: _,
    B: z,
    c: M,
    d: Xp,
    e: Xp,
    f: TI,
    g: Yp,
    G: Vp,
    H: Zp,
    I: Zp,
    j: II,
    L: kI,
    m: _I,
    M: jI,
    p: I,
    q: EI,
    Q: DI,
    s: NI,
    S: CI,
    u: wI,
    U: PI,
    V: OI,
    w: xI,
    W: AI,
    x: R,
    X: W,
    y: Yp,
    Y: Vp,
    Z: SI,
    "%": MI
  };
  x.x = P(r, x), x.X = P(n, x), x.c = P(t, x), w.x = P(r, w), w.X = P(n, w), w.c = P(t, w);
  function P(L, T) {
    return function(X) {
      var k = [], Ue = -1, ne = 0, Xe = L.length, Ze, fr, kf;
      for (X instanceof Date || (X = /* @__PURE__ */ new Date(+X)); ++Ue < Xe; )
        L.charCodeAt(Ue) === 37 && (k.push(L.slice(ne, Ue)), (fr = Gp[Ze = L.charAt(++Ue)]) != null ? Ze = L.charAt(++Ue) : fr = Ze === "e" ? " " : "0", (kf = T[Ze]) && (Ze = kf(X, fr)), k.push(Ze), ne = Ue + 1);
      return k.push(L.slice(ne, Ue)), k.join("");
    };
  }
  function S(L, T) {
    return function(X) {
      var k = $n(1900, void 0, 1), Ue = E(k, L, X += "", 0), ne, Xe;
      if (Ue != X.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (T && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (ne = Pl($n(k.y, 0, 1)), Xe = ne.getUTCDay(), ne = Xe > 4 || Xe === 0 ? Wa.ceil(ne) : Wa(ne), ne = To.offset(ne, (k.V - 1) * 7), k.y = ne.getUTCFullYear(), k.m = ne.getUTCMonth(), k.d = ne.getUTCDate() + (k.w + 6) % 7) : (ne = wl($n(k.y, 0, 1)), Xe = ne.getDay(), ne = Xe > 4 || Xe === 0 ? Ka.ceil(ne) : Ka(ne), ne = Ei.offset(ne, (k.V - 1) * 7), k.y = ne.getFullYear(), k.m = ne.getMonth(), k.d = ne.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Xe = "Z" in k ? Pl($n(k.y, 0, 1)).getUTCDay() : wl($n(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Xe + 5) % 7 : k.w + k.U * 7 - (Xe + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Pl(k)) : wl(k);
    };
  }
  function E(L, T, X, k) {
    for (var Ue = 0, ne = T.length, Xe = X.length, Ze, fr; Ue < ne; ) {
      if (k >= Xe) return -1;
      if (Ze = T.charCodeAt(Ue++), Ze === 37) {
        if (Ze = T.charAt(Ue++), fr = O[Ze in Gp ? T.charAt(Ue++) : Ze], !fr || (k = fr(L, X, k)) < 0) return -1;
      } else if (Ze != X.charCodeAt(k++))
        return -1;
    }
    return k;
  }
  function I(L, T, X) {
    var k = c.exec(T.slice(X));
    return k ? (L.p = f.get(k[0].toLowerCase()), X + k[0].length) : -1;
  }
  function j(L, T, X) {
    var k = p.exec(T.slice(X));
    return k ? (L.w = h.get(k[0].toLowerCase()), X + k[0].length) : -1;
  }
  function C(L, T, X) {
    var k = s.exec(T.slice(X));
    return k ? (L.w = d.get(k[0].toLowerCase()), X + k[0].length) : -1;
  }
  function _(L, T, X) {
    var k = y.exec(T.slice(X));
    return k ? (L.m = b.get(k[0].toLowerCase()), X + k[0].length) : -1;
  }
  function z(L, T, X) {
    var k = m.exec(T.slice(X));
    return k ? (L.m = g.get(k[0].toLowerCase()), X + k[0].length) : -1;
  }
  function M(L, T, X) {
    return E(L, t, T, X);
  }
  function R(L, T, X) {
    return E(L, r, T, X);
  }
  function W(L, T, X) {
    return E(L, n, T, X);
  }
  function F(L) {
    return o[L.getDay()];
  }
  function Y(L) {
    return a[L.getDay()];
  }
  function B(L) {
    return l[L.getMonth()];
  }
  function G(L) {
    return u[L.getMonth()];
  }
  function ye(L) {
    return i[+(L.getHours() >= 12)];
  }
  function ue(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function Ye(L) {
    return o[L.getUTCDay()];
  }
  function We(L) {
    return a[L.getUTCDay()];
  }
  function Tt(L) {
    return l[L.getUTCMonth()];
  }
  function In(L) {
    return u[L.getUTCMonth()];
  }
  function jn(L) {
    return i[+(L.getUTCHours() >= 12)];
  }
  function qe(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var T = P(L += "", x);
      return T.toString = function() {
        return L;
      }, T;
    },
    parse: function(L) {
      var T = S(L += "", !1);
      return T.toString = function() {
        return L;
      }, T;
    },
    utcFormat: function(L) {
      var T = P(L += "", w);
      return T.toString = function() {
        return L;
      }, T;
    },
    utcParse: function(L) {
      var T = S(L += "", !0);
      return T.toString = function() {
        return L;
      }, T;
    }
  };
}
var Gp = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, yI = /^%/, gI = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function bI(e) {
  return e.replace(gI, "\\$&");
}
function Ln(e) {
  return new RegExp("^(?:" + e.map(bI).join("|") + ")", "i");
}
function Rn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function xI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function wI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function PI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function OI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function AI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Vp(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Yp(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function SI(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function EI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function _I(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Xp(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function II(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Zp(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function jI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function CI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function kI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function TI(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function MI(e, t, r) {
  var n = yI.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function DI(e, t, r) {
  var n = Ce.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function NI(e, t, r) {
  var n = Ce.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Jp(e, t) {
  return Z(e.getDate(), t, 2);
}
function $I(e, t) {
  return Z(e.getHours(), t, 2);
}
function LI(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function RI(e, t) {
  return Z(1 + Ei.count(Ft(e), e), t, 3);
}
function hb(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function zI(e, t) {
  return hb(e, t) + "000";
}
function BI(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function FI(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function KI(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function WI(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function qI(e, t) {
  return Z(Mo.count(Ft(e) - 1, e), t, 2);
}
function mb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? sn(e) : sn.ceil(e);
}
function UI(e, t) {
  return e = mb(e), Z(sn.count(Ft(e), e) + (Ft(e).getDay() === 4), t, 2);
}
function HI(e) {
  return e.getDay();
}
function GI(e, t) {
  return Z(Ka.count(Ft(e) - 1, e), t, 2);
}
function VI(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function YI(e, t) {
  return e = mb(e), Z(e.getFullYear() % 100, t, 2);
}
function XI(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function ZI(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? sn(e) : sn.ceil(e), Z(e.getFullYear() % 1e4, t, 4);
}
function JI(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Z(t / 60 | 0, "0", 2) + Z(t % 60, "0", 2);
}
function Qp(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function QI(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function ej(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function tj(e, t) {
  return Z(1 + To.count(Kt(e), e), t, 3);
}
function yb(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function rj(e, t) {
  return yb(e, t) + "000";
}
function nj(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function ij(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function aj(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function oj(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function uj(e, t) {
  return Z(Do.count(Kt(e) - 1, e), t, 2);
}
function gb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? fn(e) : fn.ceil(e);
}
function lj(e, t) {
  return e = gb(e), Z(fn.count(Kt(e), e) + (Kt(e).getUTCDay() === 4), t, 2);
}
function cj(e) {
  return e.getUTCDay();
}
function sj(e, t) {
  return Z(Wa.count(Kt(e) - 1, e), t, 2);
}
function fj(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function dj(e, t) {
  return e = gb(e), Z(e.getUTCFullYear() % 100, t, 2);
}
function vj(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function pj(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? fn(e) : fn.ceil(e), Z(e.getUTCFullYear() % 1e4, t, 4);
}
function hj() {
  return "+0000";
}
function eh() {
  return "%";
}
function th(e) {
  return +e;
}
function rh(e) {
  return Math.floor(+e / 1e3);
}
var Gr, bb, xb;
mj({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mj(e) {
  return Gr = mI(e), bb = Gr.format, Gr.parse, xb = Gr.utcFormat, Gr.utcParse, Gr;
}
function yj(e) {
  return new Date(e);
}
function gj(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ns(e, t, r, n, i, a, o, u, l, c) {
  var f = ws(), s = f.invert, d = f.domain, p = c(".%L"), h = c(":%S"), m = c("%I:%M"), g = c("%I %p"), y = c("%a %d"), b = c("%b %d"), x = c("%B"), w = c("%Y");
  function O(P) {
    return (l(P) < P ? p : u(P) < P ? h : o(P) < P ? m : a(P) < P ? g : n(P) < P ? i(P) < P ? y : b : r(P) < P ? x : w)(P);
  }
  return f.invert = function(P) {
    return new Date(s(P));
  }, f.domain = function(P) {
    return arguments.length ? d(Array.from(P, gj)) : d().map(yj);
  }, f.ticks = function(P) {
    var S = d();
    return e(S[0], S[S.length - 1], P ?? 10);
  }, f.tickFormat = function(P, S) {
    return S == null ? O : c(S);
  }, f.nice = function(P) {
    var S = d();
    return (!P || typeof P.range != "function") && (P = t(S[0], S[S.length - 1], P ?? 10)), P ? d(ob(S, P)) : f;
  }, f.copy = function() {
    return Si(f, Ns(e, t, r, n, i, a, o, u, l, c));
  }, f;
}
function bj() {
  return st.apply(Ns(pI, hI, Ft, Ms, Mo, Ei, ks, js, Pr, bb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function xj() {
  return st.apply(Ns(dI, vI, Kt, Ds, Do, To, Ts, Cs, Pr, xb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function No() {
  var e = 0, t = 1, r, n, i, a, o = ze, u = !1, l;
  function c(s) {
    return s == null || isNaN(s = +s) ? l : o(i === 0 ? 0.5 : (s = (a(s) - r) * i, u ? Math.max(0, Math.min(1, s)) : s));
  }
  c.domain = function(s) {
    return arguments.length ? ([e, t] = s, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(s) {
    return arguments.length ? (u = !!s, c) : u;
  }, c.interpolator = function(s) {
    return arguments.length ? (o = s, c) : o;
  };
  function f(s) {
    return function(d) {
      var p, h;
      return arguments.length ? ([p, h] = d, o = s(p, h), c) : [o(0), o(1)];
    };
  }
  return c.range = f(Pn), c.rangeRound = f(xs), c.unknown = function(s) {
    return arguments.length ? (l = s, c) : l;
  }, function(s) {
    return a = s, r = s(e), n = s(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function cr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function wb() {
  var e = lr(No()(ze));
  return e.copy = function() {
    return cr(e, wb());
  }, Gt.apply(e, arguments);
}
function Pb() {
  var e = As(No()).domain([1, 10]);
  return e.copy = function() {
    return cr(e, Pb()).base(e.base());
  }, Gt.apply(e, arguments);
}
function Ob() {
  var e = Ss(No());
  return e.copy = function() {
    return cr(e, Ob()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function $s() {
  var e = Es(No());
  return e.copy = function() {
    return cr(e, $s()).exponent(e.exponent());
  }, Gt.apply(e, arguments);
}
function wj() {
  return $s.apply(null, arguments).exponent(0.5);
}
function Ab() {
  var e = [], t = ze;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Oi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(rr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => o_(e, a / n));
  }, r.copy = function() {
    return Ab(t).domain(e);
  }, Gt.apply(r, arguments);
}
function $o() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, l, c = ze, f, s = !1, d;
  function p(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +f(m)) - a) * (n * m < n * a ? u : l), c(s ? Math.max(0, Math.min(1, m)) : m));
  }
  p.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(m) {
    return arguments.length ? (s = !!m, p) : s;
  }, p.interpolator = function(m) {
    return arguments.length ? (c = m, p) : c;
  };
  function h(m) {
    return function(g) {
      var y, b, x;
      return arguments.length ? ([y, b, x] = g, c = M_(m, [y, b, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = h(Pn), p.rangeRound = h(xs), p.unknown = function(m) {
    return arguments.length ? (d = m, p) : d;
  }, function(m) {
    return f = m, i = m(e), a = m(t), o = m(r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function Sb() {
  var e = lr($o()(ze));
  return e.copy = function() {
    return cr(e, Sb());
  }, Gt.apply(e, arguments);
}
function Eb() {
  var e = As($o()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return cr(e, Eb()).base(e.base());
  }, Gt.apply(e, arguments);
}
function _b() {
  var e = Ss($o());
  return e.copy = function() {
    return cr(e, _b()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function Ls() {
  var e = Es($o());
  return e.copy = function() {
    return cr(e, Ls()).exponent(e.exponent());
  }, Gt.apply(e, arguments);
}
function Pj() {
  return Ls.apply(null, arguments).exponent(0.5);
}
const Ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ys,
  scaleDiverging: Sb,
  scaleDivergingLog: Eb,
  scaleDivergingPow: Ls,
  scaleDivergingSqrt: Pj,
  scaleDivergingSymlog: _b,
  scaleIdentity: ab,
  scaleImplicit: dc,
  scaleLinear: ib,
  scaleLog: ub,
  scaleOrdinal: ms,
  scalePoint: c_,
  scalePow: _s,
  scaleQuantile: sb,
  scaleQuantize: fb,
  scaleRadial: cb,
  scaleSequential: wb,
  scaleSequentialLog: Pb,
  scaleSequentialPow: $s,
  scaleSequentialQuantile: Ab,
  scaleSequentialSqrt: wj,
  scaleSequentialSymlog: Ob,
  scaleSqrt: rI,
  scaleSymlog: lb,
  scaleThreshold: db,
  scaleTime: bj,
  scaleUtc: xj,
  tickFormat: nb
}, Symbol.toStringTag, { value: "Module" }));
function Oj(e) {
  var t = Ib;
  if (e in t && typeof t[e] == "function")
    return t[e]();
  var r = "scale".concat(di(e));
  if (r in t && typeof t[r] == "function")
    return t[r]();
}
function nh(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = Oj(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function Rs(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? nh(e.scale, r, n) : nh(t, r, n);
}
function Aj(e) {
  return "scale".concat(di(e));
}
function Sj(e) {
  return Aj(e) in Ib;
}
var jb = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string")
      return Sj(n) ? n : "point";
  }
};
function Ej(e, t) {
  for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n; ) {
    var a = Math.floor((r + n) / 2);
    (i ? e[a] < t : e[a] > t) ? r = a + 1 : n = a;
  }
  return r;
}
function Cb(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((a) => {
      var o;
      return (o = e(a)) !== null && o !== void 0 ? o : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (a) => {
        var o, u, l = Ej(n, a);
        if (l <= 0)
          return r[0];
        if (l >= r.length)
          return r[r.length - 1];
        var c = (o = n[l - 1]) !== null && o !== void 0 ? o : 0, f = (u = n[l]) !== null && u !== void 0 ? u : 0;
        return Math.abs(a - c) <= Math.abs(a - f) ? r[l - 1] : r[l];
      };
  }
}
function _j(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : Cb(e, void 0);
}
function ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ih(Object(r), !0).forEach(function(n) {
      Ij(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ih(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ij(e, t, r) {
  return (t = jj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jj(e) {
  var t = Cj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mc = [0, "auto"], xe = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0,
  niceTicks: "auto"
}, kb = (e, t) => e.cartesianAxis.xAxis[t], Vt = (e, t) => {
  var r = kb(e, t);
  return r ?? xe;
}, we = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: mc,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  niceTicks: "auto",
  width: hi
}, Tb = (e, t) => e.cartesianAxis.yAxis[t], Yt = (e, t) => {
  var r = Tb(e, t);
  return r ?? we;
}, Mb = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, zs = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? Mb;
}, me = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Vt(e, r);
    case "yAxis":
      return Yt(e, r);
    case "zAxis":
      return zs(e, r);
    case "angleAxis":
      return ss(e, r);
    case "radiusAxis":
      return fs(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, kj = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Vt(e, r);
    case "yAxis":
      return Yt(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, On = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Vt(e, r);
    case "yAxis":
      return Yt(e, r);
    case "angleAxis":
      return ss(e, r);
    case "radiusAxis":
      return fs(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Db = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Bs(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var _i = (e) => e.graphicalItems.cartesianItems, Tj = A([fe, Pi], Bs), Fs = (e, t, r) => e.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === !0 ? !0 : !n.hide), An = A([_i, me, Tj], Fs, {
  memoizeOptions: {
    resultEqualityCheck: Co
  }
}), Nb = A([An], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Io)), $b = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), Mj = A([An], $b), Ks = (e) => e.map((t) => t.data).filter(Boolean).flat(1), Dj = A([An], (e) => e.some((t) => !t.data)), Lb = A([An], Ks, {
  memoizeOptions: {
    resultEqualityCheck: Co
  }
}), Ws = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, qs = A([Lb, gn], Ws), Rb = (e, t, r) => (t == null ? void 0 : t.dataKey) != null ? e.map((n) => ({
  value: V(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: V(i, n)
}))) : e.map((n) => ({
  value: n
})), zb = (e, t, r, n, i, a) => {
  var {
    chartData: o = [],
    dataStartIndex: u,
    dataEndIndex: l
  } = n, c = Rb(e, t, r);
  if (i && (t == null ? void 0 : t.dataKey) != null && a.length > 0) {
    var f = o.slice(u, l + 1), s = f.map((d) => ({
      value: V(d, t.dataKey)
    })).filter((d) => d.value != null);
    return [...s, ...c];
  }
  return c;
}, Ii = A([qs, me, An, gn, Dj, Lb], zb);
function nn(e) {
  if (Et(e) || e instanceof Date) {
    var t = Number(e);
    if (H(t))
      return t;
  }
}
function ah(e) {
  if (Array.isArray(e)) {
    var t = [nn(e[0]), nn(e[1])];
    return Ot(t) ? t : void 0;
  }
  var r = nn(e);
  if (r != null)
    return [r, r];
}
function jt(e) {
  return e.map(nn).filter(He);
}
function Nj(e, t) {
  var r = nn(e), n = nn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var $j = A([Ii], (e) => e == null ? void 0 : e.map((t) => t.value).sort(Nj));
function Bb(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function Lj(e, t, r) {
  if (!r)
    return [];
  if (!r.length)
    return [];
  var n;
  if (typeof t == "number" && !St(t))
    n = t;
  else if (Array.isArray(t)) {
    var i = jt(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : jt(r.flatMap((a) => {
    var o = V(e, a.dataKey), u, l;
    if (Array.isArray(o) ? [u, l] = o : u = l = o, !(!H(u) || !H(l)))
      return [n - u, n + l];
  }));
}
var Se = (e) => {
  var t = je(e), r = wn(e);
  return On(e, t, r);
}, dn = A([Se], (e) => e == null ? void 0 : e.dataKey), Rj = A([Nb, gn, Se], Gg), Fb = (e, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null)
      return o;
    var l = o[u.stackId];
    return l == null && (l = []), l.push(u), o[u.stackId] = l, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, l] = o, c = n ? [...l].reverse() : l, f = c.map(vs);
    return [u, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: j1(e, f, r),
      graphicalItems: c
    }];
  }));
}, yc = A([Rj, Nb, wi, Bg], Fb), Kb = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var o = D1(e, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0))
      return o;
  }
}, zj = A([me], (e) => e.allowDataOverflow), Us = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return mc;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = jt(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e == null ? void 0 : e.domain) !== null && t !== void 0 ? t : mc;
}, Hs = A([me], Us), Gs = A([Hs, zj], _g), Bj = A([yc, mt, fe, Gs], Kb, {
  memoizeOptions: {
    resultEqualityCheck: jo
  }
}), Lo = (e) => e.errorBars, Fj = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Bb(r, n)), Ua = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, Vs = function(t, r, n, i, a) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], u, l;
  if (n.length > 0 && n.forEach((c) => {
    var f, s = c.data != null ? [...c.data] : o, d = (f = i[c.id]) === null || f === void 0 ? void 0 : f.filter((p) => Bb(a, p));
    s.forEach((p) => {
      var h, m = V(p, (h = r.dataKey) !== null && h !== void 0 ? h : c.dataKey), g = Lj(p, m, d);
      if (g.length >= 2) {
        var y = Math.min(...g), b = Math.max(...g);
        (u == null || y < u) && (u = y), (l == null || b > l) && (l = b);
      }
      var x = ah(m);
      x != null && (u = u == null ? x[0] : Math.min(u, x[0]), l = l == null ? x[1] : Math.max(l, x[1]));
    });
  }), (r == null ? void 0 : r.dataKey) != null && n.length === 0 && t.forEach((c) => {
    var f = ah(V(c, r.dataKey));
    f != null && (u = u == null ? f[0] : Math.min(u, f[0]), l = l == null ? f[1] : Math.max(l, f[1]));
  }), H(u) && H(l))
    return [u, l];
}, Kj = A([qs, me, Mj, Lo, fe, TE], Vs, {
  memoizeOptions: {
    resultEqualityCheck: jo
  }
});
function Wj(e) {
  var {
    value: t
  } = e;
  if (Et(t) || t instanceof Date)
    return t;
}
var qj = (e, t, r) => {
  var n = e.map(Wj).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Qm(n)) ? Eg(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Wb = (e) => e.referenceElements.dots, Sn = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), Uj = A([Wb, fe, Pi], Sn), qb = (e) => e.referenceElements.areas, Hj = A([qb, fe, Pi], Sn), Ub = (e) => e.referenceElements.lines, Gj = A([Ub, fe, Pi], Sn), Hb = (e, t) => {
  if (e != null) {
    var r = jt(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, Vj = A(Uj, fe, Hb), Gb = (e, t) => {
  if (e != null) {
    var r = jt(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, Yj = A([Hj, fe], Gb);
function Xj(e) {
  var t;
  if (e.x != null)
    return jt([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : jt(r);
}
function Zj(e) {
  var t;
  if (e.y != null)
    return jt([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : jt(r);
}
var Vb = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? Xj(n) : Zj(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, Jj = A([Gj, fe], Vb), Qj = A(Vj, Jj, Yj, (e, t, r) => Ua(e, r, t)), Ys = (e, t, r, n, i, a, o, u) => {
  if (r != null)
    return r;
  var l = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", c = l ? Ua(n, a, i) : Ua(a, i);
  return NE(t, c, e.allowDataOverflow);
}, eC = A([me, Hs, Gs, Bj, Kj, Qj, J, fe], Ys, {
  memoizeOptions: {
    resultEqualityCheck: jo
  }
}), tC = [0, 1], Xs = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: u,
      type: l
    } = e, c = qt(t, a);
    if (c && u == null) {
      var f;
      return Eg(0, (f = r == null ? void 0 : r.length) !== null && f !== void 0 ? f : 0);
    }
    return l === "category" ? qj(n, e, c) : i === "expand" && !c ? tC : o;
  }
}, Zs = A([me, J, qs, Ii, wi, fe, eC], Xs), sr = A([me, Db, us], jb), Js = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = Us(t), a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && Ot(e)) {
      if (a)
        return hp(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return mp(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (a && Ot(e))
        return hp(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && Ot(e))
        return mp(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Qs = A([Zs, On, sr], Js), ef = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && (e == null ? void 0 : e.type) === "number" && Ot(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, a, o = t[0], u = (i = r[0]) !== null && i !== void 0 ? i : 0, l = t[1], c = (a = r[r.length - 1]) !== null && a !== void 0 ? a : 0;
    return [Math.min(o, u), Math.max(l, c)];
  }
  return t;
}, rC = A([me, Zs, Qs, fe], ef), nC = A(Ii, me, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(jt(e.map((s) => s.value))).sort((s, d) => s - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null)
      return 1 / 0;
    var o = a - i;
    if (o === 0)
      return 1 / 0;
    for (var u = 0; u < n.length - 1; u++) {
      var l = n[u], c = n[u + 1];
      if (!(l == null || c == null)) {
        var f = c - l;
        r = Math.min(r, f);
      }
    }
    return r / o;
  }
}), Yb = A(nC, J, zg, Oe, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!H(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = Ne(r, e * a), u = e * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), iC = (e, t, r) => {
  var n = Vt(e, t);
  return n == null || typeof n.padding != "string" ? 0 : Yb(e, "xAxis", t, r, n.padding);
}, aC = (e, t, r) => {
  var n = Yt(e, t);
  return n == null || typeof n.padding != "string" ? 0 : Yb(e, "yAxis", t, r, n.padding);
}, oC = A(Vt, iC, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), uC = A(Yt, aC, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), lC = A([Oe, oC, xo, bo, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), cC = A([Oe, J, uC, xo, bo, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), ji = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return lC(e, r, n);
    case "yAxis":
      return cC(e, r, n);
    case "zAxis":
      return (i = zs(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return qg(e);
    case "radiusAxis":
      return Ug(e, r);
    default:
      return;
  }
}, Xb = A([me, ji], So), sC = A([sr, rC], Vg), tf = A([me, sr, sC, Xb], Rs), Zb = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = qt(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((u) => u.value);
  }
}, rf = A([J, Ii, On, fe], Zb), Ro = A([tf], ps);
A([tf], _j);
A([tf, $j], Cb);
A([An, Lo, fe], Fj);
function Jb(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var zo = (e, t) => t, Bo = (e, t, r) => r, fC = A(yo, zo, Bo, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Jb)), dC = A(go, zo, Bo, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Jb)), Qb = (e, t) => ({
  width: e.width,
  height: t.height
}), vC = (e, t) => {
  var r = typeof t.width == "number" ? t.width : hi;
  return {
    width: r,
    height: e.height
  };
}, e0 = A(Oe, Vt, Qb), pC = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, hC = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, mC = A(Ht, Oe, fC, zo, Bo, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = Qb(t, u);
    o == null && (o = pC(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(c) * l.height, o += (c ? -1 : 1) * l.height;
  }), a;
}), yC = A(Ut, Oe, dC, zo, Bo, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = vC(t, u);
    o == null && (o = hC(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(c) * l.width, o += (c ? -1 : 1) * l.width;
  }), a;
}), gC = (e, t) => {
  var r = Vt(e, t);
  if (r != null)
    return mC(e, r.orientation, r.mirror);
}, bC = A([Oe, Vt, gC, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), xC = (e, t) => {
  var r = Yt(e, t);
  if (r != null)
    return yC(e, r.orientation, r.mirror);
}, wC = A([Oe, Yt, xC, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), t0 = A(Oe, Yt, (e, t) => {
  var r = typeof t.width == "number" ? t.width : hi;
  return {
    width: r,
    height: e.height
  };
}), oh = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return e0(e, r).width;
    case "yAxis":
      return t0(e, r).height;
    default:
      return;
  }
}, r0 = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, u = qt(e, n), l = t.map((f) => f.value), c = l.filter((f) => f != null);
    if (o && u && a === "category" && i && Qm(c))
      return l;
  }
}, nf = A([J, Ii, me, fe], r0), uh = A([J, kj, sr, Ro, nf, rf, ji, Qs, fe], (e, t, r, n, i, a, o, u, l) => {
  if (t != null) {
    var c = qt(e, l);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: l,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: c,
      niceTicks: u,
      range: o,
      realScaleType: r,
      scale: n
    };
  }
}), PC = (e, t, r, n, i, a, o, u, l) => {
  if (!(t == null || n == null)) {
    var c = qt(e, l), {
      type: f,
      ticks: s,
      tickCount: d
    } = t, p = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), h = f === "category" && n.bandwidth ? n.bandwidth() / p : 0;
    h = l === "angleAxis" && a != null && a.length >= 2 ? _e(a[0] - a[1]) * 2 * h : h;
    var m = s || i;
    return m ? m.map((g, y) => {
      var b = o ? o.indexOf(g) : g, x = n.map(b);
      return H(x) ? {
        index: y,
        coordinate: x + h,
        value: g,
        offset: h
      } : null;
    }).filter(He) : c && u ? u.map((g, y) => {
      var b = n.map(g);
      return H(b) ? {
        coordinate: b + h,
        value: g,
        index: y,
        offset: h
      } : null;
    }).filter(He) : n.ticks ? n.ticks(d).map((g, y) => {
      var b = n.map(g);
      return H(b) ? {
        coordinate: b + h,
        value: g,
        index: y,
        offset: h
      } : null;
    }).filter(He) : n.domain().map((g, y) => {
      var b = n.map(g);
      return H(b) ? {
        coordinate: b + h,
        // @ts-expect-error can't use Date as index
        value: o ? o[g] : g,
        index: y,
        offset: h
      } : null;
    }).filter(He);
  }
}, n0 = A([J, On, sr, Ro, Qs, ji, nf, rf, fe], PC), OC = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = qt(e, o), {
      tickCount: l
    } = t, c = 0;
    return c = o === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? _e(n[0] - n[1]) * 2 * c : c, u && a ? a.map((f, s) => {
      var d = r.map(f);
      return H(d) ? {
        coordinate: d + c,
        value: f,
        index: s,
        offset: c
      } : null;
    }).filter(He) : r.ticks ? r.ticks(l).map((f, s) => {
      var d = r.map(f);
      return H(d) ? {
        coordinate: d + c,
        value: f,
        index: s,
        offset: c
      } : null;
    }).filter(He) : r.domain().map((f, s) => {
      var d = r.map(f);
      return H(d) ? {
        coordinate: d + c,
        // @ts-expect-error can't use unknown as index
        value: i ? i[f] : f,
        index: s,
        offset: c
      } : null;
    }).filter(He);
  }
}, Ct = A([J, On, Ro, ji, nf, rf, fe], OC), kt = A(me, Ro, (e, t) => {
  if (!(e == null || t == null))
    return qa(qa({}, e), {}, {
      scale: t
    });
}), AC = A([me, sr, Zs, Xb], Rs), SC = A([AC], ps), EC = A((e, t, r) => zs(e, r), SC, (e, t) => {
  if (!(e == null || t == null))
    return qa(qa({}, e), {}, {
      scale: t
    });
}), _C = A([J, yo, go], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), IC = (e, t, r) => {
  var n;
  return (n = e.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
A([IC], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var r, n = 1 / 0, i = e[0];
      for (var a of e) {
        var o = Math.abs(a.coordinate - t);
        o < n && (n = o, i = a);
      }
      return (r = i) === null || r === void 0 ? void 0 : r.value;
    };
});
var i0 = (e) => e.options.defaultTooltipEventType, a0 = (e) => e.options.validateTooltipEventTypes;
function o0(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Ci(e, t) {
  var r = i0(e), n = a0(e);
  return o0(t, r, n);
}
function jC(e) {
  return N((t) => Ci(t, e));
}
var u0 = (e, t) => {
  var r, n = Number(t);
  if (!(St(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, CC = (e) => e.tooltip.settings, er = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, kC = {
  itemInteraction: {
    click: er,
    hover: er
  },
  axisInteraction: {
    click: er,
    hover: er
  },
  keyboardInteraction: er,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, l0 = $e({
  name: "tooltip",
  initialState: kC,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ae()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = ut(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: ae()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = ut(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: ae()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: TC,
  replaceTooltipEntrySettings: MC,
  removeTooltipEntrySettings: DC,
  setTooltipSettingsState: NC,
  setActiveMouseOverItemIndex: c0,
  mouseLeaveItem: $C,
  mouseLeaveChart: s0,
  setActiveClickItemIndex: LC,
  setMouseOverAxisIndex: f0,
  setMouseClickAxisIndex: RC,
  setSyncInteraction: qn,
  setKeyboardInteraction: Ha
} = l0.actions, zC = l0.reducer;
function lh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lh(Object(r), !0).forEach(function(n) {
      BC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BC(e, t, r) {
  return (t = FC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FC(e) {
  var t = KC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WC(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function qC(e) {
  return e.index != null;
}
var d0 = (e, t, r, n) => {
  if (t == null)
    return er;
  var i = WC(e, t, r);
  if (i == null)
    return er;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (qC(i)) {
    if (a)
      return Hi(Hi({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return Hi(Hi({}, er), {}, {
    coordinate: i.coordinate
  });
};
function UC(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function HC(e, t) {
  var r = UC(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function GC(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = V(e, t);
  return n == null || !Ot(r) ? !0 : HC(n, r);
}
var Hn = (e, t, r, n) => {
  var i = e == null ? void 0 : e.index;
  if (i == null)
    return null;
  var a = Number(i);
  if (!H(a))
    return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var l = Math.max(o, Math.min(a, u)), c = t[l];
  return c == null || GC(c, r, n) ? String(l) : null;
}, v0 = (e, t, r, n, i, a, o) => {
  if (a != null) {
    var u = o[0], l = u == null ? void 0 : u.getPosition(a);
    if (l != null)
      return l;
    var c = i == null ? void 0 : i[Number(a)];
    if (c)
      switch (r) {
        case "horizontal":
          return {
            x: c.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: c.coordinate
          };
      }
  }
}, p0 = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, e.syncInteraction.active && i == null)
    return e.tooltipItemPayloads;
  if (i == null && (n != null || e.keyboardInteraction.active)) {
    var a = e.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e.tooltipItemPayloads.filter((o) => {
    var u;
    return ((u = o.settings) === null || u === void 0 ? void 0 : u.graphicalItemId) === i;
  });
}, h0 = (e) => e.options.tooltipPayloadSearcher, En = (e) => e.tooltip;
function ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ch(Object(r), !0).forEach(function(n) {
      VC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VC(e, t, r) {
  return (t = YC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YC(e) {
  var t = XC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZC(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
}
function JC(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
}
function QC(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (typeof e == "function")
    return (t) => e(t);
}
function fh(e) {
  if (typeof e == "string")
    return e;
}
function ek(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? ZC(e.name) : void 0, r = "unit" in e ? JC(e.unit) : void 0, n = "dataKey" in e ? QC(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, a = "color" in e ? fh(e.color) : void 0, o = "fill" in e ? fh(e.fill) : void 0;
    return {
      name: t,
      unit: r,
      dataKey: n,
      payload: i,
      color: a,
      fill: o
    };
  }
}
function tk(e, t) {
  return e ?? t;
}
var m0 = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: u,
      computedData: l,
      dataStartIndex: c,
      dataEndIndex: f
    } = r, s = [];
    return e.reduce((d, p) => {
      var h, {
        dataDefinedOnItem: m,
        settings: g
      } = p, y = tk(m, u), b = Array.isArray(y) ? Vy(y, c, f) : y, x = (h = g == null ? void 0 : g.dataKey) !== null && h !== void 0 ? h : n, w = g == null ? void 0 : g.nameKey, O;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? O = ey(b, n, i) : O = a(b, t, l, w), Array.isArray(O))
        O.forEach((S) => {
          var E, I, j = ek(S), C = j == null ? void 0 : j.name, _ = j == null ? void 0 : j.dataKey, z = j == null ? void 0 : j.payload, M = sh(sh({}, g), {}, {
            name: C,
            unit: j == null ? void 0 : j.unit,
            // Preserve item-level color/fill from graphical items.
            color: (E = j == null ? void 0 : j.color) !== null && E !== void 0 ? E : g == null ? void 0 : g.color,
            fill: (I = j == null ? void 0 : j.fill) !== null && I !== void 0 ? I : g == null ? void 0 : g.fill
          });
          d.push(nv({
            tooltipEntrySettings: M,
            dataKey: _,
            payload: z,
            value: V(z, _),
            name: C == null ? void 0 : String(C)
          }));
        });
      else {
        var P;
        d.push(nv({
          tooltipEntrySettings: g,
          dataKey: x,
          payload: O,
          // getValueByDataKey does not validate the output type
          value: V(O, x),
          // getValueByDataKey does not validate the output type
          name: (P = V(O, w)) !== null && P !== void 0 ? P : g == null ? void 0 : g.name
        }));
      }
      return d;
    }, s);
  }
}, af = A([Se, Db, us], jb), rk = A([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), nk = A([je, wn], Bs), Kr = A([rk, Se, nk], Fs, {
  memoizeOptions: {
    resultEqualityCheck: Co
  }
}), ik = A([Kr], (e) => e.filter(Io)), y0 = A([Kr], Ks, {
  memoizeOptions: {
    resultEqualityCheck: Co
  }
}), ak = A([Kr], (e) => e.some((t) => !t.data)), Dr = A([y0, mt], Ws), ok = A([ik, mt, Se], Gg), of = A([Dr, Se, Kr, mt, ak, y0], zb), g0 = A([Se], Us), uk = A([Se], (e) => e.allowDataOverflow), b0 = A([g0, uk], _g), lk = A([Kr], (e) => e.filter(Io)), ck = A([ok, lk, wi, Bg], Fb), sk = A([ck, mt, je, b0], Kb), fk = A([Kr], $b), dk = A([Dr, Se, fk, Lo, je, DE], Vs, {
  memoizeOptions: {
    resultEqualityCheck: jo
  }
}), vk = A([Wb, je, wn], Sn), pk = A([vk, je], Hb), hk = A([qb, je, wn], Sn), mk = A([hk, je], Gb), yk = A([Ub, je, wn], Sn), gk = A([yk, je], Vb), bk = A([pk, gk, mk], Ua), xk = A([Se, g0, b0, sk, dk, bk, J, je], Ys), vn = A([Se, J, Dr, of, wi, je, xk], Xs), wk = A([vn, Se, af], Js), Pk = A([Se, vn, wk, je], ef), x0 = (e) => {
  var t = je(e), r = wn(e), n = !1;
  return ji(e, t, r, n);
}, w0 = A([Se, x0], So), Ok = A([Se, af, Pk, w0], Rs), P0 = A([Ok], ps), Ak = A([J, of, Se, je], r0), Sk = A([J, of, Se, je], Zb), Ek = (e, t, r, n, i, a, o, u) => {
  if (t) {
    var {
      type: l
    } = t, c = qt(e, u);
    if (n) {
      var f = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, s = l === "category" && n.bandwidth ? n.bandwidth() / f : 0;
      return s = u === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? _e(i[0] - i[1]) * 2 * s : s, c && o ? o.map((d, p) => {
        var h = n.map(d);
        return H(h) ? {
          coordinate: h + s,
          value: d,
          index: p,
          offset: s
        } : null;
      }).filter(He) : n.domain().map((d, p) => {
        var h = n.map(d);
        return H(h) ? {
          coordinate: h + s,
          // @ts-expect-error can't use Date as an index
          value: a ? a[d] : d,
          index: p,
          offset: s
        } : null;
      }).filter(He);
    }
  }
}, Xt = A([J, Se, af, P0, x0, Ak, Sk, je], Ek), uf = A([i0, a0, CC], (e, t, r) => o0(r.shared, e, t)), O0 = (e) => e.tooltip.settings.trigger, lf = (e) => e.tooltip.settings.defaultIndex, ki = A([En, uf, O0, lf], d0), Wt = A([ki, Dr, dn, vn], Hn), A0 = A([Xt, Wt], u0), cf = A([ki], (e) => {
  if (e)
    return e.dataKey;
}), S0 = A([ki], (e) => {
  if (e)
    return e.graphicalItemId;
}), E0 = A([En, uf, O0, lf], p0), _k = A([Ut, Ht, J, Oe, Xt, lf, E0], v0), Ik = A([ki, _k], (e, t) => e != null && e.coordinate ? e.coordinate : t), jk = A([ki], (e) => {
  var t;
  return (t = e == null ? void 0 : e.active) !== null && t !== void 0 ? t : !1;
}), Ck = A([E0, Wt, mt, dn, A0, h0, uf], m0), kk = A([Ck], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(r), !0).forEach(function(n) {
      Tk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tk(e, t, r) {
  return (t = Mk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mk(e) {
  var t = Dk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Dk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nk = () => N(Se), $k = () => {
  var e = Nk(), t = N(Xt), r = N(P0);
  return on(!e || !r ? void 0 : vh(vh({}, e), {}, {
    scale: r
  }), t);
};
function ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      Lk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lk(e, t, r) {
  return (t = Rk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rk(e) {
  var t = zk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bk = (e, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.relativeY
      };
    if (e === "vertical")
      return {
        x: n.relativeX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, Fk = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return Vr(Vr(Vr({}, n), ge(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var u = i.coordinate, {
      angle: l
    } = n;
    return Vr(Vr(Vr({}, n), ge(n.cx, n.cy, u, l)), {}, {
      angle: l,
      radius: u
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function Kk(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var _0 = (e, t, r, n, i) => {
  var a, o = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var u = 0; u < o; u++) {
      var l, c, f, s, d, p = u > 0 ? (l = r[u - 1]) === null || l === void 0 ? void 0 : l.coordinate : (c = r[o - 1]) === null || c === void 0 ? void 0 : c.coordinate, h = (f = r[u]) === null || f === void 0 ? void 0 : f.coordinate, m = u >= o - 1 ? (s = r[0]) === null || s === void 0 ? void 0 : s.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, g = void 0;
      if (!(p == null || h == null || m == null))
        if (_e(h - p) !== _e(m - h)) {
          var y = [];
          if (_e(m - h) === _e(i[1] - i[0])) {
            g = m;
            var b = h + i[1] - i[0];
            y[0] = Math.min(b, (b + p) / 2), y[1] = Math.max(b, (b + p) / 2);
          } else {
            g = p;
            var x = m + i[1] - i[0];
            y[0] = Math.min(h, (x + h) / 2), y[1] = Math.max(h, (x + h) / 2);
          }
          var w = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
          if (e > w[0] && e <= w[1] || e >= y[0] && e <= y[1]) {
            var O;
            return (O = r[u]) === null || O === void 0 ? void 0 : O.index;
          }
        } else {
          var P = Math.min(p, m), S = Math.max(p, m);
          if (e > (P + h) / 2 && e <= (S + h) / 2) {
            var E;
            return (E = r[u]) === null || E === void 0 ? void 0 : E.index;
          }
        }
    }
  else if (t)
    for (var I = 0; I < o; I++) {
      var j = t[I];
      if (j != null) {
        var C = t[I + 1], _ = t[I - 1];
        if (I === 0 && C != null && e <= (j.coordinate + C.coordinate) / 2 || I === o - 1 && _ != null && e > (j.coordinate + _.coordinate) / 2 || I > 0 && I < o - 1 && _ != null && C != null && e > (j.coordinate + _.coordinate) / 2 && e <= (j.coordinate + C.coordinate) / 2)
          return j.index;
      }
    }
  return -1;
}, Wk = () => N(us), sf = (e, t) => t, I0 = (e, t, r) => r, ff = (e, t, r, n) => n, qk = A(Xt, (e) => oo(e, (t) => t.coordinate)), df = A([En, sf, I0, ff], d0), vf = A([df, Dr, dn, vn], Hn), Uk = (e, t, r) => {
  if (t != null) {
    var n = En(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, j0 = A([En, sf, I0, ff], p0), Ga = A([Ut, Ht, J, Oe, Xt, ff, j0], v0), Hk = A([df, Ga], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), C0 = A([Xt, vf], u0), Gk = A([j0, vf, mt, dn, C0, h0, sf], m0), Vk = A([df, vf], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), Yk = (e, t, r, n, i, a, o) => {
  if (!(!e || !r || !n || !i) && Kk(e, o)) {
    var u = N1(e, t), l = _0(u, a, i, r, n), c = Bk(t, i, l, e);
    return {
      activeIndex: String(l),
      activeCoordinate: c
    };
  }
}, Xk = (e, t, r, n, i, a, o) => {
  if (!(!e || !n || !i || !a || !r)) {
    var u = wE(e, r);
    if (u) {
      var l = $1(u, t), c = _0(l, o, a, n, i), f = Fk(t, a, c, u);
      return {
        activeIndex: String(c),
        activeCoordinate: f
      };
    }
  }
}, Zk = (e, t, r, n, i, a, o, u) => {
  if (!(!e || !t || !n || !i || !a))
    return t === "horizontal" || t === "vertical" ? Yk(e, t, n, i, a, o, u) : Xk(e, t, r, n, i, a, o);
}, Jk = A((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), Qk = A((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(pe)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: VE
  }
});
function hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hh(Object(r), !0).forEach(function(n) {
      eT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eT(e, t, r) {
  return (t = tT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tT(e) {
  var t = rT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nT = {}, iT = {
  zIndexMap: Object.values(pe).reduce((e, t) => mh(mh({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), nT)
}, aT = new Set(Object.values(pe));
function oT(e) {
  return aT.has(e);
}
var k0 = $e({
  name: "zIndex",
  initialState: iT,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: ae()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !oT(r) && delete e.zIndexMap[r]);
      },
      prepare: ae()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: ae()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: ae()
    }
  }
}), {
  registerZIndexPortal: uT,
  unregisterZIndexPortal: Ol,
  registerZIndexPortalElement: lT,
  unregisterZIndexPortalElement: cT
} = k0.actions, sT = k0.reducer;
function Le(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = vA(), i = n && t !== void 0 && t !== 0, a = Ie(), o = v.useRef(void 0), u = v.useRef(/* @__PURE__ */ new Set()), l = te(), c = N((s) => Jk(s, t, a));
  if (v.useLayoutEffect(() => {
    if (!i) {
      var s = u.current;
      s.forEach((p) => {
        l(Ol({
          zIndex: p
        }));
      }), s.clear(), o.current = void 0;
      return;
    }
    if (u.current.has(t) || (l(uT({
      zIndex: t
    })), u.current.add(t)), c) {
      o.current = c;
      var d = u.current;
      d.forEach((p) => {
        p !== t && (l(Ol({
          zIndex: p
        })), d.delete(p));
      });
    }
  }, [l, t, i, c]), v.useLayoutEffect(() => {
    var s = u.current;
    return () => {
      s.forEach((d) => {
        l(Ol({
          zIndex: d
        }));
      }), s.clear();
    };
  }, [l]), !i)
    return r;
  var f = c ?? o.current;
  return f ? /* @__PURE__ */ Tc.createPortal(r, f) : null;
}
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gc.apply(null, arguments);
}
function yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(r), !0).forEach(function(n) {
      fT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fT(e, t, r) {
  return (t = dT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dT(e) {
  var t = vT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pT(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ v.isValidElement(t) ? /* @__PURE__ */ v.cloneElement(t, n) : /* @__PURE__ */ v.createElement(r, n);
}
function hT(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: a,
    tooltipAxisBandSize: o,
    layout: u,
    cursor: l,
    tooltipEventType: c,
    chartName: f
  } = e, s = r, d = n, p = i;
  if (!l || !s || f !== "ScatterChart" && c !== "axis")
    return null;
  var h, m, g;
  if (f === "ScatterChart")
    h = s, m = $S, g = pe.cursorLine;
  else if (f === "BarChart")
    h = LS(u, s, a, o), m = wg, g = pe.cursorRectangle;
  else if (u === "radial" && ry(s)) {
    var {
      cx: y,
      cy: b,
      radius: x,
      startAngle: w,
      endAngle: O
    } = Og(s);
    h = {
      cx: y,
      cy: b,
      startAngle: w,
      endAngle: O,
      innerRadius: x,
      outerRadius: x
    }, m = Sg, g = pe.cursorLine;
  } else
    h = {
      points: SE(u, s, a)
    }, m = Ao, g = pe.cursorLine;
  var P = typeof l == "object" && "className" in l ? l.className : void 0, S = Gi(Gi(Gi(Gi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, a), h), ir(l)), {}, {
    payload: d,
    payloadIndex: p,
    className: K("recharts-tooltip-cursor", P)
  });
  return /* @__PURE__ */ v.createElement(Le, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : g
  }, /* @__PURE__ */ v.createElement(pT, {
    cursor: l,
    cursorComp: m,
    cursorProps: S
  }));
}
function mT(e) {
  var t = $k(), r = rg(), n = Rr(), i = Wk();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ v.createElement(hT, gc({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var T0 = /* @__PURE__ */ v.createContext(null), yT = () => v.useContext(T0), li = new Yx(), bc = "recharts.syncEvent.tooltip", gh = "recharts.syncEvent.brush", Fo = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!St(r))
      return e[r];
  }
}, gT = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, M0 = $e({
  name: "options",
  initialState: gT,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), bT = M0.reducer, {
  createEventEmitter: xT
} = M0.actions;
function wT(e) {
  return e.tooltip.syncInteraction;
}
var PT = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, D0 = $e({
  name: "chartData",
  initialState: PT,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: bh,
  setDataStartEndIndexes: OT,
  setComputedData: Wz
} = D0.actions, AT = D0.reducer, ST = ["x", "y"];
function xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xh(Object(r), !0).forEach(function(n) {
      ET(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ET(e, t, r) {
  return (t = _T(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _T(e) {
  var t = IT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jT(e, t) {
  if (e == null) return {};
  var r, n, i = CT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function CT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function kT() {
  var e = N(ls), t = N(cs), r = te(), n = N(Fg), i = N(Xt), a = Rr(), o = mi(), u = N((l) => l.rootProps.className);
  v.useEffect(() => {
    if (e == null)
      return Lr;
    var l = (c, f, s) => {
      if (t !== s && e === c) {
        if (f.payload.active === !1) {
          r(qn({
            active: !1,
            coordinate: void 0,
            dataKey: void 0,
            index: null,
            label: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0
          }));
          return;
        }
        if (n === "index") {
          var d;
          if (o && f !== null && f !== void 0 && (d = f.payload) !== null && d !== void 0 && d.coordinate && f.payload.sourceViewBox) {
            var p = f.payload.coordinate, {
              x: h,
              y: m
            } = p, g = jT(p, ST), {
              x: y,
              y: b,
              width: x,
              height: w
            } = f.payload.sourceViewBox, O = Yr(Yr({}, g), {}, {
              x: o.x + (x ? (h - y) / x : 0) * o.width,
              y: o.y + (w ? (m - b) / w : 0) * o.height
            });
            r(Yr(Yr({}, f), {}, {
              payload: Yr(Yr({}, f.payload), {}, {
                coordinate: O
              })
            }));
          } else
            r(f);
          return;
        }
        if (i != null) {
          var P;
          if (typeof n == "function") {
            var S = {
              activeTooltipIndex: f.payload.index == null ? void 0 : Number(f.payload.index),
              isTooltipActive: f.payload.active,
              activeIndex: f.payload.index == null ? void 0 : Number(f.payload.index),
              activeLabel: f.payload.label,
              activeDataKey: f.payload.dataKey,
              activeCoordinate: f.payload.coordinate
            }, E = n(i, S);
            P = i[E];
          } else n === "value" && (P = i.find((W) => String(W.value) === f.payload.label));
          var {
            coordinate: I
          } = f.payload;
          if (I == null || o == null) {
            r(qn({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          if (P == null) {
            r(qn({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: f.payload.sourceViewBox,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: j,
            y: C
          } = I, _ = Math.min(j, o.x + o.width), z = Math.min(C, o.y + o.height), M = {
            x: a === "horizontal" ? P.coordinate : _,
            y: a === "horizontal" ? z : P.coordinate
          }, R = qn({
            active: f.payload.active,
            coordinate: M,
            dataKey: f.payload.dataKey,
            index: String(P.index),
            label: f.payload.label,
            sourceViewBox: f.payload.sourceViewBox,
            graphicalItemId: f.payload.graphicalItemId
          });
          r(R);
        }
      }
    };
    return li.on(bc, l), () => {
      li.off(bc, l);
    };
  }, [u, r, t, e, n, i, a, o]);
}
function TT() {
  var e = N(ls), t = N(cs), r = te();
  v.useEffect(() => {
    if (e == null)
      return Lr;
    var n = (i, a, o) => {
      t !== o && e === i && r(OT(a));
    };
    return li.on(gh, n), () => {
      li.off(gh, n);
    };
  }, [r, t, e]);
}
function MT() {
  var e = te();
  v.useEffect(() => {
    e(xT());
  }, [e]), kT(), TT();
}
function DT(e, t, r, n, i, a) {
  var o = N((h) => Uk(h, e, t)), u = N(S0), l = N(cs), c = N(ls), f = N(Fg), s = N(wT), d = (s == null ? void 0 : s.sourceViewBox) != null, p = mi();
  v.useEffect(() => {
    if (!d && c != null && l != null) {
      var h = qn({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: p,
        graphicalItemId: u
      });
      li.emit(bc, c, h, l);
    }
  }, [d, r, o, u, i, n, l, c, f, a, p]);
}
function wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ph(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wh(Object(r), !0).forEach(function(n) {
      NT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NT(e, t, r) {
  return (t = $T(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $T(e) {
  var t = LT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RT(e) {
  return e.dataKey;
}
function zT(e, t) {
  return /* @__PURE__ */ v.isValidElement(e) ? /* @__PURE__ */ v.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ v.createElement(e, t) : /* @__PURE__ */ v.createElement(fS, t);
}
var Oh = [], BT = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function Vi(e) {
  var t, r, n = he(e, BT), {
    active: i,
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    content: l,
    filterNull: c,
    isAnimationActive: f,
    offset: s,
    payloadUniqBy: d,
    position: p,
    reverseDirection: h,
    useTranslate3d: m,
    wrapperStyle: g,
    cursor: y,
    shared: b,
    trigger: x,
    defaultIndex: w,
    portal: O,
    axisId: P
  } = n, S = te(), E = typeof w == "number" ? String(w) : w;
  v.useEffect(() => {
    S(NC({
      shared: b,
      trigger: x,
      axisId: P,
      active: i,
      defaultIndex: E
    }));
  }, [S, b, x, P, i, E]);
  var I = mi(), j = mg(), C = jC(b), {
    activeIndex: _,
    isActive: z
  } = (t = N((qe) => Vk(qe, C, x, E))) !== null && t !== void 0 ? t : {}, M = N((qe) => Gk(qe, C, x, E)), R = N((qe) => C0(qe, C, x, E)), W = N((qe) => Hk(qe, C, x, E)), F = M, Y = yT(), B = (r = i ?? z) !== null && r !== void 0 ? r : !1, [G, ye] = gy([F, B]), ue = C === "axis" ? R : void 0;
  DT(C, x, W, ue, _, B);
  var Ye = O ?? Y;
  if (Ye == null || I == null || C == null)
    return null;
  var We = F ?? Oh;
  B || (We = Oh), c && We.length && (We = vy(We.filter((qe) => qe.value != null && (qe.hide !== !0 || n.includeHidden)), d, RT));
  var Tt = We.length > 0, In = Ph(Ph({}, n), {}, {
    payload: We,
    label: ue,
    active: B,
    activeIndex: _,
    coordinate: W,
    accessibilityLayer: j
  }), jn = /* @__PURE__ */ v.createElement(PS, {
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    isAnimationActive: f,
    active: B,
    coordinate: W,
    hasPayload: Tt,
    offset: s,
    position: p,
    reverseDirection: h,
    useTranslate3d: m,
    viewBox: I,
    wrapperStyle: g,
    lastBoundingBox: G,
    innerRef: ye,
    hasPortalFromProps: !!O
  }, zT(l, In));
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ Tc.createPortal(jn, Ye), B && /* @__PURE__ */ v.createElement(mT, {
    cursor: y,
    tooltipEventType: C,
    coordinate: W,
    payload: We,
    index: _
  }));
}
var _n = (e) => null;
_n.displayName = "Cell";
function FT(e, t, r) {
  return (t = KT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KT(e) {
  var t = WT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class qT {
  constructor(t) {
    FT(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function UT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      HT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HT(e, t, r) {
  return (t = GT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GT(e) {
  var t = VT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YT = {
  cacheSize: 2e3,
  enableCache: !0
}, N0 = UT({}, YT), Sh = new qT(N0.cacheSize), XT = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Eh = "recharts_measurement_span";
function ZT(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var _h = (e, t) => {
  try {
    var r = document.getElementById(Eh);
    r || (r = document.createElement("span"), r.setAttribute("id", Eh), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, XT, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Gn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || bi.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!N0.enableCache)
    return _h(t, r);
  var n = ZT(t, r), i = Sh.get(n);
  if (i)
    return i;
  var a = _h(t, r);
  return Sh.set(n, a), a;
}, $0;
function JT(e, t, r) {
  return (t = QT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QT(e) {
  var t = eM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ih = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, jh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, tM = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, rM = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, nM = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, iM = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function aM(e) {
  return iM.includes(e);
}
var en = "NaN";
function oM(e, t) {
  return e * nM[t];
}
class Te {
  static parse(t) {
    var r, [, n, i] = (r = rM.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Te.NaN : new Te(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, St(t) && (this.unit = ""), r !== "" && !tM.test(r) && (this.num = NaN, this.unit = ""), aM(r) && (this.num = oM(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Te(NaN, "") : new Te(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Te(NaN, "") : new Te(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Te(NaN, "") : new Te(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Te(NaN, "") : new Te(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return St(this.num);
  }
}
$0 = Te;
JT(Te, "NaN", new $0(NaN, ""));
function L0(e) {
  if (e == null || e.includes(en))
    return en;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = Ih.exec(t)) !== null && r !== void 0 ? r : [], o = Te.parse(n ?? ""), u = Te.parse(a ?? ""), l = i === "*" ? o.multiply(u) : o.divide(u);
    if (l.isNaN())
      return en;
    t = t.replace(Ih, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, f, s, d] = (c = jh.exec(t)) !== null && c !== void 0 ? c : [], p = Te.parse(f ?? ""), h = Te.parse(d ?? ""), m = s === "+" ? p.add(h) : p.subtract(h);
    if (m.isNaN())
      return en;
    t = t.replace(jh, m.toString());
  }
  return t;
}
var Ch = /\(([^()]*)\)/;
function uM(e) {
  for (var t = e, r; (r = Ch.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Ch, L0(n));
  }
  return t;
}
function lM(e) {
  var t = e.replace(/\s+/g, "");
  return t = uM(t), t = L0(t), t;
}
function cM(e) {
  try {
    return lM(e);
  } catch {
    return en;
  }
}
function Al(e) {
  var t = cM(e.slice(5, -1));
  return t === en ? "" : t;
}
var sM = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], fM = ["dx", "dy", "angle", "className", "breakAll"];
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xc.apply(null, arguments);
}
function kh(e, t) {
  if (e == null) return {};
  var r, n, i = dM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var R0 = /[ \f\n\r\t\v\u2028\u2029]+/, z0 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Q(t) || (r ? i = t.toString().split("") : i = t.toString().split(R0));
    var a = i.map((u) => ({
      word: u,
      width: Gn(u, n).width
    })), o = r ? 0 : Gn(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
};
function B0(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function vM(e) {
  return Q(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var F0 = (e, t, r, n) => e.reduce((i, a) => {
  var {
    word: o,
    width: u
  } = a, l = i[i.length - 1];
  if (l && u != null && (t == null || n || l.width + u + r < Number(t)))
    l.words.push(o), l.width += u + r;
  else {
    var c = {
      words: [o],
      width: u
    };
    i.push(c);
  }
  return i;
}, []), K0 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), pM = "…", Th = (e, t, r, n, i, a, o, u) => {
  var l = e.slice(0, t), c = z0({
    breakAll: r,
    style: n,
    children: l + pM
  });
  if (!c)
    return [!1, []];
  var f = F0(c.wordsWithComputedWidth, a, o, u), s = f.length > i || K0(f).width > Number(a);
  return [s, f];
}, hM = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: u,
    breakAll: l
  } = e, c = D(a), f = String(o), s = F0(t, n, r, i);
  if (!c || i)
    return s;
  var d = s.length > a || K0(s).width > Number(n);
  if (!d)
    return s;
  for (var p = 0, h = f.length - 1, m = 0, g; p <= h && m <= f.length - 1; ) {
    var y = Math.floor((p + h) / 2), b = y - 1, [x, w] = Th(f, b, l, u, a, n, r, i), [O] = Th(f, y, l, u, a, n, r, i);
    if (!x && !O && (p = y + 1), x && O && (h = y - 1), !x && O) {
      g = w;
      break;
    }
    m++;
  }
  return g || s;
}, Mh = (e) => {
  var t = Q(e) ? [] : e.toString().split(R0);
  return [{
    words: t,
    width: void 0
  }];
}, mM = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !bi.isSsr) {
    var u, l, c = z0({
      breakAll: a,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: f,
        spaceWidth: s
      } = c;
      u = f, l = s;
    } else
      return Mh(n);
    return hM({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, u, l, t, !!r);
  }
  return Mh(n);
}, W0 = "#808080", yM = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: W0,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, Ko = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r = he(e, yM), {
    x: n,
    y: i,
    lineHeight: a,
    capHeight: o,
    fill: u,
    scaleToFit: l,
    textAnchor: c,
    verticalAnchor: f
  } = r, s = kh(r, sM), d = v.useMemo(() => mM({
    breakAll: s.breakAll,
    children: s.children,
    maxLines: s.maxLines,
    scaleToFit: l,
    style: s.style,
    width: s.width
  }), [s.breakAll, s.children, s.maxLines, l, s.style, s.width]), {
    dx: p,
    dy: h,
    angle: m,
    className: g,
    breakAll: y
  } = s, b = kh(s, fM);
  if (!Et(n) || !Et(i) || d.length === 0)
    return null;
  var x = Number(n) + (D(p) ? p : 0), w = Number(i) + (D(h) ? h : 0);
  if (!H(x) || !H(w))
    return null;
  var O;
  switch (f) {
    case "start":
      O = Al("calc(".concat(o, ")"));
      break;
    case "middle":
      O = Al("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      O = Al("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var P = [], S = d[0];
  if (l && S != null) {
    var E = S.width, {
      width: I
    } = s;
    P.push("scale(".concat(D(I) && D(E) ? I / E : 1, ")"));
  }
  return m && P.push("rotate(".concat(m, ", ").concat(x, ", ").concat(w, ")")), P.length && (b.transform = P.join(" ")), /* @__PURE__ */ v.createElement("text", xc({}, Fe(b), {
    ref: t,
    x,
    y: w,
    className: K("recharts-text", g),
    textAnchor: c,
    fill: u.includes("url") ? W0 : u
  }), d.map((j, C) => {
    var _ = j.words.join(y ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ v.createElement("tspan", {
        x,
        dy: C === 0 ? O : a,
        key: "".concat(_, "-").concat(C)
      }, _)
    );
  }));
});
Ko.displayName = "Text";
function Dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(r), !0).forEach(function(n) {
      gM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gM(e, t, r) {
  return (t = bM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bM(e) {
  var t = xM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wM = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: a,
    y: o,
    height: u,
    upperWidth: l,
    lowerWidth: c
  } = Qc(t), f = a, s = a + (l - c) / 2, d = (f + s) / 2, p = (l + c) / 2, h = f + l / 2, m = u >= 0 ? 1 : -1, g = m * n, y = m > 0 ? "end" : "start", b = m > 0 ? "start" : "end", x = l >= 0 ? 1 : -1, w = x * n, O = x > 0 ? "end" : "start", P = x > 0 ? "start" : "end", S = i;
  if (r === "top") {
    var E = {
      x: f + l / 2,
      y: o - g,
      horizontalAnchor: "middle",
      verticalAnchor: y
    };
    return S && (E.height = Math.max(o - S.y, 0), E.width = l), E;
  }
  if (r === "bottom") {
    var I = {
      x: s + c / 2,
      y: o + u + g,
      horizontalAnchor: "middle",
      verticalAnchor: b
    };
    return S && (I.height = Math.max(S.y + S.height - (o + u), 0), I.width = c), I;
  }
  if (r === "left") {
    var j = {
      x: d - w,
      y: o + u / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return S && (j.width = Math.max(j.x - S.x, 0), j.height = u), j;
  }
  if (r === "right") {
    var C = {
      x: d + p + w,
      y: o + u / 2,
      horizontalAnchor: P,
      verticalAnchor: "middle"
    };
    return S && (C.width = Math.max(S.x + S.width - C.x, 0), C.height = u), C;
  }
  var _ = S ? {
    width: p,
    height: u
  } : {};
  return r === "insideLeft" ? bt({
    x: d + w,
    y: o + u / 2,
    horizontalAnchor: P,
    verticalAnchor: "middle"
  }, _) : r === "insideRight" ? bt({
    x: d + p - w,
    y: o + u / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, _) : r === "insideTop" ? bt({
    x: f + l / 2,
    y: o + g,
    horizontalAnchor: "middle",
    verticalAnchor: b
  }, _) : r === "insideBottom" ? bt({
    x: s + c / 2,
    y: o + u - g,
    horizontalAnchor: "middle",
    verticalAnchor: y
  }, _) : r === "insideTopLeft" ? bt({
    x: f + w,
    y: o + g,
    horizontalAnchor: P,
    verticalAnchor: b
  }, _) : r === "insideTopRight" ? bt({
    x: f + l - w,
    y: o + g,
    horizontalAnchor: O,
    verticalAnchor: b
  }, _) : r === "insideBottomLeft" ? bt({
    x: s + w,
    y: o + u - g,
    horizontalAnchor: P,
    verticalAnchor: y
  }, _) : r === "insideBottomRight" ? bt({
    x: s + c - w,
    y: o + u - g,
    horizontalAnchor: O,
    verticalAnchor: y
  }, _) : r && typeof r == "object" && (D(r.x) || jr(r.x)) && (D(r.y) || jr(r.y)) ? bt({
    x: a + Ne(r.x, p),
    y: o + Ne(r.y, u),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, _) : bt({
    x: h,
    y: o + u / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, PM = ["labelRef"], OM = ["content"];
function Nh(e, t) {
  if (e == null) return {};
  var r, n, i = AM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function AM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $h(Object(r), !0).forEach(function(n) {
      SM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SM(e, t, r) {
  return (t = EM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EM(e) {
  var t = _M(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _M(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dt.apply(null, arguments);
}
var q0 = /* @__PURE__ */ v.createContext(null), IM = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o,
    children: u
  } = e, l = v.useMemo(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o
  }), [t, r, n, i, a, o]);
  return /* @__PURE__ */ v.createElement(q0.Provider, {
    value: l
  }, u);
}, U0 = () => {
  var e = v.useContext(q0), t = mi();
  return e || (t ? Qc(t) : void 0);
}, jM = /* @__PURE__ */ v.createContext(null), CM = () => {
  var e = v.useContext(jM), t = N(Hg);
  return e || t;
}, kM = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Q(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, pf = (e) => e != null && typeof e == "function", TM = (e, t) => {
  var r = _e(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, MM = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: u,
    cy: l,
    innerRadius: c,
    outerRadius: f,
    startAngle: s,
    endAngle: d,
    clockWise: p
  } = i, h = (c + f) / 2, m = TM(s, d), g = m >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = s + g * a, b = p;
      break;
    case "insideEnd":
      y = d - g * a, b = !p;
      break;
    case "end":
      y = d + g * a, b = p;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = m <= 0 ? b : !b;
  var x = ge(u, l, h, y), w = ge(u, l, h, y + (b ? 1 : -1) * 359), O = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), P = Q(e.id) ? Yn("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ v.createElement("text", Dt({}, n, {
    dominantBaseline: "central",
    className: K("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ v.createElement("defs", null, /* @__PURE__ */ v.createElement("path", {
    id: P,
    d: O
  })), /* @__PURE__ */ v.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, DM = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: u,
    endAngle: l
  } = e, c = (u + l) / 2;
  if (r === "outside") {
    var {
      x: f,
      y: s
    } = ge(n, i, o + t, c);
    return {
      x: f,
      y: s,
      textAnchor: f >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: p,
    y: h
  } = ge(n, i, d, c);
  return {
    x: p,
    y: h,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, ta = (e) => e != null && "cx" in e && D(e.cx), NM = {
  angle: 0,
  offset: 5,
  zIndex: pe.label,
  position: "middle",
  textBreakAll: !1
};
function $M(e) {
  if (!ta(e))
    return e;
  var {
    cx: t,
    cy: r,
    outerRadius: n
  } = e, i = n * 2;
  return {
    x: t - n,
    y: r - n,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i
  };
}
function Qt(e) {
  var t = he(e, NM), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: a,
    children: o,
    content: u,
    className: l = "",
    textBreakAll: c,
    labelRef: f
  } = t, s = CM(), d = U0(), p = i === "center" ? d : s ?? d, h, m, g;
  r == null ? h = p : ta(r) ? h = r : h = Qc(r);
  var y = $M(h);
  if (!h || Q(a) && Q(o) && !/* @__PURE__ */ v.isValidElement(u) && typeof u != "function")
    return null;
  var b = Un(Un({}, t), {}, {
    viewBox: h
  });
  if (/* @__PURE__ */ v.isValidElement(u)) {
    var {
      labelRef: x
    } = b, w = Nh(b, PM);
    return /* @__PURE__ */ v.cloneElement(u, w);
  }
  if (typeof u == "function") {
    var {
      content: O
    } = b, P = Nh(b, OM);
    if (m = /* @__PURE__ */ v.createElement(u, P), /* @__PURE__ */ v.isValidElement(m))
      return m;
  } else
    m = kM(t);
  var S = Fe(t);
  if (ta(h)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return MM(t, i, m, S, h);
    g = DM(h, t.offset, t.position);
  } else {
    if (!y)
      return null;
    var E = wM({
      viewBox: y,
      position: i,
      offset: t.offset,
      parentViewBox: ta(n) ? void 0 : n
    });
    g = Un(Un({
      x: E.x,
      y: E.y,
      textAnchor: E.horizontalAnchor,
      verticalAnchor: E.verticalAnchor
    }, E.width !== void 0 ? {
      width: E.width
    } : {}), E.height !== void 0 ? {
      height: E.height
    } : {});
  }
  return /* @__PURE__ */ v.createElement(Le, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ v.createElement(Ko, Dt({
    ref: f,
    className: K("recharts-label", l)
  }, S, g, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: B0(S.textAnchor) ? S.textAnchor : g.textAnchor,
    breakAll: c
  }), m));
}
Qt.displayName = "Label";
var LM = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ v.createElement(Qt, Dt({
    key: "label-implicit"
  }, n)) : Et(e) ? /* @__PURE__ */ v.createElement(Qt, Dt({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ v.isValidElement(e) ? e.type === Qt ? /* @__PURE__ */ v.cloneElement(e, Un({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ v.createElement(Qt, Dt({
    key: "label-implicit",
    content: e
  }, n)) : pf(e) ? /* @__PURE__ */ v.createElement(Qt, Dt({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ v.createElement(Qt, Dt({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function RM(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = U0();
  return LM(t, n, r) || null;
}
var zM = ["valueAccessor"], BM = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Va.apply(null, arguments);
}
function Lh(e, t) {
  if (e == null) return {};
  var r, n, i = FM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function FM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var KM = (e) => {
  var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
  if (vM(t))
    return t;
}, H0 = /* @__PURE__ */ v.createContext(void 0), hf = H0.Provider, G0 = /* @__PURE__ */ v.createContext(void 0), WM = G0.Provider;
function qM() {
  return v.useContext(H0);
}
function UM() {
  return v.useContext(G0);
}
function ra(e) {
  var {
    valueAccessor: t = KM
  } = e, r = Lh(e, zM), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o,
    zIndex: u
  } = r, l = Lh(r, BM), c = qM(), f = UM(), s = c || f;
  return !s || !s.length ? null : /* @__PURE__ */ v.createElement(Le, {
    zIndex: u ?? pe.label
  }, /* @__PURE__ */ v.createElement(se, {
    className: "recharts-label-list"
  }, s.map((d, p) => {
    var h, m = Q(n) ? t(d, p) : V(d.payload, n), g = Q(a) ? {} : {
      id: "".concat(a, "-").concat(p)
    };
    return /* @__PURE__ */ v.createElement(Qt, Va({
      key: "label-".concat(p)
    }, Fe(d), l, g, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (h = r.fill) !== null && h !== void 0 ? h : d.fill,
      parentViewBox: d.parentViewBox,
      value: m,
      textBreakAll: o,
      viewBox: d.viewBox,
      index: p,
      zIndex: 0
    }));
  })));
}
ra.displayName = "LabelList";
function Wo(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ v.createElement(ra, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ v.isValidElement(t) || pf(t) ? /* @__PURE__ */ v.createElement(ra, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ v.createElement(ra, Va({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function wc() {
  return wc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wc.apply(null, arguments);
}
var V0 = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, a = K("recharts-dot", i);
  return D(t) && D(r) && D(n) ? /* @__PURE__ */ v.createElement("circle", wc({}, Be(e), Fc(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, Y0 = (e) => e.graphicalItems.polarItems, HM = A([fe, Pi], Bs), qo = A([Y0, me, HM], Fs), GM = A([qo], Ks), Uo = A([GM, xi], Ws), VM = A([Uo, me, qo], Rb);
A([Uo, me, qo], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((i) => {
  var a, o = V(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return {
    value: o,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : (t == null ? void 0 : t.dataKey) != null ? e.map((n) => ({
  value: V(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var Rh = () => {
}, YM = A([Uo, me, qo, Lo, fe, ME], Vs), XM = A([me, Hs, Gs, Rh, YM, Rh, J, fe], Ys), X0 = A([me, J, Uo, VM, wi, fe, XM], Xs), ZM = A([X0, On, sr], Js), JM = A([me, X0, ZM, fe], ef);
A([sr, JM], Vg);
var QM = {
  radiusAxis: {},
  angleAxis: {}
}, Z0 = $e({
  name: "polarAxis",
  initialState: QM,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: qz,
  removeRadiusAxis: Uz,
  addAngleAxis: Hz,
  removeAngleAxis: Gz
} = Z0.actions, eD = Z0.reducer;
function J0(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
function zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zh(Object(r), !0).forEach(function(n) {
      tD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tD(e, t, r) {
  return (t = rD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rD(e) {
  var t = nD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iD = (e, t) => t, mf = A([Y0, iD], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), aD = [], yf = (e, t, r) => (r == null ? void 0 : r.length) === 0 ? aD : r, Q0 = A([xi, mf, yf], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var i;
    if ((t == null ? void 0 : t.data) != null && t.data.length > 0 ? i = t.data : i = n, (!i || !i.length) && r != null && (i = r.map((a) => Bh(Bh({}, t.presentationProps), a.props))), i != null)
      return i;
  }
}), oD = A([Q0, mf, yf], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, i) => {
      var a, o = V(n, t.nameKey, t.name), u;
      return r != null && (a = r[i]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? u = r[i].props.fill : typeof n == "object" && n != null && "fill" in n ? u = n.fill : u = t.fill, {
        value: ur(o, t.dataKey),
        color: u,
        // @ts-expect-error Legend payload.payload says it wants objects but our data can be unknown
        payload: n,
        type: t.legendType
      };
    });
}), uD = A([Q0, mf, yf, Oe], (e, t, r, n) => {
  if (!(t == null || e == null))
    return lN({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Fh = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Kh = null, Sl = null, ex = (e) => {
  if (e === Kh && Array.isArray(Sl))
    return Sl;
  var t = [];
  return v.Children.forEach(e, (r) => {
    Q(r) || (Xx.isFragment(r) ? t = t.concat(ex(r.props.children)) : t.push(r));
  }), Sl = t, Kh = e, t;
};
function Ho(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Fh(i)) : n = [Fh(t)], ex(e).forEach((i) => {
    var a = Ir(i, "type.displayName") || Ir(i, "type.name");
    a && n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
var tx = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, El = {}, Wh;
function lD() {
  return Wh || (Wh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      var i;
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const a = r[Symbol.toStringTag];
        return a == null || !((i = Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)) != null && i.writable) ? !1 : r.toString() === `[object ${a}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(El)), El;
}
var _l, qh;
function cD() {
  return qh || (qh = 1, _l = lD().isPlainObject), _l;
}
var sD = /* @__PURE__ */ cD();
const fD = /* @__PURE__ */ pn(sD);
var Uh, Hh, Gh, Vh, Yh;
function Xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      dD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dD(e, t, r) {
  return (t = vD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vD(e) {
  var t = pD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ya.apply(null, arguments);
}
function zn(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Jh = (e, t, r, n, i) => {
  var a = r - n, o;
  return o = ve(Uh || (Uh = zn(["M ", ",", ""])), e, t), o += ve(Hh || (Hh = zn(["L ", ",", ""])), e + r, t), o += ve(Gh || (Gh = zn(["L ", ",", ""])), e + r - a / 2, t + i), o += ve(Vh || (Vh = zn(["L ", ",", ""])), e + r - a / 2 - n, t + i), o += ve(Yh || (Yh = zn(["L ", ",", " Z"])), e, t), o;
}, hD = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, mD = (e) => {
  var t = he(e, hD), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: a,
    height: o,
    className: u
  } = t, {
    animationEasing: l,
    animationDuration: c,
    animationBegin: f,
    isUpdateAnimationActive: s
  } = t, d = v.useRef(null), [p, h] = v.useState(-1), m = v.useRef(i), g = v.useRef(a), y = v.useRef(o), b = v.useRef(r), x = v.useRef(n), w = yn(e, "trapezoid-");
  if (v.useEffect(() => {
    if (d.current && d.current.getTotalLength)
      try {
        var M = d.current.getTotalLength();
        M && h(M);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0)
    return null;
  var O = K("recharts-trapezoid", u);
  if (!s)
    return /* @__PURE__ */ v.createElement("g", null, /* @__PURE__ */ v.createElement("path", Ya({}, Fe(t), {
      className: O,
      d: Jh(r, n, i, a, o)
    })));
  var P = m.current, S = g.current, E = y.current, I = b.current, j = x.current, C = "0px ".concat(p === -1 ? 1 : p, "px"), _ = "".concat(p, "px ").concat(p, "px"), z = yg(["strokeDasharray"], c, l);
  return /* @__PURE__ */ v.createElement(mn, {
    animationId: w,
    key: w,
    canBegin: p > 0,
    duration: c,
    easing: l,
    isActive: s,
    begin: f
  }, (M) => {
    var R = ee(P, i, M), W = ee(S, a, M), F = ee(E, o, M), Y = ee(I, r, M), B = ee(j, n, M);
    d.current && (m.current = R, g.current = W, y.current = F, b.current = Y, x.current = B);
    var G = M > 0 ? {
      transition: z,
      strokeDasharray: _
    } : {
      strokeDasharray: C
    };
    return /* @__PURE__ */ v.createElement("path", Ya({}, Fe(t), {
      className: O,
      d: Jh(Y, B, R, W, F),
      ref: d,
      style: Zh(Zh({}, G), t.style)
    }));
  });
}, yD = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function gD(e, t) {
  if (e == null) return {};
  var r, n, i = bD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function bD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      xD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xD(e, t, r) {
  return (t = wD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wD(e) {
  var t = PD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OD(e, t) {
  return Xa(Xa({}, t), e);
}
function AD(e, t) {
  return e === "symbols";
}
function em(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ v.createElement(wg, r);
    case "trapezoid":
      return /* @__PURE__ */ v.createElement(mD, r);
    case "sector":
      return /* @__PURE__ */ v.createElement(Sg, r);
    case "symbols":
      if (AD(t))
        return /* @__PURE__ */ v.createElement(ao, r);
      break;
    case "curve":
      return /* @__PURE__ */ v.createElement(Ao, r);
    default:
      return null;
  }
}
function SD(e) {
  return /* @__PURE__ */ v.isValidElement(e) ? e.props : e;
}
function ci(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, a = gD(e, yD), o;
  if (/* @__PURE__ */ v.isValidElement(t))
    o = /* @__PURE__ */ v.cloneElement(t, Xa(Xa({}, a), SD(t)));
  else if (typeof t == "function")
    o = t(a, a.index);
  else if (fD(t) && typeof t != "boolean") {
    var u = OD(t, a);
    o = /* @__PURE__ */ v.createElement(em, {
      shapeType: r,
      elementProps: u
    });
  } else {
    var l = a;
    o = /* @__PURE__ */ v.createElement(em, {
      shapeType: r,
      elementProps: l
    });
  }
  return a.isActive ? /* @__PURE__ */ v.createElement(se, {
    className: n
  }, o) : /* @__PURE__ */ v.createElement(se, {
    className: i
  }, o);
}
var Go = (e, t, r) => {
  var n = te();
  return (i, a) => (o) => {
    e == null || e(i, a, o), n(c0({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, Vo = (e) => {
  var t = te();
  return (r, n) => (i) => {
    e == null || e(r, n, i), t($C());
  };
}, Yo = (e, t, r) => {
  var n = te();
  return (i, a) => (o) => {
    e == null || e(i, a, o), n(LC({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function Xo(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = te(), n = Ie(), i = v.useRef(null);
  return v.useLayoutEffect(() => {
    n || (i.current === null ? r(TC(t)) : i.current !== t && r(MC({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), v.useLayoutEffect(() => () => {
    i.current && (r(DC(i.current)), i.current = null);
  }, [r]), null;
}
function gf(e) {
  var {
    legendPayload: t
  } = e, r = te(), n = Ie(), i = v.useRef(null);
  return v.useLayoutEffect(() => {
    n || (i.current === null ? r(dg(t)) : i.current !== t && r(vg({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), v.useLayoutEffect(() => () => {
    i.current && (r(pg(i.current)), i.current = null);
  }, [r]), null;
}
function ED(e) {
  var {
    legendPayload: t
  } = e, r = te(), n = N(J), i = v.useRef(null);
  return v.useLayoutEffect(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(dg(t)) : i.current !== t && r(vg({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), v.useLayoutEffect(() => () => {
    i.current && (r(pg(i.current)), i.current = null);
  }, [r]), null;
}
var Il, _D = () => {
  var [e] = v.useState(() => Yn("uid-"));
  return e;
}, ID = (Il = Zx.useId) !== null && Il !== void 0 ? Il : _D;
function jD(e, t) {
  var r = ID();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var CD = /* @__PURE__ */ v.createContext(void 0), Zo = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = jD("recharts-".concat(r), t);
  return /* @__PURE__ */ v.createElement(CD.Provider, {
    value: i
  }, n(i));
}, kD = {
  cartesianItems: [],
  polarItems: []
}, rx = $e({
  name: "graphicalItems",
  initialState: kD,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: ae()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = ut(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: ae()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = ut(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: ae()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: ae()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = ut(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ae()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = ut(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: ae()
    }
  }
}), {
  addCartesianGraphicalItem: TD,
  replaceCartesianGraphicalItem: MD,
  removeCartesianGraphicalItem: DD,
  addPolarGraphicalItem: ND,
  removePolarGraphicalItem: $D,
  replacePolarGraphicalItem: LD
} = rx.actions, RD = rx.reducer, zD = (e) => {
  var t = te(), r = v.useRef(null);
  return v.useLayoutEffect(() => {
    r.current === null ? t(TD(e)) : r.current !== e && t(MD({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), v.useLayoutEffect(() => () => {
    r.current && (t(DD(r.current)), r.current = null);
  }, [t]), null;
}, bf = /* @__PURE__ */ v.memo(zD), BD = (e) => {
  var t = te(), r = v.useRef(null);
  return v.useLayoutEffect(() => {
    r.current === null ? t(ND(e)) : r.current !== e && t(LD({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), v.useLayoutEffect(() => () => {
    r.current && (t($D(r.current)), r.current = null);
  }, [t]), null;
}, FD = /* @__PURE__ */ v.memo(BD), KD = ["key"], WD = ["onMouseEnter", "onClick", "onMouseLeave"], qD = ["id"], UD = ["id"];
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(null, arguments);
}
function Jo(e, t) {
  if (e == null) return {};
  var r, n, i = HD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function HD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tm(Object(r), !0).forEach(function(n) {
      GD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GD(e, t, r) {
  return (t = VD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VD(e) {
  var t = YD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XD(e) {
  var t = v.useMemo(() => Ho(e.children, _n), [e.children]), r = N((n) => oD(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ v.createElement(ED, {
    legendPayload: r
  });
}
function ZD(e) {
  if (!(e == null || typeof e == "boolean" || typeof e == "function")) {
    if (/* @__PURE__ */ v.isValidElement(e)) {
      var t, r = (t = e.props) === null || t === void 0 ? void 0 : t.fill;
      return typeof r == "string" ? r : void 0;
    }
    var {
      fill: n
    } = e;
    return typeof n == "string" ? n : void 0;
  }
}
var JD = /* @__PURE__ */ v.memo((e) => {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: u,
    hide: l,
    tooltipType: c,
    id: f,
    activeShape: s
  } = e, d = ZD(s), p = n.map((m) => {
    var g = m.tooltipPayload;
    return d == null || g == null ? g : g.map((y) => le(le({}, y), {}, {
      color: d,
      fill: d
    }));
  }), h = {
    dataDefinedOnItem: p,
    getPosition: (m) => {
      var g;
      return (g = n[Number(m)]) === null || g === void 0 ? void 0 : g.tooltipPosition;
    },
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: r,
      name: ur(u, t),
      hide: l,
      type: c,
      color: o,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: f
    }
  };
  return /* @__PURE__ */ v.createElement(Xo, {
    tooltipEntrySettings: h
  });
}), QD = (e, t) => e > t ? "start" : e < t ? "end" : "middle", eN = (e, t, r) => Ne(typeof t == "function" ? t(e) : t, r, r * 0.8), tN = (e, t, r) => {
  var {
    top: n,
    left: i,
    width: a,
    height: o
  } = t, u = Pg(a, o), l = i + Ne(e.cx, a, a / 2), c = n + Ne(e.cy, o, o / 2), f = Ne(e.innerRadius, u, 0), s = eN(r, e.outerRadius, u), d = e.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: l,
    cy: c,
    innerRadius: f,
    outerRadius: s,
    maxRadius: d
  };
}, rN = (e, t) => {
  var r = _e(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, nN = (e, t) => {
  if (/* @__PURE__ */ v.isValidElement(e))
    return /* @__PURE__ */ v.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = K("recharts-pie-label-line", typeof e != "boolean" ? e.className : ""), {
    key: n
  } = t, i = Jo(t, KD);
  return /* @__PURE__ */ v.createElement(Ao, ar({}, i, {
    type: "linear",
    className: r
  }));
}, iN = (e, t, r) => {
  if (/* @__PURE__ */ v.isValidElement(e))
    return /* @__PURE__ */ v.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ v.isValidElement(n)))
    return n;
  var i = K("recharts-pie-label-text", J0(e));
  return /* @__PURE__ */ v.createElement(Ko, ar({}, t, {
    alignmentBaseline: "middle",
    className: i
  }), n);
};
function aN(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i,
    labelLine: a,
    dataKey: o
  } = r;
  if (!n || !i || !t)
    return null;
  var u = Be(r), l = ir(i), c = ir(a), f = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, s = t.map((d, p) => {
    var h = (d.startAngle + d.endAngle) / 2, m = ge(d.cx, d.cy, d.outerRadius + f, h), g = le(le(le(le({}, u), d), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, l), {}, {
      index: p,
      textAnchor: QD(m.x, d.cx)
    }, m), y = le(le(le(le({}, u), d), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: d.fill
    }, c), {}, {
      index: p,
      points: [ge(d.cx, d.cy, d.outerRadius, h), m],
      key: "line"
    });
    return /* @__PURE__ */ v.createElement(Le, {
      zIndex: pe.label,
      key: "label-".concat(d.startAngle, "-").concat(d.endAngle, "-").concat(d.midAngle, "-").concat(p)
    }, /* @__PURE__ */ v.createElement(se, null, a && nN(a, y), iN(i, g, V(d, o))));
  });
  return /* @__PURE__ */ v.createElement(se, {
    className: "recharts-pie-labels"
  }, s);
}
function oN(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i
  } = r;
  return typeof i == "object" && i != null && "position" in i ? /* @__PURE__ */ v.createElement(Wo, {
    label: i
  }) : /* @__PURE__ */ v.createElement(aN, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function uN(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: i,
    shape: a,
    id: o
  } = e, u = N(Wt), l = N(cf), c = N(S0), {
    onMouseEnter: f,
    onClick: s,
    onMouseLeave: d
  } = i, p = Jo(i, WD), h = Go(f, i.dataKey, o), m = Vo(d), g = Yo(s, i.dataKey, o);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, t.map((y, b) => {
    if ((y == null ? void 0 : y.startAngle) === 0 && (y == null ? void 0 : y.endAngle) === 0 && t.length !== 1) return null;
    var x = c == null || c === o, w = String(b) === u && (l == null || i.dataKey === l) && x, O = u ? n : null, P = r && w ? r : O, S = le(le({}, y), {}, {
      stroke: y.stroke,
      tabIndex: -1,
      [Jy]: b,
      [Xc]: o
    });
    return /* @__PURE__ */ v.createElement(se, ar({
      key: "sector-".concat(y == null ? void 0 : y.startAngle, "-").concat(y == null ? void 0 : y.endAngle, "-").concat(y.midAngle, "-").concat(b),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, hn(p, y, b), {
      onMouseEnter: h(y, b),
      onMouseLeave: m(y, b),
      onClick: g(y, b)
    }), /* @__PURE__ */ v.createElement(ci, ar({
      option: a ?? P,
      index: b,
      shapeType: "sector",
      isActive: w
    }, S)));
  }));
}
function lN(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: i,
    offset: a
  } = e, {
    cornerRadius: o,
    startAngle: u,
    endAngle: l,
    dataKey: c,
    nameKey: f,
    tooltipType: s
  } = r, d = Math.abs(r.minAngle), p = rN(u, l), h = Math.abs(p), m = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, g = n.filter((E) => V(E, c, 0) !== 0).length, y = (h >= 360 ? g : g - 1) * m, b = n.reduce((E, I) => {
    var j = V(I, c, 0);
    return E + (D(j) ? j : 0);
  }, 0), x = d > 0 && b > 0 && n.some((E) => {
    var I = V(E, c, 0), j = (D(I) ? I : 0) / b;
    return I !== 0 && j * h < d;
  }), w = x ? d : 0, O = h - g * w - y, P;
  if (b > 0) {
    var S;
    P = n.map((E, I) => {
      var j = V(E, c, 0), C = V(E, f, I), _ = tN(r, a, E), z = (D(j) ? j : 0) / b, M, R = le(le({}, E), i && i[I] && i[I].props), W = R != null && "fill" in R && typeof R.fill == "string" ? R.fill : r.fill;
      I ? M = S.endAngle + _e(p) * m * (j !== 0 ? 1 : 0) : M = u;
      var F = M + _e(p) * ((j !== 0 ? w : 0) + z * O), Y = (M + F) / 2, B = (_.innerRadius + _.outerRadius) / 2, G = [{
        name: C,
        value: j,
        payload: R,
        dataKey: c,
        type: s,
        color: W,
        fill: W,
        graphicalItemId: r.id
      }], ye = ge(_.cx, _.cy, B, Y);
      return S = le(le(le(le({}, r.presentationProps), {}, {
        percent: z,
        cornerRadius: typeof o == "string" ? parseFloat(o) : o,
        name: C,
        tooltipPayload: G,
        midAngle: Y,
        middleRadius: B,
        tooltipPosition: ye
      }, R), _), {}, {
        value: j,
        dataKey: c,
        startAngle: M,
        endAngle: F,
        payload: R,
        paddingAngle: j !== 0 ? _e(p) * m : 0
      }), S;
    });
  }
  return P;
}
function cN(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, i = v.useMemo(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ v.createElement(WM, {
    value: t ? i : void 0
  }, n);
}
function sN(e) {
  var {
    props: t,
    previousSectorsRef: r,
    id: n
  } = e, {
    sectors: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: l,
    activeShape: c,
    inactiveShape: f,
    onAnimationStart: s,
    onAnimationEnd: d
  } = t, p = yn(t, "recharts-pie-"), h = r.current, [m, g] = v.useState(!1), y = v.useCallback(() => {
    typeof d == "function" && d(), g(!1);
  }, [d]), b = v.useCallback(() => {
    typeof s == "function" && s(), g(!0);
  }, [s]);
  return /* @__PURE__ */ v.createElement(cN, {
    showLabels: !m,
    sectors: i
  }, /* @__PURE__ */ v.createElement(mn, {
    animationId: p,
    begin: o,
    duration: u,
    isActive: a,
    easing: l,
    onAnimationStart: b,
    onAnimationEnd: y,
    key: p
  }, (x) => {
    var w, O = [], P = i && i[0], S = (w = P == null ? void 0 : P.startAngle) !== null && w !== void 0 ? w : 0;
    return i == null || i.forEach((E, I) => {
      var j = h && h[I], C = I > 0 ? Ir(E, "paddingAngle", 0) : 0;
      if (j) {
        var _ = ee(j.endAngle - j.startAngle, E.endAngle - E.startAngle, x), z = le(le({}, E), {}, {
          startAngle: S + C,
          endAngle: S + _ + C
        });
        O.push(z), S = z.endAngle;
      } else {
        var {
          endAngle: M,
          startAngle: R
        } = E, W = ee(0, M - R, x), F = le(le({}, E), {}, {
          startAngle: S + C,
          endAngle: S + W + C
        });
        O.push(F), S = F.endAngle;
      }
    }), r.current = O, /* @__PURE__ */ v.createElement(se, null, /* @__PURE__ */ v.createElement(uN, {
      sectors: O,
      activeShape: c,
      inactiveShape: f,
      allOtherPieProps: t,
      shape: t.shape,
      id: n
    }));
  }), /* @__PURE__ */ v.createElement(oN, {
    showLabels: !m,
    sectors: i,
    props: t
  }), t.children);
}
var fN = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: !1,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: pe.area
};
function dN(e) {
  var {
    id: t
  } = e, r = Jo(e, qD), {
    hide: n,
    className: i,
    rootTabIndex: a
  } = e, o = v.useMemo(() => Ho(e.children, _n), [e.children]), u = N((f) => uD(f, t, o)), l = v.useRef(null), c = K("recharts-pie", i);
  return n || u == null ? (l.current = null, /* @__PURE__ */ v.createElement(se, {
    tabIndex: a,
    className: c
  })) : /* @__PURE__ */ v.createElement(Le, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ v.createElement(JD, {
    dataKey: e.dataKey,
    nameKey: e.nameKey,
    sectors: u,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fill: e.fill,
    name: e.name,
    hide: e.hide,
    tooltipType: e.tooltipType,
    id: t,
    activeShape: e.activeShape
  }), /* @__PURE__ */ v.createElement(se, {
    tabIndex: a,
    className: c
  }, /* @__PURE__ */ v.createElement(sN, {
    props: le(le({}, r), {}, {
      sectors: u
    }),
    previousSectorsRef: l,
    id: t
  })));
}
function vN(e) {
  var t = he(e, fN), {
    id: r
  } = t, n = Jo(t, UD), i = Be(n);
  return /* @__PURE__ */ v.createElement(Zo, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(FD, {
    type: "pie",
    id: a,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: i,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ v.createElement(XD, ar({}, n, {
    id: a
  })), /* @__PURE__ */ v.createElement(dN, ar({}, n, {
    id: a
  }))));
}
var nx = vN;
nx.displayName = "Pie";
var pN = ["points"];
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      hN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hN(e, t, r) {
  return (t = mN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mN(e) {
  var t = yN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Za.apply(null, arguments);
}
function gN(e, t) {
  if (e == null) return {};
  var r, n, i = bN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function bN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function xN(e) {
  var {
    option: t,
    dotProps: r,
    className: n
  } = e;
  if (/* @__PURE__ */ v.isValidElement(t))
    return /* @__PURE__ */ v.cloneElement(t, r);
  if (typeof t == "function")
    return t(r);
  var i = K(n, typeof t != "boolean" ? t.className : ""), a = r ?? {}, {
    points: o
  } = a, u = gN(a, pN);
  return /* @__PURE__ */ v.createElement(V0, Za({}, u, {
    className: i
  }));
}
function wN(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function PN(e) {
  var {
    points: t,
    dot: r,
    className: n,
    dotClassName: i,
    dataKey: a,
    baseProps: o,
    needClip: u,
    clipPathId: l,
    zIndex: c = pe.scatter
  } = e;
  if (!wN(t, r))
    return null;
  var f = tx(r), s = ow(r), d = t.map((h, m) => {
    var g, y, b = jl(jl(jl({
      r: 3
    }, o), s), {}, {
      index: m,
      cx: (g = h.x) !== null && g !== void 0 ? g : void 0,
      cy: (y = h.y) !== null && y !== void 0 ? y : void 0,
      dataKey: a,
      value: h.value,
      payload: h.payload,
      points: t
    });
    return /* @__PURE__ */ v.createElement(xN, {
      key: "dot-".concat(m),
      option: r,
      dotProps: b,
      className: i
    });
  }), p = {};
  return u && l != null && (p.clipPath = "url(#clipPath-".concat(f ? "" : "dots-").concat(l, ")")), /* @__PURE__ */ v.createElement(Le, {
    zIndex: c
  }, /* @__PURE__ */ v.createElement(se, Za({
    className: n
  }, p), d));
}
function nm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nm(Object(r), !0).forEach(function(n) {
      ON(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ON(e, t, r) {
  return (t = AN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AN(e) {
  var t = SN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ix = 0, EN = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, ax = $e({
  name: "cartesianAxis",
  initialState: EN,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: ae()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: ae()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: ae()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: ae()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: ae()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var a, o = i.widthHistory || [];
        if (o.length === 3 && o[0] === o[2] && n === o[1] && n !== i.width && Math.abs(n - ((a = o[0]) !== null && a !== void 0 ? a : 0)) <= 1)
          return;
        var u = [...o, n].slice(-3);
        e.yAxis[r] = im(im({}, i), {}, {
          width: n,
          widthHistory: u
        });
      }
    }
  }
}), {
  addXAxis: _N,
  replaceXAxis: IN,
  removeXAxis: jN,
  addYAxis: CN,
  replaceYAxis: kN,
  removeYAxis: TN,
  addZAxis: Vz,
  replaceZAxis: Yz,
  removeZAxis: Xz,
  updateYAxisWidth: MN
} = ax.actions, DN = ax.reducer, NN = A([Oe], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), $N = A([NN, Ut, Ht], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), xf = () => N($N), LN = () => N(kk);
function am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(r), !0).forEach(function(n) {
      RN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RN(e, t, r) {
  return (t = zN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zN(e) {
  var t = BN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FN = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: a,
    clipPath: o
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var u = {
    index: r,
    dataKey: a,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, l = Cl(Cl(Cl({}, u), ir(i)), Fc(i)), c;
  return /* @__PURE__ */ v.isValidElement(i) ? c = /* @__PURE__ */ v.cloneElement(i, l) : typeof i == "function" ? c = i(l) : c = /* @__PURE__ */ v.createElement(V0, l), /* @__PURE__ */ v.createElement(se, {
    className: "recharts-active-dot",
    clipPath: o
  }, c);
};
function KN(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: a,
    zIndex: o = pe.activeDot
  } = e, u = N(Wt), l = LN();
  if (t == null || l == null)
    return null;
  var c = t.find((f) => l.includes(f.payload));
  return Q(c) ? null : /* @__PURE__ */ v.createElement(Le, {
    zIndex: o
  }, /* @__PURE__ */ v.createElement(FN, {
    point: c,
    childIndex: Number(u),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: a
  }));
}
var om = (e, t, r) => {
  var n = r ?? e;
  if (!Q(n))
    return Ne(n, t, 0);
}, WN = (e, t, r) => {
  var n = {}, i = e.filter(Io), a = e.filter((c) => c.stackId == null), o = i.reduce((c, f) => {
    var s = c[f.stackId];
    return s == null && (s = []), s.push(f), c[f.stackId] = s, c;
  }, n), u = Object.entries(o).map((c) => {
    var f, [s, d] = c, p = d.map((m) => m.dataKey), h = om(t, r, (f = d[0]) === null || f === void 0 ? void 0 : f.barSize);
    return {
      stackId: s,
      dataKeys: p,
      barSize: h
    };
  }), l = a.map((c) => {
    var f = [c.dataKey].filter((d) => d != null), s = om(t, r, c.barSize);
    return {
      stackId: void 0,
      dataKeys: f,
      barSize: s
    };
  });
  return [...u, ...l];
};
function um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? um(Object(r), !0).forEach(function(n) {
      qN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qN(e, t, r) {
  return (t = UN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UN(e) {
  var t = HN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GN(e, t, r, n, i) {
  var a, o = n.length;
  if (!(o < 1)) {
    var u = Ne(e, r, 0, !0), l, c = [];
    if (H((a = n[0]) === null || a === void 0 ? void 0 : a.barSize)) {
      var f = !1, s = r / o, d = n.reduce((b, x) => b + (x.barSize || 0), 0);
      d += (o - 1) * u, d >= r && (d -= (o - 1) * u, u = 0), d >= r && s > 0 && (f = !0, s *= 0.9, d = o * s);
      var p = (r - d) / 2 >> 0, h = {
        offset: p - u,
        size: 0
      };
      l = n.reduce((b, x) => {
        var w, O = {
          stackId: x.stackId,
          dataKeys: x.dataKeys,
          position: {
            offset: h.offset + h.size + u,
            size: f ? s : (w = x.barSize) !== null && w !== void 0 ? w : 0
          }
        }, P = [...b, O];
        return h = O.position, P;
      }, c);
    } else {
      var m = Ne(t, r, 0, !0);
      r - 2 * m - (o - 1) * u <= 0 && (u = 0);
      var g = (r - 2 * m - (o - 1) * u) / o;
      g > 1 && (g >>= 0);
      var y = H(i) ? Math.min(g, i) : g;
      l = n.reduce((b, x, w) => [...b, {
        stackId: x.stackId,
        dataKeys: x.dataKeys,
        position: {
          offset: m + (g + u) * w + (g - y) / 2,
          size: y
        }
      }], c);
    }
    return l;
  }
}
var VN = (e, t, r, n, i, a, o) => {
  var u = Q(o) ? t : o, l = GN(r, n, i !== a ? i : a, e, u);
  return i !== a && l != null && (l = l.map((c) => Yi(Yi({}, c), {}, {
    position: Yi(Yi({}, c.position), {}, {
      offset: c.position.offset - i / 2
    })
  }))), l;
}, YN = (e, t) => {
  var r = vs(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: a
        } = i;
        if (a)
          return a.find((o) => o.key === r);
      }
    }
  }
}, XN = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function ZN(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && H(e.zIndex) ? e.zIndex : t;
}
var ox = (e) => {
  var {
    chartData: t
  } = e, r = te(), n = Ie();
  return v.useEffect(() => n ? () => {
  } : (r(bh(t)), () => {
    r(bh(void 0));
  }), [t, r, n]), null;
}, lm = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, ux = $e({
  name: "brush",
  initialState: lm,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? lm : t.payload;
    }
  }
}), {
  setBrushSettings: Zz
} = ux.actions, JN = ux.reducer;
function QN(e) {
  return (e % 180 + 180) % 180;
}
var e$ = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = QN(i), o = a * Math.PI / 180, u = Math.atan(n / r), l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, t$ = {
  dots: [],
  areas: [],
  lines: []
}, lx = $e({
  name: "referenceElements",
  initialState: t$,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = ut(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = ut(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = ut(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: Jz,
  removeDot: Qz,
  addArea: eB,
  removeArea: tB,
  addLine: rB,
  removeLine: nB
} = lx.actions, r$ = lx.reducer, n$ = /* @__PURE__ */ v.createContext(void 0), i$ = (e) => {
  var {
    children: t
  } = e, [r] = v.useState("".concat(Yn("recharts"), "-clip")), n = xf();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: u
  } = n;
  return /* @__PURE__ */ v.createElement(n$.Provider, {
    value: r
  }, /* @__PURE__ */ v.createElement("defs", null, /* @__PURE__ */ v.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ v.createElement("rect", {
    x: i,
    y: a,
    height: u,
    width: o
  }))), t);
};
function cx(e, t) {
  if (t < 1)
    return [];
  if (t === 1)
    return e;
  for (var r = [], n = 0; n < e.length; n += t) {
    var i = e[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function a$(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return e$(n, r);
}
function o$(e, t, r) {
  var n = r === "width", {
    x: i,
    y: a,
    width: o,
    height: u
  } = e;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function si(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function u$(e, t) {
  return cx(e, t + 1);
}
function l$(e, t, r, n, i) {
  for (var a = (n || []).slice(), {
    start: o,
    end: u
  } = t, l = 0, c = 1, f = o, s = function() {
    var h = n == null ? void 0 : n[l];
    if (h === void 0)
      return {
        v: cx(n, c)
      };
    var m = l, g, y = () => (g === void 0 && (g = r(h, m)), g), b = h.coordinate, x = l === 0 || si(e, b, y, f, u);
    x || (l = 0, f = o, c += 1), x && (f = b + e * (y() / 2 + i), l += c);
  }, d; c <= a.length; )
    if (d = s(), d) return d.v;
  return [];
}
function c$(e, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0)
    return [];
  for (var {
    start: u,
    end: l
  } = t, c = 1; c <= o; c++) {
    for (var f = (o - 1) % c, s = u, d = !0, p = function() {
      var w = n[m];
      if (w == null)
        return 0;
      var O = m, P, S = () => (P === void 0 && (P = r(w, O)), P), E = w.coordinate, I = m === f || si(e, E, S, s, l);
      if (!I)
        return d = !1, 1;
      I && (s = E + e * (S() / 2 + i));
    }, h, m = f; m < o && (h = p(), !(h !== 0 && h === 1)); m += c)
      ;
    if (d) {
      for (var g = [], y = f; y < o; y += c) {
        var b = n[y];
        b != null && g.push(b);
      }
      return g;
    }
  }
  return [];
}
function cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cm(Object(r), !0).forEach(function(n) {
      s$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s$(e, t, r) {
  return (t = f$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f$(e) {
  var t = d$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function d$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v$(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, {
    start: u
  } = t, {
    end: l
  } = t, c = function(d) {
    var p = a[d];
    if (p == null)
      return 1;
    var h = p, m, g = () => (m === void 0 && (m = r(p, d)), m);
    if (d === o - 1) {
      var y = e * (h.coordinate + e * g() / 2 - l);
      a[d] = h = Me(Me({}, h), {}, {
        tickCoord: y > 0 ? h.coordinate - y * e : h.coordinate
      });
    } else
      a[d] = h = Me(Me({}, h), {}, {
        tickCoord: h.coordinate
      });
    if (h.tickCoord != null) {
      var b = si(e, h.tickCoord, g, u, l);
      b && (l = h.tickCoord - e * (g() / 2 + i), a[d] = Me(Me({}, h), {}, {
        isShow: !0
      }));
    }
  }, f = o - 1; f >= 0; f--)
    c(f);
  return a;
}
function p$(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, {
    start: l,
    end: c
  } = t;
  if (a) {
    var f = n[u - 1];
    if (f != null) {
      var s = r(f, u - 1), d = e * (f.coordinate + e * s / 2 - c);
      if (o[u - 1] = f = Me(Me({}, f), {}, {
        tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate
      }), f.tickCoord != null) {
        var p = si(e, f.tickCoord, () => s, l, c);
        p && (c = f.tickCoord - e * (s / 2 + i), o[u - 1] = Me(Me({}, f), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var h = a ? u - 1 : u, m = function(b) {
    var x = o[b];
    if (x == null)
      return 1;
    var w = x, O, P = () => (O === void 0 && (O = r(x, b)), O);
    if (b === 0) {
      var S = e * (w.coordinate - e * P() / 2 - l);
      o[b] = w = Me(Me({}, w), {}, {
        tickCoord: S < 0 ? w.coordinate - S * e : w.coordinate
      });
    } else
      o[b] = w = Me(Me({}, w), {}, {
        tickCoord: w.coordinate
      });
    if (w.tickCoord != null) {
      var E = si(e, w.tickCoord, P, l, c);
      E && (l = w.tickCoord + e * (P() / 2 + i), o[b] = Me(Me({}, w), {}, {
        isShow: !0
      }));
    }
  }, g = 0; g < h; g++)
    m(g);
  return o;
}
function wf(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: u,
    interval: l,
    tickFormatter: c,
    unit: f,
    angle: s
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (D(l) || bi.isSsr) {
    var d;
    return (d = u$(i, D(l) ? l : 0)) !== null && d !== void 0 ? d : [];
  }
  var p = [], h = u === "top" || u === "bottom" ? "width" : "height", m = f && h === "width" ? Gn(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, g = (O, P) => {
    var S = typeof c == "function" ? c(O.value, P) : O.value;
    return h === "width" ? a$(Gn(S, {
      fontSize: t,
      letterSpacing: r
    }), m, s) : Gn(S, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, y = i[0], b = i[1], x = i.length >= 2 && y != null && b != null ? _e(b.coordinate - y.coordinate) : 1, w = o$(a, x, h);
  return l === "equidistantPreserveStart" ? l$(x, w, g, i, o) : l === "equidistantPreserveEnd" ? c$(x, w, g, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? p = p$(x, w, g, i, o, l === "preserveStartEnd") : p = v$(x, w, g, i, o), p.filter((O) => O.isShow));
}
var h$ = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: a = 0
  } = e, o = 0;
  if (t) {
    Array.from(t).forEach((f) => {
      if (f) {
        var s = f.getBoundingClientRect();
        s.width > o && (o = s.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, l = i + a, c = o + l + u + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, m$ = {
  xAxis: {},
  yAxis: {}
}, sx = $e({
  name: "renderedTicks",
  initialState: m$,
  reducers: {
    setRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n,
        ticks: i
      } = t.payload;
      e[r][n] = i;
    },
    removeRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n
      } = t.payload;
      delete e[r][n];
    }
  }
}), {
  setRenderedTicks: y$,
  removeRenderedTicks: g$
} = sx.actions, b$ = sx.reducer, x$ = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function w$(e, t) {
  if (e == null) return {};
  var r, n, i = P$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function P$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nr.apply(null, arguments);
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      O$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O$(e, t, r) {
  return (t = A$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A$(e) {
  var t = S$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function S$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rt = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: pe.axis
};
function E$(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: u,
    otherSvgProps: l
  } = e;
  if (!u)
    return null;
  var c = de(de(de({}, l), Be(u)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var f = +(a === "top" && !o || a === "bottom" && o);
    c = de(de({}, c), {}, {
      x1: t,
      y1: r + f * i,
      x2: t + n,
      y2: r + f * i
    });
  } else {
    var s = +(a === "left" && !o || a === "right" && o);
    c = de(de({}, c), {}, {
      x1: t + s * n,
      y1: r,
      x2: t + s * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ v.createElement("line", Nr({}, c, {
    className: K("recharts-cartesian-axis-line", Ir(u, "className"))
  }));
}
function _$(e, t, r, n, i, a, o, u, l) {
  var c, f, s, d, p, h, m = u ? -1 : 1, g = e.tickSize || o, y = D(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case "top":
      c = f = e.coordinate, d = r + +!u * i, s = d - m * g, h = s - m * l, p = y;
      break;
    case "left":
      s = d = e.coordinate, f = t + +!u * n, c = f - m * g, p = c - m * l, h = y;
      break;
    case "right":
      s = d = e.coordinate, f = t + +u * n, c = f + m * g, p = c + m * l, h = y;
      break;
    default:
      c = f = e.coordinate, d = r + +u * i, s = d + m * g, h = s + m * l, p = y;
      break;
  }
  return {
    line: {
      x1: c,
      y1: s,
      x2: f,
      y2: d
    },
    tick: {
      x: p,
      y: h
    }
  };
}
function I$(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function j$(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function C$(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, a = K(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ v.isValidElement(t))
    i = /* @__PURE__ */ v.cloneElement(t, de(de({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    i = t(de(de({}, r), {}, {
      className: a
    }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = K(o, J0(t))), i = /* @__PURE__ */ v.createElement(Ko, Nr({}, r, {
      className: o
    }), n);
  }
  return i;
}
function k$(e) {
  var {
    ticks: t,
    axisType: r,
    axisId: n
  } = e, i = te();
  return v.useEffect(() => {
    if (n == null || r == null)
      return Lr;
    var a = t.map((o) => ({
      value: o.value,
      coordinate: o.coordinate,
      offset: o.offset,
      index: o.index
    }));
    return i(y$({
      ticks: a,
      axisId: n,
      axisType: r
    })), () => {
      i(g$({
        axisId: n,
        axisType: r
      }));
    };
  }, [i, t, n, r]), null;
}
var T$ = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: a,
    tickFormatter: o,
    unit: u,
    padding: l,
    tickTextProps: c,
    orientation: f,
    mirror: s,
    x: d,
    y: p,
    width: h,
    height: m,
    tickSize: g,
    tickMargin: y,
    fontSize: b,
    letterSpacing: x,
    getTicksConfig: w,
    events: O,
    axisType: P,
    axisId: S
  } = e, E = wf(de(de({}, w), {}, {
    ticks: r
  }), b, x), I = Be(w), j = ir(n), C = B0(I.textAnchor) ? I.textAnchor : I$(f, s), _ = j$(f, s), z = {};
  typeof i == "object" && (z = i);
  var M = de(de({}, I), {}, {
    fill: "none"
  }, z), R = E.map((Y) => de({
    entry: Y
  }, _$(Y, d, p, h, m, f, g, s, y))), W = R.map((Y) => {
    var {
      entry: B,
      line: G
    } = Y;
    return /* @__PURE__ */ v.createElement(se, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(B.value, "-").concat(B.coordinate, "-").concat(B.tickCoord)
    }, i && /* @__PURE__ */ v.createElement("line", Nr({}, M, G, {
      className: K("recharts-cartesian-axis-tick-line", Ir(i, "className"))
    })));
  }), F = R.map((Y, B) => {
    var G, ye, {
      entry: ue,
      tick: Ye
    } = Y, We = de(de(de(de({
      verticalAnchor: _
    }, I), {}, {
      textAnchor: C,
      stroke: "none",
      fill: a
    }, Ye), {}, {
      index: B,
      payload: ue,
      visibleTicksCount: E.length,
      tickFormatter: o,
      padding: l
    }, c), {}, {
      angle: (G = (ye = c == null ? void 0 : c.angle) !== null && ye !== void 0 ? ye : I.angle) !== null && G !== void 0 ? G : 0
    }), Tt = de(de({}, We), j);
    return /* @__PURE__ */ v.createElement(se, Nr({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(ue.value, "-").concat(ue.coordinate, "-").concat(ue.tickCoord)
    }, hn(O, ue, B)), n && /* @__PURE__ */ v.createElement(C$, {
      option: n,
      tickProps: Tt,
      value: "".concat(typeof o == "function" ? o(ue.value, B) : ue.value).concat(u || "")
    }));
  });
  return /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(P, "-ticks")
  }, /* @__PURE__ */ v.createElement(k$, {
    ticks: E,
    axisId: S,
    axisType: P
  }), F.length > 0 && /* @__PURE__ */ v.createElement(Le, {
    zIndex: pe.label
  }, /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(P, "-tick-labels"),
    ref: t
  }, F)), W.length > 0 && /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(P, "-tick-lines")
  }, W));
}), M$ = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: a,
    hide: o,
    ticks: u,
    axisType: l,
    axisId: c
  } = e, f = w$(e, x$), [s, d] = v.useState(""), [p, h] = v.useState(""), m = v.useRef(null);
  v.useImperativeHandle(t, () => ({
    getCalculatedWidth: () => {
      var y;
      return h$({
        ticks: m.current,
        label: (y = e.labelRef) === null || y === void 0 ? void 0 : y.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var g = v.useCallback((y) => {
    if (y) {
      var b = y.getElementsByClassName("recharts-cartesian-axis-tick-value");
      m.current = b;
      var x = b[0];
      if (x) {
        var w = window.getComputedStyle(x), O = w.fontSize, P = w.letterSpacing;
        (O !== s || P !== p) && (d(O), h(P));
      }
    }
  }, [s, p]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ v.createElement(Le, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ v.createElement(se, {
    className: K("recharts-cartesian-axis", a)
  }, /* @__PURE__ */ v.createElement(E$, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: Be(e)
  }), /* @__PURE__ */ v.createElement(T$, {
    ref: g,
    axisType: l,
    events: f,
    fontSize: s,
    getTicksConfig: e,
    height: e.height,
    letterSpacing: p,
    mirror: e.mirror,
    orientation: e.orientation,
    padding: e.padding,
    stroke: e.stroke,
    tick: e.tick,
    tickFormatter: e.tickFormatter,
    tickLine: e.tickLine,
    tickMargin: e.tickMargin,
    tickSize: e.tickSize,
    tickTextProps: e.tickTextProps,
    ticks: u,
    unit: e.unit,
    width: e.width,
    x: e.x,
    y: e.y,
    axisId: c
  }), /* @__PURE__ */ v.createElement(IM, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ v.createElement(RM, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Pf = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r = he(e, Rt);
  return /* @__PURE__ */ v.createElement(M$, Nr({}, r, {
    ref: t
  }));
});
Pf.displayName = "CartesianAxis";
var D$ = ["x1", "y1", "x2", "y2", "key"], N$ = ["offset"], $$ = ["xAxisId", "yAxisId"], L$ = ["xAxisId", "yAxisId"];
function fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fm(Object(r), !0).forEach(function(n) {
      R$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R$(e, t, r) {
  return (t = z$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z$(e) {
  var t = B$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Or.apply(null, arguments);
}
function Ja(e, t) {
  if (e == null) return {};
  var r, n, i = F$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function F$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var K$ = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    ry: u
  } = e;
  return /* @__PURE__ */ v.createElement("rect", {
    x: n,
    y: i,
    ry: u,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function fx(e) {
  var {
    option: t,
    lineItemProps: r
  } = e, n;
  if (/* @__PURE__ */ v.isValidElement(t))
    n = /* @__PURE__ */ v.cloneElement(t, r);
  else if (typeof t == "function")
    n = t(r);
  else {
    var i, {
      x1: a,
      y1: o,
      x2: u,
      y2: l,
      key: c
    } = r, f = Ja(r, D$), s = (i = Be(f)) !== null && i !== void 0 ? i : {}, {
      offset: d
    } = s, p = Ja(s, N$);
    n = /* @__PURE__ */ v.createElement("line", Or({}, p, {
      x1: a,
      y1: o,
      x2: u,
      y2: l,
      fill: "none",
      key: c
    }));
  }
  return n;
}
function W$(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = Ja(e, $$), l = i.map((c, f) => {
    var s = De(De({}, u), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(f),
      index: f
    });
    return /* @__PURE__ */ v.createElement(fx, {
      key: "line-".concat(f),
      option: n,
      lineItemProps: s
    });
  });
  return /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, l);
}
function q$(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = Ja(e, L$), l = i.map((c, f) => {
    var s = De(De({}, u), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(f),
      index: f
    });
    return /* @__PURE__ */ v.createElement(fx, {
      option: n,
      lineItemProps: s,
      key: "line-".concat(f)
    });
  });
  return /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, l);
}
function U$(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: u,
    horizontal: l = !0
  } = e;
  if (!l || !t || !t.length || u == null)
    return null;
  var c = u.map((s) => Math.round(s + i - i)).sort((s, d) => s - d);
  i !== c[0] && c.unshift(0);
  var f = c.map((s, d) => {
    var p = c[d + 1], h = p == null, m = h ? i + o - s : p - s;
    if (m <= 0)
      return null;
    var g = d % t.length;
    return /* @__PURE__ */ v.createElement("rect", {
      key: "react-".concat(d),
      y: s,
      x: n,
      height: m,
      width: a,
      stroke: "none",
      fill: t[g],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function H$(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: u,
    verticalPoints: l
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = l.map((s) => Math.round(s + i - i)).sort((s, d) => s - d);
  i !== c[0] && c.unshift(0);
  var f = c.map((s, d) => {
    var p = c[d + 1], h = p == null, m = h ? i + o - s : p - s;
    if (m <= 0)
      return null;
    var g = d % r.length;
    return /* @__PURE__ */ v.createElement("rect", {
      key: "react-".concat(d),
      x: s,
      y: a,
      width: m,
      height: u,
      stroke: "none",
      fill: r[g],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var G$ = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return Yy(wf(De(De(De({}, Rt), r), {}, {
    ticks: Xy(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.left, a.left + a.width, t);
}, V$ = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return Yy(wf(De(De(De({}, Rt), r), {}, {
    ticks: Xy(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.top, a.top + a.height, t);
}, Y$ = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: !1,
  zIndex: pe.grid
};
function na(e) {
  var t = es(), r = ts(), n = rg(), i = De(De({}, he(e, Y$)), {}, {
    x: D(e.x) ? e.x : n.left,
    y: D(e.y) ? e.y : n.top,
    width: D(e.width) ? e.width : n.width,
    height: D(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: o,
    x: u,
    y: l,
    width: c,
    height: f,
    syncWithTicks: s,
    horizontalValues: d,
    verticalValues: p
  } = i, h = Ie(), m = N((I) => uh(I, "xAxis", a, h)), g = N((I) => uh(I, "yAxis", o, h));
  if (!_t(c) || !_t(f) || !D(u) || !D(l))
    return null;
  var y = i.verticalCoordinatesGenerator || G$, b = i.horizontalCoordinatesGenerator || V$, {
    horizontalPoints: x,
    verticalPoints: w
  } = i;
  if ((!x || !x.length) && typeof b == "function") {
    var O = d && d.length, P = b({
      yAxis: g ? De(De({}, g), {}, {
        ticks: O ? d : g.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? f,
      offset: n
    }, O ? !0 : s);
    Oa(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P, "]")), Array.isArray(P) && (x = P);
  }
  if ((!w || !w.length) && typeof y == "function") {
    var S = p && p.length, E = y({
      xAxis: m ? De(De({}, m), {}, {
        ticks: S ? p : m.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? f,
      offset: n
    }, S ? !0 : s);
    Oa(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof E, "]")), Array.isArray(E) && (w = E);
  }
  return /* @__PURE__ */ v.createElement(Le, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ v.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ v.createElement(K$, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ v.createElement(U$, Or({}, i, {
    horizontalPoints: x
  })), /* @__PURE__ */ v.createElement(H$, Or({}, i, {
    verticalPoints: w
  })), /* @__PURE__ */ v.createElement(W$, Or({}, i, {
    offset: n,
    horizontalPoints: x,
    xAxis: m,
    yAxis: g
  })), /* @__PURE__ */ v.createElement(q$, Or({}, i, {
    offset: n,
    verticalPoints: w,
    xAxis: m,
    yAxis: g
  }))));
}
na.displayName = "CartesianGrid";
var X$ = {}, dx = $e({
  name: "errorBars",
  initialState: X$,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: iB,
  replaceErrorBar: aB,
  removeErrorBar: oB
} = dx.actions, Z$ = dx.reducer, J$ = ["children"];
function Q$(e, t) {
  if (e == null) return {};
  var r, n, i = e2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function e2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var t2 = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, r2 = /* @__PURE__ */ v.createContext(t2);
function Of(e) {
  var {
    children: t
  } = e, r = Q$(e, J$);
  return /* @__PURE__ */ v.createElement(r2.Provider, {
    value: r
  }, t);
}
function Qo(e, t) {
  var r, n, i = N((c) => Vt(c, e)), a = N((c) => Yt(c, t)), o = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : xe.allowDataOverflow, u = (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0 ? n : we.allowDataOverflow, l = o || u;
  return {
    needClip: l,
    needClipX: o,
    needClipY: u
  };
}
function Af(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = xf(), {
    needClipX: a,
    needClipY: o,
    needClip: u
  } = Qo(t, r);
  if (!u || !i)
    return null;
  var {
    x: l,
    y: c,
    width: f,
    height: s
  } = i;
  return /* @__PURE__ */ v.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ v.createElement("rect", {
    x: a ? l : l - f / 2,
    y: o ? c : c - s / 2,
    width: a ? f : f * 2,
    height: o ? s : s * 2
  }));
}
var vx = (e, t, r, n) => kt(e, "xAxis", t, n), px = (e, t, r, n) => Ct(e, "xAxis", t, n), hx = (e, t, r, n) => kt(e, "yAxis", r, n), mx = (e, t, r, n) => Ct(e, "yAxis", r, n), n2 = A([J, vx, hx, px, mx], (e, t, r, n, i) => qt(e, "xAxis") ? on(t, n, !1) : on(r, i, !1)), i2 = (e, t, r, n, i) => i;
function a2(e) {
  return e.type === "line";
}
var o2 = A([_i, i2], (e, t) => e.filter(a2).find((r) => r.id === t)), u2 = A([J, vx, hx, px, mx, o2, n2, gn], (e, t, r, n, i, a, o, u) => {
  var {
    chartData: l,
    dataStartIndex: c,
    dataEndIndex: f
  } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null || e !== "horizontal" && e !== "vertical")) {
    var {
      dataKey: s,
      data: d
    } = a, p;
    if (d != null && d.length > 0 ? p = d : p = l == null ? void 0 : l.slice(c, f + 1), p != null)
      return I2({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataKey: s,
        bandSize: o,
        displayedData: p
      });
  }
});
function l2(e) {
  var t = ir(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: i,
      strokeWidth: a
    } = t, o = Number(i), u = Number(a);
    return (Number.isNaN(o) || o < 0) && (o = r), (Number.isNaN(u) || u < 0) && (u = n), {
      r: o,
      strokeWidth: u
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
var c2 = ["id"], s2 = ["type", "layout", "connectNulls", "needClip", "shape"], f2 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fi.apply(null, arguments);
}
function dm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dm(Object(r), !0).forEach(function(n) {
      d2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d2(e, t, r) {
  return (t = v2(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v2(e) {
  var t = p2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function p2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sf(e, t) {
  if (e == null) return {};
  var r, n, i = h2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function h2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var m2 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: ur(r, t),
    payload: e
  }];
}, y2 = /* @__PURE__ */ v.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: u,
    unit: l,
    tooltipType: c,
    id: f
  } = e, s = {
    dataDefinedOnItem: r,
    getPosition: Lr,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: ur(o, t),
      hide: u,
      type: c,
      color: n,
      unit: l,
      graphicalItemId: f
    }
  };
  return /* @__PURE__ */ v.createElement(Xo, {
    tooltipEntrySettings: s
  });
}), yx = (e, t) => "".concat(t, "px ").concat(e, "px");
function g2(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
    n.push(...r);
  return n;
}
var b2 = (e, t, r) => {
  var n = r.reduce((d, p) => d + p, 0);
  if (!n)
    return yx(t, e);
  for (var i = Math.floor(e / n), a = e % n, o = [], u = 0, l = 0; u < r.length; l += (c = r[u]) !== null && c !== void 0 ? c : 0, ++u) {
    var c, f = r[u];
    if (f != null && l + f > a) {
      o = [...r.slice(0, u), a - l];
      break;
    }
  }
  var s = o.length % 2 === 0 ? [0, t] : [t];
  return [...g2(r, i), ...o, ...s].map((d) => "".concat(d, "px")).join(", ");
};
function x2(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: i,
    dataKey: a,
    needClip: o
  } = n, {
    id: u
  } = n, l = Sf(n, c2), c = Be(l);
  return /* @__PURE__ */ v.createElement(PN, {
    points: r,
    dot: i,
    className: "recharts-line-dots",
    dotClassName: "recharts-line-dot",
    dataKey: a,
    baseProps: c,
    needClip: o,
    clipPathId: t
  });
}
function w2(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = v.useMemo(() => n == null ? void 0 : n.map((a) => {
    var o, u, l = {
      x: (o = a.x) !== null && o !== void 0 ? o : 0,
      y: (u = a.y) !== null && u !== void 0 ? u : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return xt(xt({}, l), {}, {
      value: a.value,
      payload: a.payload,
      viewBox: l,
      /*
       * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
       * Or should this just be the root chart viewBox?
       */
      parentViewBox: void 0,
      fill: void 0
    });
  }), [n]);
  return /* @__PURE__ */ v.createElement(hf, {
    value: t ? i : void 0
  }, r);
}
function vm(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: i,
    props: a
  } = e, {
    type: o,
    layout: u,
    connectNulls: l,
    needClip: c,
    shape: f
  } = a, s = Sf(a, s2), d = xt(xt({}, Fe(s)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: c ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: o,
    layout: u,
    connectNulls: l,
    strokeDasharray: i ?? a.strokeDasharray
  });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, (n == null ? void 0 : n.length) > 1 && /* @__PURE__ */ v.createElement(ci, fi({
    shapeType: "curve",
    option: f
  }, d, {
    pathRef: r
  })), /* @__PURE__ */ v.createElement(x2, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function P2(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function O2(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: i,
    longestAnimatedLengthRef: a
  } = e, {
    points: o,
    strokeDasharray: u,
    isAnimationActive: l,
    animationBegin: c,
    animationDuration: f,
    animationEasing: s,
    animateNewValues: d,
    width: p,
    height: h,
    onAnimationEnd: m,
    onAnimationStart: g
  } = r, y = i.current, b = yn(o, "recharts-line-"), x = v.useRef(b), [w, O] = v.useState(!1), P = !w, S = v.useCallback(() => {
    typeof m == "function" && m(), O(!1);
  }, [m]), E = v.useCallback(() => {
    typeof g == "function" && g(), O(!0);
  }, [g]), I = P2(n.current), j = v.useRef(0);
  x.current !== b && (j.current = a.current, x.current = b);
  var C = j.current;
  return /* @__PURE__ */ v.createElement(w2, {
    points: o,
    showLabels: P
  }, r.children, /* @__PURE__ */ v.createElement(mn, {
    animationId: b,
    begin: c,
    duration: f,
    isActive: l,
    easing: s,
    onAnimationEnd: S,
    onAnimationStart: E,
    key: b
  }, (_) => {
    var z = ee(C, I + C, _), M = Math.min(z, I), R;
    if (l)
      if (u) {
        var W = "".concat(u).split(/[,\s]+/gim).map((B) => parseFloat(B));
        R = b2(M, I, W);
      } else
        R = yx(I, M);
    else
      R = u == null ? void 0 : String(u);
    if (_ > 0 && I > 0 && (i.current = o, a.current = Math.max(a.current, M)), y) {
      var F = y.length / o.length, Y = _ === 1 ? o : o.map((B, G) => {
        var ye = Math.floor(G * F);
        if (y[ye]) {
          var ue = y[ye];
          return xt(xt({}, B), {}, {
            x: ee(ue.x, B.x, _),
            y: ee(ue.y, B.y, _)
          });
        }
        return d ? xt(xt({}, B), {}, {
          x: ee(p * 2, B.x, _),
          y: ee(h / 2, B.y, _)
        }) : xt(xt({}, B), {}, {
          x: B.x,
          y: B.y
        });
      });
      return i.current = Y, /* @__PURE__ */ v.createElement(vm, {
        props: r,
        points: Y,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: R
      });
    }
    return /* @__PURE__ */ v.createElement(vm, {
      props: r,
      points: o,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: R
    });
  }), /* @__PURE__ */ v.createElement(Wo, {
    label: r.label
  }));
}
function A2(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = v.useRef(null), i = v.useRef(0), a = v.useRef(null);
  return /* @__PURE__ */ v.createElement(O2, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: i,
    pathRef: a
  });
}
var S2 = (e, t) => {
  var r, n;
  return {
    x: (r = e.x) !== null && r !== void 0 ? r : void 0,
    y: (n = e.y) !== null && n !== void 0 ? n : void 0,
    value: e.value,
    // getValueByDataKey does not validate the output type
    errorVal: V(e.payload, t)
  };
};
class E2 extends v.Component {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      top: u,
      left: l,
      width: c,
      height: f,
      id: s,
      needClip: d,
      zIndex: p
    } = this.props;
    if (t)
      return null;
    var h = K("recharts-line", i), m = s, {
      r: g,
      strokeWidth: y
    } = l2(r), b = tx(r), x = g * 2 + y, w = d ? "url(#clipPath-".concat(b ? "" : "dots-").concat(m, ")") : void 0;
    return /* @__PURE__ */ v.createElement(Le, {
      zIndex: p
    }, /* @__PURE__ */ v.createElement(se, {
      className: h
    }, d && /* @__PURE__ */ v.createElement("defs", null, /* @__PURE__ */ v.createElement(Af, {
      clipPathId: m,
      xAxisId: a,
      yAxisId: o
    }), !b && /* @__PURE__ */ v.createElement("clipPath", {
      id: "clipPath-dots-".concat(m)
    }, /* @__PURE__ */ v.createElement("rect", {
      x: l - x / 2,
      y: u - x / 2,
      width: c + x,
      height: f + x
    }))), /* @__PURE__ */ v.createElement(Of, {
      xAxisId: a,
      yAxisId: o,
      data: n,
      dataPointFormatter: S2,
      errorBarOffset: 0
    }, /* @__PURE__ */ v.createElement(A2, {
      props: this.props,
      clipPathId: m
    }))), /* @__PURE__ */ v.createElement(KN, {
      activeDot: this.props.activeDot,
      points: n,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey,
      clipPath: w
    }));
  }
}
var gx = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: pe.line,
  type: "linear"
};
function _2(e) {
  var t = he(e, gx), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    connectNulls: u,
    dot: l,
    hide: c,
    isAnimationActive: f,
    label: s,
    legendType: d,
    xAxisId: p,
    yAxisId: h,
    id: m
  } = t, g = Sf(t, f2), {
    needClip: y
  } = Qo(p, h), b = xf(), x = Rr(), w = Ie(), O = N((j) => u2(j, p, h, w, m));
  if (x !== "horizontal" && x !== "vertical" || O == null || b == null)
    return null;
  var {
    height: P,
    width: S,
    x: E,
    y: I
  } = b;
  return /* @__PURE__ */ v.createElement(E2, fi({}, g, {
    id: m,
    connectNulls: u,
    dot: l,
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    isAnimationActive: f,
    hide: c,
    label: s,
    legendType: d,
    xAxisId: p,
    yAxisId: h,
    points: O,
    layout: x,
    height: P,
    width: S,
    left: E,
    top: I,
    needClip: y
  }));
}
function I2(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: u,
    displayedData: l
  } = e;
  return l.map((c, f) => {
    var s = V(c, o);
    if (t === "horizontal") {
      var d = Pa({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: c,
        index: f
      }), p = Q(s) ? null : n.scale.map(s);
      return {
        x: d,
        y: p ?? null,
        value: s,
        payload: c
      };
    }
    var h = Q(s) ? null : r.scale.map(s), m = Pa({
      axis: n,
      ticks: a,
      bandSize: u,
      entry: c,
      index: f
    });
    return h == null || m == null ? null : {
      x: h,
      y: m,
      value: s,
      payload: c
    };
  }).filter(Boolean);
}
function j2(e) {
  var t = he(e, gx), r = Ie();
  return /* @__PURE__ */ v.createElement(Zo, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(gf, {
    legendPayload: m2(t)
  }), /* @__PURE__ */ v.createElement(y2, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: n
  }), /* @__PURE__ */ v.createElement(bf, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ v.createElement(_2, fi({}, t, {
    id: n
  }))));
}
var bx = /* @__PURE__ */ v.memo(j2, zr);
bx.displayName = "Line";
function Wr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : ix;
}
function qr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : ix;
}
var C2 = "Invariant failed";
function k2(e, t) {
  throw new Error(C2);
}
function Pc() {
  return Pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pc.apply(null, arguments);
}
function Ef(e) {
  return /* @__PURE__ */ v.createElement(ci, Pc({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var T2 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (D(t)) return t;
    var a = D(n) || Q(n);
    return a ? t(n, i) : (a || k2(), r);
  };
}, M2 = (e, t, r) => r, D2 = (e, t) => t, Ti = A([_i, D2], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), N2 = A([Ti], (e) => e == null ? void 0 : e.maxBarSize), $2 = (e, t, r, n) => n, L2 = A([J, _i, Wr, qr, M2], (e, t, r, n, i) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === i).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), R2 = (e, t, r) => {
  var n = J(e), i = Wr(e, t), a = qr(e, t);
  if (!(i == null || a == null))
    return n === "horizontal" ? yc(e, "yAxis", a, r) : yc(e, "xAxis", i, r);
}, z2 = (e, t) => {
  var r = J(e), n = Wr(e, t), i = qr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? oh(e, "xAxis", n) : oh(e, "yAxis", i);
}, B2 = A([L2, FE, z2], WN), F2 = (e, t, r) => {
  var n, i, a = Ti(e, t);
  if (a == null)
    return 0;
  var o = Wr(e, t), u = qr(e, t);
  if (o == null || u == null)
    return 0;
  var l = J(e), c = Rg(e), {
    maxBarSize: f
  } = a, s = Q(f) ? c : f, d, p;
  return l === "horizontal" ? (d = kt(e, "xAxis", o, r), p = Ct(e, "xAxis", o, r)) : (d = kt(e, "yAxis", u, r), p = Ct(e, "yAxis", u, r)), (n = (i = on(d, p, !0)) !== null && i !== void 0 ? i : s) !== null && n !== void 0 ? n : 0;
}, xx = (e, t, r) => {
  var n = J(e), i = Wr(e, t), a = qr(e, t);
  if (!(i == null || a == null)) {
    var o, u;
    return n === "horizontal" ? (o = kt(e, "xAxis", i, r), u = Ct(e, "xAxis", i, r)) : (o = kt(e, "yAxis", a, r), u = Ct(e, "yAxis", a, r)), on(o, u);
  }
}, K2 = A([B2, Rg, BE, zg, F2, xx, N2], VN), W2 = (e, t, r) => {
  var n = Wr(e, t);
  if (n != null)
    return kt(e, "xAxis", n, r);
}, q2 = (e, t, r) => {
  var n = qr(e, t);
  if (n != null)
    return kt(e, "yAxis", n, r);
}, U2 = (e, t, r) => {
  var n = Wr(e, t);
  if (n != null)
    return Ct(e, "xAxis", n, r);
}, H2 = (e, t, r) => {
  var n = qr(e, t);
  if (n != null)
    return Ct(e, "yAxis", n, r);
}, G2 = A([K2, Ti], XN), V2 = A([R2, Ti], YN), Y2 = A([Oe, Zc, W2, q2, U2, H2, G2, J, kE, xx, V2, Ti, $2], (e, t, r, n, i, a, o, u, l, c, f, s, d) => {
  var {
    chartData: p,
    dataStartIndex: h,
    dataEndIndex: m
  } = l;
  if (!(s == null || o == null || t == null || u !== "horizontal" && u !== "vertical" || r == null || n == null || i == null || a == null || c == null)) {
    var {
      data: g
    } = s, y;
    if (g != null && g.length > 0 ? y = g : y = p == null ? void 0 : p.slice(h, m + 1), y != null)
      return OL({
        layout: u,
        barSettings: s,
        pos: o,
        parentViewBox: t,
        bandSize: c,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: a,
        stackedData: f,
        displayedData: y,
        offset: e,
        cells: d,
        dataStartIndex: h
      });
  }
}), X2 = ["index"];
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(null, arguments);
}
function Z2(e, t) {
  if (e == null) return {};
  var r, n, i = J2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function J2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var wx = /* @__PURE__ */ v.createContext(void 0), Q2 = (e) => {
  var t = v.useContext(wx);
  if (t != null)
    return t.stackId;
  if (e != null)
    return C1(e);
}, eL = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), tL = (e) => {
  var t = v.useContext(wx);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(eL(r, e), ")");
  }
}, Px = (e) => {
  var {
    index: t
  } = e, r = Z2(e, X2), n = tL(t);
  return /* @__PURE__ */ v.createElement(se, Oc({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, rL = ["onMouseEnter", "onMouseLeave", "onClick"], nL = ["value", "background", "tooltipPosition"], iL = ["id"], aL = ["onMouseEnter", "onClick", "onMouseLeave"];
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, or.apply(null, arguments);
}
function pm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), !0).forEach(function(n) {
      oL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oL(e, t, r) {
  return (t = uL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uL(e) {
  var t = lL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qa(e, t) {
  if (e == null) return {};
  var r, n, i = cL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function cL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sL = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: ur(r, t),
    payload: e
  }];
}, fL = /* @__PURE__ */ v.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: a,
    hide: o,
    unit: u,
    tooltipType: l,
    id: c
  } = e, f = {
    dataDefinedOnItem: void 0,
    getPosition: Lr,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: ur(a, t),
      hide: o,
      type: l,
      color: i,
      unit: u,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ v.createElement(Xo, {
    tooltipEntrySettings: f
  });
});
function dL(e) {
  var t = N(Wt), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: o,
    onMouseLeave: u,
    onClick: l
  } = a, c = Qa(a, rL), f = Go(o, n, a.id), s = Vo(u), d = Yo(l, n, a.id);
  if (!i || r == null)
    return null;
  var p = ir(i);
  return /* @__PURE__ */ v.createElement(Le, {
    zIndex: ZN(i, pe.barBackground)
  }, r.map((h, m) => {
    var {
      value: g,
      background: y,
      tooltipPosition: b
    } = h, x = Qa(h, nL);
    if (!y)
      return null;
    var w = f(h, m), O = s(h, m), P = d(h, m), S = Re(Re(Re(Re(Re({
      option: i,
      isActive: String(m) === t
    }, x), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), p), hn(c, h, m)), {}, {
      onMouseEnter: w,
      onMouseLeave: O,
      onClick: P,
      dataKey: n,
      index: m,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ v.createElement(Ef, or({
      key: "background-bar-".concat(m)
    }, S));
  }));
}
function vL(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n == null ? void 0 : n.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: a.width,
      lowerWidth: a.width,
      upperWidth: a.width,
      height: a.height
    };
    return Re(Re({}, o), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: a.parentViewBox,
      viewBox: o,
      fill: a.fill
    });
  });
  return /* @__PURE__ */ v.createElement(hf, {
    value: t ? i : void 0
  }, r);
}
function pL(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: a,
    dataKey: o
  } = e, u = N(Wt), l = N(cf), c = r && String(i.originalDataIndex) === u && (l == null || o === l), [f, s] = v.useState(!1), [d, p] = v.useState(!1);
  v.useEffect(() => {
    var x;
    return c ? (s(!0), x = requestAnimationFrame(() => {
      p(!0);
    })) : p(!1), () => {
      cancelAnimationFrame(x);
    };
  }, [c]);
  var h = v.useCallback(() => {
    c || s(!1);
  }, [c]), m = c && d, g = c || f, y;
  c ? r === !0 ? y = t : y = r : y = t;
  var b = /* @__PURE__ */ v.createElement(Ef, or({}, n, {
    name: String(n.name)
  }, i, {
    isActive: m,
    option: y,
    index: a,
    dataKey: o,
    onTransitionEnd: h
  }));
  return g ? /* @__PURE__ */ v.createElement(Le, {
    zIndex: pe.activeBar
  }, /* @__PURE__ */ v.createElement(Px, {
    index: i.originalDataIndex
  }, b)) : b;
}
function hL(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: a
  } = e;
  return /* @__PURE__ */ v.createElement(Ef, or({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: a
  }));
}
function mL(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = Be(n)) !== null && t !== void 0 ? t : {}, {
    id: a
  } = i, o = Qa(i, iL), {
    shape: u,
    dataKey: l,
    activeBar: c
  } = n, {
    onMouseEnter: f,
    onClick: s,
    onMouseLeave: d
  } = n, p = Qa(n, aL), h = Go(f, l, a), m = Vo(d), g = Yo(s, l, a);
  return r ? /* @__PURE__ */ v.createElement(v.Fragment, null, r.map((y, b) => /* @__PURE__ */ v.createElement(Px, or({
    index: y.originalDataIndex,
    key: "rectangle-".concat(y == null ? void 0 : y.x, "-").concat(y == null ? void 0 : y.y, "-").concat(y == null ? void 0 : y.value, "-").concat(b),
    className: "recharts-bar-rectangle"
  }, hn(p, y, b), {
    onMouseEnter: h(y, b),
    onMouseLeave: m(y, b),
    onClick: g(y, b)
  }), c ? /* @__PURE__ */ v.createElement(pL, {
    shape: u,
    activeBar: c,
    baseProps: o,
    entry: y,
    index: b,
    dataKey: l
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ v.createElement(hL, {
      shape: u,
      baseProps: o,
      entry: y,
      index: b,
      dataKey: l
    })
  )))) : null;
}
function yL(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: l,
    onAnimationEnd: c,
    onAnimationStart: f
  } = t, s = r.current, d = yn(t, "recharts-bar-"), [p, h] = v.useState(!1), m = !p, g = v.useCallback(() => {
    typeof c == "function" && c(), h(!1);
  }, [c]), y = v.useCallback(() => {
    typeof f == "function" && f(), h(!0);
  }, [f]);
  return /* @__PURE__ */ v.createElement(vL, {
    showLabels: m,
    rects: n
  }, /* @__PURE__ */ v.createElement(mn, {
    animationId: d,
    begin: o,
    duration: u,
    isActive: a,
    easing: l,
    onAnimationEnd: g,
    onAnimationStart: y,
    key: d
  }, (b) => {
    var x = b === 1 ? n : n == null ? void 0 : n.map((w, O) => {
      var P = s && s[O];
      if (P)
        return Re(Re({}, w), {}, {
          x: ee(P.x, w.x, b),
          y: ee(P.y, w.y, b),
          width: ee(P.width, w.width, b),
          height: ee(P.height, w.height, b)
        });
      if (i === "horizontal") {
        var S = ee(0, w.height, b), E = ee(w.stackedBarStart, w.y, b);
        return Re(Re({}, w), {}, {
          y: E,
          height: S
        });
      }
      var I = ee(0, w.width, b), j = ee(w.stackedBarStart, w.x, b);
      return Re(Re({}, w), {}, {
        width: I,
        x: j
      });
    });
    return b > 0 && (r.current = x ?? null), x == null ? null : /* @__PURE__ */ v.createElement(se, null, /* @__PURE__ */ v.createElement(mL, {
      props: t,
      data: x
    }));
  }), /* @__PURE__ */ v.createElement(Wo, {
    label: t.label
  }), t.children);
}
function gL(e) {
  var t = v.useRef(null);
  return /* @__PURE__ */ v.createElement(yL, {
    previousRectanglesRef: t,
    props: e
  });
}
var Ox = 0, bL = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: V(e, t)
  };
};
class xL extends v.PureComponent {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      needClip: u,
      background: l,
      id: c
    } = this.props;
    if (t || r == null)
      return null;
    var f = K("recharts-bar", i), s = c;
    return /* @__PURE__ */ v.createElement(se, {
      className: f,
      id: c
    }, u && /* @__PURE__ */ v.createElement("defs", null, /* @__PURE__ */ v.createElement(Af, {
      clipPathId: s,
      xAxisId: a,
      yAxisId: o
    })), /* @__PURE__ */ v.createElement(se, {
      className: "recharts-bar-rectangles",
      clipPath: u ? "url(#clipPath-".concat(s, ")") : void 0
    }, /* @__PURE__ */ v.createElement(dL, {
      data: r,
      dataKey: n,
      background: l,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ v.createElement(gL, this.props)));
  }
}
var wL = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: Ox,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: pe.bar
};
function PL(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: l,
    animationEasing: c,
    isAnimationActive: f
  } = e, {
    needClip: s
  } = Qo(t, r), d = Rr(), p = Ie(), h = Ho(e.children, _n), m = N((b) => Y2(b, e.id, p, h));
  if (d !== "vertical" && d !== "horizontal")
    return null;
  var g, y = m == null ? void 0 : m[0];
  return y == null || y.height == null || y.width == null ? g = 0 : g = d === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ v.createElement(Of, {
    xAxisId: t,
    yAxisId: r,
    data: m,
    dataPointFormatter: bL,
    errorBarOffset: g
  }, /* @__PURE__ */ v.createElement(xL, or({}, e, {
    layout: d,
    needClip: s,
    data: m,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: l,
    animationEasing: c,
    isAnimationActive: f
  })));
}
function OL(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n,
      hasCustomShape: i
    },
    pos: a,
    bandSize: o,
    xAxis: u,
    yAxis: l,
    xAxisTicks: c,
    yAxisTicks: f,
    stackedData: s,
    displayedData: d,
    offset: p,
    cells: h,
    parentViewBox: m,
    dataStartIndex: g
  } = e, y = t === "horizontal" ? l : u, b = s ? y.scale.domain() : null, x = k1({
    numericAxis: y
  }), w = y.scale.map(x);
  return d.map((O, P) => {
    var S, E, I, j, C, _;
    if (s) {
      var z = s[P + g];
      if (z == null)
        return null;
      S = S1(z, b);
    } else
      S = V(O, r), Array.isArray(S) || (S = [x, S]);
    var M = T2(n, Ox)(S[1], P);
    if (t === "horizontal") {
      var R, W = l.scale.map(S[0]), F = l.scale.map(S[1]);
      if (W == null || F == null)
        return null;
      E = ev({
        axis: u,
        ticks: c,
        bandSize: o,
        offset: a.offset,
        entry: O,
        index: P
      }), I = (R = F ?? W) !== null && R !== void 0 ? R : void 0, j = a.size;
      var Y = W - F;
      if (C = St(Y) ? 0 : Y, _ = {
        x: E,
        y: p.top,
        width: j,
        height: p.height
      }, Math.abs(M) > 0 && Math.abs(C) < Math.abs(M)) {
        var B = _e(C || M) * (Math.abs(M) - Math.abs(C));
        I -= B, C += B;
      }
    } else {
      var G = u.scale.map(S[0]), ye = u.scale.map(S[1]);
      if (G == null || ye == null)
        return null;
      if (E = G, I = ev({
        axis: l,
        ticks: f,
        bandSize: o,
        offset: a.offset,
        entry: O,
        index: P
      }), j = ye - G, C = a.size, _ = {
        x: p.left,
        y: I,
        width: p.width,
        height: C
      }, Math.abs(M) > 0 && Math.abs(j) < Math.abs(M)) {
        var ue = _e(j || M) * (Math.abs(M) - Math.abs(j));
        j += ue;
      }
    }
    if (E == null || I == null || j == null || C == null || !i && (j === 0 || C === 0))
      return null;
    var Ye = Re(Re({}, O), {}, {
      stackedBarStart: w,
      x: E,
      y: I,
      width: j,
      height: C,
      value: s ? S : S[1],
      payload: O,
      background: _,
      tooltipPosition: {
        x: E + j / 2,
        y: I + C / 2
      },
      parentViewBox: m,
      originalDataIndex: P
    }, h && h[P] && h[P].props);
    return Ye;
  }).filter(Boolean);
}
function AL(e) {
  var t = he(e, wL), r = Q2(t.stackId), n = Ie();
  return /* @__PURE__ */ v.createElement(Zo, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(gf, {
    legendPayload: sL(t)
  }), /* @__PURE__ */ v.createElement(fL, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ v.createElement(bf, {
    type: "bar",
    id: i,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: r,
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: n,
    hasCustomShape: t.shape != null
  }), /* @__PURE__ */ v.createElement(Le, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ v.createElement(PL, or({}, t, {
    id: i
  })))));
}
var Ax = /* @__PURE__ */ v.memo(AL, zr);
Ax.displayName = "Bar";
var SL = ["option", "isActive"];
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vn.apply(null, arguments);
}
function EL(e, t) {
  if (e == null) return {};
  var r, n, i = _L(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _L(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function IL(e) {
  var {
    option: t,
    isActive: r
  } = e, n = EL(e, SL);
  return typeof t == "string" ? /* @__PURE__ */ v.createElement(ci, Vn({
    option: /* @__PURE__ */ v.createElement(ao, Vn({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ v.createElement(ci, Vn({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
var jL = (e, t, r, n, i, a, o) => kt(e, "xAxis", t, o), CL = (e, t, r, n, i, a, o) => Ct(e, "xAxis", t, o), kL = (e, t, r, n, i, a, o) => kt(e, "yAxis", r, o), TL = (e, t, r, n, i, a, o) => Ct(e, "yAxis", r, o), ML = (e, t, r, n) => EC(e, "zAxis", n, !1), DL = (e, t, r, n, i) => i, NL = (e, t, r, n, i, a) => a, $L = (e, t, r, n, i, a, o) => gn(e, void 0, void 0, o), LL = A([_i, DL], (e, t) => e.filter((r) => r.type === "scatter").find((r) => r.id === t)), RL = A([$L, jL, CL, kL, TL, ML, LL, NL], (e, t, r, n, i, a, o, u) => {
  var {
    chartData: l,
    dataStartIndex: c,
    dataEndIndex: f
  } = e;
  if (o != null) {
    var s;
    if ((o == null ? void 0 : o.data) != null && o.data.length > 0 ? s = o.data : s = l == null ? void 0 : l.slice(c, f + 1), !(s == null || t == null || n == null || r == null || i == null || (r == null ? void 0 : r.length) === 0 || (i == null ? void 0 : i.length) === 0))
      return JL({
        displayedData: s,
        xAxis: t,
        yAxis: n,
        zAxis: a,
        scatterSettings: o,
        xAxisTicks: r,
        yAxisTicks: i,
        cells: u
      });
  }
}), zL = ["id"], BL = ["onMouseEnter", "onClick", "onMouseLeave"], FL = ["animationBegin", "animationDuration", "animationEasing", "hide", "isAnimationActive", "legendType", "lineJointType", "lineType", "shape", "xAxisId", "yAxisId", "zAxisId"];
function Ac(e, t) {
  if (e == null) return {};
  var r, n, i = KL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function KL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $r.apply(null, arguments);
}
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), !0).forEach(function(n) {
      WL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WL(e, t, r) {
  return (t = qL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qL(e) {
  var t = UL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HL = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: ur(r, t),
    payload: e
  }];
}, GL = /* @__PURE__ */ v.memo((e) => {
  var {
    dataKey: t,
    points: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: u,
    tooltipType: l,
    id: c
  } = e, f = {
    dataDefinedOnItem: r == null ? void 0 : r.map((s) => s.tooltipPayload),
    getPosition: (s) => {
      var d;
      return r == null || (d = r[Number(s)]) === null || d === void 0 ? void 0 : d.tooltipPosition;
    },
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      nameKey: void 0,
      dataKey: t,
      name: ur(o, t),
      hide: u,
      type: l,
      color: a,
      unit: "",
      // why doesn't Scatter support unit?
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ v.createElement(Xo, {
    tooltipEntrySettings: f
  });
});
function VL(e) {
  var {
    points: t,
    props: r
  } = e, {
    line: n,
    lineType: i,
    lineJointType: a
  } = r;
  if (!n)
    return null;
  var o = Be(r), u = ir(n), l, c;
  if (i === "joint")
    l = t.map((g) => {
      var y, b;
      return {
        x: (y = g.cx) !== null && y !== void 0 ? y : null,
        y: (b = g.cy) !== null && b !== void 0 ? b : null
      };
    });
  else if (i === "fitting") {
    var {
      xmin: f,
      xmax: s,
      a: d,
      b: p
    } = Qw(t), h = (g) => d * g + p;
    l = [{
      x: f,
      y: h(f)
    }, {
      x: s,
      y: h(s)
    }];
  }
  var m = Ve(Ve(Ve({}, o), {}, {
    // @ts-expect-error customLineProps is contributing unknown props
    fill: "none",
    // @ts-expect-error customLineProps is contributing unknown props
    stroke: o && o.fill
  }, u), {}, {
    // @ts-expect-error linePoints is used before it is assigned (???)
    points: l
  });
  return /* @__PURE__ */ v.isValidElement(n) ? c = /* @__PURE__ */ v.cloneElement(n, m) : typeof n == "function" ? c = n(m) : c = /* @__PURE__ */ v.createElement(Ao, $r({}, m, {
    type: a
  })), /* @__PURE__ */ v.createElement(se, {
    className: "recharts-scatter-line",
    key: "recharts-scatter-line"
  }, c);
}
function YL(e) {
  var {
    showLabels: t,
    points: r,
    children: n
  } = e, i = mi(), a = v.useMemo(() => r == null ? void 0 : r.map((o) => {
    var u, l, c = {
      /*
       * Scatter label uses x and y as the reference point for the label,
       * not cx and cy.
       */
      x: (u = o.x) !== null && u !== void 0 ? u : 0,
      /*
       * Scatter label uses x and y as the reference point for the label,
       * not cx and cy.
       */
      y: (l = o.y) !== null && l !== void 0 ? l : 0,
      width: o.width,
      height: o.height,
      lowerWidth: o.width,
      upperWidth: o.width
    };
    return Ve(Ve({}, c), {}, {
      /*
       * Here we put undefined because Scatter shows two values usually, one for X and one for Y.
       * LabelList will see this undefined and will use its own `dataKey` prop to determine which value to show,
       * using the payload below.
       */
      value: void 0,
      payload: o.payload,
      viewBox: c,
      parentViewBox: i,
      fill: void 0
    });
  }), [i, r]);
  return /* @__PURE__ */ v.createElement(hf, {
    value: t ? a : void 0
  }, n);
}
function XL(e) {
  var {
    points: t,
    allOtherScatterProps: r
  } = e, {
    shape: n,
    activeShape: i,
    dataKey: a
  } = r, {
    id: o
  } = r, u = Ac(r, zL), l = N(Wt), {
    onMouseEnter: c,
    onClick: f,
    onMouseLeave: s
  } = r, d = Ac(r, BL), p = Go(c, a, o), h = Vo(s), m = Yo(f, a, o);
  if (!fP(t))
    return null;
  var g = Be(u);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(VL, {
    points: t,
    props: u
  }), t.map((y, b) => {
    var x = i != null && i !== !1, w = x && l === String(b), O = x && w ? i : n, P = Ve(Ve(Ve({}, g), y), {}, {
      index: b,
      [Xc]: String(o)
    });
    return /* @__PURE__ */ v.createElement(Le, {
      key: "symbol-".concat(y == null ? void 0 : y.cx, "-").concat(y == null ? void 0 : y.cy, "-").concat(y == null ? void 0 : y.size, "-").concat(b),
      zIndex: w ? pe.activeDot : void 0
    }, /* @__PURE__ */ v.createElement(se, $r({
      className: "recharts-scatter-symbol"
    }, hn(d, y, b), {
      onMouseEnter: p(y, b),
      onMouseLeave: h(y, b),
      onClick: m(y, b)
    }), /* @__PURE__ */ v.createElement(IL, $r({
      option: O,
      isActive: w
    }, P))));
  }));
}
function ZL(e) {
  var {
    previousPointsRef: t,
    props: r
  } = e, {
    points: n,
    isAnimationActive: i,
    animationBegin: a,
    animationDuration: o,
    animationEasing: u
  } = r, l = t.current, c = yn(r, "recharts-scatter-"), [f, s] = v.useState(!1), d = v.useCallback(() => {
    s(!1);
  }, []), p = v.useCallback(() => {
    s(!0);
  }, []), h = !f;
  return /* @__PURE__ */ v.createElement(YL, {
    showLabels: h,
    points: n
  }, r.children, /* @__PURE__ */ v.createElement(mn, {
    animationId: c,
    begin: a,
    duration: o,
    isActive: i,
    easing: u,
    onAnimationEnd: d,
    onAnimationStart: p,
    key: c
  }, (m) => {
    var g = m === 1 ? n : n == null ? void 0 : n.map((y, b) => {
      var x = l && l[b];
      return x ? Ve(Ve({}, y), {}, {
        cx: y.cx == null ? void 0 : ee(x.cx, y.cx, m),
        cy: y.cy == null ? void 0 : ee(x.cy, y.cy, m),
        size: ee(x.size, y.size, m)
      }) : Ve(Ve({}, y), {}, {
        size: ee(0, y.size, m)
      });
    });
    return m > 0 && (t.current = g), /* @__PURE__ */ v.createElement(se, null, /* @__PURE__ */ v.createElement(XL, {
      points: g,
      allOtherScatterProps: r,
      showLabels: h
    }));
  }), /* @__PURE__ */ v.createElement(Wo, {
    label: r.label
  }));
}
function JL(e) {
  var {
    displayedData: t,
    xAxis: r,
    yAxis: n,
    zAxis: i,
    scatterSettings: a,
    xAxisTicks: o,
    yAxisTicks: u,
    cells: l
  } = e, c = Q(r.dataKey) ? a.dataKey : r.dataKey, f = Q(n.dataKey) ? a.dataKey : n.dataKey, s = i && i.dataKey, d = i ? i.range : Mb.range, p = d && d[0], h = r.scale.bandwidth ? r.scale.bandwidth() : 0, m = n.scale.bandwidth ? n.scale.bandwidth() : 0;
  return t.map((g, y) => {
    var b = V(g, c), x = V(g, f), w = !Q(s) && V(g, s) || "-", O = [{
      name: Q(r.dataKey) ? a.name : r.name || String(r.dataKey),
      unit: r.unit || "",
      // @ts-expect-error getValueByDataKey does not validate the output type
      value: b,
      payload: g,
      dataKey: c,
      type: a.tooltipType,
      graphicalItemId: a.id
    }, {
      name: Q(n.dataKey) ? a.name : n.name || String(n.dataKey),
      unit: n.unit || "",
      // @ts-expect-error getValueByDataKey does not validate the output type
      value: x,
      payload: g,
      dataKey: f,
      type: a.tooltipType,
      graphicalItemId: a.id
    }];
    w !== "-" && i != null && O.push({
      // @ts-expect-error name prop should not have dataKey in it
      name: i.name || i.dataKey,
      unit: i.unit || "",
      // @ts-expect-error getValueByDataKey does not validate the output type
      value: w,
      payload: g,
      dataKey: s,
      type: a.tooltipType,
      graphicalItemId: a.id
    });
    var P = Pa({
      axis: r,
      ticks: o,
      bandSize: h,
      entry: g,
      index: y,
      dataKey: c
    }), S = Pa({
      axis: n,
      ticks: u,
      bandSize: m,
      entry: g,
      index: y,
      dataKey: f
    }), E = w !== "-" && i != null ? i.scale.map(w) : p, I = E == null ? 0 : Math.sqrt(Math.max(E, 0) / Math.PI);
    return Ve(Ve({}, g), {}, {
      cx: P,
      cy: S,
      x: P == null ? void 0 : P - I,
      y: S == null ? void 0 : S - I,
      width: 2 * I,
      height: 2 * I,
      size: E,
      node: {
        x: b,
        y: x,
        z: w
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: P,
        y: S
      },
      payload: g
    }, l && l[y] && l[y].props);
  });
}
var QL = (e, t, r) => ({
  x: e.cx,
  y: e.cy,
  value: Number(r === "x" ? e.node.x : e.node.y),
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: V(e, t)
});
function eR(e) {
  var {
    hide: t,
    points: r,
    className: n,
    needClip: i,
    xAxisId: a,
    yAxisId: o,
    id: u
  } = e, l = v.useRef(null);
  if (t)
    return null;
  var c = K("recharts-scatter", n), f = u;
  return /* @__PURE__ */ v.createElement(Le, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ v.createElement(se, {
    className: c,
    clipPath: i ? "url(#clipPath-".concat(f, ")") : void 0,
    id: u
  }, i && /* @__PURE__ */ v.createElement("defs", null, /* @__PURE__ */ v.createElement(Af, {
    clipPathId: f,
    xAxisId: a,
    yAxisId: o
  })), /* @__PURE__ */ v.createElement(Of, {
    xAxisId: a,
    yAxisId: o,
    data: r,
    dataPointFormatter: QL,
    errorBarOffset: 0
  }, /* @__PURE__ */ v.createElement(se, {
    key: "recharts-scatter-symbols"
  }, /* @__PURE__ */ v.createElement(ZL, {
    props: e,
    previousPointsRef: l
  })))));
}
var Sx = {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  label: !1,
  line: !1,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  shape: "circle",
  hide: !1,
  isAnimationActive: "auto",
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear",
  zIndex: pe.scatter
};
function tR(e) {
  var t = he(e, Sx), {
    animationBegin: r,
    animationDuration: n,
    animationEasing: i,
    hide: a,
    isAnimationActive: o,
    legendType: u,
    lineJointType: l,
    lineType: c,
    shape: f,
    xAxisId: s,
    yAxisId: d,
    zAxisId: p
  } = t, h = Ac(t, FL), {
    needClip: m
  } = Qo(s, d), g = v.useMemo(() => Ho(e.children, _n), [e.children]), y = Ie(), b = N((x) => RL(x, s, d, p, e.id, g, y));
  return m == null || b == null ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(GL, {
    dataKey: e.dataKey,
    points: b,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fill: e.fill,
    name: e.name,
    hide: e.hide,
    tooltipType: e.tooltipType,
    id: e.id
  }), /* @__PURE__ */ v.createElement(eR, $r({}, h, {
    xAxisId: s,
    yAxisId: d,
    zAxisId: p,
    lineType: c,
    lineJointType: l,
    legendType: u,
    shape: f,
    hide: a,
    isAnimationActive: o,
    animationBegin: r,
    animationDuration: n,
    animationEasing: i,
    points: b,
    needClip: m
  })));
}
function rR(e) {
  var t = he(e, Sx), r = Ie();
  return /* @__PURE__ */ v.createElement(Zo, {
    id: t.id,
    type: "scatter"
  }, (n) => /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(gf, {
    legendPayload: HL(t)
  }), /* @__PURE__ */ v.createElement(bf, {
    type: "scatter",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: t.zAxisId,
    dataKey: t.dataKey,
    hide: t.hide,
    name: t.name,
    tooltipType: t.tooltipType,
    isPanorama: r
  }), /* @__PURE__ */ v.createElement(tR, $r({}, t, {
    id: n
  }))));
}
var Ex = /* @__PURE__ */ v.memo(rR, zr);
Ex.displayName = "Scatter";
var nR = ["domain", "range"], iR = ["domain", "range"];
function mm(e, t) {
  if (e == null) return {};
  var r, n, i = aR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function aR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ym(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function _x(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = mm(e, nR), {
    domain: a,
    range: o
  } = t, u = mm(t, iR);
  return !ym(r, a) || !ym(n, o) ? !1 : zr(i, u);
}
var oR = ["type"], uR = ["dangerouslySetInnerHTML", "ticks", "scale"], lR = ["id", "scale"];
function Sc() {
  return Sc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sc.apply(null, arguments);
}
function gm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), !0).forEach(function(n) {
      cR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cR(e, t, r) {
  return (t = sR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sR(e) {
  var t = fR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ec(e, t) {
  if (e == null) return {};
  var r, n, i = dR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function vR(e) {
  var t = te(), r = v.useRef(null), n = ng(), {
    type: i
  } = e, a = Ec(e, oR), o = Eo(n, "xAxis", i), u = v.useMemo(() => {
    if (o != null)
      return bm(bm({}, a), {}, {
        type: o
      });
  }, [a, o]);
  return v.useLayoutEffect(() => {
    u != null && (r.current === null ? t(_N(u)) : r.current !== u && t(IN({
      prev: r.current,
      next: u
    })), r.current = u);
  }, [u, t]), v.useLayoutEffect(() => () => {
    r.current && (t(jN(r.current)), r.current = null);
  }, [t]), null;
}
var pR = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = N(Zc), i = Ie(), a = "xAxis", o = N((y) => n0(y, a, t, i)), u = N((y) => e0(y, t)), l = N((y) => bC(y, t)), c = N((y) => kb(y, t));
  if (u == null || l == null || c == null)
    return null;
  var {
    dangerouslySetInnerHTML: f,
    ticks: s,
    scale: d
  } = e, p = Ec(e, uR), {
    id: h,
    scale: m
  } = c, g = Ec(c, lR);
  return /* @__PURE__ */ v.createElement(Pf, Sc({}, p, g, {
    x: l.x,
    y: l.y,
    width: u.width,
    height: u.height,
    className: K("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: o,
    axisType: a,
    axisId: t
  }));
}, hR = {
  allowDataOverflow: xe.allowDataOverflow,
  allowDecimals: xe.allowDecimals,
  allowDuplicatedCategory: xe.allowDuplicatedCategory,
  angle: xe.angle,
  axisLine: Rt.axisLine,
  height: xe.height,
  hide: !1,
  includeHidden: xe.includeHidden,
  interval: xe.interval,
  label: !1,
  minTickGap: xe.minTickGap,
  mirror: xe.mirror,
  orientation: xe.orientation,
  padding: xe.padding,
  reversed: xe.reversed,
  scale: xe.scale,
  tick: xe.tick,
  tickCount: xe.tickCount,
  tickLine: Rt.tickLine,
  tickSize: Rt.tickSize,
  type: xe.type,
  niceTicks: xe.niceTicks,
  xAxisId: 0
}, mR = (e) => {
  var t = he(e, hR);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(vR, {
    allowDataOverflow: t.allowDataOverflow,
    allowDecimals: t.allowDecimals,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    angle: t.angle,
    dataKey: t.dataKey,
    domain: t.domain,
    height: t.height,
    hide: t.hide,
    id: t.xAxisId,
    includeHidden: t.includeHidden,
    interval: t.interval,
    minTickGap: t.minTickGap,
    mirror: t.mirror,
    name: t.name,
    orientation: t.orientation,
    padding: t.padding,
    reversed: t.reversed,
    scale: t.scale,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ v.createElement(pR, t));
}, ia = /* @__PURE__ */ v.memo(mR, _x);
ia.displayName = "XAxis";
var yR = ["type"], gR = ["dangerouslySetInnerHTML", "ticks", "scale"], bR = ["id", "scale"];
function _c() {
  return _c = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _c.apply(null, arguments);
}
function xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(r), !0).forEach(function(n) {
      xR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xR(e, t, r) {
  return (t = wR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wR(e) {
  var t = PR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ic(e, t) {
  if (e == null) return {};
  var r, n, i = OR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function OR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function AR(e) {
  var t = te(), r = v.useRef(null), n = ng(), {
    type: i
  } = e, a = Ic(e, yR), o = Eo(n, "yAxis", i), u = v.useMemo(() => {
    if (o != null)
      return wm(wm({}, a), {}, {
        type: o
      });
  }, [o, a]);
  return v.useLayoutEffect(() => {
    u != null && (r.current === null ? t(CN(u)) : r.current !== u && t(kN({
      prev: r.current,
      next: u
    })), r.current = u);
  }, [u, t]), v.useLayoutEffect(() => () => {
    r.current && (t(TN(r.current)), r.current = null);
  }, [t]), null;
}
function SR(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, a = v.useRef(null), o = v.useRef(null), u = N(Zc), l = Ie(), c = te(), f = "yAxis", s = N((P) => t0(P, t)), d = N((P) => wC(P, t)), p = N((P) => n0(P, f, t, l)), h = N((P) => Tb(P, t));
  if (v.useLayoutEffect(() => {
    if (!(n !== "auto" || !s || pf(i) || /* @__PURE__ */ v.isValidElement(i) || h == null)) {
      var P = a.current;
      if (P) {
        var S = P.getCalculatedWidth();
        Math.round(s.width) !== Math.round(S) && c(MN({
          id: t,
          width: S
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    p,
    s,
    c,
    i,
    t,
    n,
    h
  ]), s == null || d == null || h == null)
    return null;
  var {
    dangerouslySetInnerHTML: m,
    ticks: g,
    scale: y
  } = e, b = Ic(e, gR), {
    id: x,
    scale: w
  } = h, O = Ic(h, bR);
  return /* @__PURE__ */ v.createElement(Pf, _c({}, b, O, {
    ref: a,
    labelRef: o,
    x: d.x,
    y: d.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: s.width,
    height: s.height,
    className: K("recharts-".concat(f, " ").concat(f), r),
    viewBox: u,
    ticks: p,
    axisType: f,
    axisId: t
  }));
}
var ER = {
  allowDataOverflow: we.allowDataOverflow,
  allowDecimals: we.allowDecimals,
  allowDuplicatedCategory: we.allowDuplicatedCategory,
  angle: we.angle,
  axisLine: Rt.axisLine,
  hide: !1,
  includeHidden: we.includeHidden,
  interval: we.interval,
  label: !1,
  minTickGap: we.minTickGap,
  mirror: we.mirror,
  orientation: we.orientation,
  padding: we.padding,
  reversed: we.reversed,
  scale: we.scale,
  tick: we.tick,
  tickCount: we.tickCount,
  tickLine: Rt.tickLine,
  tickSize: Rt.tickSize,
  type: we.type,
  niceTicks: we.niceTicks,
  width: we.width,
  yAxisId: 0
}, _R = (e) => {
  var t = he(e, ER);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(AR, {
    interval: t.interval,
    id: t.yAxisId,
    scale: t.scale,
    type: t.type,
    domain: t.domain,
    allowDataOverflow: t.allowDataOverflow,
    dataKey: t.dataKey,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    allowDecimals: t.allowDecimals,
    tickCount: t.tickCount,
    padding: t.padding,
    includeHidden: t.includeHidden,
    reversed: t.reversed,
    ticks: t.ticks,
    width: t.width,
    orientation: t.orientation,
    mirror: t.mirror,
    hide: t.hide,
    unit: t.unit,
    name: t.name,
    angle: t.angle,
    minTickGap: t.minTickGap,
    tick: t.tick,
    tickFormatter: t.tickFormatter,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ v.createElement(SR, t));
}, aa = /* @__PURE__ */ v.memo(_R, _x);
aa.displayName = "YAxis";
var IR = (e, t) => t, _f = A([IR, J, Hg, je, w0, Xt, qk, Oe], Zk);
function jR(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function If(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (jR(e)) {
    var i = e.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var a = e.currentTarget;
    r = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1, n = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1;
  }
  var o = (u, l) => ({
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    relativeX: Math.round((u - t.left) / r),
    relativeY: Math.round((l - t.top) / n)
  });
  return "touches" in e ? Array.from(e.touches).map((u) => o(u.clientX, u.clientY)) : o(e.clientX, e.clientY);
}
var Ix = tt("mouseClick"), jx = pi();
jx.startListening({
  actionCreator: Ix,
  effect: (e, t) => {
    var r = e.payload, n = _f(t.getState(), If(r));
    (n == null ? void 0 : n.activeIndex) != null && t.dispatch(RC({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var jc = tt("mouseMove"), Cx = pi(), Xr = null, vr = null, kl = null;
Cx.startListening({
  actionCreator: jc,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: a
    } = n.eventSettings, o = a === "all" || (a == null ? void 0 : a.includes("mousemove"));
    Xr !== null && (cancelAnimationFrame(Xr), Xr = null), vr !== null && (typeof i != "number" || !o) && (clearTimeout(vr), vr = null), kl = If(r);
    var u = () => {
      var l = t.getState(), c = Ci(l, l.tooltip.settings.shared);
      if (!kl) {
        Xr = null, vr = null;
        return;
      }
      if (c === "axis") {
        var f = _f(l, kl);
        (f == null ? void 0 : f.activeIndex) != null ? t.dispatch(f0({
          activeIndex: f.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: f.activeCoordinate
        })) : t.dispatch(s0());
      }
      Xr = null, vr = null;
    };
    if (!o) {
      u();
      return;
    }
    i === "raf" ? Xr = requestAnimationFrame(u) : typeof i == "number" && vr === null && (vr = setTimeout(u, i));
  }
});
function CR(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Pm = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, kx = $e({
  name: "rootProps",
  initialState: Pm,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Pm.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), kR = kx.reducer, {
  updateOptions: TR
} = kx.actions, MR = null, DR = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, Tx = $e({
  name: "polarOptions",
  initialState: MR,
  reducers: DR
}), {
  updatePolarOptions: NR
} = Tx.actions, $R = Tx.reducer, Mx = tt("keyDown"), Dx = tt("focus"), Nx = tt("blur"), eu = pi(), Zr = null, pr = null, Xi = null;
eu.startListening({
  actionCreator: Mx,
  effect: (e, t) => {
    Xi = e.payload, Zr !== null && (cancelAnimationFrame(Zr), Zr = null);
    var r = t.getState(), {
      throttleDelay: n,
      throttledEvents: i
    } = r.eventSettings, a = i === "all" || i.includes("keydown");
    pr !== null && (typeof n != "number" || !a) && (clearTimeout(pr), pr = null);
    var o = () => {
      try {
        var u = t.getState(), l = u.rootProps.accessibilityLayer !== !1;
        if (!l)
          return;
        var {
          keyboardInteraction: c
        } = u.tooltip, f = Xi;
        if (f !== "ArrowRight" && f !== "ArrowLeft" && f !== "Enter")
          return;
        var s = Hn(c, Dr(u), dn(u), vn(u)), d = s == null ? -1 : Number(s), p = !Number.isFinite(d) || d < 0, h = Xt(u), m = Dr(u), g = Ci(u, u.tooltip.settings.shared);
        if (f === "Enter") {
          if (p)
            return;
          var y = Ga(u, g, "hover", String(c.index));
          t.dispatch(Ha({
            active: !c.active,
            activeIndex: c.index,
            activeCoordinate: y
          }));
          return;
        }
        var b = _C(u), x = b === "left-to-right" ? 1 : -1, w = f === "ArrowRight" ? 1 : -1, O;
        if (p) {
          var P = dn(u), S = vn(u), E = w * x, I = (M) => ({
            active: !1,
            index: String(M),
            dataKey: void 0,
            graphicalItemId: void 0,
            coordinate: void 0
          });
          if (O = -1, E > 0) {
            for (var j = 0; j < m.length; j++)
              if (Hn(I(j), m, P, S) != null) {
                O = j;
                break;
              }
          } else
            for (var C = m.length - 1; C >= 0; C--)
              if (Hn(I(C), m, P, S) != null) {
                O = C;
                break;
              }
          if (O < 0)
            return;
        } else {
          O = d + w * x;
          var _ = (h == null ? void 0 : h.length) || m.length;
          if (_ === 0 || O >= _ || O < 0)
            return;
        }
        var z = Ga(u, g, "hover", String(O));
        t.dispatch(Ha({
          active: !0,
          activeIndex: O.toString(),
          activeCoordinate: z
        }));
      } finally {
        Zr = null, pr = null;
      }
    };
    if (!a) {
      o();
      return;
    }
    n === "raf" ? Zr = requestAnimationFrame(o) : typeof n == "number" && pr === null && (o(), Xi = null, pr = setTimeout(() => {
      Xi ? o() : (pr = null, Zr = null);
    }, n));
  }
});
eu.startListening({
  actionCreator: Dx,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = Ci(r, r.tooltip.settings.shared), u = Ga(r, o, "hover", String(a));
        t.dispatch(Ha({
          active: !0,
          activeIndex: a,
          activeCoordinate: u
        }));
      }
    }
  }
});
eu.startListening({
  actionCreator: Nx,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch(Ha({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function $x(e) {
  e.persist();
  var {
    currentTarget: t
  } = e;
  return new Proxy(e, {
    get: (r, n) => {
      if (n === "currentTarget")
        return t;
      var i = Reflect.get(r, n);
      return typeof i == "function" ? i.bind(r) : i;
    }
  });
}
var at = tt("externalEvent"), Lx = pi(), Zi = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map();
Lx.startListening({
  actionCreator: at,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, a = $x(n);
      Tl.set(i, {
        handler: r,
        reactEvent: a
      });
      var o = Zi.get(i);
      o !== void 0 && (cancelAnimationFrame(o), Zi.delete(i));
      var u = t.getState(), {
        throttleDelay: l,
        throttledEvents: c
      } = u.eventSettings, f = c, s = f === "all" || (f == null ? void 0 : f.includes(i)), d = Bn.get(i);
      d !== void 0 && (typeof l != "number" || !s) && (clearTimeout(d), Bn.delete(i));
      var p = () => {
        var g = Tl.get(i);
        try {
          if (!g)
            return;
          var {
            handler: y,
            reactEvent: b
          } = g, x = t.getState(), w = {
            activeCoordinate: Ik(x),
            activeDataKey: cf(x),
            activeIndex: Wt(x),
            activeLabel: A0(x),
            activeTooltipIndex: Wt(x),
            isTooltipActive: jk(x)
          };
          y && y(w, b);
        } finally {
          Zi.delete(i), Bn.delete(i), Tl.delete(i);
        }
      };
      if (!s) {
        p();
        return;
      }
      if (l === "raf") {
        var h = requestAnimationFrame(p);
        Zi.set(i, h);
      } else if (typeof l == "number") {
        if (!Bn.has(i)) {
          p();
          var m = setTimeout(p, l);
          Bn.set(i, m);
        }
      } else
        p();
    }
  }
});
var LR = A([En], (e) => e.tooltipItemPayloads), RR = A([LR, (e, t) => t, (e, t, r) => r], (e, t, r) => {
  if (t != null) {
    var n = e.find((a) => a.settings.graphicalItemId === r);
    if (n != null) {
      var {
        getPosition: i
      } = n;
      if (i != null)
        return i(t);
    }
  }
}), Rx = tt("touchMove"), zx = pi(), hr = null, Zt = null, Om = null, Fn = null;
zx.startListening({
  actionCreator: Rx,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      Fn = $x(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: a
      } = n.eventSettings, o = a === "all" || a.includes("touchmove");
      hr !== null && (cancelAnimationFrame(hr), hr = null), Zt !== null && (typeof i != "number" || !o) && (clearTimeout(Zt), Zt = null), Om = Array.from(r.touches).map((l) => If({
        clientX: l.clientX,
        clientY: l.clientY,
        currentTarget: r.currentTarget
      }));
      var u = () => {
        if (Fn != null) {
          var l = t.getState(), c = Ci(l, l.tooltip.settings.shared);
          if (c === "axis") {
            var f, s = (f = Om) === null || f === void 0 ? void 0 : f[0];
            if (s == null) {
              hr = null, Zt = null;
              return;
            }
            var d = _f(l, s);
            (d == null ? void 0 : d.activeIndex) != null && t.dispatch(f0({
              activeIndex: d.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: d.activeCoordinate
            }));
          } else if (c === "item") {
            var p, h = Fn.touches[0];
            if (document.elementFromPoint == null || h == null)
              return;
            var m = document.elementFromPoint(h.clientX, h.clientY);
            if (!m || !m.getAttribute)
              return;
            var g = m.getAttribute(Jy), y = (p = m.getAttribute(Xc)) !== null && p !== void 0 ? p : void 0, b = Kr(l).find((O) => O.id === y);
            if (g == null || b == null || y == null)
              return;
            var {
              dataKey: x
            } = b, w = RR(l, g, y);
            t.dispatch(c0({
              activeDataKey: x,
              activeIndex: g,
              activeCoordinate: w,
              activeGraphicalItemId: y
            }));
          }
          hr = null, Zt = null;
        }
      };
      if (!o) {
        u();
        return;
      }
      i === "raf" ? hr = requestAnimationFrame(u) : typeof i == "number" && Zt === null && (u(), Fn = null, Zt = setTimeout(() => {
        Fn ? u() : (Zt = null, hr = null);
      }, i));
    }
  }
});
var jf = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, Bx = $e({
  name: "eventSettings",
  initialState: jf,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: zR
} = Bx.actions, BR = Bx.reducer, FR = xy({
  brush: JN,
  cartesianAxis: DN,
  chartData: AT,
  errorBars: Z$,
  eventSettings: BR,
  graphicalItems: RD,
  layout: x1,
  legend: _A,
  options: bT,
  polarAxis: eD,
  polarOptions: $R,
  referenceElements: r$,
  renderedTicks: b$,
  rootProps: kR,
  tooltip: zC,
  zIndex: sT
}), KR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return UO({
    reducer: FR,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([jx.middleware, Cx.middleware, eu.middleware, Lx.middleware, zx.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Ny({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: CR
      },
      name: "recharts-".concat(r)
    }
  });
};
function Fx(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = Ie(), a = v.useRef(null);
  if (i)
    return r;
  a.current == null && (a.current = KR(t, n));
  var o = Wc;
  return /* @__PURE__ */ v.createElement(WA, {
    context: o,
    store: a.current
  }, r);
}
function WR(e) {
  var {
    layout: t,
    margin: r
  } = e, n = te(), i = Ie();
  return v.useEffect(() => {
    i || (n(y1(t)), n(m1(r)));
  }, [n, i, t, r]), null;
}
var Kx = /* @__PURE__ */ v.memo(WR, zr);
function Wx(e) {
  var t = te();
  return v.useEffect(() => {
    t(TR(e));
  }, [t, e]), null;
}
var qR = (e) => {
  var t = te();
  return v.useEffect(() => {
    t(zR(e));
  }, [t, e]), null;
}, qx = /* @__PURE__ */ v.memo(qR, zr);
function Am(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = v.useRef(null), i = te();
  return v.useLayoutEffect(() => (n.current && i(lT({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(cT({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ v.createElement("g", {
    tabIndex: -1,
    ref: n,
    className: "recharts-zIndex-layer_".concat(t)
  });
}
function Sm(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = N(Qk);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, i.map((o) => /* @__PURE__ */ v.createElement(Am, {
    key: o,
    zIndex: o,
    isPanorama: r
  })), t, a.map((o) => /* @__PURE__ */ v.createElement(Am, {
    key: o,
    zIndex: o,
    isPanorama: r
  })));
}
var UR = ["children"];
function HR(e, t) {
  if (e == null) return {};
  var r, n, i = GR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function GR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, eo.apply(null, arguments);
}
var VR = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, YR = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r = es(), n = ts(), i = mg();
  if (!_t(r) || !_t(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: u,
    desc: l
  } = e, c, f;
  return o != null && (typeof o.tabIndex == "number" ? c = o.tabIndex : c = i ? 0 : void 0, typeof o.role == "string" ? f = o.role : f = i ? "application" : void 0), /* @__PURE__ */ v.createElement(Dc, eo({}, o, {
    title: u,
    desc: l,
    role: f,
    tabIndex: c,
    width: r,
    height: n,
    style: VR,
    ref: t
  }), a);
}), XR = (e) => {
  var {
    children: t
  } = e, r = N(xo);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ v.createElement(Dc, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, Em = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    children: r
  } = e, n = HR(e, UR), i = Ie();
  return i ? /* @__PURE__ */ v.createElement(XR, null, /* @__PURE__ */ v.createElement(Sm, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ v.createElement(YR, eo({
    ref: t
  }, n), /* @__PURE__ */ v.createElement(Sm, {
    isPanorama: !1
  }, r));
});
function ZR() {
  var e = te(), [t, r] = v.useState(null), n = N(L1);
  return v.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      H(a) && a !== n && e(b1(a));
    }
  }, [t, e, n]), r;
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      QR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QR(e, t, r) {
  return (t = ez(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ez(e) {
  var t = tz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nr.apply(null, arguments);
}
var rz = () => (MT(), null);
function to(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var nz = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n, i = v.useRef(null), [a, o] = v.useState({
    containerWidth: to((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: to((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), u = v.useCallback((c, f) => {
    o((s) => {
      var d = Math.round(c), p = Math.round(f);
      return s.containerWidth === d && s.containerHeight === p ? s : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), l = v.useCallback((c) => {
    if (typeof t == "function" && t(c), i.current != null && (i.current.disconnect(), i.current = null), c != null && typeof ResizeObserver < "u") {
      var {
        width: f,
        height: s
      } = c.getBoundingClientRect();
      u(f, s);
      var d = (h) => {
        var m = h[0];
        if (m != null) {
          var {
            width: g,
            height: y
          } = m.contentRect;
          u(g, y);
        }
      }, p = new ResizeObserver(d);
      p.observe(c), i.current = p;
    }
  }, [t, u]);
  return v.useEffect(() => () => {
    var c = i.current;
    c != null && c.disconnect();
  }, [u]), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(yi, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ v.createElement("div", nr({
    ref: l
  }, e)));
}), iz = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, a] = v.useState({
    containerWidth: to(r),
    containerHeight: to(n)
  }), o = v.useCallback((l, c) => {
    a((f) => {
      var s = Math.round(l), d = Math.round(c);
      return f.containerWidth === s && f.containerHeight === d ? f : {
        containerWidth: s,
        containerHeight: d
      };
    });
  }, []), u = v.useCallback((l) => {
    if (typeof t == "function" && t(l), l != null) {
      var {
        width: c,
        height: f
      } = l.getBoundingClientRect();
      o(c, f);
    }
  }, [t, o]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(yi, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ v.createElement("div", nr({
    ref: u
  }, e)));
}), az = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(yi, {
    width: r,
    height: n
  }), /* @__PURE__ */ v.createElement("div", nr({
    ref: t
  }, e)));
}), oz = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ v.createElement(iz, nr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ v.createElement(az, nr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(yi, {
    width: r,
    height: n
  }), /* @__PURE__ */ v.createElement("div", nr({
    ref: t
  }, e)));
});
function uz(e) {
  return e ? nz : oz;
}
var lz = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: u,
    onMouseDown: l,
    onMouseEnter: c,
    onMouseLeave: f,
    onMouseMove: s,
    onMouseUp: d,
    onTouchEnd: p,
    onTouchMove: h,
    onTouchStart: m,
    style: g,
    width: y,
    responsive: b,
    dispatchTouchEvents: x = !0
  } = e, w = v.useRef(null), O = te(), [P, S] = v.useState(null), [E, I] = v.useState(null), j = ZR(), C = Jc(), _ = (C == null ? void 0 : C.width) > 0 ? C.width : y, z = (C == null ? void 0 : C.height) > 0 ? C.height : i, M = v.useCallback((T) => {
    j(T), typeof t == "function" && t(T), S(T), I(T), T != null && (w.current = T);
  }, [j, t, S, I]), R = v.useCallback((T) => {
    O(Ix(T)), O(at({
      handler: a,
      reactEvent: T
    }));
  }, [O, a]), W = v.useCallback((T) => {
    O(jc(T)), O(at({
      handler: c,
      reactEvent: T
    }));
  }, [O, c]), F = v.useCallback((T) => {
    O(s0()), O(at({
      handler: f,
      reactEvent: T
    }));
  }, [O, f]), Y = v.useCallback((T) => {
    O(jc(T)), O(at({
      handler: s,
      reactEvent: T
    }));
  }, [O, s]), B = v.useCallback(() => {
    O(Dx());
  }, [O]), G = v.useCallback(() => {
    O(Nx());
  }, [O]), ye = v.useCallback((T) => {
    O(Mx(T.key));
  }, [O]), ue = v.useCallback((T) => {
    O(at({
      handler: o,
      reactEvent: T
    }));
  }, [O, o]), Ye = v.useCallback((T) => {
    O(at({
      handler: u,
      reactEvent: T
    }));
  }, [O, u]), We = v.useCallback((T) => {
    O(at({
      handler: l,
      reactEvent: T
    }));
  }, [O, l]), Tt = v.useCallback((T) => {
    O(at({
      handler: d,
      reactEvent: T
    }));
  }, [O, d]), In = v.useCallback((T) => {
    O(at({
      handler: m,
      reactEvent: T
    }));
  }, [O, m]), jn = v.useCallback((T) => {
    x && O(Rx(T)), O(at({
      handler: h,
      reactEvent: T
    }));
  }, [O, x, h]), qe = v.useCallback((T) => {
    O(at({
      handler: p,
      reactEvent: T
    }));
  }, [O, p]), L = uz(b);
  return /* @__PURE__ */ v.createElement(T0.Provider, {
    value: P
  }, /* @__PURE__ */ v.createElement(Nm.Provider, {
    value: E
  }, /* @__PURE__ */ v.createElement(L, {
    width: _ ?? (g == null ? void 0 : g.width),
    height: z ?? (g == null ? void 0 : g.height),
    className: K("recharts-wrapper", n),
    style: JR({
      position: "relative",
      cursor: "default",
      width: _,
      height: z
    }, g),
    onClick: R,
    onContextMenu: ue,
    onDoubleClick: Ye,
    onFocus: B,
    onBlur: G,
    onKeyDown: ye,
    onMouseDown: We,
    onMouseEnter: W,
    onMouseLeave: F,
    onMouseMove: Y,
    onMouseUp: Tt,
    onTouchEnd: qe,
    onTouchMove: jn,
    onTouchStart: In,
    ref: M
  }, /* @__PURE__ */ v.createElement(rz, null), r)));
}), cz = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function sz(e, t) {
  if (e == null) return {};
  var r, n, i = fz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function fz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ux = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: a,
    className: o,
    style: u,
    compact: l,
    title: c,
    desc: f
  } = e, s = sz(e, cz), d = Be(s);
  return l ? /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(yi, {
    width: r,
    height: n
  }), /* @__PURE__ */ v.createElement(Em, {
    otherAttributes: d,
    title: c,
    desc: f
  }, a)) : /* @__PURE__ */ v.createElement(lz, {
    className: o,
    style: u,
    width: r,
    height: n,
    responsive: i ?? !1,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ v.createElement(Em, {
    otherAttributes: d,
    title: c,
    desc: f,
    ref: t
  }, /* @__PURE__ */ v.createElement(i$, null, a)));
});
function Cc() {
  return Cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cc.apply(null, arguments);
}
function Im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Im(Object(r), !0).forEach(function(n) {
      vz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vz(e, t, r) {
  return (t = pz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pz(e) {
  var t = hz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mz = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, yz = dz({
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: mz,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, jf), Cf = /* @__PURE__ */ v.forwardRef(function(t, r) {
  var n, i = he(t.categoricalChartProps, yz), {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l,
    categoricalChartProps: c
  } = t, f = {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: u,
    tooltipPayloadSearcher: l,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ v.createElement(Fx, {
    preloadedState: {
      options: f
    },
    reduxStoreName: (n = c.id) !== null && n !== void 0 ? n : a
  }, /* @__PURE__ */ v.createElement(ox, {
    chartData: c.data
  }), /* @__PURE__ */ v.createElement(Kx, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ v.createElement(qx, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ v.createElement(Wx, {
    baseValue: i.baseValue,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ v.createElement(Ux, Cc({}, i, {
    ref: r
  })));
}), gz = ["axis"], bz = /* @__PURE__ */ v.forwardRef((e, t) => /* @__PURE__ */ v.createElement(Cf, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: gz,
  tooltipPayloadSearcher: Fo,
  categoricalChartProps: e,
  ref: t
})), xz = ["axis", "item"], wz = /* @__PURE__ */ v.forwardRef((e, t) => /* @__PURE__ */ v.createElement(Cf, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: xz,
  tooltipPayloadSearcher: Fo,
  categoricalChartProps: e,
  ref: t
}));
function Pz(e) {
  var t = te();
  return v.useEffect(() => {
    t(NR(e));
  }, [t, e]), null;
}
var Oz = ["layout"];
function kc() {
  return kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kc.apply(null, arguments);
}
function Az(e, t) {
  if (e == null) return {};
  var r, n, i = Sz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Sz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ez(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jm(Object(r), !0).forEach(function(n) {
      _z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _z(e, t, r) {
  return (t = Iz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Iz(e) {
  var t = jz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cz = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, Hx = Ez({
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: Cz,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, jf), kz = /* @__PURE__ */ v.forwardRef(function(t, r) {
  var n, i = he(t.categoricalChartProps, Hx), {
    layout: a
  } = i, o = Az(i, Oz), {
    chartName: u,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: f
  } = t, s = {
    chartName: u,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: f,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ v.createElement(Fx, {
    preloadedState: {
      options: s
    },
    reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : u
  }, /* @__PURE__ */ v.createElement(ox, {
    chartData: i.data
  }), /* @__PURE__ */ v.createElement(Kx, {
    layout: a,
    margin: i.margin
  }), /* @__PURE__ */ v.createElement(qx, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ v.createElement(Wx, {
    baseValue: void 0,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ v.createElement(Pz, {
    cx: i.cx,
    cy: i.cy,
    startAngle: i.startAngle,
    endAngle: i.endAngle,
    innerRadius: i.innerRadius,
    outerRadius: i.outerRadius
  }), /* @__PURE__ */ v.createElement(Ux, kc({}, o, {
    ref: r
  })));
});
function Cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function km(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cm(Object(r), !0).forEach(function(n) {
      Tz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tz(e, t, r) {
  return (t = Mz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mz(e) {
  var t = Dz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Dz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nz = ["item"], $z = km(km({}, Hx), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
}), Lz = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r = he(e, $z);
  return /* @__PURE__ */ v.createElement(kz, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: Nz,
    tooltipPayloadSearcher: Fo,
    categoricalChartProps: r,
    ref: t
  });
}), Rz = ["item"], zz = /* @__PURE__ */ v.forwardRef((e, t) => /* @__PURE__ */ v.createElement(Cf, {
  chartName: "ScatterChart",
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: Rz,
  tooltipPayloadSearcher: Fo,
  categoricalChartProps: e,
  ref: t
}));
const mr = "__x", uB = (e) => {
  const { style: t, className: r, csvData: n, chartType: i, xCol: a, yCols: o } = e, u = tw(), l = v.useMemo(() => !a || !(o != null && o.length) ? [] : n.data.map((y) => {
    const b = {
      [mr]: String(y[a] ?? "")
    };
    return o.forEach((x) => {
      b[x] = Number(y[x] ?? 0);
    }), b;
  }), [n, a, o]), c = v.useMemo(() => ew(u.isDark), [u.isDark]);
  if (!a || !(o != null && o.length))
    return /* @__PURE__ */ q.createElement("div", { style: t, className: K(Cn.chartArea, r) });
  const f = i ?? "Bar", s = o.length > 1, d = Bz(u);
  if (f === "Pie") {
    const y = o[0], b = l.map((x, w) => ({
      name: x[mr],
      value: x[y],
      fill: c[w % c.length]
    }));
    return /* @__PURE__ */ q.createElement("div", { style: t, className: K(Cn.chartArea, r) }, /* @__PURE__ */ q.createElement(Bi, { width: "100%", height: "100%" }, /* @__PURE__ */ q.createElement(Lz, null, /* @__PURE__ */ q.createElement(Vi, { ...d }), /* @__PURE__ */ q.createElement(
      Wn,
      {
        verticalAlign: "bottom",
        wrapperStyle: { color: u.axisLabelColor, fontSize: 12 }
      }
    ), /* @__PURE__ */ q.createElement(
      nx,
      {
        data: b,
        dataKey: "value",
        nameKey: "name",
        outerRadius: "70%",
        animationDuration: 800,
        animationEasing: "ease-out"
      },
      b.map((x, w) => /* @__PURE__ */ q.createElement(_n, { key: w, fill: x.fill }))
    ))));
  }
  const { xAxis: p, yAxis: h, grid: m } = rw(u, {
    xCount: l.length,
    rotateThreshold: 8
  }), g = { top: 16, right: 16, bottom: s ? 32 : 8, left: 0 };
  return f === "Scatter" ? /* @__PURE__ */ q.createElement("div", { style: t, className: K(Cn.chartArea, r) }, /* @__PURE__ */ q.createElement(Bi, { width: "100%", height: "100%" }, /* @__PURE__ */ q.createElement(zz, { margin: g }, /* @__PURE__ */ q.createElement(na, { ...m }), /* @__PURE__ */ q.createElement(ia, { dataKey: mr, ...p }), /* @__PURE__ */ q.createElement(aa, { ...h }), /* @__PURE__ */ q.createElement(Vi, { ...d }), s && /* @__PURE__ */ q.createElement(
    Wn,
    {
      verticalAlign: "bottom",
      wrapperStyle: { color: u.axisLabelColor, fontSize: 12 }
    }
  ), o.map((y, b) => /* @__PURE__ */ q.createElement(
    Ex,
    {
      key: y,
      name: y,
      data: l.map((x) => ({ [mr]: x[mr], [y]: x[y] })),
      dataKey: y,
      fill: c[b % c.length],
      animationDuration: 800,
      animationEasing: "ease-out"
    }
  ))))) : f === "Bar" ? /* @__PURE__ */ q.createElement("div", { style: t, className: K(Cn.chartArea, r) }, /* @__PURE__ */ q.createElement(Bi, { width: "100%", height: "100%" }, /* @__PURE__ */ q.createElement(wz, { data: l, margin: g }, /* @__PURE__ */ q.createElement(na, { ...m }), /* @__PURE__ */ q.createElement(ia, { dataKey: mr, ...p }), /* @__PURE__ */ q.createElement(aa, { ...h }), /* @__PURE__ */ q.createElement(Vi, { ...d }), s && /* @__PURE__ */ q.createElement(
    Wn,
    {
      verticalAlign: "bottom",
      wrapperStyle: { color: u.axisLabelColor, fontSize: 12 }
    }
  ), o.map((y, b) => /* @__PURE__ */ q.createElement(
    Ax,
    {
      key: y,
      name: y,
      dataKey: y,
      fill: c[b % c.length],
      radius: [4, 4, 0, 0],
      animationDuration: 800,
      animationEasing: "ease-out"
    }
  ))))) : /* @__PURE__ */ q.createElement("div", { style: t, className: K(Cn.chartArea, r) }, /* @__PURE__ */ q.createElement(Bi, { width: "100%", height: "100%" }, /* @__PURE__ */ q.createElement(bz, { data: l, margin: g }, /* @__PURE__ */ q.createElement(na, { ...m }), /* @__PURE__ */ q.createElement(ia, { dataKey: mr, ...p }), /* @__PURE__ */ q.createElement(aa, { ...h }), /* @__PURE__ */ q.createElement(Vi, { ...d }), s && /* @__PURE__ */ q.createElement(
    Wn,
    {
      verticalAlign: "bottom",
      wrapperStyle: { color: u.axisLabelColor, fontSize: 12 }
    }
  ), o.map((y, b) => /* @__PURE__ */ q.createElement(
    bx,
    {
      key: y,
      type: "monotone",
      name: y,
      dataKey: y,
      stroke: c[b % c.length],
      strokeWidth: 2,
      dot: !1,
      activeDot: { r: 5 },
      animationDuration: 800,
      animationEasing: "ease-out"
    }
  )))));
};
function Bz(e) {
  return {
    contentStyle: {
      background: e.tooltipBackground,
      border: `1px solid ${e.axisLineColor}`,
      color: e.axisLabelColor,
      fontSize: 12
    },
    labelStyle: { color: e.axisLabelColor, fontSize: 12 },
    itemStyle: { color: e.axisLabelColor, fontSize: 12 },
    cursor: { fill: e.tooltipCursorFill }
  };
}
export {
  uB as ChartRenderer
};
