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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE4RDtBQUM5RCx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWFqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN4RSxnQkFBa0M7UUFGMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBaUI3QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBVmIsQ0FBQztJQW9CTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFBQSxpQkErQkM7UUE5QkcsZ0NBQWMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO1FBQzNCLGdDQUFjLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEs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dEQsMkJBQWdCO09BUHJDLGFBQWEsQ0FnTHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhMRCxJQWdMQztBQWhMWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXlDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzczE7XHJcbiAgICBwdWJsaWMgbGVuO1xyXG4gICAgcHVibGljIGxlbmc7XHJcbiAgICBwdWJsaWMgc2hvdyA9IFtdO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5UQSA9PSBmYWxzZTtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEFsbENsYXNzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlVc2VyTGlzdChCYWNrZW5kU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgdGhpcy51c2VycyQuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlVpZCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbFswXS5pZCkpKTtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLnN0dWRlbnROdW0pKTtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuVW5hbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5GaXJzdE5hbWUpKSArIFwiIFwiICsgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uTGFzdE5hbWUpKSA7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgdWlkIGlzXCIrIEJhY2tlbmRTZXJ2aWNlLlVpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJC5zdWJzY3JpYmUoIG15ID0+e1xyXG4gICAgICAgICAgICB0aGlzLmxlbiA9IG15Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5teUNsYXNzID0gbXk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJC5zdWJzY3JpYmUoY2xhcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MgPSBjbGFzO1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzMSA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZyA9IGNsYXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNob3djbGFzc2VzKCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93Y2xhc3Nlcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGNsYXNzZXMgc2l6ZSBpcyAgXCIrIHRoaXMubGVuZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJteSBjbGFzcyBsZW5ndGggaXMgXCIrIHRoaXMubGVuICk7XHJcbiAgICAgICAgaWYodGhpcy5teWNsYXNzcm9vbXMkID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPCB0aGlzLmxlbmc7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBhbGwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLklEKSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW47IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubXlDbGFzc1tqXS5JRCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbCA9PSBteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzc1tpXS5yZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2RlbGV0ZSBjbGFzc3Jvb1xyXG4gICAgICBkZWxldGVDbChjbGFzc3Jvb206IENsYXNzcm9vbSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlKGNsYXNzcm9vbSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBuYXZjbGFzcygpe1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xhc3Nyb29tXCJdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmF2cXVlcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgfVxyXG5cclxuICAgIGluQ2xhc3MoY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGlkOiBzdHJpbmcsIENuYW1lOiBzdHJpbmcsIFByb2Y6IHN0cmluZywgWWVhcjogc3RyaW5nLCB1aWQ6IHN0cmluZywgSUQ6IG51bWJlcil7XHJcbiAgICAgICAgIC8vdXBkYXRlIHRoZSBjbGFzc3Jvb20gbm9kZSB0byBpbmNsdWRlIHVzZXJzIHdobyByZWdpc3RlcmVkXHJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3RlckNsYXNzcm9vbShjbGFzc3Jvb20sIEJhY2tlbmRTZXJ2aWNlLlVpZCwgQmFja2VuZFNlcnZpY2UuVW5hbWUsIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0pXHJcbiAgICAgIC50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuXHJcbiAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xhc3Nyb29tIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVzZXJSZWdpc3RlcihpZCwgQ25hbWUsIFByb2YsIFllYXIsIHVpZCwgSUQpO1xyXG5cclxuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgICAvL3RvIHN0b3JlIGFsbCBhdmFpbGFibGUgZGF0YSBmb3IgZWFjaCB1c2VyLCB1c2UgYmFja2VuZCBzZXJ2aWNlIHRvIHN0b3JlIHRoZSB2YWx1ZSBvZiBlYWNoIGF0dHJpbnV0ZSBcclxuICAgICAgLy9mb3IgZXZlcnkgdXNlcnNcclxuICAgICAgXHJcblxyXG4gICAgICAvL3RoaXMgaXMgdG8gdHVybiBvZmYgdGhlIGRlbGV0ZSBidXR0b24gXHJcbiAgICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUNsYXNzKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcsIFRBID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ0lEID0gaWQ7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ25hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzcyBJRFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICBhbGVydChuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICBpZih1aWQgPT0gQmFja2VuZFNlcnZpY2UudG9rZW4pe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJicm93c2VcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuaWYoVEEgIT0gbnVsbCl7XHJcbiAgICBmb3IodmFyIGkgPTA7IGkgPCBUQS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKEJhY2tlbmRTZXJ2aWNlLnRva2VuID09IEpTT04uc3RyaW5naWZ5KFRBW2ldLlVJRCkpe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5UQSA9PSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVRhZyh0YWcpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgfSk7XHJcbiAgfSBcclxuICAgICAgXHJcblxyXG59XHJcbiJdfQ==