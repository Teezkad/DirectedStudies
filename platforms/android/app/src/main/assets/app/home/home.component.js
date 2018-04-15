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
    HomeComponent.prototype.activateClass = function (id, name, uid) {
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
            this.TAs$ = this.firebaseService1.getTAList();
            this.TAs$.subscribe(function (vals) {
                if (vals[0].TA != null) {
                    console.log(backend_service_1.BackendService.TA = JSON.parse(JSON.stringify(vals[0].TA)));
                }
            });
            this.routerExtensions.navigate(["/search"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE4RDtBQUM5RCx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQWFqRjtJQUtJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN4RSxnQkFBa0M7UUFGMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBa0I3QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBWGIsQ0FBQztJQXFCTDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFBQSxpQkErQkM7UUE5QkcsZ0NBQWMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO1FBQzNCLGdDQUFjLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEs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QkFBZ0I7T0FQckMsYUFBYSxDQWtMekI7SUFBRCxvQkFBQztDQUFBLEFBbExELElBa0xDO0FBbExZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UxfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIHBlcnNvbiA9IGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBodW1hbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGVyc29uKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2UxOiBGaXJlYmFzZVNlcnZpY2UxXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7ICAgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXlDbGFzcztcclxuICAgIHB1YmxpYyBUQXMkOiBPYnNlcnZhYmxlIDxhbnk+O1xyXG4gICAgcHVibGljIGFsbENsYXNzO1xyXG4gICAgcHVibGljIGFsbENsYXNzMTtcclxuICAgIHB1YmxpYyBsZW47XHJcbiAgICBwdWJsaWMgbGVuZztcclxuICAgIHB1YmxpYyBzaG93ID0gW107XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRBID09IGZhbHNlO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsQ2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeUNsYXNzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVVzZXJMaXN0KEJhY2tlbmRTZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICB0aGlzLnVzZXJzJC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coQmFja2VuZFNlcnZpY2UuVWlkID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkodmFsWzBdLmlkKSkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5VbmFtZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkZpcnN0TmFtZSkpICsgXCIgXCIgKyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5MYXN0TmFtZSkpIDtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLnN0dWRlbnROdW0pKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSB1aWQgaXNcIisgQmFja2VuZFNlcnZpY2UuVWlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkLnN1YnNjcmliZSggbXkgPT57IFxyXG4gICAgICAgICAgICB0aGlzLmxlbiA9IG15Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5teUNsYXNzID0gbXk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJC5zdWJzY3JpYmUoY2xhcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MgPSBjbGFzO1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzMSA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZyA9IGNsYXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNob3djbGFzc2VzKCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93Y2xhc3Nlcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGNsYXNzZXMgc2l6ZSBpcyAgXCIrIHRoaXMubGVuZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJteSBjbGFzcyBsZW5ndGggaXMgXCIrIHRoaXMubGVuICk7XHJcbiAgICAgICAgaWYodGhpcy5teWNsYXNzcm9vbXMkID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPCB0aGlzLmxlbmc7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBhbGwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLklEKSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW47IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubXlDbGFzc1tqXS5JRCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbCA9PSBteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzc1tpXS5yZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL2RlbGV0ZSBjbGFzc3Jvb1xyXG4gICAgICBkZWxldGVDbChjbGFzc3Jvb206IENsYXNzcm9vbSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlKGNsYXNzcm9vbSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBuYXZjbGFzcygpe1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xhc3Nyb29tXCJdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmF2cXVlcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgfVxyXG5cclxuICAgIGluQ2xhc3MoY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGlkOiBzdHJpbmcsIENuYW1lOiBzdHJpbmcsIFByb2Y6IHN0cmluZywgWWVhcjogc3RyaW5nLCB1aWQ6IHN0cmluZywgSUQ6IG51bWJlcil7XHJcbiAgICAgICAgIC8vdXBkYXRlIHRoZSBjbGFzc3Jvb20gbm9kZSB0byBpbmNsdWRlIHVzZXJzIHdobyByZWdpc3RlcmVkXHJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3RlckNsYXNzcm9vbShjbGFzc3Jvb20sIEJhY2tlbmRTZXJ2aWNlLlVpZCwgQmFja2VuZFNlcnZpY2UuVW5hbWUsIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0pXHJcbiAgICAgIC50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuXHJcbiAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xhc3Nyb29tIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVzZXJSZWdpc3RlcihpZCwgQ25hbWUsIFByb2YsIFllYXIsIHVpZCwgSUQpO1xyXG5cclxuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgICAvL3RvIHN0b3JlIGFsbCBhdmFpbGFibGUgZGF0YSBmb3IgZWFjaCB1c2VyLCB1c2UgYmFja2VuZCBzZXJ2aWNlIHRvIHN0b3JlIHRoZSB2YWx1ZSBvZiBlYWNoIGF0dHJpbnV0ZSBcclxuICAgICAgLy9mb3IgZXZlcnkgdXNlcnNcclxuICAgICAgXHJcblxyXG4gICAgICAvL3RoaXMgaXMgdG8gdHVybiBvZmYgdGhlIGRlbGV0ZSBidXR0b24gXHJcbiAgICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUNsYXNzKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ0lEID0gaWQ7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ25hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzcyBJRFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBhbGVydChuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICBpZih1aWQgPT0gQmFja2VuZFNlcnZpY2UudG9rZW4pe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJicm93c2VcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5UQXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZTEuZ2V0VEFMaXN0KCk7ICAgXHJcbiAgICAgICAgdGhpcy5UQXMkLnN1YnNjcmliZSh2YWxzID0+IHtcclxuICAgICAgICAgICAgaWYodmFsc1swXS5UQSAhPW51bGwpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5UQSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbHNbMF0uVEEpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVRhZyh0YWcpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgfSk7XHJcbiAgfSBcclxuICAgICAgXHJcblxyXG59XHJcbiJdfQ==