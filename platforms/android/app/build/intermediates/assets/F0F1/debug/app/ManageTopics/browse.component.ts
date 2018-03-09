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
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    currentUser = BackendService.token;
    Cname = BackendService.Cname;
   
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public users$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public tags$: Observable<any>;
    public requests$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute

        
        ) {
            
        }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.myclassrooms$ = <any>this.firebaseService.getCreatedClasses();
        this.users$ = <any>this.firebaseService.getRegisteredUsers(BackendService.CID);
        this.tags$ = <any>this.firebaseService.getMyTagList();
        this.requests$ = <any>this.firebaseService.getQuestionRequests();
        

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

    navTag(){
        this.routerExtensions.navigate(["/tag"]);
    }

    addQuestion(question: Question, name: string, Tag:string, questionTypeId: string, options: Options[], UID: string){
        this.firebaseService.addQuestion(name, Tag, questionTypeId, options, UID).then((message:any) => {
                alert(message);
                console.log("Question created ");
                this.routerExtensions.navigate(["browse"]);
              });
        this.firebaseService.deleteQuestionRequest(question);
    }

    activateTag(id: string, name: string){
        BackendService.TID = id;
        console.log(name + " is Activated");
        alert(name + " is Activated");
    }
   delete(tag: Tag) {
    this.firebaseService.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }
  
  viewUser(uid: string, firstname: string, lastname: string){
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "uid": uid,
            "fname": firstname,
            "lname": lastname
        }
      };
      this.routerExtensions.navigate(["UserTopic"], navigationExtras);
  }
}