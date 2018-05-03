"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var question_routes_1 = require("./question.routes");
var question_component_1 = require("./question.component");
var services_1 = require("../services");
var questionModule = /** @class */ (function () {
    function questionModule() {
    }
    questionModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                question_routes_1.questionRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                question_component_1.questionComponent
            ],
            bootstrap: [
                question_component_1.questionComponent
            ]
        })
    ], questionModule);
    return questionModule;
}());
exports.questionModule = questionModule;
