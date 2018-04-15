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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFJaEYsd0NBQTRDO0FBRTVDLCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFDakYsMENBQWdEO0FBQ2hELCtCQUFpQztBQUdqQyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFVbEM7SUF3Qkksd0JBQW9CLGdCQUFrQyxFQUMxQyxlQUFnQyxFQUFVLEtBQXFCO1FBRDNFLGlCQVVLO1FBVmUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXhCM0UsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxVQUFLLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFvQnRCLGNBQVMsR0FBRyxnQ0FBYyxDQUFDLFVBQVUsQ0FBQztRQUtyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMOztrRUFFOEQ7SUFDOUQs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O1lBQzdELEdBQUcsSUFBRSxLQUFLLENBQUM7WUFFWCxFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDYixJQUFJLEdBQUcsS0FBSyxDQUFBO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUM5QixDQUFDO0lBQ0Qsc0JBQUksZ0RBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDBDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUF6Rm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MkRBQUM7SUFScEQsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLHdCQUF3QjtTQUN6QyxDQUFDO3lDQTJCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQWlCLHVCQUFjO09BekJsRSxjQUFjLENBbUcxQjtJQUFELHFCQUFDO0NBQUEsQUFuR0QsSUFtR0M7QUFuR1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbmxldCBub3cgPSBtb21lbnQoKS5mb3JtYXQoJ0xMTEwnKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNjb3JlLmNvbXBvbmVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgICB0ZW1wbGF0ZVVybDogXCIuL1Njb3JlLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIENuYW1lID0gQmFja2VuZFNlcnZpY2UuQ25hbWU7XHJcbiAgIFxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIHNjb3JlJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGdyYXBoJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHVpZDtcclxuICAgIHB1YmxpYyBsZW5ndGg7XHJcbiAgICBwdWJsaWMgdGlkO1xyXG4gICAgcHVibGljIGZuYW1lO1xyXG4gICAgcHVibGljIGxuYW1lO1xyXG4gICAgcHVibGljIHRuYW1lO1xyXG4gICAgcHVibGljIGF2ZztcclxuICAgIHB1YmxpYyBtYXg7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIGNyZWF0b3JJZCA9IEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IHBhcmFtc1tcInVpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG5hbWUgPSBwYXJhbXNbXCJuYW1lXCJdOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuZm5hbWUgPSBwYXJhbXNbXCJmbmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG5hbWUgPSBwYXJhbXNbXCJsbmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlkID0gcGFyYW1zW1widGlkXCJdO1xyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXJTY29yZSh0aGlzLnVpZCwgdGhpcy50aWQpO1xyXG4gICAgICAgIC8vIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRSZWdpc3RlcmVkVXNlcnMoQmFja2VuZFNlcnZpY2UuQ0lEKTtcclxuICAgICAgICB0aGlzLnNjb3JlJC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaCQgPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGRhdGVkID0gSlNPTi5zdHJpbmdpZnkodmFsWzBdLkRhdGUpO1xyXG4gICAgICAgICAgICB2YXIgdGltZXN0YW1wID0gbW9tZW50KHBhcnNlSW50KGRhdGVkKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPCB2YWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgRGF0ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JhcGgkW2ldLkRhdGUpKSk7IFxyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFsnSmFuJywnRmViJywnTWFyJywnQXByJywnTWF5JywnSnVuJywnSnVsJywnQXVnJywnU2VwJywnT2N0JywnTm92JywnRGVjJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgeWVhciA9IGEuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IG1vbnRoc1thLmdldE1vbnRoKCldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBhLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBob3VyID0gYS5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IGEuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlYyA9IGEuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBkYXRlICsgJyAnICsgbW9udGggKyAnICcgKyB5ZWFyICsgJyAnICsgaG91ciArICc6JyArIG1pbiArICc6JyArIHNlYyA7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIGlzIFwiKyB0aW1lICsgXCIgVGltZXN0YW1wIGlzIFwiKyB0aGlzLmdyYXBoJFtpXS5EYXRlICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoJFtpXS5EYXRldGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRBdmVyYWdlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuICAgIGdldEF2ZXJhZ2UoKXtcclxuICAgICAgICB2YXIgc3VtID0wO1xyXG4gICAgICAgIHZhciBtYXhpID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPTA7IGk8dGhpcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBzY29yZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5ncmFwaCRbaV0uU2NvcmUpKTtcclxuICAgICAgICAgICAgc3VtKz1zY29yZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNjb3JlID4gbWF4aSl7XHJcbiAgICAgICAgICAgICAgICBtYXhpID0gc2NvcmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1heCA9IG1heGk7XHJcbiAgICAgICAgdGhpcy5hdmcgPSBzdW0vdGhpcy5sZW5ndGhcclxuICAgIH1cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXHJcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZUxvYWRlZChhcmdzKXtcclxuICAgICAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB0aGlzLmdyYXBoJDtcclxuICAgIH1cclxuIFxyXG59XHJcbiJdfQ==