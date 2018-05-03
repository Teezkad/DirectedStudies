"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var login_module_1 = require("./login/login.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var modal_1 = require("./modal");
var services_1 = require("./services");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                services_1.BackendService,
                services_1.FirebaseService1,
                services_1.FirebaseService,
                services_1.UtilsService,
                app_routing_module_1.authProviders,
                modal_1.ModalComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                login_module_1.LoginModule,
                common_1.CommonModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
