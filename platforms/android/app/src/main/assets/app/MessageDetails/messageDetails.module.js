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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZURldGFpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZURldGFpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMsaUVBQWdFO0FBQ2hFLHVFQUFxRTtBQUNyRSx3Q0FBNEU7QUFxQjVFO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFsQmhDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkNBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHlCQUFjO2dCQUNkLDBCQUFlO2dCQUNmLHVCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0RBQXVCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGtEQUF1QjthQUN4QjtTQUNGLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlRGV0YWlsc1JvdXRpbmcgfSBmcm9tIFwiLi9tZXNzYWdlRGV0YWlscy5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZURldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlRGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIG1lc3NhZ2VEZXRhaWxzUm91dGluZ1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCYWNrZW5kU2VydmljZSxcclxuICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgIFV0aWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBtZXNzYWdlRGV0YWlsc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBtZXNzYWdlRGV0YWlsc0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIG1lc3NhZ2VEZXRhaWxzTW9kdWxlIHsgfVxyXG4iXX0=