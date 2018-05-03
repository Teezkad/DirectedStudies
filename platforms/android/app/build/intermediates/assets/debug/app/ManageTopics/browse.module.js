"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var browse_routing_module_1 = require("./browse-routing.module");
var browse_component_1 = require("./browse.component");
var modal_1 = require("../modal");
var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1,
                modal_dialog_1.ModalDialogService
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                browse_routing_module_1.BrowseRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                modal_1.ModalComponent,
                browse_component_1.BrowseComponent
            ],
            entryComponents: [modal_1.ModalComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());
exports.BrowseModule = BrowseModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHFFQUFnRTtBQUNoRSx5REFBdUQ7QUFDdkQsa0VBQXVFO0FBQ3ZFLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFDckQsa0NBQTBDO0FBeUIxQztJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXBCeEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFDO2dCQUNOLHFDQUFnQjtnQkFDaEIsaUNBQWtCO2FBQ3JCO1lBRUQsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2dCQUNuQiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNCQUFjO2dCQUNkLGtDQUFlO2FBQ2xCO1lBQ0QsZUFBZSxFQUFFLENBQUMsc0JBQWMsQ0FBQztZQUNqQyxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UuMVwiXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IEJyb3dzZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9icm93c2Utcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIHByb3ZpZGVyczpbXHJcbiAgICAgICAgRmlyZWJhc2VTZXJ2aWNlMSxcclxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBCcm93c2VDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbENvbXBvbmVudF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlTW9kdWxlIHsgfVxyXG4iXX0=