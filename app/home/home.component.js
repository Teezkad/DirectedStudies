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
        this.show = [];
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        backend_service_1.BackendService.TA = false;
        this.users$ = this.firebaseService.getMyUserList(backend_service_1.BackendService.token);
        backend_service_1.BackendService.instructor = false;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
        this.users$.subscribe(function (val) {
            console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
            backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            var first = JSON.parse(JSON.stringify(val[0].FirstName));
            var last = JSON.parse(JSON.stringify(val[0].LastName));
            backend_service_1.BackendService.Uname = first + " " + last;
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
        });
        console.log("My uid is" + backend_service_1.BackendService.Uid);
        if (this.classrooms$ == null) {
            console.log("Returning null observables for all classrooms");
        }
        else if (this.myclassrooms$ == null) {
            console.log("Null observables for my classes");
        }
        else {
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
        }
    };
    HomeComponent.prototype.showclasses = function () {
        console.log("all classes size is  " + this.leng);
        console.log("my class length is " + this.len);
        for (var i = 0; i < this.leng; i++) {
            this.allClass1 = this.allClass1;
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
        this.firebaseService.delete(classroom)
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
    HomeComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year, uid) {
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom, backend_service_1.BackendService.Uid, backend_service_1.BackendService.Uname, backend_service_1.BackendService.studentNum)
            .then(function (message) {
            alert(message);
            console.log("Classroom successfully registered");
        });
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
        console.log(name + " is now active class");
        // alert(name + " is now active class");
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
            services_1.FirebaseService, backend_service_1.BackendService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWFqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QjtRQURoRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxwRixnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBZ0I3QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBVmIsQ0FBQztJQW9CTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFBQSxpQkEwQ0M7UUF6Q0csZ0NBQWMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0NBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxnQ0FBYyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRWhFLElBQUksQ0FB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QTNLWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBjbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteUNsYXNzO1xyXG4gICAgcHVibGljIGFsbENsYXNzO1xyXG4gICAgcHVibGljIGFsbENsYXNzMTtcclxuICAgIHB1YmxpYyBsZW47XHJcbiAgICBwdWJsaWMgbGVuZztcclxuICAgIHB1YmxpYyBzaG93ID0gW107XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRBID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoQmFja2VuZFNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsQ2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeUNsYXNzTGlzdCgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy51c2VycyQuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlVpZCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbFswXS5pZCkpKTtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuVW5hbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5GaXJzdE5hbWUpKTtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLnN0dWRlbnROdW0pKTtcclxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSk7XHJcbiAgICAgICAgICAgIHZhciBsYXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uTGFzdE5hbWUpKTtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuVW5hbWUgPSBmaXJzdCArIFwiIFwiICsgbGFzdDtcclxuXHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgdWlkIGlzXCIrIEJhY2tlbmRTZXJ2aWNlLlVpZCk7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNsYXNzcm9vbXMkID09IG51bGwpeyBcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIG51bGwgb2JzZXJ2YWJsZXMgZm9yIGFsbCBjbGFzc3Jvb21zXCIpO1xyXG4gICAgfWVsc2UgaWYgKHRoaXMubXljbGFzc3Jvb21zJCA9PSBudWxsKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk51bGwgb2JzZXJ2YWJsZXMgZm9yIG15IGNsYXNzZXNcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQuc3Vic2NyaWJlKCBteSA9PntcclxuICAgICAgICAgICAgdGhpcy5sZW4gPSBteS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGFzcyA9IG15O1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuY2xhc3Nyb29tcyQuc3Vic2NyaWJlKGNsYXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzczEgPSBjbGFzO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmcgPSBjbGFzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zaG93Y2xhc3NlcygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3djbGFzc2VzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgY2xhc3NlcyBzaXplIGlzICBcIisgdGhpcy5sZW5nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm15IGNsYXNzIGxlbmd0aCBpcyBcIisgdGhpcy5sZW4gKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTwgdGhpcy5sZW5nOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzMSA9IHRoaXMuYWxsQ2xhc3MxO1xyXG4gICAgICAgICAgICB2YXIgYWxsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmFsbENsYXNzMVtpXS5JRCkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG15ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm15Q2xhc3Nbal0uSUQpKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGwgPT0gbXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3NbaV0ucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2RlbGV0ZSBjbGFzc3Jvb1xyXG4gICAgICBkZWxldGVDbChjbGFzc3Jvb206IENsYXNzcm9vbSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoY2xhc3Nyb29tKVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgfSBcclxuXHJcbiAgICAgIG5hdmNsYXNzKCl7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jbGFzc3Jvb21cIl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXZxdWVzKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICB9XHJcblxyXG4gICAgaW5DbGFzcyhjbGFzc3Jvb206IENsYXNzcm9vbSwgaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgICAgICAgLy91cGRhdGUgdGhlIGNsYXNzcm9vbSBub2RlIHRvIGluY2x1ZGUgdXNlcnMgd2hvIHJlZ2lzdGVyZWRcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbSwgQmFja2VuZFNlcnZpY2UuVWlkLCBCYWNrZW5kU2VydmljZS5VbmFtZSwgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSlcclxuICAgICAgLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG5cclxuICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGFzc3Jvb20gc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm5nT25Jbml0KCk7IFxyXG4gICAgfVxyXG4gICAgICAvL3RvIHN0b3JlIGFsbCBhdmFpbGFibGUgZGF0YSBmb3IgZWFjaCB1c2VyLCB1c2UgYmFja2VuZCBzZXJ2aWNlIHRvIHN0b3JlIHRoZSB2YWx1ZSBvZiBlYWNoIGF0dHJpbnV0ZSBcclxuICAgICAgLy9mb3IgZXZlcnkgdXNlcnNcclxuICAgICAgXHJcblxyXG4gICAgICAvL3RoaXMgaXMgdG8gdHVybiBvZmYgdGhlIGRlbGV0ZSBidXR0b24gXHJcbiAgICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUNsYXNzKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcsIFRBID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ0lEID0gaWQ7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ25hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgIC8vIGFsZXJ0KG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgIGlmKHVpZCA9PSBCYWNrZW5kU2VydmljZS50b2tlbil7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcInVpZFwiOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5pZihUQSAhPSBudWxsKXtcclxuICAgIGZvcih2YXIgaSA9MDsgaSA8IFRBLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoQmFja2VuZFNlcnZpY2UudG9rZW4gPT0gSlNPTi5zdHJpbmdpZnkoVEFbaV0uVUlEKSl7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRBID09IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgIFxyXG5cclxufVxyXG4iXX0=