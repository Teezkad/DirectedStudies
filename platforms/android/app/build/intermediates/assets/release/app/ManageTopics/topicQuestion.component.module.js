"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var topicQuestion_routing_module_1 = require("./topicQuestion-routing.module");
var topicQuestion_component_1 = require("./topicQuestion.component");
var topicQuestionModule = /** @class */ (function () {
    function topicQuestionModule() {
    }
    topicQuestionModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                topicQuestion_routing_module_1.topicQuestionRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                topicQuestion_component_1.topicQuestionComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], topicQuestionModule);
    return topicQuestionModule;
}());
exports.topicQuestionModule = topicQuestionModule;
