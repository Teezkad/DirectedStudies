import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Observable} from 'rxjs/Observable';
import {Tag} from '../Tags/tag.component';
import {FirebaseService} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
    selector: "topicScore",
    moduleId: module.id,
    templateUrl: "./topicScore.component.html"
})

export class topicScoreComponent implements OnInit {
    currentUser = BackendService.token;
    Cname = BackendService.Cname;
   
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public uid;
    public tid;
    public fname;
    public lname;
    public tags$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute

        
        ) {
            
            this.route.queryParams.subscribe(params => {
                this.uid = params["uid"];
                this.fname = params["fname"];
                this.lname = params["lname"];
            })   
        }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.tags$ = <any>this.firebaseService.getMyTagList();
       
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    viewScores(tid: string, name:string){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "tid": tid,
                "name": name,
                "uid": this.uid,
                "fname": this.fname,
                "lname": this.lname
            }
          };
          this.routerExtensions.navigate(["Score"], navigationExtras);
    }

}