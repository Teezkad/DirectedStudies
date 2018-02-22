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
    HomeComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year, uid) {
        var _this = this;
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom)
            .then(function (message) {
            alert(message);
            //update the user's node to include a list of classes
            _this.firebaseService.userRegister(id, Cname, Prof, Year, uid);
            console.log("Classroom successfully registered");
        });
    };
    //to store all available data for each user, use backend service to store the value of each attrinute 
    //for every users
    //this is to turn off the delete button 
    HomeComponent.prototype.navTag = function () {
        this.routerExtensions.navigate(["/tag"]);
    };
    HomeComponent.prototype.activateClass = function (id, name, uid) {
        backend_service_1.BackendService.CID = id;
        backend_service_1.BackendService.Cname = name;
        console.log(name + " is now active class");
        alert(name + " is now active class");
        var navigationExtras = {
            queryParams: {
                "uid": uid,
            }
        };
        this.routerExtensions.navigate(["browse"], navigationExtras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWVqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QjtRQURoRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxwRixnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBTWhDLENBQUM7SUFjTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEUsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFD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QyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FNd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQTBCLGdDQUFjO09BTjNFLGFBQWEsQ0E2R3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdHRCxJQTZHQztBQTdHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIHBlcnNvbiA9IGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBodW1hbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGVyc29uKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2VcclxuICAgICAgICBcclxuICAgICAgICApIHsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsQ2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeUNsYXNzTGlzdCgpO1xyXG4gICAgICAgIC8vIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVVzZXJMaXN0KCk7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoKTtcclxuICAgICAgICB0aGlzLnVzZXJzJC5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlVpZCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbFswXS5pZCkpKSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgdWlkIGlzXCIrIEJhY2tlbmRTZXJ2aWNlLlVpZCk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjdXJlZW50IHVzZXIgaXMgXCIrIEpTT04uc3RyaW5naWZ5KHBlcnNvbmEpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuYW1lLl9fem9uZV9zeW1ib2xfX3ZhbHVlKSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHVzZXIgPSBcIisgSlNPTi5zdHJpbmdpZnkocmVmKSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2RlbGV0ZSBjbGFzc3Jvb1xyXG4gICAgICBkZWxldGVDbChjbGFzc3Jvb206IENsYXNzcm9vbSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoY2xhc3Nyb29tKVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgfSBcclxuXHJcbiAgICAgIG5hdmNsYXNzKCl7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jbGFzc3Jvb21cIl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgaW5DbGFzcyhjbGFzc3Jvb206IENsYXNzcm9vbSwgaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgICAgICAgLy91cGRhdGUgdGhlIGNsYXNzcm9vbSBub2RlIHRvIGluY2x1ZGUgdXNlcnMgd2hvIHJlZ2lzdGVyZWRcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbSlcclxuICAgICAgLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgdXNlcidzIG5vZGUgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY2xhc3Nlc1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVzZXJSZWdpc3RlcihpZCwgQ25hbWUsIFByb2YsIFllYXIsIHVpZClcclxuICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGFzc3Jvb20gc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgIH0pIFxyXG4gICAgfVxyXG4gICAgICAvL3RvIHN0b3JlIGFsbCBhdmFpbGFibGUgZGF0YSBmb3IgZWFjaCB1c2VyLCB1c2UgYmFja2VuZCBzZXJ2aWNlIHRvIHN0b3JlIHRoZSB2YWx1ZSBvZiBlYWNoIGF0dHJpbnV0ZSBcclxuICAgICAgLy9mb3IgZXZlcnkgdXNlcnNcclxuICAgICAgXHJcblxyXG4gICAgICAvL3RoaXMgaXMgdG8gdHVybiBvZmYgdGhlIGRlbGV0ZSBidXR0b24gXHJcblxyXG4gICAgICBuYXZUYWcoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RhZ1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDbGFzcyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DSUQgPSBpZDtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgYWxlcnQobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcblxyXG5cclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwidWlkXCI6IHVpZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgZGVsZXRlKHRhZzogVGFnKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGVUYWcodGFnKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH0gXHJcbiAgICAgIFxyXG5cclxufVxyXG4iXX0=