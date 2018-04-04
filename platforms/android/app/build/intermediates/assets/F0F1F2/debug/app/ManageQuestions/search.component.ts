import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options} from "../models";
import {Observable} from 'rxjs/Observable';
import {Tag} from '../Tags/tag.component';
import {FirebaseService} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService
        
        ) {   
        }
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

        public Cname = BackendService.Cname;
    public users$: Observable<any>;
    public classrooms$: Observable<any>;
    public tags$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.classrooms$ = <any>this.firebaseService.getMyClassList();
        this.users$ = <any>this.firebaseService.getMyUserList();
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

    createQuestion(tname: string, tid: string ){
        
        
    let navigationExtras: NavigationExtras = {
    queryParams: {
        "Tid": tid,
        "Tname": tname
    }
  };
  this.routerExtensions.navigate(["question"], navigationExtras);

    }

    navQuiz(tname: string, tid: string){
        
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "Tid": tid,
                "Tname": tname
            }
          };
          this.routerExtensions.navigate(["quiz"], navigationExtras);

    }
}
