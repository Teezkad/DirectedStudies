import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, Question, Options} from '../models/';
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
    selector: "question",
    moduleId: module.id,
    templateUrl: 'question.component.html'
})

export class tagComponent{

   public question : Question;
   public option1 : Options;
   public option2 : Options;
   public option3 : Options;
   public option4 : Options;

   constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {
        this.option1 = new Options();
            this.option1.name = "";
            this.option1.questionId =  this.question.id ;
            this.option1.isAnswer = false;

            this.option2 = new Options();
            this.option2.name = "";
            this.option2.questionId =  this.question.id ;
            this.option2.isAnswer = false;

            this.option3 = new Options();
            this.option3.name = "";
            this.option3.questionId =  this.question.id ;
            this.option3.isAnswer = false;

            this.option4 = new Options();
            this.option4.name = "";
            this.option4.questionId =  this.question.id ;
            this.option4.isAnswer = false;

        this.question = new Question();
            this.question.id;
            this.question.name= "";
            this.question.questionTypeId; //recieves tag id from tag page
            this.question.Tag; //recieve tag name from tag page
            this.question.CID= BackendService.CID;
            this.question.UID= BackendService.token;
            this.question.options = [this.option1, this.option2, this.option3, this.option4];
           

    }

    
    public users$: Observable<any>;
    public classrooms$: Observable<any>;

}