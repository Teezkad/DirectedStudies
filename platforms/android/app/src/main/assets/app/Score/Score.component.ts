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
import { ActivatedRoute} from "@angular/router";
import * as moment from 'moment';


let now = moment().format('LLLL');


@Component({
    selector: "Score",
    moduleId: module.id,
    templateUrl: "./Score.component.xml"
})
export class ScoreComponent implements OnInit {
    currentUser = BackendService.token;
    Cname = BackendService.Cname;
   
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public score$: Observable<any>;
    public graph$: Observable<any>;
    public uid;
    public tid;
    public fname;
    public lname;
    public tname;

    private _sideDrawerTransition: DrawerTransitionBase;
    public creatorId = BackendService.instructor;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService, private route: ActivatedRoute) 
        {
            this.route.queryParams.subscribe(params => {
                this.uid = params["uid"];
                this.tname = params["name"]; 
                this.fname = params["fname"];
                this.lname = params["lname"];
                this.tid = params["tid"];
            })    
        }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.score$ = <any>this.firebaseService.getUserScore(this.uid, this.tid);
        // this.users$ = <any>this.firebaseService.getRegisteredUsers(BackendService.CID);
        this.score$.subscribe(val => {
            this.graph$ = val;
            var dated = JSON.stringify(val[0].Date);
            var timestamp = moment(parseInt(dated));

            for(var i = 0; i< val.length; i++){
                var a = new Date(JSON.parse(JSON.stringify(this.graph$[i].Date))); 
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ; 
                console.log("Date is "+ time + " Timestamp is "+ this.graph$[i].Date );
                this.graph$[i].Datetime = time;
            }
        })
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
 
}
