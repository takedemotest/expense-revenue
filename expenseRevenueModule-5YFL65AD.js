import { inject as y, signal as d } from "@angular/core";
import { IconService as v } from "@takedemotest/krishito-ui-icons";
import { MatIconModule as h } from "@angular/material/icon";
import { CardsComponent as T } from "@takedemotest/krishito-ui-card";
var c = i => [{ id: "Milk Production", title: "Today's Milk Production", icon: "warning", showHeader: !0, hasBodyContent: i.milkProduction }, { id: "Inventory Alerts", title: "Inventory Alerts", icon: "warning", showHeader: !0, hasBodyContent: i.inventoryAlerts }, { id: "Upcoming Tasks", title: "Upcoming Tasks", icon: "warning", showHeader: !0, hasBodyContent: i.upcomingTasks }];
import { AgGridUi as x } from "@takedemotest/krishito-ui-ag-grid";
import * as e from "@angular/core";
import { HttpParams as m } from "@angular/common/http";
import * as s from "@angular/core";
import * as l from "@angular/common/http";
var o = class i {
    constructor(t) { this.http = t; }
    http;
    url = "https://takedemotest-github-io.onrender.com/api/transactions";
    getTransactions(t) { let n = new m; return t && (n = n.set("mainActivity", t)), this.http.get(this.url, { params: n }); }
    getFinancialSummary(t) { let n = new m; return t && (n = n.set("mainActivity", t)), this.http.get(`${this.url}/summary`, { params: n }); }
    createTransaction(t) { return this.http.post(this.url, t); }
    deleteTransaction(t) { return this.http.delete(`${this.url}/${t}`); }
    static \u0275fac = function (n) { return new (n || i)(s.\u0275\u0275inject(l.HttpClient)); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
};
import * as u from "@angular/material/icon";
var C = ["milkProduction"], b = ["inventoryAlerts"], E = ["upcomingTasks"], S = (i, t) => t._id;
function A(i, t) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275text(1, "Loading farm transactions..."), e.\u0275\u0275elementEnd()); }
function I(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.errorMessage);
} }
function _(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "h3"), e.\u0275\u0275text(3, "Total Revenue"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "p"), e.\u0275\u0275text(5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div", 9)(7, "h3"), e.\u0275\u0275text(8, "Total Expense"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "p"), e.\u0275\u0275text(10), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(11, "div", 10)(12, "h3"), e.\u0275\u0275text(13, "Net Profit"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "p"), e.\u0275\u0275text(15), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(16, "div", 11)(17, "h3"), e.\u0275\u0275text(18, "Margin"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(19, "p"), e.\u0275\u0275text(20), e.\u0275\u0275elementEnd()()()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(5), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.totalRevenue), e.\u0275\u0275advance(5), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.totalExpense), e.\u0275\u0275advance(5), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.netProfit), e.\u0275\u0275advance(5), e.\u0275\u0275textInterpolate(n.summary.profitMarginPercent);
} }
function R(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "tr")(1, "td")(2, "span"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(4, "td"), e.\u0275\u0275text(5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "td"), e.\u0275\u0275text(7), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(8, "td"), e.\u0275\u0275elementEnd()), i & 2) {
    let n = t.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275classMap(n.type.toLowerCase()), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.type), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.category), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate1("\u20B9", n.amount);
} }
function k(i, t) { i & 1 && (e.\u0275\u0275elementStart(0, "tr")(1, "td", 12), e.\u0275\u0275text(2, "No transactions recorded yet."), e.\u0275\u0275elementEnd()()); }
var p = class i {
    constructor(t) { this.transactionService = t; }
    transactionService;
    iconService = y(v);
    taskNotification = d([]);
    transactions = [];
    summary = null;
    loading = !1;
    errorMessage = "";
    milkProductionTemplate;
    inventoryAlertsTemplate;
    upcomingTasksTemplate;
    ngOnInit() { this.fetchData(), this.iconService.registerIcons(["dashboard", "warning"]); }
    fetchData() { this.loading = !0, this.transactionService.getTransactions().subscribe({ next: t => { this.transactions = t.data, this.loading = !1; }, error: t => { this.errorMessage = "Failed to load transactions", this.loading = !1; } }), this.transactionService.getFinancialSummary().subscribe({ next: t => { this.summary = t.data; } }); }
    onDelete(t) { confirm("Are you sure you want to delete this record?") && this.transactionService.deleteTransaction(t).subscribe({ next: () => { this.fetchData(); } }); }
    fetchFn = () => this.transactionService.getTransactions();
    gridConfig = d({ gridId: "transactions-grid", title: "\u{1F33E} Financial Transactions (Signal Low-Code Plugin)", pageSize: 10, columns: [{ field: "type", headerName: "Type", type: "badge", badgeColorMap: { REVENUE: { bg: "#dcfce7", text: "#15803d" }, EXPENSE: { bg: "#fee2e2", text: "#b91c1c" } } }, { field: "category", headerName: "Category", type: "text" }, { field: "amount", headerName: "Amount", type: "currency", currencySymbol: "\u20B9" }, { field: "createdAt", headerName: "Date", type: "date" }, { field: "actions", headerName: "Actions", type: "actions", actions: [{ name: "delete", label: "Delete", btnClass: "btn-danger" }] }] });
    handleAction(t) { t.actionName === "delete" && this.transactionService.deleteTransaction(t.rowData._id).subscribe(() => { alert("Transaction deleted!"); }); }
    ngAfterViewInit() { let t = c({ milkProduction: this.milkProductionTemplate, inventoryAlerts: this.inventoryAlertsTemplate, upcomingTasks: this.upcomingTasksTemplate }); this.taskNotification.set(t); }
    static \u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(o)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["expense-revenue"]], viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(C, 5)(b, 5)(E, 5), n & 2) {
            let r;
            e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.milkProductionTemplate = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.inventoryAlertsTemplate = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.upcomingTasksTemplate = r.first);
        } }, decls: 29, vars: 9, consts: [[3, "svgIcon"], [1, "action-card-container"], ["type", "inline", 3, "config"], [1, "financial-container"], [1, "alert", "alert-info"], [1, "alert", "alert-danger"], [1, "summary-cards"], [3, "actionTriggered", "config", "fetchService"], [1, "card", "revenue"], [1, "card", "expense"], [1, "card", "profit"], [1, "card", "margin"], ["colspan", "4", 1, "text-center"]], template: function (n, a) { n & 1 && (e.\u0275\u0275element(0, "mat-icon", 0)(1, "mat-icon", 0)(2, "mat-icon", 0), e.\u0275\u0275elementStart(3, "div", 1), e.\u0275\u0275element(4, "cards", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "div", 3)(6, "h2"), e.\u0275\u0275text(7, "\u{1F33E} Farm Expense & Revenue Management"), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(8, A, 2, 0, "div", 4)(9, I, 2, 1, "div", 5), e.\u0275\u0275conditionalCreate(10, _, 21, 4, "div", 6), e.\u0275\u0275elementStart(11, "h3"), e.\u0275\u0275text(12, "All Transactions"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "table")(14, "thead")(15, "tr")(16, "th"), e.\u0275\u0275text(17, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(18, "th"), e.\u0275\u0275text(19, "Category"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(20, "th"), e.\u0275\u0275text(21, "Amount"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(22, "th"), e.\u0275\u0275text(23, "Actions"), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(24, "tbody"), e.\u0275\u0275repeaterCreate(25, R, 9, 5, "tr", null, S, !1, k, 3, 0, "tr"), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(28, "agGrid-ui", 7), e.\u0275\u0275listener("actionTriggered", function (f) { return a.handleAction(f); }), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("svgIcon", "dashboard"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "warning"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "addicon"), e.\u0275\u0275advance(2), e.\u0275\u0275property("config", a.taskNotification()), e.\u0275\u0275advance(4), e.\u0275\u0275conditional(a.loading ? 8 : a.errorMessage ? 9 : -1), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(a.summary ? 10 : -1), e.\u0275\u0275advance(15), e.\u0275\u0275repeater(a.transactions), e.\u0275\u0275advance(3), e.\u0275\u0275property("config", a.gridConfig())("fetchService", a.fetchFn)); }, dependencies: [h, u.MatIcon, T, x], encapsulation: 2 });
};
export { p as ExpenseRevenueComponent };
