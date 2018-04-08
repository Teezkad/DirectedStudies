"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var classroom_routes_1 = require("./classroom.routes");
var classroom_component_1 = require("./classroom.component");
var services_1 = require("../services");
var classroomModule = /** @class */ (function () {
    function classroomModule() {
    }
    classroomModule = tslib_1.__decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nyb29tLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMsdURBQXNEO0FBQ3RELDZEQUEyRDtBQUMzRCx3Q0FBNEU7QUFxQjVFO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBbEIzQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLG1DQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCx5QkFBYztnQkFDZCwwQkFBZTtnQkFDZix1QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHdDQUFrQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDVCx3Q0FBa0I7YUFDbkI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY2xhc3Nyb29tUm91dGluZyB9IGZyb20gXCIuL2NsYXNzcm9vbS5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgY2xhc3Nyb29tQ29tcG9uZW50IH0gZnJvbSBcIi4vY2xhc3Nyb29tLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgY2xhc3Nyb29tUm91dGluZ1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCYWNrZW5kU2VydmljZSxcclxuICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgIFV0aWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBjbGFzc3Jvb21Db21wb25lbnRcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW1xyXG4gICAgY2xhc3Nyb29tQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgY2xhc3Nyb29tTW9kdWxlIHsgfVxyXG4iXX0=