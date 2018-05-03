"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var Score_routing_1 = require("./Score.routing");
var Score_component_1 = require("./Score.component");
var ScoreModule = /** @class */ (function () {
    function ScoreModule() {
    }
    ScoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                Score_routing_1.ScoreRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                Score_component_1.ScoreComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ScoreModule);
    return ScoreModule;
}());
exports.ScoreModule = ScoreModule;
