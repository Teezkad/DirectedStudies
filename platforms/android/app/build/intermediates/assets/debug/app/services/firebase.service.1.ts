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



  getUserScore(uid: string, tid: string): Observable<any>{
    return new Observable((observer: any)=>{
      let path = 'Users/'+uid+'/MyScores';
      let onValueEvent = (snapshot: any) => {
        this.ngZone.run(() => {
              let result = (<any>Object);
          let results = this.scoreSnapshot(snapshot.value, tid);
          console.log("From firebaseservice user score is" +JSON.stringify(results))
           observer.next(results);
        });
      };
      firebase.addValueEventListener(onValueEvent, `/${path}`);
  }).share();      
  }

  scoreSnapshot(data: any, tid:string) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);

        if(tid == result.TID){
          this._allItems.push(result);
        }
      }

      this.publishUpdates();
    }
    return this._allItems;
  }

  getTopicQuestions(tid: string){
    return new Observable((observer: any) => {
      let path = 'Questions/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.questionSnapshots(snapshot.value, tid);
            console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share(); 

  }

  questionSnapshots(data: any, tid: string) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(tid === result.TopicID){
          this._allItems.push(result);
        }        
      }
      // this.publishUpdates();
    }
    return this._allItems;

  }

  updateQuestionRequest(question: Question){
    return firebase.push(
      "/Requests/"+question.id+"/",
    {"Fixed": true
  })
    .then(
      function(result:any){
        return 'Question Uploaded';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
  }
 
  delete(classroom: Classroom) {
    return firebase.remove("/Classroom/"+classroom.id+"")
      .catch(this.handleErrors);
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

  publishUpdates() {
    // here, we sort must emit a *new* value (immutability!)
    this._items.sort(function(a, b){
        if(a.Date < b.Date) return -1;
        if(a.Date > b.Date) return 1;
      return 0;
    })
    this.items.next([...this._items]);
  }


  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}