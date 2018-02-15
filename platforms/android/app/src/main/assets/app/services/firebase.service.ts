import {Injectable, NgZone} from "@angular/core";
import {User, Classroom, Options} from "../models";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Tag } from '../tags/tag.component';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {
  constructor(
    private ngZone: NgZone,
  ){}
  items: BehaviorSubject<Array<Classroom>> = new BehaviorSubject([]);
  
  private _allItems: Array<Classroom> = [];
  
  //registers user's email anmd password only, this isstored in firebase authentications
  register(user: User, email: string, firstName: string, lastName: string, studentNum: string, instructor: boolean, professor: boolean) {
    var uid;
    return firebase.createUser({
      email: user.email, 
      password: user.password,
    }).then(result => {
            console.log("User key is"+ result.key);
           this.addUser( result.key, email, firstName, lastName, studentNum, instructor, professor);
          },
          function (errorMessage:any) {
            alert(errorMessage);
          }
      )
  }

  //login in user with email and password
  login(user: User) {
    return firebase.login({
      type: firebase.LoginType.PASSWORD,
      email: user.email,
      password: user.password
    }).then((result: any) => {
          BackendService.token = result.uid;
          BackendService.Uname = result.email;
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        alert(errorMessage);
      });
  }

  //logs out user
  logout(){
    BackendService.token = "";
    BackendService.Uname= "";
        firebase.logout();    
  }
  
  //user can reset their password
  resetPassword(email) {
    firebase.resetPassword({
    email: email
    }).then((result: any) => {
          alert(JSON.stringify(result));
        },
        function (errorMessage:any) {
          alert(errorMessage);
        }
    ).catch(this.handleErrors);

  }

  //this is the main function to add other attributes of a user
  addUser( UID: string, email: string, firstName: string, lastName: string, studentNum: string, instructor: boolean, professor: boolean) {   
 
  return firebase.push(
        "/Users/" + UID + "",
        { "Email": email, "First Name": firstName, "Last Name": lastName, "studentNum": studentNum, "Instructor": instructor, "Professor": professor}
      ).then(
        function (result:any) {
          return 'User added';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        }); 
  }

  //adds classroom
  addClassroom(ID: number, name: string, professor: string, institution: string, members: User[], classCode: string, year: string, UID: string){
    return firebase.push(
      "/Classroom",
      {"ID":ID,"Name": name, "Professor": professor, "Institution": institution, "Members": members, "Code": classCode, "Year": year,
    "UID": BackendService.token}
    ).then(
      function(result:any){
        return 'Classroom Created';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
  }
  //students can register in classes
  registerClassroom(classroom: Classroom, user: string){
    return firebase.push("/Classroom/"+classroom.id+"/Members",{
  
      "UID": BackendService.token
    }).then( 
      function (result:any) {
        return 'You have successfully Registered for this class!';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  
     
  }

  //updates classes in users
  userRegister(classroom: Classroom){
   
    return firebase.push("/Users/"+ BackendService.token +"", {
      ClassName: classroom.name,
      Professor: classroom.professor,
      Year: classroom.year
    }) .then(
      function (result:any) {
        return 'You have successfully added this class to your classes';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  

  }

//add question
  addQuestion(name: string, tags: string, TID: string, options: Options[], UID: string){
    return firebase.push(
      "/Questions",
    {"Name": name, "Tags": tags, "Option": options,"UID":BackendService.token, "TopicID": TID })
    .then(
      function(result:any){
        return 'Classroom Created';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
  }

  //add tags
  addTag(name: string, cid: string){
    return firebase.push(
      "/Tags",
      { "Name": name, "ClassID": cid}
    )
  }

  //add topic attribute to classes
  updateClassTopic(name: string, cid: string){
    return firebase.push("/Classroom/" + cid+ "Topics", {
      "Topic": name
    }).then( 
      function (result:any) {
        return 'You have successfully Registered for this class!';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  
     
  }

//display all classes
  getMyClassList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Classroom/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.handleSnapshot(snapshot.value);
            console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  getCreatedClasses(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Classroom/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.classSnapshots(snapshot.value);
            console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  //display all users
  getMyUserList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Users';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                //     let result = (<any>Object).assign({id: id}, data[id]);
                let result = (<any>Object);
            let results = this.handleSnapshot(snapshot.value);
            console.log("From firebaseservice users" + JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

    //display all users
    getMyTagList(): Observable<any> {
      return new Observable((observer: any) => {
        let path = 'Tags';
        
          let onValueEvent = (snapshot: any) => {
            this.ngZone.run(() => {
                  //     let result = (<any>Object).assign({id: id}, data[id]);
  
              let results = this.tagSnapshots(snapshot.value);
              console.log("From firebaseservice"  + JSON.stringify(results))
               observer.next(results);
            });
          };
          firebase.addValueEventListener(onValueEvent, `/${path}`);
      }).share();              
    }

    tagSnapshots(data: any) {
      //empty array, then refill and filter
      this._allItems = [];
      if (data) {
        for (let id in data) {        
          let result = (<any>Object).assign({id: id}, data[id]);
          if(BackendService.CID === result.ClassID){
            this._allItems.push(result);
          }        
        }
        // this.publishUpdates();
      }
      return this._allItems;

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

  handleSnapshot(data: any) {
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

      // this._allItems = [];

      // if (data) {
      //     for (const id in data) {
      //         if (data.hasOwnProperty(id)) {
      //             this._allItems.push(new Classroom(data[id]));
      //         }
      //     }
      // }

      // return this._allItems;
  }

  //display current users
  getcurrentUserList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Users';
      
        let onValueEvent = (snapshot: any) => { 
          this.ngZone.run(() => {
                //     let result = (<any>Object).assign({id: id}, data[id]);
                let result = (<any>Object);
            let results = this.handleSnapshot(snapshot.value);
            console.log( "From Backendservice"+ JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  userSnapshot(data: any) {
    //empty array, then fill with current user
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

  delete(classroom: Classroom) {
    return firebase.remove("/Classrooms/"+classroom.id+"")
      .catch(this.handleErrors);
  } 

  deleteTag(tag: Tag) {
    return firebase.remove("/Tags/"+tag.id+"")
      .catch(this.handleErrors);
  } 


  //  publishUpdates() {
  //   // here, we sort must emit a *new* value (immutability!)
  //   this._allItems.sort(function(a, b){
  //       if(a.date < b.date) return -1;
  //       if(a.date > b.date) return 1;
  //     return 0;
  //   })
  //   this.items.next([...this._allItems]);
  // }

  /*
  getMyClassroom(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
    }).share();
  }*/

  /*
  getMyMessage(): Observable<any>{
    return new Observable((observer:any) => {
      firebase.getRemoteConfig({
      developerMode: false, // play with this boolean to get more frequent updates during development
      cacheExpirationSeconds: 300, // 10 minutes, default is 12 hours.. set to a lower value during dev
      properties: [{
      key: "message",
      default: "Happy Holidays!"
    }]
  }).then(
        function (result) {
          console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
          for (let entry in result.properties) 
            { 
              observer.next(result.properties[entry]);
            }
        }
    );
  }).share();
  }*/

    
/*
  handleSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(BackendService.token === result.UID){
          this._allItems.push(result);
        }        
      }
      this.publishUpdates();
    }
    return this._allItems;
  }

  
   publishUpdates() {
    // here, we sort must emit a *new* value (immutability!)
    this._allItems.sort(function(a, b){
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
      return 0;
    })
    this.items.next([...this._allItems]);
  }

  add(Classroom: string) {   
    return firebase.push(
        "/Classrooms",
        { "name": Classroom, "UID": BackendService.token, "date": 0 - Date.now(), "imagepath": ""}
      ).then(
        function (result:any) {
          return 'Classroom added to your wishlist!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        }); 
  }

  editClassroom(id:string, description: string, imagepath: string){
    this.publishUpdates();
    return firebase.update("/Classrooms/"+id+"",{
        description: description, 
        imagepath: imagepath})
      .then(
        function (result:any) {
          return 'You have successfully edited this Classroom!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }
  editDescription(id:string, description: string){
    this.publishUpdates();
    return firebase.update("/Classrooms/"+id+"",{
        description: description})
      .then(
        function (result:any) {
          return 'You have successfully edited the description!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  
  uploadFile(localPath: string, file?: any): Promise<any> {
      let filename = this.utils.getFilename(localPath);
      let remotePath = `${filename}`;   
      return firebase.uploadFile({
        remoteFullPath: remotePath,
        localFullPath: localPath,
        onProgress: function(status) {
            console.log("Uploaded fraction: " + status.fractionCompleted);
            console.log("Percentage complete: " + status.percentageCompleted);
        }
      });
  }

  getDownloadUrl(remoteFilePath: string): Promise<any> {
      return firebase.getDownloadUrl({
        remoteFullPath: remoteFilePath})
      .then(
        function (url:string) {
          return url;
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });
  }*/

  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}