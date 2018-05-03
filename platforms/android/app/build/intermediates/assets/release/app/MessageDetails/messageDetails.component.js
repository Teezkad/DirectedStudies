"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("../models/");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var router_2 = require("@angular/router");
var messageDetailsComponent = /** @class */ (function () {
    function messageDetailsComponent(routerExtensions, firebaseService, router, route, firebaseService1) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.firebaseService1 = firebaseService1;
        this.route.queryParams.subscribe(function (params) {
            _this.rid = params["Rid"];
            _this.m = params["Message"];
            _this.mid = params["Mid"];
        });
        this.option1 = new _1.Options();
        this.option1.name = "";
        this.option1.questionId;
        this.option1.isAnswer = false;
        this.option2 = new _1.Options();
        this.option2.name = "";
        this.option2.questionId;
        this.option2.isAnswer = false;
        this.option3 = new _1.Options();
        this.option3.name = "";
        this.option3.questionId;
        this.option3.isAnswer = false;
        this.option4 = new _1.Options();
        this.option4.name = "";
        this.option4.questionId;
        this.option4.isAnswer = false;
        this.question = new _1.Question();
        this.question.name = "";
        this.question.options = [this.option1, this.option2, this.option3, this.option4];
    }
    messageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request$ = this.firebaseService.getRequest(this.rid);
        this.request$.subscribe(function (val) {
            _this.qid = val[0].id;
            _this.question.name = val[0].Name;
            _this.option1.name = JSON.parse(JSON.stringify(val[0].Option[0].name));
            _this.option2.name = JSON.parse(JSON.stringify(val[0].Option[1].name));
            _this.option3.name = JSON.parse(JSON.stringify(val[0].Option[2].name));
            _this.option4.name = JSON.parse(JSON.stringify(val[0].Option[3].name));
            _this.option1.isAnswer = val[0].Option[0].isAnswer;
            _this.option2.isAnswer = val[0].Option[1].isAnswer;
            _this.option3.isAnswer = val[0].Option[2].isAnswer;
            _this.option4.isAnswer = val[0].Option[3].isAnswer;
            _this.message = _this.m;
        });
    };
    messageDetailsComponent.prototype.UpdateQuestion = function () {
        this.firebaseService1.fixedQuestionRequest(this.qid, this.question.name, this.question.options);
        this.routerExtensions.navigate(["message"]);
        this.firebaseService1.deleteMessage(this.mid);
        console.log("Question fixed");
    };
    messageDetailsComponent.prototype.onChange1 = function () {
        this.option1.isAnswer = !this.option1.isAnswer;
    };
    messageDetailsComponent.prototype.onChange2 = function () {
        this.option2.isAnswer = !this.option2.isAnswer;
        console.log(this.option2.isAnswer);
    };
    messageDetailsComponent.prototype.onChange3 = function () {
        this.option3.isAnswer = !this.option3.isAnswer;
    };
    messageDetailsComponent.prototype.onChange4 = function () {
        this.option4.isAnswer = !this.option4.isAnswer;
    };
    messageDetailsComponent.prototype.submitQuestion = function () {
        var _this = this;
        if (backend_service_1.BackendService.instructor == true) {
            this.firebaseService.addQuestion(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["message"]);
            });
        }
        else {
            this.firebaseService.addQuestionRequest(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID, backend_service_1.BackendService.studentNum).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["message"]);
            });
        }
        // console.log(this.option1.isAnswer);
        // console.log(this.option2.isAnswer);
        // console.log(this.option3.isAnswer);
        // console.log(this.option4.isAnswer);
    };
    messageDetailsComponent = __decorate([
        core_1.Component({
            selector: "messageDetails",
            moduleId: module.id,
            templateUrl: 'messageDetails.component.html',
            styleUrls: ["./messageDetails.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router, router_2.ActivatedRoute,
            services_1.FirebaseService1])
    ], messageDetailsComponent);
    return messageDetailsComponent;
}());
exports.messageDetailsComponent = messageDetailsComponent;
