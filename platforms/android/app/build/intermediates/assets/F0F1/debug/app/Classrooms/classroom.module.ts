import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { classroomRouting } from "./classroom.routes";
import { classroomComponent } from "./classroom.component";
import { BackendService, FirebaseService, UtilsService } from "../services";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    classroomRouting
  ],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService
  ],
  declarations: [
    classroomComponent
  ],
  bootstrap: [
    classroomComponent
  ]
})
export class classroomModule { }
