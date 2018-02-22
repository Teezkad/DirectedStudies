import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Tag} from '../Tags/tag.component';
import {Observable} from 'rxjs/Observable';
import {FirebaseService} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { firestore } from "nativescript-plugin-firebase";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import {ActivatedRoute} from "@angular/router";




@Component({
    selector: "quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html"
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
 
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private backendService: BackendService,
         private route: ActivatedRoute
        
        ) {   
            this.route.queryParams.subscribe(params => {
                this.tid = params["Tid"];
                this.tname = params["Tname"];
            })
        }

     

    ngOnInit(): void {
        this.quiz$ = <any>this.firebaseService.getTopicQuestions(this.tid);
        // this.quiz$.subscribe(val => {this.question = JSON.stringify(val);
        //     console.log("Question is "+ this.question);
        // }
        // );
        this.getquestion(this.no);
    }

    getquestion(num: number): void{
        this.quiz$.subscribe(val => {
            this.length = val.length;
            this.questions = val;
            // this.options = JSON.parse(JSON.stringify(val));
            this.question = JSON.parse(JSON.stringify(this.questions[num].Name));
            this.option = JSON.parse(JSON.stringify(this.questions[num].Option));
            console.log("Questions are "+ JSON.stringify(this.questions));
            console.log("Question is "+ this.question);
            console.log("Option is "+ this.option);
            console.log("length is "+ this.length);


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

    selectMenu(i) {
        this.selectedIndex=i;
        console.log(this.option[i].name);
        if(this.option[i].isAnswer == true){
            this.score++;
        }
    }

    submit(){
        alert("Your score is " + this.score + "/"+ this.length)
        this.routerExtensions.navigate(["search"]);
    }
}
