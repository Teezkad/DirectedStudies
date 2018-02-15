import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, Question} from '../models/';
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


export class Tag {
    public id: string;
    public name: string;
    public CID: string;
    public questions: Question [];
}

@Component({
    selector: "tag",
    moduleId: module.id,
    templateUrl: 'tag.component.html'
})

export class tagComponent{

   public tag : Tag;

   constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {
        this.tag = new Tag();
            //this.create.id = 0;
            this.tag.name= "";
            this.tag.CID= BackendService.CID;
            this.tag.questions= [];
           // this.create.UID = BackendService.token;

    }

    
    public users$: Observable<any>;
    public classrooms$: Observable<any>;


addTag(){
    this.firebaseService.addTag(this.tag.name, this.tag.CID).then((message:any) => {
      
            alert(message);
       
            console.log("Tag created " + this.tag.name);
          }) 
          this.routerExtensions.navigate(["/browse"]);
}    
}