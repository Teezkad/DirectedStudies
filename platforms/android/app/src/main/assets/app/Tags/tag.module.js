"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var tag_routes_1 = require("./tag.routes");
var tag_component_1 = require("./tag.component");
var services_1 = require("../services");
var tagModule = /** @class */ (function () {
    function tagModule() {
    }
    tagModule = tslib_1.__decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFDekMsMkNBQTBDO0FBQzFDLGlEQUErQztBQUMvQyx3Q0FBNEU7QUFxQjVFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFsQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsdUJBQVU7YUFDWDtZQUNELFNBQVMsRUFBRTtnQkFDVCx5QkFBYztnQkFDZCwwQkFBZTtnQkFDZix1QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHRhZ1JvdXRpbmcgfSBmcm9tIFwiLi90YWcucm91dGVzXCI7XHJcbmltcG9ydCB7IHRhZ0NvbXBvbmVudCB9IGZyb20gXCIuL3RhZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UsIEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIHRhZ1JvdXRpbmdcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBVdGlsc1NlcnZpY2VcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgdGFnQ29tcG9uZW50XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtcclxuICAgIHRhZ0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIHRhZ01vZHVsZSB7IH1cclxuIl19