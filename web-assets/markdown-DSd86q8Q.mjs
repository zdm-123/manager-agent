import { C as ts, g as rn, R as re, a as ns, s as $u, b as Ju, u as rs, r as ke, c as us, d as is, M as as, e as ss, f as os, h as Lr, i as rr, p as Dr, j as Rr, n as Pr, k as un, l as Rt, z as Zu, m as ls, o as cs, N as zn, D as fs, q as hs, t as ds } from "./index-DRgKPvaD.mjs";
function ms(e = {}) {
  const { className: t, onExecuteSql: n, showNewFile: r, showAppendToFile: u, maxHeight: i } = e;
  return ({ node: a, children: o, ...l }) => {
    var C, R, O;
    const c = (C = a == null ? void 0 : a.children) == null ? void 0 : C[0];
    if (!c || c.type !== "element" || c.tagName !== "code")
      return /* @__PURE__ */ React.createElement("pre", { ...l }, o);
    const f = (((R = c.properties) == null ? void 0 : R.className) || []).find((U) => U.startsWith("language-")), E = f == null ? void 0 : f.replace("language-", ""), m = (O = c.children) == null ? void 0 : O[0], A = (m && m.type === "text" ? m.value : "").replace(/\n$/, ""), k = E === "sql" && n ? () => n(A) : void 0;
    return /* @__PURE__ */ React.createElement(
      ts,
      {
        className: t,
        code: A,
        language: E,
        showNewFile: r,
        showAppendToFile: u,
        maxHeight: i,
        onExecute: k
      }
    );
  };
}
const wr = ["http", "https", "mailto", "tel"];
function ps(e) {
  const t = (e || "").trim(), n = t.charAt(0);
  if (n === "#" || n === "/")
    return t;
  const r = t.indexOf(":");
  if (r === -1)
    return t;
  let u = -1;
  for (; ++u < wr.length; ) {
    const i = wr[u];
    if (r === i.length && t.slice(0, i.length).toLowerCase() === i)
      return t;
  }
  return u = t.indexOf("?"), u !== -1 && r > u || (u = t.indexOf("#"), u !== -1 && r > u) ? t : "javascript:void(0)";
}
var bn, Mr;
function Es() {
  return Mr || (Mr = 1, bn = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  }), bn;
}
var Ts = Es();
const ei = /* @__PURE__ */ rn(Ts);
function It(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Fr(e.position) : "start" in e || "end" in e ? Fr(e) : "line" in e || "column" in e ? Yn(e) : "";
}
function Yn(e) {
  return Br(e && e.line) + ":" + Br(e && e.column);
}
function Fr(e) {
  return Yn(e && e.start) + "-" + Yn(e && e.end);
}
function Br(e) {
  return e && typeof e == "number" ? e : 1;
}
class _e extends Error {
  /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // To do: next major: expose `undefined` everywhere instead of `null`.
  constructor(t, n, r) {
    const u = [null, null];
    let i = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: { line: null, column: null },
      // @ts-expect-error: "
      end: { line: null, column: null }
    };
    if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? u[1] = r : (u[0] = r.slice(0, a), u[1] = r.slice(a + 1));
    }
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = It(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = u[0], this.ruleId = u[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
_e.prototype.file = "";
_e.prototype.name = "";
_e.prototype.reason = "";
_e.prototype.message = "";
_e.prototype.stack = "";
_e.prototype.fatal = null;
_e.prototype.column = null;
_e.prototype.line = null;
_e.prototype.source = null;
_e.prototype.ruleId = null;
_e.prototype.position = null;
const Le = { basename: bs, dirname: gs, extname: As, join: _s, sep: "/" };
function bs(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Pt(e);
  let n = 0, r = -1, u = e.length, i;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; u--; )
      if (e.charCodeAt(u) === 47) {
        if (i) {
          n = u + 1;
          break;
        }
      } else r < 0 && (i = !0, r = u + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, o = t.length - 1;
  for (; u--; )
    if (e.charCodeAt(u) === 47) {
      if (i) {
        n = u + 1;
        break;
      }
    } else
      a < 0 && (i = !0, a = u + 1), o > -1 && (e.charCodeAt(u) === t.charCodeAt(o--) ? o < 0 && (r = u) : (o = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function gs(e) {
  if (Pt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t);
}
function As(e) {
  Pt(e);
  let t = e.length, n = -1, r = 0, u = -1, i = 0, a;
  for (; t--; ) {
    const o = e.charCodeAt(t);
    if (o === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), o === 46 ? u < 0 ? u = t : i !== 1 && (i = 1) : u > -1 && (i = -1);
  }
  return u < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  i === 0 || // The (right-most) trimmed path component is exactly `..`.
  i === 1 && u === n - 1 && u === r + 1 ? "" : e.slice(u, n);
}
function _s(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Pt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Cs(n);
}
function Cs(e) {
  Pt(e);
  const t = e.charCodeAt(0) === 47;
  let n = Is(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Is(e, t) {
  let n = "", r = 0, u = -1, i = 0, a = -1, o, l;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      o = e.charCodeAt(a);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(u === a - 1 || i === 1)) if (u !== a - 1 && i === 2) {
        if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), u = a, i = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, u = a, i = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(u + 1, a) : n = e.slice(u + 1, a), r = a - u - 1;
      u = a, i = 0;
    } else o === 46 && i > -1 ? i++ : i = -1;
  }
  return n;
}
function Pt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Ns = { cwd: Ss };
function Ss() {
  return "/";
}
function qn(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function ys(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!qn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return ks(e);
}
function ks(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const u = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw u.code = "ERR_INVALID_FILE_URL_PATH", u;
      }
    }
  return decodeURIComponent(t);
}
const gn = ["history", "path", "basename", "stem", "extname", "dirname"];
class ti {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? typeof t == "string" || xs(t) ? n = { value: t } : qn(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Ns.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < gn.length; ) {
      const i = gn[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let u;
    for (u in n)
      gn.includes(u) || (this[u] = n[u]);
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */
  set path(t) {
    qn(t) && (t = ys(t)), _n(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the parent path (example: `'~'`).
   */
  get dirname() {
    return typeof this.path == "string" ? Le.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */
  set dirname(t) {
    Hr(this.basename, "dirname"), this.path = Le.join(t || "", this.basename);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */
  get basename() {
    return typeof this.path == "string" ? Le.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set basename(t) {
    _n(t, "basename"), An(t, "basename"), this.path = Le.join(this.dirname || "", t);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   */
  get extname() {
    return typeof this.path == "string" ? Le.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */
  set extname(t) {
    if (An(t, "extname"), Hr(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Le.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */
  get stem() {
    return typeof this.path == "string" ? Le.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set stem(t) {
    _n(t, "stem"), An(t, "stem"), this.path = Le.join(this.dirname || "", t + (this.extname || ""));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  /**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const u = new _e(t, n, r);
    return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = !1, this.messages.push(u), u;
  }
  /**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const u = this.message(t, n, r);
    return u.fatal = null, u;
  }
  /**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const u = this.message(t, n, r);
    throw u.fatal = !0, u;
  }
}
function An(e, t) {
  if (e && e.includes(Le.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Le.sep + "`"
    );
}
function _n(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Hr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function xs(e) {
  return ei(e);
}
function Ur(e) {
  if (e)
    throw e;
}
var Cn, vr;
function Os() {
  if (vr) return Cn;
  vr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, u = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : t.call(c) === "[object Array]";
  }, i = function(c) {
    if (!c || t.call(c) !== "[object Object]")
      return !1;
    var h = e.call(c, "constructor"), f = c.constructor && c.constructor.prototype && e.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !h && !f)
      return !1;
    var E;
    for (E in c)
      ;
    return typeof E > "u" || e.call(c, E);
  }, a = function(c, h) {
    n && h.name === "__proto__" ? n(c, h.name, {
      enumerable: !0,
      configurable: !0,
      value: h.newValue,
      writable: !0
    }) : c[h.name] = h.newValue;
  }, o = function(c, h) {
    if (h === "__proto__")
      if (e.call(c, h)) {
        if (r)
          return r(c, h).value;
      } else return;
    return c[h];
  };
  return Cn = function l() {
    var c, h, f, E, m, _, A = arguments[0], k = 1, C = arguments.length, R = !1;
    for (typeof A == "boolean" && (R = A, A = arguments[1] || {}, k = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); k < C; ++k)
      if (c = arguments[k], c != null)
        for (h in c)
          f = o(A, h), E = o(c, h), A !== E && (R && E && (i(E) || (m = u(E))) ? (m ? (m = !1, _ = f && u(f) ? f : []) : _ = f && i(f) ? f : {}, a(A, { name: h, newValue: l(R, _, E) })) : typeof E < "u" && a(A, { name: h, newValue: E }));
    return A;
  }, Cn;
}
var Ls = Os();
const zr = /* @__PURE__ */ rn(Ls);
function Wn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ds() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...u) {
    let i = -1;
    const a = u.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    o(null, ...u);
    function o(l, ...c) {
      const h = e[++i];
      let f = -1;
      if (l) {
        a(l);
        return;
      }
      for (; ++f < u.length; )
        (c[f] === null || c[f] === void 0) && (c[f] = u[f]);
      u = c, h ? Rs(h, o)(...c) : a(null, ...c);
    }
  }
  function r(u) {
    if (typeof u != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + u
      );
    return e.push(u), t;
  }
}
function Rs(e, t) {
  let n;
  return r;
  function r(...a) {
    const o = e.length > a.length;
    let l;
    o && a.push(u);
    try {
      l = e.apply(this, a);
    } catch (c) {
      const h = (
        /** @type {Error} */
        c
      );
      if (o && n)
        throw h;
      return u(h);
    }
    o || (l && l.then && typeof l.then == "function" ? l.then(i, u) : l instanceof Error ? u(l) : i(l));
  }
  function u(a, ...o) {
    n || (n = !0, t(a, ...o));
  }
  function i(a) {
    u(null, a);
  }
}
const Ps = ri().freeze(), ni = {}.hasOwnProperty;
function ri() {
  const e = Ds(), t = [];
  let n = {}, r, u = -1;
  return i.data = a, i.Parser = void 0, i.Compiler = void 0, i.freeze = o, i.attachers = t, i.use = l, i.parse = c, i.stringify = h, i.run = f, i.runSync = E, i.process = m, i.processSync = _, i;
  function i() {
    const A = ri();
    let k = -1;
    for (; ++k < t.length; )
      A.use(...t[k]);
    return A.data(zr(!0, {}, n)), A;
  }
  function a(A, k) {
    return typeof A == "string" ? arguments.length === 2 ? (Sn("data", r), n[A] = k, i) : ni.call(n, A) && n[A] || null : A ? (Sn("data", r), n = A, i) : n;
  }
  function o() {
    if (r)
      return i;
    for (; ++u < t.length; ) {
      const [A, ...k] = t[u];
      if (k[0] === !1)
        continue;
      k[0] === !0 && (k[0] = void 0);
      const C = A.call(i, ...k);
      typeof C == "function" && e.use(C);
    }
    return r = !0, u = Number.POSITIVE_INFINITY, i;
  }
  function l(A, ...k) {
    let C;
    if (Sn("use", r), A != null) if (typeof A == "function")
      z(A, ...k);
    else if (typeof A == "object")
      Array.isArray(A) ? U(A) : O(A);
    else
      throw new TypeError("Expected usable value, not `" + A + "`");
    return C && (n.settings = Object.assign(n.settings || {}, C)), i;
    function R(N) {
      if (typeof N == "function")
        z(N);
      else if (typeof N == "object")
        if (Array.isArray(N)) {
          const [M, ...V] = N;
          z(M, ...V);
        } else
          O(N);
      else
        throw new TypeError("Expected usable value, not `" + N + "`");
    }
    function O(N) {
      U(N.plugins), N.settings && (C = Object.assign(C || {}, N.settings));
    }
    function U(N) {
      let M = -1;
      if (N != null) if (Array.isArray(N))
        for (; ++M < N.length; ) {
          const V = N[M];
          R(V);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + N + "`");
    }
    function z(N, M) {
      let V = -1, K;
      for (; ++V < t.length; )
        if (t[V][0] === N) {
          K = t[V];
          break;
        }
      K ? (Wn(K[1]) && Wn(M) && (M = zr(!0, K[1], M)), K[1] = M) : t.push([...arguments]);
    }
  }
  function c(A) {
    i.freeze();
    const k = bt(A), C = i.Parser;
    return In("parse", C), Yr(C, "parse") ? new C(String(k), k).parse() : C(String(k), k);
  }
  function h(A, k) {
    i.freeze();
    const C = bt(k), R = i.Compiler;
    return Nn("stringify", R), qr(A), Yr(R, "compile") ? new R(A, C).compile() : R(A, C);
  }
  function f(A, k, C) {
    if (qr(A), i.freeze(), !C && typeof k == "function" && (C = k, k = void 0), !C)
      return new Promise(R);
    R(null, C);
    function R(O, U) {
      e.run(A, bt(k), z);
      function z(N, M, V) {
        M = M || A, N ? U(N) : O ? O(M) : C(null, M, V);
      }
    }
  }
  function E(A, k) {
    let C, R;
    return i.run(A, k, O), Wr("runSync", "run", R), C;
    function O(U, z) {
      Ur(U), C = z, R = !0;
    }
  }
  function m(A, k) {
    if (i.freeze(), In("process", i.Parser), Nn("process", i.Compiler), !k)
      return new Promise(C);
    C(null, k);
    function C(R, O) {
      const U = bt(A);
      i.run(i.parse(U), U, (N, M, V) => {
        if (N || !M || !V)
          z(N);
        else {
          const K = i.stringify(M, V);
          K == null || (Fs(K) ? V.value = K : V.result = K), z(N, V);
        }
      });
      function z(N, M) {
        N || !M ? O(N) : R ? R(M) : k(null, M);
      }
    }
  }
  function _(A) {
    let k;
    i.freeze(), In("processSync", i.Parser), Nn("processSync", i.Compiler);
    const C = bt(A);
    return i.process(C, R), Wr("processSync", "process", k), C;
    function R(O) {
      k = !0, Ur(O);
    }
  }
}
function Yr(e, t) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (ws(e.prototype) || t in e.prototype);
}
function ws(e) {
  let t;
  for (t in e)
    if (ni.call(e, t))
      return !0;
  return !1;
}
function In(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Nn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Sn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function qr(e) {
  if (!Wn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Wr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function bt(e) {
  return Ms(e) ? e : new ti(e);
}
function Ms(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Fs(e) {
  return typeof e == "string" || ei(e);
}
const Bs = {};
function Hs(e, t) {
  const n = Bs, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, u = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ui(e, r, u);
}
function ui(e, t, n) {
  if (Us(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Vr(e.children, t, n);
  }
  return Array.isArray(e) ? Vr(e, t, n) : "";
}
function Vr(e, t, n) {
  const r = [];
  let u = -1;
  for (; ++u < e.length; )
    r[u] = ui(e[u], t, n);
  return r.join("");
}
function Us(e) {
  return !!(e && typeof e == "object");
}
function be(e, t, n, r) {
  const u = e.length;
  let i = 0, a;
  if (t < 0 ? t = -t > u ? 0 : u + t : t = t > u ? u : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); i < r.length; )
      a = r.slice(i, i + 1e4), a.unshift(t, 0), e.splice(...a), i += 1e4, t += 1e4;
}
function ge(e, t) {
  return e.length > 0 ? (be(e, e.length, 0, t), e) : t;
}
const jr = {}.hasOwnProperty;
function ii(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    vs(t, e[n]);
  return t;
}
function vs(e, t) {
  let n;
  for (n in t) {
    const u = (jr.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let a;
    if (i)
      for (a in i) {
        jr.call(u, a) || (u[a] = []);
        const o = i[a];
        zs(
          // @ts-expect-error Looks like a list.
          u[a],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function zs(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  be(e, 0, 0, r);
}
const Ys = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, me = je(/[A-Za-z]/), he = je(/[\dA-Za-z]/), qs = je(/[#-'*+\--9=?A-Z^-~]/);
function Xt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Vn = je(/\d/), Ws = je(/[\dA-Fa-f]/), Vs = je(/[!-/:-@[-`{-~]/);
function Y(e) {
  return e !== null && e < -2;
}
function ee(e) {
  return e !== null && (e < 0 || e === 32);
}
function X(e) {
  return e === -2 || e === -1 || e === 32;
}
const an = je(Ys), Je = je(/\s/);
function je(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function $(e, t, n, r) {
  const u = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return a;
  function a(l) {
    return X(l) ? (e.enter(n), o(l)) : t(l);
  }
  function o(l) {
    return X(l) && i++ < u ? (e.consume(l), o) : (e.exit(n), t(l));
  }
}
const js = {
  tokenize: Qs
};
function Qs(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    u
  );
  let n;
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), $(e, t, "linePrefix");
  }
  function u(o) {
    return e.enter("paragraph"), i(o);
  }
  function i(o) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, a(o);
  }
  function a(o) {
    if (o === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
      return;
    }
    return Y(o) ? (e.consume(o), e.exit("chunkText"), i) : (e.consume(o), a);
  }
}
const Gs = {
  tokenize: Xs
}, Qr = {
  tokenize: Ks
};
function Xs(e) {
  const t = this, n = [];
  let r = 0, u, i, a;
  return o;
  function o(O) {
    if (r < n.length) {
      const U = n[r];
      return t.containerState = U[1], e.attempt(
        U[0].continuation,
        l,
        c
      )(O);
    }
    return c(O);
  }
  function l(O) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, u && R();
      const U = t.events.length;
      let z = U, N;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          N = t.events[z][1].end;
          break;
        }
      C(r);
      let M = U;
      for (; M < t.events.length; )
        t.events[M][1].end = Object.assign({}, N), M++;
      return be(
        t.events,
        z + 1,
        0,
        t.events.slice(U)
      ), t.events.length = M, c(O);
    }
    return o(O);
  }
  function c(O) {
    if (r === n.length) {
      if (!u)
        return E(O);
      if (u.currentConstruct && u.currentConstruct.concrete)
        return _(O);
      t.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      Qr,
      h,
      f
    )(O);
  }
  function h(O) {
    return u && R(), C(r), E(O);
  }
  function f(O) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, _(O);
  }
  function E(O) {
    return t.containerState = {}, e.attempt(
      Qr,
      m,
      _
    )(O);
  }
  function m(O) {
    return r++, n.push([t.currentConstruct, t.containerState]), E(O);
  }
  function _(O) {
    if (O === null) {
      u && R(), C(0), e.consume(O);
      return;
    }
    return u = u || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: i,
      _tokenizer: u
    }), A(O);
  }
  function A(O) {
    if (O === null) {
      k(e.exit("chunkFlow"), !0), C(0), e.consume(O);
      return;
    }
    return Y(O) ? (e.consume(O), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, o) : (e.consume(O), A);
  }
  function k(O, U) {
    const z = t.sliceStream(O);
    if (U && z.push(null), O.previous = i, i && (i.next = O), i = O, u.defineSkip(O.start), u.write(z), t.parser.lazy[O.start.line]) {
      let N = u.events.length;
      for (; N--; )
        if (
          // The token starts before the line ending…
          u.events[N][1].start.offset < a && // …and either is not ended yet…
          (!u.events[N][1].end || // …or ends after it.
          u.events[N][1].end.offset > a)
        )
          return;
      const M = t.events.length;
      let V = M, K, y;
      for (; V--; )
        if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
          if (K) {
            y = t.events[V][1].end;
            break;
          }
          K = !0;
        }
      for (C(r), N = M; N < t.events.length; )
        t.events[N][1].end = Object.assign({}, y), N++;
      be(
        t.events,
        V + 1,
        0,
        t.events.slice(M)
      ), t.events.length = N;
    }
  }
  function C(O) {
    let U = n.length;
    for (; U-- > O; ) {
      const z = n[U];
      t.containerState = z[1], z[0].exit.call(t, e);
    }
    n.length = O;
  }
  function R() {
    u.write([null]), i = void 0, u = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ks(e, t, n) {
  return $(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Kt(e) {
  if (e === null || ee(e) || Je(e))
    return 1;
  if (an(e))
    return 2;
}
function sn(e, t, n) {
  const r = [];
  let u = -1;
  for (; ++u < e.length; ) {
    const i = e[u].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const jn = {
  name: "attention",
  tokenize: Js,
  resolveAll: $s
};
function $s(e, t) {
  let n = -1, r, u, i, a, o, l, c, h;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), E = Object.assign({}, e[n][1].start);
          Gr(f, -l), Gr(E, l), a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: E
          }, i = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, u = {
            type: l > 1 ? "strong" : "emphasis",
            start: Object.assign({}, a.start),
            end: Object.assign({}, o.end)
          }, e[r][1].end = Object.assign({}, a.start), e[n][1].start = Object.assign({}, o.end), c = [], e[r][1].end.offset - e[r][1].start.offset && (c = ge(c, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), c = ge(c, [
            ["enter", u, t],
            ["enter", a, t],
            ["exit", a, t],
            ["enter", i, t]
          ]), c = ge(
            c,
            sn(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), c = ge(c, [
            ["exit", i, t],
            ["enter", o, t],
            ["exit", o, t],
            ["exit", u, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, c = ge(c, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : h = 0, be(e, r - 1, n - r + 3, c), n = r + c.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Js(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, u = Kt(r);
  let i;
  return a;
  function a(l) {
    return i = l, e.enter("attentionSequence"), o(l);
  }
  function o(l) {
    if (l === i)
      return e.consume(l), o;
    const c = e.exit("attentionSequence"), h = Kt(l), f = !h || h === 2 && u || n.includes(l), E = !u || u === 2 && h || n.includes(r);
    return c._open = !!(i === 42 ? f : f && (u || !E)), c._close = !!(i === 42 ? E : E && (h || !f)), t(l);
  }
}
function Gr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Zs = {
  name: "autolink",
  tokenize: eo
};
function eo(e, t, n) {
  let r = 0;
  return u;
  function u(m) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(m) {
    return me(m) ? (e.consume(m), a) : c(m);
  }
  function a(m) {
    return m === 43 || m === 45 || m === 46 || he(m) ? (r = 1, o(m)) : c(m);
  }
  function o(m) {
    return m === 58 ? (e.consume(m), r = 0, l) : (m === 43 || m === 45 || m === 46 || he(m)) && r++ < 32 ? (e.consume(m), o) : (r = 0, c(m));
  }
  function l(m) {
    return m === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : m === null || m === 32 || m === 60 || Xt(m) ? n(m) : (e.consume(m), l);
  }
  function c(m) {
    return m === 64 ? (e.consume(m), h) : qs(m) ? (e.consume(m), c) : n(m);
  }
  function h(m) {
    return he(m) ? f(m) : n(m);
  }
  function f(m) {
    return m === 46 ? (e.consume(m), r = 0, h) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : E(m);
  }
  function E(m) {
    if ((m === 45 || he(m)) && r++ < 63) {
      const _ = m === 45 ? E : f;
      return e.consume(m), _;
    }
    return n(m);
  }
}
const wt = {
  tokenize: to,
  partial: !0
};
function to(e, t, n) {
  return r;
  function r(i) {
    return X(i) ? $(e, u, "linePrefix")(i) : u(i);
  }
  function u(i) {
    return i === null || Y(i) ? t(i) : n(i);
  }
}
const ai = {
  name: "blockQuote",
  tokenize: no,
  continuation: {
    tokenize: ro
  },
  exit: uo
};
function no(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    if (a === 62) {
      const o = r.containerState;
      return o.open || (e.enter("blockQuote", {
        _container: !0
      }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), i;
    }
    return n(a);
  }
  function i(a) {
    return X(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function ro(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return X(a) ? $(
      e,
      i,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a) : i(a);
  }
  function i(a) {
    return e.attempt(ai, t, n)(a);
  }
}
function uo(e) {
  e.exit("blockQuote");
}
const si = {
  name: "characterEscape",
  tokenize: io
};
function io(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), u;
  }
  function u(i) {
    return Vs(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const Xr = document.createElement("i");
function ur(e) {
  const t = "&" + e + ";";
  Xr.innerHTML = t;
  const n = Xr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const oi = {
  name: "characterReference",
  tokenize: ao
};
function ao(e, t, n) {
  const r = this;
  let u = 0, i, a;
  return o;
  function o(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l;
  }
  function l(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), i = 31, a = he, h(f));
  }
  function c(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, a = Ws, h) : (e.enter("characterReferenceValue"), i = 7, a = Vn, h(f));
  }
  function h(f) {
    if (f === 59 && u) {
      const E = e.exit("characterReferenceValue");
      return a === he && !ur(r.sliceSerialize(E)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(f) && u++ < i ? (e.consume(f), h) : n(f);
  }
}
const Kr = {
  tokenize: oo,
  partial: !0
}, $r = {
  name: "codeFenced",
  tokenize: so,
  concrete: !0
};
function so(e, t, n) {
  const r = this, u = {
    tokenize: z,
    partial: !0
  };
  let i = 0, a = 0, o;
  return l;
  function l(N) {
    return c(N);
  }
  function c(N) {
    const M = r.events[r.events.length - 1];
    return i = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], !0).length : 0, o = N, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(N);
  }
  function h(N) {
    return N === o ? (a++, e.consume(N), h) : a < 3 ? n(N) : (e.exit("codeFencedFenceSequence"), X(N) ? $(e, f, "whitespace")(N) : f(N));
  }
  function f(N) {
    return N === null || Y(N) ? (e.exit("codeFencedFence"), r.interrupt ? t(N) : e.check(Kr, A, U)(N)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), E(N));
  }
  function E(N) {
    return N === null || Y(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(N)) : X(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, m, "whitespace")(N)) : N === 96 && N === o ? n(N) : (e.consume(N), E);
  }
  function m(N) {
    return N === null || Y(N) ? f(N) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), _(N));
  }
  function _(N) {
    return N === null || Y(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(N)) : N === 96 && N === o ? n(N) : (e.consume(N), _);
  }
  function A(N) {
    return e.attempt(u, U, k)(N);
  }
  function k(N) {
    return e.enter("lineEnding"), e.consume(N), e.exit("lineEnding"), C;
  }
  function C(N) {
    return i > 0 && X(N) ? $(
      e,
      R,
      "linePrefix",
      i + 1
    )(N) : R(N);
  }
  function R(N) {
    return N === null || Y(N) ? e.check(Kr, A, U)(N) : (e.enter("codeFlowValue"), O(N));
  }
  function O(N) {
    return N === null || Y(N) ? (e.exit("codeFlowValue"), R(N)) : (e.consume(N), O);
  }
  function U(N) {
    return e.exit("codeFenced"), t(N);
  }
  function z(N, M, V) {
    let K = 0;
    return y;
    function y(W) {
      return N.enter("lineEnding"), N.consume(W), N.exit("lineEnding"), F;
    }
    function F(W) {
      return N.enter("codeFencedFence"), X(W) ? $(
        N,
        B,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(W) : B(W);
    }
    function B(W) {
      return W === o ? (N.enter("codeFencedFenceSequence"), v(W)) : V(W);
    }
    function v(W) {
      return W === o ? (K++, N.consume(W), v) : K >= a ? (N.exit("codeFencedFenceSequence"), X(W) ? $(N, H, "whitespace")(W) : H(W)) : V(W);
    }
    function H(W) {
      return W === null || Y(W) ? (N.exit("codeFencedFence"), M(W)) : V(W);
    }
  }
}
function oo(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const yn = {
  name: "codeIndented",
  tokenize: co
}, lo = {
  tokenize: fo,
  partial: !0
};
function co(e, t, n) {
  const r = this;
  return u;
  function u(c) {
    return e.enter("codeIndented"), $(e, i, "linePrefix", 5)(c);
  }
  function i(c) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? a(c) : n(c);
  }
  function a(c) {
    return c === null ? l(c) : Y(c) ? e.attempt(lo, a, l)(c) : (e.enter("codeFlowValue"), o(c));
  }
  function o(c) {
    return c === null || Y(c) ? (e.exit("codeFlowValue"), a(c)) : (e.consume(c), o);
  }
  function l(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function fo(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return r.parser.lazy[r.now().line] ? n(a) : Y(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), u) : $(e, i, "linePrefix", 5)(a);
  }
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : Y(a) ? u(a) : n(a);
  }
}
const ho = {
  name: "codeText",
  tokenize: Eo,
  resolve: mo,
  previous: po
};
function mo(e) {
  let t = e.length - 4, n = 3, r, u;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    u === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (u = r) : (r === t || e[r][1].type === "lineEnding") && (e[u][1].type = "codeTextData", r !== u + 2 && (e[u][1].end = e[r - 1][1].end, e.splice(u + 2, r - u - 2), t -= r - u - 2, r = u + 2), u = void 0);
  return e;
}
function po(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Eo(e, t, n) {
  let r = 0, u, i;
  return a;
  function a(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(f);
  }
  function o(f) {
    return f === 96 ? (e.consume(f), r++, o) : (e.exit("codeTextSequence"), l(f));
  }
  function l(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : f === 96 ? (i = e.enter("codeTextSequence"), u = 0, h(f)) : Y(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), c(f));
  }
  function c(f) {
    return f === null || f === 32 || f === 96 || Y(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), c);
  }
  function h(f) {
    return f === 96 ? (e.consume(f), u++, h) : u === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", c(f));
  }
}
function li(e) {
  const t = {};
  let n = -1, r, u, i, a, o, l, c;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, i = 0, i < l.length && l[i][1].type === "lineEndingBlank" && (i += 2), i < l.length && l[i][1].type === "content"))
      for (; ++i < l.length && l[i][1].type !== "content"; )
        l[i][1].type === "chunkText" && (l[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, To(e, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (i = n, u = void 0; i-- && (a = e[i], a[1].type === "lineEnding" || a[1].type === "lineEndingBlank"); )
        a[0] === "enter" && (u && (e[u][1].type = "lineEndingBlank"), a[1].type = "lineEnding", u = i);
      u && (r[1].end = Object.assign({}, e[u][1].start), o = e.slice(u, n), o.unshift(r), be(e, u, n - u + 1, o));
    }
  }
  return !c;
}
function To(e, t) {
  const n = e[t][1], r = e[t][2];
  let u = t - 1;
  const i = [], a = n._tokenizer || r.parser[n.contentType](n.start), o = a.events, l = [], c = {};
  let h, f, E = -1, m = n, _ = 0, A = 0;
  const k = [A];
  for (; m; ) {
    for (; e[++u][1] !== m; )
      ;
    i.push(u), m._tokenizer || (h = r.sliceStream(m), m.next || h.push(null), f && a.defineSkip(m.start), m._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(h), m._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), f = m, m = m.next;
  }
  for (m = n; ++E < o.length; )
    // Find a void token that includes a break.
    o[E][0] === "exit" && o[E - 1][0] === "enter" && o[E][1].type === o[E - 1][1].type && o[E][1].start.line !== o[E][1].end.line && (A = E + 1, k.push(A), m._tokenizer = void 0, m.previous = void 0, m = m.next);
  for (a.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : k.pop(), E = k.length; E--; ) {
    const C = o.slice(k[E], k[E + 1]), R = i.pop();
    l.unshift([R, R + C.length - 1]), be(e, R, 2, C);
  }
  for (E = -1; ++E < l.length; )
    c[_ + l[E][0]] = _ + l[E][1], _ += l[E][1] - l[E][0] - 1;
  return c;
}
const bo = {
  tokenize: _o,
  resolve: Ao
}, go = {
  tokenize: Co,
  partial: !0
};
function Ao(e) {
  return li(e), e;
}
function _o(e, t) {
  let n;
  return r;
  function r(o) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), u(o);
  }
  function u(o) {
    return o === null ? i(o) : Y(o) ? e.check(
      go,
      a,
      i
    )(o) : (e.consume(o), u);
  }
  function i(o) {
    return e.exit("chunkContent"), e.exit("content"), t(o);
  }
  function a(o) {
    return e.consume(o), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, u;
  }
}
function Co(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), $(e, i, "linePrefix");
  }
  function i(a) {
    if (a === null || Y(a))
      return n(a);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function ci(e, t, n, r, u, i, a, o, l) {
  const c = l || Number.POSITIVE_INFINITY;
  let h = 0;
  return f;
  function f(C) {
    return C === 60 ? (e.enter(r), e.enter(u), e.enter(i), e.consume(C), e.exit(i), E) : C === null || C === 32 || C === 41 || Xt(C) ? n(C) : (e.enter(r), e.enter(a), e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), A(C));
  }
  function E(C) {
    return C === 62 ? (e.enter(i), e.consume(C), e.exit(i), e.exit(u), e.exit(r), t) : (e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), m(C));
  }
  function m(C) {
    return C === 62 ? (e.exit("chunkString"), e.exit(o), E(C)) : C === null || C === 60 || Y(C) ? n(C) : (e.consume(C), C === 92 ? _ : m);
  }
  function _(C) {
    return C === 60 || C === 62 || C === 92 ? (e.consume(C), m) : m(C);
  }
  function A(C) {
    return !h && (C === null || C === 41 || ee(C)) ? (e.exit("chunkString"), e.exit(o), e.exit(a), e.exit(r), t(C)) : h < c && C === 40 ? (e.consume(C), h++, A) : C === 41 ? (e.consume(C), h--, A) : C === null || C === 32 || C === 40 || Xt(C) ? n(C) : (e.consume(C), C === 92 ? k : A);
  }
  function k(C) {
    return C === 40 || C === 41 || C === 92 ? (e.consume(C), A) : A(C);
  }
}
function fi(e, t, n, r, u, i) {
  const a = this;
  let o = 0, l;
  return c;
  function c(m) {
    return e.enter(r), e.enter(u), e.consume(m), e.exit(u), e.enter(i), h;
  }
  function h(m) {
    return o > 999 || m === null || m === 91 || m === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    m === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs ? n(m) : m === 93 ? (e.exit(i), e.enter(u), e.consume(m), e.exit(u), e.exit(r), t) : Y(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), f(m));
  }
  function f(m) {
    return m === null || m === 91 || m === 93 || Y(m) || o++ > 999 ? (e.exit("chunkString"), h(m)) : (e.consume(m), l || (l = !X(m)), m === 92 ? E : f);
  }
  function E(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), o++, f) : f(m);
  }
}
function hi(e, t, n, r, u, i) {
  let a;
  return o;
  function o(E) {
    return E === 34 || E === 39 || E === 40 ? (e.enter(r), e.enter(u), e.consume(E), e.exit(u), a = E === 40 ? 41 : E, l) : n(E);
  }
  function l(E) {
    return E === a ? (e.enter(u), e.consume(E), e.exit(u), e.exit(r), t) : (e.enter(i), c(E));
  }
  function c(E) {
    return E === a ? (e.exit(i), l(a)) : E === null ? n(E) : Y(E) ? (e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), $(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(E));
  }
  function h(E) {
    return E === a || E === null || Y(E) ? (e.exit("chunkString"), c(E)) : (e.consume(E), E === 92 ? f : h);
  }
  function f(E) {
    return E === a || E === 92 ? (e.consume(E), h) : h(E);
  }
}
function Nt(e, t) {
  let n;
  return r;
  function r(u) {
    return Y(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), n = !0, r) : X(u) ? $(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(u) : t(u);
  }
}
function xe(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Io = {
  name: "definition",
  tokenize: So
}, No = {
  tokenize: yo,
  partial: !0
};
function So(e, t, n) {
  const r = this;
  let u;
  return i;
  function i(m) {
    return e.enter("definition"), a(m);
  }
  function a(m) {
    return fi.call(
      r,
      e,
      o,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(m);
  }
  function o(m) {
    return u = xe(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), l) : n(m);
  }
  function l(m) {
    return ee(m) ? Nt(e, c)(m) : c(m);
  }
  function c(m) {
    return ci(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(m);
  }
  function h(m) {
    return e.attempt(No, f, f)(m);
  }
  function f(m) {
    return X(m) ? $(e, E, "whitespace")(m) : E(m);
  }
  function E(m) {
    return m === null || Y(m) ? (e.exit("definition"), r.parser.defined.push(u), t(m)) : n(m);
  }
}
function yo(e, t, n) {
  return r;
  function r(o) {
    return ee(o) ? Nt(e, u)(o) : n(o);
  }
  function u(o) {
    return hi(
      e,
      i,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(o);
  }
  function i(o) {
    return X(o) ? $(e, a, "whitespace")(o) : a(o);
  }
  function a(o) {
    return o === null || Y(o) ? t(o) : n(o);
  }
}
const ko = {
  name: "hardBreakEscape",
  tokenize: xo
};
function xo(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.consume(i), u;
  }
  function u(i) {
    return Y(i) ? (e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const Oo = {
  name: "headingAtx",
  tokenize: Do,
  resolve: Lo
};
function Lo(e, t) {
  let n = e.length - 2, r = 3, u, i;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (u = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, i = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, be(e, r, n - r + 1, [
    ["enter", u, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", u, t]
  ])), e;
}
function Do(e, t, n) {
  let r = 0;
  return u;
  function u(h) {
    return e.enter("atxHeading"), i(h);
  }
  function i(h) {
    return e.enter("atxHeadingSequence"), a(h);
  }
  function a(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), a) : h === null || ee(h) ? (e.exit("atxHeadingSequence"), o(h)) : n(h);
  }
  function o(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), l(h)) : h === null || Y(h) ? (e.exit("atxHeading"), t(h)) : X(h) ? $(e, o, "whitespace")(h) : (e.enter("atxHeadingText"), c(h));
  }
  function l(h) {
    return h === 35 ? (e.consume(h), l) : (e.exit("atxHeadingSequence"), o(h));
  }
  function c(h) {
    return h === null || h === 35 || ee(h) ? (e.exit("atxHeadingText"), o(h)) : (e.consume(h), c);
  }
}
const Ro = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Jr = ["pre", "script", "style", "textarea"], Po = {
  name: "htmlFlow",
  tokenize: Bo,
  resolveTo: Fo,
  concrete: !0
}, wo = {
  tokenize: Uo,
  partial: !0
}, Mo = {
  tokenize: Ho,
  partial: !0
};
function Fo(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Bo(e, t, n) {
  const r = this;
  let u, i, a, o, l;
  return c;
  function c(g) {
    return h(g);
  }
  function h(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), f;
  }
  function f(g) {
    return g === 33 ? (e.consume(g), E) : g === 47 ? (e.consume(g), i = !0, A) : g === 63 ? (e.consume(g), u = 3, r.interrupt ? t : b) : me(g) ? (e.consume(g), a = String.fromCharCode(g), k) : n(g);
  }
  function E(g) {
    return g === 45 ? (e.consume(g), u = 2, m) : g === 91 ? (e.consume(g), u = 5, o = 0, _) : me(g) ? (e.consume(g), u = 4, r.interrupt ? t : b) : n(g);
  }
  function m(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : b) : n(g);
  }
  function _(g) {
    const Se = "CDATA[";
    return g === Se.charCodeAt(o++) ? (e.consume(g), o === Se.length ? r.interrupt ? t : B : _) : n(g);
  }
  function A(g) {
    return me(g) ? (e.consume(g), a = String.fromCharCode(g), k) : n(g);
  }
  function k(g) {
    if (g === null || g === 47 || g === 62 || ee(g)) {
      const Se = g === 47, tt = a.toLowerCase();
      return !Se && !i && Jr.includes(tt) ? (u = 1, r.interrupt ? t(g) : B(g)) : Ro.includes(a.toLowerCase()) ? (u = 6, Se ? (e.consume(g), C) : r.interrupt ? t(g) : B(g)) : (u = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : i ? R(g) : O(g));
    }
    return g === 45 || he(g) ? (e.consume(g), a += String.fromCharCode(g), k) : n(g);
  }
  function C(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : B) : n(g);
  }
  function R(g) {
    return X(g) ? (e.consume(g), R) : y(g);
  }
  function O(g) {
    return g === 47 ? (e.consume(g), y) : g === 58 || g === 95 || me(g) ? (e.consume(g), U) : X(g) ? (e.consume(g), O) : y(g);
  }
  function U(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || he(g) ? (e.consume(g), U) : z(g);
  }
  function z(g) {
    return g === 61 ? (e.consume(g), N) : X(g) ? (e.consume(g), z) : O(g);
  }
  function N(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), l = g, M) : X(g) ? (e.consume(g), N) : V(g);
  }
  function M(g) {
    return g === l ? (e.consume(g), l = null, K) : g === null || Y(g) ? n(g) : (e.consume(g), M);
  }
  function V(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || ee(g) ? z(g) : (e.consume(g), V);
  }
  function K(g) {
    return g === 47 || g === 62 || X(g) ? O(g) : n(g);
  }
  function y(g) {
    return g === 62 ? (e.consume(g), F) : n(g);
  }
  function F(g) {
    return g === null || Y(g) ? B(g) : X(g) ? (e.consume(g), F) : n(g);
  }
  function B(g) {
    return g === 45 && u === 2 ? (e.consume(g), se) : g === 60 && u === 1 ? (e.consume(g), ce) : g === 62 && u === 4 ? (e.consume(g), Ne) : g === 63 && u === 3 ? (e.consume(g), b) : g === 93 && u === 5 ? (e.consume(g), Pe) : Y(g) && (u === 6 || u === 7) ? (e.exit("htmlFlowData"), e.check(
      wo,
      we,
      v
    )(g)) : g === null || Y(g) ? (e.exit("htmlFlowData"), v(g)) : (e.consume(g), B);
  }
  function v(g) {
    return e.check(
      Mo,
      H,
      we
    )(g);
  }
  function H(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), W;
  }
  function W(g) {
    return g === null || Y(g) ? v(g) : (e.enter("htmlFlowData"), B(g));
  }
  function se(g) {
    return g === 45 ? (e.consume(g), b) : B(g);
  }
  function ce(g) {
    return g === 47 ? (e.consume(g), a = "", Ie) : B(g);
  }
  function Ie(g) {
    if (g === 62) {
      const Se = a.toLowerCase();
      return Jr.includes(Se) ? (e.consume(g), Ne) : B(g);
    }
    return me(g) && a.length < 8 ? (e.consume(g), a += String.fromCharCode(g), Ie) : B(g);
  }
  function Pe(g) {
    return g === 93 ? (e.consume(g), b) : B(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), Ne) : g === 45 && u === 2 ? (e.consume(g), b) : B(g);
  }
  function Ne(g) {
    return g === null || Y(g) ? (e.exit("htmlFlowData"), we(g)) : (e.consume(g), Ne);
  }
  function we(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Ho(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return Y(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : n(a);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Uo(e, t, n) {
  return r;
  function r(u) {
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), e.attempt(wt, t, n);
  }
}
const vo = {
  name: "htmlText",
  tokenize: zo
};
function zo(e, t, n) {
  const r = this;
  let u, i, a;
  return o;
  function o(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), l;
  }
  function l(b) {
    return b === 33 ? (e.consume(b), c) : b === 47 ? (e.consume(b), z) : b === 63 ? (e.consume(b), O) : me(b) ? (e.consume(b), V) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), h) : b === 91 ? (e.consume(b), i = 0, _) : me(b) ? (e.consume(b), R) : n(b);
  }
  function h(b) {
    return b === 45 ? (e.consume(b), m) : n(b);
  }
  function f(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), E) : Y(b) ? (a = f, ce(b)) : (e.consume(b), f);
  }
  function E(b) {
    return b === 45 ? (e.consume(b), m) : f(b);
  }
  function m(b) {
    return b === 62 ? se(b) : b === 45 ? E(b) : f(b);
  }
  function _(b) {
    const Ne = "CDATA[";
    return b === Ne.charCodeAt(i++) ? (e.consume(b), i === Ne.length ? A : _) : n(b);
  }
  function A(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), k) : Y(b) ? (a = A, ce(b)) : (e.consume(b), A);
  }
  function k(b) {
    return b === 93 ? (e.consume(b), C) : A(b);
  }
  function C(b) {
    return b === 62 ? se(b) : b === 93 ? (e.consume(b), C) : A(b);
  }
  function R(b) {
    return b === null || b === 62 ? se(b) : Y(b) ? (a = R, ce(b)) : (e.consume(b), R);
  }
  function O(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), U) : Y(b) ? (a = O, ce(b)) : (e.consume(b), O);
  }
  function U(b) {
    return b === 62 ? se(b) : O(b);
  }
  function z(b) {
    return me(b) ? (e.consume(b), N) : n(b);
  }
  function N(b) {
    return b === 45 || he(b) ? (e.consume(b), N) : M(b);
  }
  function M(b) {
    return Y(b) ? (a = M, ce(b)) : X(b) ? (e.consume(b), M) : se(b);
  }
  function V(b) {
    return b === 45 || he(b) ? (e.consume(b), V) : b === 47 || b === 62 || ee(b) ? K(b) : n(b);
  }
  function K(b) {
    return b === 47 ? (e.consume(b), se) : b === 58 || b === 95 || me(b) ? (e.consume(b), y) : Y(b) ? (a = K, ce(b)) : X(b) ? (e.consume(b), K) : se(b);
  }
  function y(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || he(b) ? (e.consume(b), y) : F(b);
  }
  function F(b) {
    return b === 61 ? (e.consume(b), B) : Y(b) ? (a = F, ce(b)) : X(b) ? (e.consume(b), F) : K(b);
  }
  function B(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), u = b, v) : Y(b) ? (a = B, ce(b)) : X(b) ? (e.consume(b), B) : (e.consume(b), H);
  }
  function v(b) {
    return b === u ? (e.consume(b), u = void 0, W) : b === null ? n(b) : Y(b) ? (a = v, ce(b)) : (e.consume(b), v);
  }
  function H(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || ee(b) ? K(b) : (e.consume(b), H);
  }
  function W(b) {
    return b === 47 || b === 62 || ee(b) ? K(b) : n(b);
  }
  function se(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function ce(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), Ie;
  }
  function Ie(b) {
    return X(b) ? $(
      e,
      Pe,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(b) : Pe(b);
  }
  function Pe(b) {
    return e.enter("htmlTextData"), a(b);
  }
}
const ir = {
  name: "labelEnd",
  tokenize: Qo,
  resolveTo: jo,
  resolveAll: Vo
}, Yo = {
  tokenize: Go
}, qo = {
  tokenize: Xo
}, Wo = {
  tokenize: Ko
};
function Vo(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function jo(e, t) {
  let n = e.length, r = 0, u, i, a, o;
  for (; n--; )
    if (u = e[n][1], i) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive)
        break;
      e[n][0] === "enter" && u.type === "labelLink" && (u._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (i = n, u.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else u.type === "labelEnd" && (a = n);
  const l = {
    type: e[i][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, c = {
    type: "label",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[a][1].end)
  }, h = {
    type: "labelText",
    start: Object.assign({}, e[i + r + 2][1].end),
    end: Object.assign({}, e[a - 2][1].start)
  };
  return o = [
    ["enter", l, t],
    ["enter", c, t]
  ], o = ge(o, e.slice(i + 1, i + r + 3)), o = ge(o, [["enter", h, t]]), o = ge(
    o,
    sn(
      t.parser.constructs.insideSpan.null,
      e.slice(i + r + 4, a - 3),
      t
    )
  ), o = ge(o, [
    ["exit", h, t],
    e[a - 2],
    e[a - 1],
    ["exit", c, t]
  ]), o = ge(o, e.slice(a + 1)), o = ge(o, [["exit", l, t]]), be(e, i, e.length, o), e;
}
function Qo(e, t, n) {
  const r = this;
  let u = r.events.length, i, a;
  for (; u--; )
    if ((r.events[u][1].type === "labelImage" || r.events[u][1].type === "labelLink") && !r.events[u][1]._balanced) {
      i = r.events[u][1];
      break;
    }
  return o;
  function o(E) {
    return i ? i._inactive ? f(E) : (a = r.parser.defined.includes(
      xe(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(E), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(E);
  }
  function l(E) {
    return E === 40 ? e.attempt(
      Yo,
      h,
      a ? h : f
    )(E) : E === 91 ? e.attempt(
      qo,
      h,
      a ? c : f
    )(E) : a ? h(E) : f(E);
  }
  function c(E) {
    return e.attempt(
      Wo,
      h,
      f
    )(E);
  }
  function h(E) {
    return t(E);
  }
  function f(E) {
    return i._balanced = !0, n(E);
  }
}
function Go(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), u;
  }
  function u(f) {
    return ee(f) ? Nt(e, i)(f) : i(f);
  }
  function i(f) {
    return f === 41 ? h(f) : ci(
      e,
      a,
      o,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(f);
  }
  function a(f) {
    return ee(f) ? Nt(e, l)(f) : h(f);
  }
  function o(f) {
    return n(f);
  }
  function l(f) {
    return f === 34 || f === 39 || f === 40 ? hi(
      e,
      c,
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(f) : h(f);
  }
  function c(f) {
    return ee(f) ? Nt(e, h)(f) : h(f);
  }
  function h(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function Xo(e, t, n) {
  const r = this;
  return u;
  function u(o) {
    return fi.call(
      r,
      e,
      i,
      a,
      "reference",
      "referenceMarker",
      "referenceString"
    )(o);
  }
  function i(o) {
    return r.parser.defined.includes(
      xe(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(o) : n(o);
  }
  function a(o) {
    return n(o);
  }
}
function Ko(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), u;
  }
  function u(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const $o = {
  name: "labelStartImage",
  tokenize: Jo,
  resolveAll: ir.resolveAll
};
function Jo(e, t, n) {
  const r = this;
  return u;
  function u(o) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(o), e.exit("labelImageMarker"), i;
  }
  function i(o) {
    return o === 91 ? (e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelImage"), a) : n(o);
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Zo = {
  name: "labelStartLink",
  tokenize: el,
  resolveAll: ir.resolveAll
};
function el(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const kn = {
  name: "lineEnding",
  tokenize: tl
};
function tl(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), $(e, t, "linePrefix");
  }
}
const jt = {
  name: "thematicBreak",
  tokenize: nl
};
function nl(e, t, n) {
  let r = 0, u;
  return i;
  function i(c) {
    return e.enter("thematicBreak"), a(c);
  }
  function a(c) {
    return u = c, o(c);
  }
  function o(c) {
    return c === u ? (e.enter("thematicBreakSequence"), l(c)) : r >= 3 && (c === null || Y(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function l(c) {
    return c === u ? (e.consume(c), r++, l) : (e.exit("thematicBreakSequence"), X(c) ? $(e, o, "whitespace")(c) : o(c));
  }
}
const Ee = {
  name: "list",
  tokenize: il,
  continuation: {
    tokenize: al
  },
  exit: ol
}, rl = {
  tokenize: ll,
  partial: !0
}, ul = {
  tokenize: sl,
  partial: !0
};
function il(e, t, n) {
  const r = this, u = r.events[r.events.length - 1];
  let i = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0, a = 0;
  return o;
  function o(m) {
    const _ = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
    if (_ === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : Vn(m)) {
      if (r.containerState.type || (r.containerState.type = _, e.enter(_, {
        _container: !0
      })), _ === "listUnordered")
        return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(jt, n, c)(m) : c(m);
      if (!r.interrupt || m === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(m);
    }
    return n(m);
  }
  function l(m) {
    return Vn(m) && ++a < 10 ? (e.consume(m), l) : (!r.interrupt || a < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), c(m)) : n(m);
  }
  function c(m) {
    return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(
      wt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      e.attempt(
        rl,
        E,
        f
      )
    );
  }
  function h(m) {
    return r.containerState.initialBlankLine = !0, i++, E(m);
  }
  function f(m) {
    return X(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), E) : n(m);
  }
  function E(m) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m);
  }
}
function al(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(wt, u, i);
  function u(o) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(o);
  }
  function i(o) {
    return r.containerState.furtherBlankLines || !X(o) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(o)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ul, t, a)(o));
  }
  function a(o) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, $(
      e,
      e.attempt(Ee, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(o);
  }
}
function sl(e, t, n) {
  const r = this;
  return $(
    e,
    u,
    "listItemIndent",
    r.containerState.size + 1
  );
  function u(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(i) : n(i);
  }
}
function ol(e) {
  e.exit(this.containerState.type);
}
function ll(e, t, n) {
  const r = this;
  return $(
    e,
    u,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function u(i) {
    const a = r.events[r.events.length - 1];
    return !X(i) && a && a[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const Zr = {
  name: "setextUnderline",
  tokenize: fl,
  resolveTo: cl
};
function cl(e, t) {
  let n = e.length, r, u, i;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (u = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !i && e[n][1].type === "definition" && (i = n);
  const a = {
    type: "setextHeading",
    start: Object.assign({}, e[u][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[u][1].type = "setextHeadingText", i ? (e.splice(u, 0, ["enter", a, t]), e.splice(i + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[i][1].end)) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function fl(e, t, n) {
  const r = this;
  let u;
  return i;
  function i(c) {
    let h = r.events.length, f;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        f = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), u = c, a(c)) : n(c);
  }
  function a(c) {
    return e.enter("setextHeadingLineSequence"), o(c);
  }
  function o(c) {
    return c === u ? (e.consume(c), o) : (e.exit("setextHeadingLineSequence"), X(c) ? $(e, l, "lineSuffix")(c) : l(c));
  }
  function l(c) {
    return c === null || Y(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const hl = {
  tokenize: dl
};
function dl(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    wt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      u,
      $(
        e,
        e.attempt(
          this.parser.constructs.flow,
          u,
          e.attempt(bo, u)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function u(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const ml = {
  resolveAll: mi()
}, pl = di("string"), El = di("text");
function di(e) {
  return {
    tokenize: t,
    resolveAll: mi(
      e === "text" ? Tl : void 0
    )
  };
  function t(n) {
    const r = this, u = this.parser.constructs[e], i = n.attempt(u, a, o);
    return a;
    function a(h) {
      return c(h) ? i(h) : o(h);
    }
    function o(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), l;
    }
    function l(h) {
      return c(h) ? (n.exit("data"), i(h)) : (n.consume(h), l);
    }
    function c(h) {
      if (h === null)
        return !0;
      const f = u[h];
      let E = -1;
      if (f)
        for (; ++E < f.length; ) {
          const m = f[E];
          if (!m.previous || m.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function mi(e) {
  return t;
  function t(n, r) {
    let u = -1, i;
    for (; ++u <= n.length; )
      i === void 0 ? n[u] && n[u][1].type === "data" && (i = u, u++) : (!n[u] || n[u][1].type !== "data") && (u !== i + 2 && (n[i][1].end = n[u - 1][1].end, n.splice(i + 2, u - i - 2), u = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function Tl(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], u = t.sliceStream(r);
      let i = u.length, a = -1, o = 0, l;
      for (; i--; ) {
        const c = u[i];
        if (typeof c == "string") {
          for (a = c.length; c.charCodeAt(a - 1) === 32; )
            o++, a--;
          if (a) break;
          a = -1;
        } else if (c === -2)
          l = !0, o++;
        else if (c !== -1) {
          i++;
          break;
        }
      }
      if (o) {
        const c = {
          type: n === e.length || l || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - o,
            offset: r.end.offset - o,
            _index: r.start._index + i,
            _bufferIndex: i ? a : r.start._bufferIndex + a
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, c.start), r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(
          n,
          0,
          ["enter", c, t],
          ["exit", c, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function bl(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const u = {}, i = [];
  let a = [], o = [];
  const l = {
    consume: R,
    enter: O,
    exit: U,
    attempt: M(z),
    check: M(N),
    interrupt: M(N, {
      interrupt: !0
    })
  }, c = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: m,
    sliceSerialize: E,
    now: _,
    defineSkip: A,
    write: f
  };
  let h = t.tokenize.call(c, l);
  return t.resolveAll && i.push(t), c;
  function f(F) {
    return a = ge(a, F), k(), a[a.length - 1] !== null ? [] : (V(t, 0), c.events = sn(i, c.events, c), c.events);
  }
  function E(F, B) {
    return Al(m(F), B);
  }
  function m(F) {
    return gl(a, F);
  }
  function _() {
    const { line: F, column: B, offset: v, _index: H, _bufferIndex: W } = r;
    return {
      line: F,
      column: B,
      offset: v,
      _index: H,
      _bufferIndex: W
    };
  }
  function A(F) {
    u[F.line] = F.column, y();
  }
  function k() {
    let F;
    for (; r._index < a.length; ) {
      const B = a[r._index];
      if (typeof B == "string")
        for (F = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === F && r._bufferIndex < B.length; )
          C(B.charCodeAt(r._bufferIndex));
      else
        C(B);
    }
  }
  function C(F) {
    h = h(F);
  }
  function R(F) {
    Y(F) ? (r.line++, r.column = 1, r.offset += F === -3 ? 2 : 1, y()) : F !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === a[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = F;
  }
  function O(F, B) {
    const v = B || {};
    return v.type = F, v.start = _(), c.events.push(["enter", v, c]), o.push(v), v;
  }
  function U(F) {
    const B = o.pop();
    return B.end = _(), c.events.push(["exit", B, c]), B;
  }
  function z(F, B) {
    V(F, B.from);
  }
  function N(F, B) {
    B.restore();
  }
  function M(F, B) {
    return v;
    function v(H, W, se) {
      let ce, Ie, Pe, b;
      return Array.isArray(H) ? we(H) : "tokenize" in H ? (
        // @ts-expect-error Looks like a construct.
        we([H])
      ) : Ne(H);
      function Ne(fe) {
        return nt;
        function nt(Ue) {
          const rt = Ue !== null && fe[Ue], ut = Ue !== null && fe.null, En = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(rt) ? rt : rt ? [rt] : [],
            ...Array.isArray(ut) ? ut : ut ? [ut] : []
          ];
          return we(En)(Ue);
        }
      }
      function we(fe) {
        return ce = fe, Ie = 0, fe.length === 0 ? se : g(fe[Ie]);
      }
      function g(fe) {
        return nt;
        function nt(Ue) {
          return b = K(), Pe = fe, fe.partial || (c.currentConstruct = fe), fe.name && c.parser.constructs.disable.null.includes(fe.name) ? tt() : fe.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            B ? Object.assign(Object.create(c), B) : c,
            l,
            Se,
            tt
          )(Ue);
        }
      }
      function Se(fe) {
        return F(Pe, b), W;
      }
      function tt(fe) {
        return b.restore(), ++Ie < ce.length ? g(ce[Ie]) : se;
      }
    }
  }
  function V(F, B) {
    F.resolveAll && !i.includes(F) && i.push(F), F.resolve && be(
      c.events,
      B,
      c.events.length - B,
      F.resolve(c.events.slice(B), c)
    ), F.resolveTo && (c.events = F.resolveTo(c.events, c));
  }
  function K() {
    const F = _(), B = c.previous, v = c.currentConstruct, H = c.events.length, W = Array.from(o);
    return {
      restore: se,
      from: H
    };
    function se() {
      r = F, c.previous = B, c.currentConstruct = v, c.events.length = H, o = W, y();
    }
  }
  function y() {
    r.line in u && r.column < 2 && (r.column = u[r.line], r.offset += u[r.line] - 1);
  }
}
function gl(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, u = t.end._index, i = t.end._bufferIndex;
  let a;
  if (n === u)
    a = [e[n].slice(r, i)];
  else {
    if (a = e.slice(n, u), r > -1) {
      const o = a[0];
      typeof o == "string" ? a[0] = o.slice(r) : a.shift();
    }
    i > 0 && a.push(e[u].slice(0, i));
  }
  return a;
}
function Al(e, t) {
  let n = -1;
  const r = [];
  let u;
  for (; ++n < e.length; ) {
    const i = e[n];
    let a;
    if (typeof i == "string")
      a = i;
    else
      switch (i) {
        case -5: {
          a = "\r";
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && u) continue;
          a = " ";
          break;
        }
        default:
          a = String.fromCharCode(i);
      }
    u = i === -2, r.push(a);
  }
  return r.join("");
}
const _l = {
  42: Ee,
  43: Ee,
  45: Ee,
  48: Ee,
  49: Ee,
  50: Ee,
  51: Ee,
  52: Ee,
  53: Ee,
  54: Ee,
  55: Ee,
  56: Ee,
  57: Ee,
  62: ai
}, Cl = {
  91: Io
}, Il = {
  [-2]: yn,
  [-1]: yn,
  32: yn
}, Nl = {
  35: Oo,
  42: jt,
  45: [Zr, jt],
  60: Po,
  61: Zr,
  95: jt,
  96: $r,
  126: $r
}, Sl = {
  38: oi,
  92: si
}, yl = {
  [-5]: kn,
  [-4]: kn,
  [-3]: kn,
  33: $o,
  38: oi,
  42: jn,
  60: [Zs, vo],
  91: Zo,
  92: [ko, si],
  93: ir,
  95: jn,
  96: ho
}, kl = {
  null: [jn, ml]
}, xl = {
  null: [42, 95]
}, Ol = {
  null: []
}, Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: xl,
  contentInitial: Cl,
  disable: Ol,
  document: _l,
  flow: Nl,
  flowInitial: Il,
  insideSpan: kl,
  string: Sl,
  text: yl
}, Symbol.toStringTag, { value: "Module" }));
function Dl(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    ii([Ll, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: u(js),
    document: u(Gs),
    flow: u(hl),
    string: u(pl),
    text: u(El)
  };
  return r;
  function u(i) {
    return a;
    function a(o) {
      return bl(r, i, o);
    }
  }
}
const eu = /[\0\t\n\r]/g;
function Rl() {
  let e = 1, t = "", n = !0, r;
  return u;
  function u(i, a, o) {
    const l = [];
    let c, h, f, E, m;
    for (i = t + i.toString(a), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (eu.lastIndex = f, c = eu.exec(i), E = c && c.index !== void 0 ? c.index : i.length, m = i.charCodeAt(E), !c) {
        t = i.slice(f);
        break;
      }
      if (m === 10 && f === E && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), f < E && (l.push(i.slice(f, E)), e += E - f), m) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, l.push(-2); e++ < h; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = E + 1;
    }
    return o && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
function Pl(e) {
  for (; !li(e); )
    ;
  return e;
}
function pi(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || // Out of range
    n > 1114111 ? "�" : String.fromCharCode(n)
  );
}
const wl = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ei(e) {
  return e.replace(wl, Ml);
}
function Ml(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const u = n.charCodeAt(1), i = u === 120 || u === 88;
    return pi(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return ur(n) || e;
}
const Ti = {}.hasOwnProperty, Fl = (
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */
  /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */
  function(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), Bl(n)(
      Pl(
        Dl(n).document().write(Rl()(e, t, !0))
      )
    );
  }
);
function Bl(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(xr),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: o(Sr),
      blockQuote: o(En),
      characterEscape: F,
      characterReference: F,
      codeFenced: o(Nr),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Nr, l),
      codeText: o(ja, l),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: o(Qa),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ga),
      hardBreakEscape: o(yr),
      hardBreakTrailing: o(yr),
      htmlFlow: o(kr, l),
      htmlFlowData: F,
      htmlText: o(kr, l),
      htmlTextData: F,
      image: o(Xa),
      label: l,
      link: o(xr),
      listItem: o(Ka),
      listItemValue: _,
      listOrdered: o(Or, m),
      listUnordered: o(Or),
      paragraph: o($a),
      reference: tt,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(Sr),
      strong: o(Ja),
      thematicBreak: o(es)
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: M,
      autolink: h(),
      autolinkEmail: ut,
      autolinkProtocol: rt,
      blockQuote: h(),
      characterEscapeValue: B,
      characterReferenceMarkerHexadecimal: nt,
      characterReferenceMarkerNumeric: nt,
      characterReferenceValue: Ue,
      codeFenced: h(R),
      codeFencedFence: C,
      codeFencedFenceInfo: A,
      codeFencedFenceMeta: k,
      codeFlowValue: B,
      codeIndented: h(O),
      codeText: h(ce),
      codeTextData: B,
      data: B,
      definition: h(),
      definitionDestinationString: N,
      definitionLabelString: U,
      definitionTitleString: z,
      emphasis: h(),
      hardBreakEscape: h(H),
      hardBreakTrailing: h(H),
      htmlFlow: h(W),
      htmlFlowData: B,
      htmlText: h(se),
      htmlTextData: B,
      image: h(Pe),
      label: Ne,
      labelText: b,
      lineEnding: v,
      link: h(Ie),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: fe,
      resourceDestinationString: we,
      resourceTitleString: g,
      resource: Se,
      setextHeading: h(y),
      setextHeadingLineSequence: K,
      setextHeadingText: V,
      strong: h(),
      thematicBreak: h()
    }
  };
  bi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(x) {
    let w = {
      type: "root",
      children: []
    };
    const q = {
      stack: [w],
      tokenStack: [],
      config: t,
      enter: c,
      exit: f,
      buffer: l,
      resume: E,
      setData: i,
      getData: a
    }, J = [];
    let Z = -1;
    for (; ++Z < x.length; )
      if (x[Z][1].type === "listOrdered" || x[Z][1].type === "listUnordered")
        if (x[Z][0] === "enter")
          J.push(Z);
        else {
          const ye = J.pop();
          Z = u(x, ye, Z);
        }
    for (Z = -1; ++Z < x.length; ) {
      const ye = t[x[Z][0]];
      Ti.call(ye, x[Z][1].type) && ye[x[Z][1].type].call(
        Object.assign(
          {
            sliceSerialize: x[Z][2].sliceSerialize
          },
          q
        ),
        x[Z][1]
      );
    }
    if (q.tokenStack.length > 0) {
      const ye = q.tokenStack[q.tokenStack.length - 1];
      (ye[1] || tu).call(q, void 0, ye[0]);
    }
    for (w.position = {
      start: ze(
        x.length > 0 ? x[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: ze(
        x.length > 0 ? x[x.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, Z = -1; ++Z < t.transforms.length; )
      w = t.transforms[Z](w) || w;
    return w;
  }
  function u(x, w, q) {
    let J = w - 1, Z = -1, ye = !1, ve, Me, Et, Tt;
    for (; ++J <= q; ) {
      const ue = x[J];
      if (ue[1].type === "listUnordered" || ue[1].type === "listOrdered" || ue[1].type === "blockQuote" ? (ue[0] === "enter" ? Z++ : Z--, Tt = void 0) : ue[1].type === "lineEndingBlank" ? ue[0] === "enter" && (ve && !Tt && !Z && !Et && (Et = J), Tt = void 0) : ue[1].type === "linePrefix" || ue[1].type === "listItemValue" || ue[1].type === "listItemMarker" || ue[1].type === "listItemPrefix" || ue[1].type === "listItemPrefixWhitespace" || (Tt = void 0), !Z && ue[0] === "enter" && ue[1].type === "listItemPrefix" || Z === -1 && ue[0] === "exit" && (ue[1].type === "listUnordered" || ue[1].type === "listOrdered")) {
        if (ve) {
          let Tn = J;
          for (Me = void 0; Tn--; ) {
            const Fe = x[Tn];
            if (Fe[1].type === "lineEnding" || Fe[1].type === "lineEndingBlank") {
              if (Fe[0] === "exit") continue;
              Me && (x[Me][1].type = "lineEndingBlank", ye = !0), Fe[1].type = "lineEnding", Me = Tn;
            } else if (!(Fe[1].type === "linePrefix" || Fe[1].type === "blockQuotePrefix" || Fe[1].type === "blockQuotePrefixWhitespace" || Fe[1].type === "blockQuoteMarker" || Fe[1].type === "listItemIndent")) break;
          }
          Et && (!Me || Et < Me) && (ve._spread = !0), ve.end = Object.assign(
            {},
            Me ? x[Me][1].start : ue[1].end
          ), x.splice(Me || J, 0, ["exit", ve, ue[2]]), J++, q++;
        }
        ue[1].type === "listItemPrefix" && (ve = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ue[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, x.splice(J, 0, ["enter", ve, ue[2]]), J++, q++, Et = void 0, Tt = !0);
      }
    }
    return x[w][1]._spread = ye, q;
  }
  function i(x, w) {
    n[x] = w;
  }
  function a(x) {
    return n[x];
  }
  function o(x, w) {
    return q;
    function q(J) {
      c.call(this, x(J), J), w && w.call(this, J);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(x, w, q) {
    return this.stack[this.stack.length - 1].children.push(x), this.stack.push(x), this.tokenStack.push([w, q]), x.position = {
      start: ze(w.start)
    }, x;
  }
  function h(x) {
    return w;
    function w(q) {
      x && x.call(this, q), f.call(this, q);
    }
  }
  function f(x, w) {
    const q = this.stack.pop(), J = this.tokenStack.pop();
    if (J)
      J[0].type !== x.type && (w ? w.call(this, x, J[0]) : (J[1] || tu).call(this, x, J[0]));
    else throw new Error(
      "Cannot close `" + x.type + "` (" + It({
        start: x.start,
        end: x.end
      }) + "): it’s not open"
    );
    return q.position.end = ze(x.end), q;
  }
  function E() {
    return Hs(this.stack.pop());
  }
  function m() {
    i("expectingFirstListItemValue", !0);
  }
  function _(x) {
    if (a("expectingFirstListItemValue")) {
      const w = this.stack[this.stack.length - 2];
      w.start = Number.parseInt(this.sliceSerialize(x), 10), i("expectingFirstListItemValue");
    }
  }
  function A() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.lang = x;
  }
  function k() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.meta = x;
  }
  function C() {
    a("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0));
  }
  function R() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.value = x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside");
  }
  function O() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.value = x.replace(/(\r?\n|\r)$/g, "");
  }
  function U(x) {
    const w = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = w, q.identifier = xe(
      this.sliceSerialize(x)
    ).toLowerCase();
  }
  function z() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.title = x;
  }
  function N() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.url = x;
  }
  function M(x) {
    const w = this.stack[this.stack.length - 1];
    if (!w.depth) {
      const q = this.sliceSerialize(x).length;
      w.depth = q;
    }
  }
  function V() {
    i("setextHeadingSlurpLineEnding", !0);
  }
  function K(x) {
    const w = this.stack[this.stack.length - 1];
    w.depth = this.sliceSerialize(x).charCodeAt(0) === 61 ? 1 : 2;
  }
  function y() {
    i("setextHeadingSlurpLineEnding");
  }
  function F(x) {
    const w = this.stack[this.stack.length - 1];
    let q = w.children[w.children.length - 1];
    (!q || q.type !== "text") && (q = Za(), q.position = {
      start: ze(x.start)
    }, w.children.push(q)), this.stack.push(q);
  }
  function B(x) {
    const w = this.stack.pop();
    w.value += this.sliceSerialize(x), w.position.end = ze(x.end);
  }
  function v(x) {
    const w = this.stack[this.stack.length - 1];
    if (a("atHardBreak")) {
      const q = w.children[w.children.length - 1];
      q.position.end = ze(x.end), i("atHardBreak");
      return;
    }
    !a("setextHeadingSlurpLineEnding") && t.canContainEols.includes(w.type) && (F.call(this, x), B.call(this, x));
  }
  function H() {
    i("atHardBreak", !0);
  }
  function W() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.value = x;
  }
  function se() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.value = x;
  }
  function ce() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.value = x;
  }
  function Ie() {
    const x = this.stack[this.stack.length - 1];
    if (a("inReference")) {
      const w = a("referenceType") || "shortcut";
      x.type += "Reference", x.referenceType = w, delete x.url, delete x.title;
    } else
      delete x.identifier, delete x.label;
    i("referenceType");
  }
  function Pe() {
    const x = this.stack[this.stack.length - 1];
    if (a("inReference")) {
      const w = a("referenceType") || "shortcut";
      x.type += "Reference", x.referenceType = w, delete x.url, delete x.title;
    } else
      delete x.identifier, delete x.label;
    i("referenceType");
  }
  function b(x) {
    const w = this.sliceSerialize(x), q = this.stack[this.stack.length - 2];
    q.label = Ei(w), q.identifier = xe(w).toLowerCase();
  }
  function Ne() {
    const x = this.stack[this.stack.length - 1], w = this.resume(), q = this.stack[this.stack.length - 1];
    if (i("inReference", !0), q.type === "link") {
      const J = x.children;
      q.children = J;
    } else
      q.alt = w;
  }
  function we() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.url = x;
  }
  function g() {
    const x = this.resume(), w = this.stack[this.stack.length - 1];
    w.title = x;
  }
  function Se() {
    i("inReference");
  }
  function tt() {
    i("referenceType", "collapsed");
  }
  function fe(x) {
    const w = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = w, q.identifier = xe(
      this.sliceSerialize(x)
    ).toLowerCase(), i("referenceType", "full");
  }
  function nt(x) {
    i("characterReferenceType", x.type);
  }
  function Ue(x) {
    const w = this.sliceSerialize(x), q = a("characterReferenceType");
    let J;
    q ? (J = pi(
      w,
      q === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : J = ur(w);
    const Z = this.stack.pop();
    Z.value += J, Z.position.end = ze(x.end);
  }
  function rt(x) {
    B.call(this, x);
    const w = this.stack[this.stack.length - 1];
    w.url = this.sliceSerialize(x);
  }
  function ut(x) {
    B.call(this, x);
    const w = this.stack[this.stack.length - 1];
    w.url = "mailto:" + this.sliceSerialize(x);
  }
  function En() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Nr() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ja() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Qa() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ga() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Sr() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function yr() {
    return {
      type: "break"
    };
  }
  function kr() {
    return {
      type: "html",
      value: ""
    };
  }
  function Xa() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function xr() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Or(x) {
    return {
      type: "list",
      ordered: x.type === "listOrdered",
      start: null,
      spread: x._spread,
      children: []
    };
  }
  function Ka(x) {
    return {
      type: "listItem",
      spread: x._spread,
      checked: null,
      children: []
    };
  }
  function $a() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Ja() {
    return {
      type: "strong",
      children: []
    };
  }
  function Za() {
    return {
      type: "text",
      value: ""
    };
  }
  function es() {
    return {
      type: "thematicBreak"
    };
  }
}
function ze(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function bi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? bi(e, r) : Hl(e, r);
  }
}
function Hl(e, t) {
  let n;
  for (n in t)
    if (Ti.call(t, n)) {
      if (n === "canContainEols") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "transforms") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "enter" || n === "exit") {
        const r = t[n];
        r && Object.assign(e[n], r);
      }
    }
}
function tu(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + It({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + It({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + It({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function Ul(e) {
  Object.assign(this, { Parser: (n) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return Fl(
      n,
      Object.assign({}, r, e, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
function vl(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zl(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Yl(e, t) {
  const n = t.value ? t.value + `
` : "", r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, u = {};
  r && (u.className = ["language-" + r]);
  let i = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function ql(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Wl(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ft(e) {
  const t = [];
  let n = -1, r = 0, u = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let a = "";
    if (i === 37 && he(e.charCodeAt(n + 1)) && he(e.charCodeAt(n + 2)))
      u = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (a = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const o = e.charCodeAt(n + 1);
      i < 56320 && o > 56319 && o < 57344 ? (a = String.fromCharCode(i, o), u = 1) : a = "�";
    } else
      a = String.fromCharCode(i);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + u + 1, a = ""), u && (n += u, u = 0);
  }
  return t.join("") + e.slice(r);
}
function gi(e, t) {
  const n = String(t.identifier).toUpperCase(), r = ft(n.toLowerCase()), u = e.footnoteOrder.indexOf(n);
  let i;
  u === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, i = e.footnoteOrder.length) : (e.footnoteCounts[n]++, i = u + 1);
  const a = e.footnoteCounts[n], o = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + e.clobberPrefix + "fn-" + r,
      id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(i) }]
  };
  e.patch(t, o);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [o]
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Vl(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; ) r++;
  const u = String(r);
  return n[u] = {
    type: "footnoteDefinition",
    identifier: u,
    children: [{ type: "paragraph", children: t.children }],
    position: t.position
  }, gi(e, {
    type: "footnoteReference",
    identifier: u,
    position: t.position
  });
}
function jl(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ql(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function Ai(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const u = e.all(t), i = u[0];
  i && i.type === "text" ? i.value = "[" + i.value : u.unshift({ type: "text", value: "[" });
  const a = u[u.length - 1];
  return a && a.type === "text" ? a.value += r : u.push({ type: "text", value: r }), u;
}
function Gl(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return Ai(e, t);
  const r = { src: ft(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, u), e.applyData(t, u);
}
function Xl(e, t) {
  const n = { src: ft(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Kl(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function $l(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return Ai(e, t);
  const r = { href: ft(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Jl(e, t) {
  const n = { href: ft(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Zl(e, t, n) {
  const r = e.all(t), u = n ? ec(n) : _i(t), i = {}, a = [];
  if (typeof t.checked == "boolean") {
    const h = r[0];
    let f;
    h && h.type === "element" && h.tagName === "p" ? f = h : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), i.className = ["task-list-item"];
  }
  let o = -1;
  for (; ++o < r.length; ) {
    const h = r[o];
    (u || o !== 0 || h.type !== "element" || h.tagName !== "p") && a.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !u ? a.push(...h.children) : a.push(h);
  }
  const l = r[r.length - 1];
  l && (u || l.type !== "element" || l.tagName !== "p") && a.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: i, children: a };
  return e.patch(t, c), e.applyData(t, c);
}
function ec(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = _i(n[r]);
  }
  return t;
}
function _i(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function tc(e, t) {
  const n = {}, r = e.all(t);
  let u = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++u < r.length; ) {
    const a = r[u];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const i = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function nc(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rc(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function uc(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ar = Ci("start"), sr = Ci("end");
function ic(e) {
  return { start: ar(e), end: sr(e) };
}
function Ci(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    return {
      // @ts-expect-error: in practice, null is allowed.
      line: r.line || null,
      // @ts-expect-error: in practice, null is allowed.
      column: r.column || null,
      // @ts-expect-error: in practice, null is allowed.
      offset: r.offset > -1 ? r.offset : null
    };
  }
}
function ac(e, t) {
  const n = e.all(t), r = n.shift(), u = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), u.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, o = ar(t.children[1]), l = sr(t.children[t.children.length - 1]);
    o.line && l.line && (a.position = { start: o, end: l }), u.push(a);
  }
  const i = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function sc(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length;
  let l = -1;
  const c = [];
  for (; ++l < o; ) {
    const f = t.children[l], E = {}, m = a ? a[l] : void 0;
    m && (E.align = m);
    let _ = { type: "element", tagName: i, properties: E, children: [] };
    f && (_.children = e.all(f), e.patch(f, _), _ = e.applyData(t, _)), c.push(_);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, h), e.applyData(t, h);
}
function oc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const nu = 9, ru = 32;
function lc(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), u = 0;
  const i = [];
  for (; r; )
    i.push(
      uu(t.slice(u, r.index), u > 0, !0),
      r[0]
    ), u = r.index + r[0].length, r = n.exec(t);
  return i.push(uu(t.slice(u), u > 0, !1)), i.join("");
}
function uu(e, t, n) {
  let r = 0, u = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === nu || i === ru; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(u - 1);
    for (; i === nu || i === ru; )
      u--, i = e.codePointAt(u - 1);
  }
  return u > r ? e.slice(r, u) : "";
}
function cc(e, t) {
  const n = { type: "text", value: lc(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function fc(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const hc = {
  blockquote: vl,
  break: zl,
  code: Yl,
  delete: ql,
  emphasis: Wl,
  footnoteReference: gi,
  footnote: Vl,
  heading: jl,
  html: Ql,
  imageReference: Gl,
  image: Xl,
  inlineCode: Kl,
  linkReference: $l,
  link: Jl,
  listItem: Zl,
  list: tc,
  paragraph: nc,
  root: rc,
  strong: uc,
  table: ac,
  tableCell: oc,
  tableRow: sc,
  text: cc,
  thematicBreak: fc,
  toml: Ut,
  yaml: Ut,
  definition: Ut,
  footnoteDefinition: Ut
};
function Ut() {
  return null;
}
const or = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  (function(e) {
    if (e == null)
      return Ec;
    if (typeof e == "string")
      return pc(e);
    if (typeof e == "object")
      return Array.isArray(e) ? dc(e) : mc(e);
    if (typeof e == "function")
      return on(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function dc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = or(e[n]);
  return on(r);
  function r(...u) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...u)) return !0;
    return !1;
  }
}
function mc(e) {
  return on(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r]) return !1;
    return !0;
  }
}
function pc(e) {
  return on(t);
  function t(n) {
    return n && n.type === e;
  }
}
function on(e) {
  return t;
  function t(n, ...r) {
    return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r));
  }
}
function Ec() {
  return !0;
}
const Tc = !0, iu = !1, bc = "skip", Ii = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  (function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
    const u = or(t), i = r ? -1 : 1;
    a(e, void 0, [])();
    function a(o, l, c) {
      const h = o && typeof o == "object" ? o : {};
      if (typeof h.type == "string") {
        const E = (
          // `hast`
          typeof h.tagName == "string" ? h.tagName : (
            // `xast`
            typeof h.name == "string" ? h.name : void 0
          )
        );
        Object.defineProperty(f, "name", {
          value: "node (" + (o.type + (E ? "<" + E + ">" : "")) + ")"
        });
      }
      return f;
      function f() {
        let E = [], m, _, A;
        if ((!t || u(o, l, c[c.length - 1] || null)) && (E = gc(n(o, c)), E[0] === iu))
          return E;
        if (o.children && E[0] !== bc)
          for (_ = (r ? o.children.length : -1) + i, A = c.concat(o); _ > -1 && _ < o.children.length; ) {
            if (m = a(o.children[_], _, A)(), m[0] === iu)
              return m;
            _ = typeof m[1] == "number" ? m[1] : _ + i;
          }
        return E;
      }
    }
  })
);
function gc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Tc, e] : [e];
}
const lr = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  (function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), Ii(e, t, u, r);
    function u(i, a) {
      const o = a[a.length - 1];
      return n(
        i,
        o ? o.children.indexOf(i) : null,
        o
      );
    }
  })
);
function Ac(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const au = {}.hasOwnProperty;
function _c(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return lr(e, "definition", (r) => {
    const u = su(r.identifier);
    u && !au.call(t, u) && (t[u] = r);
  }), n;
  function n(r) {
    const u = su(r);
    return u && au.call(t, u) ? t[u] : null;
  }
}
function su(e) {
  return String(e || "").toUpperCase();
}
const $t = {}.hasOwnProperty;
function Cc(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, u = {};
  return a.dangerous = r, a.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, a.footnoteLabel = n.footnoteLabel || "Footnotes", a.footnoteLabelTagName = n.footnoteLabelTagName || "h2", a.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a.footnoteBackLabel = n.footnoteBackLabel || "Back to content", a.unknownHandler = n.unknownHandler, a.passThrough = n.passThrough, a.handlers = { ...hc, ...n.handlers }, a.definition = _c(e), a.footnoteById = u, a.footnoteOrder = [], a.footnoteCounts = {}, a.patch = Ic, a.applyData = Nc, a.one = o, a.all = l, a.wrap = yc, a.augment = i, lr(e, "footnoteDefinition", (c) => {
    const h = String(c.identifier).toUpperCase();
    $t.call(u, h) || (u[h] = c);
  }), a;
  function i(c, h) {
    if (c && "data" in c && c.data) {
      const f = c.data;
      f.hName && (h.type !== "element" && (h = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), h.tagName = f.hName), h.type === "element" && f.hProperties && (h.properties = { ...h.properties, ...f.hProperties }), "children" in h && h.children && f.hChildren && (h.children = f.hChildren);
    }
    if (c) {
      const f = "type" in c ? c : { position: c };
      Ac(f) || (h.position = { start: ar(f), end: sr(f) });
    }
    return h;
  }
  function a(c, h, f, E) {
    return Array.isArray(f) && (E = f, f = {}), i(c, {
      type: "element",
      tagName: h,
      properties: f || {},
      children: E || []
    });
  }
  function o(c, h) {
    return Ni(a, c, h);
  }
  function l(c) {
    return cr(a, c);
  }
}
function Ic(e, t) {
  e.position && (t.position = ic(e));
}
function Nc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, u = e.data.hChildren, i = e.data.hProperties;
    typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
      type: "element",
      tagName: r,
      properties: {},
      children: []
    }), n.type === "element" && i && (n.properties = { ...n.properties, ...i }), "children" in n && n.children && u !== null && u !== void 0 && (n.children = u);
  }
  return n;
}
function Ni(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return $t.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: cr(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : Sc(e, t);
}
function cr(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let u = -1;
    for (; ++u < r.length; ) {
      const i = Ni(e, r[u], t);
      if (i) {
        if (u && r[u - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && i.type === "element")) {
          const a = i.children[0];
          a && a.type === "text" && (a.value = a.value.replace(/^\s+/, ""));
        }
        Array.isArray(i) ? n.push(...i) : n.push(i);
      }
    }
  }
  return n;
}
function Sc(e, t) {
  const n = t.data || {}, r = "value" in t && !($t.call(n, "hProperties") || $t.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: cr(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function yc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function kc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const u = e.all(r), i = String(r.identifier).toUpperCase(), a = ft(i.toLowerCase());
    let o = 0;
    const l = [];
    for (; ++o <= e.footnoteCounts[i]; ) {
      const f = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + a + (o > 1 ? "-" + o : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel
        },
        children: [{ type: "text", value: "↩" }]
      };
      o > 1 && f.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(o) }]
      }), l.length > 0 && l.push({ type: "text", value: " " }), l.push(f);
    }
    const c = u[u.length - 1];
    if (c && c.type === "element" && c.tagName === "p") {
      const f = c.children[c.children.length - 1];
      f && f.type === "text" ? f.value += " " : c.children.push({ type: "text", value: " " }), c.children.push(...l);
    } else
      u.push(...l);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + a },
      children: e.wrap(u, !0)
    };
    e.patch(r, h), t.push(h);
  }
  if (t.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: e.footnoteLabelTagName,
          properties: {
            // To do: use structured clone.
            ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
            id: "footnote-label"
          },
          children: [{ type: "text", value: e.footnoteLabel }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(t, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
function Si(e, t) {
  const n = Cc(e, t), r = n.one(e, null), u = kc(n);
  return u && r.children.push({ type: "text", value: `
` }, u), Array.isArray(r) ? { type: "root", children: r } : r;
}
const xc = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  (function(e, t) {
    return e && "run" in e ? Oc(e, t) : Lc(e || t);
  })
);
function Oc(e, t) {
  return (n, r, u) => {
    e.run(Si(n, t), r, (i) => {
      u(i);
    });
  };
}
function Lc(e) {
  return (t) => Si(t, e);
}
var xn = { exports: {} }, On, ou;
function Dc() {
  if (ou) return On;
  ou = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return On = e, On;
}
var Ln, lu;
function Rc() {
  if (lu) return Ln;
  lu = 1;
  var e = /* @__PURE__ */ Dc();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ln = function() {
    function r(a, o, l, c, h, f) {
      if (f !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    r.isRequired = r;
    function u() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: u,
      element: r,
      elementType: r,
      instanceOf: u,
      node: r,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ln;
}
var cu;
function Pc() {
  return cu || (cu = 1, xn.exports = /* @__PURE__ */ Rc()()), xn.exports;
}
var wc = /* @__PURE__ */ Pc();
const j = /* @__PURE__ */ rn(wc);
class Mt {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Mt.prototype.property = {};
Mt.prototype.normal = {};
Mt.prototype.space = null;
function yi(e, t) {
  const n = {}, r = {};
  let u = -1;
  for (; ++u < e.length; )
    Object.assign(n, e[u].property), Object.assign(r, e[u].normal);
  return new Mt(n, r, t);
}
function Qn(e) {
  return e.toLowerCase();
}
class Ce {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Ce.prototype.space = null;
Ce.prototype.boolean = !1;
Ce.prototype.booleanish = !1;
Ce.prototype.overloadedBoolean = !1;
Ce.prototype.number = !1;
Ce.prototype.commaSeparated = !1;
Ce.prototype.spaceSeparated = !1;
Ce.prototype.commaOrSpaceSeparated = !1;
Ce.prototype.mustUseProperty = !1;
Ce.prototype.defined = !1;
let Mc = 0;
const Q = Ze(), ae = Ze(), ki = Ze(), P = Ze(), te = Ze(), lt = Ze(), Te = Ze();
function Ze() {
  return 2 ** ++Mc;
}
const Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Q,
  booleanish: ae,
  commaOrSpaceSeparated: Te,
  commaSeparated: lt,
  number: P,
  overloadedBoolean: ki,
  spaceSeparated: te
}, Symbol.toStringTag, { value: "Module" })), Dn = Object.keys(Gn);
class fr extends Ce {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, u) {
    let i = -1;
    if (super(t, n), fu(this, "space", u), typeof r == "number")
      for (; ++i < Dn.length; ) {
        const a = Dn[i];
        fu(this, Dn[i], (r & Gn[a]) === Gn[a]);
      }
  }
}
fr.prototype.defined = !0;
function fu(e, t, n) {
  n && (e[t] = n);
}
const Fc = {}.hasOwnProperty;
function ht(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Fc.call(e.properties, r)) {
      const u = e.properties[r], i = new fr(
        r,
        e.transform(e.attributes || {}, r),
        u,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Qn(r)] = r, n[Qn(i.attribute)] = r;
    }
  return new Mt(t, n, e.space);
}
const xi = ht({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Oi = ht({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Li(e, t) {
  return t in e ? e[t] : t;
}
function Di(e, t) {
  return Li(e, t.toLowerCase());
}
const Ri = ht({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Di,
  properties: { xmlns: null, xmlnsXLink: null }
}), Pi = ht({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ae,
    ariaAutoComplete: null,
    ariaBusy: ae,
    ariaChecked: ae,
    ariaColCount: P,
    ariaColIndex: P,
    ariaColSpan: P,
    ariaControls: te,
    ariaCurrent: null,
    ariaDescribedBy: te,
    ariaDetails: null,
    ariaDisabled: ae,
    ariaDropEffect: te,
    ariaErrorMessage: null,
    ariaExpanded: ae,
    ariaFlowTo: te,
    ariaGrabbed: ae,
    ariaHasPopup: null,
    ariaHidden: ae,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: te,
    ariaLevel: P,
    ariaLive: null,
    ariaModal: ae,
    ariaMultiLine: ae,
    ariaMultiSelectable: ae,
    ariaOrientation: null,
    ariaOwns: te,
    ariaPlaceholder: null,
    ariaPosInSet: P,
    ariaPressed: ae,
    ariaReadOnly: ae,
    ariaRelevant: null,
    ariaRequired: ae,
    ariaRoleDescription: te,
    ariaRowCount: P,
    ariaRowIndex: P,
    ariaRowSpan: P,
    ariaSelected: ae,
    ariaSetSize: P,
    ariaSort: null,
    ariaValueMax: P,
    ariaValueMin: P,
    ariaValueNow: P,
    ariaValueText: null,
    role: null
  }
}), Bc = ht({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Di,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: lt,
    acceptCharset: te,
    accessKey: te,
    action: null,
    allow: null,
    allowFullScreen: Q,
    allowPaymentRequest: Q,
    allowUserMedia: Q,
    alt: null,
    as: null,
    async: Q,
    autoCapitalize: null,
    autoComplete: te,
    autoFocus: Q,
    autoPlay: Q,
    blocking: te,
    capture: null,
    charSet: null,
    checked: Q,
    cite: null,
    className: te,
    cols: P,
    colSpan: null,
    content: null,
    contentEditable: ae,
    controls: Q,
    controlsList: te,
    coords: P | lt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Q,
    defer: Q,
    dir: null,
    dirName: null,
    disabled: Q,
    download: ki,
    draggable: ae,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Q,
    formTarget: null,
    headers: te,
    height: P,
    hidden: Q,
    high: P,
    href: null,
    hrefLang: null,
    htmlFor: te,
    httpEquiv: te,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Q,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Q,
    itemId: null,
    itemProp: te,
    itemRef: te,
    itemScope: Q,
    itemType: te,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Q,
    low: P,
    manifest: null,
    max: null,
    maxLength: P,
    media: null,
    method: null,
    min: null,
    minLength: P,
    multiple: Q,
    muted: Q,
    name: null,
    nonce: null,
    noModule: Q,
    noValidate: Q,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Q,
    optimum: P,
    pattern: null,
    ping: te,
    placeholder: null,
    playsInline: Q,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Q,
    referrerPolicy: null,
    rel: te,
    required: Q,
    reversed: Q,
    rows: P,
    rowSpan: P,
    sandbox: te,
    scope: null,
    scoped: Q,
    seamless: Q,
    selected: Q,
    shadowRootClonable: Q,
    shadowRootDelegatesFocus: Q,
    shadowRootMode: null,
    shape: null,
    size: P,
    sizes: null,
    slot: null,
    span: P,
    spellCheck: ae,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: P,
    step: null,
    style: null,
    tabIndex: P,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Q,
    useMap: null,
    value: ae,
    width: P,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: te,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: P,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: P,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Q,
    // Lists. Use CSS to reduce space between items instead
    declare: Q,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: P,
    // `<img>` and `<object>`
    leftMargin: P,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: P,
    // `<body>`
    marginWidth: P,
    // `<body>`
    noResize: Q,
    // `<frame>`
    noHref: Q,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Q,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Q,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: P,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ae,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: P,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: P,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Q,
    disableRemotePlayback: Q,
    prefix: null,
    property: null,
    results: P,
    security: null,
    unselectable: null
  }
}), Hc = ht({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Li,
  properties: {
    about: Te,
    accentHeight: P,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: P,
    amplitude: P,
    arabicForm: null,
    ascent: P,
    attributeName: null,
    attributeType: null,
    azimuth: P,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: P,
    by: null,
    calcMode: null,
    capHeight: P,
    className: te,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: P,
    diffuseConstant: P,
    direction: null,
    display: null,
    dur: null,
    divisor: P,
    dominantBaseline: null,
    download: Q,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: P,
    enableBackground: null,
    end: null,
    event: null,
    exponent: P,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: P,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: lt,
    g2: lt,
    glyphName: lt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: P,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: P,
    horizOriginX: P,
    horizOriginY: P,
    id: null,
    ideographic: P,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: P,
    k: P,
    k1: P,
    k2: P,
    k3: P,
    k4: P,
    kernelMatrix: Te,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: P,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: P,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: P,
    overlineThickness: P,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: P,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: te,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: P,
    pointsAtY: P,
    pointsAtZ: P,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Te,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Te,
    rev: Te,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Te,
    requiredFeatures: Te,
    requiredFonts: Te,
    requiredFormats: Te,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: P,
    specularExponent: P,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: P,
    strikethroughThickness: P,
    string: null,
    stroke: null,
    strokeDashArray: Te,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: P,
    strokeOpacity: P,
    strokeWidth: null,
    style: null,
    surfaceScale: P,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Te,
    tabIndex: P,
    tableValues: null,
    target: null,
    targetX: P,
    targetY: P,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Te,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: P,
    underlineThickness: P,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: P,
    values: null,
    vAlphabetic: P,
    vMathematical: P,
    vectorEffect: null,
    vHanging: P,
    vIdeographic: P,
    version: null,
    vertAdvY: P,
    vertOriginX: P,
    vertOriginY: P,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: P,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Uc = /^data[-\w.:]+$/i, hu = /-[a-z]/g, vc = /[A-Z]/g;
function zc(e, t) {
  const n = Qn(t);
  let r = t, u = Ce;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Uc.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(hu, qc);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!hu.test(i)) {
        let a = i.replace(vc, Yc);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    u = fr;
  }
  return new u(r, t);
}
function Yc(e) {
  return "-" + e.toLowerCase();
}
function qc(e) {
  return e.charAt(1).toUpperCase();
}
const du = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Wc = yi([Oi, xi, Ri, Pi, Bc], "html"), Vc = yi([Oi, xi, Ri, Pi, Hc], "svg");
function jc(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      lr(t, "element", (n, r, u) => {
        const i = (
          /** @type {Element|Root} */
          u
        );
        let a;
        if (e.allowedElements ? a = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (a = e.disallowedElements.includes(n.tagName)), !a && e.allowElement && typeof r == "number" && (a = !e.allowElement(n, r, i)), a && typeof r == "number")
          return e.unwrapDisallowed && n.children ? i.children.splice(r, 1, ...n.children) : i.children.splice(r, 1), r;
      });
    };
}
function Qc(e) {
  const t = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
var vt = { exports: {} }, Rn, mu;
function Gc() {
  if (mu) return Rn;
  mu = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, i = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, a = /^[;\s]*/, o = /^\s+|\s+$/g, l = `
`, c = "/", h = "*", f = "", E = "comment", m = "declaration";
  Rn = function(A, k) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    k = k || {};
    var C = 1, R = 1;
    function O(v) {
      var H = v.match(t);
      H && (C += H.length);
      var W = v.lastIndexOf(l);
      R = ~W ? v.length - W : R + v.length;
    }
    function U() {
      var v = { line: C, column: R };
      return function(H) {
        return H.position = new z(v), V(), H;
      };
    }
    function z(v) {
      this.start = v, this.end = { line: C, column: R }, this.source = k.source;
    }
    z.prototype.content = A;
    function N(v) {
      var H = new Error(
        k.source + ":" + C + ":" + R + ": " + v
      );
      if (H.reason = v, H.filename = k.source, H.line = C, H.column = R, H.source = A, !k.silent) throw H;
    }
    function M(v) {
      var H = v.exec(A);
      if (H) {
        var W = H[0];
        return O(W), A = A.slice(W.length), H;
      }
    }
    function V() {
      M(n);
    }
    function K(v) {
      var H;
      for (v = v || []; H = y(); )
        H !== !1 && v.push(H);
      return v;
    }
    function y() {
      var v = U();
      if (!(c != A.charAt(0) || h != A.charAt(1))) {
        for (var H = 2; f != A.charAt(H) && (h != A.charAt(H) || c != A.charAt(H + 1)); )
          ++H;
        if (H += 2, f === A.charAt(H - 1))
          return N("End of comment missing");
        var W = A.slice(2, H - 2);
        return R += 2, O(W), A = A.slice(H), R += 2, v({
          type: E,
          comment: W
        });
      }
    }
    function F() {
      var v = U(), H = M(r);
      if (H) {
        if (y(), !M(u)) return N("property missing ':'");
        var W = M(i), se = v({
          type: m,
          property: _(H[0].replace(e, f)),
          value: W ? _(W[0].replace(e, f)) : f
        });
        return M(a), se;
      }
    }
    function B() {
      var v = [];
      K(v);
      for (var H; H = F(); )
        H !== !1 && (v.push(H), K(v));
      return v;
    }
    return V(), B();
  };
  function _(A) {
    return A ? A.replace(o, f) : f;
  }
  return Rn;
}
var pu;
function Xc() {
  if (pu) return vt.exports;
  pu = 1;
  var e = Gc();
  function t(n, r) {
    var u = null;
    if (!n || typeof n != "string")
      return u;
    for (var i, a = e(n), o = typeof r == "function", l, c, h = 0, f = a.length; h < f; h++)
      i = a[h], l = i.property, c = i.value, o ? r(l, c, i) : c && (u || (u = {}), u[l] = c);
    return u;
  }
  return vt.exports = t, vt.exports.default = t, vt.exports;
}
var Kc = Xc();
const $c = /* @__PURE__ */ rn(Kc), Xn = {}.hasOwnProperty, Jc = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function wi(e, t) {
  const n = [];
  let r = -1, u;
  for (; ++r < t.children.length; )
    u = t.children[r], u.type === "element" ? n.push(Zc(e, u, r, t)) : u.type === "text" ? (t.type !== "element" || !Jc.has(t.tagName) || !Qc(u)) && n.push(u.value) : u.type === "raw" && !e.options.skipHtml && n.push(u.value);
  return n;
}
function Zc(e, t, n, r) {
  const u = e.options, i = u.transformLinkUri === void 0 ? ps : u.transformLinkUri, a = e.schema, o = t.tagName, l = {};
  let c = a, h;
  if (a.space === "html" && o === "svg" && (c = Vc, e.schema = c), t.properties)
    for (h in t.properties)
      Xn.call(t.properties, h) && t0(l, h, t.properties[h], e);
  (o === "ol" || o === "ul") && e.listDepth++;
  const f = wi(e, t);
  (o === "ol" || o === "ul") && e.listDepth--, e.schema = a;
  const E = t.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, m = u.components && Xn.call(u.components, o) ? u.components[o] : o, _ = typeof m == "string" || m === re.Fragment;
  if (!ns.isValidElementType(m))
    throw new TypeError(
      `Component for name \`${o}\` not defined or is not renderable`
    );
  if (l.key = n, o === "a" && u.linkTarget && (l.target = typeof u.linkTarget == "function" ? u.linkTarget(
    String(l.href || ""),
    t.children,
    typeof l.title == "string" ? l.title : null
  ) : u.linkTarget), o === "a" && i && (l.href = i(
    String(l.href || ""),
    t.children,
    typeof l.title == "string" ? l.title : null
  )), !_ && o === "code" && r.type === "element" && r.tagName !== "pre" && (l.inline = !0), !_ && (o === "h1" || o === "h2" || o === "h3" || o === "h4" || o === "h5" || o === "h6") && (l.level = Number.parseInt(o.charAt(1), 10)), o === "img" && u.transformImageUri && (l.src = u.transformImageUri(
    String(l.src || ""),
    String(l.alt || ""),
    typeof l.title == "string" ? l.title : null
  )), !_ && o === "li" && r.type === "element") {
    const A = e0(t);
    l.checked = A && A.properties ? !!A.properties.checked : null, l.index = Pn(r, t), l.ordered = r.tagName === "ol";
  }
  return !_ && (o === "ol" || o === "ul") && (l.ordered = o === "ol", l.depth = e.listDepth), (o === "td" || o === "th") && (l.align && (l.style || (l.style = {}), l.style.textAlign = l.align, delete l.align), _ || (l.isHeader = o === "th")), !_ && o === "tr" && r.type === "element" && (l.isHeader = r.tagName === "thead"), u.sourcePos && (l["data-sourcepos"] = u0(E)), !_ && u.rawSourcePos && (l.sourcePosition = t.position), !_ && u.includeElementIndex && (l.index = Pn(r, t), l.siblingCount = Pn(r)), _ || (l.node = t), f.length > 0 ? re.createElement(m, l, f) : re.createElement(m, l);
}
function e0(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input")
      return n;
  }
  return null;
}
function Pn(e, t) {
  let n = -1, r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function t0(e, t, n, r) {
  const u = zc(r.schema, t);
  let i = n;
  i == null || i !== i || (Array.isArray(i) && (i = u.commaSeparated ? $u(i) : Ju(i)), u.property === "style" && typeof i == "string" && (i = n0(i)), u.space && u.property ? e[Xn.call(du, u.property) ? du[u.property] : u.property] = i : u.attribute && (e[u.attribute] = i));
}
function n0(e) {
  const t = {};
  try {
    $c(e, n);
  } catch {
  }
  return t;
  function n(r, u) {
    const i = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[i.replace(/-([a-z])/g, r0)] = u;
  }
}
function r0(e, t) {
  return t.toUpperCase();
}
function u0(e) {
  return [
    e.start.line,
    ":",
    e.start.column,
    "-",
    e.end.line,
    ":",
    e.end.column
  ].map(String).join("");
}
const Eu = {}.hasOwnProperty, i0 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zt = {
  plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function Mi(e) {
  for (const i in zt)
    if (Eu.call(zt, i) && Eu.call(e, i)) {
      const a = zt[i];
      console.warn(
        `[react-markdown] Warning: please ${a.to ? `use \`${a.to}\` instead of` : "remove"} \`${i}\` (see <${i0}#${a.id}> for more info)`
      ), delete zt[i];
    }
  const t = Ps().use(Ul).use(e.remarkPlugins || []).use(xc, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(jc, e), n = new ti();
  typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let u = re.createElement(
    re.Fragment,
    {},
    wi({ options: e, schema: Wc, listDepth: 0 }, r)
  );
  return e.className && (u = re.createElement("div", { className: e.className }, u)), u;
}
Mi.propTypes = {
  // Core options:
  children: j.string,
  // Layout options:
  className: j.string,
  // Filter options:
  allowElement: j.func,
  allowedElements: j.arrayOf(j.string),
  disallowedElements: j.arrayOf(j.string),
  unwrapDisallowed: j.bool,
  // Plugin options:
  remarkPlugins: j.arrayOf(
    j.oneOfType([
      j.object,
      j.func,
      j.arrayOf(
        j.oneOfType([
          j.bool,
          j.string,
          j.object,
          j.func,
          j.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            j.any
          )
        ])
      )
    ])
  ),
  rehypePlugins: j.arrayOf(
    j.oneOfType([
      j.object,
      j.func,
      j.arrayOf(
        j.oneOfType([
          j.bool,
          j.string,
          j.object,
          j.func,
          j.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            j.any
          )
        ])
      )
    ])
  ),
  // Transform options:
  sourcePos: j.bool,
  rawSourcePos: j.bool,
  skipHtml: j.bool,
  includeElementIndex: j.bool,
  transformLinkUri: j.oneOfType([j.func, j.bool]),
  linkTarget: j.oneOfType([j.func, j.string]),
  transformImageUri: j.func,
  components: j.object
};
const a0 = "_selectionMenu_1fjox_1", s0 = "_menuItem_1fjox_14", wn = {
  selectionMenu: a0,
  menuItem: s0
}, Tu = 6, Yt = 8, o0 = ({
  containerRef: e,
  onAddToChat: t
}) => {
  const { t: n } = rs(), r = ke.useRef(null), [u, i] = ke.useState(null), [a, o] = ke.useState(null), [l, c] = ke.useState(""), h = ke.useCallback(() => {
    i(null), o(null), c("");
  }, []), f = ke.useCallback(() => {
    const _ = e.current, A = window.getSelection();
    if (!_ || !A || A.isCollapsed || !A.rangeCount) {
      h();
      return;
    }
    const k = A.toString().trim(), C = A.getRangeAt(0);
    if (!k || !_.contains(C.commonAncestorContainer)) {
      h();
      return;
    }
    const R = C.getBoundingClientRect();
    c(k), i({ top: R.top, left: R.left, bottom: R.bottom });
  }, [e, h]);
  if (ke.useEffect(() => {
    const _ = () => window.setTimeout(f, 0), A = () => {
      const k = window.getSelection();
      (!k || k.isCollapsed) && h();
    };
    return document.addEventListener("mouseup", _), document.addEventListener("selectionchange", A), window.addEventListener("scroll", h, !0), window.addEventListener("resize", h), () => {
      document.removeEventListener("mouseup", _), document.removeEventListener("selectionchange", A), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", h);
    };
  }, [f, h]), ke.useLayoutEffect(() => {
    const _ = r.current;
    if (!u || !_)
      return;
    const { offsetWidth: A, offsetHeight: k } = _, C = u.top - k - Tu, R = C >= Yt ? C : Math.min(u.bottom + Tu, window.innerHeight - k - Yt), O = Math.max(
      Yt,
      Math.min(u.left, window.innerWidth - A - Yt)
    );
    o({ top: R, left: O });
  }, [u]), !u)
    return null;
  return us.createPortal(
    /* @__PURE__ */ re.createElement(
      "div",
      {
        ref: r,
        className: wn.selectionMenu,
        style: {
          top: (a == null ? void 0 : a.top) ?? u.top,
          left: (a == null ? void 0 : a.left) ?? u.left,
          // Hide the pre-measured first frame so it never flashes off-screen.
          visibility: a ? "visible" : "hidden"
        },
        onMouseDown: (_) => _.preventDefault()
      },
      /* @__PURE__ */ re.createElement("div", { className: wn.menuItem, onClick: E }, /* @__PURE__ */ re.createElement(is, { size: 14 }), /* @__PURE__ */ re.createElement("span", null, n("common.action.copy"))),
      t && /* @__PURE__ */ re.createElement("div", { className: wn.menuItem, onClick: m }, /* @__PURE__ */ re.createElement(as, { size: 14 }), /* @__PURE__ */ re.createElement("span", null, n("chat.selection.add_to_chat")))
    ),
    document.body
  );
  function E() {
    ss(l), os.success(n("common.notice.copied")), h();
  }
  function m() {
    t == null || t(l), h();
  }
}, l0 = {
  tokenize: p0,
  partial: !0
}, Fi = {
  tokenize: E0,
  partial: !0
}, Bi = {
  tokenize: T0,
  partial: !0
}, Hi = {
  tokenize: b0,
  partial: !0
}, c0 = {
  tokenize: g0,
  partial: !0
}, Ui = {
  tokenize: d0,
  previous: zi
}, vi = {
  tokenize: m0,
  previous: Yi
}, He = {
  tokenize: h0,
  previous: qi
}, Re = {}, f0 = {
  text: Re
};
let Ge = 48;
for (; Ge < 123; )
  Re[Ge] = He, Ge++, Ge === 58 ? Ge = 65 : Ge === 91 && (Ge = 97);
Re[43] = He;
Re[45] = He;
Re[46] = He;
Re[95] = He;
Re[72] = [He, vi];
Re[104] = [He, vi];
Re[87] = [He, Ui];
Re[119] = [He, Ui];
function h0(e, t, n) {
  const r = this;
  let u, i;
  return a;
  function a(f) {
    return !Kn(f) || !qi.call(r, r.previous) || hr(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(f));
  }
  function o(f) {
    return Kn(f) ? (e.consume(f), o) : f === 64 ? (e.consume(f), l) : n(f);
  }
  function l(f) {
    return f === 46 ? e.check(
      c0,
      h,
      c
    )(f) : f === 45 || f === 95 || he(f) ? (i = !0, e.consume(f), l) : h(f);
  }
  function c(f) {
    return e.consume(f), u = !0, l;
  }
  function h(f) {
    return i && u && me(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
  }
}
function d0(e, t, n) {
  const r = this;
  return u;
  function u(a) {
    return a !== 87 && a !== 119 || !zi.call(r, r.previous) || hr(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      l0,
      e.attempt(Fi, e.attempt(Bi, i), n),
      n
    )(a));
  }
  function i(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function m0(e, t, n) {
  const r = this;
  let u = "", i = !1;
  return a;
  function a(f) {
    return (f === 72 || f === 104) && Yi.call(r, r.previous) && !hr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), u += String.fromCodePoint(f), e.consume(f), o) : n(f);
  }
  function o(f) {
    if (me(f) && u.length < 5)
      return u += String.fromCodePoint(f), e.consume(f), o;
    if (f === 58) {
      const E = u.toLowerCase();
      if (E === "http" || E === "https")
        return e.consume(f), l;
    }
    return n(f);
  }
  function l(f) {
    return f === 47 ? (e.consume(f), i ? c : (i = !0, l)) : n(f);
  }
  function c(f) {
    return f === null || Xt(f) || ee(f) || Je(f) || an(f) ? n(f) : e.attempt(Fi, e.attempt(Bi, h), n)(f);
  }
  function h(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
  }
}
function p0(e, t, n) {
  let r = 0;
  return u;
  function u(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), u) : a === 46 && r === 3 ? (e.consume(a), i) : n(a);
  }
  function i(a) {
    return a === null ? n(a) : t(a);
  }
}
function E0(e, t, n) {
  let r, u, i;
  return a;
  function a(c) {
    return c === 46 || c === 95 ? e.check(Hi, l, o)(c) : c === null || ee(c) || Je(c) || c !== 45 && an(c) ? l(c) : (i = !0, e.consume(c), a);
  }
  function o(c) {
    return c === 95 ? r = !0 : (u = r, r = void 0), e.consume(c), a;
  }
  function l(c) {
    return u || r || !i ? n(c) : t(c);
  }
}
function T0(e, t) {
  let n = 0, r = 0;
  return u;
  function u(a) {
    return a === 40 ? (n++, e.consume(a), u) : a === 41 && r < n ? i(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(Hi, t, i)(a) : a === null || ee(a) || Je(a) ? t(a) : (e.consume(a), u);
  }
  function i(a) {
    return a === 41 && r++, e.consume(a), u;
  }
}
function b0(e, t, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), i) : o === 93 ? (e.consume(o), u) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || ee(o) || Je(o) ? t(o) : n(o)
    );
  }
  function u(o) {
    return o === null || o === 40 || o === 91 || ee(o) || Je(o) ? t(o) : r(o);
  }
  function i(o) {
    return me(o) ? a(o) : n(o);
  }
  function a(o) {
    return o === 59 ? (e.consume(o), r) : me(o) ? (e.consume(o), a) : n(o);
  }
}
function g0(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), u;
  }
  function u(i) {
    return he(i) ? n(i) : t(i);
  }
}
function zi(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ee(e);
}
function Yi(e) {
  return !me(e);
}
function qi(e) {
  return !(e === 47 || Kn(e));
}
function Kn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || he(e);
}
function hr(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const A0 = {
  tokenize: x0,
  partial: !0
};
function _0() {
  return {
    document: {
      91: {
        tokenize: S0,
        continuation: {
          tokenize: y0
        },
        exit: k0
      }
    },
    text: {
      91: {
        tokenize: N0
      },
      93: {
        add: "after",
        tokenize: C0,
        resolveTo: I0
      }
    }
  };
}
function C0(e, t, n) {
  const r = this;
  let u = r.events.length;
  const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; u--; ) {
    const l = r.events[u][1];
    if (l.type === "labelImage") {
      a = l;
      break;
    }
    if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link")
      break;
  }
  return o;
  function o(l) {
    if (!a || !a._balanced)
      return n(l);
    const c = xe(
      r.sliceSerialize({
        start: a.end,
        end: r.now()
      })
    );
    return c.codePointAt(0) !== 94 || !i.includes(c.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function I0(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  u.end.column++, u.end.offset++, u.end._bufferIndex++;
  const i = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, u.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, i.start),
    end: Object.assign({}, i.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", u, t],
    ["exit", u, t],
    // Everything in between.
    ["enter", i, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", i, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...o), e;
}
function N0(e, t, n) {
  const r = this, u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i = 0, a;
  return o;
  function o(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c);
  }
  function c(f) {
    if (
      // Too long.
      i > 999 || // Closing brace with nothing.
      f === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || ee(f)
    )
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const E = e.exit("gfmFootnoteCallString");
      return u.includes(xe(r.sliceSerialize(E))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return ee(f) || (a = !0), i++, e.consume(f), f === 92 ? h : c;
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, c) : c(f);
  }
}
function S0(e, t, n) {
  const r = this, u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i, a = 0, o;
  return l;
  function l(_) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(_), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(_) {
    return _ === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(_), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : n(_);
  }
  function h(_) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      _ === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      _ === null || _ === 91 || ee(_)
    )
      return n(_);
    if (_ === 93) {
      e.exit("chunkString");
      const A = e.exit("gfmFootnoteDefinitionLabelString");
      return i = xe(r.sliceSerialize(A)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(_), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), E;
    }
    return ee(_) || (o = !0), a++, e.consume(_), _ === 92 ? f : h;
  }
  function f(_) {
    return _ === 91 || _ === 92 || _ === 93 ? (e.consume(_), a++, h) : h(_);
  }
  function E(_) {
    return _ === 58 ? (e.enter("definitionMarker"), e.consume(_), e.exit("definitionMarker"), u.includes(i) || u.push(i), $(
      e,
      m,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(_);
  }
  function m(_) {
    return t(_);
  }
}
function y0(e, t, n) {
  return e.check(wt, t, e.attempt(A0, t, n));
}
function k0(e) {
  e.exit("gfmFootnoteDefinition");
}
function x0(e, t, n) {
  const r = this;
  return $(
    e,
    u,
    "gfmFootnoteDefinitionIndent",
    5
  );
  function u(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(i) : n(i);
  }
}
function O0(e) {
  let n = (e || {}).singleTilde;
  const r = {
    tokenize: i,
    resolveAll: u
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function u(a, o) {
    let l = -1;
    for (; ++l < a.length; )
      if (a[l][0] === "enter" && a[l][1].type === "strikethroughSequenceTemporary" && a[l][1]._close) {
        let c = l;
        for (; c--; )
          if (a[c][0] === "exit" && a[c][1].type === "strikethroughSequenceTemporary" && a[c][1]._open && // If the sizes are the same:
          a[l][1].end.offset - a[l][1].start.offset === a[c][1].end.offset - a[c][1].start.offset) {
            a[l][1].type = "strikethroughSequence", a[c][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, a[c][1].start),
              end: Object.assign({}, a[l][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, a[c][1].end),
              end: Object.assign({}, a[l][1].start)
            }, E = [
              ["enter", h, o],
              ["enter", a[c][1], o],
              ["exit", a[c][1], o],
              ["enter", f, o]
            ], m = o.parser.constructs.insideSpan.null;
            m && be(
              E,
              E.length,
              0,
              sn(m, a.slice(c + 1, l), o)
            ), be(E, E.length, 0, [
              ["exit", f, o],
              ["enter", a[l][1], o],
              ["exit", a[l][1], o],
              ["exit", h, o]
            ]), be(a, c - 1, l - c + 3, E), l = c + E.length - 2;
            break;
          }
      }
    for (l = -1; ++l < a.length; )
      a[l][1].type === "strikethroughSequenceTemporary" && (a[l][1].type = "data");
    return a;
  }
  function i(a, o, l) {
    const c = this.previous, h = this.events;
    let f = 0;
    return E;
    function E(_) {
      return c === 126 && h[h.length - 1][1].type !== "characterEscape" ? l(_) : (a.enter("strikethroughSequenceTemporary"), m(_));
    }
    function m(_) {
      const A = Kt(c);
      if (_ === 126)
        return f > 1 ? l(_) : (a.consume(_), f++, m);
      if (f < 2 && !n) return l(_);
      const k = a.exit("strikethroughSequenceTemporary"), C = Kt(_);
      return k._open = !C || C === 2 && !!A, k._close = !A || A === 2 && !!C, o(_);
    }
  }
}
class L0 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {void}
   */
  add(t, n, r) {
    D0(this, t, n, r);
  }
  // To do: not used here.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {void}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {void}
   */
  consume(t) {
    if (this.map.sort((i, a) => i[0] - a[0]), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1])), r.push(this.map[n][2]), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let u = r.pop();
    for (; u; )
      t.push(...u), u = r.pop();
    this.map.length = 0;
  }
}
function D0(e, t, n, r) {
  let u = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; u < e.map.length; ) {
      if (e.map[u][0] === t) {
        e.map[u][1] += n, e.map[u][2].push(...r);
        return;
      }
      u += 1;
    }
    e.map.push([t, n, r]);
  }
}
function R0(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const u = e[t];
    if (n) {
      if (u[0] === "enter")
        u[1].type === "tableContent" && r.push(
          e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
        );
      else if (u[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const i = r.length - 1;
          r[i] = r[i] === "left" ? "center" : "right";
        }
      } else if (u[1].type === "tableDelimiterRow")
        break;
    } else u[0] === "enter" && u[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
const P0 = {
  flow: {
    null: {
      tokenize: w0,
      resolveAll: M0
    }
  }
};
function w0(e, t, n) {
  const r = this;
  let u = 0, i = 0, a;
  return o;
  function o(y) {
    let F = r.events.length - 1;
    for (; F > -1; ) {
      const H = r.events[F][1].type;
      if (H === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      H === "linePrefix")
        F--;
      else break;
    }
    const B = F > -1 ? r.events[F][1].type : null, v = B === "tableHead" || B === "tableRow" ? N : l;
    return v === N && r.parser.lazy[r.now().line] ? n(y) : v(y);
  }
  function l(y) {
    return e.enter("tableHead"), e.enter("tableRow"), c(y);
  }
  function c(y) {
    return y === 124 || (a = !0, i += 1), h(y);
  }
  function h(y) {
    return y === null ? n(y) : Y(y) ? i > 1 ? (i = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), m) : n(y) : X(y) ? $(e, h, "whitespace")(y) : (i += 1, a && (a = !1, u += 1), y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), a = !0, h) : (e.enter("data"), f(y)));
  }
  function f(y) {
    return y === null || y === 124 || ee(y) ? (e.exit("data"), h(y)) : (e.consume(y), y === 92 ? E : f);
  }
  function E(y) {
    return y === 92 || y === 124 ? (e.consume(y), f) : f(y);
  }
  function m(y) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(y) : (e.enter("tableDelimiterRow"), a = !1, X(y) ? $(
      e,
      _,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(y) : _(y));
  }
  function _(y) {
    return y === 45 || y === 58 ? k(y) : y === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), A) : z(y);
  }
  function A(y) {
    return X(y) ? $(e, k, "whitespace")(y) : k(y);
  }
  function k(y) {
    return y === 58 ? (i += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), C) : y === 45 ? (i += 1, C(y)) : y === null || Y(y) ? U(y) : z(y);
  }
  function C(y) {
    return y === 45 ? (e.enter("tableDelimiterFiller"), R(y)) : z(y);
  }
  function R(y) {
    return y === 45 ? (e.consume(y), R) : y === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), O) : (e.exit("tableDelimiterFiller"), O(y));
  }
  function O(y) {
    return X(y) ? $(e, U, "whitespace")(y) : U(y);
  }
  function U(y) {
    return y === 124 ? _(y) : y === null || Y(y) ? !a || u !== i ? z(y) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(y)) : z(y);
  }
  function z(y) {
    return n(y);
  }
  function N(y) {
    return e.enter("tableRow"), M(y);
  }
  function M(y) {
    return y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), M) : y === null || Y(y) ? (e.exit("tableRow"), t(y)) : X(y) ? $(e, M, "whitespace")(y) : (e.enter("data"), V(y));
  }
  function V(y) {
    return y === null || y === 124 || ee(y) ? (e.exit("data"), M(y)) : (e.consume(y), y === 92 ? K : V);
  }
  function K(y) {
    return y === 92 || y === 124 ? (e.consume(y), V) : V(y);
  }
}
function M0(e, t) {
  let n = -1, r = !0, u = 0, i = [0, 0, 0, 0], a = [0, 0, 0, 0], o = !1, l = 0, c, h, f;
  const E = new L0();
  for (; ++n < e.length; ) {
    const m = e[n], _ = m[1];
    m[0] === "enter" ? _.type === "tableHead" ? (o = !1, l !== 0 && (bu(E, t, l, c, h), h = void 0, l = 0), c = {
      type: "table",
      start: Object.assign({}, _.start),
      // Note: correct end is set later.
      end: Object.assign({}, _.end)
    }, E.add(n, 0, [["enter", c, t]])) : _.type === "tableRow" || _.type === "tableDelimiterRow" ? (r = !0, f = void 0, i = [0, 0, 0, 0], a = [0, n + 1, 0, 0], o && (o = !1, h = {
      type: "tableBody",
      start: Object.assign({}, _.start),
      // Note: correct end is set later.
      end: Object.assign({}, _.end)
    }, E.add(n, 0, [["enter", h, t]])), u = _.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : u && (_.type === "data" || _.type === "tableDelimiterMarker" || _.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (i[1] !== 0 && (a[0] = a[1], f = qt(
      E,
      t,
      i,
      u,
      void 0,
      f
    ), i = [0, 0, 0, 0]), a[2] = n)) : _.type === "tableCellDivider" && (r ? r = !1 : (i[1] !== 0 && (a[0] = a[1], f = qt(
      E,
      t,
      i,
      u,
      void 0,
      f
    )), i = a, a = [i[1], n, 0, 0])) : _.type === "tableHead" ? (o = !0, l = n) : _.type === "tableRow" || _.type === "tableDelimiterRow" ? (l = n, i[1] !== 0 ? (a[0] = a[1], f = qt(
      E,
      t,
      i,
      u,
      n,
      f
    )) : a[1] !== 0 && (f = qt(E, t, a, u, n, f)), u = 0) : u && (_.type === "data" || _.type === "tableDelimiterMarker" || _.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (l !== 0 && bu(E, t, l, c, h), E.consume(t.events), n = -1; ++n < t.events.length; ) {
    const m = t.events[n];
    m[0] === "enter" && m[1].type === "table" && (m[1]._align = R0(t.events, n));
  }
  return e;
}
function qt(e, t, n, r, u, i) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (i.end = Object.assign({}, at(t.events, n[0])), e.add(n[0], 0, [["exit", i, t]]));
  const l = at(t.events, n[1]);
  if (i = {
    type: a,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, e.add(n[1], 0, [["enter", i, t]]), n[2] !== 0) {
    const c = at(t.events, n[2]), h = at(t.events, n[3]), f = {
      type: o,
      start: Object.assign({}, c),
      end: Object.assign({}, h)
    };
    if (e.add(n[2], 0, [["enter", f, t]]), r !== 2) {
      const E = t.events[n[2]], m = t.events[n[3]];
      if (E[1].end = Object.assign({}, m[1].end), E[1].type = "chunkText", E[1].contentType = "text", n[3] > n[2] + 1) {
        const _ = n[2] + 1, A = n[3] - n[2] - 1;
        e.add(_, A, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", f, t]]);
  }
  return u !== void 0 && (i.end = Object.assign({}, at(t.events, u)), e.add(u, 0, [["exit", i, t]]), i = void 0), i;
}
function bu(e, t, n, r, u) {
  const i = [], a = at(t.events, n);
  u && (u.end = Object.assign({}, a), i.push(["exit", u, t])), r.end = Object.assign({}, a), i.push(["exit", r, t]), e.add(n + 1, 0, i);
}
function at(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const F0 = {
  tokenize: H0
}, B0 = {
  text: {
    91: F0
  }
};
function H0(e, t, n) {
  const r = this;
  return u;
  function u(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(l) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), i)
    );
  }
  function i(l) {
    return ee(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), a) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), a) : n(l);
  }
  function a(l) {
    return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(l);
  }
  function o(l) {
    return Y(l) ? t(l) : X(l) ? e.check(
      {
        tokenize: U0
      },
      t,
      n
    )(l) : n(l);
  }
}
function U0(e, t, n) {
  return $(e, r, "whitespace");
  function r(u) {
    return u === null ? n(u) : t(u);
  }
}
function v0(e) {
  return ii([
    f0,
    _0(),
    O0(e),
    P0,
    B0
  ]);
}
function z0(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Y0 = {}.hasOwnProperty, q0 = (
  /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &
   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)
   * )}
   **/
  /**
   * @template {Node} Tree
   * @param {Tree} tree
   * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find
   * @param {Replace | Options | null | undefined} [replace]
   * @param {Options | null | undefined} [options]
   * @returns {Tree}
   */
  (function(e, t, n, r) {
    let u, i;
    typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], u = r) : (i = t, u = n), u || (u = {});
    const a = or(u.ignore || []), o = W0(i);
    let l = -1;
    for (; ++l < o.length; )
      Ii(e, "text", c);
    return e;
    function c(f, E) {
      let m = -1, _;
      for (; ++m < E.length; ) {
        const A = E[m];
        if (a(
          A,
          // @ts-expect-error: TS doesn’t understand but it’s perfect.
          _ ? _.children.indexOf(A) : void 0,
          _
        ))
          return;
        _ = A;
      }
      if (_)
        return h(f, E);
    }
    function h(f, E) {
      const m = E[E.length - 1], _ = o[l][0], A = o[l][1];
      let k = 0;
      const C = m.children.indexOf(f);
      let R = !1, O = [];
      _.lastIndex = 0;
      let U = _.exec(f.value);
      for (; U; ) {
        const z = U.index, N = {
          index: U.index,
          input: U.input,
          // @ts-expect-error: stack is fine.
          stack: [...E, f]
        };
        let M = A(...U, N);
        if (typeof M == "string" && (M = M.length > 0 ? { type: "text", value: M } : void 0), M !== !1 && (k !== z && O.push({
          type: "text",
          value: f.value.slice(k, z)
        }), Array.isArray(M) ? O.push(...M) : M && O.push(M), k = z + U[0].length, R = !0), !_.global)
          break;
        U = _.exec(f.value);
      }
      return R ? (k < f.value.length && O.push({ type: "text", value: f.value.slice(k) }), m.children.splice(C, 1, ...O)) : O = [f], C + O.length;
    }
  })
);
function W0(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        gu(e[n][0]),
        Au(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      Y0.call(e, n) && t.push([gu(n), Au(e[n])]);
  }
  return t;
}
function gu(e) {
  return typeof e == "string" ? new RegExp(z0(e), "g") : e;
}
function Au(e) {
  return typeof e == "function" ? e : () => e;
}
const Mn = "phrasing", Fn = ["autolink", "link", "image", "label"], V0 = {
  transforms: [J0],
  enter: {
    literalAutolink: Q0,
    literalAutolinkEmail: Bn,
    literalAutolinkHttp: Bn,
    literalAutolinkWww: Bn
  },
  exit: {
    literalAutolink: $0,
    literalAutolinkEmail: K0,
    literalAutolinkHttp: G0,
    literalAutolinkWww: X0
  }
}, j0 = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: Mn,
      notInConstruct: Fn
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: Mn,
      notInConstruct: Fn
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: Mn, notInConstruct: Fn }
  ]
};
function Q0(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Bn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function G0(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function X0(e) {
  this.config.exit.data.call(this, e);
  const t = (
    /** @type {Link} */
    this.stack[this.stack.length - 1]
  );
  t.url = "http://" + this.sliceSerialize(e);
}
function K0(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function $0(e) {
  this.exit(e);
}
function J0(e) {
  q0(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Z0],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, ef]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Z0(e, t, n, r, u) {
  let i = "";
  if (!Wi(u) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !tf(n)))
    return !1;
  const a = nf(n + r);
  if (!a[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: i + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [o, { type: "text", value: a[1] }] : o;
}
function ef(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Wi(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function tf(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function nf(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const u = Lr(e, "(");
  let i = Lr(e, ")");
  for (; r !== -1 && u > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function Wi(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Je(n) || an(n)) && (!t || n !== 47);
}
function Vi(e) {
  return e.label || !e.identifier ? e.label || "" : Ei(e.identifier);
}
function rf(e, t, n) {
  const r = t.indexStack, u = e.children || [], i = t.createTracker(n), a = [];
  let o = -1;
  for (r.push(-1); ++o < u.length; ) {
    const l = u[o];
    r[r.length - 1] = o, a.push(
      i.move(
        t.handle(l, e, t, {
          before: `
`,
          after: `
`,
          ...i.current()
        })
      )
    ), l.type !== "list" && (t.bulletLastUsed = void 0), o < u.length - 1 && a.push(
      i.move(uf(l, u[o + 1], e, t))
    );
  }
  return r.pop(), a.join("");
}
function uf(e, t, n, r) {
  let u = r.join.length;
  for (; u--; ) {
    const i = r.join[u](e, t, n, r);
    if (i === !0 || i === 1)
      break;
    if (typeof i == "number")
      return `
`.repeat(1 + i);
    if (i === !1)
      return `

<!---->

`;
  }
  return `

`;
}
const af = /\r?\n|\r/g;
function sf(e, t) {
  const n = [];
  let r = 0, u = 0, i;
  for (; i = af.exec(e); )
    a(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, u++;
  return a(e.slice(r)), n.join("");
  function a(o) {
    n.push(t(o, u, !o));
  }
}
function ji(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function of(e, t) {
  return _u(e, t.inConstruct, !0) && !_u(e, t.notInConstruct, !1);
}
function _u(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Qi(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), u = [], i = [], a = {};
  let o = -1;
  for (; ++o < e.unsafe.length; ) {
    const h = e.unsafe[o];
    if (!of(e.stack, h))
      continue;
    const f = ji(h);
    let E;
    for (; E = f.exec(r); ) {
      const m = "before" in h || !!h.atBreak, _ = "after" in h, A = E.index + (m ? E[1].length : 0);
      u.includes(A) ? (a[A].before && !m && (a[A].before = !1), a[A].after && !_ && (a[A].after = !1)) : (u.push(A), a[A] = { before: m, after: _ });
    }
  }
  u.sort(lf);
  let l = n.before ? n.before.length : 0;
  const c = r.length - (n.after ? n.after.length : 0);
  for (o = -1; ++o < u.length; ) {
    const h = u[o];
    h < l || h >= c || h + 1 < c && u[o + 1] === h + 1 && a[h].after && !a[h + 1].before && !a[h + 1].after || u[o - 1] === h - 1 && a[h].before && !a[h - 1].before && !a[h - 1].after || (l !== h && i.push(Cu(r.slice(l, h), "\\")), l = h, /[!-/:-@[-`{-~]/.test(r.charAt(h)) && (!n.encode || !n.encode.includes(r.charAt(h))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(h).toString(16).toUpperCase() + ";"
    ), l++));
  }
  return i.push(Cu(r.slice(l, c), n.after)), i.join("");
}
function lf(e, t) {
  return e - t;
}
function Cu(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], u = [], i = e + t;
  let a = -1, o = 0, l;
  for (; l = n.exec(i); )
    r.push(l.index);
  for (; ++a < r.length; )
    o !== r[a] && u.push(e.slice(o, r[a])), u.push("\\"), o = r[a];
  return u.push(e.slice(o)), u.join("");
}
function ln(e) {
  const t = e || {}, n = t.now || {};
  let r = t.lineShift || 0, u = n.line || 1, i = n.column || 1;
  return { move: l, current: a, shift: o };
  function a() {
    return { now: { line: u, column: i }, lineShift: r };
  }
  function o(c) {
    r += c;
  }
  function l(c) {
    const h = c || "", f = h.split(/\r?\n|\r/g), E = f[f.length - 1];
    return u += f.length - 1, i = f.length === 1 ? i + E.length : 1 + E.length + r, h;
  }
}
Gi.peek = Af;
function cf() {
  return {
    enter: {
      gfmFootnoteDefinition: hf,
      gfmFootnoteDefinitionLabelString: df,
      gfmFootnoteCall: Ef,
      gfmFootnoteCallString: Tf
    },
    exit: {
      gfmFootnoteDefinition: pf,
      gfmFootnoteDefinitionLabelString: mf,
      gfmFootnoteCall: gf,
      gfmFootnoteCallString: bf
    }
  };
}
function ff() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: _f, footnoteReference: Gi }
  };
}
function hf(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function df() {
  this.buffer();
}
function mf(e) {
  const t = this.resume(), n = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  n.label = t, n.identifier = xe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function pf(e) {
  this.exit(e);
}
function Ef(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Tf() {
  this.buffer();
}
function bf(e) {
  const t = this.resume(), n = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  n.label = t, n.identifier = xe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function gf(e) {
  this.exit(e);
}
function Gi(e, t, n, r) {
  const u = ln(r);
  let i = u.move("[^");
  const a = n.enter("footnoteReference"), o = n.enter("reference");
  return i += u.move(
    Qi(n, Vi(e), {
      ...u.current(),
      before: i,
      after: "]"
    })
  ), o(), a(), i += u.move("]"), i;
}
function Af() {
  return "[";
}
function _f(e, t, n, r) {
  const u = ln(r);
  let i = u.move("[^");
  const a = n.enter("footnoteDefinition"), o = n.enter("label");
  return i += u.move(
    Qi(n, Vi(e), {
      ...u.current(),
      before: i,
      after: "]"
    })
  ), o(), i += u.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), u.shift(4), i += u.move(
    sf(rf(e, n, u.current()), Cf)
  ), a(), i;
}
function Cf(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function Xi(e, t, n) {
  const r = t.indexStack, u = e.children || [], i = [];
  let a = -1, o = n.before;
  r.push(-1);
  let l = t.createTracker(n);
  for (; ++a < u.length; ) {
    const c = u[a];
    let h;
    if (r[r.length - 1] = a, a + 1 < u.length) {
      let f = t.handle.handlers[u[a + 1].type];
      f && f.peek && (f = f.peek), h = f ? f(u[a + 1], e, t, {
        before: "",
        after: "",
        ...l.current()
      }).charAt(0) : "";
    } else
      h = n.after;
    i.length > 0 && (o === "\r" || o === `
`) && c.type === "html" && (i[i.length - 1] = i[i.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), o = " ", l = t.createTracker(n), l.move(i.join(""))), i.push(
      l.move(
        t.handle(c, e, t, {
          ...l.current(),
          before: o,
          after: h
        })
      )
    ), o = i[i.length - 1].slice(-1);
  }
  return r.pop(), i.join("");
}
const If = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ki.peek = xf;
const Nf = {
  canContainEols: ["delete"],
  enter: { strikethrough: yf },
  exit: { strikethrough: kf }
}, Sf = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: If
    }
  ],
  handlers: { delete: Ki }
};
function yf(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function kf(e) {
  this.exit(e);
}
function Ki(e, t, n, r) {
  const u = ln(r), i = n.enter("strikethrough");
  let a = u.move("~~");
  return a += Xi(e, n, {
    ...u.current(),
    before: a,
    after: "~"
  }), a += u.move("~~"), i(), a;
}
function xf() {
  return "~";
}
$i.peek = Of;
function $i(e, t, n) {
  let r = e.value || "", u = "`", i = -1;
  for (; new RegExp("(^|[^`])" + u + "([^`]|$)").test(r); )
    u += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const a = n.unsafe[i], o = ji(a);
    let l;
    if (a.atBreak)
      for (; l = o.exec(r); ) {
        let c = l.index;
        r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(l.index + 1);
      }
  }
  return u + r + u;
}
function Of() {
  return "`";
}
function Lf(e) {
  return e.length;
}
function Df(e, t) {
  const n = t || {}, r = (n.align || []).concat(), u = n.stringLength || Lf, i = [], a = [], o = [], l = [];
  let c = 0, h = -1;
  for (; ++h < e.length; ) {
    const A = [], k = [];
    let C = -1;
    for (e[h].length > c && (c = e[h].length); ++C < e[h].length; ) {
      const R = Rf(e[h][C]);
      if (n.alignDelimiters !== !1) {
        const O = u(R);
        k[C] = O, (l[C] === void 0 || O > l[C]) && (l[C] = O);
      }
      A.push(R);
    }
    a[h] = A, o[h] = k;
  }
  let f = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++f < c; )
      i[f] = Iu(r[f]);
  else {
    const A = Iu(r);
    for (; ++f < c; )
      i[f] = A;
  }
  f = -1;
  const E = [], m = [];
  for (; ++f < c; ) {
    const A = i[f];
    let k = "", C = "";
    A === 99 ? (k = ":", C = ":") : A === 108 ? k = ":" : A === 114 && (C = ":");
    let R = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      l[f] - k.length - C.length
    );
    const O = k + "-".repeat(R) + C;
    n.alignDelimiters !== !1 && (R = k.length + R + C.length, R > l[f] && (l[f] = R), m[f] = R), E[f] = O;
  }
  a.splice(1, 0, E), o.splice(1, 0, m), h = -1;
  const _ = [];
  for (; ++h < a.length; ) {
    const A = a[h], k = o[h];
    f = -1;
    const C = [];
    for (; ++f < c; ) {
      const R = A[f] || "";
      let O = "", U = "";
      if (n.alignDelimiters !== !1) {
        const z = l[f] - (k[f] || 0), N = i[f];
        N === 114 ? O = " ".repeat(z) : N === 99 ? z % 2 ? (O = " ".repeat(z / 2 + 0.5), U = " ".repeat(z / 2 - 0.5)) : (O = " ".repeat(z / 2), U = O) : U = " ".repeat(z);
      }
      n.delimiterStart !== !1 && !f && C.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && R === "") && (n.delimiterStart !== !1 || f) && C.push(" "), n.alignDelimiters !== !1 && C.push(O), C.push(R), n.alignDelimiters !== !1 && C.push(U), n.padding !== !1 && C.push(" "), (n.delimiterEnd !== !1 || f !== c - 1) && C.push("|");
    }
    _.push(
      n.delimiterEnd === !1 ? C.join("").replace(/ +$/, "") : C.join("")
    );
  }
  return _.join(`
`);
}
function Rf(e) {
  return e == null ? "" : String(e);
}
function Iu(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const Pf = {
  enter: {
    table: wf,
    tableData: Nu,
    tableHeader: Nu,
    tableRow: Ff
  },
  exit: {
    codeText: Bf,
    table: Mf,
    tableData: Hn,
    tableHeader: Hn,
    tableRow: Hn
  }
};
function wf(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map((n) => n === "none" ? null : n),
      children: []
    },
    e
  ), this.setData("inTable", !0);
}
function Mf(e) {
  this.exit(e), this.setData("inTable");
}
function Ff(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Hn(e) {
  this.exit(e);
}
function Nu(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Bf(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, Hf));
  const n = (
    /** @type {InlineCode} */
    this.stack[this.stack.length - 1]
  );
  n.value = t, this.exit(e);
}
function Hf(e, t) {
  return t === "|" ? t : e;
}
function Uf(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, u = t.stringLength, i = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: a,
      tableRow: o,
      tableCell: l,
      inlineCode: E
    }
  };
  function a(m, _, A, k) {
    return c(
      h(m, A, k),
      m.align
    );
  }
  function o(m, _, A, k) {
    const C = f(m, A, k), R = c([C]);
    return R.slice(0, R.indexOf(`
`));
  }
  function l(m, _, A, k) {
    const C = A.enter("tableCell"), R = A.enter("phrasing"), O = Xi(m, A, {
      ...k,
      before: i,
      after: i
    });
    return R(), C(), O;
  }
  function c(m, _) {
    return Df(m, {
      align: _,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: u
    });
  }
  function h(m, _, A) {
    const k = m.children;
    let C = -1;
    const R = [], O = _.enter("table");
    for (; ++C < k.length; )
      R[C] = f(
        k[C],
        _,
        A
      );
    return O(), R;
  }
  function f(m, _, A) {
    const k = m.children;
    let C = -1;
    const R = [], O = _.enter("tableRow");
    for (; ++C < k.length; )
      R[C] = l(
        k[C],
        m,
        _,
        A
      );
    return O(), R;
  }
  function E(m, _, A) {
    let k = $i(m, _, A);
    return A.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function vf(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function zf(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Yf(e, t, n, r) {
  const u = zf(n);
  let i = n.bulletCurrent || vf(n);
  t && t.type === "list" && t.ordered && (i = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + i);
  let a = i.length + 1;
  (u === "tab" || u === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const o = n.createTracker(r);
  o.move(i + " ".repeat(a - i.length)), o.shift(a);
  const l = n.enter("listItem"), c = n.indentLines(
    n.containerFlow(e, o.current()),
    h
  );
  return l(), c;
  function h(f, E, m) {
    return E ? (m ? "" : " ".repeat(a)) + f : (m ? i : i + " ".repeat(a - i.length)) + f;
  }
}
const qf = {
  exit: {
    taskListCheckValueChecked: Su,
    taskListCheckValueUnchecked: Su,
    paragraph: Vf
  }
}, Wf = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: jf }
};
function Su(e) {
  const t = (
    /** @type {ListItem} */
    this.stack[this.stack.length - 2]
  );
  t.checked = e.type === "taskListCheckValueChecked";
}
function Vf(e) {
  const t = (
    /** @type {Parents} */
    this.stack[this.stack.length - 2]
  );
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = (
      /** @type {Paragraph} */
      this.stack[this.stack.length - 1]
    ), r = n.children[0];
    if (r && r.type === "text") {
      const u = t.children;
      let i = -1, a;
      for (; ++i < u.length; ) {
        const o = u[i];
        if (o.type === "paragraph") {
          a = o;
          break;
        }
      }
      a === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function jf(e, t, n, r) {
  const u = e.children[0], i = typeof e.checked == "boolean" && u && u.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", o = ln(r);
  i && o.move(a);
  let l = Yf(e, t, n, {
    ...r,
    ...o.current()
  });
  return i && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), l;
  function c(h) {
    return h + a;
  }
}
function Qf() {
  return [
    V0,
    cf(),
    Nf,
    Pf,
    qf
  ];
}
function Gf(e) {
  return {
    extensions: [
      j0,
      ff(),
      Sf,
      Uf(e),
      Wf
    ]
  };
}
function Xf(e = {}) {
  const t = this.data();
  n("micromarkExtensions", v0(e)), n("fromMarkdownExtensions", Qf()), n("toMarkdownExtensions", Gf(e));
  function n(r, u) {
    /** @type {unknown[]} */
    // Other extensions
    /* c8 ignore next 2 */
    (t[r] ? t[r] : t[r] = []).push(u);
  }
}
const Ji = -1, cn = 0, St = 1, Jt = 2, dr = 3, mr = 4, pr = 5, Er = 6, Zi = 7, ea = 8, yu = typeof self == "object" ? self : globalThis, Kf = (e, t) => {
  const n = (u, i) => (e.set(i, u), u), r = (u) => {
    if (e.has(u))
      return e.get(u);
    const [i, a] = t[u];
    switch (i) {
      case cn:
      case Ji:
        return n(a, u);
      case St: {
        const o = n([], u);
        for (const l of a)
          o.push(r(l));
        return o;
      }
      case Jt: {
        const o = n({}, u);
        for (const [l, c] of a)
          o[r(l)] = r(c);
        return o;
      }
      case dr:
        return n(new Date(a), u);
      case mr: {
        const { source: o, flags: l } = a;
        return n(new RegExp(o, l), u);
      }
      case pr: {
        const o = n(/* @__PURE__ */ new Map(), u);
        for (const [l, c] of a)
          o.set(r(l), r(c));
        return o;
      }
      case Er: {
        const o = n(/* @__PURE__ */ new Set(), u);
        for (const l of a)
          o.add(r(l));
        return o;
      }
      case Zi: {
        const { name: o, message: l } = a;
        return n(new yu[o](l), u);
      }
      case ea:
        return n(BigInt(a), u);
      case "BigInt":
        return n(Object(BigInt(a)), u);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: o } = new Uint8Array(a);
        return n(new DataView(o), a);
      }
    }
    return n(new yu[i](a), u);
  };
  return r;
}, ku = (e) => Kf(/* @__PURE__ */ new Map(), e)(0), it = "", { toString: $f } = {}, { keys: Jf } = Object, gt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [cn, t];
  const n = $f.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [St, it];
    case "Object":
      return [Jt, it];
    case "Date":
      return [dr, it];
    case "RegExp":
      return [mr, it];
    case "Map":
      return [pr, it];
    case "Set":
      return [Er, it];
    case "DataView":
      return [St, n];
  }
  return n.includes("Array") ? [St, n] : n.includes("Error") ? [Zi, n] : [Jt, n];
}, Wt = ([e, t]) => e === cn && (t === "function" || t === "symbol"), Zf = (e, t, n, r) => {
  const u = (a, o) => {
    const l = r.push(a) - 1;
    return n.set(o, l), l;
  }, i = (a) => {
    if (n.has(a))
      return n.get(a);
    let [o, l] = gt(a);
    switch (o) {
      case cn: {
        let h = a;
        switch (l) {
          case "bigint":
            o = ea, h = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            h = null;
            break;
          case "undefined":
            return u([Ji], a);
        }
        return u([o, h], a);
      }
      case St: {
        if (l) {
          let E = a;
          return l === "DataView" ? E = new Uint8Array(a.buffer) : l === "ArrayBuffer" && (E = new Uint8Array(a)), u([l, [...E]], a);
        }
        const h = [], f = u([o, h], a);
        for (const E of a)
          h.push(i(E));
        return f;
      }
      case Jt: {
        if (l)
          switch (l) {
            case "BigInt":
              return u([l, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return u([l, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return i(a.toJSON());
        const h = [], f = u([o, h], a);
        for (const E of Jf(a))
          (e || !Wt(gt(a[E]))) && h.push([i(E), i(a[E])]);
        return f;
      }
      case dr:
        return u([o, a.toISOString()], a);
      case mr: {
        const { source: h, flags: f } = a;
        return u([o, { source: h, flags: f }], a);
      }
      case pr: {
        const h = [], f = u([o, h], a);
        for (const [E, m] of a)
          (e || !(Wt(gt(E)) || Wt(gt(m)))) && h.push([i(E), i(m)]);
        return f;
      }
      case Er: {
        const h = [], f = u([o, h], a);
        for (const E of a)
          (e || !Wt(gt(E))) && h.push(i(E));
        return f;
      }
    }
    const { message: c } = a;
    return u([o, { name: l, message: c }], a);
  };
  return i;
}, xu = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Zf(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, $n = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? ku(xu(e, t)) : structuredClone(e)
) : (e, t) => ku(xu(e, t));
const Ou = /[#.]/g;
function eh(e, t) {
  const n = e || "", r = {};
  let u = 0, i, a;
  for (; u < n.length; ) {
    Ou.lastIndex = u;
    const o = Ou.exec(n), l = n.slice(u, o ? o.index : n.length);
    l && (i ? i === "#" ? r.id = l : Array.isArray(r.className) ? r.className.push(l) : r.className = [l] : a = l, u += l.length), o && (i = o[0], u++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: a || t || "div",
    properties: r,
    children: []
  };
}
function ta(e, t, n) {
  const r = n ? uh(n) : void 0;
  function u(i, a, ...o) {
    let l;
    if (i == null) {
      l = { type: "root", children: [] };
      const c = (
        /** @type {Child} */
        a
      );
      o.unshift(c);
    } else {
      l = eh(i, t);
      const c = l.tagName.toLowerCase(), h = r ? r.get(c) : void 0;
      if (l.tagName = h || c, th(a))
        o.unshift(a);
      else
        for (const [f, E] of Object.entries(a))
          nh(e, l.properties, f, E);
    }
    for (const c of o)
      Jn(l.children, c);
    return l.type === "element" && l.tagName === "template" && (l.content = { type: "root", children: l.children }, l.children = []), l;
  }
  return u;
}
function th(e) {
  if (e === null || typeof e != "object" || Array.isArray(e))
    return !0;
  if (typeof e.type != "string") return !1;
  const t = (
    /** @type {Record<string, unknown>} */
    e
  ), n = Object.keys(e);
  for (const r of n) {
    const u = t[r];
    if (u && typeof u == "object") {
      if (!Array.isArray(u)) return !0;
      const i = (
        /** @type {ReadonlyArray<unknown>} */
        u
      );
      for (const a of i)
        if (typeof a != "number" && typeof a != "string")
          return !0;
    }
  }
  return !!("children" in e && Array.isArray(e.children));
}
function nh(e, t, n, r) {
  const u = rr(e, n);
  let i;
  if (r != null) {
    if (typeof r == "number") {
      if (Number.isNaN(r)) return;
      i = r;
    } else typeof r == "boolean" ? i = r : typeof r == "string" ? u.spaceSeparated ? i = Dr(r) : u.commaSeparated ? i = Rr(r) : u.commaOrSpaceSeparated ? i = Dr(Rr(r).join(" ")) : i = Lu(u, u.property, r) : Array.isArray(r) ? i = [...r] : i = u.property === "style" ? rh(r) : String(r);
    if (Array.isArray(i)) {
      const a = [];
      for (const o of i)
        a.push(
          /** @type {number | string} */
          Lu(u, u.property, o)
        );
      i = a;
    }
    u.property === "className" && Array.isArray(t.className) && (i = t.className.concat(
      /** @type {Array<number | string> | number | string} */
      i
    )), t[u.property] = i;
  }
}
function Jn(e, t) {
  if (t != null) if (typeof t == "number" || typeof t == "string")
    e.push({ type: "text", value: String(t) });
  else if (Array.isArray(t))
    for (const n of t)
      Jn(e, n);
  else if (typeof t == "object" && "type" in t)
    t.type === "root" ? Jn(e, t.children) : e.push(t);
  else
    throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function Lu(e, t, n) {
  if (typeof n == "string") {
    if (e.number && n && !Number.isNaN(Number(n)))
      return Number(n);
    if ((e.boolean || e.overloadedBoolean) && (n === "" || Pr(n) === Pr(t)))
      return !0;
  }
  return n;
}
function rh(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    t.push([n, r].join(": "));
  return t.join("; ");
}
function uh(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e)
    t.set(n.toLowerCase(), n);
  return t;
}
const ih = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], ah = ta(un, "div"), sh = ta(Rt, "g", ih);
function oh(e) {
  const t = String(e), n = [];
  return { toOffset: u, toPoint: r };
  function r(i) {
    if (typeof i == "number" && i > -1 && i <= t.length) {
      let a = 0;
      for (; ; ) {
        let o = n[a];
        if (o === void 0) {
          const l = Du(t, n[a - 1]);
          o = l === -1 ? t.length + 1 : l + 1, n[a] = o;
        }
        if (o > i)
          return {
            line: a + 1,
            column: i - (a > 0 ? n[a - 1] : 0) + 1,
            offset: i
          };
        a++;
      }
    }
  }
  function u(i) {
    if (i && typeof i.line == "number" && typeof i.column == "number" && !Number.isNaN(i.line) && !Number.isNaN(i.column)) {
      for (; n.length < i.line; ) {
        const o = n[n.length - 1], l = Du(t, o), c = l === -1 ? t.length + 1 : l + 1;
        if (o === c) break;
        n.push(c);
      }
      const a = (i.line > 1 ? n[i.line - 2] : 0) + i.column - 1;
      if (a < n[i.line - 1]) return a;
    }
  }
}
function Du(e, t) {
  const n = e.indexOf("\r", t), r = e.indexOf(`
`, t);
  return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
}
const Ke = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}, na = {}.hasOwnProperty, lh = Object.prototype;
function ch(e, t) {
  const n = t || {};
  return Tr(
    {
      file: n.file || void 0,
      location: !1,
      schema: n.space === "svg" ? Rt : un,
      verbose: n.verbose || !1
    },
    e
  );
}
function Tr(e, t) {
  let n;
  switch (t.nodeName) {
    case "#comment": {
      const r = (
        /** @type {DefaultTreeAdapterMap['commentNode']} */
        t
      );
      return n = { type: "comment", value: r.data }, Qt(e, r, n), n;
    }
    case "#document":
    case "#document-fragment": {
      const r = (
        /** @type {DefaultTreeAdapterMap['document'] | DefaultTreeAdapterMap['documentFragment']} */
        t
      ), u = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
      if (n = {
        type: "root",
        children: ra(e, t.childNodes),
        data: { quirksMode: u }
      }, e.file && e.location) {
        const i = String(e.file), a = oh(i), o = a.toPoint(0), l = a.toPoint(i.length);
        n.position = { start: o, end: l };
      }
      return n;
    }
    case "#documentType": {
      const r = (
        /** @type {DefaultTreeAdapterMap['documentType']} */
        t
      );
      return n = { type: "doctype" }, Qt(e, r, n), n;
    }
    case "#text": {
      const r = (
        /** @type {DefaultTreeAdapterMap['textNode']} */
        t
      );
      return n = { type: "text", value: r.value }, Qt(e, r, n), n;
    }
    // Element.
    default:
      return n = fh(
        e,
        /** @type {DefaultTreeAdapterMap['element']} */
        t
      ), n;
  }
}
function ra(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) {
    const u = (
      /** @type {RootContent} */
      Tr(e, t[n])
    );
    r.push(u);
  }
  return r;
}
function fh(e, t) {
  const n = e.schema;
  e.schema = t.namespaceURI === Ke.svg ? Rt : un;
  let r = -1;
  const u = {};
  for (; ++r < t.attrs.length; ) {
    const o = t.attrs[r], l = (o.prefix ? o.prefix + ":" : "") + o.name;
    na.call(lh, l) || (u[l] = o.value);
  }
  const a = (e.schema.space === "svg" ? sh : ah)(t.tagName, u, ra(e, t.childNodes));
  if (Qt(e, t, a), a.tagName === "template") {
    const o = (
      /** @type {DefaultTreeAdapterMap['template']} */
      t
    ), l = o.sourceCodeLocation, c = l && l.startTag && st(l.startTag), h = l && l.endTag && st(l.endTag), f = (
      /** @type {Root} */
      Tr(e, o.content)
    );
    c && h && e.file && (f.position = { start: c.end, end: h.start }), a.content = f;
  }
  return e.schema = n, a;
}
function Qt(e, t, n) {
  if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
    const r = hh(e, n, t.sourceCodeLocation);
    r && (e.location = !0, n.position = r);
  }
}
function hh(e, t, n) {
  const r = st(n);
  if (t.type === "element") {
    const u = t.children[t.children.length - 1];
    if (r && !n.endTag && u && u.position && u.position.end && (r.end = Object.assign({}, u.position.end)), e.verbose) {
      const i = {};
      let a;
      if (n.attrs)
        for (a in n.attrs)
          na.call(n.attrs, a) && (i[rr(e.schema, a).property] = st(
            n.attrs[a]
          ));
      n.startTag;
      const o = st(n.startTag), l = n.endTag ? st(n.endTag) : void 0, c = { opening: o };
      l && (c.closing = l), c.properties = i, t.data = { position: c };
    }
  }
  return r;
}
function st(e) {
  const t = Ru({
    line: e.startLine,
    column: e.startCol,
    offset: e.startOffset
  }), n = Ru({
    line: e.endLine,
    column: e.endCol,
    offset: e.endOffset
  });
  return t || n ? { start: t, end: n } : void 0;
}
function Ru(e) {
  return e.line && e.column ? e : void 0;
}
const dh = {}, mh = {}.hasOwnProperty, ua = Zu("type", { handlers: { root: Eh, element: _h, text: gh, comment: Ah, doctype: bh } });
function ph(e, t) {
  const r = (t || dh).space;
  return ua(e, r === "svg" ? Rt : un);
}
function Eh(e, t) {
  const n = {
    nodeName: "#document",
    // @ts-expect-error: `parse5` uses enums, which are actually strings.
    mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
    childNodes: []
  };
  return n.childNodes = br(e.children, n, t), dt(e, n), n;
}
function Th(e, t) {
  const n = { nodeName: "#document-fragment", childNodes: [] };
  return n.childNodes = br(e.children, n, t), dt(e, n), n;
}
function bh(e) {
  const t = {
    nodeName: "#documentType",
    name: "html",
    publicId: "",
    systemId: "",
    parentNode: null
  };
  return dt(e, t), t;
}
function gh(e) {
  const t = {
    nodeName: "#text",
    value: e.value,
    parentNode: null
  };
  return dt(e, t), t;
}
function Ah(e) {
  const t = {
    nodeName: "#comment",
    data: e.value,
    parentNode: null
  };
  return dt(e, t), t;
}
function _h(e, t) {
  const n = t;
  let r = n;
  e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = Rt);
  const u = [];
  let i;
  if (e.properties) {
    for (i in e.properties)
      if (i !== "children" && mh.call(e.properties, i)) {
        const l = Ch(
          r,
          i,
          e.properties[i]
        );
        l && u.push(l);
      }
  }
  const a = r.space, o = {
    nodeName: e.tagName,
    tagName: e.tagName,
    attrs: u,
    // @ts-expect-error: `parse5` types are wrong.
    namespaceURI: Ke[a],
    childNodes: [],
    parentNode: null
  };
  return o.childNodes = br(e.children, o, r), dt(e, o), e.tagName === "template" && e.content && (o.content = Th(e.content, r)), o;
}
function Ch(e, t, n) {
  const r = rr(e, t);
  if (n === !1 || n === null || n === void 0 || typeof n == "number" && Number.isNaN(n) || !n && r.boolean)
    return;
  Array.isArray(n) && (n = r.commaSeparated ? $u(n) : Ju(n));
  const u = {
    name: r.attribute,
    value: n === !0 ? "" : String(n)
  };
  if (r.space && r.space !== "html" && r.space !== "svg") {
    const i = u.name.indexOf(":");
    i < 0 ? u.prefix = "" : (u.name = u.name.slice(i + 1), u.prefix = r.attribute.slice(0, i)), u.namespace = Ke[r.space];
  }
  return u;
}
function br(e, t, n) {
  let r = -1;
  const u = [];
  if (e)
    for (; ++r < e.length; ) {
      const i = ua(e[r], n);
      i.parentNode = t, u.push(i);
    }
  return u;
}
function dt(e, t) {
  const n = e.position;
  n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
    startLine: n.start.line,
    startCol: n.start.column,
    startOffset: n.start.offset,
    endLine: n.end.line,
    endCol: n.end.column,
    endOffset: n.end.offset
  });
}
const Ih = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), ne = "�";
var d;
(function(e) {
  e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(d || (d = {}));
const pe = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function ia(e) {
  return e >= 55296 && e <= 57343;
}
function Nh(e) {
  return e >= 56320 && e <= 57343;
}
function Sh(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function aa(e) {
  return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function sa(e) {
  return e >= 64976 && e <= 65007 || Ih.has(e);
}
var S;
(function(e) {
  e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(S || (S = {}));
const yh = 65536;
class kh {
  constructor(t) {
    this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = yh, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(t, n) {
    const { line: r, col: u, offset: i } = this, a = u + n, o = i + n;
    return {
      code: t,
      startLine: r,
      endLine: r,
      startCol: a,
      endCol: a,
      startOffset: o,
      endOffset: o
    };
  }
  _err(t) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t, 0)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(t) {
    if (this.pos !== this.html.length - 1) {
      const n = this.html.charCodeAt(this.pos + 1);
      if (Nh(n))
        return this.pos++, this._addGap(), Sh(t, n);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, d.EOF;
    return this._err(S.surrogateInInputStream), t;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(t, n) {
    this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = !1, this.lastChunkWritten = n;
  }
  insertHtmlAtCurrentPos(t) {
    this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(t, n) {
    if (this.pos + t.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (n)
      return this.html.startsWith(t, this.pos);
    for (let r = 0; r < t.length; r++)
      if ((this.html.charCodeAt(this.pos + r) | 32) !== t.charCodeAt(r))
        return !1;
    return !0;
  }
  peek(t) {
    const n = this.pos + t;
    if (n >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, d.EOF;
    const r = this.html.charCodeAt(n);
    return r === d.CARRIAGE_RETURN ? d.LINE_FEED : r;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, d.EOF;
    let t = this.html.charCodeAt(this.pos);
    return t === d.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, d.LINE_FEED) : t === d.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ia(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === d.LINE_FEED || t === d.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
  }
  _checkForProblematicCharacters(t) {
    aa(t) ? this._err(S.controlCharacterInInputStream) : sa(t) && this._err(S.noncharacterInInputStream);
  }
  retreat(t) {
    for (this.pos -= t; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var G;
(function(e) {
  e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(G || (G = {}));
function oa(e, t) {
  for (let n = e.attrs.length - 1; n >= 0; n--)
    if (e.attrs[n].name === t)
      return e.attrs[n].value;
  return null;
}
const xh = /* @__PURE__ */ new Uint16Array(
  // prettier-ignore
  /* @__PURE__ */ 'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Oh = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
function Lh(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Oh.get(e)) !== null && t !== void 0 ? t : e;
}
var le;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(le || (le = {}));
const Dh = 32;
var Ve;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Ve || (Ve = {}));
function Zn(e) {
  return e >= le.ZERO && e <= le.NINE;
}
function Rh(e) {
  return e >= le.UPPER_A && e <= le.UPPER_F || e >= le.LOWER_A && e <= le.LOWER_F;
}
function Ph(e) {
  return e >= le.UPPER_A && e <= le.UPPER_Z || e >= le.LOWER_A && e <= le.LOWER_Z || Zn(e);
}
function wh(e) {
  return e === le.EQUALS || Ph(e);
}
var oe;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(oe || (oe = {}));
var Be;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Be || (Be = {}));
class Mh {
  constructor(t, n, r) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = r, this.state = oe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Be.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = oe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, n) {
    switch (this.state) {
      case oe.EntityStart:
        return t.charCodeAt(n) === le.NUM ? (this.state = oe.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = oe.NamedEntity, this.stateNamedEntity(t, n));
      case oe.NumericStart:
        return this.stateNumericStart(t, n);
      case oe.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case oe.NumericHex:
        return this.stateNumericHex(t, n);
      case oe.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | Dh) === le.LOWER_X ? (this.state = oe.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = oe.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, r, u) {
    if (n !== r) {
      const i = r - n;
      this.result = this.result * Math.pow(u, i) + Number.parseInt(t.substr(n, i), u), this.consumed += i;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, n) {
    const r = n;
    for (; n < t.length; ) {
      const u = t.charCodeAt(n);
      if (Zn(u) || Rh(u))
        n += 1;
      else
        return this.addToNumericResult(t, r, n, 16), this.emitNumericEntity(u, 3);
    }
    return this.addToNumericResult(t, r, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, n) {
    const r = n;
    for (; n < t.length; ) {
      const u = t.charCodeAt(n);
      if (Zn(u))
        n += 1;
      else
        return this.addToNumericResult(t, r, n, 10), this.emitNumericEntity(u, 2);
    }
    return this.addToNumericResult(t, r, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, n) {
    var r;
    if (this.consumed <= n)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === le.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Be.Strict)
      return 0;
    return this.emitCodePoint(Lh(this.result), this.consumed), this.errors && (t !== le.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, n) {
    const { decodeTree: r } = this;
    let u = r[this.treeIndex], i = (u & Ve.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const a = t.charCodeAt(n);
      if (this.treeIndex = Fh(r, u, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Be.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        wh(a)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (u = r[this.treeIndex], i = (u & Ve.VALUE_LENGTH) >> 14, i !== 0) {
        if (a === le.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== Be.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: n, decodeTree: r } = this, u = (r[n] & Ve.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, u, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, n, r) {
    const { decodeTree: u } = this;
    return this.emitCodePoint(n === 1 ? u[t] & ~Ve.VALUE_LENGTH : u[t + 1], r), n === 3 && this.emitCodePoint(u[t + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case oe.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Be.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case oe.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case oe.NumericHex:
        return this.emitNumericEntity(0, 3);
      case oe.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case oe.EntityStart:
        return 0;
    }
  }
}
function Fh(e, t, n, r) {
  const u = (t & Ve.BRANCH_LENGTH) >> 7, i = t & Ve.JUMP_TABLE;
  if (u === 0)
    return i !== 0 && r === i ? n : -1;
  if (i) {
    const l = r - i;
    return l < 0 || l >= u ? -1 : e[n + l] - 1;
  }
  let a = n, o = a + u - 1;
  for (; a <= o; ) {
    const l = a + o >>> 1, c = e[l];
    if (c < r)
      a = l + 1;
    else if (c > r)
      o = l - 1;
    else
      return e[l + u];
  }
  return -1;
}
var L;
(function(e) {
  e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(L || (L = {}));
var $e;
(function(e) {
  e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})($e || ($e = {}));
var Ae;
(function(e) {
  e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Ae || (Ae = {}));
var I;
(function(e) {
  e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(I || (I = {}));
var s;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(s || (s = {}));
const Bh = /* @__PURE__ */ new Map([
  [I.A, s.A],
  [I.ADDRESS, s.ADDRESS],
  [I.ANNOTATION_XML, s.ANNOTATION_XML],
  [I.APPLET, s.APPLET],
  [I.AREA, s.AREA],
  [I.ARTICLE, s.ARTICLE],
  [I.ASIDE, s.ASIDE],
  [I.B, s.B],
  [I.BASE, s.BASE],
  [I.BASEFONT, s.BASEFONT],
  [I.BGSOUND, s.BGSOUND],
  [I.BIG, s.BIG],
  [I.BLOCKQUOTE, s.BLOCKQUOTE],
  [I.BODY, s.BODY],
  [I.BR, s.BR],
  [I.BUTTON, s.BUTTON],
  [I.CAPTION, s.CAPTION],
  [I.CENTER, s.CENTER],
  [I.CODE, s.CODE],
  [I.COL, s.COL],
  [I.COLGROUP, s.COLGROUP],
  [I.DD, s.DD],
  [I.DESC, s.DESC],
  [I.DETAILS, s.DETAILS],
  [I.DIALOG, s.DIALOG],
  [I.DIR, s.DIR],
  [I.DIV, s.DIV],
  [I.DL, s.DL],
  [I.DT, s.DT],
  [I.EM, s.EM],
  [I.EMBED, s.EMBED],
  [I.FIELDSET, s.FIELDSET],
  [I.FIGCAPTION, s.FIGCAPTION],
  [I.FIGURE, s.FIGURE],
  [I.FONT, s.FONT],
  [I.FOOTER, s.FOOTER],
  [I.FOREIGN_OBJECT, s.FOREIGN_OBJECT],
  [I.FORM, s.FORM],
  [I.FRAME, s.FRAME],
  [I.FRAMESET, s.FRAMESET],
  [I.H1, s.H1],
  [I.H2, s.H2],
  [I.H3, s.H3],
  [I.H4, s.H4],
  [I.H5, s.H5],
  [I.H6, s.H6],
  [I.HEAD, s.HEAD],
  [I.HEADER, s.HEADER],
  [I.HGROUP, s.HGROUP],
  [I.HR, s.HR],
  [I.HTML, s.HTML],
  [I.I, s.I],
  [I.IMG, s.IMG],
  [I.IMAGE, s.IMAGE],
  [I.INPUT, s.INPUT],
  [I.IFRAME, s.IFRAME],
  [I.KEYGEN, s.KEYGEN],
  [I.LABEL, s.LABEL],
  [I.LI, s.LI],
  [I.LINK, s.LINK],
  [I.LISTING, s.LISTING],
  [I.MAIN, s.MAIN],
  [I.MALIGNMARK, s.MALIGNMARK],
  [I.MARQUEE, s.MARQUEE],
  [I.MATH, s.MATH],
  [I.MENU, s.MENU],
  [I.META, s.META],
  [I.MGLYPH, s.MGLYPH],
  [I.MI, s.MI],
  [I.MO, s.MO],
  [I.MN, s.MN],
  [I.MS, s.MS],
  [I.MTEXT, s.MTEXT],
  [I.NAV, s.NAV],
  [I.NOBR, s.NOBR],
  [I.NOFRAMES, s.NOFRAMES],
  [I.NOEMBED, s.NOEMBED],
  [I.NOSCRIPT, s.NOSCRIPT],
  [I.OBJECT, s.OBJECT],
  [I.OL, s.OL],
  [I.OPTGROUP, s.OPTGROUP],
  [I.OPTION, s.OPTION],
  [I.P, s.P],
  [I.PARAM, s.PARAM],
  [I.PLAINTEXT, s.PLAINTEXT],
  [I.PRE, s.PRE],
  [I.RB, s.RB],
  [I.RP, s.RP],
  [I.RT, s.RT],
  [I.RTC, s.RTC],
  [I.RUBY, s.RUBY],
  [I.S, s.S],
  [I.SCRIPT, s.SCRIPT],
  [I.SEARCH, s.SEARCH],
  [I.SECTION, s.SECTION],
  [I.SELECT, s.SELECT],
  [I.SOURCE, s.SOURCE],
  [I.SMALL, s.SMALL],
  [I.SPAN, s.SPAN],
  [I.STRIKE, s.STRIKE],
  [I.STRONG, s.STRONG],
  [I.STYLE, s.STYLE],
  [I.SUB, s.SUB],
  [I.SUMMARY, s.SUMMARY],
  [I.SUP, s.SUP],
  [I.TABLE, s.TABLE],
  [I.TBODY, s.TBODY],
  [I.TEMPLATE, s.TEMPLATE],
  [I.TEXTAREA, s.TEXTAREA],
  [I.TFOOT, s.TFOOT],
  [I.TD, s.TD],
  [I.TH, s.TH],
  [I.THEAD, s.THEAD],
  [I.TITLE, s.TITLE],
  [I.TR, s.TR],
  [I.TRACK, s.TRACK],
  [I.TT, s.TT],
  [I.U, s.U],
  [I.UL, s.UL],
  [I.SVG, s.SVG],
  [I.VAR, s.VAR],
  [I.WBR, s.WBR],
  [I.XMP, s.XMP]
]);
function mt(e) {
  var t;
  return (t = Bh.get(e)) !== null && t !== void 0 ? t : s.UNKNOWN;
}
const D = s, Hh = {
  [L.HTML]: /* @__PURE__ */ new Set([
    D.ADDRESS,
    D.APPLET,
    D.AREA,
    D.ARTICLE,
    D.ASIDE,
    D.BASE,
    D.BASEFONT,
    D.BGSOUND,
    D.BLOCKQUOTE,
    D.BODY,
    D.BR,
    D.BUTTON,
    D.CAPTION,
    D.CENTER,
    D.COL,
    D.COLGROUP,
    D.DD,
    D.DETAILS,
    D.DIR,
    D.DIV,
    D.DL,
    D.DT,
    D.EMBED,
    D.FIELDSET,
    D.FIGCAPTION,
    D.FIGURE,
    D.FOOTER,
    D.FORM,
    D.FRAME,
    D.FRAMESET,
    D.H1,
    D.H2,
    D.H3,
    D.H4,
    D.H5,
    D.H6,
    D.HEAD,
    D.HEADER,
    D.HGROUP,
    D.HR,
    D.HTML,
    D.IFRAME,
    D.IMG,
    D.INPUT,
    D.LI,
    D.LINK,
    D.LISTING,
    D.MAIN,
    D.MARQUEE,
    D.MENU,
    D.META,
    D.NAV,
    D.NOEMBED,
    D.NOFRAMES,
    D.NOSCRIPT,
    D.OBJECT,
    D.OL,
    D.P,
    D.PARAM,
    D.PLAINTEXT,
    D.PRE,
    D.SCRIPT,
    D.SECTION,
    D.SELECT,
    D.SOURCE,
    D.STYLE,
    D.SUMMARY,
    D.TABLE,
    D.TBODY,
    D.TD,
    D.TEMPLATE,
    D.TEXTAREA,
    D.TFOOT,
    D.TH,
    D.THEAD,
    D.TITLE,
    D.TR,
    D.TRACK,
    D.UL,
    D.WBR,
    D.XMP
  ]),
  [L.MATHML]: /* @__PURE__ */ new Set([D.MI, D.MO, D.MN, D.MS, D.MTEXT, D.ANNOTATION_XML]),
  [L.SVG]: /* @__PURE__ */ new Set([D.TITLE, D.FOREIGN_OBJECT, D.DESC]),
  [L.XLINK]: /* @__PURE__ */ new Set(),
  [L.XML]: /* @__PURE__ */ new Set(),
  [L.XMLNS]: /* @__PURE__ */ new Set()
}, er = /* @__PURE__ */ new Set([D.H1, D.H2, D.H3, D.H4, D.H5, D.H6]);
I.STYLE, I.SCRIPT, I.XMP, I.IFRAME, I.NOEMBED, I.NOFRAMES, I.PLAINTEXT;
var p;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(p || (p = {}));
const ie = {
  DATA: p.DATA,
  RCDATA: p.RCDATA,
  RAWTEXT: p.RAWTEXT,
  SCRIPT_DATA: p.SCRIPT_DATA,
  PLAINTEXT: p.PLAINTEXT,
  CDATA_SECTION: p.CDATA_SECTION
};
function Uh(e) {
  return e >= d.DIGIT_0 && e <= d.DIGIT_9;
}
function Ct(e) {
  return e >= d.LATIN_CAPITAL_A && e <= d.LATIN_CAPITAL_Z;
}
function vh(e) {
  return e >= d.LATIN_SMALL_A && e <= d.LATIN_SMALL_Z;
}
function Ye(e) {
  return vh(e) || Ct(e);
}
function Pu(e) {
  return Ye(e) || Uh(e);
}
function Vt(e) {
  return e + 32;
}
function la(e) {
  return e === d.SPACE || e === d.LINE_FEED || e === d.TABULATION || e === d.FORM_FEED;
}
function wu(e) {
  return la(e) || e === d.SOLIDUS || e === d.GREATER_THAN_SIGN;
}
function zh(e) {
  return e === d.NULL ? S.nullCharacterReference : e > 1114111 ? S.characterReferenceOutsideUnicodeRange : ia(e) ? S.surrogateCharacterReference : sa(e) ? S.noncharacterCharacterReference : aa(e) || e === d.CARRIAGE_RETURN ? S.controlCharacterReference : null;
}
class Yh {
  constructor(t, n) {
    this.options = t, this.handler = n, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = p.DATA, this.returnState = p.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new kh(n), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Mh(xh, (r, u) => {
      this.preprocessor.pos = this.entityStartPos + u - 1, this._flushCodePointConsumedAsCharacterReference(r);
    }, n.onParseError ? {
      missingSemicolonAfterCharacterReference: () => {
        this._err(S.missingSemicolonAfterCharacterReference, 1);
      },
      absenceOfDigitsInNumericCharacterReference: (r) => {
        this._err(S.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + r);
      },
      validateNumericCharacterReference: (r) => {
        const u = zh(r);
        u && this._err(u, 1);
      }
    } : void 0);
  }
  //Errors
  _err(t, n = 0) {
    var r, u;
    (u = (r = this.handler).onParseError) === null || u === void 0 || u.call(r, this.preprocessor.getError(t, n));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(t) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - t,
      startOffset: this.preprocessor.offset - t,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const t = this._consume();
        this._ensureHibernation() || this._callState(t);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(t) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || t == null || t());
  }
  write(t, n, r) {
    this.active = !0, this.preprocessor.write(t, n), this._runParsingLoop(), this.paused || r == null || r();
  }
  insertHtmlAtCurrentPos(t) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _advanceBy(t) {
    this.consumedAfterSnapshot += t;
    for (let n = 0; n < t; n++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(t, n) {
    return this.preprocessor.startsWith(t, n) ? (this._advanceBy(t.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: G.START_TAG,
      tagName: "",
      tagID: s.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: G.END_TAG,
      tagName: "",
      tagID: s.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(t) {
    this.currentToken = {
      type: G.COMMENT,
      data: "",
      location: this.getCurrentLocation(t)
    };
  }
  _createDoctypeToken(t) {
    this.currentToken = {
      type: G.DOCTYPE,
      name: t,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(t, n) {
    this.currentCharacterToken = {
      type: t,
      chars: n,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(t) {
    this.currentAttr = {
      name: t,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var t, n;
    const r = this.currentToken;
    if (oa(r, this.currentAttr.name) === null) {
      if (r.attrs.push(this.currentAttr), r.location && this.currentLocation) {
        const u = (t = (n = r.location).attrs) !== null && t !== void 0 ? t : n.attrs = /* @__PURE__ */ Object.create(null);
        u[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(S.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(t) {
    this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const t = this.currentToken;
    this.prepareToken(t), t.tagID = mt(t.tagName), t.type === G.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(S.endTagWithAttributes), t.selfClosing && this._err(S.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(t) {
    this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(t) {
    this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(t) {
    if (this.currentCharacterToken) {
      switch (t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type) {
        case G.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case G.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case G.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const t = this.getCurrentLocation(0);
    t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({ type: G.EOF, location: t }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: The specification uses only one type of character token (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(t, n) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type === t) {
        this.currentCharacterToken.chars += n;
        return;
      } else
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
    this._createCharacterToken(t, n);
  }
  _emitCodePoint(t) {
    const n = la(t) ? G.WHITESPACE_CHARACTER : t === d.NULL ? G.NULL_CHARACTER : G.CHARACTER;
    this._appendCharToCurrentCharacterToken(n, String.fromCodePoint(t));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(t) {
    this._appendCharToCurrentCharacterToken(G.CHARACTER, t);
  }
  // Character reference helpers
  _startCharacterReference() {
    this.returnState = this.state, this.state = p.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Be.Attribute : Be.Legacy);
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === p.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === p.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === p.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(t) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(t) {
    switch (this.state) {
      case p.DATA: {
        this._stateData(t);
        break;
      }
      case p.RCDATA: {
        this._stateRcdata(t);
        break;
      }
      case p.RAWTEXT: {
        this._stateRawtext(t);
        break;
      }
      case p.SCRIPT_DATA: {
        this._stateScriptData(t);
        break;
      }
      case p.PLAINTEXT: {
        this._statePlaintext(t);
        break;
      }
      case p.TAG_OPEN: {
        this._stateTagOpen(t);
        break;
      }
      case p.END_TAG_OPEN: {
        this._stateEndTagOpen(t);
        break;
      }
      case p.TAG_NAME: {
        this._stateTagName(t);
        break;
      }
      case p.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(t);
        break;
      }
      case p.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(t);
        break;
      }
      case p.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(t);
        break;
      }
      case p.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(t);
        break;
      }
      case p.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(t);
        break;
      }
      case p.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(t);
        break;
      }
      case p.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(t);
        break;
      }
      case p.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(t);
        break;
      }
      case p.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(t);
        break;
      }
      case p.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(t);
        break;
      }
      case p.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(t);
        break;
      }
      case p.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(t);
        break;
      }
      case p.ATTRIBUTE_NAME: {
        this._stateAttributeName(t);
        break;
      }
      case p.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(t);
        break;
      }
      case p.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(t);
        break;
      }
      case p.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(t);
        break;
      }
      case p.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(t);
        break;
      }
      case p.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(t);
        break;
      }
      case p.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(t);
        break;
      }
      case p.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(t);
        break;
      }
      case p.BOGUS_COMMENT: {
        this._stateBogusComment(t);
        break;
      }
      case p.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(t);
        break;
      }
      case p.COMMENT_START: {
        this._stateCommentStart(t);
        break;
      }
      case p.COMMENT_START_DASH: {
        this._stateCommentStartDash(t);
        break;
      }
      case p.COMMENT: {
        this._stateComment(t);
        break;
      }
      case p.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(t);
        break;
      }
      case p.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(t);
        break;
      }
      case p.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(t);
        break;
      }
      case p.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(t);
        break;
      }
      case p.COMMENT_END_DASH: {
        this._stateCommentEndDash(t);
        break;
      }
      case p.COMMENT_END: {
        this._stateCommentEnd(t);
        break;
      }
      case p.COMMENT_END_BANG: {
        this._stateCommentEndBang(t);
        break;
      }
      case p.DOCTYPE: {
        this._stateDoctype(t);
        break;
      }
      case p.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(t);
        break;
      }
      case p.DOCTYPE_NAME: {
        this._stateDoctypeName(t);
        break;
      }
      case p.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(t);
        break;
      }
      case p.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(t);
        break;
      }
      case p.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(t);
        break;
      }
      case p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(t);
        break;
      }
      case p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(t);
        break;
      }
      case p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(t);
        break;
      }
      case p.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
        break;
      }
      case p.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(t);
        break;
      }
      case p.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(t);
        break;
      }
      case p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(t);
        break;
      }
      case p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(t);
        break;
      }
      case p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(t);
        break;
      }
      case p.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(t);
        break;
      }
      case p.CDATA_SECTION: {
        this._stateCdataSection(t);
        break;
      }
      case p.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(t);
        break;
      }
      case p.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(t);
        break;
      }
      case p.CHARACTER_REFERENCE: {
        this._stateCharacterReference();
        break;
      }
      case p.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(t);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(t) {
    switch (t) {
      case d.LESS_THAN_SIGN: {
        this.state = p.TAG_OPEN;
        break;
      }
      case d.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitCodePoint(t);
        break;
      }
      case d.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(t) {
    switch (t) {
      case d.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(t) {
    switch (t) {
      case d.LESS_THAN_SIGN: {
        this.state = p.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(t) {
    switch (t) {
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(t) {
    switch (t) {
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(t) {
    if (Ye(t))
      this._createStartTagToken(), this.state = p.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case d.EXCLAMATION_MARK: {
          this.state = p.MARKUP_DECLARATION_OPEN;
          break;
        }
        case d.SOLIDUS: {
          this.state = p.END_TAG_OPEN;
          break;
        }
        case d.QUESTION_MARK: {
          this._err(S.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = p.BOGUS_COMMENT, this._stateBogusComment(t);
          break;
        }
        case d.EOF: {
          this._err(S.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(S.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = p.DATA, this._stateData(t);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(t) {
    if (Ye(t))
      this._createEndTagToken(), this.state = p.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case d.GREATER_THAN_SIGN: {
          this._err(S.missingEndTagName), this.state = p.DATA;
          break;
        }
        case d.EOF: {
          this._err(S.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(S.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = p.BOGUS_COMMENT, this._stateBogusComment(t);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case d.SOLIDUS: {
        this.state = p.SELF_CLOSING_START_TAG;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.tagName += ne;
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        n.tagName += String.fromCodePoint(Ct(t) ? Vt(t) : t);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(t) {
    t === d.SOLIDUS ? this.state = p.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = p.RCDATA, this._stateRcdata(t));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(t) {
    Ye(t) ? (this.state = p.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = p.RCDATA, this._stateRcdata(t));
  }
  handleSpecialEndTag(t) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const n = this.currentToken;
    switch (n.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = p.BEFORE_ATTRIBUTE_NAME, !1;
      case d.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = p.SELF_CLOSING_START_TAG, !1;
      case d.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = p.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = p.RCDATA, this._stateRcdata(t));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(t) {
    t === d.SOLIDUS ? this.state = p.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = p.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(t) {
    Ye(t) ? (this.state = p.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = p.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = p.RAWTEXT, this._stateRawtext(t));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(t) {
    switch (t) {
      case d.SOLIDUS: {
        this.state = p.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case d.EXCLAMATION_MARK: {
        this.state = p.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = p.SCRIPT_DATA, this._stateScriptData(t);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(t) {
    Ye(t) ? (this.state = p.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = p.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = p.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(t) {
    t === d.HYPHEN_MINUS ? (this.state = p.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = p.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(t) {
    t === d.HYPHEN_MINUS ? (this.state = p.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = p.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.state = p.SCRIPT_DATA_ESCAPED, this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = p.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.state = p.SCRIPT_DATA_ESCAPED, this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = p.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(t) {
    t === d.SOLIDUS ? this.state = p.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Ye(t) ? (this._emitChars("<"), this.state = p.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = p.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(t) {
    Ye(t) ? (this.state = p.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = p.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = p.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(t) {
    if (this.preprocessor.startsWith(pe.SCRIPT, !1) && wu(this.preprocessor.peek(pe.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let n = 0; n < pe.SCRIPT.length; n++)
        this._emitCodePoint(this._consume());
      this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else this._ensureHibernation() || (this.state = p.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case d.LESS_THAN_SIGN: {
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(ne);
        break;
      }
      case d.EOF: {
        this._err(S.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(t) {
    t === d.SOLIDUS ? (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(t) {
    if (this.preprocessor.startsWith(pe.SCRIPT, !1) && wu(this.preprocessor.peek(pe.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let n = 0; n < pe.SCRIPT.length; n++)
        this._emitCodePoint(this._consume());
      this.state = p.SCRIPT_DATA_ESCAPED;
    } else this._ensureHibernation() || (this.state = p.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.SOLIDUS:
      case d.GREATER_THAN_SIGN:
      case d.EOF: {
        this.state = p.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case d.EQUALS_SIGN: {
        this._err(S.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = p.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = p.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
      case d.SOLIDUS:
      case d.GREATER_THAN_SIGN:
      case d.EOF: {
        this._leaveAttrName(), this.state = p.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case d.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = p.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case d.QUOTATION_MARK:
      case d.APOSTROPHE:
      case d.LESS_THAN_SIGN: {
        this._err(S.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.currentAttr.name += ne;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(Ct(t) ? Vt(t) : t);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.SOLIDUS: {
        this.state = p.SELF_CLOSING_START_TAG;
        break;
      }
      case d.EQUALS_SIGN: {
        this.state = p.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = p.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.QUOTATION_MARK: {
        this.state = p.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        this.state = p.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.missingAttributeValue), this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = p.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(t) {
    switch (t) {
      case d.QUOTATION_MARK: {
        this.state = p.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case d.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.currentAttr.value += ne;
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(t) {
    switch (t) {
      case d.APOSTROPHE: {
        this.state = p.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case d.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.currentAttr.value += ne;
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this._leaveAttrValue(), this.state = p.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case d.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), this.currentAttr.value += ne;
        break;
      }
      case d.QUOTATION_MARK:
      case d.APOSTROPHE:
      case d.LESS_THAN_SIGN:
      case d.EQUALS_SIGN:
      case d.GRAVE_ACCENT: {
        this._err(S.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this._leaveAttrValue(), this.state = p.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case d.SOLIDUS: {
        this._leaveAttrValue(), this.state = p.SELF_CLOSING_START_TAG;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingWhitespaceBetweenAttributes), this.state = p.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(t) {
    switch (t) {
      case d.GREATER_THAN_SIGN: {
        const n = this.currentToken;
        n.selfClosing = !0, this.state = p.DATA, this.emitCurrentTagToken();
        break;
      }
      case d.EOF: {
        this._err(S.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.unexpectedSolidusInTag), this.state = p.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(t) {
    const n = this.currentToken;
    switch (t) {
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentComment(n);
        break;
      }
      case d.EOF: {
        this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.data += ne;
        break;
      }
      default:
        n.data += String.fromCodePoint(t);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(t) {
    this._consumeSequenceIfMatch(pe.DASH_DASH, !0) ? (this._createCommentToken(pe.DASH_DASH.length + 1), this.state = p.COMMENT_START) : this._consumeSequenceIfMatch(pe.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(pe.DOCTYPE.length + 1), this.state = p.DOCTYPE) : this._consumeSequenceIfMatch(pe.CDATA_START, !0) ? this.inForeignNode ? this.state = p.CDATA_SECTION : (this._err(S.cdataInHtmlContent), this._createCommentToken(pe.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = p.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(S.incorrectlyOpenedComment), this._createCommentToken(2), this.state = p.BOGUS_COMMENT, this._stateBogusComment(t));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(t) {
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.COMMENT_START_DASH;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptClosingOfEmptyComment), this.state = p.DATA;
        const n = this.currentToken;
        this.emitCurrentComment(n);
        break;
      }
      default:
        this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(t) {
    const n = this.currentToken;
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.COMMENT_END;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptClosingOfEmptyComment), this.state = p.DATA, this.emitCurrentComment(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "-", this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(t) {
    const n = this.currentToken;
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.COMMENT_END_DASH;
        break;
      }
      case d.LESS_THAN_SIGN: {
        n.data += "<", this.state = p.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.data += ne;
        break;
      }
      case d.EOF: {
        this._err(S.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += String.fromCodePoint(t);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(t) {
    const n = this.currentToken;
    switch (t) {
      case d.EXCLAMATION_MARK: {
        n.data += "!", this.state = p.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case d.LESS_THAN_SIGN: {
        n.data += "<";
        break;
      }
      default:
        this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(t) {
    t === d.HYPHEN_MINUS ? this.state = p.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = p.COMMENT, this._stateComment(t));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(t) {
    t === d.HYPHEN_MINUS ? this.state = p.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = p.COMMENT_END_DASH, this._stateCommentEndDash(t));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(t) {
    t !== d.GREATER_THAN_SIGN && t !== d.EOF && this._err(S.nestedComment), this.state = p.COMMENT_END, this._stateCommentEnd(t);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(t) {
    const n = this.currentToken;
    switch (t) {
      case d.HYPHEN_MINUS: {
        this.state = p.COMMENT_END;
        break;
      }
      case d.EOF: {
        this._err(S.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "-", this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(t) {
    const n = this.currentToken;
    switch (t) {
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentComment(n);
        break;
      }
      case d.EXCLAMATION_MARK: {
        this.state = p.COMMENT_END_BANG;
        break;
      }
      case d.HYPHEN_MINUS: {
        n.data += "-";
        break;
      }
      case d.EOF: {
        this._err(S.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "--", this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(t) {
    const n = this.currentToken;
    switch (t) {
      case d.HYPHEN_MINUS: {
        n.data += "--!", this.state = p.COMMENT_END_DASH;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.incorrectlyClosedComment), this.state = p.DATA, this.emitCurrentComment(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "--!", this.state = p.COMMENT, this._stateComment(t);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(t) {
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.BEFORE_DOCTYPE_NAME;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), this._createDoctypeToken(null);
        const n = this.currentToken;
        n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingWhitespaceBeforeDoctypeName), this.state = p.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(t) {
    if (Ct(t))
      this._createDoctypeToken(String.fromCharCode(Vt(t))), this.state = p.DOCTYPE_NAME;
    else
      switch (t) {
        case d.SPACE:
        case d.LINE_FEED:
        case d.TABULATION:
        case d.FORM_FEED:
          break;
        case d.NULL: {
          this._err(S.unexpectedNullCharacter), this._createDoctypeToken(ne), this.state = p.DOCTYPE_NAME;
          break;
        }
        case d.GREATER_THAN_SIGN: {
          this._err(S.missingDoctypeName), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = p.DATA;
          break;
        }
        case d.EOF: {
          this._err(S.eofInDoctype), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)), this.state = p.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.AFTER_DOCTYPE_NAME;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.name += ne;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.name += String.fromCodePoint(Ct(t) ? Vt(t) : t);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(pe.PUBLIC, !1) ? this.state = p.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(pe.SYSTEM, !1) ? this.state = p.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(S.invalidCharacterSequenceAfterDoctypeName), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case d.QUOTATION_MARK: {
        this._err(S.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        this._err(S.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.missingDoctypePublicIdentifier), n.forceQuirks = !0, this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.QUOTATION_MARK: {
        n.publicId = "", this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        n.publicId = "", this.state = p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.missingDoctypePublicIdentifier), n.forceQuirks = !0, this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(t) {
    const n = this.currentToken;
    switch (t) {
      case d.QUOTATION_MARK: {
        this.state = p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.publicId += ne;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptDoctypePublicIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.publicId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(t) {
    const n = this.currentToken;
    switch (t) {
      case d.APOSTROPHE: {
        this.state = p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.publicId += ne;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptDoctypePublicIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.publicId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.QUOTATION_MARK: {
        this._err(S.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        this._err(S.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.QUOTATION_MARK: {
        n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED: {
        this.state = p.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case d.QUOTATION_MARK: {
        this._err(S.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        this._err(S.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.missingDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.QUOTATION_MARK: {
        n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case d.APOSTROPHE: {
        n.systemId = "", this.state = p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.missingDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(t) {
    const n = this.currentToken;
    switch (t) {
      case d.QUOTATION_MARK: {
        this.state = p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.systemId += ne;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptDoctypeSystemIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.systemId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(t) {
    const n = this.currentToken;
    switch (t) {
      case d.APOSTROPHE: {
        this.state = p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter), n.systemId += ne;
        break;
      }
      case d.GREATER_THAN_SIGN: {
        this._err(S.abruptDoctypeSystemIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.systemId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(t) {
    const n = this.currentToken;
    switch (t) {
      case d.SPACE:
      case d.LINE_FEED:
      case d.TABULATION:
      case d.FORM_FEED:
        break;
      case d.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.EOF: {
        this._err(S.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(S.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = p.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(t) {
    const n = this.currentToken;
    switch (t) {
      case d.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = p.DATA;
        break;
      }
      case d.NULL: {
        this._err(S.unexpectedNullCharacter);
        break;
      }
      case d.EOF: {
        this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(t) {
    switch (t) {
      case d.RIGHT_SQUARE_BRACKET: {
        this.state = p.CDATA_SECTION_BRACKET;
        break;
      }
      case d.EOF: {
        this._err(S.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(t) {
    t === d.RIGHT_SQUARE_BRACKET ? this.state = p.CDATA_SECTION_END : (this._emitChars("]"), this.state = p.CDATA_SECTION, this._stateCdataSection(t));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(t) {
    switch (t) {
      case d.GREATER_THAN_SIGN: {
        this.state = p.DATA;
        break;
      }
      case d.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = p.CDATA_SECTION, this._stateCdataSection(t);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference() {
    let t = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
    if (t < 0)
      if (this.preprocessor.lastChunkWritten)
        t = this.entityDecoder.end();
      else {
        this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
        return;
      }
    t === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(d.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Pu(this.preprocessor.peek(1)) ? p.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(t) {
    Pu(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === d.SEMICOLON && this._err(S.unknownNamedCharacterReference), this.state = this.returnState, this._callState(t));
  }
}
const ca = /* @__PURE__ */ new Set([s.DD, s.DT, s.LI, s.OPTGROUP, s.OPTION, s.P, s.RB, s.RP, s.RT, s.RTC]), Mu = /* @__PURE__ */ new Set([
  ...ca,
  s.CAPTION,
  s.COLGROUP,
  s.TBODY,
  s.TD,
  s.TFOOT,
  s.TH,
  s.THEAD,
  s.TR
]), Zt = /* @__PURE__ */ new Set([
  s.APPLET,
  s.CAPTION,
  s.HTML,
  s.MARQUEE,
  s.OBJECT,
  s.TABLE,
  s.TD,
  s.TEMPLATE,
  s.TH
]), qh = /* @__PURE__ */ new Set([...Zt, s.OL, s.UL]), Wh = /* @__PURE__ */ new Set([...Zt, s.BUTTON]), Fu = /* @__PURE__ */ new Set([s.ANNOTATION_XML, s.MI, s.MN, s.MO, s.MS, s.MTEXT]), Bu = /* @__PURE__ */ new Set([s.DESC, s.FOREIGN_OBJECT, s.TITLE]), Vh = /* @__PURE__ */ new Set([s.TR, s.TEMPLATE, s.HTML]), jh = /* @__PURE__ */ new Set([s.TBODY, s.TFOOT, s.THEAD, s.TEMPLATE, s.HTML]), Qh = /* @__PURE__ */ new Set([s.TABLE, s.TEMPLATE, s.HTML]), Gh = /* @__PURE__ */ new Set([s.TD, s.TH]);
class Xh {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(t, n, r) {
    this.treeAdapter = n, this.handler = r, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = s.UNKNOWN, this.current = t;
  }
  //Index of element
  _indexOf(t) {
    return this.items.lastIndexOf(t, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === s.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === L.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(t, n) {
    this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = n, this.currentTagId = n, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, n, !0);
  }
  pop() {
    const t = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !0);
  }
  replace(t, n) {
    const r = this._indexOf(t);
    this.items[r] = n, r === this.stackTop && (this.current = n);
  }
  insertAfter(t, n, r) {
    const u = this._indexOf(t) + 1;
    this.items.splice(u, 0, n), this.tagIDs.splice(u, 0, r), this.stackTop++, u === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, u === this.stackTop);
  }
  popUntilTagNamePopped(t) {
    let n = this.stackTop + 1;
    do
      n = this.tagIDs.lastIndexOf(t, n - 1);
    while (n > 0 && this.treeAdapter.getNamespaceURI(this.items[n]) !== L.HTML);
    this.shortenToLength(Math.max(n, 0));
  }
  shortenToLength(t) {
    for (; this.stackTop >= t; ) {
      const n = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(n, this.stackTop < t);
    }
  }
  popUntilElementPopped(t) {
    const n = this._indexOf(t);
    this.shortenToLength(Math.max(n, 0));
  }
  popUntilPopped(t, n) {
    const r = this._indexOfTagNames(t, n);
    this.shortenToLength(Math.max(r, 0));
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(er, L.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(Gh, L.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(t, n) {
    for (let r = this.stackTop; r >= 0; r--)
      if (t.has(this.tagIDs[r]) && this.treeAdapter.getNamespaceURI(this.items[r]) === n)
        return r;
    return -1;
  }
  clearBackTo(t, n) {
    const r = this._indexOfTagNames(t, n);
    this.shortenToLength(r + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(Qh, L.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(jh, L.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(Vh, L.HTML);
  }
  remove(t) {
    const n = this._indexOf(t);
    n >= 0 && (n === this.stackTop ? this.pop() : (this.items.splice(n, 1), this.tagIDs.splice(n, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === s.BODY ? this.items[1] : null;
  }
  contains(t) {
    return this._indexOf(t) > -1;
  }
  getCommonAncestor(t) {
    const n = this._indexOf(t) - 1;
    return n >= 0 ? this.items[n] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === s.HTML;
  }
  //Element in scope
  hasInDynamicScope(t, n) {
    for (let r = this.stackTop; r >= 0; r--) {
      const u = this.tagIDs[r];
      switch (this.treeAdapter.getNamespaceURI(this.items[r])) {
        case L.HTML: {
          if (u === t)
            return !0;
          if (n.has(u))
            return !1;
          break;
        }
        case L.SVG: {
          if (Bu.has(u))
            return !1;
          break;
        }
        case L.MATHML: {
          if (Fu.has(u))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInScope(t) {
    return this.hasInDynamicScope(t, Zt);
  }
  hasInListItemScope(t) {
    return this.hasInDynamicScope(t, qh);
  }
  hasInButtonScope(t) {
    return this.hasInDynamicScope(t, Wh);
  }
  hasNumberedHeaderInScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const n = this.tagIDs[t];
      switch (this.treeAdapter.getNamespaceURI(this.items[t])) {
        case L.HTML: {
          if (er.has(n))
            return !0;
          if (Zt.has(n))
            return !1;
          break;
        }
        case L.SVG: {
          if (Bu.has(n))
            return !1;
          break;
        }
        case L.MATHML: {
          if (Fu.has(n))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInTableScope(t) {
    for (let n = this.stackTop; n >= 0; n--)
      if (this.treeAdapter.getNamespaceURI(this.items[n]) === L.HTML)
        switch (this.tagIDs[n]) {
          case t:
            return !0;
          case s.TABLE:
          case s.HTML:
            return !1;
        }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let t = this.stackTop; t >= 0; t--)
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === L.HTML)
        switch (this.tagIDs[t]) {
          case s.TBODY:
          case s.THEAD:
          case s.TFOOT:
            return !0;
          case s.TABLE:
          case s.HTML:
            return !1;
        }
    return !0;
  }
  hasInSelectScope(t) {
    for (let n = this.stackTop; n >= 0; n--)
      if (this.treeAdapter.getNamespaceURI(this.items[n]) === L.HTML)
        switch (this.tagIDs[n]) {
          case t:
            return !0;
          case s.OPTION:
          case s.OPTGROUP:
            break;
          default:
            return !1;
        }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; this.currentTagId !== void 0 && ca.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; this.currentTagId !== void 0 && Mu.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(t) {
    for (; this.currentTagId !== void 0 && this.currentTagId !== t && Mu.has(this.currentTagId); )
      this.pop();
  }
}
const Un = 3;
var De;
(function(e) {
  e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(De || (De = {}));
const Hu = { type: De.Marker };
class Kh {
  constructor(t) {
    this.treeAdapter = t, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(t, n) {
    const r = [], u = n.length, i = this.treeAdapter.getTagName(t), a = this.treeAdapter.getNamespaceURI(t);
    for (let o = 0; o < this.entries.length; o++) {
      const l = this.entries[o];
      if (l.type === De.Marker)
        break;
      const { element: c } = l;
      if (this.treeAdapter.getTagName(c) === i && this.treeAdapter.getNamespaceURI(c) === a) {
        const h = this.treeAdapter.getAttrList(c);
        h.length === u && r.push({ idx: o, attrs: h });
      }
    }
    return r;
  }
  _ensureNoahArkCondition(t) {
    if (this.entries.length < Un)
      return;
    const n = this.treeAdapter.getAttrList(t), r = this._getNoahArkConditionCandidates(t, n);
    if (r.length < Un)
      return;
    const u = new Map(n.map((a) => [a.name, a.value]));
    let i = 0;
    for (let a = 0; a < r.length; a++) {
      const o = r[a];
      o.attrs.every((l) => u.get(l.name) === l.value) && (i += 1, i >= Un && this.entries.splice(o.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(Hu);
  }
  pushElement(t, n) {
    this._ensureNoahArkCondition(t), this.entries.unshift({
      type: De.Element,
      element: t,
      token: n
    });
  }
  insertElementAfterBookmark(t, n) {
    const r = this.entries.indexOf(this.bookmark);
    this.entries.splice(r, 0, {
      type: De.Element,
      element: t,
      token: n
    });
  }
  removeEntry(t) {
    const n = this.entries.indexOf(t);
    n !== -1 && this.entries.splice(n, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const t = this.entries.indexOf(Hu);
    t === -1 ? this.entries.length = 0 : this.entries.splice(0, t + 1);
  }
  //Search
  getElementEntryInScopeWithTagName(t) {
    const n = this.entries.find((r) => r.type === De.Marker || this.treeAdapter.getTagName(r.element) === t);
    return n && n.type === De.Element ? n : null;
  }
  getElementEntry(t) {
    return this.entries.find((n) => n.type === De.Element && n.element === t);
  }
}
const qe = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: Ae.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(e, t, n) {
    return {
      nodeName: e,
      tagName: e,
      attrs: n,
      namespaceURI: t,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(e) {
    return {
      nodeName: "#comment",
      data: e,
      parentNode: null
    };
  },
  createTextNode(e) {
    return {
      nodeName: "#text",
      value: e,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(e, t) {
    e.childNodes.push(t), t.parentNode = e;
  },
  insertBefore(e, t, n) {
    const r = e.childNodes.indexOf(n);
    e.childNodes.splice(r, 0, t), t.parentNode = e;
  },
  setTemplateContent(e, t) {
    e.content = t;
  },
  getTemplateContent(e) {
    return e.content;
  },
  setDocumentType(e, t, n, r) {
    const u = e.childNodes.find((i) => i.nodeName === "#documentType");
    if (u)
      u.name = t, u.publicId = n, u.systemId = r;
    else {
      const i = {
        nodeName: "#documentType",
        name: t,
        publicId: n,
        systemId: r,
        parentNode: null
      };
      qe.appendChild(e, i);
    }
  },
  setDocumentMode(e, t) {
    e.mode = t;
  },
  getDocumentMode(e) {
    return e.mode;
  },
  detachNode(e) {
    if (e.parentNode) {
      const t = e.parentNode.childNodes.indexOf(e);
      e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
    }
  },
  insertText(e, t) {
    if (e.childNodes.length > 0) {
      const n = e.childNodes[e.childNodes.length - 1];
      if (qe.isTextNode(n)) {
        n.value += t;
        return;
      }
    }
    qe.appendChild(e, qe.createTextNode(t));
  },
  insertTextBefore(e, t, n) {
    const r = e.childNodes[e.childNodes.indexOf(n) - 1];
    r && qe.isTextNode(r) ? r.value += t : qe.insertBefore(e, qe.createTextNode(t), n);
  },
  adoptAttributes(e, t) {
    const n = new Set(e.attrs.map((r) => r.name));
    for (let r = 0; r < t.length; r++)
      n.has(t[r].name) || e.attrs.push(t[r]);
  },
  //Tree traversing
  getFirstChild(e) {
    return e.childNodes[0];
  },
  getChildNodes(e) {
    return e.childNodes;
  },
  getParentNode(e) {
    return e.parentNode;
  },
  getAttrList(e) {
    return e.attrs;
  },
  //Node data
  getTagName(e) {
    return e.tagName;
  },
  getNamespaceURI(e) {
    return e.namespaceURI;
  },
  getTextNodeContent(e) {
    return e.value;
  },
  getCommentNodeContent(e) {
    return e.data;
  },
  getDocumentTypeNodeName(e) {
    return e.name;
  },
  getDocumentTypeNodePublicId(e) {
    return e.publicId;
  },
  getDocumentTypeNodeSystemId(e) {
    return e.systemId;
  },
  //Node types
  isTextNode(e) {
    return e.nodeName === "#text";
  },
  isCommentNode(e) {
    return e.nodeName === "#comment";
  },
  isDocumentTypeNode(e) {
    return e.nodeName === "#documentType";
  },
  isElementNode(e) {
    return Object.prototype.hasOwnProperty.call(e, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = t;
  },
  getNodeSourceCodeLocation(e) {
    return e.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
  }
}, fa = "html", $h = "about:legacy-compat", Jh = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", ha = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], Zh = [
  ...ha,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], ed = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), da = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], td = [
  ...da,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function Uu(e, t) {
  return t.some((n) => e.startsWith(n));
}
function nd(e) {
  return e.name === fa && e.publicId === null && (e.systemId === null || e.systemId === $h);
}
function rd(e) {
  if (e.name !== fa)
    return Ae.QUIRKS;
  const { systemId: t } = e;
  if (t && t.toLowerCase() === Jh)
    return Ae.QUIRKS;
  let { publicId: n } = e;
  if (n !== null) {
    if (n = n.toLowerCase(), ed.has(n))
      return Ae.QUIRKS;
    let r = t === null ? Zh : ha;
    if (Uu(n, r))
      return Ae.QUIRKS;
    if (r = t === null ? da : td, Uu(n, r))
      return Ae.LIMITED_QUIRKS;
  }
  return Ae.NO_QUIRKS;
}
const vu = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, ud = "definitionurl", id = "definitionURL", ad = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((e) => [e.toLowerCase(), e])), sd = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: L.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: L.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: L.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: L.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: L.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: L.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: L.XLINK }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: L.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: L.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: L.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: L.XMLNS }]
]), od = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((e) => [e.toLowerCase(), e])), ld = /* @__PURE__ */ new Set([
  s.B,
  s.BIG,
  s.BLOCKQUOTE,
  s.BODY,
  s.BR,
  s.CENTER,
  s.CODE,
  s.DD,
  s.DIV,
  s.DL,
  s.DT,
  s.EM,
  s.EMBED,
  s.H1,
  s.H2,
  s.H3,
  s.H4,
  s.H5,
  s.H6,
  s.HEAD,
  s.HR,
  s.I,
  s.IMG,
  s.LI,
  s.LISTING,
  s.MENU,
  s.META,
  s.NOBR,
  s.OL,
  s.P,
  s.PRE,
  s.RUBY,
  s.S,
  s.SMALL,
  s.SPAN,
  s.STRONG,
  s.STRIKE,
  s.SUB,
  s.SUP,
  s.TABLE,
  s.TT,
  s.U,
  s.UL,
  s.VAR
]);
function cd(e) {
  const t = e.tagID;
  return t === s.FONT && e.attrs.some(({ name: r }) => r === $e.COLOR || r === $e.SIZE || r === $e.FACE) || ld.has(t);
}
function ma(e) {
  for (let t = 0; t < e.attrs.length; t++)
    if (e.attrs[t].name === ud) {
      e.attrs[t].name = id;
      break;
    }
}
function pa(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const n = ad.get(e.attrs[t].name);
    n != null && (e.attrs[t].name = n);
  }
}
function gr(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const n = sd.get(e.attrs[t].name);
    n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
  }
}
function fd(e) {
  const t = od.get(e.tagName);
  t != null && (e.tagName = t, e.tagID = mt(e.tagName));
}
function hd(e, t) {
  return t === L.MATHML && (e === s.MI || e === s.MO || e === s.MN || e === s.MS || e === s.MTEXT);
}
function dd(e, t, n) {
  if (t === L.MATHML && e === s.ANNOTATION_XML) {
    for (let r = 0; r < n.length; r++)
      if (n[r].name === $e.ENCODING) {
        const u = n[r].value.toLowerCase();
        return u === vu.TEXT_HTML || u === vu.APPLICATION_XML;
      }
  }
  return t === L.SVG && (e === s.FOREIGN_OBJECT || e === s.DESC || e === s.TITLE);
}
function md(e, t, n, r) {
  return (!r || r === L.HTML) && dd(e, t, n) || (!r || r === L.MATHML) && hd(e, t);
}
const pd = "hidden", Ed = 8, Td = 3;
var T;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(T || (T = {}));
const bd = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, Ea = /* @__PURE__ */ new Set([s.TABLE, s.TBODY, s.TFOOT, s.THEAD, s.TR]), zu = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: qe,
  onParseError: null
};
class Yu {
  constructor(t, n, r = null, u = null) {
    this.fragmentContext = r, this.scriptHandler = u, this.currentToken = null, this.stopped = !1, this.insertionMode = T.INITIAL, this.originalInsertionMode = T.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
      ...zu,
      ...t
    }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = n ?? this.treeAdapter.createDocument(), this.tokenizer = new Yh(this.options, this), this.activeFormattingElements = new Kh(this.treeAdapter), this.fragmentContextID = r ? mt(this.treeAdapter.getTagName(r)) : s.UNKNOWN, this._setContextModes(r ?? this.document, this.fragmentContextID), this.openElements = new Xh(this.document, this.treeAdapter, this);
  }
  // API
  static parse(t, n) {
    const r = new this(n);
    return r.tokenizer.write(t, !0), r.document;
  }
  static getFragmentParser(t, n) {
    const r = {
      ...zu,
      ...n
    };
    t ?? (t = r.treeAdapter.createElement(I.TEMPLATE, L.HTML, []));
    const u = r.treeAdapter.createElement("documentmock", L.HTML, []), i = new this(r, u, t);
    return i.fragmentContextID === s.TEMPLATE && i.tmplInsertionModeStack.unshift(T.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
  }
  getFragment() {
    const t = this.treeAdapter.getFirstChild(this.document), n = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(t, n), n;
  }
  //Errors
  /** @internal */
  _err(t, n, r) {
    var u;
    if (!this.onParseError)
      return;
    const i = (u = t.location) !== null && u !== void 0 ? u : bd, a = {
      code: n,
      startLine: i.startLine,
      startCol: i.startCol,
      startOffset: i.startOffset,
      endLine: r ? i.startLine : i.endLine,
      endCol: r ? i.startCol : i.endCol,
      endOffset: r ? i.startOffset : i.endOffset
    };
    this.onParseError(a);
  }
  //Stack events
  /** @internal */
  onItemPush(t, n, r) {
    var u, i;
    (i = (u = this.treeAdapter).onItemPush) === null || i === void 0 || i.call(u, t), r && this.openElements.stackTop > 0 && this._setContextModes(t, n);
  }
  /** @internal */
  onItemPop(t, n) {
    var r, u;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (u = (r = this.treeAdapter).onItemPop) === null || u === void 0 || u.call(r, t, this.openElements.current), n) {
      let i, a;
      this.openElements.stackTop === 0 && this.fragmentContext ? (i = this.fragmentContext, a = this.fragmentContextID) : { current: i, currentTagId: a } = this.openElements, this._setContextModes(i, a);
    }
  }
  _setContextModes(t, n) {
    const r = t === this.document || t && this.treeAdapter.getNamespaceURI(t) === L.HTML;
    this.currentNotInHTML = !r, this.tokenizer.inForeignNode = !r && t !== void 0 && n !== void 0 && !this._isIntegrationPoint(n, t);
  }
  /** @protected */
  _switchToTextParsing(t, n) {
    this._insertElement(t, L.HTML), this.tokenizer.state = n, this.originalInsertionMode = this.insertionMode, this.insertionMode = T.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = T.TEXT, this.originalInsertionMode = T.IN_BODY, this.tokenizer.state = ie.PLAINTEXT;
  }
  //Fragment parsing
  /** @protected */
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  /** @protected */
  _findFormInFragmentContext() {
    let t = this.fragmentContext;
    for (; t; ) {
      if (this.treeAdapter.getTagName(t) === I.FORM) {
        this.formElement = t;
        break;
      }
      t = this.treeAdapter.getParentNode(t);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== L.HTML))
      switch (this.fragmentContextID) {
        case s.TITLE:
        case s.TEXTAREA: {
          this.tokenizer.state = ie.RCDATA;
          break;
        }
        case s.STYLE:
        case s.XMP:
        case s.IFRAME:
        case s.NOEMBED:
        case s.NOFRAMES:
        case s.NOSCRIPT: {
          this.tokenizer.state = ie.RAWTEXT;
          break;
        }
        case s.SCRIPT: {
          this.tokenizer.state = ie.SCRIPT_DATA;
          break;
        }
        case s.PLAINTEXT: {
          this.tokenizer.state = ie.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  /** @protected */
  _setDocumentType(t) {
    const n = t.name || "", r = t.publicId || "", u = t.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, n, r, u), t.location) {
      const a = this.treeAdapter.getChildNodes(this.document).find((o) => this.treeAdapter.isDocumentTypeNode(o));
      a && this.treeAdapter.setNodeSourceCodeLocation(a, t.location);
    }
  }
  /** @protected */
  _attachElementToTree(t, n) {
    if (this.options.sourceCodeLocationInfo) {
      const r = n && {
        ...n,
        startTag: n
      };
      this.treeAdapter.setNodeSourceCodeLocation(t, r);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(t);
    else {
      const r = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(r ?? this.document, t);
    }
  }
  /**
   * For self-closing tags. Add an element to the tree, but skip adding it
   * to the stack.
   */
  /** @protected */
  _appendElement(t, n) {
    const r = this.treeAdapter.createElement(t.tagName, n, t.attrs);
    this._attachElementToTree(r, t.location);
  }
  /** @protected */
  _insertElement(t, n) {
    const r = this.treeAdapter.createElement(t.tagName, n, t.attrs);
    this._attachElementToTree(r, t.location), this.openElements.push(r, t.tagID);
  }
  /** @protected */
  _insertFakeElement(t, n) {
    const r = this.treeAdapter.createElement(t, L.HTML, []);
    this._attachElementToTree(r, null), this.openElements.push(r, n);
  }
  /** @protected */
  _insertTemplate(t) {
    const n = this.treeAdapter.createElement(t.tagName, L.HTML, t.attrs), r = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(n, r), this._attachElementToTree(n, t.location), this.openElements.push(n, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, null);
  }
  /** @protected */
  _insertFakeRootElement() {
    const t = this.treeAdapter.createElement(I.HTML, L.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, s.HTML);
  }
  /** @protected */
  _appendCommentNode(t, n) {
    const r = this.treeAdapter.createCommentNode(t.data);
    this.treeAdapter.appendChild(n, r), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, t.location);
  }
  /** @protected */
  _insertCharacters(t) {
    let n, r;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: n, beforeElement: r } = this._findFosterParentingLocation(), r ? this.treeAdapter.insertTextBefore(n, t.chars, r) : this.treeAdapter.insertText(n, t.chars)) : (n = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(n, t.chars)), !t.location)
      return;
    const u = this.treeAdapter.getChildNodes(n), i = r ? u.lastIndexOf(r) : u.length, a = u[i - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(a)) {
      const { endLine: l, endCol: c, endOffset: h } = t.location;
      this.treeAdapter.updateNodeSourceCodeLocation(a, { endLine: l, endCol: c, endOffset: h });
    } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, t.location);
  }
  /** @protected */
  _adoptNodes(t, n) {
    for (let r = this.treeAdapter.getFirstChild(t); r; r = this.treeAdapter.getFirstChild(t))
      this.treeAdapter.detachNode(r), this.treeAdapter.appendChild(n, r);
  }
  /** @protected */
  _setEndLocation(t, n) {
    if (this.treeAdapter.getNodeSourceCodeLocation(t) && n.location) {
      const r = n.location, u = this.treeAdapter.getTagName(t), i = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        n.type === G.END_TAG && u === n.tagName ? {
          endTag: { ...r },
          endLine: r.endLine,
          endCol: r.endCol,
          endOffset: r.endOffset
        } : {
          endLine: r.startLine,
          endCol: r.startCol,
          endOffset: r.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(t, i);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(t) {
    if (!this.currentNotInHTML)
      return !1;
    let n, r;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (n = this.fragmentContext, r = this.fragmentContextID) : { current: n, currentTagId: r } = this.openElements, t.tagID === s.SVG && this.treeAdapter.getTagName(n) === I.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(n) === L.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (t.tagID === s.MGLYPH || t.tagID === s.MALIGNMARK) && r !== void 0 && !this._isIntegrationPoint(r, n, L.HTML)
    );
  }
  /** @protected */
  _processToken(t) {
    switch (t.type) {
      case G.CHARACTER: {
        this.onCharacter(t);
        break;
      }
      case G.NULL_CHARACTER: {
        this.onNullCharacter(t);
        break;
      }
      case G.COMMENT: {
        this.onComment(t);
        break;
      }
      case G.DOCTYPE: {
        this.onDoctype(t);
        break;
      }
      case G.START_TAG: {
        this._processStartTag(t);
        break;
      }
      case G.END_TAG: {
        this.onEndTag(t);
        break;
      }
      case G.EOF: {
        this.onEof(t);
        break;
      }
      case G.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(t);
        break;
      }
    }
  }
  //Integration points
  /** @protected */
  _isIntegrationPoint(t, n, r) {
    const u = this.treeAdapter.getNamespaceURI(n), i = this.treeAdapter.getAttrList(n);
    return md(t, u, i, r);
  }
  //Active formatting elements reconstruction
  /** @protected */
  _reconstructActiveFormattingElements() {
    const t = this.activeFormattingElements.entries.length;
    if (t) {
      const n = this.activeFormattingElements.entries.findIndex((u) => u.type === De.Marker || this.openElements.contains(u.element)), r = n === -1 ? t - 1 : n - 1;
      for (let u = r; u >= 0; u--) {
        const i = this.activeFormattingElements.entries[u];
        this._insertElement(i.token, this.treeAdapter.getNamespaceURI(i.element)), i.element = this.openElements.current;
      }
    }
  }
  //Close elements
  /** @protected */
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = T.IN_ROW;
  }
  /** @protected */
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(s.P), this.openElements.popUntilTagNamePopped(s.P);
  }
  //Insertion modes
  /** @protected */
  _resetInsertionMode() {
    for (let t = this.openElements.stackTop; t >= 0; t--)
      switch (t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]) {
        case s.TR: {
          this.insertionMode = T.IN_ROW;
          return;
        }
        case s.TBODY:
        case s.THEAD:
        case s.TFOOT: {
          this.insertionMode = T.IN_TABLE_BODY;
          return;
        }
        case s.CAPTION: {
          this.insertionMode = T.IN_CAPTION;
          return;
        }
        case s.COLGROUP: {
          this.insertionMode = T.IN_COLUMN_GROUP;
          return;
        }
        case s.TABLE: {
          this.insertionMode = T.IN_TABLE;
          return;
        }
        case s.BODY: {
          this.insertionMode = T.IN_BODY;
          return;
        }
        case s.FRAMESET: {
          this.insertionMode = T.IN_FRAMESET;
          return;
        }
        case s.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case s.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case s.HTML: {
          this.insertionMode = this.headElement ? T.AFTER_HEAD : T.BEFORE_HEAD;
          return;
        }
        case s.TD:
        case s.TH: {
          if (t > 0) {
            this.insertionMode = T.IN_CELL;
            return;
          }
          break;
        }
        case s.HEAD: {
          if (t > 0) {
            this.insertionMode = T.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = T.IN_BODY;
  }
  /** @protected */
  _resetInsertionModeForSelect(t) {
    if (t > 0)
      for (let n = t - 1; n > 0; n--) {
        const r = this.openElements.tagIDs[n];
        if (r === s.TEMPLATE)
          break;
        if (r === s.TABLE) {
          this.insertionMode = T.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = T.IN_SELECT;
  }
  //Foster parenting
  /** @protected */
  _isElementCausesFosterParenting(t) {
    return Ea.has(t);
  }
  /** @protected */
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  /** @protected */
  _findFosterParentingLocation() {
    for (let t = this.openElements.stackTop; t >= 0; t--) {
      const n = this.openElements.items[t];
      switch (this.openElements.tagIDs[t]) {
        case s.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(n) === L.HTML)
            return { parent: this.treeAdapter.getTemplateContent(n), beforeElement: null };
          break;
        }
        case s.TABLE: {
          const r = this.treeAdapter.getParentNode(n);
          return r ? { parent: r, beforeElement: n } : { parent: this.openElements.items[t - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  /** @protected */
  _fosterParentElement(t) {
    const n = this._findFosterParentingLocation();
    n.beforeElement ? this.treeAdapter.insertBefore(n.parent, t, n.beforeElement) : this.treeAdapter.appendChild(n.parent, t);
  }
  //Special elements
  /** @protected */
  _isSpecialElement(t, n) {
    const r = this.treeAdapter.getNamespaceURI(t);
    return Hh[r].has(n);
  }
  /** @internal */
  onCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      G1(this, t);
      return;
    }
    switch (this.insertionMode) {
      case T.INITIAL: {
        At(this, t);
        break;
      }
      case T.BEFORE_HTML: {
        yt(this, t);
        break;
      }
      case T.BEFORE_HEAD: {
        kt(this, t);
        break;
      }
      case T.IN_HEAD: {
        xt(this, t);
        break;
      }
      case T.IN_HEAD_NO_SCRIPT: {
        Ot(this, t);
        break;
      }
      case T.AFTER_HEAD: {
        Lt(this, t);
        break;
      }
      case T.IN_BODY:
      case T.IN_CAPTION:
      case T.IN_CELL:
      case T.IN_TEMPLATE: {
        ba(this, t);
        break;
      }
      case T.TEXT:
      case T.IN_SELECT:
      case T.IN_SELECT_IN_TABLE: {
        this._insertCharacters(t);
        break;
      }
      case T.IN_TABLE:
      case T.IN_TABLE_BODY:
      case T.IN_ROW: {
        vn(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        Na(this, t);
        break;
      }
      case T.IN_COLUMN_GROUP: {
        en(this, t);
        break;
      }
      case T.AFTER_BODY: {
        tn(this, t);
        break;
      }
      case T.AFTER_AFTER_BODY: {
        Gt(this, t);
        break;
      }
    }
  }
  /** @internal */
  onNullCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      Q1(this, t);
      return;
    }
    switch (this.insertionMode) {
      case T.INITIAL: {
        At(this, t);
        break;
      }
      case T.BEFORE_HTML: {
        yt(this, t);
        break;
      }
      case T.BEFORE_HEAD: {
        kt(this, t);
        break;
      }
      case T.IN_HEAD: {
        xt(this, t);
        break;
      }
      case T.IN_HEAD_NO_SCRIPT: {
        Ot(this, t);
        break;
      }
      case T.AFTER_HEAD: {
        Lt(this, t);
        break;
      }
      case T.TEXT: {
        this._insertCharacters(t);
        break;
      }
      case T.IN_TABLE:
      case T.IN_TABLE_BODY:
      case T.IN_ROW: {
        vn(this, t);
        break;
      }
      case T.IN_COLUMN_GROUP: {
        en(this, t);
        break;
      }
      case T.AFTER_BODY: {
        tn(this, t);
        break;
      }
      case T.AFTER_AFTER_BODY: {
        Gt(this, t);
        break;
      }
    }
  }
  /** @internal */
  onComment(t) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      tr(this, t);
      return;
    }
    switch (this.insertionMode) {
      case T.INITIAL:
      case T.BEFORE_HTML:
      case T.BEFORE_HEAD:
      case T.IN_HEAD:
      case T.IN_HEAD_NO_SCRIPT:
      case T.AFTER_HEAD:
      case T.IN_BODY:
      case T.IN_TABLE:
      case T.IN_CAPTION:
      case T.IN_COLUMN_GROUP:
      case T.IN_TABLE_BODY:
      case T.IN_ROW:
      case T.IN_CELL:
      case T.IN_SELECT:
      case T.IN_SELECT_IN_TABLE:
      case T.IN_TEMPLATE:
      case T.IN_FRAMESET:
      case T.AFTER_FRAMESET: {
        tr(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        _t(this, t);
        break;
      }
      case T.AFTER_BODY: {
        Sd(this, t);
        break;
      }
      case T.AFTER_AFTER_BODY:
      case T.AFTER_AFTER_FRAMESET: {
        yd(this, t);
        break;
      }
    }
  }
  /** @internal */
  onDoctype(t) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case T.INITIAL: {
        kd(this, t);
        break;
      }
      case T.BEFORE_HEAD:
      case T.IN_HEAD:
      case T.IN_HEAD_NO_SCRIPT:
      case T.AFTER_HEAD: {
        this._err(t, S.misplacedDoctype);
        break;
      }
      case T.IN_TABLE_TEXT: {
        _t(this, t);
        break;
      }
    }
  }
  /** @internal */
  onStartTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, S.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   * @protected
   */
  _processStartTag(t) {
    this.shouldProcessStartTagTokenInForeignContent(t) ? X1(this, t) : this._startTagOutsideForeignContent(t);
  }
  /** @protected */
  _startTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case T.INITIAL: {
        At(this, t);
        break;
      }
      case T.BEFORE_HTML: {
        xd(this, t);
        break;
      }
      case T.BEFORE_HEAD: {
        Ld(this, t);
        break;
      }
      case T.IN_HEAD: {
        Oe(this, t);
        break;
      }
      case T.IN_HEAD_NO_SCRIPT: {
        Pd(this, t);
        break;
      }
      case T.AFTER_HEAD: {
        Md(this, t);
        break;
      }
      case T.IN_BODY: {
        de(this, t);
        break;
      }
      case T.IN_TABLE: {
        ct(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        _t(this, t);
        break;
      }
      case T.IN_CAPTION: {
        D1(this, t);
        break;
      }
      case T.IN_COLUMN_GROUP: {
        Cr(this, t);
        break;
      }
      case T.IN_TABLE_BODY: {
        dn(this, t);
        break;
      }
      case T.IN_ROW: {
        mn(this, t);
        break;
      }
      case T.IN_CELL: {
        w1(this, t);
        break;
      }
      case T.IN_SELECT: {
        ka(this, t);
        break;
      }
      case T.IN_SELECT_IN_TABLE: {
        F1(this, t);
        break;
      }
      case T.IN_TEMPLATE: {
        H1(this, t);
        break;
      }
      case T.AFTER_BODY: {
        v1(this, t);
        break;
      }
      case T.IN_FRAMESET: {
        z1(this, t);
        break;
      }
      case T.AFTER_FRAMESET: {
        q1(this, t);
        break;
      }
      case T.AFTER_AFTER_BODY: {
        V1(this, t);
        break;
      }
      case T.AFTER_AFTER_FRAMESET: {
        j1(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEndTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this.currentNotInHTML ? K1(this, t) : this._endTagOutsideForeignContent(t);
  }
  /** @protected */
  _endTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case T.INITIAL: {
        At(this, t);
        break;
      }
      case T.BEFORE_HTML: {
        Od(this, t);
        break;
      }
      case T.BEFORE_HEAD: {
        Dd(this, t);
        break;
      }
      case T.IN_HEAD: {
        Rd(this, t);
        break;
      }
      case T.IN_HEAD_NO_SCRIPT: {
        wd(this, t);
        break;
      }
      case T.AFTER_HEAD: {
        Fd(this, t);
        break;
      }
      case T.IN_BODY: {
        hn(this, t);
        break;
      }
      case T.TEXT: {
        _1(this, t);
        break;
      }
      case T.IN_TABLE: {
        Dt(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        _t(this, t);
        break;
      }
      case T.IN_CAPTION: {
        R1(this, t);
        break;
      }
      case T.IN_COLUMN_GROUP: {
        P1(this, t);
        break;
      }
      case T.IN_TABLE_BODY: {
        nr(this, t);
        break;
      }
      case T.IN_ROW: {
        ya(this, t);
        break;
      }
      case T.IN_CELL: {
        M1(this, t);
        break;
      }
      case T.IN_SELECT: {
        xa(this, t);
        break;
      }
      case T.IN_SELECT_IN_TABLE: {
        B1(this, t);
        break;
      }
      case T.IN_TEMPLATE: {
        U1(this, t);
        break;
      }
      case T.AFTER_BODY: {
        La(this, t);
        break;
      }
      case T.IN_FRAMESET: {
        Y1(this, t);
        break;
      }
      case T.AFTER_FRAMESET: {
        W1(this, t);
        break;
      }
      case T.AFTER_AFTER_BODY: {
        Gt(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEof(t) {
    switch (this.insertionMode) {
      case T.INITIAL: {
        At(this, t);
        break;
      }
      case T.BEFORE_HTML: {
        yt(this, t);
        break;
      }
      case T.BEFORE_HEAD: {
        kt(this, t);
        break;
      }
      case T.IN_HEAD: {
        xt(this, t);
        break;
      }
      case T.IN_HEAD_NO_SCRIPT: {
        Ot(this, t);
        break;
      }
      case T.AFTER_HEAD: {
        Lt(this, t);
        break;
      }
      case T.IN_BODY:
      case T.IN_TABLE:
      case T.IN_CAPTION:
      case T.IN_COLUMN_GROUP:
      case T.IN_TABLE_BODY:
      case T.IN_ROW:
      case T.IN_CELL:
      case T.IN_SELECT:
      case T.IN_SELECT_IN_TABLE: {
        Ca(this, t);
        break;
      }
      case T.TEXT: {
        C1(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        _t(this, t);
        break;
      }
      case T.IN_TEMPLATE: {
        Oa(this, t);
        break;
      }
      case T.AFTER_BODY:
      case T.IN_FRAMESET:
      case T.AFTER_FRAMESET:
      case T.AFTER_AFTER_BODY:
      case T.AFTER_AFTER_FRAMESET: {
        _r(this, t);
        break;
      }
    }
  }
  /** @internal */
  onWhitespaceCharacter(t) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.chars.charCodeAt(0) === d.LINE_FEED)) {
      if (t.chars.length === 1)
        return;
      t.chars = t.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(t);
      return;
    }
    switch (this.insertionMode) {
      case T.IN_HEAD:
      case T.IN_HEAD_NO_SCRIPT:
      case T.AFTER_HEAD:
      case T.TEXT:
      case T.IN_COLUMN_GROUP:
      case T.IN_SELECT:
      case T.IN_SELECT_IN_TABLE:
      case T.IN_FRAMESET:
      case T.AFTER_FRAMESET: {
        this._insertCharacters(t);
        break;
      }
      case T.IN_BODY:
      case T.IN_CAPTION:
      case T.IN_CELL:
      case T.IN_TEMPLATE:
      case T.AFTER_BODY:
      case T.AFTER_AFTER_BODY:
      case T.AFTER_AFTER_FRAMESET: {
        Ta(this, t);
        break;
      }
      case T.IN_TABLE:
      case T.IN_TABLE_BODY:
      case T.IN_ROW: {
        vn(this, t);
        break;
      }
      case T.IN_TABLE_TEXT: {
        Ia(this, t);
        break;
      }
    }
  }
}
function gd(e, t) {
  let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
  return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : _a(e, t), n;
}
function Ad(e, t) {
  let n = null, r = e.openElements.stackTop;
  for (; r >= 0; r--) {
    const u = e.openElements.items[r];
    if (u === t.element)
      break;
    e._isSpecialElement(u, e.openElements.tagIDs[r]) && (n = u);
  }
  return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function _d(e, t, n) {
  let r = t, u = e.openElements.getCommonAncestor(t);
  for (let i = 0, a = u; a !== n; i++, a = u) {
    u = e.openElements.getCommonAncestor(a);
    const o = e.activeFormattingElements.getElementEntry(a), l = o && i >= Td;
    !o || l ? (l && e.activeFormattingElements.removeEntry(o), e.openElements.remove(a)) : (a = Cd(e, o), r === t && (e.activeFormattingElements.bookmark = o), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(a, r), r = a);
  }
  return r;
}
function Cd(e, t) {
  const n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
  return e.openElements.replace(t.element, r), t.element = r, r;
}
function Id(e, t, n) {
  const r = e.treeAdapter.getTagName(t), u = mt(r);
  if (e._isElementCausesFosterParenting(u))
    e._fosterParentElement(n);
  else {
    const i = e.treeAdapter.getNamespaceURI(t);
    u === s.TEMPLATE && i === L.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
  }
}
function Nd(e, t, n) {
  const r = e.treeAdapter.getNamespaceURI(n.element), { token: u } = n, i = e.treeAdapter.createElement(u.tagName, r, u.attrs);
  e._adoptNodes(t, i), e.treeAdapter.appendChild(t, i), e.activeFormattingElements.insertElementAfterBookmark(i, u), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, i, u.tagID);
}
function Ar(e, t) {
  for (let n = 0; n < Ed; n++) {
    const r = gd(e, t);
    if (!r)
      break;
    const u = Ad(e, r);
    if (!u)
      break;
    e.activeFormattingElements.bookmark = r;
    const i = _d(e, u, r.element), a = e.openElements.getCommonAncestor(r.element);
    e.treeAdapter.detachNode(i), a && Id(e, a, i), Nd(e, u, r);
  }
}
function tr(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function Sd(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function yd(e, t) {
  e._appendCommentNode(t, e.document);
}
function _r(e, t) {
  if (e.stopped = !0, t.location) {
    const n = e.fragmentContext ? 0 : 2;
    for (let r = e.openElements.stackTop; r >= n; r--)
      e._setEndLocation(e.openElements.items[r], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const r = e.openElements.items[0], u = e.treeAdapter.getNodeSourceCodeLocation(r);
      if (u && !u.endTag && (e._setEndLocation(r, t), e.openElements.stackTop >= 1)) {
        const i = e.openElements.items[1], a = e.treeAdapter.getNodeSourceCodeLocation(i);
        a && !a.endTag && e._setEndLocation(i, t);
      }
    }
  }
}
function kd(e, t) {
  e._setDocumentType(t);
  const n = t.forceQuirks ? Ae.QUIRKS : rd(t);
  nd(t) || e._err(t, S.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = T.BEFORE_HTML;
}
function At(e, t) {
  e._err(t, S.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Ae.QUIRKS), e.insertionMode = T.BEFORE_HTML, e._processToken(t);
}
function xd(e, t) {
  t.tagID === s.HTML ? (e._insertElement(t, L.HTML), e.insertionMode = T.BEFORE_HEAD) : yt(e, t);
}
function Od(e, t) {
  const n = t.tagID;
  (n === s.HTML || n === s.HEAD || n === s.BODY || n === s.BR) && yt(e, t);
}
function yt(e, t) {
  e._insertFakeRootElement(), e.insertionMode = T.BEFORE_HEAD, e._processToken(t);
}
function Ld(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.HEAD: {
      e._insertElement(t, L.HTML), e.headElement = e.openElements.current, e.insertionMode = T.IN_HEAD;
      break;
    }
    default:
      kt(e, t);
  }
}
function Dd(e, t) {
  const n = t.tagID;
  n === s.HEAD || n === s.BODY || n === s.HTML || n === s.BR ? kt(e, t) : e._err(t, S.endTagWithoutMatchingOpenElement);
}
function kt(e, t) {
  e._insertFakeElement(I.HEAD, s.HEAD), e.headElement = e.openElements.current, e.insertionMode = T.IN_HEAD, e._processToken(t);
}
function Oe(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.BASE:
    case s.BASEFONT:
    case s.BGSOUND:
    case s.LINK:
    case s.META: {
      e._appendElement(t, L.HTML), t.ackSelfClosing = !0;
      break;
    }
    case s.TITLE: {
      e._switchToTextParsing(t, ie.RCDATA);
      break;
    }
    case s.NOSCRIPT: {
      e.options.scriptingEnabled ? e._switchToTextParsing(t, ie.RAWTEXT) : (e._insertElement(t, L.HTML), e.insertionMode = T.IN_HEAD_NO_SCRIPT);
      break;
    }
    case s.NOFRAMES:
    case s.STYLE: {
      e._switchToTextParsing(t, ie.RAWTEXT);
      break;
    }
    case s.SCRIPT: {
      e._switchToTextParsing(t, ie.SCRIPT_DATA);
      break;
    }
    case s.TEMPLATE: {
      e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = T.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(T.IN_TEMPLATE);
      break;
    }
    case s.HEAD: {
      e._err(t, S.misplacedStartTagForHeadElement);
      break;
    }
    default:
      xt(e, t);
  }
}
function Rd(e, t) {
  switch (t.tagID) {
    case s.HEAD: {
      e.openElements.pop(), e.insertionMode = T.AFTER_HEAD;
      break;
    }
    case s.BODY:
    case s.BR:
    case s.HTML: {
      xt(e, t);
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
    default:
      e._err(t, S.endTagWithoutMatchingOpenElement);
  }
}
function et(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== s.TEMPLATE && e._err(t, S.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(s.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, S.endTagWithoutMatchingOpenElement);
}
function xt(e, t) {
  e.openElements.pop(), e.insertionMode = T.AFTER_HEAD, e._processToken(t);
}
function Pd(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.BASEFONT:
    case s.BGSOUND:
    case s.HEAD:
    case s.LINK:
    case s.META:
    case s.NOFRAMES:
    case s.STYLE: {
      Oe(e, t);
      break;
    }
    case s.NOSCRIPT: {
      e._err(t, S.nestedNoscriptInHead);
      break;
    }
    default:
      Ot(e, t);
  }
}
function wd(e, t) {
  switch (t.tagID) {
    case s.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = T.IN_HEAD;
      break;
    }
    case s.BR: {
      Ot(e, t);
      break;
    }
    default:
      e._err(t, S.endTagWithoutMatchingOpenElement);
  }
}
function Ot(e, t) {
  const n = t.type === G.EOF ? S.openElementsLeftAfterEof : S.disallowedContentInNoscriptInHead;
  e._err(t, n), e.openElements.pop(), e.insertionMode = T.IN_HEAD, e._processToken(t);
}
function Md(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.BODY: {
      e._insertElement(t, L.HTML), e.framesetOk = !1, e.insertionMode = T.IN_BODY;
      break;
    }
    case s.FRAMESET: {
      e._insertElement(t, L.HTML), e.insertionMode = T.IN_FRAMESET;
      break;
    }
    case s.BASE:
    case s.BASEFONT:
    case s.BGSOUND:
    case s.LINK:
    case s.META:
    case s.NOFRAMES:
    case s.SCRIPT:
    case s.STYLE:
    case s.TEMPLATE:
    case s.TITLE: {
      e._err(t, S.abandonedHeadElementChild), e.openElements.push(e.headElement, s.HEAD), Oe(e, t), e.openElements.remove(e.headElement);
      break;
    }
    case s.HEAD: {
      e._err(t, S.misplacedStartTagForHeadElement);
      break;
    }
    default:
      Lt(e, t);
  }
}
function Fd(e, t) {
  switch (t.tagID) {
    case s.BODY:
    case s.HTML:
    case s.BR: {
      Lt(e, t);
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
    default:
      e._err(t, S.endTagWithoutMatchingOpenElement);
  }
}
function Lt(e, t) {
  e._insertFakeElement(I.BODY, s.BODY), e.insertionMode = T.IN_BODY, fn(e, t);
}
function fn(e, t) {
  switch (t.type) {
    case G.CHARACTER: {
      ba(e, t);
      break;
    }
    case G.WHITESPACE_CHARACTER: {
      Ta(e, t);
      break;
    }
    case G.COMMENT: {
      tr(e, t);
      break;
    }
    case G.START_TAG: {
      de(e, t);
      break;
    }
    case G.END_TAG: {
      hn(e, t);
      break;
    }
    case G.EOF: {
      Ca(e, t);
      break;
    }
  }
}
function Ta(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function ba(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Bd(e, t) {
  e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Hd(e, t) {
  const n = e.openElements.tryPeekProperlyNestedBodyElement();
  n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Ud(e, t) {
  const n = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_FRAMESET);
}
function vd(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML);
}
function zd(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && er.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, L.HTML);
}
function Yd(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function qd(e, t) {
  const n = e.openElements.tmplCount > 0;
  (!e.formElement || n) && (e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML), n || (e.formElement = e.openElements.current));
}
function Wd(e, t) {
  e.framesetOk = !1;
  const n = t.tagID;
  for (let r = e.openElements.stackTop; r >= 0; r--) {
    const u = e.openElements.tagIDs[r];
    if (n === s.LI && u === s.LI || (n === s.DD || n === s.DT) && (u === s.DD || u === s.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(u), e.openElements.popUntilTagNamePopped(u);
      break;
    }
    if (u !== s.ADDRESS && u !== s.DIV && u !== s.P && e._isSpecialElement(e.openElements.items[r], u))
      break;
  }
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML);
}
function Vd(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML), e.tokenizer.state = ie.PLAINTEXT;
}
function jd(e, t) {
  e.openElements.hasInScope(s.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(s.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML), e.framesetOk = !1;
}
function Qd(e, t) {
  const n = e.activeFormattingElements.getElementEntryInScopeWithTagName(I.A);
  n && (Ar(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Gd(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Xd(e, t) {
  e._reconstructActiveFormattingElements(), e.openElements.hasInScope(s.NOBR) && (Ar(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, L.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Kd(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function $d(e, t) {
  e.treeAdapter.getDocumentMode(e.document) !== Ae.QUIRKS && e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._insertElement(t, L.HTML), e.framesetOk = !1, e.insertionMode = T.IN_TABLE;
}
function ga(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, L.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Aa(e) {
  const t = oa(e, $e.TYPE);
  return t != null && t.toLowerCase() === pd;
}
function Jd(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, L.HTML), Aa(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Zd(e, t) {
  e._appendElement(t, L.HTML), t.ackSelfClosing = !0;
}
function e1(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._appendElement(t, L.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function t1(e, t) {
  t.tagName = I.IMG, t.tagID = s.IMG, ga(e, t);
}
function n1(e, t) {
  e._insertElement(t, L.HTML), e.skipNextNewLine = !0, e.tokenizer.state = ie.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = T.TEXT;
}
function r1(e, t) {
  e.openElements.hasInButtonScope(s.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, ie.RAWTEXT);
}
function u1(e, t) {
  e.framesetOk = !1, e._switchToTextParsing(t, ie.RAWTEXT);
}
function qu(e, t) {
  e._switchToTextParsing(t, ie.RAWTEXT);
}
function i1(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === T.IN_TABLE || e.insertionMode === T.IN_CAPTION || e.insertionMode === T.IN_TABLE_BODY || e.insertionMode === T.IN_ROW || e.insertionMode === T.IN_CELL ? T.IN_SELECT_IN_TABLE : T.IN_SELECT;
}
function a1(e, t) {
  e.openElements.currentTagId === s.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML);
}
function s1(e, t) {
  e.openElements.hasInScope(s.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, L.HTML);
}
function o1(e, t) {
  e.openElements.hasInScope(s.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(s.RTC), e._insertElement(t, L.HTML);
}
function l1(e, t) {
  e._reconstructActiveFormattingElements(), ma(t), gr(t), t.selfClosing ? e._appendElement(t, L.MATHML) : e._insertElement(t, L.MATHML), t.ackSelfClosing = !0;
}
function c1(e, t) {
  e._reconstructActiveFormattingElements(), pa(t), gr(t), t.selfClosing ? e._appendElement(t, L.SVG) : e._insertElement(t, L.SVG), t.ackSelfClosing = !0;
}
function Wu(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML);
}
function de(e, t) {
  switch (t.tagID) {
    case s.I:
    case s.S:
    case s.B:
    case s.U:
    case s.EM:
    case s.TT:
    case s.BIG:
    case s.CODE:
    case s.FONT:
    case s.SMALL:
    case s.STRIKE:
    case s.STRONG: {
      Gd(e, t);
      break;
    }
    case s.A: {
      Qd(e, t);
      break;
    }
    case s.H1:
    case s.H2:
    case s.H3:
    case s.H4:
    case s.H5:
    case s.H6: {
      zd(e, t);
      break;
    }
    case s.P:
    case s.DL:
    case s.OL:
    case s.UL:
    case s.DIV:
    case s.DIR:
    case s.NAV:
    case s.MAIN:
    case s.MENU:
    case s.ASIDE:
    case s.CENTER:
    case s.FIGURE:
    case s.FOOTER:
    case s.HEADER:
    case s.HGROUP:
    case s.DIALOG:
    case s.DETAILS:
    case s.ADDRESS:
    case s.ARTICLE:
    case s.SEARCH:
    case s.SECTION:
    case s.SUMMARY:
    case s.FIELDSET:
    case s.BLOCKQUOTE:
    case s.FIGCAPTION: {
      vd(e, t);
      break;
    }
    case s.LI:
    case s.DD:
    case s.DT: {
      Wd(e, t);
      break;
    }
    case s.BR:
    case s.IMG:
    case s.WBR:
    case s.AREA:
    case s.EMBED:
    case s.KEYGEN: {
      ga(e, t);
      break;
    }
    case s.HR: {
      e1(e, t);
      break;
    }
    case s.RB:
    case s.RTC: {
      s1(e, t);
      break;
    }
    case s.RT:
    case s.RP: {
      o1(e, t);
      break;
    }
    case s.PRE:
    case s.LISTING: {
      Yd(e, t);
      break;
    }
    case s.XMP: {
      r1(e, t);
      break;
    }
    case s.SVG: {
      c1(e, t);
      break;
    }
    case s.HTML: {
      Bd(e, t);
      break;
    }
    case s.BASE:
    case s.LINK:
    case s.META:
    case s.STYLE:
    case s.TITLE:
    case s.SCRIPT:
    case s.BGSOUND:
    case s.BASEFONT:
    case s.TEMPLATE: {
      Oe(e, t);
      break;
    }
    case s.BODY: {
      Hd(e, t);
      break;
    }
    case s.FORM: {
      qd(e, t);
      break;
    }
    case s.NOBR: {
      Xd(e, t);
      break;
    }
    case s.MATH: {
      l1(e, t);
      break;
    }
    case s.TABLE: {
      $d(e, t);
      break;
    }
    case s.INPUT: {
      Jd(e, t);
      break;
    }
    case s.PARAM:
    case s.TRACK:
    case s.SOURCE: {
      Zd(e, t);
      break;
    }
    case s.IMAGE: {
      t1(e, t);
      break;
    }
    case s.BUTTON: {
      jd(e, t);
      break;
    }
    case s.APPLET:
    case s.OBJECT:
    case s.MARQUEE: {
      Kd(e, t);
      break;
    }
    case s.IFRAME: {
      u1(e, t);
      break;
    }
    case s.SELECT: {
      i1(e, t);
      break;
    }
    case s.OPTION:
    case s.OPTGROUP: {
      a1(e, t);
      break;
    }
    case s.NOEMBED:
    case s.NOFRAMES: {
      qu(e, t);
      break;
    }
    case s.FRAMESET: {
      Ud(e, t);
      break;
    }
    case s.TEXTAREA: {
      n1(e, t);
      break;
    }
    case s.NOSCRIPT: {
      e.options.scriptingEnabled ? qu(e, t) : Wu(e, t);
      break;
    }
    case s.PLAINTEXT: {
      Vd(e, t);
      break;
    }
    case s.COL:
    case s.TH:
    case s.TD:
    case s.TR:
    case s.HEAD:
    case s.FRAME:
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD:
    case s.CAPTION:
    case s.COLGROUP:
      break;
    default:
      Wu(e, t);
  }
}
function f1(e, t) {
  if (e.openElements.hasInScope(s.BODY) && (e.insertionMode = T.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
    const n = e.openElements.tryPeekProperlyNestedBodyElement();
    n && e._setEndLocation(n, t);
  }
}
function h1(e, t) {
  e.openElements.hasInScope(s.BODY) && (e.insertionMode = T.AFTER_BODY, La(e, t));
}
function d1(e, t) {
  const n = t.tagID;
  e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function m1(e) {
  const t = e.openElements.tmplCount > 0, { formElement: n } = e;
  t || (e.formElement = null), (n || t) && e.openElements.hasInScope(s.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(s.FORM) : n && e.openElements.remove(n));
}
function p1(e) {
  e.openElements.hasInButtonScope(s.P) || e._insertFakeElement(I.P, s.P), e._closePElement();
}
function E1(e) {
  e.openElements.hasInListItemScope(s.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(s.LI), e.openElements.popUntilTagNamePopped(s.LI));
}
function T1(e, t) {
  const n = t.tagID;
  e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function b1(e) {
  e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function g1(e, t) {
  const n = t.tagID;
  e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function A1(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(I.BR, s.BR), e.openElements.pop(), e.framesetOk = !1;
}
function _a(e, t) {
  const n = t.tagName, r = t.tagID;
  for (let u = e.openElements.stackTop; u > 0; u--) {
    const i = e.openElements.items[u], a = e.openElements.tagIDs[u];
    if (r === a && (r !== s.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
      e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= u && e.openElements.shortenToLength(u);
      break;
    }
    if (e._isSpecialElement(i, a))
      break;
  }
}
function hn(e, t) {
  switch (t.tagID) {
    case s.A:
    case s.B:
    case s.I:
    case s.S:
    case s.U:
    case s.EM:
    case s.TT:
    case s.BIG:
    case s.CODE:
    case s.FONT:
    case s.NOBR:
    case s.SMALL:
    case s.STRIKE:
    case s.STRONG: {
      Ar(e, t);
      break;
    }
    case s.P: {
      p1(e);
      break;
    }
    case s.DL:
    case s.UL:
    case s.OL:
    case s.DIR:
    case s.DIV:
    case s.NAV:
    case s.PRE:
    case s.MAIN:
    case s.MENU:
    case s.ASIDE:
    case s.BUTTON:
    case s.CENTER:
    case s.FIGURE:
    case s.FOOTER:
    case s.HEADER:
    case s.HGROUP:
    case s.DIALOG:
    case s.ADDRESS:
    case s.ARTICLE:
    case s.DETAILS:
    case s.SEARCH:
    case s.SECTION:
    case s.SUMMARY:
    case s.LISTING:
    case s.FIELDSET:
    case s.BLOCKQUOTE:
    case s.FIGCAPTION: {
      d1(e, t);
      break;
    }
    case s.LI: {
      E1(e);
      break;
    }
    case s.DD:
    case s.DT: {
      T1(e, t);
      break;
    }
    case s.H1:
    case s.H2:
    case s.H3:
    case s.H4:
    case s.H5:
    case s.H6: {
      b1(e);
      break;
    }
    case s.BR: {
      A1(e);
      break;
    }
    case s.BODY: {
      f1(e, t);
      break;
    }
    case s.HTML: {
      h1(e, t);
      break;
    }
    case s.FORM: {
      m1(e);
      break;
    }
    case s.APPLET:
    case s.OBJECT:
    case s.MARQUEE: {
      g1(e, t);
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
    default:
      _a(e, t);
  }
}
function Ca(e, t) {
  e.tmplInsertionModeStack.length > 0 ? Oa(e, t) : _r(e, t);
}
function _1(e, t) {
  var n;
  t.tagID === s.SCRIPT && ((n = e.scriptHandler) === null || n === void 0 || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function C1(e, t) {
  e._err(t, S.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function vn(e, t) {
  if (e.openElements.currentTagId !== void 0 && Ea.has(e.openElements.currentTagId))
    switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = T.IN_TABLE_TEXT, t.type) {
      case G.CHARACTER: {
        Na(e, t);
        break;
      }
      case G.WHITESPACE_CHARACTER: {
        Ia(e, t);
        break;
      }
    }
  else
    Ft(e, t);
}
function I1(e, t) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_CAPTION;
}
function N1(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_COLUMN_GROUP;
}
function S1(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(I.COLGROUP, s.COLGROUP), e.insertionMode = T.IN_COLUMN_GROUP, Cr(e, t);
}
function y1(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_TABLE_BODY;
}
function k1(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(I.TBODY, s.TBODY), e.insertionMode = T.IN_TABLE_BODY, dn(e, t);
}
function x1(e, t) {
  e.openElements.hasInTableScope(s.TABLE) && (e.openElements.popUntilTagNamePopped(s.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function O1(e, t) {
  Aa(t) ? e._appendElement(t, L.HTML) : Ft(e, t), t.ackSelfClosing = !0;
}
function L1(e, t) {
  !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, L.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function ct(e, t) {
  switch (t.tagID) {
    case s.TD:
    case s.TH:
    case s.TR: {
      k1(e, t);
      break;
    }
    case s.STYLE:
    case s.SCRIPT:
    case s.TEMPLATE: {
      Oe(e, t);
      break;
    }
    case s.COL: {
      S1(e, t);
      break;
    }
    case s.FORM: {
      L1(e, t);
      break;
    }
    case s.TABLE: {
      x1(e, t);
      break;
    }
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD: {
      y1(e, t);
      break;
    }
    case s.INPUT: {
      O1(e, t);
      break;
    }
    case s.CAPTION: {
      I1(e, t);
      break;
    }
    case s.COLGROUP: {
      N1(e, t);
      break;
    }
    default:
      Ft(e, t);
  }
}
function Dt(e, t) {
  switch (t.tagID) {
    case s.TABLE: {
      e.openElements.hasInTableScope(s.TABLE) && (e.openElements.popUntilTagNamePopped(s.TABLE), e._resetInsertionMode());
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
    case s.BODY:
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.HTML:
    case s.TBODY:
    case s.TD:
    case s.TFOOT:
    case s.TH:
    case s.THEAD:
    case s.TR:
      break;
    default:
      Ft(e, t);
  }
}
function Ft(e, t) {
  const n = e.fosterParentingEnabled;
  e.fosterParentingEnabled = !0, fn(e, t), e.fosterParentingEnabled = n;
}
function Ia(e, t) {
  e.pendingCharacterTokens.push(t);
}
function Na(e, t) {
  e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function _t(e, t) {
  let n = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; n < e.pendingCharacterTokens.length; n++)
      Ft(e, e.pendingCharacterTokens[n]);
  else
    for (; n < e.pendingCharacterTokens.length; n++)
      e._insertCharacters(e.pendingCharacterTokens[n]);
  e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
const Sa = /* @__PURE__ */ new Set([s.CAPTION, s.COL, s.COLGROUP, s.TBODY, s.TD, s.TFOOT, s.TH, s.THEAD, s.TR]);
function D1(e, t) {
  const n = t.tagID;
  Sa.has(n) ? e.openElements.hasInTableScope(s.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(s.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_TABLE, ct(e, t)) : de(e, t);
}
function R1(e, t) {
  const n = t.tagID;
  switch (n) {
    case s.CAPTION:
    case s.TABLE: {
      e.openElements.hasInTableScope(s.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(s.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_TABLE, n === s.TABLE && Dt(e, t));
      break;
    }
    case s.BODY:
    case s.COL:
    case s.COLGROUP:
    case s.HTML:
    case s.TBODY:
    case s.TD:
    case s.TFOOT:
    case s.TH:
    case s.THEAD:
    case s.TR:
      break;
    default:
      hn(e, t);
  }
}
function Cr(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.COL: {
      e._appendElement(t, L.HTML), t.ackSelfClosing = !0;
      break;
    }
    case s.TEMPLATE: {
      Oe(e, t);
      break;
    }
    default:
      en(e, t);
  }
}
function P1(e, t) {
  switch (t.tagID) {
    case s.COLGROUP: {
      e.openElements.currentTagId === s.COLGROUP && (e.openElements.pop(), e.insertionMode = T.IN_TABLE);
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
    case s.COL:
      break;
    default:
      en(e, t);
  }
}
function en(e, t) {
  e.openElements.currentTagId === s.COLGROUP && (e.openElements.pop(), e.insertionMode = T.IN_TABLE, e._processToken(t));
}
function dn(e, t) {
  switch (t.tagID) {
    case s.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_ROW;
      break;
    }
    case s.TH:
    case s.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(I.TR, s.TR), e.insertionMode = T.IN_ROW, mn(e, t);
      break;
    }
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE, ct(e, t));
      break;
    }
    default:
      ct(e, t);
  }
}
function nr(e, t) {
  const n = t.tagID;
  switch (t.tagID) {
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD: {
      e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE);
      break;
    }
    case s.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE, Dt(e, t));
      break;
    }
    case s.BODY:
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.HTML:
    case s.TD:
    case s.TH:
    case s.TR:
      break;
    default:
      Dt(e, t);
  }
}
function mn(e, t) {
  switch (t.tagID) {
    case s.TH:
    case s.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(t, L.HTML), e.insertionMode = T.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD:
    case s.TR: {
      e.openElements.hasInTableScope(s.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, dn(e, t));
      break;
    }
    default:
      ct(e, t);
  }
}
function ya(e, t) {
  switch (t.tagID) {
    case s.TR: {
      e.openElements.hasInTableScope(s.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY);
      break;
    }
    case s.TABLE: {
      e.openElements.hasInTableScope(s.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, nr(e, t));
      break;
    }
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD: {
      (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(s.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, nr(e, t));
      break;
    }
    case s.BODY:
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.HTML:
    case s.TD:
    case s.TH:
      break;
    default:
      Dt(e, t);
  }
}
function w1(e, t) {
  const n = t.tagID;
  Sa.has(n) ? (e.openElements.hasInTableScope(s.TD) || e.openElements.hasInTableScope(s.TH)) && (e._closeTableCell(), mn(e, t)) : de(e, t);
}
function M1(e, t) {
  const n = t.tagID;
  switch (n) {
    case s.TD:
    case s.TH: {
      e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_ROW);
      break;
    }
    case s.TABLE:
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD:
    case s.TR: {
      e.openElements.hasInTableScope(n) && (e._closeTableCell(), ya(e, t));
      break;
    }
    case s.BODY:
    case s.CAPTION:
    case s.COL:
    case s.COLGROUP:
    case s.HTML:
      break;
    default:
      hn(e, t);
  }
}
function ka(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.OPTION: {
      e.openElements.currentTagId === s.OPTION && e.openElements.pop(), e._insertElement(t, L.HTML);
      break;
    }
    case s.OPTGROUP: {
      e.openElements.currentTagId === s.OPTION && e.openElements.pop(), e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop(), e._insertElement(t, L.HTML);
      break;
    }
    case s.HR: {
      e.openElements.currentTagId === s.OPTION && e.openElements.pop(), e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop(), e._appendElement(t, L.HTML), t.ackSelfClosing = !0;
      break;
    }
    case s.INPUT:
    case s.KEYGEN:
    case s.TEXTAREA:
    case s.SELECT: {
      e.openElements.hasInSelectScope(s.SELECT) && (e.openElements.popUntilTagNamePopped(s.SELECT), e._resetInsertionMode(), t.tagID !== s.SELECT && e._processStartTag(t));
      break;
    }
    case s.SCRIPT:
    case s.TEMPLATE: {
      Oe(e, t);
      break;
    }
  }
}
function xa(e, t) {
  switch (t.tagID) {
    case s.OPTGROUP: {
      e.openElements.stackTop > 0 && e.openElements.currentTagId === s.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === s.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === s.OPTGROUP && e.openElements.pop();
      break;
    }
    case s.OPTION: {
      e.openElements.currentTagId === s.OPTION && e.openElements.pop();
      break;
    }
    case s.SELECT: {
      e.openElements.hasInSelectScope(s.SELECT) && (e.openElements.popUntilTagNamePopped(s.SELECT), e._resetInsertionMode());
      break;
    }
    case s.TEMPLATE: {
      et(e, t);
      break;
    }
  }
}
function F1(e, t) {
  const n = t.tagID;
  n === s.CAPTION || n === s.TABLE || n === s.TBODY || n === s.TFOOT || n === s.THEAD || n === s.TR || n === s.TD || n === s.TH ? (e.openElements.popUntilTagNamePopped(s.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : ka(e, t);
}
function B1(e, t) {
  const n = t.tagID;
  n === s.CAPTION || n === s.TABLE || n === s.TBODY || n === s.TFOOT || n === s.THEAD || n === s.TR || n === s.TD || n === s.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(s.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : xa(e, t);
}
function H1(e, t) {
  switch (t.tagID) {
    // First, handle tags that can start without a mode change
    case s.BASE:
    case s.BASEFONT:
    case s.BGSOUND:
    case s.LINK:
    case s.META:
    case s.NOFRAMES:
    case s.SCRIPT:
    case s.STYLE:
    case s.TEMPLATE:
    case s.TITLE: {
      Oe(e, t);
      break;
    }
    // Re-process the token in the appropriate mode
    case s.CAPTION:
    case s.COLGROUP:
    case s.TBODY:
    case s.TFOOT:
    case s.THEAD: {
      e.tmplInsertionModeStack[0] = T.IN_TABLE, e.insertionMode = T.IN_TABLE, ct(e, t);
      break;
    }
    case s.COL: {
      e.tmplInsertionModeStack[0] = T.IN_COLUMN_GROUP, e.insertionMode = T.IN_COLUMN_GROUP, Cr(e, t);
      break;
    }
    case s.TR: {
      e.tmplInsertionModeStack[0] = T.IN_TABLE_BODY, e.insertionMode = T.IN_TABLE_BODY, dn(e, t);
      break;
    }
    case s.TD:
    case s.TH: {
      e.tmplInsertionModeStack[0] = T.IN_ROW, e.insertionMode = T.IN_ROW, mn(e, t);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = T.IN_BODY, e.insertionMode = T.IN_BODY, de(e, t);
  }
}
function U1(e, t) {
  t.tagID === s.TEMPLATE && et(e, t);
}
function Oa(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(s.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : _r(e, t);
}
function v1(e, t) {
  t.tagID === s.HTML ? de(e, t) : tn(e, t);
}
function La(e, t) {
  var n;
  if (t.tagID === s.HTML) {
    if (e.fragmentContext || (e.insertionMode = T.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === s.HTML) {
      e._setEndLocation(e.openElements.items[0], t);
      const r = e.openElements.items[1];
      r && !(!((n = e.treeAdapter.getNodeSourceCodeLocation(r)) === null || n === void 0) && n.endTag) && e._setEndLocation(r, t);
    }
  } else
    tn(e, t);
}
function tn(e, t) {
  e.insertionMode = T.IN_BODY, fn(e, t);
}
function z1(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.FRAMESET: {
      e._insertElement(t, L.HTML);
      break;
    }
    case s.FRAME: {
      e._appendElement(t, L.HTML), t.ackSelfClosing = !0;
      break;
    }
    case s.NOFRAMES: {
      Oe(e, t);
      break;
    }
  }
}
function Y1(e, t) {
  t.tagID === s.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== s.FRAMESET && (e.insertionMode = T.AFTER_FRAMESET));
}
function q1(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.NOFRAMES: {
      Oe(e, t);
      break;
    }
  }
}
function W1(e, t) {
  t.tagID === s.HTML && (e.insertionMode = T.AFTER_AFTER_FRAMESET);
}
function V1(e, t) {
  t.tagID === s.HTML ? de(e, t) : Gt(e, t);
}
function Gt(e, t) {
  e.insertionMode = T.IN_BODY, fn(e, t);
}
function j1(e, t) {
  switch (t.tagID) {
    case s.HTML: {
      de(e, t);
      break;
    }
    case s.NOFRAMES: {
      Oe(e, t);
      break;
    }
  }
}
function Q1(e, t) {
  t.chars = ne, e._insertCharacters(t);
}
function G1(e, t) {
  e._insertCharacters(t), e.framesetOk = !1;
}
function Da(e) {
  for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== L.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
    e.openElements.pop();
}
function X1(e, t) {
  if (cd(t))
    Da(e), e._startTagOutsideForeignContent(t);
  else {
    const n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
    r === L.MATHML ? ma(t) : r === L.SVG && (fd(t), pa(t)), gr(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
  }
}
function K1(e, t) {
  if (t.tagID === s.P || t.tagID === s.BR) {
    Da(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let n = e.openElements.stackTop; n > 0; n--) {
    const r = e.openElements.items[n];
    if (e.treeAdapter.getNamespaceURI(r) === L.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    const u = e.treeAdapter.getTagName(r);
    if (u.toLowerCase() === t.tagName) {
      t.tagName = u, e.openElements.shortenToLength(n);
      break;
    }
  }
}
I.AREA, I.BASE, I.BASEFONT, I.BGSOUND, I.BR, I.COL, I.EMBED, I.FRAME, I.HR, I.IMG, I.INPUT, I.KEYGEN, I.LINK, I.META, I.PARAM, I.SOURCE, I.TRACK, I.WBR;
const Ir = Ra("end"), Qe = Ra("start");
function Ra(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function $1(e) {
  const t = Qe(e), n = Ir(e);
  if (t && n)
    return { start: t, end: n };
}
const Pa = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(e) {
    if (e == null)
      return tm;
    if (typeof e == "function")
      return pn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? J1(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Z1(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return em(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function J1(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Pa(e[n]);
  return pn(r);
  function r(...u) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].apply(this, u)) return !0;
    return !1;
  }
}
function Z1(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return pn(n);
  function n(r) {
    const u = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let i;
    for (i in e)
      if (u[i] !== t[i]) return !1;
    return !0;
  }
}
function em(e) {
  return pn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function pn(e) {
  return t;
  function t(n, r, u) {
    return !!(nm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      u || void 0
    ));
  }
}
function tm() {
  return !0;
}
function nm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const wa = [], rm = !0, Vu = !1, Ma = "skip";
function um(e, t, n, r) {
  let u;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : u = t;
  const i = Pa(u), a = r ? -1 : 1;
  o(e, void 0, [])();
  function o(l, c, h) {
    const f = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof f.type == "string") {
      const m = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(E, "name", {
        value: "node (" + (l.type + (m ? "<" + m + ">" : "")) + ")"
      });
    }
    return E;
    function E() {
      let m = wa, _, A, k;
      if ((!t || i(l, c, h[h.length - 1] || void 0)) && (m = im(n(l, h)), m[0] === Vu))
        return m;
      if ("children" in l && l.children) {
        const C = (
          /** @type {UnistParent} */
          l
        );
        if (C.children && m[0] !== Ma)
          for (A = (r ? C.children.length : -1) + a, k = h.concat(C); A > -1 && A < C.children.length; ) {
            const R = C.children[A];
            if (_ = o(R, A, k)(), _[0] === Vu)
              return _;
            A = typeof _[1] == "number" ? _[1] : A + a;
          }
      }
      return m;
    }
  }
}
function im(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [rm, e] : e == null ? wa : [e];
}
function Fa(e, t, n, r) {
  let u, i, a;
  typeof t == "function" && typeof n != "function" ? (i = void 0, a = t, u = n) : (i = t, a = n, u = r), um(e, i, o, u);
  function o(l, c) {
    const h = c[c.length - 1], f = h ? h.children.indexOf(l) : void 0;
    return a(l, f, h);
  }
}
const am = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, sm = /* @__PURE__ */ new Set([
  "mdxFlowExpression",
  "mdxJsxFlowElement",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "mdxjsEsm"
]), ju = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 };
function Ba(e, t) {
  const n = Tm(e), r = Zu("type", {
    handlers: { root: om, element: lm, text: cm, comment: Ua, doctype: fm, raw: dm },
    unknown: mm
  }), u = {
    parser: n ? new Yu(ju) : Yu.getFragmentParser(void 0, ju),
    handle(o) {
      r(o, u);
    },
    stitches: !1,
    options: t || {}
  };
  r(e, u), pt(u, Qe());
  const i = n ? u.parser.document : u.parser.getFragment(), a = ch(i, {
    // To do: support `space`?
    file: u.options.file
  });
  return u.stitches && Fa(a, "comment", function(o, l, c) {
    const h = (
      /** @type {Stitch} */
      /** @type {unknown} */
      o
    );
    if (h.value.stitch && c && l !== void 0) {
      const f = c.children;
      return f[l] = h.value.stitch, l;
    }
  }), a.type === "root" && a.children.length === 1 && a.children[0].type === e.type ? a.children[0] : a;
}
function Ha(e, t) {
  let n = -1;
  if (e)
    for (; ++n < e.length; )
      t.handle(e[n]);
}
function om(e, t) {
  Ha(e.children, t);
}
function lm(e, t) {
  pm(e, t), Ha(e.children, t), Em(e, t);
}
function cm(e, t) {
  t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
  const n = {
    type: G.CHARACTER,
    chars: e.value,
    location: Bt(e)
  };
  pt(t, Qe(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function fm(e, t) {
  const n = {
    type: G.DOCTYPE,
    name: "html",
    forceQuirks: !1,
    publicId: "",
    systemId: "",
    location: Bt(e)
  };
  pt(t, Qe(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function hm(e, t) {
  t.stitches = !0;
  const n = bm(e);
  if ("children" in e && "children" in n) {
    const r = (
      /** @type {Root} */
      Ba({ type: "root", children: e.children }, t.options)
    );
    n.children = r.children;
  }
  Ua({ type: "comment", value: { stitch: n } }, t);
}
function Ua(e, t) {
  const n = e.value, r = {
    type: G.COMMENT,
    data: n,
    location: Bt(e)
  };
  pt(t, Qe(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
}
function dm(e, t) {
  if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, va(t, Qe(e)), t.parser.tokenizer.write(
    t.options.tagfilter ? e.value.replace(am, "&lt;$1$2") : e.value,
    !1
  ), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || // @ts-expect-error: removed.
  t.parser.tokenizer.state === 78) {
    t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
    const n = t.parser.tokenizer._consume();
    t.parser.tokenizer._callState(n);
  }
}
function mm(e, t) {
  const n = (
    /** @type {Nodes} */
    e
  );
  if (t.options.passThrough && t.options.passThrough.includes(n.type))
    hm(n, t);
  else {
    let r = "";
    throw sm.has(n.type) && (r = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), new Error("Cannot compile `" + n.type + "` node" + r);
  }
}
function pt(e, t) {
  va(e, t);
  const n = e.parser.tokenizer.currentCharacterToken;
  n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = ie.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = { name: "", value: "" };
}
function va(e, t) {
  if (t && t.offset !== void 0) {
    const n = {
      startLine: t.line,
      startCol: t.column,
      startOffset: t.offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
  }
}
function pm(e, t) {
  const n = e.tagName.toLowerCase();
  if (t.parser.tokenizer.state === ie.PLAINTEXT) return;
  pt(t, Qe(e));
  const r = t.parser.openElements.current;
  let u = "namespaceURI" in r ? r.namespaceURI : Ke.html;
  u === Ke.html && n === "svg" && (u = Ke.svg);
  const i = ph(
    // Shallow clone to not delve into `children`: we only need the attributes.
    { ...e, children: [] },
    { space: u === Ke.svg ? "svg" : "html" }
  ), a = {
    type: G.START_TAG,
    tagName: n,
    tagID: mt(n),
    // We always send start and end tags.
    selfClosing: !1,
    ackSelfClosing: !1,
    // Always element.
    /* c8 ignore next */
    attrs: "attrs" in i ? i.attrs : [],
    location: Bt(e)
  };
  t.parser.currentToken = a, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
}
function Em(e, t) {
  const n = e.tagName.toLowerCase();
  if (!t.parser.tokenizer.inForeignNode && ls.includes(n) || t.parser.tokenizer.state === ie.PLAINTEXT) return;
  pt(t, Ir(e));
  const r = {
    type: G.END_TAG,
    tagName: n,
    tagID: mt(n),
    selfClosing: !1,
    ackSelfClosing: !1,
    attrs: [],
    location: Bt(e)
  };
  t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), // Current element is closed.
  n === t.parser.tokenizer.lastStartTagName && // `<textarea>` and `<title>`
  (t.parser.tokenizer.state === ie.RCDATA || // `<iframe>`, `<noembed>`, `<noframes>`, `<style>`, `<xmp>`
  t.parser.tokenizer.state === ie.RAWTEXT || // `<script>`
  t.parser.tokenizer.state === ie.SCRIPT_DATA) && (t.parser.tokenizer.state = ie.DATA);
}
function Tm(e) {
  const t = e.type === "root" ? e.children[0] : e;
  return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
}
function Bt(e) {
  const t = Qe(e) || {
    line: void 0,
    column: void 0,
    offset: void 0
  }, n = Ir(e) || {
    line: void 0,
    column: void 0,
    offset: void 0
  };
  return {
    startLine: t.line,
    startCol: t.column,
    startOffset: t.offset,
    endLine: n.line,
    endCol: n.column,
    endOffset: n.offset
  };
}
function bm(e) {
  return "children" in e ? $n({ ...e, children: [] }) : $n(e);
}
function gm(e) {
  return function(t, n) {
    return (
      /** @type {Root} */
      Ba(t, { ...e, file: n })
    );
  };
}
const Xe = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], ot = {
  ancestors: {
    tbody: ["table"],
    td: ["table"],
    th: ["table"],
    thead: ["table"],
    tfoot: ["table"],
    tr: ["table"]
  },
  attributes: {
    a: [
      ...Xe,
      // Note: these 3 are used by GFM footnotes, they do work on all links.
      "dataFootnoteBackref",
      "dataFootnoteRef",
      ["className", "data-footnote-backref"],
      "href"
    ],
    blockquote: ["cite"],
    // Note: this class is not normally allowed by GH, when manually writing
    // `code` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    code: [["className", /^language-./]],
    del: ["cite"],
    div: ["itemScope", "itemType"],
    dl: [...Xe],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Xe, "longDesc", "src"],
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    input: [
      ["disabled", !0],
      ["type", "checkbox"]
    ],
    ins: ["cite"],
    // Note: this class is not normally allowed by GH, when manually writing
    // `li` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    li: [["className", "task-list-item"]],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ol: [...Xe, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Xe],
    table: [...Xe],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Xe, ["className", "contains-task-list"]],
    "*": [
      "abbr",
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "align",
      "alt",
      "axis",
      "border",
      "cellPadding",
      "cellSpacing",
      "char",
      "charOff",
      "charSet",
      "checked",
      "clear",
      "colSpan",
      "color",
      "cols",
      "compact",
      "coords",
      "dateTime",
      "dir",
      // Note: `disabled` is technically allowed on all elements by GH.
      // But it is useless on everything except `input`.
      // Because `input`s are normally not allowed, but we allow them for
      // checkboxes due to tasklists, we allow `disabled` only there.
      "encType",
      "frame",
      "hSpace",
      "headers",
      "height",
      "hrefLang",
      "htmlFor",
      "id",
      "isMap",
      "itemProp",
      "label",
      "lang",
      "maxLength",
      "media",
      "method",
      "multiple",
      "name",
      "noHref",
      "noShade",
      "noWrap",
      "open",
      "prompt",
      "readOnly",
      "rev",
      "rowSpan",
      "rows",
      "rules",
      "scope",
      "selected",
      "shape",
      "size",
      "span",
      "start",
      "summary",
      "tabIndex",
      "title",
      "useMap",
      "vAlign",
      "value",
      "width"
    ]
  },
  clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
  clobberPrefix: "user-content-",
  protocols: {
    cite: ["http", "https"],
    href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
    longDesc: ["http", "https"],
    src: ["http", "https"]
  },
  required: {
    input: { disabled: !0, type: "checkbox" }
  },
  strip: ["script"],
  tagNames: [
    "a",
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "del",
    "details",
    "div",
    "dl",
    "dt",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    "input",
    "ins",
    "kbd",
    "li",
    "ol",
    "p",
    "picture",
    "pre",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "source",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "tt",
    "ul",
    "var"
  ]
}, We = {}.hasOwnProperty;
function Am(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...ot, ...t } : ot,
    stack: []
  }, u = za(r, e);
  return u && (Array.isArray(u) ? u.length === 1 ? n = u[0] : n.children = u : n = u), n;
}
function za(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return _m(e, n);
      case "doctype":
        return Cm(e, n);
      case "element":
        return Im(e, n);
      case "root":
        return Nm(e, n);
      case "text":
        return Sm(e, n);
    }
  }
}
function _m(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), i = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return Ht(i, t), i;
  }
}
function Cm(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return Ht(n, t), n;
  }
}
function Im(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Ya(e, t.children)
  ), u = ym(e, t.properties);
  e.stack.pop();
  let i = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (i = !0, e.schema.ancestors && We.call(e.schema.ancestors, n))) {
    const o = e.schema.ancestors[n];
    let l = -1;
    for (i = !1; ++l < o.length; )
      e.stack.includes(o[l]) && (i = !0);
  }
  if (!i)
    return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
  const a = {
    type: "element",
    tagName: n,
    properties: u,
    children: r
  };
  return Ht(a, t), a;
}
function Nm(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Ya(e, t.children)
  ) };
  return Ht(r, t), r;
}
function Sm(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return Ht(r, t), r;
}
function Ya(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let u = -1;
    for (; ++u < r.length; ) {
      const i = za(e, r[u]);
      i && (Array.isArray(i) ? n.push(...i) : n.push(i));
    }
  }
  return n;
}
function ym(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, u = e.schema.required, i = r && We.call(r, n) ? r[n] : void 0, a = r && We.call(r, "*") ? r["*"] : void 0, o = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), l = {};
  let c;
  for (c in o)
    if (We.call(o, c)) {
      const h = o[c];
      let f = Qu(
        e,
        Gu(i, c),
        c,
        h
      );
      f == null && (f = Qu(e, Gu(a, c), c, h)), f != null && (l[c] = f);
    }
  if (u && We.call(u, n)) {
    const h = u[n];
    for (c in h)
      We.call(h, c) && !We.call(l, c) && (l[c] = h[c]);
  }
  return l;
}
function Qu(e, t, n, r) {
  return t ? Array.isArray(r) ? km(e, t, n, r) : qa(e, t, n, r) : void 0;
}
function km(e, t, n, r) {
  let u = -1;
  const i = [];
  for (; ++u < r.length; ) {
    const a = qa(e, t, n, r[u]);
    (typeof a == "number" || typeof a == "string") && i.push(a);
  }
  return i;
}
function qa(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && xm(e, n, r)) {
    if (typeof t == "object" && t.length > 1) {
      let u = !1, i = 0;
      for (; ++i < t.length; ) {
        const a = t[i];
        if (a && typeof a == "object" && "flags" in a) {
          if (a.test(String(r))) {
            u = !0;
            break;
          }
        } else if (a === r) {
          u = !0;
          break;
        }
      }
      if (!u) return;
    }
    return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r;
  }
}
function xm(e, t, n) {
  const r = e.schema.protocols && We.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const u = String(n), i = u.indexOf(":"), a = u.indexOf("?"), o = u.indexOf("#"), l = u.indexOf("/");
  if (i < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  l > -1 && i > l || a > -1 && i > a || o > -1 && i > o)
    return !0;
  let c = -1;
  for (; ++c < r.length; ) {
    const h = r[c];
    if (i === h.length && u.slice(0, h.length) === h)
      return !0;
  }
  return !1;
}
function Ht(e, t) {
  const n = $1(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = $n(t.data)), n && (e.position = n);
}
function Gu(e, t) {
  let n, r = -1;
  if (e)
    for (; ++r < e.length; ) {
      const u = e[r], i = typeof u == "string" ? u : u[0];
      if (i === t)
        return u;
      i === "data*" && (n = u);
    }
  if (t.length > 4 && t.slice(0, 4).toLowerCase() === "data")
    return n;
}
function Om(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Am(t, e)
    );
  };
}
const nn = "datus-alert-", Lm = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*\n?/, Dm = {
  NOTE: "info",
  TIP: "success",
  IMPORTANT: "info",
  WARNING: "warning",
  CAUTION: "error"
};
function Wa(e, t) {
  var n;
  (e == null ? void 0 : e.type) === "blockquote" && t(e), (n = e == null ? void 0 : e.children) == null || n.forEach((r) => Wa(r, t));
}
function Rm() {
  return ((e) => {
    Wa(e, (t) => {
      var i, a, o;
      const n = (i = t.children) == null ? void 0 : i[0], r = (a = n == null ? void 0 : n.children) == null ? void 0 : a[0];
      if ((n == null ? void 0 : n.type) !== "paragraph" || (r == null ? void 0 : r.type) !== "text")
        return;
      const u = Lm.exec(r.value);
      u && (r.value = r.value.slice(u[0].length), !r.value && n.children.length === 1 && t.children.shift(), t.data = {
        ...t.data,
        hProperties: {
          ...(o = t.data) == null ? void 0 : o.hProperties,
          className: [`${nn}${Dm[u[1]]}`]
        }
      });
    });
  });
}
const Va = [
  "a",
  "b",
  "blockquote",
  "br",
  "code",
  "dd",
  "del",
  "details",
  "div",
  "dl",
  "dt",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "ins",
  "kbd",
  "li",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "var",
  "img"
], Pm = "__datusUserMessage__", wm = "__datusAssistantMessage__";
var Xu, Ku;
const Mm = {
  ...ot,
  tagNames: Va,
  attributes: {
    ...ot.attributes,
    div: [
      ...((Xu = ot.attributes) == null ? void 0 : Xu.div) ?? [],
      "data*",
      ["className", Pm, wm]
    ],
    // Or a callout loses the class that carries its hue.
    blockquote: [
      ...((Ku = ot.attributes) == null ? void 0 : Ku.blockquote) ?? [],
      ["className", new RegExp(`^${nn}`)]
    ]
  },
  strip: []
};
function Fm(e) {
  const t = [Xf, Rm];
  return e && t.unshift(Hm), t;
}
function Bm(e) {
  const t = [];
  return e && t.push(gm, [Om, Mm]), t;
}
function Hm() {
  return ((e, t) => {
    const n = t.toString();
    Fa(e, (r, u, i) => {
      if (u == null || [
        "paragraph",
        "text",
        "inlineCode",
        "code",
        "strong",
        "emphasis",
        "image",
        "link",
        "list",
        "listItem"
      ].includes(r.type) || !r.position)
        return !0;
      let a = n.slice(
        r.position.start.offset,
        r.position.end.offset
      );
      return r.type === "heading" && (a = `
${a}`), i.children[u] = {
        type: "text",
        value: a
      }, [Ma, u];
    });
  });
}
const Um = "_markdownContent_4tswo_7", vm = {
  markdownContent: Um
};
function zm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ym(e) {
  const {
    onExecuteSql: t,
    linkTarget: n = "_blank",
    onLinkClick: r,
    codeMaxHeight: u
  } = e;
  return {
    a: ({ node: i, children: a, ...o }) => {
      const l = typeof o.href == "string" ? o.href : "", c = zm(n, l);
      return /* @__PURE__ */ re.createElement(
        "a",
        {
          ...o,
          target: c,
          rel: c === "_blank" ? "noopener noreferrer" : void 0,
          onClick: (h) => {
            h.button === 0 && !h.metaKey && !h.ctrlKey && !h.shiftKey && !h.altKey && l && (r != null && r(l)) && h.preventDefault();
          }
        },
        a
      );
    },
    // A quote in chat prose is nearly always an aside — a prerequisite, a
    // caveat, a shortcut — so it reads as a remark rather than as a citation.
    // `remarkAlerts` puts the hue on the class; a bare `>` is neutral info.
    blockquote: ({ node: i, children: a }) => /* @__PURE__ */ re.createElement(fs, { type: qm(i), title: a }),
    // The step badges are drawn with a CSS counter, which knows nothing about a
    // list that starts anywhere but 1.
    ol: ({ node: i, children: a, depth: o, ordered: l, ...c }) => /* @__PURE__ */ re.createElement(
      "ol",
      {
        ...c,
        style: c.start ? { counterReset: `step ${c.start - 1}` } : void 0
      },
      a
    ),
    p: ({ node: i, children: a, ...o }) => {
      const l = re.Children.map(a, (c) => typeof c == "string" && zn.test(c) ? (zn.lastIndex = 0, /* @__PURE__ */ re.createElement(re.Fragment, null, Wm(c))) : c);
      return /* @__PURE__ */ re.createElement("p", { ...o }, l);
    },
    pre: ms({ onExecuteSql: t, maxHeight: u })
  };
}
function qm(e) {
  var r;
  const t = (r = e == null ? void 0 : e.properties) == null ? void 0 : r.className;
  if (!Array.isArray(t))
    return "info";
  const n = t.find(
    (u) => typeof u == "string" && u.startsWith(nn)
  );
  return (n == null ? void 0 : n.slice(nn.length)) || "info";
}
function Wm(e) {
  const t = [];
  let n = 0;
  for (const r of e.matchAll(zn)) {
    const [u, i, a] = r, o = r.index;
    o > n && t.push(e.slice(n, o));
    const l = ds[i], c = a.replace(/"/g, "");
    l && t.push(
      /* @__PURE__ */ re.createElement(
        hs,
        {
          key: `${l}-${o}`,
          type: l,
          name: c,
          darkBorder: !0
        }
      )
    ), n = o + u.length;
  }
  return n < e.length && t.push(e.slice(n)), t;
}
const jm = (e) => {
  const {
    className: t,
    style: n,
    messageRef: r,
    scrollRef: u,
    children: i,
    html: a = !1,
    limitedMarkdown: o = !1,
    components: l,
    isStreaming: c,
    onExecuteSql: h,
    onAddSelectionToChat: f,
    linkTarget: E,
    onLinkClick: m,
    codeMaxHeight: _
  } = e, A = ke.useRef(null), k = ke.useMemo(() => i ? i.replace(/\\n/g, `
`) : "", [i]), C = ke.useMemo(
    () => ({
      ...Ym({
        onExecuteSql: h,
        linkTarget: E,
        onLinkClick: m,
        codeMaxHeight: _
      }),
      ...l
    }),
    [h, E, m, _, l]
  );
  return /* @__PURE__ */ re.createElement(
    "div",
    {
      ref: A,
      className: cs(vm.markdownContent, t),
      style: n
    },
    /* @__PURE__ */ re.createElement(
      Mi,
      {
        components: C,
        allowedElements: Va,
        remarkPlugins: Fm(o),
        rehypePlugins: Bm(a)
      },
      k
    ),
    f && /* @__PURE__ */ re.createElement(
      o0,
      {
        containerRef: A,
        onAddToChat: f
      }
    )
  );
};
export {
  jm as MarkdownRender
};
