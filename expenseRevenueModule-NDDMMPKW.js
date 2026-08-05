import { inject as g, signal as l } from "@angular/core";
import { IconService as y } from "@takedemotest/krishito-ui-icons";
import { MatIconModule as v } from "@angular/material/icon";
import { CardsComponent as x } from "@takedemotest/krishito-ui-card";
import { AgGridUi as h } from "@takedemotest/krishito-ui-ag-grid";
var c = i => [{ id: "Expenses MTD", title: "Expenses MTD", icon: "warning", showHeader: !0, hasBodyContent: i.expense }, { id: "Revenue MTD", title: "Revenue MTD", icon: "warning", showHeader: !0, hasBodyContent: i.revenue }, { id: "Net Profit MTD", title: "Net Profit MTD", icon: "warning", showHeader: !0, hasBodyContent: i.netProfit }, { id: "Profit Margin Percent MTD", title: "Profit Margin Percent MTD", icon: "warning", showHeader: !0, hasBodyContent: i.profitMarginPercent }];
import * as e from "@angular/core";
import { HttpParams as p } from "@angular/common/http";
import * as s from "@angular/core";
import * as m from "@angular/common/http";
var o = class i {
    constructor(t) { this.http = t; }
    http;
    url = "https://takedemotest-github-io.onrender.com/api/transactions";
    getTransactions(t) { let n = new p; return t && (n = n.set("mainActivity", t)), this.http.get(this.url, { params: n }); }
    getFinancialSummary(t) { let n = new p; return t && (n = n.set("mainActivity", t)), this.http.get(`${this.url}/summary`, { params: n }); }
    createTransaction(t) { return this.http.post(this.url, t); }
    deleteTransaction(t) { return this.http.delete(`${this.url}/${t}`); }
    static \u0275fac = function (n) { return new (n || i)(s.\u0275\u0275inject(m.HttpClient)); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
};
var T = ["expense"], R = ["revenue"], C = ["netProfit"], b = ["profitMarginPercent"];
function E(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275element(1, "cards", 6), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("config", n.expenseRevenue());
} }
function _(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.totalExpense);
} }
function P(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.totalRevenue);
} }
function M(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("\u20B9", n.summary.netProfit);
} }
function S(i, t) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.summary.profitMarginPercent);
} }
var f = class i {
    constructor(t) { this.transactionService = t; }
    transactionService;
    iconService = g(y);
    expenseRevenue = l([]);
    transactions = [];
    summary = null;
    loading = !1;
    errorMessage = "";
    expenseTemplate;
    revenueTemplate;
    netProfitTemplate;
    profitMarginPercentTemplate;
    ngOnInit() { this.fetchData(), this.iconService.registerIcons(["dashboard", "warning"]); }
    fetchData() { this.loading = !0, this.transactionService.getTransactions().subscribe({ next: t => { this.transactions = t.data, this.loading = !1; }, error: t => { this.errorMessage = "Failed to load transactions", this.loading = !1; } }), this.transactionService.getFinancialSummary().subscribe({ next: t => { this.summary = t.data; } }); }
    onDelete(t) { confirm("Are you sure you want to delete this record?") && this.transactionService.deleteTransaction(t).subscribe({ next: () => { this.fetchData(); } }); }
    fetchFn = () => this.transactionService.getTransactions();
    gridConfig = l({ gridId: "transactions-grid", title: "All financial transactions", pageSize: 10, columns: [{ field: "type", headerName: "Type", type: "badge", badgeColorMap: { REVENUE: { bg: "#dcfce7", text: "#15803d" }, EXPENSE: { bg: "#fee2e2", text: "#b91c1c" } } }, { field: "category", headerName: "Category", type: "text" }, { field: "amount", headerName: "Amount", type: "currency", currencySymbol: "\u20B9" }, { field: "createdAt", headerName: "Date", type: "date" }, { field: "actions", headerName: "Actions", type: "actions", actions: [{ name: "delete", label: "Delete", btnClass: "btn-danger" }] }] });
    handleAction(t) { t.actionName === "delete" && this.transactionService.deleteTransaction(t.rowData._id).subscribe(() => { alert("Transaction deleted!"); }); }
    ngAfterViewInit() { let t = c({ expense: this.expenseTemplate, revenue: this.revenueTemplate, netProfit: this.netProfitTemplate, profitMarginPercent: this.profitMarginPercentTemplate }); this.expenseRevenue.set(t); }
    static \u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(o)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["expense-revenue"]], viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(T, 5)(R, 5)(C, 5)(b, 5), n & 2) {
            let r;
            e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.expenseTemplate = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.revenueTemplate = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.netProfitTemplate = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.profitMarginPercentTemplate = r.first);
        } }, decls: 10, vars: 3, consts: [["expense", ""], ["revenue", ""], ["netProfit", ""], ["profitMarginPercent", ""], [1, "action-card-container"], [3, "actionTriggered", "config", "fetchService"], ["type", "inline", 3, "config"]], template: function (n, a) { n & 1 && (e.\u0275\u0275conditionalCreate(0, E, 2, 1, "div", 4), e.\u0275\u0275template(1, _, 2, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, P, 2, 1, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)(5, M, 2, 1, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor)(7, S, 2, 1, "ng-template", null, 3, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(9, "agGrid-ui", 5), e.\u0275\u0275listener("actionTriggered", function (u) { return a.handleAction(u); }), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275conditional(a.summary ? 0 : -1), e.\u0275\u0275advance(9), e.\u0275\u0275property("config", a.gridConfig())("fetchService", a.fetchFn)); }, dependencies: [v, x, h], encapsulation: 2 });
};
export { f as ExpenseRevenueComponent };
