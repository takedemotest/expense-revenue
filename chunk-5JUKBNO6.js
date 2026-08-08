import { a as fe, b as T, f as V } from "@nf-internal/chunk-B5JBTEKH";
import { F as rn, G as on, H as he, I as ge, J as sn, K as an, a as I, b as m, c as en, s as le, w as nn, y as tn } from "@nf-internal/chunk-CTQL2M7D";
import { a as Z, b as W, d as de } from "@nf-internal/chunk-PZNONLPT";
import { BehaviorSubject as mt, Observable as vt, Subject as yt, Subscription as Dt } from "rxjs";
var me = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, un = new me("22.1.1"), It = (() => { let e = un.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${un.major}`}.angular.dev`; })(), go = `${It}/errors`, po = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", h = class extends Error {
    code;
    constructor(n, t) { super(Pe(n, t)), this.code = n; }
};
function Et(e) { return `NG0${Math.abs(e)}`; }
function Pe(e, n) { return `${Et(e)}${n ? ": " + n : ""}`; }
function l(e) { for (let n in e)
    if (e[n] === l)
        return n; throw Error(""); }
function mo(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function Tt(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(Tt).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function vo(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function yo(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var wt = l({ __forward_ref__: l });
function wn(e) { return e.__forward_ref__ = wn, e; }
function E(e) { return Nt(e) ? e() : e; }
function Nt(e) { return typeof e == "function" && e.hasOwnProperty(wt) && e.__forward_ref__ === wn; }
function Mt(e, n, t) { e != n && U(t, e, n, "=="); }
function Nn(e, n) { e == null && U(n, e, null, "!="); }
function U(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function P(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function Do(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function re(e) { return bt(e, Mn); }
function Io(e) { return re(e) !== null; }
function bt(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function _t(e) { let n = e?.[Mn] ?? null; return n || null; }
function cn(e) { return e && e.hasOwnProperty(dn) ? e[dn] : null; }
var Mn = l({ \u0275prov: l }), dn = l({ \u0275inj: l }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = P({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, ln;
function Eo(e) { U("setInjectorProfilerContext should never be called in production mode"); let n = ln; return ln = e, n; }
function bn(e) { return e && !!e.\u0275providers; }
var Ct = l({ \u0275cmp: l }), xt = l({ \u0275dir: l }), Rt = l({ \u0275pipe: l }), St = l({ \u0275mod: l }), fn = l({ \u0275fac: l }), To = l({ __NG_ELEMENT_ID__: l }), hn = l({ __NG_ENV_ID__: l });
function Ft(e) { return oe(e, "@NgModule"), e[St] || null; }
function wo(e) { let n = Ft(e); if (!n)
    throw new h(915, !1); return n; }
function _n(e) { return oe(e, "@Component"), e[Ct] || null; }
function kt(e) { return oe(e, "@Directive"), e[xt] || null; }
function Ot(e) { return oe(e, "@Pipe"), e[Rt] || null; }
function oe(e, n) { if (e == null)
    throw new h(-919, !1); }
function No(e) { let n = _n(e) || kt(e) || Ot(e); return n !== null && n.standalone; }
function Pt(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Mo(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Pt(e); }
var Cn = l({ ngErrorCode: l }), jt = l({ ngErrorMessage: l }), Lt = l({ ngTokenPath: l });
function At(e, n) { return xn("", -200, n); }
function Vt(e, n) { throw new h(-201, !1); }
function xn(e, n, t) { let r = new h(n, e); return r[Cn] = n, r[jt] = e, t && (r[Lt] = t), r; }
function $t(e) { return e[Cn]; }
var ve;
function Rn() { return ve; }
function M(e) { let n = ve; return ve = e, n; }
function Ht(e, n, t) { let r = re(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; Vt(e, ""); }
var bo = globalThis;
var qt = {}, C = qt, ye = "__NG_DI_FLAG__", De = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = J(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : C, r);
    }
    catch (o) {
        if (V(o))
            return o;
        throw o;
    } }
};
function Gt(e, n = 0) { let t = fe(); if (t === void 0)
    throw new h(-203, !1); if (t === null)
    return Ht(e, void 0, n); {
    let r = Ut(n), o = t.retrieve(e, r);
    if (V(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function k(e, n = 0) { return (Rn() || Gt)(E(e), n); }
function _o(e) { throw new h(202, !1); }
function p(e, n) { return k(e, J(n)); }
function J(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function Ut(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Ie(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = E(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new h(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let c = r[s], u = Bt(c);
            typeof u == "number" ? u === -1 ? o = c.token : i |= u : o = c;
        }
        n.push(k(o, i));
    }
    else
        n.push(k(r));
} return n; }
function Co(e, n) { return e[ye] = n, e.prototype[ye] = n, e; }
function Bt(e) { return e[ye]; }
function K(e, n) { let t = e.hasOwnProperty(fn); return t ? e[fn] : null; }
function xo(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function Ro(e) { return e.flat(Number.POSITIVE_INFINITY); }
function je(e, n) { e.forEach(t => Array.isArray(t) ? je(t, n) : n(t)); }
function So(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Fo(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function ko(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function Oo(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function Zt(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function Po(e, n, t) { let r = Sn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, Zt(e, r, n, t)), r; }
function jo(e, n) { let t = Sn(e, n); if (t >= 0)
    return e[t | 1]; }
function Sn(e, n) { return Wt(e, n, 1); }
function Wt(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << t];
    if (n === s)
        return i << t;
    s > n ? o = i : r = i + 1;
} return ~(o << t); }
var Lo = {}, Q = [], ie = new g(""), Fn = new g("", -1), kn = new g(""), X = class {
    get(n, t = C) { if (t === C) {
        let o = xn("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function On(e) { return { \u0275providers: e }; }
function Yt(e) { return On([{ provide: ie, multi: !0, useValue: e }]); }
function Jt(...e) { return { \u0275providers: Kt(!0, e), \u0275fromNgModule: !0 }; }
function Kt(e, ...n) { let t = [], r = new Set, o, i = s => { t.push(s); }; return je(n, s => { let c = s; Ee(c, i, [], r) && (o ||= [], o.push(c)); }), o !== void 0 && Pn(o, i), t; }
function Pn(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Le(o, i => { n(i, r); });
} }
function Ee(e, n, t, r) { if (e = E(e), !e)
    return !1; let o = null, i = cn(e), s = !i && _n(e); if (!i && !s) {
    let u = e.ngModule;
    if (i = cn(u), i)
        o = u;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let c = r.has(o); if (s) {
    if (c)
        return !1;
    if (r.add(o), s.dependencies) {
        let u = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let d of u)
            Ee(d, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !c) {
        r.add(o);
        let d;
        je(i.imports, f => { Ee(f, n, t, r) && (d ||= [], d.push(f)); }), d !== void 0 && Pn(d, n);
    }
    if (!c) {
        let d = K(o) || (() => new o);
        n({ provide: o, useFactory: d, deps: Q }, o), n({ provide: kn, useValue: o, multi: !0 }, o), n({ provide: ie, useValue: () => k(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !c) {
        let d = e;
        Le(u, f => { n(f, d); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Le(e, n) { for (let t of e)
    bn(t) && (t = t.\u0275providers), Array.isArray(t) ? Le(t, n) : n(t); }
var Qt = l({ provide: String, useValue: l });
function jn(e) { return e !== null && typeof e == "object" && Qt in e; }
function Xt(e) { return !!(e && e.useExisting); }
function zt(e) { return !!(e && e.useFactory); }
function Te(e) { return typeof e == "function"; }
function Ao(e) { return !!e.useClass; }
var er = new g(""), Y = {}, gn = {}, pe;
function Ln() { return pe === void 0 && (pe = new X), pe; }
var q = class {
}, z = class extends q {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, Ne(n, s => this.processProvider(s)), this.records.set(Fn, S(void 0, this)), o.has("environment") && this.records.set(q, S(void 0, this)); let i = this.records.get(er); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(kn, Q, { self: !0 })); }
    retrieve(n, t) { let r = J(t) || 0; try {
        return this.get(n, C, r);
    }
    catch (o) {
        if (V(o))
            return o;
        throw o;
    } }
    destroy() { $(this), this._destroyed = !0; let n = m(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), m(n);
    } }
    onDestroy(n) { return $(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { $(this); let t = T(this), r = M(void 0), o; try {
        return n();
    }
    finally {
        T(t), M(r);
    } }
    get(n, t = C, r) { if ($(this), n.hasOwnProperty(hn))
        return n[hn](this); let o = J(r), i, s = T(this), c = M(void 0); try {
        if (!(o & 4)) {
            let d = this.records.get(n);
            if (d === void 0) {
                let f = sr(n) && re(n);
                f && this.injectableDefInScope(f) ? d = S(we(n), Y) : d = null, this.records.set(n, d);
            }
            if (d != null)
                return this.hydrate(n, d, o);
        }
        let u = o & 2 ? Ln() : this.parent;
        return t = o & 8 && t === C ? null : t, u.get(n, t);
    }
    catch (u) {
        let d = $t(u);
        throw d === -200 || d === -201 ? new h(d, null) : u;
    }
    finally {
        M(c), T(s);
    } }
    resolveInjectorInitializers() { let n = m(null), t = T(this), r = M(void 0), o; try {
        let i = this.get(ie, Q, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        T(t), M(r), m(n);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(n) { n = E(n); let t = Te(n) ? n : E(n && n.provide), r = tr(n); if (!Te(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = S(void 0, Y, !0), o.factory = () => Ie(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = m(null); try {
        if (t.value === gn)
            throw At("");
        return t.value === Y && (t.value = gn, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && ir(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        m(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = E(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function we(e) { let n = re(e), t = n !== null ? n.factory : K(e); if (t !== null)
    return t; if (e instanceof g)
    throw new h(-204, !1); if (e instanceof Function)
    return nr(e); throw new h(-204, !1); }
function nr(e) { if (e.length > 0)
    throw new h(-204, !1); let t = _t(e); return t !== null ? () => t.factory(e) : () => new e; }
function tr(e) { if (jn(e))
    return S(void 0, e.useValue); {
    let n = rr(e);
    return S(n, Y);
} }
function rr(e, n, t) { let r; if (Te(e)) {
    let o = E(e);
    return K(o) || we(o);
}
else if (jn(e))
    r = () => E(e.useValue);
else if (zt(e))
    r = () => e.useFactory(...Ie(e.deps || []));
else if (Xt(e))
    r = (o, i) => k(E(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = E(e && (e.useClass || e.provide));
    if (or(e))
        r = () => new o(...Ie(e.deps));
    else
        return K(o) || we(o);
} return r; }
function $(e) { if (e.destroyed)
    throw new h(-205, !1); }
function S(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function or(e) { return !!e.deps; }
function ir(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function sr(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Ne(e, n) { for (let t of e)
    Array.isArray(t) ? Ne(t, n) : t && bn(t) ? Ne(t.\u0275providers, n) : n(t); }
function Vo(e, n) { let t; e instanceof z ? ($(e), t = e) : t = new De(e); let r, o = T(t), i = M(void 0); try {
    return n();
}
finally {
    T(o), M(i);
} }
function An() { return Rn() !== void 0 || fe() != null; }
function $o(e) { if (!An())
    throw new h(-203, !1); }
var Ae = 0, Ve = 1, v = 2, Me = 3, Ho = 4, ar = 5, qo = 6, ur = 7, Vn = 8, Go = 9, $n = 10, Uo = 11, Bo = 12, Zo = 13, Hn = 14, Wo = 15, Yo = 16, cr = 17, Jo = 18, Ko = 19, Qo = 20, F = 21, Xo = 22, be = 23, dr = 24, zo = 25, ei = 26, lr = 27, $e = 1, ni = 6, ti = 7, ri = 8, oi = 9, ii = 10;
function qn(e) { return Array.isArray(e) && typeof e[$e] == "object"; }
function Gn(e) { return Array.isArray(e) && e[$e] === !0; }
function si(e) { return (e.flags & 4) !== 0; }
function ai(e) { return e.componentOffset > -1; }
function ui(e) { return (e.flags & 1) === 1; }
function ci(e) { return !!e.template; }
function di(e) { return (e[v] & 512) !== 0; }
function li(e) { return (e.type & 16) === 16; }
function fi(e) { return (e[v] & 32) === 32; }
function Un(e) { return (e[v] & 256) === 256; }
function hi(e, n) { fr(e, n[Ve]); }
function fr(e, n) { hr(e); let t = n.data; for (let r = lr; r < t.length; r++)
    if (t[r] === e)
        return; U("This TNode does not belong to this TView."); }
function hr(e) { Nn(e, "TNode must be defined"), e && typeof e == "object" && e.hasOwnProperty("directiveStylingLast") || U("Not of type TNode, got: " + e); }
function gi(e) { Nn(e, "LView must be defined"), Mt(qn(e), !0, "Expecting LView"); }
var D = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e; })(D || {}), H, _e = "svg", Bn = "math", Zn = "", pn = "*", Ce = () => Object.create(null);
function gr() { return H || (H = Ce(), N(D.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), N(D.STYLE, void 0, [["*", ["style"]]]), N(D.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), N(D.URL, Bn, [["*", ["href", "xlink:href"]]]), N(D.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), N(D.URL, _e, [["a", ["href", "xlink:href"]]]), N(D.ATTRIBUTE_NO_BINDING, _e, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), N(D.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]]]), H); }
function N(e, n, t) { let r = n ?? Zn; for (let [o, i] of t) {
    let s = o.toLowerCase();
    for (let c of i) {
        let u = c.toLowerCase(), d = H[u] ??= Ce(), f = d[r] ??= Ce();
        f[s] = e;
    }
} }
function pi(e, n, t) { let o = gr()[n.toLowerCase()]; if (!o)
    return D.NONE; let i = e.toLowerCase(), s; if (t) {
    let c = o[t];
    c && (s = c[i] ?? c[pn]);
} if (s === void 0) {
    let c = o[Zn];
    c && (s = c[i] ?? c[pn]);
} return s ?? D.NONE; }
function He(e) { for (; Array.isArray(e);)
    e = e[Ae]; return e; }
function mi(e) { for (; Array.isArray(e);) {
    if (typeof e[$e] == "object")
        return e;
    e = e[Ae];
} return null; }
function vi(e, n) { return He(n[e]); }
function yi(e, n) { return He(n[e.index]); }
function Di(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? He(n[t]) : null; }
function pr(e, n) { return e.data[n]; }
function Ii(e, n) { return e[n]; }
function Ei(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function Ti(e, n) { let t = n[e]; return qn(t) ? t : t[Ae]; }
function wi(e) { return (e[v] & 4) === 4; }
function Wn(e) { return (e[v] & 128) === 128; }
function Ni(e) { return Gn(e[Me]); }
function Mi(e, n) { return n == null ? null : e[n]; }
function bi(e) { e[cr] = 0; }
function _i(e) { e[v] & 1024 || (e[v] |= 1024, Wn(e) && qe(e)); }
function mr(e, n) { for (; e > 0;)
    n = n[Hn], e--; return n; }
function vr(e) { return !!(e[v] & 9216 || e[dr]?.dirty); }
function Ci(e) { e[$n].changeDetectionScheduler?.notify(8), e[v] & 64 && (e[v] |= 1024), vr(e) && qe(e); }
function qe(e) { e[$n].changeDetectionScheduler?.notify(0); let n = mn(e); for (; n !== null && !(n[v] & 8192 || (n[v] |= 8192, !Wn(n)));)
    n = mn(n); }
function yr(e, n) { if (Un(e))
    throw new h(911, !1); e[F] === null && (e[F] = []), e[F].push(n); }
function Dr(e, n) { if (e[F] === null)
    return; let t = e[F].indexOf(n); t !== -1 && e[F].splice(t, 1); }
function mn(e) { let n = e[Me]; return Gn(n) ? n[Me] : n; }
function Ir(e) { return e[ur] ??= []; }
function Er(e) { return e.cleanup ??= []; }
function xi(e, n, t, r) { let o = Ir(n); o.push(t), e.firstCreatePass && Er(e).push(r, o.length - 1); }
var a = { lFrame: Kn(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var xe = !1;
function Ri() { return a.lFrame.elementDepthCount; }
function Si() { a.lFrame.elementDepthCount++; }
function Fi() { a.lFrame.elementDepthCount--; }
function ki() { return a.bindingsEnabled; }
function Oi() { return a.skipHydrationRootTNode !== null; }
function Pi(e) { return a.skipHydrationRootTNode === e; }
function ji() { a.bindingsEnabled = !0; }
function Li(e) { a.skipHydrationRootTNode = e; }
function Ai() { a.bindingsEnabled = !1; }
function Vi() { a.skipHydrationRootTNode = null; }
function Yn() { return a.lFrame.lView; }
function $i() { return a.lFrame.tView; }
function Hi(e) { return a.lFrame.contextLView = e, e[Vn]; }
function qi(e) { return a.lFrame.contextLView = null, e; }
function Tr() { let e = wr(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function wr() { return a.lFrame.currentTNode; }
function Gi() { let e = a.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function Ui(e, n) { let t = a.lFrame; t.currentTNode = e, t.isParent = n; }
function Bi() { return a.lFrame.isParent; }
function Zi() { a.lFrame.isParent = !1; }
function Wi() { return a.lFrame.contextLView; }
function Yi() { return xe; }
function vn(e) { let n = xe; return xe = e, n; }
function Ji() { let e = a.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Ki() { return a.lFrame.bindingIndex; }
function Qi(e) { return a.lFrame.bindingIndex = e; }
function Xi() { return a.lFrame.bindingIndex++; }
function zi(e) { let n = a.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function es() { return a.lFrame.inI18n; }
function ns(e) { a.lFrame.inI18n = e; }
function ts(e, n) { let t = a.lFrame; t.bindingIndex = t.bindingRootIndex = e, Nr(n); }
function rs() { return a.lFrame.currentDirectiveIndex; }
function Nr(e) { a.lFrame.currentDirectiveIndex = e; }
function os(e) { let n = a.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function is() { return a.lFrame.currentQueryIndex; }
function ss(e) { a.lFrame.currentQueryIndex = e; }
function Mr(e) { let n = e[Ve]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[ar] : null; }
function as(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = Mr(i), o === null || (i = i[Hn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = a.lFrame = Jn(); return r.currentTNode = n, r.lView = e, !0; }
function us(e) { let n = Jn(), t = e[Ve]; a.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function Jn() { let e = a.lFrame, n = e === null ? null : e.child; return n === null ? Kn(e) : n; }
function Kn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function Qn() { let e = a.lFrame; return a.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var cs = Qn;
function ds() { let e = Qn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function ls(e) { return (a.lFrame.contextLView = mr(e, a.lFrame.contextLView))[Vn]; }
function fs() { return a.lFrame.selectedIndex; }
function hs(e) { a.lFrame.selectedIndex = e; }
function gs() { let e = a.lFrame; return pr(e.tView, e.selectedIndex); }
function ps() { a.lFrame.currentNamespace = _e; }
function ms() { a.lFrame.currentNamespace = Bn; }
function vs() { br(); }
function br() { a.lFrame.currentNamespace = null; }
function ys() { return a.lFrame.currentNamespace; }
var Xn = !0;
function Ds() { return Xn; }
function Is(e) { Xn = e; }
function Es() { let e, n; return { promise: new Promise((r, o) => { e = r, n = o; }), resolve: e, reject: n }; }
function yn(e, n = null, t = null, r) { let o = _r(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function _r(e, n = null, t = null, r, o = new Set) { let i = [t || Q, Jt(e)], s; return new z(i, n || Ln(), s || null, o); }
var Cr = new Set;
function Ts() { return Cr; }
var G = class e {
    static THROW_IF_NOT_FOUND = C;
    static NULL = new X;
    static create(n, t) { if (Array.isArray(n))
        return yn({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return yn({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = P({ token: e, providedIn: "any", factory: () => k(Fn) });
    static __NG_ELEMENT_ID__ = -1;
}, Ge = new g(""), w = class {
    static __NG_ELEMENT_ID__ = xr;
    static __NG_ENV_ID__ = n => n;
}, ee = class extends w {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return Un(this._lView); }
    onDestroy(n) { let t = this._lView; return yr(t, n), () => Dr(t, n); }
};
function xr() { return new ee(Yn()); }
var Rr = !1, Sr = new g(""), zn = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new mt(!1);
    debugTaskTracker = p(Sr, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new vt(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), this.debugTaskTracker?.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.debugTaskTracker?.remove(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Re = class extends yt {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(n = !1) { super(), this.__isAsync = n, An() && (this.destroyRef = p(w, { optional: !0 }) ?? void 0, this.pendingTasks = p(zn, { optional: !0 }) ?? void 0); }
    emit(n) { let t = m(null); try {
        super.next(n);
    }
    finally {
        m(t);
    } }
    subscribe(n, t, r) { let o = n, i = t || (() => null), s = r; if (n && typeof n == "object") {
        let u = n;
        o = u.next?.bind(u), i = u.error?.bind(u), s = u.complete?.bind(u);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let c = super.subscribe({ next: o, error: i, complete: s }); return n instanceof Dt && n.add(c), c; }
    wrapInTimeout(n) { return t => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        n(t);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, b = Re;
function ne(...e) { }
function Fr(e) { let n, t; function r() { e = ne; try {
    t !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(t), n !== void 0 && clearTimeout(n);
}
catch { } } return n = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (t = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function ws(e) { return queueMicrotask(() => e()), () => { e = ne; }; }
var Ue = "isAngularZone", Dn = Ue + "_ID", kr = 0, Se = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new b(!1);
    onMicrotaskEmpty = new b(!1);
    onStable = new b(!1);
    onError = new b(!1);
    constructor(n) { let { enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = Rr } = n; if (typeof Zone > "u")
        throw new h(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, jr(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Ue) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new h(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new h(909, !1); }
    run(n, t, r) { return this._inner.run(n, t, r); }
    runTask(n, t, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, n, Or, ne, ne); try {
        return i.runTask(s, t, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(n, t, r) { return this._inner.runGuarded(n, t, r); }
    runOutsideAngular(n) { return this._outer.run(n); }
}, Or = {};
function Be(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function Pr(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function n() { Fr(() => { e.callbackScheduled = !1, Fe(e), e.isCheckStableRunning = !0, Be(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { n(); }) : e._outer.run(() => { n(); }), Fe(e); }
function jr(e) { let n = () => { Pr(e); }, t = kr++; e._inner = e._inner.fork({ name: "angular", properties: { [Ue]: !0, [Dn]: t, [Dn + t]: !0 }, onInvokeTask: (r, o, i, s, c, u) => { if (Lr(u))
        return r.invokeTask(i, s, c, u); try {
        return In(e), r.invokeTask(i, s, c, u);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && n(), En(e);
    } }, onInvoke: (r, o, i, s, c, u, d) => { try {
        return In(e), r.invoke(i, s, c, u, d);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !Ar(u) && n(), En(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Fe(e), Be(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Fe(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function In(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function En(e) { e._nesting--, Be(e); }
var Tn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new b;
    onMicrotaskEmpty = new b;
    onStable = new b;
    onError = new b;
    run(n, t, r) { return n.apply(t, r); }
    runGuarded(n, t, r) { return n.apply(t, r); }
    runOutsideAngular(n) { return n(); }
    runTask(n, t, r, o) { return n.apply(t, r); }
};
function Lr(e) { return et(e, "__ignore_ng_zone__"); }
function Ar(e) { return et(e, "__scheduler_tick__"); }
function et(e, n) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[n] === !0; }
var O = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, nt = new g("", { factory: () => { let e = p(Se), n = p(q), t; return r => { e.runOutsideAngular(() => { n.destroyed && !t ? setTimeout(() => { throw r; }) : (t ??= n.get(O), t.handleError(r)); }); }; } }), Ns = { provide: ie, useValue: () => { let e = p(O, { optional: !0 }); }, multi: !0 }, Vr = new g("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = p(Ge).defaultView; if (!e)
        return; let n = p(nt), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), p(w).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function Ms() { return On([Yt(() => { p(Vr); })]); }
function bs(e) { return null; }
function x(e, n) { let [t, r, o] = tn(e, n?.equal), i = t, s = i[I]; return i.set = r, i.update = o, i.asReadonly = se.bind(i), i; }
function se() { let e = this[I]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[I] = e, e.readonlyFn = n;
} return e.readonlyFn; }
var $r = new g("", { factory: () => Hr }), Hr = "ng";
var _s = new g(""), Cs = new g("", { providedIn: "platform", factory: () => "unknown" }), xs = new g(""), Rs = new g("", { factory: () => p(Ge).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), qr = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Ss = new g("", { factory: () => qr });
function Fs(e) { return e; }
var tt = (() => { class e {
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => { let t = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (t.store = Gr(p(Ge), p($r))), t; } });
    store = {};
    onSerializeCallbacks = {};
    get(t, r) { return this.store[t] !== void 0 ? this.store[t] : r; }
    set(t, r) { this.store[t] = r; }
    remove(t) { delete this.store[t]; }
    hasKey(t) { return this.store.hasOwnProperty(t); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(t, r) { this.onSerializeCallbacks[t] = r; }
    toJson() { for (let t in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(t))
            try {
                this.store[t] = this.onSerializeCallbacks[t]();
            }
            catch (r) {
                console.warn("Exception in onSerialize callback: ", r);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function Gr(e, n) { let t = e.getElementById(n + "-state"); if (t?.tagName === "SCRIPT" && t.textContent)
    try {
        return JSON.parse(t.textContent);
    }
    catch (r) {
        console.warn("Exception while restoring TransferState for app " + n, r);
    } return {}; }
function ks(e, n) { if (en() !== null)
    throw new h(-602, !1); }
var rt = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Ur;
} return e; })();
function Ur() { return new rt(Yn(), Tr()); }
var te = class {
}, Os = new g("", { factory: () => !0 }), Ps = new g("", { factory: () => !1 }), js = new g(""), Br = (() => { class e {
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new ke });
} return e; })(), ke = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
}, Oe = class {
    [I];
    constructor(n) { this[I] = n; }
    destroy() { this[I].destroy(); }
};
function ot(e, n) { let t = n?.injector ?? p(G), r = n?.manualCleanup !== !0 ? t.get(w) : null, o, i = t.get(rt, null, { optional: !0 }), s = t.get(te); return i !== null ? (o = Yr(i.view, s, e), r instanceof ee && r._lView === i.view && (r = null)) : o = Jr(e, t.get(Br), s), o.injector = t, r !== null && (o.onDestroyFns = [r.onDestroy(() => o.destroy())]), new Oe(o); }
var it = W(Z({}, rn), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = vn(!1); try {
        on(this);
    }
    finally {
        vn(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = m(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], m(e);
    } } }), Zr = W(Z({}, it), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (le(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), Wr = W(Z({}, it), { consumerMarkedDirty() { this.view[v] |= 8192, qe(this.view), this.notifier.notify(13); }, destroy() { if (le(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[be]?.delete(this); } });
function Yr(e, n, t) { let r = Object.create(Wr); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = st(r, t), e[be] ??= new Set, e[be].add(r), r.consumerMarkedDirty(r), r; }
function Jr(e, n, t) { let r = Object.create(Zr); return r.fn = st(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function st(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
function Ze(e) { return typeof e == "function" && e[I] !== void 0; }
function Ls(e) { return Ze(e) && typeof e.set == "function"; }
var at = (() => { class e {
    internalPendingTasks = p(zn);
    scheduler = p(te);
    errorHandler = p(nt);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); try {
        t().catch(this.errorHandler).finally(r);
    }
    catch (o) {
        this.errorHandler(o), r();
    } }
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
var ut = class {
    destroyed = !1;
    listeners = null;
    errorHandler = p(O, { optional: !0 });
    isEmitting = !1;
    hasNullListeners = !1;
    destroyRef = p(w);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new h(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners ? this.listeners.indexOf(n) : -1; t > -1 && (this.isEmitting ? (this.hasNullListeners = !0, this.listeners[t] = null) : this.listeners.splice(t, 1)); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(Pe(953, !1));
        return;
    } if (this.listeners === null)
        return; this.isEmitting = !0; let t = m(null); try {
        for (let r of this.listeners)
            try {
                r !== null && r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        this.hasNullListeners && (this.hasNullListeners = !1, this.listeners && Kr(this.listeners)), m(t), this.isEmitting = !1;
    } }
};
function Kr(e) { let n = e.length - 1; for (; n > -1;)
    e[n] === null && e.splice(n, 1), n--; }
function Us(e) { return e.destroyRef; }
var Qr = new g("");
function R(e, n) { return nn(e, n?.equal); }
function y(e) { return an(e); }
var We = class extends Error {
    dependency;
    constructor(n) { super("Dependency error", { cause: n.error() }), this.name = "ResourceDependencyError", this.dependency = n; }
}, j = class e extends Error {
    _brand;
    constructor(n) { super(n); }
    static IDLE = new e("IDLE");
    static LOADING = new e("LOADING");
}, Xr = e => e;
function ct(e, n) { if (typeof e == "function") {
    let t = he(e, Xr, n?.equal);
    return dt(t, n?.debugName, n?.set);
}
else {
    let t = he(e.source, e.computation, e.equal);
    return dt(t, e.debugName, e.set);
} }
function dt(e, n, t) { let r = e[I], o = e; if (t !== void 0) {
    let i = s => ge(r, s);
    o.set = s => t(s, i), o.update = s => t(s(y(e)), i);
}
else
    o.set = i => ge(r, i), o.update = i => sn(r, i); return o.asReadonly = se.bind(e), o; }
function Bs(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Je(t, eo(e), e.defaultValue, e.equal ? zr(e.equal) : void 0, e.debugName, e.injector ?? p(G), e.id); }
var Ye = class {
    value;
    isLoading;
    constructor(n, t) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = se, this.isLoading = R(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = R(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isValueDefined = R(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= R(() => { let n = this.status(); return n === "error" ? { status: "error", error: this.error() } : { status: n, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Je = class extends Ye {
    loaderFn;
    equal;
    debugName;
    transferCacheKey;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    transferState;
    constructor(n, t, r, o, i, s, c, u) { if (io())
        throw so(); super(R(() => { let f = this.state().stream?.(); if (!f || this.state().status === "loading" && this.error())
        return r; if (!ae(f))
        throw new Qe(this.error()); return f.value; }, { equal: o }), i), this.loaderFn = t, this.equal = o, this.debugName = i, this.transferCacheKey = c; let d = s.get(Qr, void 0, { optional: !0 }) ?? { isActive: !1 }; this.transferState = s.get(tt, void 0, { optional: !0 }) ?? void 0, this.extRequest = ct(() => { try {
        return ht(!0), { request: n(oo), reload: 0 };
    }
    catch (f) {
        return gt(f), f === j.IDLE ? { status: "idle", reload: 0 } : f === j.LOADING ? { status: "loading", reload: 0 } : { error: f, reload: 0 };
    }
    finally {
        ht(!1);
    } }, void 0), this.state = ct({ source: this.extRequest, computation: (f, L) => { let { request: B, status: A, error: ze } = f, _; if (ze)
            A = "resolved", _ = x({ error: Ke(ze) }, void 0);
        else if (!A)
            if (L)
                A = B === void 0 ? "idle" : "loading", L.value.extRequest.request === B && (_ = L.value.stream);
            else {
                let ue = this.transferState, ce = this.transferCacheKey;
                d.isActive && ce && ue && B !== void 0 && ue.hasKey(ce) && (_ = x({ value: ue.get(ce, r) }, void 0)), _ || (_ = u?.(f.request)), u = void 0, A = B === void 0 ? "idle" : _ ? "resolved" : "loading";
            } return { extRequest: f, status: A, previousStatus: L ? ft(L.value) : "idle", stream: _ }; } }), this.effectRef = ot(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(at), this.unregisterOnDestroy = s.get(w).onDestroy(() => this.destroy()), this.status = R(() => ft(this.state()), void 0), this.error = R(() => { let f = this.state().stream?.(); return f && !ae(f) ? f.error : void 0; }, void 0); }
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: x({ value: n }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return de(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = y(() => this.loaderFn({ params: n.request, abortSignal: i, previous: { status: r } })), c = () => i.aborted || y(this.extRequest) !== n;
        if (Ze(s)) {
            if (c())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: s });
            let u = y(s);
            typeof ngServerMode < "u" && ngServerMode && lt(u, this.transferCacheKey, this.transferState);
        }
        else {
            let u = yield s;
            if (c())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
            let d = u ? y(u) : void 0;
            typeof ngServerMode < "u" && ngServerMode && lt(d, this.transferCacheKey, this.transferState);
        }
    }
    catch (s) {
        if (gt(s), i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: x({ error: Ke(s) }, void 0) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function lt(e, n, t) { n && t && e && ae(e) && t.set(n, e.value); }
function zr(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function eo(e) { return no(e) ? e.stream : n => de(null, null, function* () { try {
    return x({ value: yield e.loader(n) }, void 0);
}
catch (t) {
    return x({ error: Ke(t) }, void 0);
} }); }
function no(e) { return !!e.stream; }
function ft(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return ae(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function ae(e) { return e.error === void 0; }
function Ke(e) { return to(e) ? e : new Xe(e); }
function to(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Qe = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Xe = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
function ro(e) { switch (e.status()) {
    case "idle": throw j.IDLE;
    case "error": throw new We(e);
    case "loading":
    case "reloading": throw j.LOADING;
} return e.value(); }
var oo = { chain: ro }, pt = !1;
function io() { return pt; }
function ht(e) { pt = e; }
function so() { return new h(992, !1); }
function gt(e) { if (e instanceof h && e.code === 992)
    throw e; }
export { me as a, un as b, It as c, po as d, h as e, Pe as f, l as g, mo as h, Tt as i, vo as j, yo as k, wn as l, E as m, Nt as n, Mt as o, U as p, P as q, Do as r, re as s, Io as t, cn as u, Mn as v, dn as w, g as x, Eo as y, bn as z, Ct as A, xt as B, Rt as C, St as D, fn as E, To as F, Ft as G, wo as H, _n as I, kt as J, Ot as K, No as L, Pt as M, Mo as N, At as O, Vt as P, M as Q, Ht as R, bo as S, k as T, _o as U, p as V, J as W, Co as X, K as Y, xo as Z, Ro as _, je as $, So as aa, Fo as ba, ko as ca, Oo as da, Zt as ea, Po as fa, jo as ga, Sn as ha, Lo as ia, Q as ja, ie as ka, Fn as la, kn as ma, X as na, On as oa, Yt as pa, Jt as qa, Kt as ra, Ee as sa, Te as ta, Ao as ua, er as va, Ln as wa, q as xa, z as ya, rr as za, Vo as Aa, An as Ba, $o as Ca, Ae as Da, Ve as Ea, v as Fa, Me as Ga, Ho as Ha, ar as Ia, qo as Ja, ur as Ka, Vn as La, Go as Ma, $n as Na, Uo as Oa, Bo as Pa, Zo as Qa, Hn as Ra, Wo as Sa, Yo as Ta, cr as Ua, Jo as Va, Ko as Wa, Qo as Xa, F as Ya, Xo as Za, be as _a, dr as $a, zo as ab, ei as bb, lr as cb, ni as db, ti as eb, ri as fb, oi as gb, ii as hb, qn as ib, Gn as jb, si as kb, ai as lb, ui as mb, ci as nb, di as ob, li as pb, fi as qb, Un as rb, hi as sb, hr as tb, gi as ub, D as vb, _e as wb, Bn as xb, pi as yb, He as zb, mi as Ab, vi as Bb, yi as Cb, Di as Db, pr as Eb, Ii as Fb, Ei as Gb, Ti as Hb, wi as Ib, Wn as Jb, Ni as Kb, Mi as Lb, bi as Mb, _i as Nb, mr as Ob, vr as Pb, Ci as Qb, qe as Rb, yr as Sb, Dr as Tb, mn as Ub, Ir as Vb, Er as Wb, xi as Xb, Ri as Yb, Si as Zb, Fi as _b, ki as $b, Oi as ac, Pi as bc, ji as cc, Li as dc, Ai as ec, Vi as fc, Yn as gc, $i as hc, Hi as ic, qi as jc, Tr as kc, wr as lc, Gi as mc, Ui as nc, Bi as oc, Zi as pc, Wi as qc, Yi as rc, vn as sc, Ji as tc, Ki as uc, Qi as vc, Xi as wc, zi as xc, es as yc, ns as zc, ts as Ac, rs as Bc, Nr as Cc, os as Dc, is as Ec, ss as Fc, as as Gc, us as Hc, cs as Ic, ds as Jc, ls as Kc, fs as Lc, hs as Mc, gs as Nc, ps as Oc, ms as Pc, vs as Qc, ys as Rc, Ds as Sc, Is as Tc, Es as Uc, yn as Vc, _r as Wc, Ts as Xc, G as Yc, Ge as Zc, w as _c, Rr as $c, Sr as ad, zn as bd, b as cd, Fr as dd, ws as ed, Dn as fd, Se as gd, Tn as hd, O as id, nt as jd, Ns as kd, Ms as ld, bs as md, x as nd, se as od, $r as pd, _s as qd, Cs as rd, xs as sd, Rs as td, qr as ud, Ss as vd, Fs as wd, tt as xd, Gr as yd, ks as zd, rt as Ad, te as Bd, Os as Cd, Ps as Dd, js as Ed, Br as Fd, Oe as Gd, ot as Hd, Ze as Id, Ls as Jd, at as Kd, ut as Ld, Us as Md, Qr as Nd, R as Od, y as Pd, We as Qd, j as Rd, ct as Sd, Bs as Td, Je as Ud, Ke as Vd, Qe as Wd, ro as Xd, io as Yd, ht as Zd, so as _d, gt as $d };
/*! Bundled license information:

@angular/core/fesm2022/_pending_tasks-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
  (**
   * @license Angular v22.1.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
