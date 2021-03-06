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
import { SearchBar } from "ui/search-bar";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import { PullToRefresh } from "nativescript-pulltorefresh";



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

    public classrooms$: Observable<any>;
    public myclassrooms$: Observable<any>;
    public myClass;
    public TAs$: Observable <any>;
    public allClass;
    public allClass1;
    public allClass2;
    public len;
    public leng;
    public exists;

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
<<<<<<< HEAD
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
       
=======
   async ngOnInit(){
        BackendService.TA = false;
        BackendService.instructor = false;
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.classrooms$ = await <any>this.firebaseService.getAllClassList();
       
        if(this.classrooms$ == null){ 


        console.log("Returning null observables for all classrooms");
    }else if (this.myclassrooms$ == null){
        console.log("Null observables for my classes");
    }
    else{
        this.myclassrooms$ = await <any>this.firebaseService.getMyClassList();
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6

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
<<<<<<< HEAD

       var user = firebase.fetchProvidersForEmail("kadiri@gmail.com");
       console.log("Firebase return for real user is "+ JSON.stringify(user));
       var user2 = firebase.fetchProvidersForEmail("BHILGYUIK@gmail.com");
       console.log("Firebase return for fake user is "+ JSON.stringify(user2))
=======
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
    }

    public refreshMe(args: any) {
        console.log("refreshing");
        setTimeout(() => this.ngOnInit(), 2000);
    }


    showclasses(){
        console.log("all classes size is  "+ this.leng);
        console.log("my class length is "+ this.len );
        if(this.myclassrooms$ == null){
            this.ngOnInit();
        }
        for (var i = 0; i< this.leng; i++){
            this.allClass1 = this.allClass1;
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
<<<<<<< HEAD

      this.firebaseService.userRegister(id, Cname, Prof, Year, uid, ID);
      this.ngOnInit();
=======
      this.ngOnInit(); 
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
    }


      //to store all available data for each user, use backend service to store the value of each attrinute 
      //for every users
      //this is to turn off the delete button 
      navTag(){
        this.routerExtensions.navigate(["/tag"]);
    }


    validateClass(id: string, name: string, uid: string){
        var exists = false;
        for (var a = 0; a<this.leng; a++){
            if(id == this.allClass[a].id){
                var exists = true;
                console.log("Class exists");
            }
        }
        return exists;
    }

    activateClass(id: string, name: string, uid: string)
    {
      if( this.validateClass(id,name,uid)){ 
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
        this.TAs$ = <any>this.firebaseService1.getTAList();   
        this.TAs$.subscribe(vals => {
            if(vals[0].TA !=null){
            console.log(BackendService.TA = JSON.parse( JSON.stringify(vals[0].TA)));
            }
        }); 
        this.routerExtensions.navigate(["/search"]);

    }
      }else{
          alert("Classroom does not exist");
      }
        }
<<<<<<< HEAD


   delete(tag: Tag) {
    this.firebaseService1.deleteTag(tag)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  } 

  deleteClass(room: Classroom){
this.firebaseService1.deleteMyclass(room);
  }
=======
 
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
      

  public onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    let searchValue = searchBar.text.toLowerCase();
    console.log ("Search value is" + searchValue);

    if (searchValue !== "") {
        this.allClass2 = new Observable<any>();

        var count =0;
        for (let i = 0; i < this.leng; i++) {
            
            if (JSON.stringify(this.allClass1[i].Name).toLowerCase().indexOf(searchValue) !== -1) {
                console.log("search result is " + JSON.stringify(this.allClass1[i].Name));
               // this.allClass2.push(this.allClass1[i]);
                this.allClass2[count] = this.allClass1[i];
                console.log("All results are "+ JSON.stringify(this.allClass2[count]));
                count++;

            }
        }
    }
}


public onClear(args) {
    let searchBar = <SearchBar>args.object;
    searchBar.text = "";
    searchBar.hint = "Search Available classes";

    this.allClass2 = new Observable<any>();
    var i =0;
    this.allClass1.forEach(item => {
        this.allClass2[i] = item;
        i++;
    });
}
//search funtion is buggy :/

}
