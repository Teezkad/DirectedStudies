"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var messageDetails_routes_1 = require("./messageDetails.routes");
var messageDetails_component_1 = require("./messageDetails.component");
var services_1 = require("../services");
var messageDetailsModule = /** @class */ (function () {
    function messageDetailsModule() {
    }
    messageDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                messageDetails_routes_1.messageDetailsRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                messageDetails_component_1.messageDetailsComponent
            ],
            bootstrap: [
                messageDetails_component_1.messageDetailsComponent
            ]
        })
    ], messageDetailsModule);
    return messageDetailsModule;
}());
exports.messageDetailsModule = messageDetailsModule;
