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
        var user = firebase.fetchProvidersForEmail("kadiri@gmail.com");
        console.log("Firebase return for real user is " + JSON.stringify(user));
        var user2 = firebase.fetchProvidersForEmail("BHILGYUIK@gmail.com");
        console.log("Firebase return for fake user is " + JSON.stringify(user2));
    };
    HomeComponent.prototype.refreshMe = function (args) {
        var _this = this;
        console.log("refreshing");
        setTimeout(function () { return _this.ngOnInit(); }, 2000);
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
    HomeComponent.prototype.validateClass = function (id, name, uid) {
        var exists = false;
        for (var a = 0; a < this.leng; a++) {
            if (id == this.allClass[a].id) {
                var exists = true;
                console.log("Class exists");
            }
        }
        return exists;
    };
    HomeComponent.prototype.activateClass = function (id, name, uid) {
        if (this.validateClass(id, name, uid)) {
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
        }
        else {
            alert("Classroom does not exist");
        }
    };
    HomeComponent.prototype.delete = function (tag) {
        this.firebaseService1.deleteTag(tag)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    HomeComponent.prototype.deleteClass = function (room) {
        this.firebaseService1.delete(room);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLDhDQUEyQztBQUMzQyx3Q0FBOEQ7QUFDOUQsdURBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFlakY7SUFLSSx1QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsY0FBOEIsRUFDeEUsZ0JBQWtDO1FBRjFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOOUMsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU9oQyxDQUFDO0lBc0JMOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWlDQztRQWhDRyxnQ0FBYyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUM7UUFDM0IsZ0NBQWMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGdDQUFjLENB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QVZHLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEIsU0FBUyxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUU1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksdUJBQVUsRUFBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN2QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxOd0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQTVCcEQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FNd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQTBCLGdDQUFjO1lBQ3RELDJCQUFnQjtPQVByQyxhQUFhLENBaVB6QjtJQUFELG9CQUFDO0NBQUEsQUFqUEQsSUFpUEM7QUFqUFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnN9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2UsIEZpcmViYXNlU2VydmljZTF9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFB1bGxUb1JlZnJlc2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Q2xhc3M7XHJcbiAgICBwdWJsaWMgVEFzJDogT2JzZXJ2YWJsZSA8YW55PjtcclxuICAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzczE7XHJcbiAgICBwdWJsaWMgYWxsQ2xhc3MyO1xyXG4gICAgcHVibGljIGxlbjtcclxuICAgIHB1YmxpYyBsZW5nO1xyXG4gICAgcHVibGljIGV4aXN0cztcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPT0gZmFsc2U7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15Q2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VXNlckxpc3QoQmFja2VuZFNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5VaWQgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSh2YWxbMF0uaWQpKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSkgKyBcIiBcIiArIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkxhc3ROYW1lKSkgO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk15IHVpZCBpc1wiKyBCYWNrZW5kU2VydmljZS5VaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQuc3Vic2NyaWJlKCBteSA9PnsgXHJcbiAgICAgICAgICAgIHRoaXMubGVuID0gbXkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xhc3MgPSBteTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkLnN1YnNjcmliZShjbGFzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzcyA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MxID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5sZW5nID0gY2xhcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd2NsYXNzZXMoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgIHZhciB1c2VyID0gZmlyZWJhc2UuZmV0Y2hQcm92aWRlcnNGb3JFbWFpbChcImthZGlyaUBnbWFpbC5jb21cIik7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHJldHVybiBmb3IgcmVhbCB1c2VyIGlzIFwiKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICB2YXIgdXNlcjIgPSBmaXJlYmFzZS5mZXRjaFByb3ZpZGVyc0ZvckVtYWlsKFwiQkhJTEdZVUlLQGdtYWlsLmNvbVwiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcmV0dXJuIGZvciBmYWtlIHVzZXIgaXMgXCIrIEpTT04uc3RyaW5naWZ5KHVzZXIyKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaE1lKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaGluZ1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdPbkluaXQoKSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3djbGFzc2VzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgY2xhc3NlcyBzaXplIGlzICBcIisgdGhpcy5sZW5nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm15IGNsYXNzIGxlbmd0aCBpcyBcIisgdGhpcy5sZW4gKTtcclxuICAgICAgICBpZih0aGlzLm15Y2xhc3Nyb29tcyQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8IHRoaXMubGVuZzsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIGFsbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxDbGFzczFbaV0uSUQpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbjsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBteSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5teUNsYXNzW2pdLklEKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsID09IG15KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENsYXNzW2ldLnJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgICAvL2RlbGV0ZSBjbGFzc3Jvb1xyXG4gICAgICBkZWxldGVDbChjbGFzc3Jvb206IENsYXNzcm9vbSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlKGNsYXNzcm9vbSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBcclxuXHJcblxyXG4gICAgICBuYXZjbGFzcygpe1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xhc3Nyb29tXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICBuYXZxdWVzKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICBpbkNsYXNzKGNsYXNzcm9vbTogQ2xhc3Nyb29tLCBpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgdWlkOiBzdHJpbmcsIElEOiBudW1iZXIpe1xyXG4gICAgICAgICAvL3VwZGF0ZSB0aGUgY2xhc3Nyb29tIG5vZGUgdG8gaW5jbHVkZSB1c2VycyB3aG8gcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gICAgICAudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcblxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS51c2VyUmVnaXN0ZXIoaWQsIENuYW1lLCBQcm9mLCBZZWFyLCB1aWQsIElEKTtcclxuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgIC8vdG8gc3RvcmUgYWxsIGF2YWlsYWJsZSBkYXRhIGZvciBlYWNoIHVzZXIsIHVzZSBiYWNrZW5kIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHZhbHVlIG9mIGVhY2ggYXR0cmludXRlIFxyXG4gICAgICAvL2ZvciBldmVyeSB1c2Vyc1xyXG4gICAgICAvL3RoaXMgaXMgdG8gdHVybiBvZmYgdGhlIGRlbGV0ZSBidXR0b24gXHJcbiAgICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFsaWRhdGVDbGFzcyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGE8dGhpcy5sZW5nOyBhKyspe1xyXG4gICAgICAgICAgICBpZihpZCA9PSB0aGlzLmFsbENsYXNzW2FdLmlkKXtcclxuICAgICAgICAgICAgICAgIHZhciBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGFzcyBleGlzdHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUNsYXNzKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgIGlmKCB0aGlzLnZhbGlkYXRlQ2xhc3MoaWQsbmFtZSx1aWQpKXsgXHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ0lEID0gaWQ7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ25hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzcyBJRFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBhbGVydChuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICBpZih1aWQgPT0gQmFja2VuZFNlcnZpY2UudG9rZW4pe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJicm93c2VcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5UQXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZTEuZ2V0VEFMaXN0KCk7ICAgXHJcbiAgICAgICAgdGhpcy5UQXMkLnN1YnNjcmliZSh2YWxzID0+IHtcclxuICAgICAgICAgICAgaWYodmFsc1swXS5UQSAhPW51bGwpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5UQSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbHNbMF0uVEEpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG5cclxuICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhbGVydChcIkNsYXNzcm9vbSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICBkZWxldGUodGFnOiBUYWcpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVUYWcodGFnKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIGRlbGV0ZUNsYXNzKHJvb206IENsYXNzcm9vbSl7XHJcbnRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGUocm9vbSk7XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgbGV0IHNlYXJjaFZhbHVlID0gc2VhcmNoQmFyLnRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nIChcIlNlYXJjaCB2YWx1ZSBpc1wiICsgc2VhcmNoVmFsdWUpO1xyXG5cclxuICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuYWxsQ2xhc3MyID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xyXG5cclxuICAgICAgICB2YXIgY291bnQgPTA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmc7IGkrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLk5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaCByZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbENsYXNzMVtpXS5OYW1lKSk7XHJcbiAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsQ2xhc3MyLnB1c2godGhpcy5hbGxDbGFzczFbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzczJbY291bnRdID0gdGhpcy5hbGxDbGFzczFbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCByZXN1bHRzIGFyZSBcIisgSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxDbGFzczJbY291bnRdKSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbnB1YmxpYyBvbkNsZWFyKGFyZ3MpIHtcclxuICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgc2VhcmNoQmFyLnRleHQgPSBcIlwiO1xyXG4gICAgc2VhcmNoQmFyLmhpbnQgPSBcIlNlYXJjaCBBdmFpbGFibGUgY2xhc3Nlc1wiO1xyXG5cclxuICAgIHRoaXMuYWxsQ2xhc3MyID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xyXG4gICAgdmFyIGkgPTA7XHJcbiAgICB0aGlzLmFsbENsYXNzMS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMuYWxsQ2xhc3MyW2ldID0gaXRlbTtcclxuICAgICAgICBpKys7XHJcbiAgICB9KTtcclxufVxyXG4vL3NlYXJjaCBmdW50aW9uIGlzIGJ1Z2d5IDovXHJcblxyXG59XHJcbiJdfQ==