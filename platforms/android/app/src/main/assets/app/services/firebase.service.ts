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
    BackendService.Uid = "";
    BackendService.CID = "";
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
        "/Users",
        { "Email": email, "First Name": firstName, "Last Name": lastName, "studentNum": studentNum, "Instructor": instructor, "UID":UID}
      ).then(
        function (result:any) {
          return 'User added';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        }); 
  }

  //updates classes in users
  userRegister(id: string, Cname: string, Prof: string, Year: string, UID: string){
   
    return firebase.push("/Users/"+BackendService.Uid+"/MyClasses", {
      "ClassName": Cname,
      "CID": id,
      "Professor": Prof,
      "Year": Year,
      "UID": UID
    }) .then(
      function (result:any) {
        return 'You have successfully added this class to your classes';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  

  }

    //display all users
    getMyUserList(): Observable<any> {
      return new Observable((observer: any) => {
        let path = 'Users';
        
          let onValueEvent = (snapshot: any) => {
            this.ngZone.run(() => {
                  //     let result = (<any>Object).assign({id: id}, data[id]);
                  let result = (<any>Object);
              let results = this.userSnapshot(snapshot.value);
              console.log("From firebaseservice users" + JSON.stringify(results))
               observer.next(results);
            });
          };
          firebase.addValueEventListener(onValueEvent, `/${path}`);
      }).share();              
    }
  
  
    handleSnapshot(data: any) {
      //empty array, then refill and filter
      this._allItems = [];
      if (data) {
        for (let id in data) {        
          let result = (<any>Object).assign({id: id}, data[id]);
            this._allItems.push(result);
                
        }
      }
      return this._allItems;
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
          if(BackendService.token === result.UID){ 
            this._allItems.push(result);
          }
                
        }
        // this.publishUpdates();
      }
      return this._allItems;
  
    }

  //add tags
  addTag(name: string, cid: string){
    return firebase.push(
      "/Tags",
      { "Name": name, "ClassID": cid}
    ).then(
      function(result:any){
        return 'Topic '+ name+' successfully Created';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
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
    registerClassroom(classroom: Classroom){
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

//display all classes
  getAllClassList(): Observable<any> {
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

  //get all classes im registered in 
  getMyClassList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = "Users/"+ BackendService.Uid+"/MyClasses";
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.myClassSnapshot(snapshot.value);
            console.log("From firebaseservice my registered classes" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  //get all classes user has created
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

  myClassSnapshot(data: any) {
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

  //add question
  addQuestion(name: string, tags: string, TID: string, options: Options[], UID: string){
    return firebase.push(
      "/Questions",
    {"Name": name, "Tags": tags, "Option": options,"UID":BackendService.token, "TopicID": TID, "ClassID": BackendService.CID})
    .then(
      function(result:any){
        return 'Classroom Created';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
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

  delete(classroom: Classroom) {
    return firebase.remove("/Classroom/"+classroom.id+"")
      .catch(this.handleErrors);
  } 

  deleteTag(tag: Tag) {
    return firebase.remove("/Tags/"+tag.id+"")
      .catch(this.handleErrors);
  } 



  /*
  getMyClassroom(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
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
*/

  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}