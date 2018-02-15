import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options} from "../models";
import {Observable} from 'rxjs/Observable';
import {FirebaseService} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { firestore } from "nativescript-plugin-firebase";




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
        private firebaseService: FirebaseService
        
        ) {   
        }

    public users$: Observable<any>;
    public classrooms$: Observable<any>;
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
        this.classrooms$ = <any>this.firebaseService.getMyClassList();
        this.users$ = <any>this.firebaseService.getMyUserList();
        var persona = firebase.getCurrentUser();
        var humana = JSON.stringify(persona);
        var name = JSON.parse(humana);
        var email = JSON.stringify(name.__zone_symbol__value.email);
    //     console.log("cureent user is "+ JSON.stringify(persona));
    //    this.users$.subscribe(val =>console.log("emails of current user is "+ val)); 
        
        // console.log(JSON.stringify(name.__zone_symbol__value));


// var ref = firebase.firestore.collection("Users").where("Email", "==", email).get();

// console.log("Firebase user = "+ JSON.stringify(ref));

        var ref = firebase.getValue("/Users/Teezkad");
        console.log("value of users "+JSON.stringify(ref));
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

   
    create: Classroom;
 

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

    inClass(classroom: Classroom, uid: string){
         //update the classroom node to include users who registered
          this.firebaseService.registerClassroom(classroom, uid)
      .then((message:any) => {
      
        alert(message);

        //update the user's node to include a list of classes
        this.firebaseService.userRegister(classroom)
   
        console.log("Classroom successfully registered");
      }) 
    }
      //to store all available data for each user, use backend service to store the value of each attrinute 
      //for every users
      

      //this is to turn off the delete button 
      

}
