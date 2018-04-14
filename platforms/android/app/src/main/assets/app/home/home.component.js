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
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        backend_service_1.BackendService.TA = false;
                        backend_service_1.BackendService.instructor = false;
                        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
                        _a = this;
                        return [4 /*yield*/, this.firebaseService.getAllClassList()];
                    case 1:
                        _a.classrooms$ = _c.sent();
                        if (!(this.classrooms$ == null)) return [3 /*break*/, 2];
                        console.log("Returning null observables for all classrooms");
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.myclassrooms$ == null)) return [3 /*break*/, 3];
                        console.log("Null observables for my classes");
                        return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.firebaseService.getMyClassList()];
                    case 4:
                        _b.myclassrooms$ = _c.sent();
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
                        _c.label = 5;
                    case 5: return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMsdURBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFhakY7SUFLSSx1QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsY0FBOEI7UUFEaEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMcEYsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQWU3QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBVGIsQ0FBQztJQW1CTDs7a0VBRThEO0lBQ3pELGdDQUFRLEdBQWQ7Ozs7Ozs7d0JBQ0ssZ0NBQWMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixnQ0FBYyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7d0JBQzFELEtBQUEsSUFBSSxDQUFBO3dCQUFlLHFCQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUFwRSxHQUFLLFdBQVcsR0FBRyxTQUFpRCxDQUFDOzZCQUVsRSxDQUFBLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFBLEVBQXhCLHdCQUF3Qjt3QkFHM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDOzs7NkJBQ3ZELENBQUEsSUFBSSxD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cG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBwZXJzb24gPSBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgaHVtYW4gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbik7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteUNsYXNzO1xyXG4gICAgcHVibGljIGFsbENsYXNzO1xyXG4gICAgcHVibGljIGFsbENsYXNzMTtcclxuICAgIHB1YmxpYyBsZW47XHJcbiAgICBwdWJsaWMgbGVuZztcclxuICAgIHB1YmxpYyBzaG93ID0gW107XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgYXN5bmMgbmdPbkluaXQoKXtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5UQSA9IGZhbHNlO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJCA9IGF3YWl0IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsQ2xhc3NMaXN0KCk7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNsYXNzcm9vbXMkID09IG51bGwpeyBcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIG51bGwgb2JzZXJ2YWJsZXMgZm9yIGFsbCBjbGFzc3Jvb21zXCIpO1xyXG4gICAgfWVsc2UgaWYgKHRoaXMubXljbGFzc3Jvb21zJCA9PSBudWxsKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk51bGwgb2JzZXJ2YWJsZXMgZm9yIG15IGNsYXNzZXNcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJCA9IGF3YWl0IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlDbGFzc0xpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkLnN1YnNjcmliZSggbXkgPT57XHJcbiAgICAgICAgICAgIHRoaXMubGVuID0gbXkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xhc3MgPSBteTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkLnN1YnNjcmliZShjbGFzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzcyA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MxID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5sZW5nID0gY2xhcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd2NsYXNzZXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93Y2xhc3Nlcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGNsYXNzZXMgc2l6ZSBpcyAgXCIrIHRoaXMubGVuZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJteSBjbGFzcyBsZW5ndGggaXMgXCIrIHRoaXMubGVuICk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8IHRoaXMubGVuZzsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzczEgPSB0aGlzLmFsbENsYXNzMTtcclxuICAgICAgICAgICAgdmFyIGFsbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxDbGFzczFbaV0uSUQpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbjsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBteSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5teUNsYXNzW2pdLklEKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsID09IG15KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENsYXNzW2ldLnJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy9kZWxldGUgY2xhc3Nyb29cclxuICAgICAgZGVsZXRlQ2woY2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmdcIik7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlKGNsYXNzcm9vbSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBuYXZjbGFzcygpe1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xhc3Nyb29tXCJdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmF2cXVlcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2VhcmNoXCJdKTtcclxuICAgfVxyXG5cclxuICAgIGluQ2xhc3MoY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGlkOiBzdHJpbmcsIENuYW1lOiBzdHJpbmcsIFByb2Y6IHN0cmluZywgWWVhcjogc3RyaW5nLCB1aWQ6IHN0cmluZyl7XHJcbiAgICAgICAgIC8vdXBkYXRlIHRoZSBjbGFzc3Jvb20gbm9kZSB0byBpbmNsdWRlIHVzZXJzIHdobyByZWdpc3RlcmVkXHJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3RlckNsYXNzcm9vbShjbGFzc3Jvb20sIEJhY2tlbmRTZXJ2aWNlLlVpZCwgQmFja2VuZFNlcnZpY2UuVW5hbWUsIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0pXHJcbiAgICAgIC50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuXHJcbiAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xhc3Nyb29tIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uZ09uSW5pdCgpOyBcclxuICAgIH1cclxuICAgICAgLy90byBzdG9yZSBhbGwgYXZhaWxhYmxlIGRhdGEgZm9yIGVhY2ggdXNlciwgdXNlIGJhY2tlbmQgc2VydmljZSB0byBzdG9yZSB0aGUgdmFsdWUgb2YgZWFjaCBhdHRyaW51dGUgXHJcbiAgICAgIC8vZm9yIGV2ZXJ5IHVzZXJzXHJcbiAgICAgIFxyXG5cclxuICAgICAgLy90aGlzIGlzIHRvIHR1cm4gb2ZmIHRoZSBkZWxldGUgYnV0dG9uIFxyXG4gICAgICBuYXZUYWcoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RhZ1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDbGFzcyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHVpZDogc3RyaW5nLCBUQSA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLkNJRCA9IGlkO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLkNuYW1lID0gbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICAvLyBhbGVydChuYW1lICsgXCIgaXMgbm93IGFjdGl2ZSBjbGFzc1wiKTtcclxuICAgICAgICBpZih1aWQgPT0gQmFja2VuZFNlcnZpY2UudG9rZW4pe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJicm93c2VcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZWFyY2hcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuaWYoVEEgIT0gbnVsbCl7XHJcbiAgICBmb3IodmFyIGkgPTA7IGkgPCBUQS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKEJhY2tlbmRTZXJ2aWNlLnRva2VuID09IEpTT04uc3RyaW5naWZ5KFRBW2ldLlVJRCkpe1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5UQSA9PSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIFxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICBcclxuXHJcbn1cclxuIl19