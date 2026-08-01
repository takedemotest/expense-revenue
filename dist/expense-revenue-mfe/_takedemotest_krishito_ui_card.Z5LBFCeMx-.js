var v = Object.defineProperty, h = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var _ = (n, i, e) => i in n ? v(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e, s = (n, i) => { for (var e in i ||= {})
    y.call(i, e) && _(n, e, i[e]); if (l)
    for (var e of l(i))
        T.call(i, e) && _(n, e, i[e]); return n; }, m = (n, i) => h(n, b(i));
import * as r from "@angular/common";
import { CommonModule as M } from "@angular/common";
import * as t from "@angular/core";
import { inject as S, input as d, output as C, contentChild as k, ElementRef as p, computed as u } from "@angular/core";
import * as f from "@angular/material/icon";
import { MatIconModule as F } from "@angular/material/icon";
import { IconService as O } from "@takedemotest/krishito-ui-icons";
var w = [[["", "custom-header", ""]], [["", "custom-footer", ""]]], I = ["[custom-header]", "[custom-footer]"], P = n => ({ $implicit: n }), g = (n, i) => i.id;
function $(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "h6"), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.cardTitle());
} }
function E(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "div", 11), t.\u0275\u0275element(1, "mat-icon", 12), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext(3).$implicit;
    t.\u0275\u0275styleProp("background-color", e.randomBg), t.\u0275\u0275advance(), t.\u0275\u0275property("svgIcon", e.icon);
} }
function A(n, i) { if (n & 1 && (t.\u0275\u0275conditionalCreate(0, E, 2, 3, "div", 7), t.\u0275\u0275elementStart(1, "div", 8)(2, "div", 9), t.\u0275\u0275text(3), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(4, "div", 10), t.\u0275\u0275text(5), t.\u0275\u0275elementEnd()()), n & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275conditional(e.icon ? 0 : -1), t.\u0275\u0275advance(3), t.\u0275\u0275textInterpolate1(" ", e.title, " "), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate1(" ", e.subtitle, " ");
} }
function D(n, i) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 13), t.\u0275\u0275listener("click", function (a) { t.\u0275\u0275restoreView(e); let c = t.\u0275\u0275nextContext(3); return t.\u0275\u0275resetView(c.onClose(a)); }), t.\u0275\u0275element(1, "mat-icon", 12), t.\u0275\u0275elementEnd();
} n & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("svgIcon", "close")); }
function B(n, i) { if (n & 1 && (t.\u0275\u0275projection(0), t.\u0275\u0275conditionalCreate(1, A, 6, 3), t.\u0275\u0275conditionalCreate(2, D, 2, 1, "div", 6)), n & 2) {
    let e = t.\u0275\u0275nextContext().$implicit, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(o.hasCustomHeader ? -1 : 1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.showCloseButton ? 2 : -1);
} }
function N(n, i) { n & 1 && t.\u0275\u0275elementContainer(0); }
function V(n, i) { if (n & 1 && t.\u0275\u0275template(0, N, 1, 0, "ng-container", 14), n & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275property("ngTemplateOutlet", e.hasBodyContent)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(2, P, e));
} }
function j(n, i) { if (n & 1 && t.\u0275\u0275text(0), n & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275textInterpolate1(" ", e.body, " ");
} }
function R(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "div", 5), t.\u0275\u0275conditionalCreate(1, V, 1, 4, "ng-container")(2, j, 1, 1), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.hasBodyContent ? 1 : 2);
} }
function H(n, i) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("click", function (a) { let c = t.\u0275\u0275restoreView(e).$implicit, x = t.\u0275\u0275nextContext(4); return t.\u0275\u0275resetView(x.onActionClick(a, c.id)); }), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = i.$implicit;
    t.\u0275\u0275property("ngClass", "btn-" + e.type), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e.label, " ");
} }
function Q(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "div", 16), t.\u0275\u0275repeaterCreate(1, H, 2, 2, "button", 17, g), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275repeater(e.footerActions);
} }
function q(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "div", 15), t.\u0275\u0275projection(1, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(2, Q, 3, 0, "div", 16)), n & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275advance(2), t.\u0275\u0275conditional(e.footerActions && e.footerActions.length > 0 ? 2 : -1);
} }
function z(n, i) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 3), t.\u0275\u0275listener("click", function () { let a = t.\u0275\u0275restoreView(e).$implicit, c = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(a.isClickable ? c.cardAction.emit({ cardId: a.id, actionId: "CARD_BODY_CLICK" }) : null); }), t.\u0275\u0275elementStart(1, "div", 4), t.\u0275\u0275conditionalCreate(2, B, 3, 2), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(3, R, 3, 1, "div", 5), t.\u0275\u0275conditionalCreate(4, q, 3, 1), t.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = i.$implicit;
    t.\u0275\u0275classProp("clickable", e.isClickable), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(e.showHeader ? 2 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.hasBodyContent || e.body ? 3 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.showFooter ? 4 : -1);
} }
var X = (() => { class n {
    iconService = S(O);
    cardConfig = d.required({ alias: "config" });
    type = d();
    cardTitle = d("");
    actions = C();
    hasCustomHeader = !1;
    defaultSlotContent = k(p);
    hasBodyContent = u(() => !!this.defaultSlotContent());
    config = u(() => this.cardConfig().map(e => m(s({}, e), { randomBg: this.getRandomColour() })));
    getRandomColour() { return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`; }
    onClose(e) { }
    cardAction = C();
    onActionClick(e, o) { e.stopPropagation(), this.actions.emit({ cardId: this.config()[0].id, actionId: o }); }
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["cards"]], contentQueries: function (o, a, c) { o & 1 && t.\u0275\u0275contentQuerySignal(c, a.defaultSlotContent, p, 5), o & 2 && t.\u0275\u0275queryAdvance(); }, inputs: { cardConfig: [1, "config", "cardConfig"], type: [1, "type"], cardTitle: [1, "cardTitle"] }, outputs: { actions: "actions", cardAction: "cardAction" }, ngContentSelectors: I, decls: 5, vars: 3, consts: [[1, "card-container"], [1, "card-align"], [1, "card", "card-flex", 3, "clickable"], [1, "card", "card-flex", 3, "click"], [1, "card_header"], [1, "card_body"], [1, "card_close"], [1, "card_header-icon", 3, "background-color"], [1, "card__title-container"], [1, "card_header-title"], [1, "card_header-subtitle"], [1, "card_header-icon"], [3, "svgIcon"], [1, "card_close", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card_footer"], [1, "card_footer_actions"], [1, "btn", "btn-light", 3, "ngClass"], [1, "btn", "btn-light", 3, "click", "ngClass"]], template: function (o, a) { o & 1 && (t.\u0275\u0275projectionDef(w), t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275conditionalCreate(1, $, 2, 1, "h6"), t.\u0275\u0275elementStart(2, "div", 1), t.\u0275\u0275repeaterCreate(3, z, 5, 5, "div", 2, g), t.\u0275\u0275elementEnd()()), o & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.cardTitle() ? 1 : -1), t.\u0275\u0275advance(), t.\u0275\u0275classMap(a.type() || "inline"), t.\u0275\u0275advance(), t.\u0275\u0275repeater(a.config())); }, dependencies: [M, r.NgClass, r.NgTemplateOutlet, F, f.MatIcon], styles: [".card-container[_ngcontent-%COMP%]   .card-align[_ngcontent-%COMP%]{gap:15px;display:flex;flex-direction:column}.card-container[_ngcontent-%COMP%]   .card-align.inline[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.card[_ngcontent-%COMP%]{border:none;box-shadow:0 2px 4px #0000001a;border-radius:5px;background:#fff}.card_header[_ngcontent-%COMP%], .card_footer[_ngcontent-%COMP%], .card_body[_ngcontent-%COMP%]{padding:15px}.card.clickable[_ngcontent-%COMP%]{cursor:pointer}.card_header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.card_header-icon[_ngcontent-%COMP%]{border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center}.card_header-subtitle[_ngcontent-%COMP%]{font-size:12px;color:#666}.card-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}"] });
} return n; })();
export { X as CardsComponent };
