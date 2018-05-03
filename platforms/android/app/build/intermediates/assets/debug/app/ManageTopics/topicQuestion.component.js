"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    topicQuestionComponent.prototype.createQuestion = function (tname, tid) {
        var navigationExtras = {
            queryParams: {
                "Tid": tid,
                "Tname": tname
            }
        };
        this.routerExtensions.navigate(["question"], navigationExtras);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], topicQuestionComponent.prototype, "drawerComponent", void 0);
    topicQuestionComponent = __decorate([
        core_1.Component({
            selector: "topicQuestion",
            moduleId: module.id,
            templateUrl: "./topicQuestion.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute,
            services_1.FirebaseService1])
    ], topicQuestionComponent);
    return topicQuestionComponent;
}());
exports.topicQuestionComponent = topicQuestionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNRdWVzdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE4RDtBQUU5RCwrREFBNkQ7QUFDN0QsbUZBQWlGO0FBQ2pGLDBDQUFrRTtBQU9sRTtJQXFCSSxnQ0FBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsS0FBcUIsRUFDL0QsZ0JBQWtDO1FBRjlDLGlCQVVLO1FBVmUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBdEI5QyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFVBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQWN0QixjQUFTLEdBQUcsZ0NBQWMsQ0FBQyxVQUFVLENBQUM7UUFDdEMsU0FBSSxHQUFHLGdDQUFjLENBQUMsRUFBRSxDQUFDO1FBU3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0w7O2tFQUU4RDtJQUM5RCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQkFBSSx3REFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsa0RBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELCtDQUFjLEdBQWQsVUFBZSxRQUFrQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsS0FBYSxFQUFFLEdBQVc7UUFHckMsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDekMsV0FBVyxFQUFFO2dCQUNULEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUF4RGdCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7bUVBQUM7SUFScEQsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQXNCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQWlCLHVCQUFjO1lBQzdDLDJCQUFnQjtPQXZCckMsc0JBQXNCLENBa0VsQztJQUFELDZCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zLCBRdWVzdGlvbn0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0b3BpY1F1ZXN0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIHRvcGljUXVlc3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIENuYW1lID0gQmFja2VuZFNlcnZpY2UuQ25hbWU7XHJcbiAgIFxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIHF1ZXN0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHF1ZXN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyByZXF1ZXN0cyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBjcmVhdG9ySWQgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG4gICAgcHVibGljIGlzVEEgPSBCYWNrZW5kU2VydmljZS5UQTtcclxuICAgIHB1YmxpYyB0aWQ7XHJcbiAgICBwdWJsaWMgdG9waWNuYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTE6IEZpcmViYXNlU2VydmljZTFcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZCA9IHBhcmFtc1tcInRpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9waWNuYW1lID0gcGFyYW1zW1widG9waWNuYW1lXCJdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaWQgaXMgXCIrIHRoaXMudGlkKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UxLmdldFRvcGljUXVlc3Rpb25zKHRoaXMudGlkKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb246IFF1ZXN0aW9uKXtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVF1ZXN0aW9uKHRuYW1lOiBzdHJpbmcsIHRpZDogc3RyaW5nICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgXCJUaWRcIjogdGlkLFxyXG4gICAgICAgICAgICBcIlRuYW1lXCI6IHRuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25cIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxufSJdfQ==