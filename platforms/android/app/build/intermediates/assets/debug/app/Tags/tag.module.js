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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHNDQUF5QztBQUN6QywyQ0FBMEM7QUFDMUMsaURBQStDO0FBQy9DLHdDQUE0RTtBQXFCNUU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWxCckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qix1QkFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHlCQUFjO2dCQUNkLDBCQUFlO2dCQUNmLHVCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgdGFnUm91dGluZyB9IGZyb20gXCIuL3RhZy5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgdGFnQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgdGFnUm91dGluZ1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCYWNrZW5kU2VydmljZSxcclxuICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgIFV0aWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICB0YWdDb21wb25lbnRcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW1xyXG4gICAgdGFnQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgdGFnTW9kdWxlIHsgfVxyXG4iXX0=