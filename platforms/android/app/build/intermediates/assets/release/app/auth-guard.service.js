"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var backend_service_1 = require("./services/backend.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    AuthGuard.prototype.canActivate = function () {
        if (backend_service_1.BackendService.isLoggedIn()) {
            return true;
        }
        else {
            this.routerExtensions.navigate(["/login"]);
            console.log("Navigating to login");
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, router_extensions_1.RouterExtensions])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
