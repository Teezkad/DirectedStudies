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
