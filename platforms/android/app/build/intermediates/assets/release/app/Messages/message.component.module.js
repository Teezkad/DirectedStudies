"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var message_routing_module_1 = require("./message-routing.module");
var message_component_1 = require("./message.component");
var messageModule = /** @class */ (function () {
    function messageModule() {
    }
    messageModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                message_routing_module_1.messageRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                message_component_1.messageComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], messageModule);
    return messageModule;
}());
exports.messageModule = messageModule;
