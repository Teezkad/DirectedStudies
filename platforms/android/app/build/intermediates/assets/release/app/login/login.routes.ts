import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})

export class loginRouting { }
