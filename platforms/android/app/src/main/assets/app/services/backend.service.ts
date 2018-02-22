import { getString, setString } from "application-settings";
import { User, Classroom } from "../models";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable, NgZone} from "@angular/core";

//stores UID
const tokenKey = "token";
const Uid = "Uid";
const Uname = "name";
//stores class ID
const CID = "CID";
//stores class name
const Cname = "Cname";
//stores topic id
const TID = "TID";


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

  static get TID(): string{
    return getString("TID");
  }

  static get Cname(): string{
    return getString("Cname");
  }

  static get Uid(): string{
    return getString("Uid");
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

  static set TID(theTID: string){
    setString("TID", theTID);
  }

  static set Cname(theCname: string){
    setString("Cname", theCname);
  }

  static set Uid(theUid: string){
    setString("Uid", theUid);
  }
   
}
