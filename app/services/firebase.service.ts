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
export class FirebaseService {
  constructor(
    private ngZone: NgZone,
  ){}
  items: BehaviorSubject<Array<Classroom>> = new BehaviorSubject([]);
  
  private _allItems: Array<Classroom> = [];
  private _items = [];
  
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
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        alert(errorMessage);
      });
  }

  //logs out user
  logout(){
    BackendService.token = "";
    BackendService.Uname= "";
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
        { "Email": email, "FirstName": firstName, "LastName": lastName, "studentNum": studentNum, "Instructor": instructor, "UID":UID}
      ).then(
        function (result:any) {
          return 'User added';
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
  
    getRegisteredUsers(ClassKey: string): Observable<any> {
      return new Observable((observer: any) => {
        let path = 'Classroom/'+BackendService.CID+'/Members';
        
          let onValueEvent = (snapshot: any) => { 
            this.ngZone.run(() => {
                  //     let result = (<any>Object).assign({id: id}, data[id]);
                  let result = (<any>Object);
              let results = this.handleSnapshot(snapshot.value);
              console.log( "Users in class"+ JSON.stringify(results))
               observer.next(results);
            });
          };
          firebase.addValueEventListener(onValueEvent, `/${path}`);
      }).share();              
    }

    //display current user
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
  addTag(name: string, cid: string, uid: string){
    return firebase.push(
      "/Tags",
      { "Name": name, "ClassID": cid, "UID" : uid}
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
    addClassroom(ID: number, name: string, professor: string, institution: string, members: User[], description: string, year: string, UID: string){
      return firebase.push(
        "/Classroom",
        {"ID":ID,"Name": name, "Professor": professor, "Institution": institution, "Members": members, "Description": description, "Year": year,
      "UID": BackendService.token}
      ).then(result => {
        console.log("User key is"+ result.key);
        this.userRegister(result.key, name, professor, year, BackendService.token, ID);    
      },
      function (errorMessage:any) {
        alert(errorMessage);
      }
  )
    }

      //updates classes in users
  userRegister(id: string, Cname: string, Prof: string, Year: string, UID: string, ID: number){
   
    return firebase.push("/Users/"+BackendService.Uid+"/MyClasses", {
      "ClassName": Cname,
      "CID": id,
      "Professor": Prof,
      "Year": Year,
      "UID": UID,
      "ID": ID
    }) .then(
      function (result:any) {
        return 'You have successfully added this class to your classes';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  

  }

    //students can register in classes
    registerClassroom(classroom: Classroom, key: string, name: string, number: string){
      return firebase.push("/Classroom/"+classroom.id+"/Members",{
        "FirstName": BackendService.Uname,
        "LastName": BackendService.Uname,
        "Number": number,
        "TA": false,
        "KEY": key,
        "UID": BackendService.token
      }).then( 
        function (result:any) {
          return 'You have successfully Registered for this class!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
       
    }

    //this takes in users token key as UID and stroes it in a tree
    //classroom is classid, UID is users token, userkey is the key for the user in the Members list for
    registerTA(classroom: string, firstName: string, lastName: string, UID: string, userkey: string){
      return firebase.push("/Classroom/"+classroom+"/TAs",{

        "FirstName": firstName,
        "LastName": lastName,
        "CID": classroom,
        "UID": UID
      })
      .then(result => {
        console.log("User key is"+ result.key);
        this.setTATrue(userkey, classroom, result.key);
      },
      function (errorMessage:any) {
        alert(errorMessage);
      }); 
    }

    unregisterTA(classroom: string, firstName: string, lastName: string, UID: string, userkey: string, studentkey: string){
      this.setTAFalse(userkey, classroom);
      return firebase.remove("/Classroom/"+classroom+"/TAs/"+studentkey)
      .then( 
        function (result:any) {
          return 'You have successfully promoted this user';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
    }

    //update TA field for classroom member
    setTATrue(fieldKey: string, classroom: string, key: string){
      return firebase.update("/Classroom/"+classroom+"/Members/"+fieldKey, 
      {
        "TA": true,
        "TAKey": key
      }).then( 
        function (result:any) {
        
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
    }

    setTAFalse(fieldKey: string, classroom: string){

      return firebase.update("/Classroom/"+classroom+"/Members/"+fieldKey, 
      {
        "TA": false
      }).then( 
        function (result:any) {
        
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
            // console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  //get all classes im registered in 
  getMyClassList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = "Users/"+BackendService.Uid+"/MyClasses";
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.myClassSnapshot(snapshot.value);
            // console.log("From firebaseservice my registered classes" +JSON.stringify(results))
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
            // console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  getUserScore(uid: string): Observable<any>{
    return new Observable((observer: any)=>{
      let path = 'Users/'+uid+'/MyScores';
      let onValueEvent = (snapshot: any) => {
        this.ngZone.run(() => {
              let result = (<any>Object);
          let results = this.scoreSnapshot(snapshot.value);
          console.log("From firebaseservice user score is" +JSON.stringify(results))
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
  addQuestionRequest(name: string, tags: string, TID: string, options: Options[], UID: string, studentNum:string){
    return firebase.push(
      "/Requests",
    {"Name": name, "Tags": tags, "Option": options,"UID":BackendService.Uid, 
    "TopicID": TID, "ClassID": BackendService.CID,
    "By" : BackendService.Uname, "StudentNum": studentNum

  
  })
    .then(
      function(result:any){
        return 'Question Uploaded';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
  }



  //add question
  addQuestion(name: string, tags: string, TID: string, options: Options[], UID: string){
    return firebase.push(
      "/Questions",
    {"Name": name, "Tags": tags, "Option": options,"UID":BackendService.Uid, "TopicID": TID, "ClassID": BackendService.CID})
    .then(
      function(result:any){
        return 'Question Created and Uploaded';
      },
      function (errorMessage:any){
        console.log(errorMessage);
      });
  }

  getQuestionRequests(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Requests/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.myRequestSnapshot(snapshot.value);
            // console.log("From firebaseservice" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  getClassroomQuestion(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Questions/';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
                let result = (<any>Object);
            let results = this.myRequestSnapshot(snapshot.value);
            console.log("All questions:" +JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  
  myRequestSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
       if(BackendService.CID == result.ClassID){ 
          this._allItems.push(result);
       }
           
      }
      // this.publishUpdates();
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

  //add scores for quizzes users have taken for each
  addUserScore(CID: string, TID: string, Topic: string, score: number){
    return firebase.push("/Users/"+BackendService.Uid+"/MyScores", {
      "Topic": Topic,
      "CID": CID,
      "Score": score,
      "TID": TID,
      "Date": 0 - Date.now()
    }) .then(
      function (result:any) {
        return 'User Score updated';
      },
      function (errorMessage:any) {
        console.log(errorMessage);
      });  
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

  scoreSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
          this._allItems.push(result);
              
      }

      this.publishUpdates();
    }
    return this._allItems;
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

  delete(classroom: Classroom) {
    return firebase.remove("/Classroom/"+classroom.id+"")
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



  /*
  getMyClassroom(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
    }).share();
  }*/


    
/*
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