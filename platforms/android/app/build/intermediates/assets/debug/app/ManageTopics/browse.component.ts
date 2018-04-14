import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Observable} from 'rxjs/Observable';
import {Tag} from '../Tags/tag.component';
import { ModalComponent } from "../modal";
import {FirebaseService, FirebaseService1} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
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
    public questions$: Observable<any>;
    public requests$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;
    public i = 'a';
    public message = "";
    public TA = BackendService.TA;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute,
        private firebaseService1: FirebaseService1, private modal: ModalComponent,
         private vcRef: ViewContainerRef

        
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
        this.questions$ = <any>this.firebaseService.getClassroomQuestion(); 
       
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
        this.firebaseService1.deleteQuestionRequest(question);
    }

    activateTag(id: string, name: string){
        BackendService.TID = id;
        console.log(name + " is Activated");
        alert(name + " is Activated");
    }
   delete(tag: Tag) {
    this.firebaseService1.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }

  viewQuestions(tid: string, topicname: string){
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "tid": tid,
            "topicname": topicname
        }
      };
      console.log("TIS sent is "+ tid);
      this.routerExtensions.navigate(["topicQuestion"], navigationExtras);
  }
  
  
  viewUser(uid: string, firstname: string, lastname: string){
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "uid": uid,
            "fname": firstname,
            "lname": lastname
        }
      };
      this.routerExtensions.navigate(["topicScore"], navigationExtras);
  }

  upgradeUser(firstname: string, lastname: string, userId: string, UID: string){

    this.firebaseService.registerTA(BackendService.CID, firstname, lastname,UID, userId).then((message:any) => {
        alert(message);
        console.log("TA created ");
      });
  }

  
  sendMessage(question: string, Topic: string, by: string, UID: string){
     // this.firebaseService.messageFromSender(question, Topic, by, UID, message);
    //   this.firebaseService.messageToReceiver(question, Topic, by, UID, this.message);
    console.log("Message is "+ this.message);
  }

  onTap() {
    alert("clicked an item");
}

openModal() {
    this.modal.show();
}

closeModal() {
    this.modal.hide();
}

onOpenModal() {
    console.log("opened modal");
}

onCloseModal() {
    console.log("closed modal");
}

  downgradeUser(firstname: string, lastname: string, userId: string, id: string){
    this.firebaseService.unregisterTA(BackendService.CID, firstname, lastname, userId, id).then((message:any) => {
        alert(message);
        console.log("TA downgraded ");
      });
  }
  removeUser(uid: string){
      this.firebaseService1.deleteRegisteredUsers(uid) .catch(() => {
        alert("An error occurred while deleting user from this class.");
      });
  }
}
