"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var topicQuestionComponent = /** @class */ (function () {
    function topicQuestionComponent(routerExtensions, firebaseService, route, firebaseService1) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.firebaseService1 = firebaseService1;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.isTA = backend_service_1.BackendService.TA;
        this.route.queryParams.subscribe(function (params) {
            _this.tid = params["tid"];
            _this.topicname = params["topicname"];
        });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    topicQuestionComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        console.log("Tid is " + this.tid);
        this.question$ = this.firebaseService1.getTopicQuestions(this.tid);
    };
    Object.defineProperty(topicQuestionComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    topicQuestionComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    topicQuestionComponent.prototype.deleteQuestion = function (question) {
        this.firebaseService1.deleteQuestion(question);
    };
    topicQuestionComponent.prototype.createQuestion = function () {
        var navigationExtras = {
            queryParams: {
                "Tid": this.tid,
                "Tname": this.topicname
            }
        };
        this.routerExtensions.navigate(["question"], navigationExtras);
    };
    tslib_1.__decorate([
        core_1.ViewChild("drawer"),
        tslib_1.__metadata("design:type", angular_1.RadSideDrawerComponent)
    ], topicQuestionComponent.prototype, "drawerComponent", void 0);
    topicQuestionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "topicQuestion",
            moduleId: module.id,
            templateUrl: "./topicQuestion.component.html"
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute,
            services_1.FirebaseService1])
=======
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute])
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
    ], topicQuestionComponent);
    return topicQuestionComponent;
}());
exports.topicQuestionComponent = topicQuestionComponent;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNRdWVzdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFFNUMsK0RBQTZEO0FBQzdELG1GQUFpRjtBQUNqRiwwQ0FBa0U7QUFPbEU7SUFvQkksZ0NBQW9CLGdCQUFrQyxFQUMxQyxlQUFnQyxFQUFVLEtBQXFCO1FBRDNFLGlCQVNLO1FBVGUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXBCM0UsZ0JBQVcsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUNuQyxVQUFLLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFjdEIsY0FBUyxHQUFHLGdDQUFjLENBQUMsVUFBVSxDQUFDO1FBUXJDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0w7O2tFQUU4RDtJQUM5RCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUczRSxDQUFDO0lBRUQsK0NBQWMsR0FBZCxVQUFlLFFBQWtCO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFuQ29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDOzBDQUFrQixnQ0FBc0I7bUVBQUM7SUFScEQsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO2lEQXFCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQWlCLHVCQUFjO09BckJsRSxzQkFBc0IsQ0E2Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRvcGljUXVlc3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RvcGljUXVlc3Rpb24uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgdG9waWNRdWVzdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlciA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG4gICAgQ25hbWUgPSBCYWNrZW5kU2VydmljZS5DbmFtZTtcclxuICAgXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwdWJsaWMgcXVlc3Rpb24kOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHRhZ3MkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHJlcXVlc3RzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIGNyZWF0b3JJZCA9IEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3I7XHJcbiAgICBwdWJsaWMgdGlkO1xyXG4gICAgcHVibGljIHRvcGljbmFtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZCA9IHBhcmFtc1tcInRpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9waWNuYW1lID0gcGFyYW1zW1widG9waWNuYW1lXCJdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaWQgaXMgXCIrIHRoaXMudGlkKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VG9waWNRdWVzdGlvbnModGhpcy50aWQpO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbil7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
