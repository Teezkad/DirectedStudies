import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options, Question} from "../models";
import {Observable} from 'rxjs/Observable';
import {Tag} from '../Tags/tag.component';
import {FirebaseService} from '../services';
import {FirebaseService1} from "../services/firebase.service.1"
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import * as dialogs from "ui/dialogs";
import { SearchBar } from "ui/search-bar";
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
    public TAs$: Observable <any>;
    public questions$: Observable<any>;
    public requests$: Observable<any>;
    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;
    public i = 'a';
    public TA = BackendService.TA;
    public message = "";
    public quiz$: Observable<any>;




    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService,      private firebaseService1: FirebaseService1,
        private route: ActivatedRoute
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
        if(BackendService.instructor != true){
        this.TAs$ = <any>this.firebaseService1.getTAList();     
        this.TAs$.subscribe(vals => {
            if(vals[0].TA !=null){
            console.log(BackendService.TA = JSON.parse( JSON.stringify(vals[0].TA)));
            }
        }); 
    }


        
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
    this.deleteQuestions(tag);

    this.firebaseService1.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }

  deleteQuestions(tag:Tag){
    this.quiz$ = <any>this.firebaseService1.getTopicQuestions(tag.id);
    this.quiz$.subscribe(questions =>{
        var question = questions;
        for(var q = 0; q < questions.length; q++){
            this.firebaseService1.deleteQuestion(question[q]);
        }
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

  downgradeUser(firstname: string, lastname: string, userId: string, id: string){
      this.firebaseService.setTAFalse(userId, BackendService.CID).then((message:any) => {
        alert(message);
        this.firebaseService.unregisterTA(BackendService.CID, firstname, lastname, userId, id).then((message:any) => {
          });
        console.log("TA downgraded ");
      });
      

  }

  removeUser(uid: string){
      this.firebaseService1.deleteRegisteredUsers(uid) .catch(() => {
        alert("An error occurred while deleting user from this class.");
      });
  }

  promptMessage(questionId: string, topic: string, by: string, UID: string){
     dialogs.prompt("Enter Message", this.message).then( r=> { 

     if(r.text == null || r.text == ""){
         console.log("No Message");
     }else{
         this.firebaseService.messageToReceiver(questionId, topic, by, UID, r.text);
        //  this.firebaseService.messageFromSender(questionId, topic, by, UID, r.text);
         this.firebaseService1.updateQuestionRequest(questionId);

         console.log("Message is "+ r.text);
         this.ngOnInit();
     }

    })
  }
  
}
