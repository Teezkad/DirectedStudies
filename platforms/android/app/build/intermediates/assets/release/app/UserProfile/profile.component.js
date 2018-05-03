"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var profileComponent = /** @class */ (function () {
    function profileComponent(routerExtensions, firebaseService, route, firebaseService1) {
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
    profileComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
        this.tags$ = this.firebaseService.getMyTagList();
    };
    Object.defineProperty(profileComponent.prototype, "sideDrawerTransition", {
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
    profileComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    profileComponent.prototype.viewScore = function (tid, tname) {
        var navigationExtras = {
            queryParams: {
                "uid": backend_service_1.BackendService.Uid,
                "fname": backend_service_1.BackendService.Uname,
                "lname": "",
                "tid": tid,
                "name": tname
            }
        };
        this.routerExtensions.navigate(["Score"], navigationExtras);
    };
    profileComponent.prototype.deleteClass = function (room) {
        this.firebaseService1.deleteMyclass(room);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], profileComponent.prototype, "drawerComponent", void 0);
    profileComponent = __decorate([
        core_1.Component({
            selector: "profile",
            moduleId: module.id,
            templateUrl: "./profile.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute,
            services_1.FirebaseService1])
    ], profileComponent);
    return profileComponent;
}());
exports.profileComponent = profileComponent;
