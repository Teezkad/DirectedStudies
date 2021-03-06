import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, Question, Options} from '../models/';
import {Classroom} from '../models/Classroom.model'
import {FirebaseService, FirebaseService1} from '../services';
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
import observable = require("data/observable");
import { BackendService } from "../services/backend.service";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {ActivatedRoute} from "@angular/router";



@Component({
    selector: "messageDetails",
    moduleId: module.id,
    templateUrl: 'messageDetails.component.html',
    styleUrls: ["./messageDetails.component.css"]
})

export class messageDetailsComponent{

   public question : Question;
   public option1 : Options;
   public option2 : Options;
   public option3 : Options;
   public option4 : Options;
   public rid;
   public tname;
   public message;
   public qid;
   public m;
   public mid;

   constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router, private route: ActivatedRoute,
    private firebaseService1: FirebaseService1
    ) {
        this.route.queryParams.subscribe(params => {
            this.rid = params["Rid"];
            this.m = params["Message"];
            this.mid = params["Mid"];
        })

        this.option1 = new Options();
            this.option1.name = "";
            this.option1.questionId ;
            this.option1.isAnswer = false;

            this.option2 = new Options();
            this.option2.name = "";
            this.option2.questionId;
            this.option2.isAnswer = false;

            this.option3 = new Options();
            this.option3.name = "";
            this.option3.questionId;
            this.option3.isAnswer = false;

            this.option4 = new Options();
            this.option4.name = "";
            this.option4.questionId ;
            this.option4.isAnswer = false;

        this.question = new Question();
            this.question.name= "";
            this.question.options = [this.option1, this.option2, this.option3, this.option4];
           

    }

    
    public request$: Observable<any>;
    public classrooms$: Observable<any>;


    ngOnInit(): void {
        this.request$ = this.firebaseService.getRequest(this.rid);
        this.request$.subscribe(val => {
            this.qid = val[0].id;
            this.question.name = val[0].Name;
            this.option1.name = JSON.parse(JSON.stringify(val[0].Option[0].name));
            this.option2.name = JSON.parse(JSON.stringify(val[0].Option[1].name));
            this.option3.name = JSON.parse(JSON.stringify(val[0].Option[2].name));
            this.option4.name = JSON.parse(JSON.stringify(val[0].Option[3].name));

            this.option1.isAnswer = val[0].Option[0].isAnswer;
            this.option2.isAnswer = val[0].Option[1].isAnswer;
            this.option3.isAnswer = val[0].Option[2].isAnswer;
            this.option4.isAnswer = val[0].Option[3].isAnswer;
            this.message = this.m;
         })
    }

    UpdateQuestion(){
        this.firebaseService1.fixedQuestionRequest(this.qid, this.question.name, this.question.options)

        this.routerExtensions.navigate(["message"]);
        this.firebaseService1.deleteMessage(this.mid);
        console.log("Question fixed");
    }


    public onChange1(){
    this.option1.isAnswer = !this.option1.isAnswer;
    }

    public onChange2(){
        this.option2.isAnswer = !this.option2.isAnswer;
        console.log(this.option2.isAnswer);
        }
    public onChange3(){
        this.option3.isAnswer = !this.option3.isAnswer;
            }
    public onChange4(){
        this.option4.isAnswer = !this.option4.isAnswer;
                }

    public submitQuestion(){

        if (BackendService.instructor == true){
        this.firebaseService.addQuestion(this.question.name,this.question.Tags, this.question.questionTypeId,
        this.question.options, this.question.UID).then((message:any) => {
      
            alert(message);
            console.log("Question created ");
            this.router.navigate(["message"]);
          }) }else{
            this.firebaseService.addQuestionRequest(this.question.name,this.question.Tags, this.question.questionTypeId,
                this.question.options, this.question.UID, BackendService.studentNum).then((message:any) => {
              
                    alert(message);
               
                    console.log("Question created ");
                    this.router.navigate(["message"]);
                  })
          }
        // console.log(this.option1.isAnswer);
        // console.log(this.option2.isAnswer);
        // console.log(this.option3.isAnswer);
        // console.log(this.option4.isAnswer);



    }

}