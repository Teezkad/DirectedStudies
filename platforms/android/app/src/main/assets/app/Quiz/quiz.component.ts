import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Tag} from '../Tags/tag.component';
import {Observable} from 'rxjs/Observable';
import {FirebaseService, FirebaseService1} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { firestore } from "nativescript-plugin-firebase";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import {ActivatedRoute} from "@angular/router";




@Component({
    selector: "quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html",
    styleUrls: ['./quiz.component.css'] 
})
export class QuizComponent implements OnInit {

    public users$: Observable<any>;
    public quiz$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public tid; 
    public tname;
    public questions;
    public options = [];
    public question;
    public option = [];
    public no = 0;
    public length;
    public selectedIndex;
    public score = 0;
    public mark = [];
    public topic;
    public leng;
 
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private backendService: BackendService,
         private route: ActivatedRoute, private firebaseService1: FirebaseService1
        
        ) {   
            this.route.queryParams.subscribe(params => {
                this.tid = params["Tid"];
                this.tname = params["Tname"];
            })
        }

     

    ngOnInit(): void {
        this.quiz$ = <any>this.firebaseService1.getTopicQuestions(this.tid);

        this.quiz$.subscribe(val => 
            {
                var len = val.length;
                this.leng = val.length;
                if(len != 0){
                this.topic= JSON.parse(JSON.stringify(val[0].Tags));
                }
            // console.log("Question is "+ this.topic);
        }
        );
        this.getquestion(this.no);

        BackendService.TID = this.tid;
    }

    getquestion(num: number): void{
        this.quiz$.subscribe(val => {
            this.length = val.length;
            if(this.length == 0){
                this.question = "There a no questions for this topic";
            }
            this.questions = val;
            // this.options = JSON.parse(JSON.stringify(val));
            this.question = JSON.parse(JSON.stringify(this.questions[num].Name));
            this.option = JSON.parse(JSON.stringify(this.questions[num].Option));
            // console.log("Questions are "+ JSON.stringify(this.questions));
            // console.log("Question is "+ this.question);
            // console.log("Option is "+ this.option);
            // console.log("length is "+ this.length);


        }
        );
       
    }

    nextQuestion(){
        this.no ++;
            // this.options = JSON.parse(JSON.stringify(val));
            this.question = JSON.parse(JSON.stringify(this.questions[this.no].Name));
            this.option = JSON.parse(JSON.stringify(this.questions[this.no].Option));
            console.log("Questions are "+ JSON.stringify(this.questions));
            console.log("Question is "+ this.question);
            console.log("Option is "+ this.option);
            console.log("length is "+ this.length);
            this.selectedIndex = null;

        
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
//to grade create an array and store true or false for each index and count the number of true values for score
    selectMenu(i) {
        this.selectedIndex=i;
        this.mark[this.no] = this.option[i].isAnswer;
        console.log("answer is "+ this.mark[this.no]);
        console.log("answer after is "+ this.mark[this.no+1]);


        
    }

    submit(){
for(var i  = 0; i <this.mark.length; i++)
{
    if(this.mark[i] == true){
        this.score++;
                            }                         
}

this.score = (this.score/this.length * 100);
        alert("Your score is " + this.score + "%");
        this.routerExtensions.navigate(["search"]);

        this.firebaseService.addUserScore(BackendService.CID, BackendService.TID, this.topic, this.score);
    }

    
}
