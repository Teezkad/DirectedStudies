import { getString, setString } from "application-settings";
import { User, Classroom } from "../models";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable, NgZone} from "@angular/core";


const tokenKey = "token";
const Uname = "name";
const CID = "CID";

@Injectable()
export class BackendService {
  constructor(
    private ngZone: NgZone,
  ){}
  items: BehaviorSubject<Array<Classroom>> = new BehaviorSubject([]);
  
  private _allItems: Array<Classroom> = [];
  
  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static get Uname(): string {
    return getString("name");
  }

  static get CID(): string{
    return getString("CID");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

  static set Uname(theName: string){
    setString("name", theName )
  }

  static set CID(theCID: string){
    setString("CID", theCID);
  }

   //display all users
   getcurrentUserList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Users/'+ BackendService.token+ "";
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                //     let result = (<any>Object).assign({id: id}, data[id]);

            let results = this.userSnapshot(snapshot.value);
            console.log( "From Backendservice"+ JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  userSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
          this._allItems.push(result);

              
      }
      // this.publishUpdates();
    }
    return this._allItems;

  }
}
