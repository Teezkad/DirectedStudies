"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var moment = require("moment");
var now = moment().format('LLLL');
var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(routerExtensions, firebaseService, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.route.queryParams.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.tname = params["name"];
            _this.fname = params["fname"];
            _this.lname = params["lname"];
            _this.tid = params["tid"];
        });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.score$ = this.firebaseService.getUserScore(this.uid, this.tid);
        // this.users$ = <any>this.firebaseService.getRegisteredUsers(BackendService.CID);
        this.score$.subscribe(function (val) {
            _this.graph$ = val;
            _this.length = val.length;
            if (_this.length != 0) {
                var dated = JSON.stringify(val[0].Date);
                var timestamp = moment(parseInt(dated));
                for (var i = 0; i < val.length; i++) {
                    var a = new Date(JSON.parse(JSON.stringify(_this.graph$[i].Date)));
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var year = a.getFullYear();
                    var month = months[a.getMonth()];
                    var date = a.getDate();
                    var hour = a.getHours();
                    var min = a.getMinutes();
                    var sec = a.getSeconds();
                    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
                    console.log("Date is " + time + " Timestamp is " + _this.graph$[i].Date);
                    _this.graph$[i].Datetime = time;
                }
                _this.getAverage();
            }
        });
    };
    ScoreComponent.prototype.getAverage = function () {
        var sum = 0;
        var maxi = 0;
        for (var i = 0; i < this.length; i++) {
            var score = JSON.parse(JSON.stringify(this.graph$[i].Score));
            sum += score;
            if (score > maxi) {
                maxi = score;
            }
        }
        this.max = maxi;
        this.avg = sum / this.length;
    };
    Object.defineProperty(ScoreComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    ScoreComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ScoreComponent.prototype.onPageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = this.graph$;
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ScoreComponent.prototype, "drawerComponent", void 0);
    ScoreComponent = __decorate([
        core_1.Component({
            selector: "Score.component",
            moduleId: module.id,
            templateUrl: "./Score.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFJaEYsd0NBQTRDO0FBRTVDLCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFDakYsMENBQWdEO0FBQ2hELCtCQUFpQztBQUdqQyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFVbEM7SUF3Qkksd0JBQW9CLGdCQUFrQyxFQUMxQyxlQUFnQyxFQUFVLEtBQXFCO1FBRDNFLGlCQVVLO1FBVmUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXhCM0UsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxVQUFLLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFvQnRCLGNBQVMsR0FBRyxnQ0FBYyxDQUFDLFVBQVUsQ0FBQztRQUtyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMOztrRUFFOEQ7SUFDOUQs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ZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zLCBRdWVzdGlvbn0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5sZXQgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdMTExMJyk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTY29yZS5jb21wb25lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICAgdGVtcGxhdGVVcmw6IFwiLi9TY29yZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG4gICBcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyBzY29yZSQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBncmFwaCQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB1aWQ7XHJcbiAgICBwdWJsaWMgbGVuZ3RoO1xyXG4gICAgcHVibGljIHRpZDtcclxuICAgIHB1YmxpYyBmbmFtZTtcclxuICAgIHB1YmxpYyBsbmFtZTtcclxuICAgIHB1YmxpYyB0bmFtZTtcclxuICAgIHB1YmxpYyBhdmc7XHJcbiAgICBwdWJsaWMgbWF4O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBjcmVhdG9ySWQgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aWQgPSBwYXJhbXNbXCJ1aWRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRuYW1lID0gcGFyYW1zW1wibmFtZVwiXTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZuYW1lID0gcGFyYW1zW1wiZm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxuYW1lID0gcGFyYW1zW1wibG5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZCA9IHBhcmFtc1tcInRpZFwiXTtcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyU2NvcmUodGhpcy51aWQsIHRoaXMudGlkKTtcclxuICAgICAgICAvLyB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0UmVnaXN0ZXJlZFVzZXJzKEJhY2tlbmRTZXJ2aWNlLkNJRCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNjb3JlJC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaCQgPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYodGhpcy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgICAgIHZhciBkYXRlZCA9IEpTT04uc3RyaW5naWZ5KHZhbFswXS5EYXRlKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IG1vbWVudChwYXJzZUludChkYXRlZCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTwgdmFsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IERhdGUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdyYXBoJFtpXS5EYXRlKSkpOyBcclxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbJ0phbicsJ0ZlYicsJ01hcicsJ0FwcicsJ01heScsJ0p1bicsJ0p1bCcsJ0F1ZycsJ1NlcCcsJ09jdCcsJ05vdicsJ0RlYyddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHllYXIgPSBhLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBtb250aHNbYS5nZXRNb250aCgpXTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gYS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG91ciA9IGEuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBhLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWMgPSBhLmdldFNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gZGF0ZSArICcgJyArIG1vbnRoICsgJyAnICsgeWVhciArICcgJyArIGhvdXIgKyAnOicgKyBtaW4gKyAnOicgKyBzZWMgOyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBpcyBcIisgdGltZSArIFwiIFRpbWVzdGFtcCBpcyBcIisgdGhpcy5ncmFwaCRbaV0uRGF0ZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaCRbaV0uRGF0ZXRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QXZlcmFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gICAgZ2V0QXZlcmFnZSgpe1xyXG4gICAgICAgIHZhciBzdW0gPTA7XHJcbiAgICAgICAgdmFyIG1heGkgPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9MDsgaTx0aGlzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHNjb3JlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdyYXBoJFtpXS5TY29yZSkpO1xyXG4gICAgICAgICAgICBzdW0rPXNjb3JlO1xyXG5cclxuICAgICAgICAgICAgaWYoc2NvcmUgPiBtYXhpKXtcclxuICAgICAgICAgICAgICAgIG1heGkgPSBzY29yZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF4ID0gbWF4aTtcclxuICAgICAgICB0aGlzLmF2ZyA9IHN1bS90aGlzLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlTG9hZGVkKGFyZ3Mpe1xyXG4gICAgICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXMuZ3JhcGgkO1xyXG4gICAgfVxyXG4gXHJcbn1cclxuIl19