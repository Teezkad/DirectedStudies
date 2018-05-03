import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { topicQuestionComponent } from "./topicQuestion.component";

const routes: Routes = [
    { path: "", component: topicQuestionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class topicQuestionRoutingModule { }
