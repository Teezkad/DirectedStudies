"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var classroom_component_1 = require("./classroom.component");
var routes = [
    { path: "", component: classroom_component_1.classroomComponent },
];
var classroomRouting = /** @class */ (function () {
    function classroomRouting() {
    }
    classroomRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], classroomRouting);
    return classroomRouting;
}());
exports.classroomRouting = classroomRouting;
