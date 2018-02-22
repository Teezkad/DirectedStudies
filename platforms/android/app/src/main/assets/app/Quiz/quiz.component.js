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
        this.options = [];
        this.option = [];
        this.no = 0;
        this.score = 0;
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
        this.getquestion(this.no);
    };
    QuizComponent.prototype.getquestion = function (num) {
        var _this = this;
        this.quiz$.subscribe(function (val) {
            _this.length = val.length;
            _this.questions = val;
            // this.options = JSON.parse(JSON.stringify(val));
            _this.question = JSON.parse(JSON.stringify(_this.questions[num].Name));
            _this.option = JSON.parse(JSON.stringify(_this.questions[num].Option));
            console.log("Questions are " + JSON.stringify(_this.questions));
            console.log("Question is " + _this.question);
            console.log("Option is " + _this.option);
            console.log("length is " + _this.length);
        });
    };
    QuizComponent.prototype.nextQuestion = function () {
        this.no++;
        // this.options = JSON.parse(JSON.stringify(val));
        this.question = JSON.parse(JSON.stringify(this.questions[this.no].Name));
        this.option = JSON.parse(JSON.stringify(this.questions[this.no].Option));
        console.log("Questions are " + JSON.stringify(this.questions));
        console.log("Question is " + this.question);
        console.log("Option is " + this.option);
        console.log("length is " + this.length);
        this.selectedIndex = null;
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
    QuizComponent.prototype.selectMenu = function (i) {
        this.selectedIndex = i;
        console.log(this.option[i].name);
        if (this.option[i].isAnswer == true) {
            this.score++;
        }
    };
    QuizComponent.prototype.submit = function () {
        alert("Your score is " + this.score + "/" + this.length);
        this.routerExtensions.navigate(["search"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCxrRUFBZ0Y7QUFJaEYsd0NBQTRDO0FBRTVDLCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFHakYsMENBQStDO0FBVS9DO0lBb0JJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN2RSxLQUFxQjtRQUZsQyxpQkFTSztRQVRlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBZDNCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osT0FBRSxHQUFHLENBQUMsQ0FBQztRQUdQLFVBQUssR0FBRyxDQUFDLENBQUM7UUFXVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUlMLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLG9FQUFvRTtRQUNwRSxrREFBa0Q7UUFDbEQsSUFBSTtRQUNKLEtBQUs7UUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEdBQVc7UUFB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Z0IsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTVFb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQWhCcEQsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FxQndDLG9DQUFnQjtZQUN6QiwwQkFBZSxFQUEwQixnQ0FBYztZQUNoRSx1QkFBYztPQXRCekIsYUFBYSxDQTZGekI7SUFBRCxvQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zLCBRdWVzdGlvbn0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicXVpelwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcXVpei5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWl6Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcXVpeiQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgdGlkOyBcclxuICAgIHB1YmxpYyB0bmFtZTtcclxuICAgIHB1YmxpYyBxdWVzdGlvbnM7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IFtdO1xyXG4gICAgcHVibGljIHF1ZXN0aW9uO1xyXG4gICAgcHVibGljIG9wdGlvbiA9IFtdO1xyXG4gICAgcHVibGljIG5vID0gMDtcclxuICAgIHB1YmxpYyBsZW5ndGg7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleDtcclxuICAgIHB1YmxpYyBzY29yZSA9IDA7XHJcbiBcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKSB7ICAgXHJcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZCA9IHBhcmFtc1tcIlRpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG5hbWUgPSBwYXJhbXNbXCJUbmFtZVwiXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVpeiQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRvcGljUXVlc3Rpb25zKHRoaXMudGlkKTtcclxuICAgICAgICAvLyB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge3RoaXMucXVlc3Rpb24gPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGlzIFwiKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICB0aGlzLmdldHF1ZXN0aW9uKHRoaXMubm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHF1ZXN0aW9uKG51bTogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0gdmFsO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1tudW1dLk5hbWUpKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zW251bV0uT3B0aW9uKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb25zIGFyZSBcIisgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWVzdGlvbnMpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbiBpcyBcIisgdGhpcy5xdWVzdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3B0aW9uIGlzIFwiKyB0aGlzLm9wdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoIGlzIFwiKyB0aGlzLmxlbmd0aCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5leHRRdWVzdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm8gKys7XHJcbiAgICAgICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zW3RoaXMubm9dLk5hbWUpKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zW3RoaXMubm9dLk9wdGlvbikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9ucyBhcmUgXCIrIEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbiBpcyBcIisgdGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBpcyBcIisgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE1lbnUoaSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleD1pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9uW2ldLm5hbWUpO1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9uW2ldLmlzQW5zd2VyID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBzY29yZSBpcyBcIiArIHRoaXMuc2NvcmUgKyBcIi9cIisgdGhpcy5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInNlYXJjaFwiXSk7XHJcbiAgICB9XHJcbn1cclxuIl19