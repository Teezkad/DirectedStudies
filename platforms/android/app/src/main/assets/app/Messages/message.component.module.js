"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var firebase_service_1_1 = require("../services/firebase.service.1");
var shared_module_1 = require("../shared/shared.module");
var message_routing_module_1 = require("./message-routing.module");
var message_component_1 = require("./message.component");
var messageModule = /** @class */ (function () {
    function messageModule() {
    }
    messageModule = __decorate([
        core_1.NgModule({
            providers: [
                firebase_service_1_1.FirebaseService1
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                message_routing_module_1.messageRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                message_component_1.messageComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], messageModule);
    return messageModule;
}());
exports.messageModule = messageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS5jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxxRUFBZ0U7QUFFaEUseURBQXVEO0FBQ3ZELG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFrQnZEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBaEJ6QixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AscUNBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UxfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZS4xXCJcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL21lc3NhZ2Utcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgbWVzc2FnZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgbWVzc2FnZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBtZXNzYWdlTW9kdWxlIHsgfVxyXG4iXX0=