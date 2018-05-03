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
