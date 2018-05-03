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
