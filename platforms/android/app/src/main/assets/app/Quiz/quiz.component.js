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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCxrRUFBZ0Y7QUFJaEYsd0NBQThEO0FBRTlELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFHakYsMENBQStDO0FBVy9DO0lBdUJJLHVCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBVSxjQUE4QixFQUN2RSxLQUFxQixFQUFVLGdCQUFrQztRQUY5RSxpQkFTSztRQVRlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWpCdkUsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1AsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFhVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUlMLGdDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsS0FBSyxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBRWhCLElB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QUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBcEdvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBbkJwRCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQXdCd0Msb0NBQWdCO1lBQ3pCLDBCQUFlLEVBQTBCLGdDQUFjO1lBQ2hFLHVCQUFjLEVBQTRCLDJCQUFnQjtPQXpCckUsYUFBYSxDQTBIekI7SUFBRCxvQkFBQztDQUFBLEFBMUhELElBMEhDO0FBMUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlciwgQ2xhc3Nyb29tLCBPcHRpb25zLCBRdWVzdGlvbn0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicXVpelwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcXVpei5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcXVpei5jb21wb25lbnQuY3NzJ10gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWl6Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcXVpeiQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgdGlkOyBcclxuICAgIHB1YmxpYyB0bmFtZTtcclxuICAgIHB1YmxpYyBxdWVzdGlvbnM7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IFtdO1xyXG4gICAgcHVibGljIHF1ZXN0aW9uO1xyXG4gICAgcHVibGljIG9wdGlvbiA9IFtdO1xyXG4gICAgcHVibGljIG5vID0gMTtcclxuICAgIHB1YmxpYyBsZW5ndGg7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleDtcclxuICAgIHB1YmxpYyBzY29yZSA9IDA7XHJcbiAgICBwdWJsaWMgbWFyayA9IFtdO1xyXG4gICAgcHVibGljIHRvcGljO1xyXG4gICAgcHVibGljIGxlbmc7XHJcbiBcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZpcmViYXNlU2VydmljZTE6IEZpcmViYXNlU2VydmljZTFcclxuICAgICAgICBcclxuICAgICAgICApIHsgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlkID0gcGFyYW1zW1wiVGlkXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bmFtZSA9IHBhcmFtc1tcIlRuYW1lXCJdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5xdWl6JCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UxLmdldFRvcGljUXVlc3Rpb25zKHRoaXMudGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5xdWl6JC5zdWJzY3JpYmUodmFsID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVuZyA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZihsZW4gIT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcGljPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5UYWdzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMudG9waWMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2V0cXVlc3Rpb24odGhpcy5ubyk7XHJcblxyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRJRCA9IHRoaXMudGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHF1ZXN0aW9uKG51bTogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLnF1aXokLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiVGhlcmUgYSBubyBxdWVzdGlvbnMgZm9yIHRoaXMgdG9waWNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHZhbDtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5xdWVzdGlvbnNbbnVtXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1tudW1dLk9wdGlvbikpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlF1ZXN0aW9ucyBhcmUgXCIrIEpTT04uc3RyaW5naWZ5KHRoaXMucXVlc3Rpb25zKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gaXMgXCIrIHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiBpcyBcIisgdGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxlbmd0aCBpcyBcIisgdGhpcy5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UXVlc3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vICsrO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5OYW1lKSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9uc1t0aGlzLm5vXS5PcHRpb24pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbnMgYXJlIFwiKyBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXN0aW9ucykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGlzIFwiKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb24gaXMgXCIrIHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggaXMgXCIrIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuLy90byBncmFkZSBjcmVhdGUgYW4gYXJyYXkgYW5kIHN0b3JlIHRydWUgb3IgZmFsc2UgZm9yIGVhY2ggaW5kZXggYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJ1ZSB2YWx1ZXMgZm9yIHNjb3JlXHJcbiAgICBzZWxlY3RNZW51KGkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXg9aTtcclxuICAgICAgICB0aGlzLm1hcmtbdGhpcy5ub10gPSB0aGlzLm9wdGlvbltpXS5pc0Fuc3dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm9dKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlciBhZnRlciBpcyBcIisgdGhpcy5tYXJrW3RoaXMubm8rMV0pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbmZvcih2YXIgaSAgPSAwOyBpIDx0aGlzLm1hcmsubGVuZ3RoOyBpKyspXHJcbntcclxuICAgIGlmKHRoaXMubWFya1tpXSA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG50aGlzLnNjb3JlID0gKHRoaXMuc2NvcmUvdGhpcy5sZW5ndGggKiAxMDApO1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBzY29yZSBpcyBcIiArIHRoaXMuc2NvcmUgKyBcIiVcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInNlYXJjaFwiXSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFVzZXJTY29yZShCYWNrZW5kU2VydmljZS5DSUQsIEJhY2tlbmRTZXJ2aWNlLlRJRCwgdGhpcy50b3BpYywgdGhpcy5zY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuIl19