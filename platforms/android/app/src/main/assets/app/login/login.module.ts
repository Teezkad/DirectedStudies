import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { loginRouting } from "./login.routes";
import { LoginComponent } from "./login.component";
import { BackendService, FirebaseService, UtilsService } from "../services";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting
  ],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService
  ],
  declarations: [
    LoginComponent
  ],
  bootstrap: [
    LoginComponent
  ]
})
export class LoginModule { }
