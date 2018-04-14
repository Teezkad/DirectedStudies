import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirebaseService1} from "../services/firebase.service.1"
import { SharedModule } from "../shared/shared.module";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";
import { ModalComponent } from "../modal";


@NgModule({
    providers:[
        FirebaseService1,
        ModalDialogService
    ],
    
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        SharedModule
    ],
    declarations: [
        ModalComponent,
        BrowseComponent
    ],
    entryComponents: [ModalComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
