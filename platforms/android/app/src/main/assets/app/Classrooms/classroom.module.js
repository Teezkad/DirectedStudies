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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nyb29tLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHNDQUF5QztBQUN6Qyx1REFBc0Q7QUFDdEQsNkRBQTJEO0FBQzNELHdDQUE0RTtBQXFCNUU7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFsQjNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsbUNBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHlCQUFjO2dCQUNkLDBCQUFlO2dCQUNmLHVCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osd0NBQWtCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHdDQUFrQjthQUNuQjtTQUNGLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBjbGFzc3Jvb21Sb3V0aW5nIH0gZnJvbSBcIi4vY2xhc3Nyb29tLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBjbGFzc3Jvb21Db21wb25lbnQgfSBmcm9tIFwiLi9jbGFzc3Jvb20uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBjbGFzc3Jvb21Sb3V0aW5nXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgVXRpbHNTZXJ2aWNlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIGNsYXNzcm9vbUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBjbGFzc3Jvb21Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBjbGFzc3Jvb21Nb2R1bGUgeyB9XHJcbiJdfQ==