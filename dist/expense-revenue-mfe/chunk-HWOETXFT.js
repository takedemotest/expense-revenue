var m = Object.defineProperty, w = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var u = (e, n, t) => n in e ? m(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, j = (e, n) => { for (var t in n ||= {})
    _.call(n, t) && u(e, t, n[t]); if (f)
    for (var t of f(n))
        D.call(n, t) && u(e, t, n[t]); return e; }, S = (e, n) => w(e, I(n));
var C = (e, n, t) => new Promise((o, r) => { var s = i => { try {
    c(t.next(i));
}
catch (d) {
    r(d);
} }, y = i => { try {
    c(t.throw(i));
}
catch (d) {
    r(d);
} }, c = i => i.done ? o(i.value) : Promise.resolve(i.value).then(s, y); c((t = t.apply(e, n)).next()); });
import * as h from "@angular/core";
import { InjectionToken as M, inject as v, DOCUMENT as k } from "@angular/core";
var g = null;
function l() { return g; }
function N(e) { g ??= e; }
var p = class {
}, b = (() => { class e {
    historyGo(t) { throw new Error(""); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: () => v(E), providedIn: "platform" });
} return e; })(), T = new M(""), E = (() => { class e extends b {
    _location;
    _history;
    _doc = v(k);
    constructor() { super(), this._location = window.location, this._history = window.history; }
    getBaseHrefFromDOM() { return l().getBaseHref(this._doc); }
    onPopState(t) { let o = l().getGlobalEventTarget(this._doc, "window"); return o.addEventListener("popstate", t, !1), () => o.removeEventListener("popstate", t); }
    onHashChange(t) { let o = l().getGlobalEventTarget(this._doc, "window"); return o.addEventListener("hashchange", t, !1), () => o.removeEventListener("hashchange", t); }
    get href() { return this._location.href; }
    get protocol() { return this._location.protocol; }
    get hostname() { return this._location.hostname; }
    get port() { return this._location.port; }
    get pathname() { return this._location.pathname; }
    get search() { return this._location.search; }
    get hash() { return this._location.hash; }
    set pathname(t) { this._location.pathname = t; }
    pushState(t, o, r) { this._history.pushState(t, o, r); }
    replaceState(t, o, r) { this._history.replaceState(t, o, r); }
    forward() { this._history.forward(); }
    back() { this._history.back(); }
    historyGo(t = 0) { this._history.go(t); }
    getState() { return this._history.state; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: () => new e, providedIn: "platform" });
} return e; })();
import * as a from "@angular/core";
import "@angular/core";
function U(e, n) { n = encodeURIComponent(n); for (let t of e.split(";")) {
    let o = t.indexOf("="), [r, s] = o == -1 ? [t, ""] : [t.slice(0, o), t.slice(o + 1)];
    if (r.trim() === n)
        return decodeURIComponent(s);
} return null; }
var L = (() => { class e {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = a.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })(), q = (() => { class e {
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: e, factory: function (o) { let r = null; return o ? r = new (o || e) : r = a.\u0275\u0275inject(L), r; }, providedIn: "root" });
} return e; })();
export { j as a, S as b, C as c, l as d, N as e, p as f, b as g, T as h, E as i, U as j, q as k };
/*! Bundled license information:

@angular/common/fesm2022/_platform_location-chunk.mjs:
@angular/common/fesm2022/_xhr-chunk.mjs:
  (**
   * @license Angular v22.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
