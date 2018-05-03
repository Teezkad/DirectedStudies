"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var topicScore_routing_1 = require("./topicScore.routing");
var topicScore_component_1 = require("./topicScore.component");
var topicScoreModule = /** @class */ (function () {
    function topicScoreModule() {
    }
    topicScoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                topicScore_routing_1.topicScoreRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                topicScore_component_1.topicScoreComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], topicScoreModule);
    return topicScoreModule;
}());
exports.topicScoreModule = topicScoreModule;
