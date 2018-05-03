"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var topicScoreComponent = /** @class */ (function () {
    function topicScoreComponent(routerExtensions, firebaseService, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.route.queryParams.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.fname = params["fname"];
            _this.lname = params["lname"];
        });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    topicScoreComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.tags$ = this.firebaseService.getMyTagList();
    };
    Object.defineProperty(topicScoreComponent.prototype, "sideDrawerTransition", {
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
    topicScoreComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    topicScoreComponent.prototype.viewScores = function (tid, name) {
        var navigationExtras = {
            queryParams: {
                "tid": tid,
                "name": name,
                "uid": this.uid,
                "fname": this.fname,
                "lname": this.lname
            }
        };
        this.routerExtensions.navigate(["Score"], navigationExtras);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], topicScoreComponent.prototype, "drawerComponent", void 0);
    topicScoreComponent = __decorate([
        core_1.Component({
            selector: "topicScore",
            moduleId: module.id,
            templateUrl: "./topicScore.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute])
    ], topicScoreComponent);
    return topicScoreComponent;
}());
exports.topicScoreComponent = topicScoreComponent;
