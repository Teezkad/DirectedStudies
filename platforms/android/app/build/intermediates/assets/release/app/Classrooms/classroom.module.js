"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var classroom_routes_1 = require("./classroom.routes");
var classroom_component_1 = require("./classroom.component");
var services_1 = require("../services");
var classroomModule = /** @class */ (function () {
    function classroomModule() {
    }
    classroomModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                classroom_routes_1.classroomRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                classroom_component_1.classroomComponent
            ],
            bootstrap: [
                classroom_component_1.classroomComponent
            ]
        })
    ], classroomModule);
    return classroomModule;
}());
exports.classroomModule = classroomModule;
