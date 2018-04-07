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
    { path: "topicQuestion", loadChildren: "./ManageTopics/topicQuestion.component.module#topicQuestionModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSwyREFBaUQ7QUFFcEMsUUFBQSxhQUFhLEdBQUc7SUFDekIsOEJBQVM7Q0FDVixDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQVc7SUFDN0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDN0UsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSw4Q0FBOEMsRUFBRTtJQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBQztJQUM5RSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLCtDQUErQyxFQUFDO0lBQ2xGLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsNkJBQTZCLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBQztJQUM3RSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDhDQUE4QyxFQUFDO0lBQ2pGLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUM7SUFDakUsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSw0Q0FBNEMsRUFBQztJQUNoRixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLG1FQUFtRSxFQUFDO0NBRzdHLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xyXG4gICAgQXV0aEd1YXJkXHJcbiAgXTsgXHJcblxyXG5leHBvcnQgY29uc3QgYXBwcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGxvYWRDaGlsZHJlbjogXCIuL01hbmFnZVRvcGljcy9icm93c2UubW9kdWxlI0Jyb3dzZU1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCIuL01hbmFnZVF1ZXN0aW9ucy9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwicXVpelwiLCBsb2FkQ2hpbGRyZW46IFwiLi9RdWl6L3F1aXoubW9kdWxlI1F1aXpNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgbG9hZENoaWxkcmVuOiBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlI1JlZ2lzdGVyTW9kdWxlXCJ9LFxyXG4gICAge3BhdGg6IFwiY2xhc3Nyb29tXCIsIGxvYWRDaGlsZHJlbjogXCIuL0NsYXNzcm9vbXMvY2xhc3Nyb29tLm1vZHVsZSNjbGFzc3Jvb21Nb2R1bGVcIn0sXHJcbiAgICB7cGF0aDogXCJ0YWdcIiwgbG9hZENoaWxkcmVuOiBcIi4vVGFncy90YWcubW9kdWxlI3RhZ01vZHVsZVwifSxcclxuICAgIHtwYXRoOiBcInF1ZXN0aW9uXCIsIGxvYWRDaGlsZHJlbjogXCIuL1F1ZXN0aW9uL3F1ZXN0aW9uLm1vZHVsZSNxdWVzdGlvbk1vZHVsZVwifSxcclxuICAgIHtwYXRoOiBcIlVzZXJUb3BpY1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9Vc2VyVG9waWMvVXNlclRvcGljLm1vZHVsZSNVc2VyVG9waWNNb2R1bGVcIn0sXHJcbiAgICB7cGF0aDogXCJTY29yZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9TY29yZS9TY29yZS5tb2R1bGUjU2NvcmVNb2R1bGVcIn0sXHJcbiAgICB7cGF0aDogXCJ0b3BpY1Njb3JlXCIsIGxvYWRDaGlsZHJlbjogXCIuL1Njb3JlL3RvcGljU2NvcmUubW9kdWxlI3RvcGljU2NvcmVNb2R1bGVcIn0sXHJcbiAgICB7cGF0aDogXCJ0b3BpY1F1ZXN0aW9uXCIsIGxvYWRDaGlsZHJlbjogXCIuL01hbmFnZVRvcGljcy90b3BpY1F1ZXN0aW9uLmNvbXBvbmVudC5tb2R1bGUjdG9waWNRdWVzdGlvbk1vZHVsZVwifVxyXG5cclxuXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==