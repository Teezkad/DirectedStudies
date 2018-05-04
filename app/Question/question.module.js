"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var question_routes_1 = require("./question.routes");
var question_component_1 = require("./question.component");
var services_1 = require("../services");
var questionModule = /** @class */ (function () {
    function questionModule() {
    }
    questionModule = tslib_1.__decorate([
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
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsc0NBQXlDO0FBQ3pDLHFEQUFvRDtBQUNwRCwyREFBeUQ7QUFDekQsd0NBQTRFO0FBcUI1RTtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWxCMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixpQ0FBZTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCx5QkFBYztnQkFDZCwwQkFBZTtnQkFDZix1QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHNDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxzQ0FBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcXVlc3Rpb25Sb3V0aW5nIH0gZnJvbSBcIi4vcXVlc3Rpb24ucm91dGVzXCI7XHJcbmltcG9ydCB7IHF1ZXN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vcXVlc3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBxdWVzdGlvblJvdXRpbmdcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBVdGlsc1NlcnZpY2VcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgcXVlc3Rpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW1xyXG4gICAgcXVlc3Rpb25Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBxdWVzdGlvbk1vZHVsZSB7IH1cclxuIl19
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
