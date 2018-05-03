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
import { TextField } from "ui/text-field";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


@Component({
    selector: "classroom",
    moduleId: module.id,
    templateUrl: 'classroom.component.html'
})

export class classroomComponent {

   public create : Classroom;
   public classrooms$: Observable<any>;
   public allClass;
   public cLength;
   public validName;
   public firstTxt;
   public message;


   constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {
        this.create = new Classroom();
            this.create.id =  Number(new Date());
            this.create.name= "";
            this.create.professor = BackendService.Uname;
            this.create.institution = "";
            this.create.members= [];
            this.create.classCode = "";
            this.create.year = "";
           //this.create.UID = BackendService.token;

    }

    ngOnInit(): void {
        this.classrooms$ = <any>this.firebaseService.getAllClassList();
        this.classrooms$.subscribe(val => {
            this.allClass = val;
            this.cLength = val.length;
        })

    }

submit(){

    if(this.cLength == 0){
        this.validName = true;
    }
    for(var i =0; i<this.cLength; i++){
        if(this.allClass[i].Name == this.create.name){
            this.validName = false;

        }else if(this.addClass== null || this.allClass[i].Name == this.create.name){
            this.validName = true;
            console.log("Valid class name");
        }
    }

    this.addClass();
}

addClass(){
    console.log("Valid name is " + this.validName);
    if(this.validName == true){
    this.firebaseService.addClassroom(this.create.id, this.create.name, this.create.professor,
        this.create.institution,  this.create.members, this.create.classCode, this.create.year, 
        this.create.UID).then((message:any) => {
            alert(message);
            console.log("Classroom " + this.create.name);
          })
          this.routerExtensions.navigate(["/home"]);
        }else{
            this.message = "Class name already exists!!";
        }
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