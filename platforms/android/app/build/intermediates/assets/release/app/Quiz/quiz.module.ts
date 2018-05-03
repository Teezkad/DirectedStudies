import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { QuizRoutingModule } from "./quiz-routing.module";
import { QuizComponent } from "./quiz.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        QuizRoutingModule,
        SharedModule
    ],
    declarations: [
        QuizComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QuizModule { }
