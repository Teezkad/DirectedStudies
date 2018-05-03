import { Component, Input, OnInit } from "@angular/core";

import {User} from '../../models/User.model';
import {FirebaseService} from '../../services';
import firebase = require("nativescript-plugin-firebase");
import { BackendService } from "../../services/backend.service";
import {Observable} from 'rxjs/Observable';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';



/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"]
})
export class MyDrawerComponent implements OnInit {
    public Cname = BackendService.Cname;
    public instructor = BackendService.instructor;
    public fname = BackendService.Uname;
    public TA = BackendService.TA;
    public msg;
    public messages$: Observable<any>;


    /* ***********************************************************
    * The "selectedPage" is a component input property.
    * It is used to pass the current page title from the containing page component.
    * You can check how it is used in the "isPageSelected" function below.
    *************************************************************/
    @Input() selectedPage: string;

    ngOnInit(): void {
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
       this.messages$ = <any>this.firebaseService.getUserMessages();
       this.messages$.subscribe(msgs => {
           var len = msgs.length;
           var count = 0;
           this.msg = 0;
           if(msgs != null){
           for(var i =0; i < len ; i++){
               if(msgs[i].Seen == false){
                   count ++;
               }
           }
           this.msg = count;
        }
       })
    }

    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }

    user: User;

    constructor(private routerExtensions: RouterExtensions,
        private firebaseService: FirebaseService
        
        ) {this.user = new User();
            this.user.email = BackendService.Uname;
            this.user.password = "";}


    logOut() {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true } );
      }


}
