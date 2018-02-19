import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options} from "../models";
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
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.quiz$ = <any>this.firebaseService.getTopicQuestions(this.tid);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
