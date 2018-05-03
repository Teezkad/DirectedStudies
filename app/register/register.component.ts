import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User.model';
import {FirebaseService} from '../services';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import {prompt} from "ui/dialogs";
import firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { TextField } from "ui/text-field";


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
    public password1;
    public message = "" ;
    public firstTx: string = "";
    public firstTx1: string = "";
    public firstTx2: string = "";
    public emailTxt;
    public passLen;
    public passMatch;



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
  if(this.passMatch == true && this.emailTxt == true && this.passLen == true){

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
     
      this.routerExtensions.navigate(['login']);

    }else{
      this.message = "Validate your input";
    }
  }

  public onTextChange(args) {
    let textField = <TextField>args.object;

    this.firstTx = textField.text;
    this.validateEmail(this.firstTx);
}

public onTextChange1(args) {
  let textField = <TextField>args.object;

  this.firstTx1 = textField.text;
 var length = this.firstTx1.length;

 if(length < 6){
  this.passLen = false;
 }else{
   this.passLen = true;
 }
}

public onTextChange2(args) {
  let textField = <TextField>args.object;

  this.firstTx2 = textField.text;

  if(this.firstTx2 == this.user.password){
    this.passMatch = true;
  }else{
    this.passMatch = false;
  }

}



 validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var res = re.test(email);

  if(res){
    this.emailTxt = true;
  }else{
    this.emailTxt = false;
  }
  
  
}


 goBack(){
  this.routerExtensions.navigate(['/login']);

 }

 }

    