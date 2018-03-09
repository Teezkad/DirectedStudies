import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User.model';
import {FirebaseService} from '../services';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import {prompt} from "ui/dialogs";
import firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
  moduleId: module.id,
  selector: 'gf-register',
  templateUrl: 'register.component.html'
})
 
 export class RegisterComponent{ 
    user: User;
    register: User;
    isLoggingIn = false;
    isAuthenticating = false;


    constructor(private firebaseService: FirebaseService,
        private routerExtensions: RouterExtensions
      ) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
        // this.user.firstName = "";
        // this.user.lastName = "";
        // this.user.instructor= false;
        // this.user.professor = false;

        this.register = new User();
        this.register.email = "";
        this.register.password = "";
        this.register.firstName = "";
        this.register.lastName = "";
        this.register.studenNum = "";
        this.register.instructor= false;
        this.register.professor = false;
      }


 signUp() {
  this.firebaseService.register(this.user, this.user.email, this.register.firstName, this.register.lastName,
    this.register.studenNum, this.register.instructor, this.register.professor)
      .then(() => {
        this.isAuthenticating = false;
      
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
      });
      // this.firebaseService.addUser(this.user.email, this.register.firstName, this.register.lastName,
      //   this.register.studenNum, this.register.instructor, this.register.professor).then((message:any) => {
            
      //        alert(message);
        
      //      })   
     
      this.routerExtensions.navigate(['/home']);
  }


 goBack(){
  this.routerExtensions.navigate(['/login']);

 }

 }

    