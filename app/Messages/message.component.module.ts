import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirebaseService1} from "../services/firebase.service.1"

import { SharedModule } from "../shared/shared.module";
import { topicQuestionRoutingModule } from "./message-routing.module";
import { topicQuestionComponent } from "./message.component";

@NgModule({
    providers: [
        FirebaseService1
    ],
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
