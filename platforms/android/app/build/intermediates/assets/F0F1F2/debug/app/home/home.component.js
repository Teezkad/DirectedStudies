"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var firebase = require("nativescript-plugin-firebase");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var moment = require("moment");
var now = moment().format('LLLL');
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
        this.users$ = this.firebaseService.getMyUserList();
        this.users$.subscribe(function (val) {
            console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
            backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
        });
        console.log("My uid is" + backend_service_1.BackendService.Uid);
        console.log("Login successful");
        var a = new Date(1520547295821 * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        console.log("Datetime is " + time);
        var t = new Date(1520547295821 * 1000);
        var formatted = moment(t).format("dd.mm.yyyy hh:MM:ss");
        console.log("2nd datetime is " + formatted);
        backend_service_1.BackendService.instructor = false;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
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
        // console.log("all classes size is  "+ this.leng);
        // console.log("my class length is "+ this.len );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELG1GQUFpRjtBQUlqRiwrQkFBaUM7QUFHakMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBU2xDO0lBS0ksdUJBQW9CLGdCQUFrQyxFQUMxQyxlQUFnQyxFQUFVLGNBQThCO1FBRGhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTHBGLGdCQUFXLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsV0FBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxVQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFnQjdCLFNBQUksR0FBRyxFQUFFLENBQUM7SUFWYixDQUFDO0lBb0JMOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUFBLGlCQTRDQztRQTNDRyxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsZ0NBQWMsQ0FBQyxLQUFLLEdB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d0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQTBCLGdDQUFjO09BTjNFLGFBQWEsQ0E0S3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTVLRCxJQTRLQztBQTVLWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9uc30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxubGV0IG5vdyA9IG1vbWVudCgpLmZvcm1hdCgnTExMTCcpO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlciA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG4gICAgcGVyc29uID0gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGh1bWFuID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJzb24pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXlDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgIHB1YmxpYyBhbGxDbGFzczE7XHJcbiAgICBwdWJsaWMgbGVuO1xyXG4gICAgcHVibGljIGxlbmc7XHJcbiAgICBwdWJsaWMgc2hvdyA9IFtdO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlVc2VyTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYWNrZW5kU2VydmljZS5VaWQgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSh2YWxbMF0uaWQpKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgdWlkIGlzXCIrIEJhY2tlbmRTZXJ2aWNlLlVpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIHZhciBhID0gbmV3IERhdGUoMTUyMDU0NzI5NTgyMSAqIDEwMDApO1xyXG4gICAgICAgIHZhciBtb250aHMgPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ01heScsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlYyddO1xyXG4gICAgICAgIHZhciB5ZWFyID0gYS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciBtb250aCA9IG1vbnRoc1thLmdldE1vbnRoKCldO1xyXG4gICAgICAgIHZhciBkYXRlID0gYS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIGhvdXIgPSBhLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIG1pbiA9IGEuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBzZWMgPSBhLmdldFNlY29uZHMoKTtcclxuICAgICAgICB2YXIgdGltZSA9IGRhdGUgKyAnICcgKyBtb250aCArICcgJyArIHllYXIgKyAnICcgKyBob3VyICsgJzonICsgbWluICsgJzonICsgc2VjIDsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRldGltZSBpcyBcIisgdGltZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgxNTIwNTQ3Mjk1ODIxICogMTAwMCApO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBtb21lbnQodCkuZm9ybWF0KFwiZGQubW0ueXl5eSBoaDpNTTpzc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjJuZCBkYXRldGltZSBpcyBcIisgZm9ybWF0dGVkKTtcclxuICAgICAgICBcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEFsbENsYXNzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlDbGFzc0xpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkLnN1YnNjcmliZSggbXkgPT57XHJcbiAgICAgICAgICAgIHRoaXMubGVuID0gbXkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xhc3MgPSBteTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkLnN1YnNjcmliZShjbGFzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzcyA9IGNsYXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2xhc3MxID0gY2xhcztcclxuICAgICAgICAgICAgdGhpcy5sZW5nID0gY2xhcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd2NsYXNzZXMoKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd2NsYXNzZXMoKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFsbCBjbGFzc2VzIHNpemUgaXMgIFwiKyB0aGlzLmxlbmcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibXkgY2xhc3MgbGVuZ3RoIGlzIFwiKyB0aGlzLmxlbiApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPCB0aGlzLmxlbmc7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBhbGwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsQ2xhc3MxW2ldLklEKSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW47IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubXlDbGFzc1tqXS5JRCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbCA9PSBteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDbGFzc1tpXS5yZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vZGVsZXRlIGNsYXNzcm9vXHJcbiAgICAgIGRlbGV0ZUNsKGNsYXNzcm9vbTogQ2xhc3Nyb29tKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZShjbGFzc3Jvb20pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICB9IFxyXG5cclxuICAgICAgbmF2Y2xhc3MoKXtcclxuICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsYXNzcm9vbVwiXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdnF1ZXMoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcbiAgIH1cclxuXHJcbiAgICBpbkNsYXNzKGNsYXNzcm9vbTogQ2xhc3Nyb29tLCBpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgdWlkOiBzdHJpbmcpe1xyXG4gICAgICAgICAvL3VwZGF0ZSB0aGUgY2xhc3Nyb29tIG5vZGUgdG8gaW5jbHVkZSB1c2VycyB3aG8gcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gICAgICAudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcblxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuICAgICAgfSkgXHJcbiAgICB9XHJcbiAgICAgIC8vdG8gc3RvcmUgYWxsIGF2YWlsYWJsZSBkYXRhIGZvciBlYWNoIHVzZXIsIHVzZSBiYWNrZW5kIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHZhbHVlIG9mIGVhY2ggYXR0cmludXRlIFxyXG4gICAgICAvL2ZvciBldmVyeSB1c2Vyc1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vdGhpcyBpcyB0byB0dXJuIG9mZiB0aGUgZGVsZXRlIGJ1dHRvbiBcclxuXHJcbiAgICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUNsYXNzKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ0lEID0gaWQ7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuQ25hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgIC8vIGFsZXJ0KG5hbWUgKyBcIiBpcyBub3cgYWN0aXZlIGNsYXNzXCIpO1xyXG4gICAgICAgIGlmKHVpZCA9PSBCYWNrZW5kU2VydmljZS50b2tlbil7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3IgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcInVpZFwiOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlVGFnKHRhZylcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICB9KTtcclxuICB9IFxyXG4gICAgICBcclxuXHJcbn1cclxuIl19