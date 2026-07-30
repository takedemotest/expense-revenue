import { inject as r } from "@angular/core";
import { IconService as a } from "@takedemotest/krishito-ui-icons";
import { MatIconModule as s } from "@angular/material/icon";
import * as e from "@angular/core";
import * as i from "@angular/material/icon";
var t = class o {
    iconService = r(a);
    ngOnInit() { this.iconService.registerIcons(["dashboard", "warning"]); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["expense-revenue"]], decls: 5, vars: 3, consts: [[3, "svgIcon"]], template: function (n, p) { n & 1 && (e.\u0275\u0275element(0, "mat-icon", 0)(1, "mat-icon", 0)(2, "mat-icon", 0), e.\u0275\u0275elementStart(3, "h1"), e.\u0275\u0275text(4, "Testing Done."), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("svgIcon", "dashboard"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "warning"), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", "addicon")); }, dependencies: [s, i.MatIcon], encapsulation: 2 });
};
export { t as ExpenseRevenueComponent };
