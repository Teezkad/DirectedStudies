import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User.model';
import {FirebaseService, BackendService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { topmost } from "ui/frame";
import { NavigatedData, Page } from "ui/page";
import {Router} from '@angular/router';
import firebase = require("nativescript-plugin-firebase");
import { LoginViewModel } from "./login-view-model";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import observableModule = require("data/observable");
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


@Component({
  selector: 'gf-login',
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;
  public users$: Observable<any>;

  
  constructor(private firebaseService: FirebaseService,
              private routerExtensions: RouterExtensions
            ) {
            
              this.user = new User();
              this.user.email = "";
              this.user.password = "";
            }
 
            ngOnInit(): void {
              if (BackendService.isLoggedIn()) {
               this.routerExtensions.navigate(['/home']);
              }
            }

 submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } 
 }

register(){
  this.routerExtensions.navigate(['/register']);

}

 login() {
    this.isAuthenticating = true;
    var id = firebase.getCurrentUser;
     this.firebaseService.login(this.user)
      .then(() => {
        if(BackendService.token != ""){
        this.isAuthenticating = false;
        console.log("My token is"+ BackendService.token);
        console.log("Login successful");
        console.log("Login id statement is" + id);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }else{
          this.routerExtensions.navigate(["login"]);
        }
      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for Giftler to reset your password.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {
        this.firebaseService.resetPassword(data.text.trim())
      }
    });
 }

logOut() {
  this.firebaseService.logout();
  this.routerExtensions.navigate(["/login"], { clearHistory: true } );
}

}