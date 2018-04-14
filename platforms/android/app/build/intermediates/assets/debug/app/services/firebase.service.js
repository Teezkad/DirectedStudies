"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
        this._items = [];
    }
    //registers user's email anmd password only, this isstored in firebase authentications
    FirebaseService.prototype.register = function (user, email, firstName, lastName, studentNum, instructor, professor) {
        var _this = this;
        var uid;
        return firebase.createUser({
            email: user.email,
            password: user.password,
        }).then(function (result) {
            console.log("User key is" + result.key);
            backend_service_1.BackendService.Uid = result.key;
            _this.addUser(result.key, email, firstName, lastName, studentNum, instructor, professor);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    //login in user with email and password
    FirebaseService.prototype.login = function (user) {
        var _this = this;
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            _this.users$ = _this.getMyUserList(backend_service_1.BackendService.token);
            backend_service_1.BackendService.token = result.uid;
            _this.users$.subscribe(function (val) {
                console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
                console.log("My uid from firebaseservice is" + backend_service_1.BackendService.Uid);
                backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName));
                backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
                var first = JSON.parse(JSON.stringify(val[0].FirstName));
                var last = JSON.parse(JSON.stringify(val[0].LastName));
                backend_service_1.BackendService.Uname = first + " " + last;
                backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            });
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    //logs out user
    FirebaseService.prototype.logout = function () {
        firebase.logout();
        backend_service_1.BackendService.token = "";
        backend_service_1.BackendService.Uid = "";
    };
    //user can reset their password
    FirebaseService.prototype.resetPassword = function (email) {
        firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    //this is the main function to add other attributes of a user
    FirebaseService.prototype.addUser = function (UID, email, firstName, lastName, studentNum, instructor, professor) {
        return firebase.push("/Users", { "Email": email, "FirstName": firstName, "LastName": lastName, "studentNum": studentNum, "Instructor": instructor, "UID": UID }).then(function (result) {
            return 'User added';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //display all users
    FirebaseService.prototype.getMyUserList = function (token) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Users';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.userSnapshot(snapshot.value, token);
                    console.log("From firebaseservice users" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getTAList = function (token) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'TAs';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.TASnapshot(snapshot.value, token);
                    console.log("From firebaseservice TAs" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.TASnapshot = function (data, token) {
        //empty array, then fill with current user
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.CID === result.classroom) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.getMembersList = function (token) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Members';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.MembersSnapshot(snapshot.value, token);
                    console.log("From firebaseservice TAs" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.MembersSnapshot = function (data, token) {
        //empty array, then fill with current user
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.CID === result.CID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.getRegisteredUsers = function (ClassKey) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Members';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.handleClassSnapshot(snapshot.value, ClassKey);
                    console.log("Users in class" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.handleClassSnapshot = function (data, token) {
        //empty array, then fill with current user
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (token === result.CID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //display current user
    FirebaseService.prototype.getcurrentUserList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Users';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log("From Backendservice" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.userSnapshot = function (data, token) {
        //empty array, then fill with current user
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (token === result.UID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //add tags
    FirebaseService.prototype.addTag = function (name, cid, uid) {
        return firebase.push("/Tags", { "Name": name, "ClassID": cid, "UID": uid }).then(function (result) {
            return 'Topic ' + name + ' successfully Created';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //display all users
    FirebaseService.prototype.getMyTagList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Tags';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var results = _this.tagSnapshots(snapshot.value);
                    console.log("From firebaseservice" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.tagSnapshots = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.CID === result.ClassID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //add topic attribute to classes
    FirebaseService.prototype.updateClassTopic = function (name, cid) {
        return firebase.push("/Classroom/" + cid + "Topics", {
            "Topic": name
        }).then(function (result) {
            return 'You have successfully Registered for this class!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //adds classroom
    FirebaseService.prototype.addClassroom = function (ID, name, professor, institution, members, description, year, UID) {
        var _this = this;
        return firebase.push("/Classroom", { "ID": ID, "Name": name, "Professor": professor, "Institution": institution, "Members": members, "Description": description, "Year": year,
            "UID": backend_service_1.BackendService.token }).then(function (result) {
            console.log("User key is" + result.key);
            _this.userRegister(result.key, name, professor, year, backend_service_1.BackendService.token, ID);
            return name + "Successfully Created";
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    //updates classes in users
    FirebaseService.prototype.userRegister = function (id, Cname, Prof, Year, UID, ID) {
        return firebase.push("/Users/" + backend_service_1.BackendService.Uid + "/MyClasses", {
            "ClassName": Cname,
            "CID": id,
            "Professor": Prof,
            "Year": Year,
            "UID": UID,
            "ID": ID
        }).then(function (result) {
            return 'You have successfully added this class to your classes';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //students can register in classes
    FirebaseService.prototype.registerClassroom = function (classroom, key, name, number) {
        return firebase.push("Members", {
            "FirstName": backend_service_1.BackendService.Uname,
            "LastName": backend_service_1.BackendService.Uname,
            "Number": number,
            "CID": classroom.id,
            "TA": false,
            "KEY": key,
            "UID": backend_service_1.BackendService.token
        }).then(function (result) {
            return 'You have successfully Registered for this class!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //this takes in users token key as UID and stroes it in a tree
    //classroom is classid, UID is users token, userkey is the key for the user in the Members list for
    FirebaseService.prototype.registerTA = function (classroom, firstName, lastName, UID, userkey) {
        var _this = this;
        return firebase.push("TAs", {
            "FirstName": firstName,
            "LastName": lastName,
            "CID": classroom,
            "UID": UID
        })
            .then(function (result) {
            console.log("User key is" + result.key);
            _this.setTATrue(userkey, classroom, result.key);
            return 'This user is now a TA';
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.unregisterTA = function (classroom, firstName, lastName, userkey, studentkey) {
        this.setTAFalse(userkey, classroom);
        return firebase.remove("TAs/" + studentkey)
            .then(function (result) {
            return 'You have successfully demoted this user';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.messageToReceiver = function (question, topic, creator, UID, message) {
        return firebase.push("Messages", {
            "Message": message,
            "Request": question,
            "Seen": false,
            "ClassName": backend_service_1.BackendService.Cname,
            "Topic": topic,
            "ReceiverID": UID
        });
    };
    FirebaseService.prototype.messageFromSender = function (question, topic, creator, UID, message) {
        return firebase.push("Messages", {
            "Message": message,
            "Request": question,
            "ClassName": backend_service_1.BackendService.Cname,
            "CreatorName": creator,
            "Topic": topic,
            "SenderID": backend_service_1.BackendService.Uid
        });
    };
    //update TA field for classroom member
    FirebaseService.prototype.setTATrue = function (fieldKey, classroom, key) {
        return firebase.update("Members/" + fieldKey, {
            "TA": true,
            "TAKey": key
        }).then(function (result) {
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.setTAFalse = function (fieldKey, classroom) {
        return firebase.update("Members/" + fieldKey, {
            "TA": false
        }).then(function (result) {
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.getUserMessages = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "Messages";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.messageSnapshot(snapshot.value);
                    // console.log("From firebaseservice" +JSON.stringify(results))
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.messageSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (result.SenderID == backend_service_1.BackendService.Uid || result.ReceiverID == backend_service_1.BackendService.Uid) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //display all classes
    FirebaseService.prototype.getAllClassList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Classroom/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log("From firebaseservice all classes" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    //get all classes im registered in 
    FirebaseService.prototype.getMyClassList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "Users/" + backend_service_1.BackendService.Uid + "/MyClasses";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.myClassSnapshot(snapshot.value);
                    console.log("From firebaseservice my registered classes" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    //get all classes user has created
    FirebaseService.prototype.getCreatedClasses = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Classroom/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.classSnapshots(snapshot.value);
                    // console.log("From firebaseservice" +JSON.stringify(results))
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getScore = function (uid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Scores';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log("From firebaseservice user score is" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getUserScore = function (uid, tid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "Scores";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.scoreSnapshot(snapshot.value, tid, uid);
                    console.log("From firebaseservice user score is" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.scoreSnapshot = function (data, tid, uid) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (tid == result.TID && uid == result.UID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.classSnapshots = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.token === result.UID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.myClassSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._allItems.push(result);
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //add question
    FirebaseService.prototype.addQuestionRequest = function (name, tags, TID, options, UID, studentNum) {
        return firebase.push("/Requests", { "Name": name, "Tags": tags, "Option": options, "UID": backend_service_1.BackendService.Uid,
            "TopicID": TID, "ClassID": backend_service_1.BackendService.CID,
            "By": backend_service_1.BackendService.Uname, "StudentNum": studentNum, "ClassName": backend_service_1.BackendService.Cname
        })
            .then(function (result) {
            return 'Question Uploaded';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //add question
    FirebaseService.prototype.addQuestion = function (name, tags, TID, options, UID) {
        return firebase.push("/Questions", { "Name": name, "Tags": tags, "Option": options, "UID": backend_service_1.BackendService.Uid, "TopicID": TID, "ClassID": backend_service_1.BackendService.CID })
            .then(function (result) {
            return 'Question Created and Uploaded';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.getQuestionRequests = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Requests/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.myRequestSnapshot(snapshot.value);
                    // console.log("From firebaseservice" +JSON.stringify(results))
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getClassroomQuestion = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Questions/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.myRequestSnapshot(snapshot.value);
                    console.log("All questions:" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.myRequestSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.CID == result.ClassID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //add scores for quizzes users have taken for each
    FirebaseService.prototype.addUserScore = function (CID, TID, Topic, score) {
        return firebase.push("Scores", {
            "Topic": Topic,
            "CID": CID,
            "Score": score,
            "TID": TID,
            "UID": backend_service_1.BackendService.Uid,
            "Date": Date.now()
        }).then(function (result) {
            return 'User Score updated';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._allItems.push(result);
            }
        }
        return this._allItems;
    };
    FirebaseService.prototype.publishUpdates = function () {
        // here, we sort must emit a *new* value (immutability!)
        this._items.sort(function (a, b) {
            if (a.Date < b.Date)
                return -1;
            if (a.Date > b.Date)
                return 1;
            return 0;
        });
        this.items.next(this._items.slice());
    };
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
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBR3JELG1DQUFpQztBQUdqQztJQUNFLHlCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhCLFVBQUssR0FBc0MsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNELGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFKbEIsQ0FBQztJQVFILHNGQUFzRjtJQUN0RixrQ0FBUSxHQUFSLFVBQVMsSUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsVUFBa0IsRUFBRSxVQUFtQixFQUFFLFNBQWtCO1FBQXBJLGlCQWNDO1FBYkMsSUFBSSxHQUFHLENBQUM7UUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLGdDQUFjLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUYsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FB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QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsTUFBTSxTQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdEOzs7OztPQUtHO0lBSUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMEJFO0lBRUEsc0NBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5d0JVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FHTyxhQUFNO09BRmIsZUFBZSxDQSt3QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQS93QkQsSUErd0JDO0FBL3dCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKXt9XHJcbiAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxDbGFzc3Jvb20+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gIFxyXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxDbGFzc3Jvb20+ID0gW107XHJcbiAgcHJpdmF0ZSBfaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIFxyXG4gIC8vcmVnaXN0ZXJzIHVzZXIncyBlbWFpbCBhbm1kIHBhc3N3b3JkIG9ubHksIHRoaXMgaXNzdG9yZWQgaW4gZmlyZWJhc2UgYXV0aGVudGljYXRpb25zXHJcbiAgcmVnaXN0ZXIodXNlcjogVXNlciwgZW1haWw6IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIHN0dWRlbnROdW06IHN0cmluZywgaW5zdHJ1Y3RvcjogYm9vbGVhbiwgcHJvZmVzc29yOiBib29sZWFuKSB7XHJcbiAgICB2YXIgdWlkO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCwgXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIga2V5IGlzXCIrIHJlc3VsdC5rZXkpO1xyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5VaWQgPSByZXN1bHQua2V5O1xyXG4gICAgICAgICAgIHRoaXMuYWRkVXNlciggcmVzdWx0LmtleSwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHN0dWRlbnROdW0sIGluc3RydWN0b3IsIHByb2Zlc3Nvcik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgLy9sb2dpbiBpbiB1c2VyIHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmdldE15VXNlckxpc3QoQmFja2VuZFNlcnZpY2UudG9rZW4pO1xyXG4gICAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSByZXN1bHQudWlkO1xyXG4gICAgICAgICAgdGhpcy51c2VycyQuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlVpZCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbFswXS5pZCkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNeSB1aWQgZnJvbSBmaXJlYmFzZXNlcnZpY2UgaXNcIisgQmFja2VuZFNlcnZpY2UuVWlkKTtcclxuXHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkZpcnN0TmFtZSkpO1xyXG4gICAgICAgICAgICB2YXIgbGFzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkxhc3ROYW1lKSk7XHJcbiAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gZmlyc3QgKyBcIiBcIiArIGxhc3Q7XHJcblxyXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uc3R1ZGVudE51bSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vbG9ncyBvdXQgdXNlclxyXG4gIGxvZ291dCgpe1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpOyAgIFxyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5VaWQgPSBcIlwiOyBcclxuICB9XHJcbiAgXHJcbiAgLy91c2VyIGNhbiByZXNldCB0aGVpciBwYXNzd29yZFxyXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgZW1haWw6IGVtYWlsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL3RoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gdG8gYWRkIG90aGVyIGF0dHJpYnV0ZXMgb2YgYSB1c2VyXHJcbiAgYWRkVXNlciggVUlEOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBzdHVkZW50TnVtOiBzdHJpbmcsIGluc3RydWN0b3I6IGJvb2xlYW4sIHByb2Zlc3NvcjogYm9vbGVhbikgeyAgIFxyXG4gXHJcbiAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgXCIvVXNlcnNcIixcclxuICAgICAgICB7IFwiRW1haWxcIjogZW1haWwsIFwiRmlyc3ROYW1lXCI6IGZpcnN0TmFtZSwgXCJMYXN0TmFtZVwiOiBsYXN0TmFtZSwgXCJzdHVkZW50TnVtXCI6IHN0dWRlbnROdW0sIFwiSW5zdHJ1Y3RvclwiOiBpbnN0cnVjdG9yLCBcIlVJRFwiOlVJRH1cclxuICAgICAgKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1VzZXIgYWRkZWQnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7IFxyXG4gIH1cclxuXHJcblxyXG4gICAgLy9kaXNwbGF5IGFsbCB1c2Vyc1xyXG4gICAgZ2V0TXlVc2VyTGlzdCh0b2tlbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnVXNlcnMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnVzZXJTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgdXNlcnNcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFRBTGlzdCh0b2tlbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnVEFzJztcclxuICAgICAgICBcclxuICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5UQVNuYXBzaG90KHNuYXBzaG90LnZhbHVlLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZSBUQXNcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFRBU25hcHNob3QoZGF0YTogYW55LCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gZmlsbCB3aXRoIGN1cnJlbnQgdXNlclxyXG4gICAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICBpZihCYWNrZW5kU2VydmljZS5DSUQgPT09IHJlc3VsdC5jbGFzc3Jvb20peyBcclxuICAgICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVtYmVyc0xpc3QodG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBwYXRoID0gJ01lbWJlcnMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLk1lbWJlcnNTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgVEFzXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIE1lbWJlcnNTbmFwc2hvdChkYXRhOiBhbnksIHRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgLy9lbXB0eSBhcnJheSwgdGhlbiBmaWxsIHdpdGggY3VycmVudCB1c2VyXHJcbiAgICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLkNJRCA9PT0gcmVzdWx0LkNJRCl7IFxyXG4gICAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdpc3RlcmVkVXNlcnMoQ2xhc3NLZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBwYXRoID0gJ01lbWJlcnMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVDbGFzc1NuYXBzaG90KHNuYXBzaG90LnZhbHVlLCBDbGFzc0tleSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiVXNlcnMgaW4gY2xhc3NcIisgSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xhc3NTbmFwc2hvdChkYXRhOiBhbnksIHRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgLy9lbXB0eSBhcnJheSwgdGhlbiBmaWxsIHdpdGggY3VycmVudCB1c2VyXHJcbiAgICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIGlmKHRva2VuID09PSByZXN1bHQuQ0lEKXsgXHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIC8vZGlzcGxheSBjdXJyZW50IHVzZXJcclxuICAgIGdldGN1cnJlbnRVc2VyTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdVc2Vycyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJGcm9tIEJhY2tlbmRzZXJ2aWNlXCIrIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgdXNlclNuYXBzaG90KGRhdGE6IGFueSwgdG9rZW46IHN0cmluZykge1xyXG4gICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIGZpbGwgd2l0aCBjdXJyZW50IHVzZXJcclxuICAgICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgaWYodG9rZW4gPT09IHJlc3VsdC5VSUQpeyBcclxuICAgICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gIC8vYWRkIHRhZ3NcclxuICBhZGRUYWcobmFtZTogc3RyaW5nLCBjaWQ6IHN0cmluZywgdWlkOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgIFwiL1RhZ3NcIixcclxuICAgICAgeyBcIk5hbWVcIjogbmFtZSwgXCJDbGFzc0lEXCI6IGNpZCwgXCJVSURcIiA6IHVpZH1cclxuICAgICkudGhlbihcclxuICAgICAgZnVuY3Rpb24ocmVzdWx0OmFueSl7XHJcbiAgICAgICAgcmV0dXJuICdUb3BpYyAnKyBuYW1lKycgc3VjY2Vzc2Z1bGx5IENyZWF0ZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAgICAgLy9kaXNwbGF5IGFsbCB1c2Vyc1xyXG4gICAgICBnZXRNeVRhZ0xpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCBwYXRoID0gJ1RhZ3MnO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMudGFnU25hcHNob3RzKHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2VcIiAgKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGFnU25hcHNob3RzKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLkNJRCA9PT0gcmVzdWx0LkNsYXNzSUQpe1xyXG4gICAgICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICBcclxuICAgICAgfVxyXG5cclxuICAvL2FkZCB0b3BpYyBhdHRyaWJ1dGUgdG8gY2xhc3Nlc1xyXG4gIHVwZGF0ZUNsYXNzVG9waWMobmFtZTogc3RyaW5nLCBjaWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcIi9DbGFzc3Jvb20vXCIgKyBjaWQrIFwiVG9waWNzXCIsIHtcclxuICAgICAgXCJUb3BpY1wiOiBuYW1lXHJcbiAgICB9KS50aGVuKCBcclxuICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBSZWdpc3RlcmVkIGZvciB0aGlzIGNsYXNzISc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7ICBcclxuICAgICBcclxuICB9XHJcblxyXG4gICAgLy9hZGRzIGNsYXNzcm9vbVxyXG4gICAgYWRkQ2xhc3Nyb29tKElEOiBudW1iZXIsIG5hbWU6IHN0cmluZywgcHJvZmVzc29yOiBzdHJpbmcsIGluc3RpdHV0aW9uOiBzdHJpbmcsIG1lbWJlcnM6IFVzZXJbXSwgZGVzY3JpcHRpb246IHN0cmluZywgeWVhcjogc3RyaW5nLCBVSUQ6IHN0cmluZyl7XHJcbiAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAgIFwiL0NsYXNzcm9vbVwiLFxyXG4gICAgICAgIHtcIklEXCI6SUQsXCJOYW1lXCI6IG5hbWUsIFwiUHJvZmVzc29yXCI6IHByb2Zlc3NvciwgXCJJbnN0aXR1dGlvblwiOiBpbnN0aXR1dGlvbiwgXCJNZW1iZXJzXCI6IG1lbWJlcnMsIFwiRGVzY3JpcHRpb25cIjogZGVzY3JpcHRpb24sIFwiWWVhclwiOiB5ZWFyLFxyXG4gICAgICBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlbn1cclxuICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGtleSBpc1wiKyByZXN1bHQua2V5KTtcclxuICAgICAgICB0aGlzLnVzZXJSZWdpc3RlcihyZXN1bHQua2V5LCBuYW1lLCBwcm9mZXNzb3IsIHllYXIsIEJhY2tlbmRTZXJ2aWNlLnRva2VuLCBJRCk7IFxyXG4gICAgICAgIHJldHVybiBuYW1lICsgXCJTdWNjZXNzZnVsbHkgQ3JlYXRlZFwiOyAgIFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICApXHJcbiAgICB9XHJcblxyXG4gICAgICAvL3VwZGF0ZXMgY2xhc3NlcyBpbiB1c2Vyc1xyXG4gIHVzZXJSZWdpc3RlcihpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgVUlEOiBzdHJpbmcsIElEOiBudW1iZXIpe1xyXG4gICBcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFwiL1VzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeUNsYXNzZXNcIiwge1xyXG4gICAgICBcIkNsYXNzTmFtZVwiOiBDbmFtZSxcclxuICAgICAgXCJDSURcIjogaWQsXHJcbiAgICAgIFwiUHJvZmVzc29yXCI6IFByb2YsXHJcbiAgICAgIFwiWWVhclwiOiBZZWFyLFxyXG4gICAgICBcIlVJRFwiOiBVSUQsXHJcbiAgICAgIFwiSURcIjogSURcclxuICAgIH0pIC50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRoaXMgY2xhc3MgdG8geW91ciBjbGFzc2VzJztcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTsgIFxyXG5cclxuICB9XHJcblxyXG4gICAgLy9zdHVkZW50cyBjYW4gcmVnaXN0ZXIgaW4gY2xhc3Nlc1xyXG4gICAgcmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGtleTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJNZW1iZXJzXCIse1xyXG4gICAgICAgIFwiRmlyc3ROYW1lXCI6IEJhY2tlbmRTZXJ2aWNlLlVuYW1lLFxyXG4gICAgICAgIFwiTGFzdE5hbWVcIjogQmFja2VuZFNlcnZpY2UuVW5hbWUsXHJcbiAgICAgICAgXCJOdW1iZXJcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQ0lEXCI6IGNsYXNzcm9vbS5pZCxcclxuICAgICAgICBcIlRBXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiS0VZXCI6IGtleSxcclxuICAgICAgICBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlblxyXG4gICAgICB9KS50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgUmVnaXN0ZXJlZCBmb3IgdGhpcyBjbGFzcyEnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyB0YWtlcyBpbiB1c2VycyB0b2tlbiBrZXkgYXMgVUlEIGFuZCBzdHJvZXMgaXQgaW4gYSB0cmVlXHJcbiAgICAvL2NsYXNzcm9vbSBpcyBjbGFzc2lkLCBVSUQgaXMgdXNlcnMgdG9rZW4sIHVzZXJrZXkgaXMgdGhlIGtleSBmb3IgdGhlIHVzZXIgaW4gdGhlIE1lbWJlcnMgbGlzdCBmb3JcclxuICAgIHJlZ2lzdGVyVEEoY2xhc3Nyb29tOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBVSUQ6IHN0cmluZywgdXNlcmtleTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJUQXNcIix7XHJcblxyXG4gICAgICAgIFwiRmlyc3ROYW1lXCI6IGZpcnN0TmFtZSxcclxuICAgICAgICBcIkxhc3ROYW1lXCI6IGxhc3ROYW1lLFxyXG4gICAgICAgIFwiQ0lEXCI6IGNsYXNzcm9vbSxcclxuICAgICAgICBcIlVJRFwiOiBVSURcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIga2V5IGlzXCIrIHJlc3VsdC5rZXkpO1xyXG4gICAgICAgIHRoaXMuc2V0VEFUcnVlKHVzZXJrZXksIGNsYXNzcm9vbSwgcmVzdWx0LmtleSk7XHJcbiAgICAgICAgcmV0dXJuICdUaGlzIHVzZXIgaXMgbm93IGEgVEEnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyVEEoY2xhc3Nyb29tOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCB1c2Vya2V5OiBzdHJpbmcsIHN0dWRlbnRrZXk6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuc2V0VEFGYWxzZSh1c2Vya2V5LCBjbGFzc3Jvb20pO1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiVEFzL1wiK3N0dWRlbnRrZXkpXHJcbiAgICAgIC50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZGVtb3RlZCB0aGlzIHVzZXInO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWVzc2FnZVRvUmVjZWl2ZXIocXVlc3Rpb246IHN0cmluZywgIHRvcGljOiBzdHJpbmcsIGNyZWF0b3I6IHN0cmluZywgVUlEOnN0cmluZywgbWVzc2FnZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJNZXNzYWdlc1wiICx7XHJcbiAgICAgICAgXCJNZXNzYWdlXCI6IG1lc3NhZ2UsXHJcbiAgICAgICAgXCJSZXF1ZXN0XCI6IHF1ZXN0aW9uLFxyXG4gICAgICAgIFwiU2VlblwiOiBmYWxzZSxcclxuICAgICAgICBcIkNsYXNzTmFtZVwiOiBCYWNrZW5kU2VydmljZS5DbmFtZSxcclxuICAgICAgICBcIlRvcGljXCI6IHRvcGljLCBcclxuICAgICAgICBcIlJlY2VpdmVySURcIjogVUlEXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1lc3NhZ2VGcm9tU2VuZGVyKHF1ZXN0aW9uOiBzdHJpbmcsIHRvcGljOiBzdHJpbmcsIGNyZWF0b3I6IHN0cmluZywgVUlEOnN0cmluZywgbWVzc2FnZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJNZXNzYWdlc1wiICx7XHJcbiAgICAgICAgXCJNZXNzYWdlXCI6IG1lc3NhZ2UsXHJcbiAgICAgICAgXCJSZXF1ZXN0XCI6IHF1ZXN0aW9uLFxyXG4gICAgICAgIFwiQ2xhc3NOYW1lXCI6IEJhY2tlbmRTZXJ2aWNlLkNuYW1lLFxyXG4gICAgICAgIFwiQ3JlYXRvck5hbWVcIjogY3JlYXRvcixcclxuICAgICAgICBcIlRvcGljXCI6IHRvcGljLFxyXG4gICAgICAgIFwiU2VuZGVySURcIjogQmFja2VuZFNlcnZpY2UuVWlkXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlIFRBIGZpZWxkIGZvciBjbGFzc3Jvb20gbWVtYmVyXHJcbiAgICBzZXRUQVRydWUoZmllbGRLZXk6IHN0cmluZywgY2xhc3Nyb29tOiBzdHJpbmcsIGtleTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIk1lbWJlcnMvXCIrZmllbGRLZXksIFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJUQVwiOiB0cnVlLFxyXG4gICAgICAgIFwiVEFLZXlcIjoga2V5XHJcbiAgICAgIH0pLnRoZW4oIFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldFRBRmFsc2UoZmllbGRLZXk6IHN0cmluZywgY2xhc3Nyb29tOiBzdHJpbmcpe1xyXG5cclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIk1lbWJlcnMvXCIrZmllbGRLZXksIFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJUQVwiOiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyTWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkgKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBcIk1lc3NhZ2VzXCI7XHJcblxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMubWVzc2FnZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZVwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnZVNuYXBzaG90KGRhdGE6IGFueSkge1xyXG4gICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgaWYocmVzdWx0LlNlbmRlcklEID09IEJhY2tlbmRTZXJ2aWNlLlVpZCB8fCByZXN1bHQuUmVjZWl2ZXJJRCA9PSBCYWNrZW5kU2VydmljZS5VaWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7IH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuLy9kaXNwbGF5IGFsbCBjbGFzc2VzXHJcbiAgZ2V0QWxsQ2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIGFsbCBjbGFzc2VzXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICAvL2dldCBhbGwgY2xhc3NlcyBpbSByZWdpc3RlcmVkIGluIFxyXG4gIGdldE15Q2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSBcIlVzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeUNsYXNzZXNcIjtcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5teUNsYXNzU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIG15IHJlZ2lzdGVyZWQgY2xhc3Nlc1wiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgLy9nZXQgYWxsIGNsYXNzZXMgdXNlciBoYXMgY3JlYXRlZFxyXG4gIGdldENyZWF0ZWRDbGFzc2VzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuY2xhc3NTbmFwc2hvdHMoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBnZXRTY29yZSh1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSk9PntcclxuICAgICAgbGV0IHBhdGggPSAnU2NvcmVzJztcclxuICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIHVzZXIgc2NvcmUgaXNcIiArSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgfSkuc2hhcmUoKTsgICAgICBcclxuICB9XHJcblxyXG4gIGdldFVzZXJTY29yZSh1aWQ6IHN0cmluZywgdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpPT57XHJcbiAgICAgIGxldCBwYXRoID1cIlNjb3Jlc1wiO1xyXG4gICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnNjb3JlU25hcHNob3Qoc25hcHNob3QudmFsdWUsIHRpZCwgdWlkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgdXNlciBzY29yZSBpc1wiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICB9KS5zaGFyZSgpOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgc2NvcmVTbmFwc2hvdChkYXRhOiBhbnksIHRpZDpzdHJpbmcsIHVpZDpzdHJpbmcpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuXHJcbiAgICAgICAgaWYodGlkID09IHJlc3VsdC5USUQgJiYgdWlkID09IHJlc3VsdC5VSUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgY2xhc3NTbmFwc2hvdHMoZGF0YTogYW55KSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgaWYoQmFja2VuZFNlcnZpY2UudG9rZW4gPT09IHJlc3VsdC5VSUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICBteUNsYXNzU25hcHNob3QoZGF0YTogYW55KSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICBcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9hZGQgcXVlc3Rpb25cclxuICBhZGRRdWVzdGlvblJlcXVlc3QobmFtZTogc3RyaW5nLCB0YWdzOiBzdHJpbmcsIFRJRDogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10sIFVJRDogc3RyaW5nLCBzdHVkZW50TnVtOnN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgXCIvUmVxdWVzdHNcIixcclxuICAgIHtcIk5hbWVcIjogbmFtZSwgXCJUYWdzXCI6IHRhZ3MsIFwiT3B0aW9uXCI6IG9wdGlvbnMsXCJVSURcIjpCYWNrZW5kU2VydmljZS5VaWQsIFxyXG4gICAgXCJUb3BpY0lEXCI6IFRJRCwgXCJDbGFzc0lEXCI6IEJhY2tlbmRTZXJ2aWNlLkNJRCxcclxuICAgIFwiQnlcIiA6IEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBcIlN0dWRlbnROdW1cIjogc3R1ZGVudE51bSwgXCJDbGFzc05hbWVcIjogQmFja2VuZFNlcnZpY2UuQ25hbWVcclxuXHJcbiAgXHJcbiAgfSlcclxuICAgIC50aGVuKFxyXG4gICAgICBmdW5jdGlvbihyZXN1bHQ6YW55KXtcclxuICAgICAgICByZXR1cm4gJ1F1ZXN0aW9uIFVwbG9hZGVkJztcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL2FkZCBxdWVzdGlvblxyXG4gIGFkZFF1ZXN0aW9uKG5hbWU6IHN0cmluZywgdGFnczogc3RyaW5nLCBUSUQ6IHN0cmluZywgb3B0aW9uczogT3B0aW9uc1tdLCBVSUQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgXCIvUXVlc3Rpb25zXCIsXHJcbiAgICB7XCJOYW1lXCI6IG5hbWUsIFwiVGFnc1wiOiB0YWdzLCBcIk9wdGlvblwiOiBvcHRpb25zLFwiVUlEXCI6QmFja2VuZFNlcnZpY2UuVWlkLCBcIlRvcGljSURcIjogVElELCBcIkNsYXNzSURcIjogQmFja2VuZFNlcnZpY2UuQ0lEfSlcclxuICAgIC50aGVuKFxyXG4gICAgICBmdW5jdGlvbihyZXN1bHQ6YW55KXtcclxuICAgICAgICByZXR1cm4gJ1F1ZXN0aW9uIENyZWF0ZWQgYW5kIFVwbG9hZGVkJztcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25SZXF1ZXN0cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgIGxldCBwYXRoID0gJ1JlcXVlc3RzLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMubXlSZXF1ZXN0U25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc3Jvb21RdWVzdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgIGxldCBwYXRoID0gJ1F1ZXN0aW9ucy8nO1xyXG4gICAgICBcclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLm15UmVxdWVzdFNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGwgcXVlc3Rpb25zOlwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgbXlSZXF1ZXN0U25hcHNob3QoZGF0YTogYW55KSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICBpZihCYWNrZW5kU2VydmljZS5DSUQgPT0gcmVzdWx0LkNsYXNzSUQpeyBcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcblxyXG4gIH1cclxuICAvL2FkZCBzY29yZXMgZm9yIHF1aXp6ZXMgdXNlcnMgaGF2ZSB0YWtlbiBmb3IgZWFjaFxyXG4gIGFkZFVzZXJTY29yZShDSUQ6IHN0cmluZywgVElEOiBzdHJpbmcsIFRvcGljOiBzdHJpbmcsIHNjb3JlOiBudW1iZXIpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJTY29yZXNcIiwge1xyXG4gICAgICBcIlRvcGljXCI6IFRvcGljLFxyXG4gICAgICBcIkNJRFwiOiBDSUQsXHJcbiAgICAgIFwiU2NvcmVcIjogc2NvcmUsXHJcbiAgICAgIFwiVElEXCI6IFRJRCxcclxuICAgICAgXCJVSURcIjogQmFja2VuZFNlcnZpY2UuVWlkLFxyXG4gICAgICBcIkRhdGVcIjogRGF0ZS5ub3coKVxyXG4gICAgfSkgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgcmV0dXJuICdVc2VyIFNjb3JlIHVwZGF0ZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pOyAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaXNoVXBkYXRlcygpIHtcclxuICAgIC8vIGhlcmUsIHdlIHNvcnQgbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXHJcbiAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIGlmKGEuRGF0ZSA8IGIuRGF0ZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmKGEuRGF0ZSA+IGIuRGF0ZSkgcmV0dXJuIDE7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSlcclxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5faXRlbXNdKTtcclxuICB9XHJcblxyXG4gXHJcbiAgLypcclxuICBnZXRNeUNsYXNzcm9vbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XHJcbiAgICB9KS5zaGFyZSgpO1xyXG4gIH0qL1xyXG5cclxuXHJcbiAgICBcclxuLypcclxuICBlZGl0Q2xhc3Nyb29tKGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaW1hZ2VwYXRoOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb21zL1wiK2lkK1wiXCIse1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgaW1hZ2VwYXRoOiBpbWFnZXBhdGh9KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoaXMgQ2xhc3Nyb29tISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gIH1cclxuICBlZGl0RGVzY3JpcHRpb24oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKXtcclxuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvQ2xhc3Nyb29tcy9cIitpZCtcIlwiLHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoZSBkZXNjcmlwdGlvbiEnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICB9XHJcbiovXHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn0iXX0=