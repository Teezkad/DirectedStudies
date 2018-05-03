"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var quiz_component_1 = require("./quiz.component");
var routes = [
    { path: "", component: quiz_component_1.QuizComponent }
];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());
exports.QuizRoutingModule = QuizRoutingModule;
