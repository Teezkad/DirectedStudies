import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { LoginModule } from "./login/login.module";
import { AppRoutingModule, authProviders, approutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { classroomComponent } from "./Classrooms/classroom.component";
import { questionComponent } from "./Question/question.component";
import { BackendService, FirebaseService, FirebaseService1, UtilsService } from "./services";


@NgModule({
    providers: [
        BackendService,
        FirebaseService1,
        FirebaseService,
        UtilsService,
        authProviders
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        LoginModule,
        CommonModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
