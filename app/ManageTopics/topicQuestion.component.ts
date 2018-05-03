import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Observable} from 'rxjs/Observable';
import {Tag} from '../Tags/tag.component';
import {FirebaseService, FirebaseService1} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
    selector: "topicQuestion",
    moduleId: module.id,
    templateUrl: "./topicQuestion.component.html"
})
export class topicQuestionComponent implements OnInit {
    currentUser = BackendService.token;
    Cname = BackendService.Cname;
   
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public question$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public tags$: Observable<any>;
    public questions$: Observable<any>;
    public requests$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;
    public isTA = BackendService.TA;
    public tid;
    public topicname;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute,
        private firebaseService1: FirebaseService1
        ) {

            this.route.queryParams.subscribe(params => {
                this.tid = params["tid"];
                this.topicname = params["topicname"];
            })
            
        }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        console.log("Tid is "+ this.tid);
        this.question$ = <any>this.firebaseService1.getTopicQuestions(this.tid);       
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    deleteQuestion(question: Question){
        this.firebaseService1.deleteQuestion(question);
    }

    createQuestion(tname: string, tid: string ){
        
        
        let navigationExtras: NavigationExtras = {
        queryParams: {
            "Tid": tid,
            "Tname": tname
        }
      };
      this.routerExtensions.navigate(["question"], navigationExtras);
    
        }

}