import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirebaseService1} from "../services/firebase.service.1"

import { SharedModule } from "../shared/shared.module";
import { profileRoutingModule } from "./profile-routing.module";
import { profileComponent } from "./profile.component";

@NgModule({
    providers: [
        FirebaseService1
    ],
    imports: [
        NativeScriptCommonModule,
        profileRoutingModule,
        SharedModule
    ],
    declarations: [
        profileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class profileModule { }
