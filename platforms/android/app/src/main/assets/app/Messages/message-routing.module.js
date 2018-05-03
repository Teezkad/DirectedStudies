"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var message_component_1 = require("./message.component");
var routes = [
    { path: "", component: message_component_1.messageComponent }
];
var messageRoutingModule = /** @class */ (function () {
    function messageRoutingModule() {
    }
    messageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], messageRoutingModule);
    return messageRoutingModule;
}());
exports.messageRoutingModule = messageRoutingModule;
