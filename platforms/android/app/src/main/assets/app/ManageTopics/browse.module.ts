import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirebaseService1} from "../services/firebase.service.1"
import { SharedModule } from "../shared/shared.module";
import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";

@NgModule({
    providers:[
        FirebaseService1
    ],
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        SharedModule
    ],
    declarations: [
        BrowseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
