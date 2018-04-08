import {Injectable, NgZone} from "@angular/core";
import {User, Classroom, Options, Question} from "../models";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Tag } from '../tags/tag.component';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService1 {
  constructor(
    private ngZone: NgZone,
  ){}
  items: BehaviorSubject<Array<Classroom>> = new BehaviorSubject([]);
  
  private _allItems: Array<Classroom> = [];
  private _items = [];


  
  //get all classes user has created
  getCreatedClasses(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Classroom/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.classSnapshots(snapshot.value);
            // console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  classSnapshots(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(BackendService.token === result.UID){
          this._allItems.push(result);
        }        
      }
      // this.publishUpdates();
    }
    return this._allItems;

  }
  
deleteQuestion(question: Question){
    return firebase.remove("/Questions/"+question.id+"")
    .catch(this.handleErrors);
  }

  deleteRegisteredUsers(uid: string){
    return firebase.remove("/Classroom/"+BackendService.CID+"/Members/"+uid)
    .catch(this.handleErrors);
  }

  deleteQuestionRequest(question: Question){
    return firebase.remove("/Requests/"+question.id+"").catch(this.handleErrors);
  }

  deleteTag(tag: Tag) {
    return firebase.remove("/Tags/"+tag.id+"")
      .catch(this.handleErrors);
  } 

  
  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }

}