"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlEO0FBRXpELHNEQUE2QztBQUM3QywyQ0FBK0M7QUFFL0Msa0VBQWdFO0FBQ2hFLG1GQUFpRjtBQUlqRjs7OzhEQUc4RDtBQU85RDtJQTZCSSwyQkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDO1FBRHhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBN0JyQyxVQUFLLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFHLGdDQUFjLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLFVBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQTZCN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFBQSxDQUFDO0lBdEJqQyxvQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQ7Ozs7a0VBSThEO0lBQzlELDBDQUFjLEdBQWQsVUFBZSxTQUFpQjtRQUM1QixNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQVlELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUE5Qk07UUFBUixZQUFLLEVBQUU7OzJEQUFzQjtJQVZyQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7aURBOEJ3QyxvQ0FBZ0I7WUFDekIsMEJBQWU7T0E5Qm5DLGlCQUFpQixDQXlDN0I7SUFBRCx3QkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL21vZGVscy9Vc2VyLm1vZGVsJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgaW4geW91ciBhcHAgZHJhd2VyIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXHJcbiogQWRkIG5ldyBkYXRhIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGluIHRoZSBkcmF3ZXIgaGVyZSBpbiB0aGUgZm9ybSBvZiBwcm9wZXJ0aWVzLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15RHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG4gICAgcHVibGljIGluc3RydWN0b3IgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG4gICAgcHVibGljIGZuYW1lID0gQmFja2VuZFNlcnZpY2UuVW5hbWU7XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVGhlIFwic2VsZWN0ZWRQYWdlXCIgaXMgYSBjb21wb25lbnQgaW5wdXQgcHJvcGVydHkuXHJcbiAgICAqIEl0IGlzIHVzZWQgdG8gcGFzcyB0aGUgY3VycmVudCBwYWdlIHRpdGxlIGZyb20gdGhlIGNvbnRhaW5pbmcgcGFnZSBjb21wb25lbnQuXHJcbiAgICAqIFlvdSBjYW4gY2hlY2sgaG93IGl0IGlzIHVzZWQgaW4gdGhlIFwiaXNQYWdlU2VsZWN0ZWRcIiBmdW5jdGlvbiBiZWxvdy5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZFBhZ2U6IHN0cmluZztcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBNeURyYXdlckNvbXBvbmVudCBcIm9uSW5pdFwiIGV2ZW50IGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSB0aGUgcHJvcGVydGllcyBkYXRhIHZhbHVlcy5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gaXMgYm91bmQgdG8gZXZlcnkgbmF2aWdhdGlvbiBpdGVtIG9uIHRoZSA8TXlEcmF3ZXJJdGVtPi5cclxuICAgICogSXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaXRlbSBzaG91bGQgaGF2ZSB0aGUgXCJzZWxlY3RlZFwiIGNsYXNzLlxyXG4gICAgKiBUaGUgXCJzZWxlY3RlZFwiIGNsYXNzIGNoYW5nZXMgdGhlIHN0eWxlcyBvZiB0aGUgaXRlbSwgc28gdGhhdCB5b3Uga25vdyB3aGljaCBwYWdlIHlvdSBhcmUgb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaXNQYWdlU2VsZWN0ZWQocGFnZVRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7dGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gQmFja2VuZFNlcnZpY2UuVW5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7fVxyXG5cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gICAgICB9XHJcbn1cclxuIl19
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
