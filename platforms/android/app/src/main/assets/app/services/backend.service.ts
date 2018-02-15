import { getString, setString } from "application-settings";
import { User, Classroom } from "../models";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable, NgZone} from "@angular/core";

//stores UID
const tokenKey = "token";

const Uname = "name";
//stores class ID
const CID = "CID";
//stores class name
const Cname = "Cname";

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

  static get Cname(): string{
    return getString("Cname");
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

  static set Cname(theCname: string){
    setString("Cname", theCname);
  }

   
}
