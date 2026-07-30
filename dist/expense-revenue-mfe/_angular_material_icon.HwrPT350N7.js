import * as a from "@angular/core";
import { InjectionToken as L, inject as d, DOCUMENT as B, ElementRef as $, ErrorHandler as V, HostAttributeToken as q, booleanAttribute as Y } from "@angular/core";
import { Subscription as J } from "rxjs";
import { take as K } from "rxjs/operators";
import * as D from "@angular/core";
import { SecurityContext as rt } from "@angular/core";
var S;
function H() { if (S === void 0 && (S = null, typeof window < "u")) {
    let o = window;
    o.trustedTypes !== void 0 && (S = o.trustedTypes.createPolicy("angular#components", { createHTML: c => c }));
} return S; }
function m(o) { return H()?.createHTML(o) || o; }
import * as N from "@angular/common/http";
import * as u from "@angular/core";
import { SecurityContext as p, DOCUMENT as z } from "@angular/core";
import * as T from "@angular/platform-browser";
import { of as _, throwError as P, forkJoin as U } from "rxjs";
import { tap as E, map as v, catchError as O, finalize as k, share as W } from "rxjs/operators";
function F(o) { return Error(`Unable to find icon with the name "${o}"`); }
function b() { return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers."); }
function y(o) { return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`); }
function w(o) { return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`); }
var l = class {
    url;
    svgText;
    options;
    svgElement = null;
    constructor(c, t, e) { this.url = c, this.svgText = t, this.options = e; }
}, A = (() => { class o {
    _httpClient;
    _sanitizer;
    _errorHandler;
    _document;
    _svgIconConfigs = new Map;
    _iconSetConfigs = new Map;
    _cachedIconsByUrl = new Map;
    _inProgressUrlFetches = new Map;
    _fontCssClassesByAlias = new Map;
    _resolvers = [];
    _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
    constructor(t, e, n, i) { this._httpClient = t, this._sanitizer = e, this._errorHandler = i, this._document = n; }
    addSvgIcon(t, e, n) { return this.addSvgIconInNamespace("", t, e, n); }
    addSvgIconLiteral(t, e, n) { return this.addSvgIconLiteralInNamespace("", t, e, n); }
    addSvgIconInNamespace(t, e, n, i) { return this._addSvgIconConfig(t, e, new l(n, null, i)); }
    addSvgIconResolver(t) { return this._resolvers.push(t), this; }
    addSvgIconLiteralInNamespace(t, e, n, i) { let r = this._sanitizer.sanitize(p.HTML, n); if (!r)
        throw w(n); let s = m(r); return this._addSvgIconConfig(t, e, new l("", s, i)); }
    addSvgIconSet(t, e) { return this.addSvgIconSetInNamespace("", t, e); }
    addSvgIconSetLiteral(t, e) { return this.addSvgIconSetLiteralInNamespace("", t, e); }
    addSvgIconSetInNamespace(t, e, n) { return this._addSvgIconSetConfig(t, new l(e, null, n)); }
    addSvgIconSetLiteralInNamespace(t, e, n) { let i = this._sanitizer.sanitize(p.HTML, e); if (!i)
        throw w(e); let r = m(i); return this._addSvgIconSetConfig(t, new l("", r, n)); }
    registerFontClassAlias(t, e = t) { return this._fontCssClassesByAlias.set(t, e), this; }
    classNameForFontAlias(t) { return this._fontCssClassesByAlias.get(t) || t; }
    setDefaultFontSetClass(...t) { return this._defaultFontSetClass = t, this; }
    getDefaultFontSetClass() { return this._defaultFontSetClass; }
    getSvgIconFromUrl(t) { let e = this._sanitizer.sanitize(p.RESOURCE_URL, t); if (!e)
        throw y(t); let n = this._cachedIconsByUrl.get(e); return n ? _(C(n)) : this._loadSvgIconFromConfig(new l(t, null)).pipe(E(i => this._cachedIconsByUrl.set(e, i)), v(i => C(i))); }
    getNamedSvgIcon(t, e = "") { let n = M(e, t), i = this._svgIconConfigs.get(n); if (i)
        return this._getSvgFromConfig(i); if (i = this._getIconConfigFromResolvers(e, t), i)
        return this._svgIconConfigs.set(n, i), this._getSvgFromConfig(i); let r = this._iconSetConfigs.get(e); return r ? this._getSvgFromIconSetConfigs(t, r) : P(F(n)); }
    ngOnDestroy() { this._resolvers = [], this._svgIconConfigs.clear(), this._iconSetConfigs.clear(), this._cachedIconsByUrl.clear(); }
    _getSvgFromConfig(t) { return t.svgText ? _(C(this._svgElementFromConfig(t))) : this._loadSvgIconFromConfig(t).pipe(v(e => C(e))); }
    _getSvgFromIconSetConfigs(t, e) { let n = this._extractIconWithNameFromAnySet(t, e); if (n)
        return _(n); let i = e.filter(r => !r.svgText).map(r => this._loadSvgIconSetFromConfig(r).pipe(O(s => { let g = `Loading icon set URL: ${this._sanitizer.sanitize(p.RESOURCE_URL, r.url)} failed: ${s.message}`; return this._errorHandler.handleError(new Error(g)), _(null); }))); return U(i).pipe(v(() => { let r = this._extractIconWithNameFromAnySet(t, e); if (!r)
        throw F(t); return r; })); }
    _extractIconWithNameFromAnySet(t, e) { for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (i.svgText && i.svgText.toString().indexOf(t) > -1) {
            let r = this._svgElementFromConfig(i), s = this._extractSvgIconFromSet(r, t, i.options);
            if (s)
                return s;
        }
    } return null; }
    _loadSvgIconFromConfig(t) { return this._fetchIcon(t).pipe(E(e => t.svgText = e), v(() => this._svgElementFromConfig(t))); }
    _loadSvgIconSetFromConfig(t) { return t.svgText ? _(null) : this._fetchIcon(t).pipe(E(e => t.svgText = e)); }
    _extractSvgIconFromSet(t, e, n) { let i = t.querySelector(`[id="${e}"]`); if (!i)
        return null; let r = i.cloneNode(!0); if (r.removeAttribute("id"), r.nodeName.toLowerCase() === "svg")
        return this._setSvgAttributes(r, n); if (r.nodeName.toLowerCase() === "symbol")
        return this._setSvgAttributes(this._toSvgElement(r), n); let s = this._svgElementFromString(m("<svg></svg>")); return s.appendChild(r), this._setSvgAttributes(s, n); }
    _svgElementFromString(t) { let e = this._document.createElement("DIV"); e.innerHTML = t; let n = e.querySelector("svg"); if (!n)
        throw Error("<svg> tag not found"); return n; }
    _toSvgElement(t) { let e = this._svgElementFromString(m("<svg></svg>")), n = t.attributes; for (let i = 0; i < n.length; i++) {
        let { name: r, value: s } = n[i];
        r !== "id" && e.setAttribute(r, s);
    } for (let i = 0; i < t.childNodes.length; i++)
        t.childNodes[i].nodeType === this._document.ELEMENT_NODE && e.appendChild(t.childNodes[i].cloneNode(!0)); return e; }
    _setSvgAttributes(t, e) { return t.setAttribute("fit", ""), t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.setAttribute("focusable", "false"), e && e.viewBox && t.setAttribute("viewBox", e.viewBox), t; }
    _fetchIcon(t) { let { url: e, options: n } = t, i = n?.withCredentials ?? !1; if (!this._httpClient)
        throw b(); if (e == null)
        throw Error(`Cannot fetch icon from URL "${e}".`); let r = this._sanitizer.sanitize(p.RESOURCE_URL, e); if (!r)
        throw y(e); let s = this._inProgressUrlFetches.get(r); if (s)
        return s; let h = this._httpClient.get(r, { responseType: "text", withCredentials: i }).pipe(v(g => m(g)), k(() => this._inProgressUrlFetches.delete(r)), W()); return this._inProgressUrlFetches.set(r, h), h; }
    _addSvgIconConfig(t, e, n) { return this._svgIconConfigs.set(M(t, e), n), this; }
    _addSvgIconSetConfig(t, e) { let n = this._iconSetConfigs.get(t); return n ? n.push(e) : this._iconSetConfigs.set(t, [e]), this; }
    _svgElementFromConfig(t) { if (!t.svgElement) {
        let e = this._svgElementFromString(t.svgText);
        this._setSvgAttributes(e, t.options), t.svgElement = e;
    } return t.svgElement; }
    _getIconConfigFromResolvers(t, e) { for (let n = 0; n < this._resolvers.length; n++) {
        let i = this._resolvers[n](e, t);
        if (i)
            return j(i) ? new l(i.url, null, i.options) : new l(i, null);
    } }
    static \u0275fac = function (e) { return new (e || o)(u.\u0275\u0275inject(N.HttpClient, 8), u.\u0275\u0275inject(T.DomSanitizer), u.\u0275\u0275inject(z, 8), u.\u0275\u0275inject(u.ErrorHandler)); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })();
function C(o) { return o.cloneNode(!0); }
function M(o, c) { return o + ":" + c; }
function j(o) { return !!(o.url && o.options); }
import * as f from "@angular/core";
import { EventEmitter as pt, signal as _t } from "@angular/core";
var R = (() => { class o {
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275mod = f.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = f.\u0275\u0275defineInjector({});
} return o; })();
import "@angular/common/http";
import "@angular/platform-browser";
var G = ["*"], Q = new L("MAT_ICON_DEFAULT_OPTIONS"), X = new L("mat-icon-location", { providedIn: "root", factory: () => { let o = d(B), c = o ? o.location : null; return { getPathname: () => c ? c.pathname + c.search : "" }; } }), x = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"], Z = x.map(o => `[${o}]`).join(", "), tt = /^url\(['"]?#(.*?)['"]?\)$/, Ht = (() => {
    class o {
        _elementRef = d($);
        _iconRegistry = d(A);
        _location = d(X);
        _errorHandler = d(V);
        _defaultColor;
        get color() { return this._color || this._defaultColor; }
        set color(t) { this._color = t; }
        _color;
        inline = !1;
        get svgIcon() { return this._svgIcon; }
        set svgIcon(t) { t !== this._svgIcon && (t ? this._updateSvgIcon(t) : this._svgIcon && this._clearSvgElement(), this._svgIcon = t); }
        _svgIcon;
        get fontSet() { return this._fontSet; }
        set fontSet(t) { let e = this._cleanupFontValue(t); e !== this._fontSet && (this._fontSet = e, this._updateFontIconClasses()); }
        _fontSet;
        get fontIcon() { return this._fontIcon; }
        set fontIcon(t) { let e = this._cleanupFontValue(t); e !== this._fontIcon && (this._fontIcon = e, this._updateFontIconClasses()); }
        _fontIcon;
        _previousFontSetClass = [];
        _previousFontIconClass;
        _svgName = null;
        _svgNamespace = null;
        _previousPath;
        _elementsWithExternalReferences;
        _currentIconFetch = J.EMPTY;
        constructor() { let t = d(new q("aria-hidden"), { optional: !0 }), e = d(Q, { optional: !0 }); e && (e.color && (this.color = this._defaultColor = e.color), e.fontSet && (this.fontSet = e.fontSet)), t || this._elementRef.nativeElement.setAttribute("aria-hidden", "true"); }
        _splitIconName(t) { if (!t)
            return ["", ""]; let e = t.split(":"); switch (e.length) {
            case 1: return ["", e[0]];
            case 2: return e;
            default: throw Error(`Invalid icon name: "${t}"`);
        } }
        ngOnInit() { this._updateFontIconClasses(); }
        ngAfterViewChecked() { let t = this._elementsWithExternalReferences; if (t && t.size) {
            let e = this._location.getPathname();
            e !== this._previousPath && (this._previousPath = e, this._prependPathToReferences(e));
        } }
        ngOnDestroy() { this._currentIconFetch.unsubscribe(), this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear(); }
        _usingFontIcon() { return !this.svgIcon; }
        _setSvgElement(t) { this._clearSvgElement(); let e = this._location.getPathname(); this._previousPath = e, this._cacheChildrenWithExternalReferences(t), this._prependPathToReferences(e), this._elementRef.nativeElement.appendChild(t); }
        _clearSvgElement() { let t = this._elementRef.nativeElement, e = t.childNodes.length; for (this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear(); e--;) {
            let n = t.childNodes[e];
            (n.nodeType !== 1 || n.nodeName.toLowerCase() === "svg") && n.remove();
        } }
        _updateFontIconClasses() { if (!this._usingFontIcon())
            return; let t = this._elementRef.nativeElement, e = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(n => n.length > 0); this._previousFontSetClass.forEach(n => t.classList.remove(n)), e.forEach(n => t.classList.add(n)), this._previousFontSetClass = e, this.fontIcon !== this._previousFontIconClass && !e.includes("mat-ligature-font") && (this._previousFontIconClass && t.classList.remove(this._previousFontIconClass), this.fontIcon && t.classList.add(this.fontIcon), this._previousFontIconClass = this.fontIcon); }
        _cleanupFontValue(t) { return typeof t == "string" ? t.trim().split(" ")[0] : t; }
        _prependPathToReferences(t) { let e = this._elementsWithExternalReferences; e && e.forEach((n, i) => { n.forEach(r => { i.setAttribute(r.name, `url('${t}#${r.value}')`); }); }); }
        _cacheChildrenWithExternalReferences(t) { let e = t.querySelectorAll(Z), n = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map; for (let i = 0; i < e.length; i++)
            x.forEach(r => { let s = e[i], h = s.getAttribute(r), g = h ? h.match(tt) : null; if (g) {
                let I = n.get(s);
                I || (I = [], n.set(s, I)), I.push({ name: r, value: g[1] });
            } }); }
        _updateSvgIcon(t) { if (this._svgNamespace = null, this._svgName = null, this._currentIconFetch.unsubscribe(), t) {
            let [e, n] = this._splitIconName(t);
            e && (this._svgNamespace = e), n && (this._svgName = n), this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(n, e).pipe(K(1)).subscribe(i => this._setSvgElement(i), i => { let r = `Error retrieving icon ${e}:${n}! ${i.message}`; this._errorHandler.handleError(new Error(r)); });
        } }
        static \u0275fac = function (e) { return new (e || o); };
        static \u0275cmp = a.\u0275\u0275defineComponent({ type: o, selectors: [["mat-icon"]], hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"], hostVars: 10, hostBindings: function (e, n) { e & 2 && (a.\u0275\u0275attribute("data-mat-icon-type", n._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", n._svgName || n.fontIcon)("data-mat-icon-namespace", n._svgNamespace || n.fontSet)("fontIcon", n._usingFontIcon() ? n.fontIcon : null), a.\u0275\u0275classMap(n.color ? "mat-" + n.color : ""), a.\u0275\u0275classProp("mat-icon-inline", n.inline)("mat-icon-no-color", n.color !== "primary" && n.color !== "accent" && n.color !== "warn")); }, inputs: { color: "color", inline: [2, "inline", "inline", Y], svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, exportAs: ["matIcon"], ngContentSelectors: G, decls: 1, vars: 0, template: function (e, n) { e & 1 && (a.\u0275\u0275projectionDef(), a.\u0275\u0275projection(0)); }, styles: [`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`], encapsulation: 2 });
    }
    return o;
})(), zt = (() => { class o {
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = a.\u0275\u0275defineInjector({ imports: [R] });
} return o; })();
export { Q as MAT_ICON_DEFAULT_OPTIONS, X as MAT_ICON_LOCATION, Ht as MatIcon, zt as MatIconModule, A as MatIconRegistry, w as getMatIconFailedToSanitizeLiteralError, y as getMatIconFailedToSanitizeUrlError, F as getMatIconNameNotFoundError, b as getMatIconNoHttpProviderError };
