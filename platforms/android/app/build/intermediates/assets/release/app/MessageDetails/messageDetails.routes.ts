import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { messageDetailsComponent } from "./messageDetails.component";

const routes: Routes = [
  { path: "", component: messageDetailsComponent },
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})

export class messageDetailsRouting { }
