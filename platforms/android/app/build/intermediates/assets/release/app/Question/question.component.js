"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("../models/");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var router_2 = require("@angular/router");
var questionComponent = /** @class */ (function () {
    function questionComponent(routerExtensions, firebaseService, router, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.tid = params["Tid"];
            _this.tname = params["Tname"];
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
        this.question.questionTypeId = this.tid; //recieves tag id from tag page
        this.question.Tags = this.tname; //recieve tag name from tag page
        this.question.CID = backend_service_1.BackendService.CID;
        this.question.UID = backend_service_1.BackendService.token;
        this.question.options = [this.option1, this.option2, this.option3, this.option4];
    }
    questionComponent.prototype.onChange1 = function () {
        this.option1.isAnswer = !this.option1.isAnswer;
    };
    questionComponent.prototype.onChange2 = function () {
        this.option2.isAnswer = !this.option2.isAnswer;
        console.log(this.option2.isAnswer);
    };
    questionComponent.prototype.onChange3 = function () {
        this.option3.isAnswer = !this.option3.isAnswer;
    };
    questionComponent.prototype.onChange4 = function () {
        this.option4.isAnswer = !this.option4.isAnswer;
    };
    questionComponent.prototype.submitQuestion = function () {
        var _this = this;
        if (backend_service_1.BackendService.instructor == true) {
            this.firebaseService.addQuestion(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["search"]);
            });
        }
        else {
            this.firebaseService.addQuestionRequest(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID, backend_service_1.BackendService.studentNum).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["search"]);
            });
        }
        // console.log(this.option1.isAnswer);
        // console.log(this.option2.isAnswer);
        // console.log(this.option3.isAnswer);
        // console.log(this.option4.isAnswer);
    };
    questionComponent = __decorate([
        core_1.Component({
            selector: "question",
            moduleId: module.id,
            templateUrl: 'question.component.html',
            styleUrls: ["./question.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router, router_2.ActivatedRoute])
    ], questionComponent);
    return questionComponent;
}());
exports.questionComponent = questionComponent;
