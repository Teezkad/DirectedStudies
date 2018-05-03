"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_model_1 = require("../../models/User.model");
var services_1 = require("../../services");
var backend_service_1 = require("../../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = /** @class */ (function () {
    function MyDrawerComponent(routerExtensions, firebaseService) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.Cname = backend_service_1.BackendService.Cname;
        this.instructor = backend_service_1.BackendService.instructor;
        this.fname = backend_service_1.BackendService.Uname;
        this.TA = backend_service_1.BackendService.TA;
        this.user = new User_model_1.User();
        this.user.email = backend_service_1.BackendService.Uname;
        this.user.password = "";
    }
    MyDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
        this.messages$ = this.firebaseService.getUserMessages();
        this.messages$.subscribe(function (msgs) {
            var len = msgs.length;
            var count = 0;
            _this.msg = 0;
            if (msgs != null) {
                for (var i = 0; i < len; i++) {
                    if (msgs[i].Seen == false) {
                        count++;
                    }
                }
                _this.msg = count;
            }
        });
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    MyDrawerComponent.prototype.logOut = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.scss"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
