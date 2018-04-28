"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var Observable_1 = require("rxjs/Observable");
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
    HomeComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        console.log("Search value is" + searchValue);
        if (searchValue !== "") {
            this.allClass2 = new Observable_1.Observable();
            var count = 0;
            for (var i = 0; i < this.leng; i++) {
                if (JSON.stringify(this.allClass1[i].Name).toLowerCase().indexOf(searchValue) !== -1) {
                    console.log("search result is " + JSON.stringify(this.allClass1[i].Name));
                    // this.allClass2.push(this.allClass1[i]);
                    this.allClass2[count] = this.allClass1[i];
                    console.log("All results are " + JSON.stringify(this.allClass2[count]));
                    count++;
                }
            }
            // this.allClass = this.allClass2;
        }
    };
    HomeComponent.prototype.onClear = function (args) {
        var _this = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Search Available classes";
        this.allClass2 = new Observable_1.Observable();
        var i = 0;
        this.allClass1.forEach(function (item) {
            _this.allClass2[i] = item;
            i++;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLDhDQUEyQztBQUMzQyx3Q0FBOEQ7QUFDOUQsdURBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFjakY7SUFLSSx1QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsY0FBOEIsRUFDeEUsZ0JBQWtDO1FBRjFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOOUMsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQW1CN0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQVpiLENBQUM7SUFzQkw7O2tFQUU4RDtJQUM5RCxnQ0FBUSxHQUFSO1FBQUEsaUJBK0JDO1FBOUJHLGdDQUFjLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQztRQUMzQixnQ0FBYyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVB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QUFPLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUx3QjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBNUJwRCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU13QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBMEIsZ0NBQWM7WUFDdEQsMkJBQWdCO09BUHJDLGFBQWEsQ0F3TnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhORCxJQXdOQztBQXhOWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Q2xhc3M7XHJcbiAgICBwdWJsaWMgVEFzJDogT2JzZXJ2YWJsZSA8YW55PjtcclxuICAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzczE7XHJcbiAgICBwdWJsaWMgYWxsQ2xhc3MyO1xyXG4gICAgcHVibGljIGxlbjtcclxuICAgIHB1YmxpYyBsZW5nO1xyXG4gICAgcHVibGljIHNob3cgPSBbXTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPT0gZmFsc2U7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15Q2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoQmFja2VuZFNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5VaWQgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSh2YWxbMF0uaWQpKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSkgKyBcIiBcIiArIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkxhc3ROYW1lKSkgO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk15IHVpZCBpc1wiKyBCYWNrZW5kU2VydmljZS5VaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQuc3Vic2NyaWJlKCBteSA9PnsgXHJcbiAgICAgICAgICAgIHRoaXMubGVuID0gbXkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xhc3MgPSBteTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkLnN1YnNjcmliZShjbGFzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzcyA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MxID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5sZW5nID0gY2xhcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd2NsYXNzZXMoKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3djbGFzc2VzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgY2xhc3NlcyBzaXplIGlzICBcIisgdGhpcy5sZW5nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm15IGNsYXNzIGxlbmd0aCBpcyBcIisgdGhpcy5sZW4gKTtcclxuICAgICAgICBpZih0aGlzLm15Y2xhc3Nyb29tcyQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8IHRoaXMubGVuZzsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIGFsbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxDbGFzczFbaV0uSUQpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbjsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBteSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5teUNsYXNzW2pdLklEKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsID09IG15KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENsYXNzW2ldLnJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vZGVsZXRlIGNsYXNzcm9vXHJcbiAgICAgIGRlbGV0ZUNsKGNsYXNzcm9vbTogQ2xhc3Nyb29tKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGUoY2xhc3Nyb29tKVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgfSBcclxuXHJcbiAgICAgIG5hdmNsYXNzKCl7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jbGFzc3Jvb21cIl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXZxdWVzKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICB9XHJcblxyXG4gICAgaW5DbGFzcyhjbGFzc3Jvb206IENsYXNzcm9vbSwgaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIHVpZDogc3RyaW5nLCBJRDogbnVtYmVyKXtcclxuICAgICAgICAgLy91cGRhdGUgdGhlIGNsYXNzcm9vbSBub2RlIHRvIGluY2x1ZGUgdXNlcnMgd2hvIHJlZ2lzdGVyZWRcclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbSwgQmFja2VuZFNlcnZpY2UuVWlkLCBCYWNrZW5kU2VydmljZS5VbmFtZSwgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSlcclxuICAgICAgLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG5cclxuICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGFzc3Jvb20gc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UudXNlclJlZ2lzdGVyKGlkLCBDbmFtZSwgUHJvZiwgWWVhciwgdWlkLCBJRCk7XHJcblxyXG4gICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICB9XHJcbiAgICAgIC8vdG8gc3RvcmUgYWxsIGF2YWlsYWJsZSBkYXRhIGZvciBlYWNoIHVzZXIsIHVzZSBiYWNrZW5kIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHZhbHVlIG9mIGVhY2ggYXR0cmludXRlIFxyXG4gICAgICAvL2ZvciBldmVyeSB1c2Vyc1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vdGhpcyBpcyB0byB0dXJuIG9mZiB0aGUgZGVsZXRlIGJ1dHRvbiBcclxuICAgICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQ2xhc3MoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB1aWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DSUQgPSBpZDtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzIElEXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGFsZXJ0KG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgIGlmKHVpZCA9PSBCYWNrZW5kU2VydmljZS50b2tlbil7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcInVpZFwiOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLlRBcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5nZXRUQUxpc3QoKTsgICBcclxuICAgICAgICB0aGlzLlRBcyQuc3Vic2NyaWJlKHZhbHMgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWxzWzBdLlRBICE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlRBID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkodmFsc1swXS5UQSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgZGVsZXRlKHRhZzogVGFnKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlVGFnKHRhZylcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICB9KTtcclxuICB9IFxyXG4gICAgICBcclxuXHJcbiAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgbGV0IHNlYXJjaFZhbHVlID0gc2VhcmNoQmFyLnRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nIChcIlNlYXJjaCB2YWx1ZSBpc1wiICsgc2VhcmNoVmFsdWUpO1xyXG5cclxuICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuYWxsQ2xhc3MyID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xyXG5cclxuICAgICAgICB2YXIgY291bnQgPTA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmc7IGkrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLk5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaCByZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbENsYXNzMVtpXS5OYW1lKSk7XHJcbiAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsQ2xhc3MyLnB1c2godGhpcy5hbGxDbGFzczFbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzczJbY291bnRdID0gdGhpcy5hbGxDbGFzczFbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCByZXN1bHRzIGFyZSBcIisgSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxDbGFzczJbY291bnRdKSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmFsbENsYXNzID0gdGhpcy5hbGxDbGFzczI7XHJcbiAgICB9XHJcbn1cclxuXHJcbnB1YmxpYyBvbkNsZWFyKGFyZ3MpIHtcclxuICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgc2VhcmNoQmFyLnRleHQgPSBcIlwiO1xyXG4gICAgc2VhcmNoQmFyLmhpbnQgPSBcIlNlYXJjaCBBdmFpbGFibGUgY2xhc3Nlc1wiO1xyXG5cclxuICAgIHRoaXMuYWxsQ2xhc3MyID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xyXG4gICAgdmFyIGkgPTA7XHJcbiAgICB0aGlzLmFsbENsYXNzMS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMuYWxsQ2xhc3MyW2ldID0gaXRlbTtcclxuICAgICAgICBpKys7XHJcbiAgICB9KTtcclxufVxyXG5cclxufVxyXG4iXX0=