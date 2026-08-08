var Be = Object.defineProperty, Ve = Object.defineProperties;
var je = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable;
var re = (n, r, e) => r in n ? Be(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, b = (n, r) => { for (var e in r ||= {})
    Fe.call(r, e) && re(n, e, r[e]); if (ne)
    for (var e of ne(r))
        $e.call(r, e) && re(n, e, r[e]); return n; }, oe = (n, r) => Ve(n, je(r));
var F = (n, r, e) => new Promise((t, o) => { var s = c => { try {
    a(e.next(c));
}
catch (d) {
    o(d);
} }, i = c => { try {
    a(e.throw(c));
}
catch (d) {
    o(d);
} }, a = c => c.done ? t(c.value) : Promise.resolve(c.value).then(s, i); a((e = e.apply(n, r)).next()); });
import { \u0275DomAdapter as rt, \u0275setRootDomAdapter as ot, \u0275parseCookieValue as st, \u0275getDOM as ge, DOCUMENT as ve, CommonModule as it, \u0275PLATFORM_BROWSER_ID as at } from "@angular/common";
import * as g from "@angular/core";
import { \u0275global as v, \u0275RuntimeError as ct, InjectionToken as dn, ApplicationModule as lt, \u0275INJECTOR_SCOPE as dt, ErrorHandler as ye, \u0275SHARED_STYLES_HOST as fe, RendererFactory2 as ut, \u0275TESTABILITY_GETTER as J, NgZone as pe, TestabilityRegistry as he, Testability as X, \u0275TESTABILITY as ft, \u0275internalCreateApplication as Ee, createPlatformFactory as pt, platformCore as ht, PLATFORM_ID as mt, PLATFORM_INITIALIZER as gt, \u0275USE_PENDING_TASKS as vt, \u0275resolveComponentResources as un, \u0275setDocument as yt } from "@angular/core";
import { DOCUMENT as Y, \u0275getDOM as ze } from "@angular/common";
import * as l from "@angular/core";
import { InjectionToken as K, \u0275RuntimeError as z, APP_ID as Z, CSP_NONCE as ce, PLATFORM_ID as Ge, makeEnvironmentProviders as Ye, ViewEncapsulation as E, \u0275SHARED_STYLES_HOST as Ke, \u0275TracingService as Ze, RendererStyleFlags2 as N, \u0275allLeavingAnimations as We } from "@angular/core";
var S = class {
    _doc;
    constructor(r) { this._doc = r; }
    manager;
}, _ = (() => { class n extends S {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, o, s) { return e.addEventListener(t, o, s), () => this.removeEventListener(e, t, o, s); }
    removeEventListener(e, t, o, s) { return e.removeEventListener(t, o, s); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(Y)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), D = new K(""), k = (() => { class n {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let o = e.filter(i => !(i instanceof _)); this._plugins = o.slice().reverse(); let s = e.find(i => i instanceof _); s && this._plugins.push(s); }
    addEventListener(e, t, o, s) { return this._findPluginFor(t).addEventListener(e, t, o, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new z(-5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(D), l.\u0275\u0275inject(l.NgZone)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), L = "ng-app-id";
function se(n) { for (let r of n)
    r.remove(); }
function ie(n, r) { let e = r.createElement("style"); return e.textContent = n, e; }
function Je(n, r, e, t) { let o = n.head?.querySelectorAll(`style[${L}="${r}"],link[${L}="${r}"]`); if (!o || o.length === 0)
    return !1; for (let s of o)
    s.removeAttribute(L), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); return !0; }
function G(n, r) { let e = r.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e; }
var U = (() => { class n {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, o, s = {}) { this.doc = e, this.appId = t, this.nonce = o, Je(e, t, this.inline, this.external) && this.hosts.add(e.head); }
    addStyles(e, t) { for (let o of e)
        this.addUsage(o, this.inline, ie); t?.forEach(o => this.addUsage(o, this.external, G)); }
    removeStyles(e, t) { for (let o of e)
        this.removeUsage(o, this.inline); t?.forEach(o => this.removeUsage(o, this.external)); }
    addUsage(e, t, o) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, o(e, this.doc))) }); }
    removeUsage(e, t) { let o = t.get(e); o && (o.usage--, o.usage <= 0 && (se(o.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        se(e); this.hosts.clear(); }
    addHost(e) { if (!this.hosts.has(e)) {
        this.hosts.add(e);
        for (let [t, { elements: o }] of this.inline)
            o.push(this.addElement(e, ie(t, this.doc)));
        for (let [t, { elements: o }] of this.external)
            o.push(this.addElement(e, G(t, this.doc)));
    } }
    removeHost(e) { this.hosts.delete(e); for (let t of [...this.inline.values(), ...this.external.values()]) {
        let o = [];
        for (let s of t.elements)
            s.parentNode === e ? s.remove() : o.push(s);
        t.elements = o;
    } }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(L, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(Y), l.\u0275\u0275inject(Z), l.\u0275\u0275inject(ce, 8), l.\u0275\u0275inject(Ge)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), $ = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, W = /%COMP%/g;
var le = "%COMP%", Xe = `_nghost-${le}`, qe = `_ngcontent-${le}`, Qe = !0, de = new K("", { factory: () => Qe }), x = new K("");
function et(n) { return Ye([{ provide: x, useFactory: r => `${n ?? r}_`, deps: [Z] }]); }
function tt(n) { return qe.replace(W, n); }
function nt(n) { return Xe.replace(W, n); }
function ue(n, r) { return r.map(e => e.replace(W, n)); }
var B = (() => { class n {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    cssVarNamespace;
    constructor(e, t, o, s, i, a, c = null, d = null, u = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = a, this.nonce = c, this.tracingService = d, this.cssVarNamespace = u ?? "", this.defaultRenderer = new M(e, i, a, this.tracingService, this.cssVarNamespace); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === E.ShadowDom || t.encapsulation === E.ExperimentalIsolatedShadowDom) && (t = oe(b({}, t), { encapsulation: E.Emulated })); let o = this.getOrCreateRenderer(e, t); return o instanceof H ? o.applyToHost(e) : o instanceof R && o.applyStyles(), o; }
    getOrCreateRenderer(e, t) { let o = this.rendererByCompId, s = o.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, c = this.eventManager, d = this.sharedStylesHost, u = this.removeStylesOnCompDestroy, h = this.tracingService;
        switch (t.encapsulation) {
            case E.Emulated:
                s = new H(c, d, t, this.appId, u, i, a, h, this.cssVarNamespace);
                break;
            case E.ShadowDom: return new P(c, e, t, i, a, this.nonce, h, this.cssVarNamespace, d);
            case E.ExperimentalIsolatedShadowDom: return new P(c, e, t, i, a, this.nonce, h, this.cssVarNamespace);
            default:
                s = new R(c, d, t, u, i, a, h, this.cssVarNamespace);
                break;
        }
        o.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(k), l.\u0275\u0275inject(Ke), l.\u0275\u0275inject(Z), l.\u0275\u0275inject(de), l.\u0275\u0275inject(Y), l.\u0275\u0275inject(l.NgZone), l.\u0275\u0275inject(ce), l.\u0275\u0275inject(Ze, 8), l.\u0275\u0275inject(x, 8)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), M = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    cssVarNamespace;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, o, s = "") { this.eventManager = r, this.doc = e, this.ngZone = t, this.tracingService = o, this.cssVarNamespace = s; }
    destroy() { }
    destroyNode = null;
    createElement(r, e) { return e ? this.doc.createElementNS($[e] || e, r) : this.doc.createElement(r); }
    createComment(r) { return this.doc.createComment(r); }
    createText(r) { return this.doc.createTextNode(r); }
    appendChild(r, e) { (ae(r) ? r.content : r).appendChild(e); }
    insertBefore(r, e, t) { r && (ae(r) ? r.content : r).insertBefore(e, t); }
    removeChild(r, e) { e.remove(); }
    selectRootElement(r, e) { let t = typeof r == "string" ? this.doc.querySelector(r) : r; if (!t)
        throw new z(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(r) { return r.parentNode; }
    nextSibling(r) { return r.nextSibling; }
    setAttribute(r, e, t, o) { if (o) {
        e = o + ":" + e;
        let s = $[o];
        s ? r.setAttributeNS(s, e, t) : r.setAttribute(e, t);
    }
    else
        r.setAttribute(e, t); }
    removeAttribute(r, e, t) { if (t) {
        let o = $[t];
        o ? r.removeAttributeNS(o, e) : r.removeAttribute(`${t}:${e}`);
    }
    else
        r.removeAttribute(e); }
    addClass(r, e) { r.classList.add(e); }
    removeClass(r, e) { r.classList.remove(e); }
    setStyle(r, e, t, o) { let s = e.startsWith("--"); s && (e = e.replace("%NS%", this.cssVarNamespace)), s || o & (N.DashCase | N.Important) ? r.style.setProperty(e, t, o & N.Important ? "important" : "") : r.style[e] = t; }
    removeStyle(r, e, t) { let o = e.startsWith("--"); o && (e = e.replace("%NS%", this.cssVarNamespace)), o || t & N.DashCase ? r.style.removeProperty(e) : r.style[e] = ""; }
    setProperty(r, e, t) { r != null && (r[e] = t); }
    setValue(r, e) { r.nodeValue = e; }
    listen(r, e, t, o) { if (typeof r == "string" && (r = ze().getGlobalEventTarget(this.doc, r), !r))
        throw new z(-5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(r, e, s)), this.eventManager.addEventListener(r, e, s, o); }
    decoratePreventDefault(r) { return e => { if (e === "__ngUnwrap__")
        return r; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => r(e)) : r(e)) === !1 && e.preventDefault(); }; }
};
function ae(n) { return n.tagName === "TEMPLATE" && n.content !== void 0; }
var P = class extends M {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(r, e, t, o, s, i, a, c, d) { super(r, o, s, a, c), this.hostEl = e, this.sharedStylesHost = d, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let u = t.styles; u = ue(t.id, u).map(m => m.replace(/%NS%/g, c)); for (let m of u) {
        let y = document.createElement("style");
        i && y.setAttribute("nonce", i), y.textContent = m, this.shadowRoot.appendChild(y);
    } let h = t.getExternalStyles?.(); if (h)
        for (let m of h) {
            let y = G(m, o);
            i && y.setAttribute("nonce", i), this.shadowRoot.appendChild(y);
        } }
    nodeOrShadowRoot(r) { return r === this.hostEl ? this.shadowRoot : r; }
    appendChild(r, e) { return super.appendChild(this.nodeOrShadowRoot(r), e); }
    insertBefore(r, e, t) { return super.insertBefore(this.nodeOrShadowRoot(r), e, t); }
    removeChild(r, e) { return super.removeChild(null, e); }
    parentNode(r) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, R = class extends M {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, o, s, i, a, c, d) { super(r, s, i, a, c), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = o; let u = t.styles, h = d ? ue(d, u) : u; this.styles = h.map(m => m.replace(/%NS%/g, c)), this.styleUrls = t.getExternalStyles?.(d); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && We.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, H = class extends R {
    contentAttr;
    hostAttr;
    constructor(r, e, t, o, s, i, a, c, d) { let u = o + "-" + t.id; super(r, e, t, s, i, a, c, d, u), this.contentAttr = tt(u), this.hostAttr = nt(u); }
    applyToHost(r) { this.applyStyles(), this.setAttribute(r, this.hostAttr, ""); }
    createElement(r, e) { let t = super.createElement(r, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
var V = class n extends rt {
    supportsDOMEvents = !0;
    static makeCurrent() { ot(new n); }
    onAndCancel(r, e, t, o) { return r.addEventListener(e, t, o), () => { r.removeEventListener(e, t, o); }; }
    dispatchEvent(r, e) { r.dispatchEvent(e); }
    remove(r) { r.remove(); }
    createElement(r, e) { return e = e || this.getDefaultDocument(), e.createElement(r); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(r) { return r.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(r) { return r instanceof DocumentFragment; }
    getGlobalEventTarget(r, e) { return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null; }
    getBaseHref(r) { let e = Et(); return e == null ? null : St(e); }
    resetBaseElement() { C = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(r) { return st(document.cookie, r); }
}, C = null;
function Et() { return C = C || document.head.querySelector("base"), C ? C.getAttribute("href") : null; }
function St(n) { return new URL(n, document.baseURI).pathname; }
var j = class {
    addToWindow(r) { v.getAngularTestability = (t, o = !0) => { let s = r.findTestabilityInTree(t, o); if (s == null)
        throw new ct(5103, !1); return s; }, v.getAllAngularTestabilities = () => r.getAllTestabilities(), v.getAllAngularRootElements = () => r.getAllRootElements(); let e = t => { let o = v.getAllAngularTestabilities(), s = o.length, i = function () { s--, s == 0 && t(); }; o.forEach(a => { a.whenStable(i); }); }; v.frameworkStabilizers || (v.frameworkStabilizers = []), v.frameworkStabilizers.push(e); }
    findTestabilityInTree(r, e, t) { if (e == null)
        return null; let o = r.getTestability(e); return o ?? (t ? ge().isShadowRoot(e) ? this.findTestabilityInTree(r, e.host, !0) : this.findTestabilityInTree(r, e.parentElement, !0) : null); }
}, me = ["alt", "control", "meta", "shift"], Tt = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, wt = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey }, Se = (() => { class n extends S {
    constructor(e) { super(e); }
    supports(e) { return n.parseEventName(e) != null; }
    addEventListener(e, t, o, s) { let i = n.parseEventName(t), a = n.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => ge().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), o = t.shift(); if (t.length === 0 || !(o === "keydown" || o === "keyup"))
        return null; let s = n._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), me.forEach(d => { let u = t.indexOf(d); u > -1 && (t.splice(u, 1), i += d + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let c = {}; return c.domEventName = o, c.fullKey = i, c; }
    static matchEventFullKeyCode(e, t) { let o = Tt[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (o = e.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), me.forEach(i => { if (i !== o) {
        let a = wt[i];
        a(e) && (s += i + ".");
    } }), s += o, s === t); }
    static eventCallback(e, t, o) { return s => { n.matchEventFullKeyCode(s, e) && o.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || n)(g.\u0275\u0275inject(ve)); };
    static \u0275prov = g.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function _t(n, r, e) { return F(this, null, function* () { let t = b({ rootComponent: n }, Te(r, e)); return Ee(t); }); }
function Mt(n, r) { return F(this, null, function* () { return Ee(Te(n, r)); }); }
function Te(n, r) { return { platformRef: r?.platformRef, appProviders: [...Me, ...n?.providers ?? []], platformProviders: we }; }
function Rt(n = {}) { return [..._e, n?.usePendingTasksForStability !== void 0 ? { provide: vt, useValue: n.usePendingTasksForStability ?? !1 } : []]; }
function Dt() { V.makeCurrent(); }
function Ct() { return new ye; }
function At() { return yt(document), document; }
var we = [{ provide: mt, useValue: at }, { provide: gt, useValue: Dt, multi: !0 }, { provide: ve, useFactory: At }], It = pt(ht, "browser", we);
var _e = [{ provide: J, useClass: j }, { provide: ft, useClass: X, deps: [pe, he, J] }, { provide: X, useClass: X, deps: [pe, he, J] }], Me = [{ provide: dt, useValue: "root" }, { provide: ye, useFactory: Ct }, { provide: D, useClass: _, multi: !0 }, { provide: D, useClass: Se, multi: !0 }, B, { provide: fe, useClass: U }, { provide: U, useExisting: fe }, k, { provide: ut, useExisting: B }, []], Ot = (() => { class n {
    constructor() { }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = g.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = g.\u0275\u0275defineInjector({ providers: [...Me, ..._e], imports: [it, lt] });
} return n; })();
import { DOCUMENT as te, \u0275getDOM as Ne } from "@angular/common";
import { \u0275getDOM as Yn } from "@angular/common";
import * as p from "@angular/core";
import { inject as O, \u0275global as Re, ApplicationRef as Le, \u0275RuntimeError as q, makeEnvironmentProviders as bt, \u0275CACHE_ACTIVE as De, APP_BOOTSTRAP_LISTENER as Nt, \u0275withDomHydration as Lt, \u0275withIncrementalHydration as Pe, \u0275withEventReplay as Pt, \u0275withI18nSupport as Ht, ENVIRONMENT_INITIALIZER as wn, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as _n, \u0275Console as Mn, \u0275formatRuntimeError as Rn, SecurityContext as T, \u0275allowSanitizationBypassAndThrow as A, \u0275unwrapSafeValue as I, \u0275_sanitizeUrl as kt, \u0275_sanitizeHtml as Ut, \u0275bypassSanitizationTrustHtml as xt, \u0275bypassSanitizationTrustStyle as Bt, \u0275bypassSanitizationTrustScript as Vt, \u0275bypassSanitizationTrustUrl as jt, \u0275bypassSanitizationTrustResourceUrl as Ft, Version as $t } from "@angular/core";
import { \u0275withHttpTransferCache as He } from "@angular/common/http";
var On = (() => { class n {
    _doc = O(te);
    _dom = Ne();
    _cachedHead;
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e.filter(o => !!o).map(o => this._getOrCreateElement(o, t)); }
    getTag(e) { if (!e)
        return null; let t = this._doc.querySelector(Ce(e)); return Oe(t) ? t : null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(Ce(e)); return t ? Array.from(t).filter(o => Oe(o)) : []; }
    updateTag(e, t) { t ??= Ie(e); let o = this.getTag(t); return o ? (Ae(e, o), o) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (!t) {
        let i = Ie(e), a = this.getTags(i).filter(c => Gt(e, c))[0];
        if (a !== void 0)
            return a;
    } let o = this._dom.createElement("meta"); return Ae(e, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
function Ce(n) { return `meta[${n}]`; }
function Ae(n, r) { Object.keys(n).forEach(e => r.setAttribute(ke(e), n[e])); }
function Ie(n) { let r = n.name ? "name" : "property"; return `${r}=${zt(String(n[r]))}`; }
function zt(n) { return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
function Gt(n, r) { return Object.keys(n).every(e => r.getAttribute(ke(e)) === n[e]); }
function ke(n) { return Yt[n] || n; }
function Oe(n) { return n?.nodeName.toLowerCase() === "meta"; }
var Yt = { httpEquiv: "http-equiv" }, bn = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (t) { return new (t || n)(p.\u0275\u0275inject(te)); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function Ue(n, r) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = Re.ng = Re.ng || {};
    e[n] = r;
} }
var Q = class {
    msPerTick;
    numTicks;
    constructor(r, e) { this.msPerTick = r, this.numTicks = e; }
}, ee = class {
    appRef;
    constructor(r) { this.appRef = r.injector.get(Le); }
    timeChangeDetection(r) { let e = r && r.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let o = performance.now(), s = 0; for (; s < 5 || performance.now() - o < 500;)
        this.appRef.tick(), s++; let i = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (i - o) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new Q(a, s); }
}, xe = "profiler";
function Nn(n) { return Ue(xe, new ee(n)), n; }
function Ln() { Ue(xe, null); }
var be = class {
    static all() { return () => !0; }
    static css(r) { return e => e.nativeElement != null ? Kt(e.nativeElement, r) : !1; }
    static directive(r) { return e => e.providerTokens.indexOf(r) !== -1; }
};
function Kt(n, r) { return Ne().isElementNode(n) ? n.matches && n.matches(r) || n.msMatchesSelector && n.msMatchesSelector(r) || n.webkitMatchesSelector && n.webkitMatchesSelector(r) : !1; }
var Pn = (() => { class n {
    namespacePrefix = O(x, { optional: !0 }) ?? "";
    namespace(e) { return this.namespacePrefix ? `--${this.namespacePrefix}${e.substring(2)}` : e; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), f = (function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n[n.NoIncrementalHydration = 5] = "NoIncrementalHydration", n; })(f || {});
function w(n, r = [], e = {}) { return { \u0275kind: n, \u0275providers: r }; }
function Hn() { return w(f.NoHttpTransferCache); }
function kn(n) { return w(f.HttpTransferCacheOptions, He(n)); }
function Un() { return w(f.I18nSupport, Ht()); }
function xn() { return w(f.EventReplay, Pt()); }
function Bn() { return w(f.IncrementalHydration, Pe()); }
function Vn() { return w(f.NoIncrementalHydration); }
function jn(...n) { let r = [], e = new Set; for (let { \u0275providers: o, \u0275kind: s } of n)
    e.add(s), o.length && r.push(o); let t = e.has(f.HttpTransferCacheOptions); return bt([[], [], Lt(), e.has(f.NoHttpTransferCache) || t ? [] : He({}), e.has(f.NoIncrementalHydration) ? [] : Pe(), r, { provide: De, useValue: { isActive: !0 } }, { provide: Nt, multi: !0, useFactory: () => { let o = O(Le), s = O(De); return () => { o.whenStable().then(() => { s.isActive = !1; }); }; } }]); }
var Zt = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: n, factory: function (t) { let o = null; return t ? o = new (t || n) : o = p.\u0275\u0275inject(Wt), o; }, providedIn: "root" });
} return n; })(), Wt = (() => { class n extends Zt {
    _doc = O(te);
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case T.NONE: return t;
        case T.HTML: return A(t, "HTML") ? I(t) : Ut(this._doc, String(t)).toString();
        case T.STYLE: return A(t, "Style") ? I(t) : t;
        case T.SCRIPT:
            if (A(t, "Script"))
                return I(t);
            throw new q(5200, !1);
        case T.URL: return A(t, "URL") ? I(t) : kt(String(t));
        case T.RESOURCE_URL:
            if (A(t, "ResourceURL"))
                return I(t);
            throw new q(-5201, !1);
        default: throw new q(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return xt(e); }
    bypassSecurityTrustStyle(e) { return Bt(e); }
    bypassSecurityTrustScript(e) { return Vt(e); }
    bypassSecurityTrustUrl(e) { return jt(e); }
    bypassSecurityTrustResourceUrl(e) { return Ft(e); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), Fn = new $t("22.1.1");
export { Ot as BrowserModule, be as By, Pn as CssVarNamespacer, Zt as DomSanitizer, D as EVENT_MANAGER_PLUGINS, k as EventManager, S as EventManagerPlugin, f as HydrationFeatureKind, On as Meta, de as REMOVE_STYLES_ON_COMPONENT_DESTROY, bn as Title, Fn as VERSION, _t as bootstrapApplication, Mt as createApplication, Ln as disableDebugTools, Nn as enableDebugTools, It as platformBrowser, jn as provideClientHydration, et as provideCssVarNamespacing, Rt as provideProtractorTestingSupport, xn as withEventReplay, kn as withHttpTransferCacheOptions, Un as withI18nSupport, Bn as withIncrementalHydration, Hn as withNoHttpTransferCache, Vn as withNoIncrementalHydration, V as \u0275BrowserDomAdapter, j as \u0275BrowserGetTestability, _ as \u0275DomEventsPlugin, B as \u0275DomRendererFactory2, Wt as \u0275DomSanitizerImpl, Se as \u0275KeyEventsPlugin, U as \u0275SharedStylesHost, Yn as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v22.1.1
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
