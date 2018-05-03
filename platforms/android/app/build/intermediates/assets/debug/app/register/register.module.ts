import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { registerRouting } from "./register.routes";
import { RegisterComponent } from "./register.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    registerRouting
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
