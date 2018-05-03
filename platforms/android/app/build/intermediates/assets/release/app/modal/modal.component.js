"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(params) {
        this.params = params;
        this.frameworks = "";
    }
    ModalComponent.prototype.sendMessage = function () {
        return this.frameworks;
    };
    ModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "modal",
            moduleId: module.id,
            templateUrl: "./modal.component.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
