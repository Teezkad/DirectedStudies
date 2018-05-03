import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { tagRouting } from "./tag.routes";
import { tagComponent } from "./tag.component";
import { BackendService, FirebaseService, UtilsService } from "../services";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    tagRouting
  ],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService
  ],
  declarations: [
    tagComponent
  ],
  bootstrap: [
    tagComponent
  ]
})
export class tagModule { }
