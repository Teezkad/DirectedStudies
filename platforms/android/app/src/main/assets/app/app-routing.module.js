"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.approutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./ManageTopics/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./ManageQuestions/search.module#SearchModule" },
    { path: "quiz", loadChildren: "./Quiz/quiz.module#QuizModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "register", loadChildren: "./register/register.module#RegisterModule" },
    { path: "classroom", loadChildren: "./Classrooms/classroom.module#classroomModule" },
    { path: "tag", loadChildren: "./Tags/tag.module#tagModule" },
    { path: "question", loadChildren: "./Question/question.module#questionModule" },
    { path: "UserTopic", loadChildren: "./UserTopic/UserTopic.module#UserTopicModule" },
    { path: "Score", loadChildren: "./Score/Score.module#ScoreModule" },
    { path: "topicScore", loadChildren: "./Score/topicScore.module#topicScoreModule" },
    { path: "topicQuestion", loadChildren: "./ManageTopics/topicQuestion.component.module#topicQuestionModule" },
    { path: "message", loadChildren: "./Messages/message.component.module#messageModule" },
    { path: "profile", loadChildren: "./UserProfile/profile.component.module#profileModule" },
    { path: "messageDetails", loadChildren: "./MessageDetails/messageDetails.module#messageDetailsModule" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(exports.approutes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
