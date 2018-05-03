"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_component_1 = require("./profile.component");
var profileModule = /** @class */ (function () {
    function profileModule() {
    }
    profileModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                profile_routing_module_1.profileRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                profile_component_1.profileComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], profileModule);
    return profileModule;
}());
exports.profileModule = profileModule;
