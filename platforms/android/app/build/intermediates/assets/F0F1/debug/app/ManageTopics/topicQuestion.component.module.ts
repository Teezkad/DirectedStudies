import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { topicQuestionRoutingModule } from "./topicQuestion-routing.module";
import { topicQuestionComponent } from "./topicQuestion.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        topicQuestionRoutingModule,
        SharedModule
    ],
    declarations: [
        topicQuestionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class topicQuestionModule { }
