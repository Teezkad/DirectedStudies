"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Score_component_1 = require("./Score.component");
var routes = [
    { path: "", component: Score_component_1.ScoreComponent }
];
var ScoreRoutingModule = /** @class */ (function () {
    function ScoreRoutingModule() {
    }
    ScoreRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ScoreRoutingModule);
    return ScoreRoutingModule;
}());
exports.ScoreRoutingModule = ScoreRoutingModule;
