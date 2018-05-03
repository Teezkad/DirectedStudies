"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var topicScore_component_1 = require("./topicScore.component");
var routes = [
    { path: "", component: topicScore_component_1.topicScoreComponent }
];
var topicScoreRoutingModule = /** @class */ (function () {
    function topicScoreRoutingModule() {
    }
    topicScoreRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], topicScoreRoutingModule);
    return topicScoreRoutingModule;
}());
exports.topicScoreRoutingModule = topicScoreRoutingModule;
