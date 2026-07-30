import * as i from "@angular/core";
import { inject as o } from "@angular/core";
import { MatIconRegistry as n } from "@angular/material/icon";
import { DomSanitizer as s } from "@angular/platform-browser";
var g = (() => { class t {
    iconRegistry = o(n);
    sanitizer = o(s);
    constructor() { this.registerIcons(["addicon"]); }
    registerIcons(e) { e.forEach(r => { this.iconRegistry.addSvgIcon(r, this.sanitizer.bypassSecurityTrustResourceUrl(`svg-icons/${r}.svg`)); }); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
export { g as IconService };
