"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        backend_service_1.BackendService.TA = false;
                        _a = this;
                        return [4 /*yield*/, this.firebaseService.getMyUserList(backend_service_1.BackendService.token)];
                    case 1:
                        _a.users$ = _d.sent();
                        backend_service_1.BackendService.instructor = false;
                        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
                        _b = this;
                        return [4 /*yield*/, this.firebaseService.getAllClassList()];
                    case 2:
                        _b.classrooms$ = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.firebaseService.getMyClassList()];
                    case 3:
                        _c.myclassrooms$ = _d.sent();
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
                        return [2 /*return*/];
                }
            });
        });
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
    tslib_1.__decorate([
        core_1.ViewChild("drawer"),
        tslib_1.__metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMsdURBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFhakY7SUFLSSx1QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsY0FBOEI7UUFEaEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMcEYsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQWdCN0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQVZiLENBQUM7SUFvQkw7O2tFQUU4RDtJQUN6RCxnQ0FBUSxHQUFkOzs7Ozs7O3dCQUNLLGdDQUFjLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsS0FBQSxJQUFJLENBQUE7d0JBQVUscUJBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0NBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQWpGLEdBQUssTUFBTSxHQUFHLFNBQW1FLENBQUM7d0JBQ2xGLGdDQUFjLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQzt3QkFDMUQsS0FBQSxJQUFJLENBQUE7d0JBQWUscUJBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXBFLEdBQUssV0FBVyxHQUFHLFNBQWlE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QUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7aURBTXdDLG9DQUFnQjtZQUN6QiwwQkFBZSxFQUEwQixnQ0FBYztPQU4zRSxhQUFhLENBMkt6QjtJQUFELG9CQUFDO0NBQUEsQUEzS0QsSUEyS0M7QUEzS1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnN9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlciA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG4gICAgcGVyc29uID0gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGh1bWFuID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJzb24pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXlDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzczE7XHJcbiAgICBwdWJsaWMgbGVuO1xyXG4gICAgcHVibGljIGxlbmc7XHJcbiAgICBwdWJsaWMgc2hvdyA9IFtdO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgIGFzeW5jIG5nT25Jbml0KCl7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IGF3YWl0IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlVc2VyTGlzdChCYWNrZW5kU2VydmljZS50b2tlbik7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gYXdhaXQgPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSBhd2FpdCA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15Q2xhc3NMaXN0KCk7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLnVzZXJzJC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coQmFja2VuZFNlcnZpY2UuVWlkID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkodmFsWzBdLmlkKSkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5VbmFtZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkZpcnN0TmFtZSkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgICAgICB2YXIgZmlyc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5GaXJzdE5hbWUpKTtcclxuICAgICAgICAgICAgdmFyIGxhc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5MYXN0TmFtZSkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5VbmFtZSA9IGZpcnN0ICsgXCIgXCIgKyBsYXN0O1xyXG5cclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLnN0dWRlbnROdW0pKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSB1aWQgaXNcIisgQmFja2VuZFNlcnZpY2UuVWlkKTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY2xhc3Nyb29tcyQgPT0gbnVsbCl7IFxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXR1cm5pbmcgbnVsbCBvYnNlcnZhYmxlcyBmb3IgYWxsIGNsYXNzcm9vbXNcIik7XHJcbiAgICB9ZWxzZSBpZiAodGhpcy5teWNsYXNzcm9vbXMkID09IG51bGwpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTnVsbCBvYnNlcnZhYmxlcyBmb3IgbXkgY2xhc3Nlc1wiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJC5zdWJzY3JpYmUoIG15ID0+e1xyXG4gICAgICAgICAgICB0aGlzLmxlbiA9IG15Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5teUNsYXNzID0gbXk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJC5zdWJzY3JpYmUoY2xhcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MgPSBjbGFzO1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzMSA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZyA9IGNsYXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNob3djbGFzc2VzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd2NsYXNzZXMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBjbGFzc2VzIHNpemUgaXMgIFwiKyB0aGlzLmxlbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibXkgY2xhc3MgbGVuZ3RoIGlzIFwiKyB0aGlzLmxlbiApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPCB0aGlzLmxlbmc7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MxID0gdGhpcy5hbGxDbGFzczE7XHJcbiAgICAgICAgICAgIHZhciBhbGwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLklEKSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW47IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubXlDbGFzc1tqXS5JRCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbCA9PSBteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzc1tpXS5yZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vZGVsZXRlIGNsYXNzcm9vXHJcbiAgICAgIGRlbGV0ZUNsKGNsYXNzcm9vbTogQ2xhc3Nyb29tKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShjbGFzc3Jvb20pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICB9IFxyXG5cclxuICAgICAgbmF2Y2xhc3MoKXtcclxuICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsYXNzcm9vbVwiXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdnF1ZXMoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgIH1cclxuXHJcbiAgICBpbkNsYXNzKGNsYXNzcm9vbTogQ2xhc3Nyb29tLCBpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgdWlkOiBzdHJpbmcpe1xyXG4gICAgICAgICAvL3VwZGF0ZSB0aGUgY2xhc3Nyb29tIG5vZGUgdG8gaW5jbHVkZSB1c2VycyB3aG8gcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gICAgICAudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcblxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubmdPbkluaXQoKTsgXHJcbiAgICB9XHJcbiAgICAgIC8vdG8gc3RvcmUgYWxsIGF2YWlsYWJsZSBkYXRhIGZvciBlYWNoIHVzZXIsIHVzZSBiYWNrZW5kIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHZhbHVlIG9mIGVhY2ggYXR0cmludXRlIFxyXG4gICAgICAvL2ZvciBldmVyeSB1c2Vyc1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vdGhpcyBpcyB0byB0dXJuIG9mZiB0aGUgZGVsZXRlIGJ1dHRvbiBcclxuICAgICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQ2xhc3MoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB1aWQ6IHN0cmluZywgVEEgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DSUQgPSBpZDtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5DbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgLy8gYWxlcnQobmFtZSArIFwiIGlzIG5vdyBhY3RpdmUgY2xhc3NcIik7XHJcbiAgICAgICAgaWYodWlkID09IEJhY2tlbmRTZXJ2aWNlLnRva2VuKXtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwidWlkXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYnJvd3NlXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbmlmKFRBICE9IG51bGwpe1xyXG4gICAgZm9yKHZhciBpID0wOyBpIDwgVEEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmIChCYWNrZW5kU2VydmljZS50b2tlbiA9PSBKU09OLnN0cmluZ2lmeShUQVtpXS5VSUQpKXtcclxuICAgICAgICAgICAgQmFja2VuZFNlcnZpY2UuVEEgPT0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiBcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgXHJcblxyXG59XHJcbiJdfQ==