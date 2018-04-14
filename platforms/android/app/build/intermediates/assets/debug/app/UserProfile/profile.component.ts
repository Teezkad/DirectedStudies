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
    selector: "profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class profileComponent implements OnInit {
    currentUser = BackendService.token;
    Cname = BackendService.Cname;
   
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public messages$: Observable<any>;
    public tags$: Observable<any>;
    public myclassrooms$: Observable<any>;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute,
        private firebaseService1: FirebaseService1
        ) {
            
        }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.myclassrooms$ = <any>this.firebaseService.getMyClassList();
        this.tags$ = <any>this.firebaseService.getMyTagList();
    }

}