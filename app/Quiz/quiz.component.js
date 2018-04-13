"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(routerExtensions, firebaseService, backendService, route, firebaseService1) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.backendService = backendService;
        this.route = route;
        this.firebaseService1 = firebaseService1;
        this.options = [];
        this.option = [];
        this.no = 0;
        this.score = 0;
        this.mark = [];
        this.route.queryParams.subscribe(function (params) {
            _this.tid = params["Tid"];
            _this.tname = params["Tname"];
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quiz$ = this.firebaseService1.getTopicQuestions(this.tid);
        this.quiz$.subscribe(function (val) {
            _this.topic = JSON.parse(JSON.stringify(val[0].Tags));
            console.log("Question is " + _this.topic);
        });
        this.getquestion(this.no);
        backend_service_1.BackendService.TID = this.tid;
    };
    QuizComponent.prototype.getquestion = function (num) {
        var _this = this;
        this.quiz$.subscribe(function (val) {
            _this.length = val.length;
            if (_this.length == 0) {
                _this.question = "There a no questions for this topic";
            }
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
    //to grade create an array and store true or false for each index and count the number of true values for score
    QuizComponent.prototype.selectMenu = function (i) {
        this.selectedIndex = i;
        this.mark[this.no] = this.option[i].isAnswer;
        console.log("answer is " + this.mark[this.no]);
        console.log("answer after is " + this.mark[this.no + 1]);
    };
    QuizComponent.prototype.submit = function () {
        for (var i = 0; i < this.mark.length; i++) {
            if (this.mark[i] == true) {
                this.score++;
            }
        }
        this.score = (this.score / this.length * 100);
        alert("Your score is " + this.score + "%");
        this.routerExtensions.navigate(["search"]);
        this.firebaseService.addUserScore(backend_service_1.BackendService.CID, backend_service_1.BackendService.TID, this.topic, this.score);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], QuizComponent.prototype, "drawerComponent", void 0);
    QuizComponent = __decorate([
        core_1.Component({
            selector: "quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html",
            styleUrls: ['./quiz.component.css']
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService,
            router_1.ActivatedRoute, services_1.FirebaseService1])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCxrRUFBZ0Y7QUFJaEYsd0NBQThEO0FBRTlELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFHakYsMENBQStDO0FBVy9DO0lBc0JJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN2RSxLQUFxQixFQUFVLGdCQUFrQztRQUY5RSxpQkFTSztRQVRlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWhCdkUsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1AsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFZVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUlMLGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxLQUFLLEdBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDbkIsS0FB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LGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0NBQWMsQ0FBQyxHQUFHLEVBQUUsZ0NBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQS9Gb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQWxCcEQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0F1QndDLG9DQUFnQjtZQUN6QiwwQkFBZSxFQUEwQixnQ0FBYztZQUNoRSx1QkFBYyxFQUE0QiwyQkFBZ0I7T0F4QnJFLGFBQWEsQ0FvSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztBQXBIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2UsIEZpcmViYXNlU2VydmljZTF9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInF1aXpcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3F1aXouY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3F1aXouY29tcG9uZW50LmNzcyddIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHF1aXokOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHRpZDsgXHJcbiAgICBwdWJsaWMgdG5hbWU7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zO1xyXG4gICAgcHVibGljIG9wdGlvbnMgPSBbXTtcclxuICAgIHB1YmxpYyBxdWVzdGlvbjtcclxuICAgIHB1YmxpYyBvcHRpb24gPSBbXTtcclxuICAgIHB1YmxpYyBubyA9IDA7XHJcbiAgICBwdWJsaWMgbGVuZ3RoO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXg7XHJcbiAgICBwdWJsaWMgc2NvcmUgPSAwO1xyXG4gICAgcHVibGljIG1hcmsgPSBbXTtcclxuICAgIHB1YmxpYyB0b3BpYztcclxuIFxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcclxuICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMVxyXG4gICAgICAgIFxyXG4gICAgICAgICkgeyAgIFxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWQgPSBwYXJhbXNbXCJUaWRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRuYW1lID0gcGFyYW1zW1wiVG5hbWVcIl07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICBcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnF1aXokID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZTEuZ2V0VG9waWNRdWVzdGlvbnModGhpcy50aWQpO1xyXG5cclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4gXHJcbiAgICAgICAgICAgIHt0aGlzLnRvcGljPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5UYWdzKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMudG9waWMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2V0cXVlc3Rpb24odGhpcy5ubyk7XHJcblxyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRJRCA9IHRoaXMudGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHF1ZXN0aW9uKG51bTogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiVGhlcmUgYSBubyBxdWVzdGlvbnMgZm9yIHRoaXMgdG9waWNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHZhbDtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5xdWVzdGlvbnNbbnVtXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1tudW1dLk9wdGlvbikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9ucyBhcmUgXCIrIEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbiBpcyBcIisgdGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBpcyBcIisgdGhpcy5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vICsrO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5PcHRpb24pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbnMgYXJlIFwiKyBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9ucykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGlzIFwiKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb24gaXMgXCIrIHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggaXMgXCIrIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuLy90byBncmFkZSBjcmVhdGUgYW4gYXJyYXkgYW5kIHN0b3JlIHRydWUgb3IgZmFsc2UgZm9yIGVhY2ggaW5kZXggYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJ1ZSB2YWx1ZXMgZm9yIHNjb3JlXHJcbiAgICBzZWxlY3RNZW51KGkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXg9aTtcclxuICAgICAgICB0aGlzLm1hcmtbdGhpcy5ub10gPSB0aGlzLm9wdGlvbltpXS5pc0Fuc3dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm9dKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBhZnRlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm8rMV0pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbmZvcih2YXIgaSAgPSAwOyBpIDx0aGlzLm1hcmsubGVuZ3RoOyBpKyspXHJcbntcclxuICAgIGlmKHRoaXMubWFya1tpXSA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG50aGlzLnNjb3JlID0gKHRoaXMuc2NvcmUvdGhpcy5sZW5ndGggKiAxMDApO1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBzY29yZSBpcyBcIiArIHRoaXMuc2NvcmUgKyBcIiVcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInNlYXJjaFwiXSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFVzZXJTY29yZShCYWNrZW5kU2VydmljZS5DSUQsIEJhY2tlbmRTZXJ2aWNlLlRJRCwgdGhpcy50b3BpYywgdGhpcy5zY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuIl19