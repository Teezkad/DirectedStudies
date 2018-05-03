"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var question_routes_1 = require("./question.routes");
var question_component_1 = require("./question.component");
var services_1 = require("../services");
var questionModule = /** @class */ (function () {
    function questionModule() {
    }
    questionModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                question_routes_1.questionRouting
            ],
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService
            ],
            declarations: [
                question_component_1.questionComponent
            ],
            bootstrap: [
                question_component_1.questionComponent
            ]
        })
    ], questionModule);
    return questionModule;
}());
exports.questionModule = questionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMscURBQW9EO0FBQ3BELDJEQUF5RDtBQUN6RCx3Q0FBNEU7QUFxQjVFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBbEIxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGlDQUFlO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHlCQUFjO2dCQUNkLDBCQUFlO2dCQUNmLHVCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osc0NBQWlCO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHNDQUFpQjthQUNsQjtTQUNGLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBxdWVzdGlvblJvdXRpbmcgfSBmcm9tIFwiLi9xdWVzdGlvbi5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgcXVlc3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi9xdWVzdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIHF1ZXN0aW9uUm91dGluZ1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCYWNrZW5kU2VydmljZSxcclxuICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgIFV0aWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBxdWVzdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBxdWVzdGlvbkNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIHF1ZXN0aW9uTW9kdWxlIHsgfVxyXG4iXX0=