import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { topicScoreRoutingModule } from "./topicScore.routing";
import { topicScoreComponent } from "./topicScore.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        topicScoreRoutingModule,
        SharedModule
    ],
    declarations: [
        topicScoreComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class topicScoreModule { }
