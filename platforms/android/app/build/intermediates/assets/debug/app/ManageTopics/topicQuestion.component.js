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
    topicQuestionComponent.prototype.deleteQuestion = function (question) {
        this.firebaseService1.deleteQuestion(question);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNRdWVzdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLHdDQUE4RDtBQUU5RCwrREFBNkQ7QUFDN0QsbUZBQWlGO0FBQ2pGLDBDQUFrRTtBQU9sRTtJQW9CSSxnQ0FBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsS0FBcUIsRUFDL0QsZ0JBQWtDO1FBRjlDLGlCQVVLO1FBVmUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBckI5QyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFVBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQWN0QixjQUFTLEdBQUcsZ0NBQWMsQ0FBQyxVQUFVLENBQUM7UUFTckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFDTDs7a0VBRThEO0lBQzlELHlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFHNUUsQ0FBQztJQUVELCtDQUFjLEdBQWQsVUFBZSxRQUFrQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFwQ29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7bUVBQUM7SUFScEQsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQXFCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQWlCLHVCQUFjO1lBQzdDLDJCQUFnQjtPQXRCckMsc0JBQXNCLENBOENsQztJQUFELDZCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zLCBRdWVzdGlvbn0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0b3BpY1F1ZXN0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIHRvcGljUXVlc3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIENuYW1lID0gQmFja2VuZFNlcnZpY2UuQ25hbWU7XHJcbiAgIFxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIHF1ZXN0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHF1ZXN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyByZXF1ZXN0cyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBjcmVhdG9ySWQgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG4gICAgcHVibGljIHRpZDtcclxuICAgIHB1YmxpYyB0b3BpY25hbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlkID0gcGFyYW1zW1widGlkXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BpY25hbWUgPSBwYXJhbXNbXCJ0b3BpY25hbWVcIl07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZCBpcyBcIisgdGhpcy50aWQpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24kID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZTEuZ2V0VG9waWNRdWVzdGlvbnModGhpcy50aWQpO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbil7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uKTtcclxuICAgIH1cclxuXHJcbn0iXX0=