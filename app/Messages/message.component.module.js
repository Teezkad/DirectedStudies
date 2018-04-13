"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var message_routing_module_1 = require("./message-routing.module");
var message_component_1 = require("./message.component");
var topicQuestionModule = /** @class */ (function () {
    function topicQuestionModule() {
    }
    topicQuestionModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                message_routing_module_1.topicQuestionRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                message_component_1.topicQuestionComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], topicQuestionModule);
    return topicQuestionModule;
}());
exports.topicQuestionModule = topicQuestionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS5jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxxRUFBZ0U7QUFFaEUseURBQXVEO0FBQ3ZELG1FQUFzRTtBQUN0RSx5REFBNkQ7QUFrQjdEO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFoQi9CLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxxQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixtREFBMEI7Z0JBQzFCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMENBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZTF9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlLjFcIlxyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IHRvcGljUXVlc3Rpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbWVzc2FnZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyB0b3BpY1F1ZXN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UxXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICB0b3BpY1F1ZXN0aW9uUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICB0b3BpY1F1ZXN0aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIHRvcGljUXVlc3Rpb25Nb2R1bGUgeyB9XHJcbiJdfQ==