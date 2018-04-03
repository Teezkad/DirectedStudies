import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
  ]; 

export const approutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./ManageTopics/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./ManageQuestions/search.module#SearchModule" },
    { path: "quiz", loadChildren: "./Quiz/quiz.module#QuizModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "register", loadChildren: "./register/register.module#RegisterModule"},
    {path: "classroom", loadChildren: "./Classrooms/classroom.module#classroomModule"},
    {path: "tag", loadChildren: "./Tags/tag.module#tagModule"},
    {path: "question", loadChildren: "./Question/question.module#questionModule"},
    {path: "UserTopic", loadChildren: "./UserTopic/UserTopic.module#UserTopicModule"},
    {path: "Score", loadChildren: "./Score/Score.module#ScoreModule"},
    {path: "topicScore", loadChildren: "./topicScore/topicScore.module#topicScoreModule"},
    {path: "topicQuestion", loadChildren: "./ManageTopics/topicQuestion.component.module#topicQuestionModule"}


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(approutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
