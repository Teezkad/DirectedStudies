"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var messageDetails_component_1 = require("./messageDetails.component");
var routes = [
    { path: "", component: messageDetails_component_1.messageDetailsComponent },
];
var messageDetailsRouting = /** @class */ (function () {
    function messageDetailsRouting() {
    }
    messageDetailsRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], messageDetailsRouting);
    return messageDetailsRouting;
}());
exports.messageDetailsRouting = messageDetailsRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZURldGFpbHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZURldGFpbHMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSx1RUFBcUU7QUFFckUsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtDQUNqRCxDQUFDO0FBUUY7SUFBQTtJQUFxQyxDQUFDO0lBQXpCLHFCQUFxQjtRQUxqQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUVXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQSxBQUF0QyxJQUFzQztBQUF6QixzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1lc3NhZ2VEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZURldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogbWVzc2FnZURldGFpbHNDb21wb25lbnQgfSxcclxuXTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBtZXNzYWdlRGV0YWlsc1JvdXRpbmcgeyB9XHJcbiJdfQ==