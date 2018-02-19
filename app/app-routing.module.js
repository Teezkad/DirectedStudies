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
    { path: "question", loadChildren: "./Question/question.module#questionModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSwyREFBaUQ7QUFFcEMsUUFBQSxhQUFhLEdBQUc7SUFDekIsOEJBQVM7Q0FDVixDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQVc7SUFDN0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDN0UsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSw4Q0FBOEMsRUFBRTtJQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBQztJQUM5RSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLCtDQUErQyxFQUFDO0lBQ2xGLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsNkJBQTZCLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBQztDQUdoRixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFByb3ZpZGVycyA9IFtcclxuICAgIEF1dGhHdWFyZFxyXG4gIF07IFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9NYW5hZ2VUb3BpY3MvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9NYW5hZ2VRdWVzdGlvbnMvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInF1aXpcIiwgbG9hZENoaWxkcmVuOiBcIi4vUXVpei9xdWl6Lm1vZHVsZSNRdWl6TW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGxvYWRDaGlsZHJlbjogXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSNSZWdpc3Rlck1vZHVsZVwifSxcclxuICAgIHtwYXRoOiBcImNsYXNzcm9vbVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9DbGFzc3Jvb21zL2NsYXNzcm9vbS5tb2R1bGUjY2xhc3Nyb29tTW9kdWxlXCJ9LFxyXG4gICAge3BhdGg6IFwidGFnXCIsIGxvYWRDaGlsZHJlbjogXCIuL1RhZ3MvdGFnLm1vZHVsZSN0YWdNb2R1bGVcIn0sXHJcbiAgICB7cGF0aDogXCJxdWVzdGlvblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9RdWVzdGlvbi9xdWVzdGlvbi5tb2R1bGUjcXVlc3Rpb25Nb2R1bGVcIn1cclxuXHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHByb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=