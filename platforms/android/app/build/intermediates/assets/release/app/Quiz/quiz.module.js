"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var quiz_routing_module_1 = require("./quiz-routing.module");
var quiz_component_1 = require("./quiz.component");
var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                quiz_routing_module_1.QuizRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                quiz_component_1.QuizComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], QuizModule);
    return QuizModule;
}());
exports.QuizModule = QuizModule;
