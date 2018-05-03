"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var tag_routes_1 = require("./tag.routes");
var tag_component_1 = require("./tag.component");
var services_1 = require("../services");
var tagModule = /** @class */ (function () {
    function tagModule() {
    }
    tagModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                tag_routes_1.tagRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                tag_component_1.tagComponent
            ],
            bootstrap: [
                tag_component_1.tagComponent
            ]
        })
    ], tagModule);
    return tagModule;
}());
exports.tagModule = tagModule;
