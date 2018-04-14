import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirebaseService1} from "../services/firebase.service.1"

import { SharedModule } from "../shared/shared.module";
import { messageRoutingModule } from "./message-routing.module";
import { messageComponent } from "./message.component";

@NgModule({
    providers: [
        FirebaseService1
    ],
    imports: [
        NativeScriptCommonModule,
        messageRoutingModule,
        SharedModule
    ],
    declarations: [
        messageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class messageModule { }
