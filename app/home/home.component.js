"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var firebase = require("nativescript-plugin-firebase");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, firebaseService, backendService) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.backendService = backendService;
        this.currentUser = backend_service_1.BackendService.token;
        this.person = firebase.getCurrentUser();
        this.human = JSON.stringify(this.person);
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
        // this.users$ = <any>this.firebaseService.getMyUserList();
        this.users$ = this.firebaseService.getMyUserList();
        this.users$.subscribe(function (val) { return console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id))); });
        console.log("My uid is" + backend_service_1.BackendService.Uid);
        //     console.log("cureent user is "+ JSON.stringify(persona));
        // console.log(JSON.stringify(name.__zone_symbol__value));
        // console.log("Firebase user = "+ JSON.stringify(ref));
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
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
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.logOut = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    //delete classroo
    HomeComponent.prototype.deleteCl = function (classroom) {
        console.log("deleting");
        this.firebaseService.delete(classroom)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    HomeComponent.prototype.navclass = function () {
        this.routerExtensions.navigate(["/classroom"]);
    };
    HomeComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year) {
        var _this = this;
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom)
            .then(function (message) {
            alert(message);
            //update the user's node to include a list of classes
            _this.firebaseService.userRegister(id, Cname, Prof, Year);
            console.log("Classroom successfully registered");
        });
    };
    //to store all available data for each user, use backend service to store the value of each attrinute 
    //for every users
    //this is to turn off the delete button 
    HomeComponent.prototype.navTag = function () {
        this.routerExtensions.navigate(["/tag"]);
    };
    HomeComponent.prototype.activateClass = function (id, name) {
        backend_service_1.BackendService.CID = id;
        backend_service_1.BackendService.Cname = name;
        console.log(name + " is now active class");
        alert(name + " is now active class");
    };
    HomeComponent.prototype.delete = function (tag) {
        this.firebaseService.deleteTag(tag)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWFqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QjtRQURoRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxwRixnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBTWhDLENBQUM7SUFjTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEUsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFD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WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQU13QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBMEIsZ0NBQWM7T0FOM0UsYUFBYSxDQW9IekI7SUFBRCxvQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlciA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG4gICAgcGVyc29uID0gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGh1bWFuID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJzb24pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15Q2xhc3NMaXN0KCk7XHJcbiAgICAgICAgLy8gdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoKTtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlVc2VyTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coQmFja2VuZFNlcnZpY2UuVWlkID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkodmFsWzBdLmlkKSkpKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSB1aWQgaXNcIisgQmFja2VuZFNlcnZpY2UuVWlkKTtcclxuXHJcblxyXG5cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImN1cmVlbnQgdXNlciBpcyBcIisgSlNPTi5zdHJpbmdpZnkocGVyc29uYSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG5hbWUuX196b25lX3N5bWJvbF9fdmFsdWUpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgdXNlciA9IFwiKyBKU09OLnN0cmluZ2lmeShyZWYpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGNyZWF0ZTogQ2xhc3Nyb29tO1xyXG4gXHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy9kZWxldGUgY2xhc3Nyb29cclxuICAgICAgZGVsZXRlQ2woY2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmdcIik7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlKGNsYXNzcm9vbSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBuYXZjbGFzcygpe1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xhc3Nyb29tXCJdKTtcclxuICAgICAgfVxyXG5cclxuICAgIGluQ2xhc3MoY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGlkOiBzdHJpbmcsIENuYW1lOiBzdHJpbmcsIFByb2Y6IHN0cmluZywgWWVhcjogc3RyaW5nKXtcclxuICAgICAgICAgLy91cGRhdGUgdGhlIGNsYXNzcm9vbSBub2RlIHRvIGluY2x1ZGUgdXNlcnMgd2hvIHJlZ2lzdGVyZWRcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbSlcclxuICAgICAgLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgdXNlcidzIG5vZGUgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVzZXJSZWdpc3RlcihpZCwgQ25hbWUsIFByb2YsIFllYXIpXHJcbiAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xhc3Nyb29tIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICB9KSBcclxuICAgIH1cclxuICAgICAgLy90byBzdG9yZSBhbGwgYXZhaWxhYmxlIGRhdGEgZm9yIGVhY2ggdXNlciwgdXNlIGJhY2tlbmQgc2VydmljZSB0byBzdG9yZSB0aGUgdmFsdWUgb2YgZWFjaCBhdHRyaW51dGUgXHJcbiAgICAgIC8vZm9yIGV2ZXJ5IHVzZXJzXHJcbiAgICAgIFxyXG5cclxuICAgICAgLy90aGlzIGlzIHRvIHR1cm4gb2ZmIHRoZSBkZWxldGUgYnV0dG9uIFxyXG5cclxuICAgICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQ2xhc3MoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKXtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DSUQgPSBpZDtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgYWxlcnQobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICB9XHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlVGFnKHRhZylcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICB9KTtcclxuICB9IFxyXG4gICAgICBcclxuXHJcbn1cclxuIl19