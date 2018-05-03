"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var messageComponent = /** @class */ (function () {
    function messageComponent(routerExtensions, firebaseService, route, firebaseService1) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.firebaseService1 = firebaseService1;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    messageComponent.prototype.ngOnInit = function () {
        this.messages$ = this.firebaseService.getUserMessages();
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(messageComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    messageComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    messageComponent.prototype.getMessage = function (mid, rid, message) {
        var navigationExtras = {
            queryParams: {
                "Rid": rid,
                "Message": message,
                "Mid": mid
            }
        };
        console.log("Request id is: " + rid);
        this.routerExtensions.navigate(["messageDetails"], navigationExtras);
        this.firebaseService1.messageSeen(mid);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], messageComponent.prototype, "drawerComponent", void 0);
    messageComponent = __decorate([
        core_1.Component({
            selector: "message",
            moduleId: module.id,
            templateUrl: "./message.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute,
            services_1.FirebaseService1])
    ], messageComponent);
    return messageComponent;
}());
exports.messageComponent = messageComponent;
