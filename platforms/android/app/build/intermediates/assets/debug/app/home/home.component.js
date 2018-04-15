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
    function HomeComponent(routerExtensions, firebaseService, backendService, firebaseService1) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.backendService = backendService;
        this.firebaseService1 = firebaseService1;
        this.currentUser = backend_service_1.BackendService.token;
        this.person = firebase.getCurrentUser();
        this.human = JSON.stringify(this.person);
        this.show = [];
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        backend_service_1.BackendService.TA == false;
        backend_service_1.BackendService.instructor = false;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
        this.users$ = this.firebaseService.getMyUserList(backend_service_1.BackendService.token);
        this.users$.subscribe(function (val) {
            console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName)) + " " + JSON.parse(JSON.stringify(val[0].LastName));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
        });
        console.log("My uid is" + backend_service_1.BackendService.Uid);
        console.log("Login successful");
        this.myclassrooms$.subscribe(function (my) {
            _this.len = my.length;
            _this.myClass = my;
        });
        this.classrooms$.subscribe(function (clas) {
            _this.allClass = clas;
            _this.allClass1 = clas;
            _this.leng = clas.length;
            _this.showclasses();
        });
    };
    HomeComponent.prototype.showclasses = function () {
        console.log("all classes size is  " + this.leng);
        console.log("my class length is " + this.len);
        if (this.myclassrooms$ == null) {
            this.ngOnInit();
        }
        for (var i = 0; i < this.leng; i++) {
            var all = JSON.parse(JSON.stringify(this.allClass1[i].ID));
            for (var j = 0; j < this.len; j++) {
                var my = JSON.parse(JSON.stringify(this.myClass[j].ID));
                if (all == my) {
                    this.allClass[i].registered = true;
                }
            }
        }
    };
    HomeComponent.prototype.logOut = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    //delete classroo
    HomeComponent.prototype.deleteCl = function (classroom) {
        console.log("deleting");
        this.firebaseService1.delete(classroom)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    HomeComponent.prototype.navclass = function () {
        this.routerExtensions.navigate(["/classroom"]);
    };
    HomeComponent.prototype.navques = function () {
        this.routerExtensions.navigate(["/search"]);
    };
    HomeComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year, uid, ID) {
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom, backend_service_1.BackendService.Uid, backend_service_1.BackendService.Uname, backend_service_1.BackendService.studentNum)
            .then(function (message) {
            alert(message);
            console.log("Classroom successfully registered");
        });
        this.firebaseService.userRegister(id, Cname, Prof, Year, uid, ID);
        this.ngOnInit();
    };
    //to store all available data for each user, use backend service to store the value of each attrinute 
    //for every users
    //this is to turn off the delete button 
    HomeComponent.prototype.navTag = function () {
        this.routerExtensions.navigate(["/tag"]);
    };
    HomeComponent.prototype.activateClass = function (id, name, uid, TA) {
        if (TA === void 0) { TA = []; }
        backend_service_1.BackendService.CID = id;
        backend_service_1.BackendService.Cname = name;
        console.log(id + " is now active class ID");
        console.log(name + " is now active class");
        alert(name + " is now active class");
        if (uid == backend_service_1.BackendService.token) {
            backend_service_1.BackendService.instructor = true;
            var navigationExtras = {
                queryParams: {
                    "uid": uid,
                }
            };
            this.routerExtensions.navigate(["browse"], navigationExtras);
        }
        else {
            this.routerExtensions.navigate(["/search"]);
        }
        if (TA != null) {
            for (var i = 0; i < TA.length; i++) {
                if (backend_service_1.BackendService.token == JSON.stringify(TA[i].UID)) {
                    backend_service_1.BackendService.TA == true;
                }
            }
        }
    };
    HomeComponent.prototype.delete = function (tag) {
        this.firebaseService1.deleteTag(tag)
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
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService,
            services_1.FirebaseService1])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE4RDtBQUM5RCx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWFqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN4RSxnQkFBa0M7UUFGMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBaUI3QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBVmIsQ0FBQztJQW9CTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFBQSxpQkErQkM7UUE5QkcsZ0NBQWMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO1FBQzNCLGdDQUFjLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEs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dEQsMkJBQWdCO09BUHJDLGFBQWEsQ0FnTHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhMRCxJQWdMQztBQWhMWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Q2xhc3M7XHJcbiAgICBwdWJsaWMgYWxsQ2xhc3M7XHJcbiAgICBwdWJsaWMgYWxsQ2xhc3MxO1xyXG4gICAgcHVibGljIGxlbjtcclxuICAgIHB1YmxpYyBsZW5nO1xyXG4gICAgcHVibGljIHNob3cgPSBbXTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPT0gZmFsc2U7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15Q2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoQmFja2VuZFNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5VaWQgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSh2YWxbMF0uaWQpKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSkgKyBcIiBcIiArIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkxhc3ROYW1lKSkgO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk15IHVpZCBpc1wiKyBCYWNrZW5kU2VydmljZS5VaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQuc3Vic2NyaWJlKCBteSA9PntcclxuICAgICAgICAgICAgdGhpcy5sZW4gPSBteS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGFzcyA9IG15O1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuY2xhc3Nyb29tcyQuc3Vic2NyaWJlKGNsYXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzczEgPSBjbGFzO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmcgPSBjbGFzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zaG93Y2xhc3NlcygpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd2NsYXNzZXMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBjbGFzc2VzIHNpemUgaXMgIFwiKyB0aGlzLmxlbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibXkgY2xhc3MgbGVuZ3RoIGlzIFwiKyB0aGlzLmxlbiApO1xyXG4gICAgICAgIGlmKHRoaXMubXljbGFzc3Jvb21zJCA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTwgdGhpcy5sZW5nOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgYWxsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmFsbENsYXNzMVtpXS5JRCkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG15ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm15Q2xhc3Nbal0uSUQpKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGwgPT0gbXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3NbaV0ucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy9kZWxldGUgY2xhc3Nyb29cclxuICAgICAgZGVsZXRlQ2woY2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmdcIik7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZShjbGFzc3Jvb20pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICB9IFxyXG5cclxuICAgICAgbmF2Y2xhc3MoKXtcclxuICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsYXNzcm9vbVwiXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdnF1ZXMoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgIH1cclxuXHJcbiAgICBpbkNsYXNzKGNsYXNzcm9vbTogQ2xhc3Nyb29tLCBpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgdWlkOiBzdHJpbmcsIElEOiBudW1iZXIpe1xyXG4gICAgICAgICAvL3VwZGF0ZSB0aGUgY2xhc3Nyb29tIG5vZGUgdG8gaW5jbHVkZSB1c2VycyB3aG8gcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gICAgICAudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcblxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS51c2VyUmVnaXN0ZXIoaWQsIENuYW1lLCBQcm9mLCBZZWFyLCB1aWQsIElEKTtcclxuXHJcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIH1cclxuICAgICAgLy90byBzdG9yZSBhbGwgYXZhaWxhYmxlIGRhdGEgZm9yIGVhY2ggdXNlciwgdXNlIGJhY2tlbmQgc2VydmljZSB0byBzdG9yZSB0aGUgdmFsdWUgb2YgZWFjaCBhdHRyaW51dGUgXHJcbiAgICAgIC8vZm9yIGV2ZXJ5IHVzZXJzXHJcbiAgICAgIFxyXG5cclxuICAgICAgLy90aGlzIGlzIHRvIHR1cm4gb2ZmIHRoZSBkZWxldGUgYnV0dG9uIFxyXG4gICAgICBuYXZUYWcoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RhZ1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDbGFzcyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHVpZDogc3RyaW5nLCBUQSA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLkNJRCA9IGlkO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLkNuYW1lID0gbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3MgSURcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgYWxlcnQobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgaWYodWlkID09IEJhY2tlbmRTZXJ2aWNlLnRva2VuKXtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwidWlkXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYnJvd3NlXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbmlmKFRBICE9IG51bGwpe1xyXG4gICAgZm9yKHZhciBpID0wOyBpIDwgVEEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmIChCYWNrZW5kU2VydmljZS50b2tlbiA9PSBKU09OLnN0cmluZ2lmeShUQVtpXS5VSUQpKXtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPT0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICBkZWxldGUodGFnOiBUYWcpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVUYWcodGFnKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH0gXHJcbiAgICAgIFxyXG5cclxufVxyXG4iXX0=