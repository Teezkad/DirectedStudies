import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { ScoreRoutingModule } from "./Score.routing";
import { ScoreComponent } from "./Score.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScoreRoutingModule,
        SharedModule
    ],
    declarations: [
        ScoreComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreModule { }
