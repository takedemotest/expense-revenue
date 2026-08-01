import { inject as m, signal as p } from "@angular/core";
import { IconService as l } from "@takedemotest/krishito-ui-icons";
import { MatIconModule as d } from "@angular/material/icon";
import { CardsComponent as f } from "@takedemotest/krishito-ui-card";
var r = i => [{ id: "Milk Production", title: "Today's Milk Production", icon: "warning", showHeader: !0, hasBodyContent: i.milkProduction }, { id: "Inventory Alerts", title: "Inventory Alerts", icon: "warning", showHeader: !0, hasBodyContent: i.inventoryAlerts }, { id: "Upcoming Tasks", title: "Upcoming Tasks", icon: "warning", showHeader: !0, hasBodyContent: i.upcomingTasks }];
import * as e from "@angular/core";
import * as c from "@angular/material/icon";
var u = ["milkProduction"], y = ["inventoryAlerts"], T = ["upcomingTasks"], s = class i {
    iconService = m(l);
    taskNotification = p([]);
    milkProductionTemplate;
    inventoryAlertsTemplate;
    upcomingTasksTemplate;
    ngOnInit() { this.iconService.registerIcons(["dashboard", "warning"]); }
    ngAfterViewInit() { let a = r({ milkProduction: this.milkProductionTemplate, inventoryAlerts: this.inventoryAlertsTemplate, upcomingTasks: this.upcomingTasksTemplate }); this.taskNotification.set(a); }
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["expense-revenue"]], viewQuery: function (n, t) { if (n & 1 && e.\u0275\u0275viewQuery(u, 5)(y, 5)(T, 5), n & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (t.milkProductionTemplate = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (t.inventoryAlertsTemplate = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (t.upcomingTasksTemplate = o.first);
        } }, decls: 5, vars: 4, consts: [[3, "svgIcon"], [1, "action-card-container"], ["type", "inline", 3, "config"]], template: function (n, t) { n & 1 && (e.\u0275\u0275element(0, "mat-icon", 0)(1, "mat-icon", 0)(2, "mat-icon", 0), e.\u0275\u0275elementStart(3, "div", 1), e.\u0275\u0275element(4, "cards", 2), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("svgIcon", "dashboard"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "warning"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "addicon"), e.\u0275\u0275advance(2), e.\u0275\u0275property("config", t.taskNotification())); }, dependencies: [d, c.MatIcon, f], encapsulation: 2 });
};
export { s as ExpenseRevenueComponent };
