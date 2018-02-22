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





@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    currentUser = BackendService.token;
    person = firebase.getCurrentUser();
    human = JSON.stringify(this.person);

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private backendService: BackendService
        
        ) {   
        }

    public users$: Observable<any>;
    public classrooms$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public length: number;
    public myclass;
    public exist = false;

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.classrooms$ = <any>this.firebaseService.getAllClassList();
        this.myclassrooms$ = <any>this.firebaseService.getMyClassList();
        // this.users$ = <any>this.firebaseService.getMyUserList();
        this.users$ = <any>this.firebaseService.getMyUserList();
        this.users$.subscribe(val => {
            console.log(BackendService.Uid = JSON.parse( JSON.stringify(val[0].id)));
            this.length = val.length;
        }
        ); 
        console.log("My uid is"+ BackendService.Uid);

    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    logOut() {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true } );
      }
      
      //delete classroo
      deleteCl(classroom: Classroom) {
          console.log("deleting");
        this.firebaseService.delete(classroom)
          .catch(() => {
            alert("An error occurred while deleting an item from your list.");
          });
         
      } 

      navclass(){
           this.routerExtensions.navigate(["/classroom"]);
      }

    inClass(classroom: Classroom, id: string, Cname: string, Prof: string, Year: string){

     
        this.myclassrooms$.subscribe(cl => {
            this.length = cl.length;
          this.myclass = JSON.stringify(cl);
            console.log("my class" + this.myclass);
            for(var i; i<= this.length; i++){
                var clid = cl[i].id;
                if(clid === id){
                    alert("You are already registered in this class");
                }else{
                    this.signup(classroom, id, Cname, Prof, Year);
                }
            }
        });
         //update the classroom node to include users who registered
     
    
    }

    signup(classroom: Classroom, id: string, Cname: string, Prof: string, Year: string){
        this.firebaseService.registerClassroom(classroom)
        .then((message:any) => {
        
          alert(message);
  
          //update the user's node to include a list of classes
          this.firebaseService.userRegister(id, Cname, Prof, Year)
     
          console.log("Classroom successfully registered");
        }) 
    }
      //to store all available data for each user, use backend service to store the value of each attrinute 
      //for every users
      

      //this is to turn off the delete button 

      navTag(){
        this.routerExtensions.navigate(["/tag"]);
    }

    activateClass(id: string, name: string){
        BackendService.CID = id;
        BackendService.Cname = name;
        console.log(name + " is now active class");
        alert(name + " is now active class");
    }
   delete(tag: Tag) {
    this.firebaseService.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  } 
      

}
