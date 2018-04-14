import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {User, Classroom, Options} from "../models";
import {Tag} from '../Tags/tag.component';
import {Observable} from 'rxjs/Observable';
import {FirebaseService, FirebaseService1} from '../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { firestore } from "nativescript-plugin-firebase";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import {ActivatedRoute, NavigationExtras} from "@angular/router";



@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    currentUser = BackendService.token;
    person = firebase.getCurrentUser();
    human = JSON.stringify(this.person);

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private backendService: BackendService,
        private firebaseService1: FirebaseService1
        
        ) {   
        } 

    public users$: Observable<any>;
    public classrooms$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public myClass;
    public allClass;
    public allClass1;
    public len;
    public leng;
    public show = [];

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
        BackendService.TA == false;
        BackendService.instructor = false;
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.classrooms$ = <any>this.firebaseService.getAllClassList();
        this.myclassrooms$ = <any>this.firebaseService.getMyClassList();
        this.users$ = <any>this.firebaseService.getMyUserList(BackendService.token);
        this.users$.subscribe(val => {
            console.log(BackendService.Uid = JSON.parse( JSON.stringify(val[0].id)));
            BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName)) + " " + JSON.parse(JSON.stringify(val[0].LastName)) ;
            BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
        }); 
        console.log("My uid is"+ BackendService.Uid);
        console.log("Login successful");
       

        this.myclassrooms$.subscribe( my =>{
            this.len = my.length;
            this.myClass = my;
        })

        this.classrooms$.subscribe(clas => {
            this.allClass = clas;
            this.allClass1 = clas;
            this.leng = clas.length;
            this.showclasses();
        })



    }

    showclasses(){
        console.log("all classes size is  "+ this.leng);
        console.log("my class length is "+ this.len );
        if(this.myclassrooms$ == null){
            this.ngOnInit();
        }
        for (var i = 0; i< this.leng; i++){
            var all = JSON.parse(JSON.stringify(this.allClass1[i].ID));
            for (var j = 0; j < this.len; j++){
                var my = JSON.parse(JSON.stringify(this.myClass[j].ID));
                if (all == my){
                    this.allClass[i].registered = true;
                } 
                }
        }
    }


    logOut() {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true } );
      }
      
      //delete classroo
      deleteCl(classroom: Classroom) {
          console.log("deleting");
        this.firebaseService1.delete(classroom)
          .catch(() => {
            alert("An error occurred while deleting an item from your list.");
          });
         
      } 

      navclass(){
           this.routerExtensions.navigate(["/classroom"]);
      }

      navques(){
        this.routerExtensions.navigate(["/search"]);
   }

    inClass(classroom: Classroom, id: string, Cname: string, Prof: string, Year: string, uid: string, ID: number){
         //update the classroom node to include users who registered
          this.firebaseService.registerClassroom(classroom, BackendService.Uid, BackendService.Uname, BackendService.studentNum)
      .then((message:any) => {
      
        alert(message);

   
        console.log("Classroom successfully registered");
      });

      this.firebaseService.userRegister(id, Cname, Prof, Year, uid, ID);

      this.ngOnInit();
    }
      //to store all available data for each user, use backend service to store the value of each attrinute 
      //for every users
      

      //this is to turn off the delete button 
      navTag(){
        this.routerExtensions.navigate(["/tag"]);
    }

    activateClass(id: string, name: string, uid: string, TA = [])
    {
        BackendService.CID = id;
        BackendService.Cname = name;
        console.log(id + " is now active class ID");
        console.log(name + " is now active class");
        alert(name + " is now active class");
        if(uid == BackendService.token){
            BackendService.instructor = true;
        
            let navigationExtras: NavigationExtras = 
            {
            queryParams: {
                "uid": uid,
                        }
            }
          this.routerExtensions.navigate(["browse"], navigationExtras);
    }else{
        this.routerExtensions.navigate(["/search"]);

    }

    
if(TA != null){
    for(var i =0; i < TA.length; i++){
        if (BackendService.token == JSON.stringify(TA[i].UID)){
            BackendService.TA == true;
        }
    }
}

 
        }




   delete(tag: Tag) {
    this.firebaseService1.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  } 
      

}
