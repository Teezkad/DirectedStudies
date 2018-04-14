import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { topicScoreComponent } from "./topicScore.component";

const routes: Routes = [
    { path: "", component: topicScoreComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class topicScoreRoutingModule { }
