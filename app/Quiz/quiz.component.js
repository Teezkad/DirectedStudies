"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
        this.no = 1;
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
            var len = val.length;
            _this.leng = val.length;
            if (len != 0) {
                _this.topic = JSON.parse(JSON.stringify(val[0].Tags));
            }
            // console.log("Question is "+ this.topic);
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
            // console.log("Questions are "+ JSON.stringify(this.questions));
            // console.log("Question is "+ this.question);
            // console.log("Option is "+ this.option);
            // console.log("length is "+ this.length);
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
    tslib_1.__decorate([
        core_1.ViewChild("drawer"),
        tslib_1.__metadata("design:type", angular_1.RadSideDrawerComponent)
    ], QuizComponent.prototype, "drawerComponent", void 0);
    QuizComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html",
            styleUrls: ['./quiz.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService,
            router_1.ActivatedRoute, services_1.FirebaseService1])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBSWhGLHdDQUE0QztBQUU1QywrREFBNkQ7QUFDN0QsbUZBQWlGO0FBR2pGLDBDQUErQztBQVcvQztJQXNCSSx1QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQVUsY0FBOEIsRUFDdkUsS0FBcUI7UUFGbEMsaUJBU0s7UUFUZSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2RSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWhCM0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1AsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFZVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUlMLGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxLQUFLLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENB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QUFDO1FBRTNDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGdDQUFjLENBQUMsR0FBRyxFQUFFLGdDQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUEvRm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDOzBDQUFrQixnQ0FBc0I7MERBQUM7SUFsQnBELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7aURBdUJ3QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBMEIsZ0NBQWM7WUFDaEUsdUJBQWM7T0F4QnpCLGFBQWEsQ0FvSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztBQXBIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInF1aXpcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3F1aXouY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3F1aXouY29tcG9uZW50LmNzcyddIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHF1aXokOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHRpZDsgXHJcbiAgICBwdWJsaWMgdG5hbWU7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zO1xyXG4gICAgcHVibGljIG9wdGlvbnMgPSBbXTtcclxuICAgIHB1YmxpYyBxdWVzdGlvbjtcclxuICAgIHB1YmxpYyBvcHRpb24gPSBbXTtcclxuICAgIHB1YmxpYyBubyA9IDA7XHJcbiAgICBwdWJsaWMgbGVuZ3RoO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXg7XHJcbiAgICBwdWJsaWMgc2NvcmUgPSAwO1xyXG4gICAgcHVibGljIG1hcmsgPSBbXTtcclxuICAgIHB1YmxpYyB0b3BpYztcclxuIFxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcclxuICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICBcclxuICAgICAgICApIHsgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlkID0gcGFyYW1zW1wiVGlkXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bmFtZSA9IHBhcmFtc1tcIlRuYW1lXCJdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5xdWl6JCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VG9waWNRdWVzdGlvbnModGhpcy50aWQpO1xyXG5cclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4gXHJcbiAgICAgICAgICAgIHt0aGlzLnRvcGljPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5UYWdzKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMudG9waWMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2V0cXVlc3Rpb24odGhpcy5ubyk7XHJcblxyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRJRCA9IHRoaXMudGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHF1ZXN0aW9uKG51bTogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiVGhlcmUgYSBubyBxdWVzdGlvbnMgZm9yIHRoaXMgdG9waWNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHZhbDtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5xdWVzdGlvbnNbbnVtXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1tudW1dLk9wdGlvbikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9ucyBhcmUgXCIrIEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbiBpcyBcIisgdGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBpcyBcIisgdGhpcy5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vICsrO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5PcHRpb24pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbnMgYXJlIFwiKyBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9ucykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGlzIFwiKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb24gaXMgXCIrIHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggaXMgXCIrIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuLy90byBncmFkZSBjcmVhdGUgYW4gYXJyYXkgYW5kIHN0b3JlIHRydWUgb3IgZmFsc2UgZm9yIGVhY2ggaW5kZXggYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJ1ZSB2YWx1ZXMgZm9yIHNjb3JlXHJcbiAgICBzZWxlY3RNZW51KGkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXg9aTtcclxuICAgICAgICB0aGlzLm1hcmtbdGhpcy5ub10gPSB0aGlzLm9wdGlvbltpXS5pc0Fuc3dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm9dKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBhZnRlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm8rMV0pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbmZvcih2YXIgaSAgPSAwOyBpIDx0aGlzLm1hcmsubGVuZ3RoOyBpKyspXHJcbntcclxuICAgIGlmKHRoaXMubWFya1tpXSA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG50aGlzLnNjb3JlID0gKHRoaXMuc2NvcmUvdGhpcy5sZW5ndGggKiAxMDApO1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBzY29yZSBpcyBcIiArIHRoaXMuc2NvcmUgKyBcIiVcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInNlYXJjaFwiXSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFVzZXJTY29yZShCYWNrZW5kU2VydmljZS5DSUQsIEJhY2tlbmRTZXJ2aWNlLlRJRCwgdGhpcy50b3BpYywgdGhpcy5zY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuIl19
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
