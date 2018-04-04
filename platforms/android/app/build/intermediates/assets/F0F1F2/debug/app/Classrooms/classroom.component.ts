import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/';
import {Classroom} from '../models/Classroom.model'
import {FirebaseService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { topmost } from "ui/frame";
import { NavigatedData, Page,  } from "ui/page";
import {Router} from '@angular/router';
import firebase = require("nativescript-plugin-firebase");
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import observableModule = require("data/observable");
import { BackendService } from "../services/backend.service";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


@Component({
    selector: "classroom",
    moduleId: module.id,
    templateUrl: 'classroom.component.html'
})

export class classroomComponent {

   public create : Classroom;

   constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {
        this.create = new Classroom();
            this.create.id =  Number(new Date());
            this.create.name= "";
            this.create.professor = "";
            this.create.institution = "";
            this.create.members= [];
            this.create.classCode = "";
            this.create.year = "";
           //this.create.UID = BackendService.token;

    }

addClass(){
    this.firebaseService.addClassroom(this.create.id, this.create.name, this.create.professor,
        this.create.institution,  this.create.members, this.create.classCode, this.create.year, 
        this.create.UID).then((message:any) => {
      
            alert(message);
       
            console.log("Classroom " + this.create.name);
          }) 

          

          this.routerExtensions.navigate(["/home"]);
}

inClass(classroom: Classroom, id: string, Cname: string, Prof: string, Year: string, uid: string){
    //update the classroom node to include users who registered
     this.firebaseService.registerClassroom(classroom, BackendService.Uid, BackendService.Uname, BackendService.studentNum)
 .then((message:any) => {
 
   alert(message);

   //update the user's node to include a list of classes
//    this.firebaseService.userRegister(id, Cname, Prof, Year, uid)

   console.log("Classroom successfully registered");
 }) 
}

}