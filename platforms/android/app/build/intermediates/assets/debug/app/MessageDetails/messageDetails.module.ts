import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { messageDetailsRouting } from "./messageDetails.routes";
import { messageDetailsComponent } from "./messageDetails.component";
import { BackendService, FirebaseService, UtilsService } from "../services";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    messageDetailsRouting
  ],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService
  ],
  declarations: [
    messageDetailsComponent
  ],
  bootstrap: [
    messageDetailsComponent
  ]
})
export class messageDetailsModule { }
