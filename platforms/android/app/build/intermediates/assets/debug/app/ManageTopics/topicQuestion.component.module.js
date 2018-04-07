"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var topicQuestion_routing_module_1 = require("./topicQuestion-routing.module");
var topicQuestion_component_1 = require("./topicQuestion.component");
var topicQuestionModule = /** @class */ (function () {
    function topicQuestionModule() {
    }
    topicQuestionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                topicQuestion_routing_module_1.topicQuestionRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                topicQuestion_component_1.topicQuestionComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], topicQuestionModule);
    return topicQuestionModule;
}());
exports.topicQuestionModule = topicQuestionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNRdWVzdGlvbi5jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWNRdWVzdGlvbi5jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsK0VBQTRFO0FBQzVFLHFFQUFtRTtBQWVuRTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBYi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlEQUEwQjtnQkFDMUIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixnREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyB0b3BpY1F1ZXN0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RvcGljUXVlc3Rpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgdG9waWNRdWVzdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL3RvcGljUXVlc3Rpb24uY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICB0b3BpY1F1ZXN0aW9uUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICB0b3BpY1F1ZXN0aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIHRvcGljUXVlc3Rpb25Nb2R1bGUgeyB9XHJcbiJdfQ==