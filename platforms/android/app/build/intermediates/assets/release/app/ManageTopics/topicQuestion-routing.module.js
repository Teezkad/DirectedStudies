"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var topicQuestion_component_1 = require("./topicQuestion.component");
var routes = [
    { path: "", component: topicQuestion_component_1.topicQuestionComponent }
];
var topicQuestionRoutingModule = /** @class */ (function () {
    function topicQuestionRoutingModule() {
    }
    topicQuestionRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], topicQuestionRoutingModule);
    return topicQuestionRoutingModule;
}());
exports.topicQuestionRoutingModule = topicQuestionRoutingModule;
