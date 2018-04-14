"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var login_routes_1 = require("./login.routes");
var login_component_1 = require("./login.component");
var services_1 = require("../services");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsc0NBQXlDO0FBQ3pDLCtDQUE4QztBQUM5QyxxREFBbUQ7QUFDbkQsd0NBQTRFO0FBcUI1RTtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBbEJ2QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDJCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QseUJBQWM7Z0JBQ2QsMEJBQWU7Z0JBQ2YsdUJBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGdDQUFjO2FBQ2Y7U0FDRixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBsb2dpblJvdXRpbmcgfSBmcm9tIFwiLi9sb2dpbi5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIGxvZ2luUm91dGluZ1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCYWNrZW5kU2VydmljZSxcclxuICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgIFV0aWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2dpbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBMb2dpbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxyXG4iXX0=