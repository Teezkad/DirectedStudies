"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var question_component_1 = require("./question.component");
var routes = [
    { path: "", component: question_component_1.questionComponent },
];
var questionRouting = /** @class */ (function () {
    function questionRouting() {
    }
    questionRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], questionRouting);
    return questionRouting;
}());
exports.questionRouting = questionRouting;
