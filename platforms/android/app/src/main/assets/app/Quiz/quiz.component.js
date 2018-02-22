"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(routerExtensions, firebaseService, backendService, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.backendService = backendService;
        this.route = route;
        this.option = [];
        this.no = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.tid = params["Tid"];
            _this.tname = params["Tname"];
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.quiz$ = this.firebaseService.getTopicQuestions(this.tid);
        // this.quiz$.subscribe(val => {this.question = JSON.stringify(val);
        //     console.log("Question is "+ this.question);
        // }
        // );
        this.getquestion();
    };
    QuizComponent.prototype.getquestion = function () {
        var _this = this;
        this.quiz$.subscribe(function (val) {
            _this.length = val.length;
            _this.question = JSON.parse(JSON.stringify(val[_this.no].Name));
            _this.option = JSON.parse(JSON.stringify(val[_this.no].Option));
            console.log("Question is " + _this.question);
            console.log("Option is " + _this.option);
            console.log("length is " + _this.length);
        });
    };
    QuizComponent.prototype.nextQuestion = function () {
        this.no = this.no + 1;
        this.getquestion();
    };
    Object.defineProperty(QuizComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], QuizComponent.prototype, "drawerComponent", void 0);
    QuizComponent = __decorate([
        core_1.Component({
            selector: "quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCxrRUFBZ0Y7QUFJaEYsd0NBQTRDO0FBRTVDLCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFHakYsMENBQStDO0FBVS9DO0lBZ0JJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN2RSxLQUFxQjtRQUZsQyxpQkFTSztRQVRlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVjNCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBWU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFJTCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxvRUFBb0U7UUFDcEUsa0RBQWtEO1FBQ2xELElBQUk7UUFDSixLQUFLO1FBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHM0MsQ0FBQyxDQUNBLENBQUM7SUFFTixDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSwrQ0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0QseUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQW5Eb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQVpwRCxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQWlCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQTBCLGdDQUFjO1lBQ2hFLHVCQUFjO09BbEJ6QixhQUFhLENBZ0V6QjtJQUFELG9CQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7VGFnfSBmcm9tICcuLi9UYWdzL3RhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJxdWl6XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9xdWl6LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBxdWl6JDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB0aWQ7IFxyXG4gICAgcHVibGljIHRuYW1lO1xyXG4gICAgcHVibGljIHF1ZXN0aW9uO1xyXG4gICAgcHVibGljIG9wdGlvbiA9IFtdO1xyXG4gICAgcHVibGljIG5vID0gMDtcclxuICAgIHB1YmxpYyBsZW5ndGg7XHJcbiBcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7ICAgXHJcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZCA9IHBhcmFtc1tcIlRpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG5hbWUgPSBwYXJhbXNbXCJUbmFtZVwiXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVpeiQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRvcGljUXVlc3Rpb25zKHRoaXMudGlkKTtcclxuICAgICAgICAvLyB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge3RoaXMucXVlc3Rpb24gPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGlzIFwiKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICB0aGlzLmdldHF1ZXN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0cXVlc3Rpb24oKTogdm9pZHtcclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFt0aGlzLm5vXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbdGhpcy5ub10uT3B0aW9uKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbiBpcyBcIisgdGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBpcyBcIisgdGhpcy5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vID0gdGhpcy5ubyArIDE7XHJcbiAgICAgICAgdGhpcy5nZXRxdWVzdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19