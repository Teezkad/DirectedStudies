import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { questionRouting } from "./question.routes";
import { questionComponent } from "./question.component";
import { BackendService, FirebaseService, UtilsService } from "../services";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    questionRouting
  ],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService
  ],
  declarations: [
    questionComponent
  ],
  bootstrap: [
    questionComponent
  ]
})
export class questionModule { }
