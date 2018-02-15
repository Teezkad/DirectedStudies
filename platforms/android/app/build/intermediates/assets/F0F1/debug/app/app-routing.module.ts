import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
  ]; 

export const approutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "register", loadChildren: "./register/register.module#RegisterModule"},
    {path: "classroom", loadChildren: "./Classrooms/classroom.module#classroomModule"},
    {path: "tag", loadChildren: "./Tags/tag.module#tagModule"}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(approutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
