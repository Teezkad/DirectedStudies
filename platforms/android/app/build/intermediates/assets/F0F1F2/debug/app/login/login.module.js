"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var login_routes_1 = require("./login.routes");
var login_component_1 = require("./login.component");
var services_1 = require("../services");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                login_routes_1.loginRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                login_component_1.LoginComponent
            ],
            bootstrap: [
                login_component_1.LoginComponent
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMsK0NBQThDO0FBQzlDLHFEQUFtRDtBQUNuRCx3Q0FBNEU7QUFxQjVFO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFsQnZCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsMkJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCx5QkFBYztnQkFDZCwwQkFBZTtnQkFDZix1QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWM7YUFDZjtTQUNGLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGxvZ2luUm91dGluZyB9IGZyb20gXCIuL2xvZ2luLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgbG9naW5Sb3V0aW5nXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgVXRpbHNTZXJ2aWNlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XHJcbiJdfQ==