"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
<<<<<<< HEAD
=======
            _this.users$.subscribe(function (val) {
                console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
                backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName));
                backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
                var first = JSON.parse(JSON.stringify(val[0].FirstName));
                var last = JSON.parse(JSON.stringify(val[0].LastName));
                backend_service_1.BackendService.Uname = first + " " + last;
            });
            console.log("My uid is" + backend_service_1.BackendService.Uid);
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
            backend_service_1.BackendService.token = result.uid;
            console.log("Token is " + result.uid);
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
            alert("Login Information is not correct");
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
    FirebaseService.prototype.addTag = function (name, cid, uid, instructorOnly) {
        return firebase.push("/Tags", { "Name": name, "ClassID": cid, "UID": uid, "instructorOnly": instructorOnly }).then(function (result) {
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
            return firstName + ' is now a TA';
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.unregisterTA = function (classroom, firstName, lastName, userkey, studentkey) {
        return firebase.remove("/TAs/" + studentkey + "")
            .then(function (result) {
            return firstName + 'is no longer a TA';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.messageToReceiver = function (question, topic, creator, UID, message) {
        return firebase.push("Messages", {
            "Message": message,
            "QuestionId": question,
            "QuestionTopic": topic,
            "Seen": false,
            "ClassName": backend_service_1.BackendService.Cname,
            "By": creator,
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
            "TA": false,
            "TAKey": ""
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
<<<<<<< HEAD
                    var results = _this.messageSnapshot(snapshot.value);
=======
                    var results = _this.handleSnapshot(snapshot.value);
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
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
<<<<<<< HEAD
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
=======
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log("From firebaseservice my registered classes" + JSON.stringify(results));
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
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
    //add question
    FirebaseService.prototype.addQuestionRequest = function (name, tags, TID, options, UID, studentNum) {
        return firebase.push("/Requests", { "Name": name, "Tags": tags, "Option": options, "UID": backend_service_1.BackendService.Uid,
            "TopicID": TID, "ClassID": backend_service_1.BackendService.CID, "Fixed": false,
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
        return firebase.push("/Questions", { "Name": name, "Tags": tags, "Option": options, "UID": backend_service_1.BackendService.Uid, "TopicID": TID,
            "ClassID": backend_service_1.BackendService.CID, "Fixed": false, "StudentNum": backend_service_1.BackendService.studentNum, "By": backend_service_1.BackendService.Uname })
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
    FirebaseService.prototype.getRequest = function (Rid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Requests/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.RequestSnapshot(snapshot.value, Rid);
                    console.log("From firebaseservice request is " + JSON.stringify(results));
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
    FirebaseService.prototype.RequestSnapshot = function (data, Rid) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (result.id == Rid) {
                    this._allItems.push(result);
                }
            }
        }
        return this._allItems;
    };
    FirebaseService.prototype.myRequestSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.CID == result.ClassID && result.Fixed == false) {
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
<<<<<<< HEAD
=======
    FirebaseService.prototype.delete = function (classroom) {
        return firebase.remove("/Classroom/" + classroom.id + "")
            .catch(this.handleErrors);
    };
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
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
    FirebaseService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWlEO0FBRWpELHFEQUFtRDtBQUNuRCx1REFBMEQ7QUFDMUQsOENBQTJDO0FBQzNDLHdEQUFxRDtBQUdyRCxtQ0FBaUM7QUFHakM7SUFDRSx5QkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4QixVQUFLLEdBQXNDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzRCxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBSmxCLENBQUM7SUFRSCxzRkFBc0Y7SUFDdEYsa0NBQVEsR0FBUixVQUFTLElBQVUsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsVUFBbUIsRUFBRSxTQUFrQjtRQUFwSSxpQkFhQztRQVpDLElBQUksR0FBRyxDQUFDO1FBQ1IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxRixDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZD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QUFDLE1BQU0sU0FBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sU0FBb0I7UUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO2FBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU1EOzs7OztPQUtHO0lBSUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMEJFO0lBRUEsc0NBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE1cUJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtpREFHTyxhQUFNO09BRmIsZUFBZSxDQTZxQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdxQkQsSUE2cUJDO0FBN3FCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKXt9XHJcbiAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxDbGFzc3Jvb20+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gIFxyXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxDbGFzc3Jvb20+ID0gW107XHJcbiAgcHJpdmF0ZSBfaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIFxyXG4gIC8vcmVnaXN0ZXJzIHVzZXIncyBlbWFpbCBhbm1kIHBhc3N3b3JkIG9ubHksIHRoaXMgaXNzdG9yZWQgaW4gZmlyZWJhc2UgYXV0aGVudGljYXRpb25zXHJcbiAgcmVnaXN0ZXIodXNlcjogVXNlciwgZW1haWw6IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIHN0dWRlbnROdW06IHN0cmluZywgaW5zdHJ1Y3RvcjogYm9vbGVhbiwgcHJvZmVzc29yOiBib29sZWFuKSB7XHJcbiAgICB2YXIgdWlkO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCwgXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIga2V5IGlzXCIrIHJlc3VsdC5rZXkpO1xyXG4gICAgICAgICAgIHRoaXMuYWRkVXNlciggcmVzdWx0LmtleSwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHN0dWRlbnROdW0sIGluc3RydWN0b3IsIHByb2Zlc3Nvcik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgLy9sb2dpbiBpbiB1c2VyIHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudXNlcnMkID0gIDxhbnk+dGhpcy5nZXRNeVVzZXJMaXN0KEJhY2tlbmRTZXJ2aWNlLnRva2VuKTtcclxuXHJcbiAgICAgIHRoaXMudXNlcnMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEJhY2tlbmRTZXJ2aWNlLlVpZCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KHZhbFswXS5pZCkpKTtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5VbmFtZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsWzBdLkZpcnN0TmFtZSkpO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnN0dWRlbnROdW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5zdHVkZW50TnVtKSk7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWxbMF0uRmlyc3ROYW1lKSk7XHJcbiAgICAgICAgdmFyIGxhc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbFswXS5MYXN0TmFtZSkpO1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlVuYW1lID0gZmlyc3QgKyBcIiBcIiArIGxhc3Q7XHJcbiAgICB9KTsgXHJcbiAgICBjb25zb2xlLmxvZyhcIk15IHVpZCBpc1wiKyBCYWNrZW5kU2VydmljZS5VaWQpO1xyXG5cclxuICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vbG9ncyBvdXQgdXNlclxyXG4gIGxvZ291dCgpe1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpOyAgICBcclxuICB9XHJcbiAgXHJcbiAgLy91c2VyIGNhbiByZXNldCB0aGVpciBwYXNzd29yZFxyXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgZW1haWw6IGVtYWlsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL3RoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gdG8gYWRkIG90aGVyIGF0dHJpYnV0ZXMgb2YgYSB1c2VyXHJcbiAgYWRkVXNlciggVUlEOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBzdHVkZW50TnVtOiBzdHJpbmcsIGluc3RydWN0b3I6IGJvb2xlYW4sIHByb2Zlc3NvcjogYm9vbGVhbikgeyAgIFxyXG4gXHJcbiAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgXCIvVXNlcnNcIixcclxuICAgICAgICB7IFwiRW1haWxcIjogZW1haWwsIFwiRmlyc3ROYW1lXCI6IGZpcnN0TmFtZSwgXCJMYXN0TmFtZVwiOiBsYXN0TmFtZSwgXCJzdHVkZW50TnVtXCI6IHN0dWRlbnROdW0sIFwiSW5zdHJ1Y3RvclwiOiBpbnN0cnVjdG9yLCBcIlVJRFwiOlVJRH1cclxuICAgICAgKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1VzZXIgYWRkZWQnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7IFxyXG4gIH1cclxuXHJcblxyXG4gICAgLy9kaXNwbGF5IGFsbCB1c2Vyc1xyXG4gICAgZ2V0TXlVc2VyTGlzdCh0b2tlbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnVXNlcnMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnVzZXJTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgdXNlcnNcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0UmVnaXN0ZXJlZFVzZXJzKENsYXNzS2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdDbGFzc3Jvb20vJytCYWNrZW5kU2VydmljZS5DSUQrJy9NZW1iZXJzJztcclxuICAgICAgICBcclxuICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4geyBcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIlVzZXJzIGluIGNsYXNzXCIrIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vZGlzcGxheSBjdXJyZW50IHVzZXJcclxuICAgIGdldGN1cnJlbnRVc2VyTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdVc2Vycyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJGcm9tIEJhY2tlbmRzZXJ2aWNlXCIrIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgdXNlclNuYXBzaG90KGRhdGE6IGFueSwgdG9rZW46IHN0cmluZykge1xyXG4gICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIGZpbGwgd2l0aCBjdXJyZW50IHVzZXJcclxuICAgICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgaWYodG9rZW4gPT09IHJlc3VsdC5VSUQpeyBcclxuICAgICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gIC8vYWRkIHRhZ3NcclxuICBhZGRUYWcobmFtZTogc3RyaW5nLCBjaWQ6IHN0cmluZywgdWlkOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgIFwiL1RhZ3NcIixcclxuICAgICAgeyBcIk5hbWVcIjogbmFtZSwgXCJDbGFzc0lEXCI6IGNpZCwgXCJVSURcIiA6IHVpZH1cclxuICAgICkudGhlbihcclxuICAgICAgZnVuY3Rpb24ocmVzdWx0OmFueSl7XHJcbiAgICAgICAgcmV0dXJuICdUb3BpYyAnKyBuYW1lKycgc3VjY2Vzc2Z1bGx5IENyZWF0ZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAgICAgLy9kaXNwbGF5IGFsbCB1c2Vyc1xyXG4gICAgICBnZXRNeVRhZ0xpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCBwYXRoID0gJ1RhZ3MnO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMudGFnU25hcHNob3RzKHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2VcIiAgKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGFnU25hcHNob3RzKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLkNJRCA9PT0gcmVzdWx0LkNsYXNzSUQpe1xyXG4gICAgICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICBcclxuICAgICAgfVxyXG5cclxuICAvL2FkZCB0b3BpYyBhdHRyaWJ1dGUgdG8gY2xhc3Nlc1xyXG4gIHVwZGF0ZUNsYXNzVG9waWMobmFtZTogc3RyaW5nLCBjaWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcIi9DbGFzc3Jvb20vXCIgKyBjaWQrIFwiVG9waWNzXCIsIHtcclxuICAgICAgXCJUb3BpY1wiOiBuYW1lXHJcbiAgICB9KS50aGVuKCBcclxuICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBSZWdpc3RlcmVkIGZvciB0aGlzIGNsYXNzISc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7ICBcclxuICAgICBcclxuICB9XHJcblxyXG4gICAgLy9hZGRzIGNsYXNzcm9vbVxyXG4gICAgYWRkQ2xhc3Nyb29tKElEOiBudW1iZXIsIG5hbWU6IHN0cmluZywgcHJvZmVzc29yOiBzdHJpbmcsIGluc3RpdHV0aW9uOiBzdHJpbmcsIG1lbWJlcnM6IFVzZXJbXSwgZGVzY3JpcHRpb246IHN0cmluZywgeWVhcjogc3RyaW5nLCBVSUQ6IHN0cmluZyl7XHJcbiAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAgIFwiL0NsYXNzcm9vbVwiLFxyXG4gICAgICAgIHtcIklEXCI6SUQsXCJOYW1lXCI6IG5hbWUsIFwiUHJvZmVzc29yXCI6IHByb2Zlc3NvciwgXCJJbnN0aXR1dGlvblwiOiBpbnN0aXR1dGlvbiwgXCJNZW1iZXJzXCI6IG1lbWJlcnMsIFwiRGVzY3JpcHRpb25cIjogZGVzY3JpcHRpb24sIFwiWWVhclwiOiB5ZWFyLFxyXG4gICAgICBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlbn1cclxuICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGtleSBpc1wiKyByZXN1bHQua2V5KTtcclxuICAgICAgICB0aGlzLnVzZXJSZWdpc3RlcihyZXN1bHQua2V5LCBuYW1lLCBwcm9mZXNzb3IsIHllYXIsIEJhY2tlbmRTZXJ2aWNlLnRva2VuLCBJRCk7IFxyXG4gICAgICAgIHJldHVybiBuYW1lICsgXCJTdWNjZXNzZnVsbHkgQ3JlYXRlZFwiOyAgIFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICApXHJcbiAgICB9XHJcblxyXG4gICAgICAvL3VwZGF0ZXMgY2xhc3NlcyBpbiB1c2Vyc1xyXG4gIHVzZXJSZWdpc3RlcihpZDogc3RyaW5nLCBDbmFtZTogc3RyaW5nLCBQcm9mOiBzdHJpbmcsIFllYXI6IHN0cmluZywgVUlEOiBzdHJpbmcsIElEOiBudW1iZXIpe1xyXG4gICBcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFwiL1VzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeUNsYXNzZXNcIiwge1xyXG4gICAgICBcIkNsYXNzTmFtZVwiOiBDbmFtZSxcclxuICAgICAgXCJDSURcIjogaWQsXHJcbiAgICAgIFwiUHJvZmVzc29yXCI6IFByb2YsXHJcbiAgICAgIFwiWWVhclwiOiBZZWFyLFxyXG4gICAgICBcIlVJRFwiOiBVSUQsXHJcbiAgICAgIFwiSURcIjogSURcclxuICAgIH0pIC50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRoaXMgY2xhc3MgdG8geW91ciBjbGFzc2VzJztcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTsgIFxyXG5cclxuICB9XHJcblxyXG4gICAgLy9zdHVkZW50cyBjYW4gcmVnaXN0ZXIgaW4gY2xhc3Nlc1xyXG4gICAgcmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGtleTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCIvQ2xhc3Nyb29tL1wiK2NsYXNzcm9vbS5pZCtcIi9NZW1iZXJzXCIse1xyXG4gICAgICAgIFwiRmlyc3ROYW1lXCI6IEJhY2tlbmRTZXJ2aWNlLlVuYW1lLFxyXG4gICAgICAgIFwiTGFzdE5hbWVcIjogQmFja2VuZFNlcnZpY2UuVW5hbWUsXHJcbiAgICAgICAgXCJOdW1iZXJcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiVEFcIjogZmFsc2UsXHJcbiAgICAgICAgXCJLRVlcIjoga2V5LFxyXG4gICAgICAgIFwiVUlEXCI6IEJhY2tlbmRTZXJ2aWNlLnRva2VuXHJcbiAgICAgIH0pLnRoZW4oIFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBSZWdpc3RlcmVkIGZvciB0aGlzIGNsYXNzISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzIHRha2VzIGluIHVzZXJzIHRva2VuIGtleSBhcyBVSUQgYW5kIHN0cm9lcyBpdCBpbiBhIHRyZWVcclxuICAgIC8vY2xhc3Nyb29tIGlzIGNsYXNzaWQsIFVJRCBpcyB1c2VycyB0b2tlbiwgdXNlcmtleSBpcyB0aGUga2V5IGZvciB0aGUgdXNlciBpbiB0aGUgTWVtYmVycyBsaXN0IGZvclxyXG4gICAgcmVnaXN0ZXJUQShjbGFzc3Jvb206IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIFVJRDogc3RyaW5nLCB1c2Vya2V5OiBzdHJpbmcpe1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcIi9DbGFzc3Jvb20vXCIrY2xhc3Nyb29tK1wiL1RBc1wiLHtcclxuXHJcbiAgICAgICAgXCJGaXJzdE5hbWVcIjogZmlyc3ROYW1lLFxyXG4gICAgICAgIFwiTGFzdE5hbWVcIjogbGFzdE5hbWUsXHJcbiAgICAgICAgXCJDSURcIjogY2xhc3Nyb29tLFxyXG4gICAgICAgIFwiVUlEXCI6IFVJRFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBrZXkgaXNcIisgcmVzdWx0LmtleSk7XHJcbiAgICAgICAgdGhpcy5zZXRUQVRydWUodXNlcmtleSwgY2xhc3Nyb29tLCByZXN1bHQua2V5KTtcclxuICAgICAgICByZXR1cm4gJ1RoaXMgdXNlciBpcyBub3cgYSBUQSc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXJUQShjbGFzc3Jvb206IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIHVzZXJrZXk6IHN0cmluZywgc3R1ZGVudGtleTogc3RyaW5nKXtcclxuICAgICAgdGhpcy5zZXRUQUZhbHNlKHVzZXJrZXksIGNsYXNzcm9vbSk7XHJcbiAgICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvQ2xhc3Nyb29tL1wiK2NsYXNzcm9vbStcIi9UQXMvXCIrc3R1ZGVudGtleSlcclxuICAgICAgLnRoZW4oIFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBkZW1vdGVkIHRoaXMgdXNlcic7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG1lc3NhZ2VUb1JlY2VpdmVyKHF1ZXN0aW9uOiBRdWVzdGlvbiwgbWVzc2FnZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJVc2Vycy9cIitxdWVzdGlvbi5VSUQrIFwiL01lc3NhZ2VzXCIgLHtcclxuICAgICAgICBcIk1lc3NhZ2VcIjogbWVzc2FnZSxcclxuICAgICAgICBcIlJlcXVlc3RcIjogcXVlc3Rpb24uaWQsXHJcbiAgICAgICAgXCJTZWVuXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiQ2xhc3NOYW1lXCI6IHF1ZXN0aW9uLkNsYXNzTmFtZSxcclxuICAgICAgICBcIlByb2Zlc3NvclwiOiBxdWVzdGlvbi5Qcm9mZXNzb3IsXHJcbiAgICAgICAgXCJRdWVzdGlvblwiOiBxdWVzdGlvbi5uYW1lXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1lc3NhZ2VGcm9tU2VuZGVyKHF1ZXN0aW9uOiBRdWVzdGlvbiwgbWVzc2FnZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCJVc2Vycy9cIitCYWNrZW5kU2VydmljZS5VaWQrIFwiL01lc3NhZ2VzXCIgLHtcclxuICAgICAgICBcIk1lc3NhZ2VcIjogbWVzc2FnZSxcclxuICAgICAgICBcIlJlcXVlc3RcIjogcXVlc3Rpb24uaWQsXHJcbiAgICAgICAgXCJDbGFzc05hbWVcIjogcXVlc3Rpb24uQ2xhc3NOYW1lLFxyXG4gICAgICAgIFwiUHJvZmVzc29yXCI6IHF1ZXN0aW9uLlByb2Zlc3NvcixcclxuICAgICAgICBcIlF1ZXN0aW9uXCI6IHF1ZXN0aW9uLm5hbWUsXHJcbiAgICAgICAgXCJGaXJzdE5hbWVcIjogcXVlc3Rpb24uYnksXHJcbiAgICAgICAgXCJUb3BpY1wiOiBxdWVzdGlvbi5UYWdzXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlIFRBIGZpZWxkIGZvciBjbGFzc3Jvb20gbWVtYmVyXHJcbiAgICBzZXRUQVRydWUoZmllbGRLZXk6IHN0cmluZywgY2xhc3Nyb29tOiBzdHJpbmcsIGtleTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb20vXCIrY2xhc3Nyb29tK1wiL01lbWJlcnMvXCIrZmllbGRLZXksIFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJUQVwiOiB0cnVlLFxyXG4gICAgICAgIFwiVEFLZXlcIjoga2V5XHJcbiAgICAgIH0pLnRoZW4oIFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldFRBRmFsc2UoZmllbGRLZXk6IHN0cmluZywgY2xhc3Nyb29tOiBzdHJpbmcpe1xyXG5cclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb20vXCIrY2xhc3Nyb29tK1wiL01lbWJlcnMvXCIrZmllbGRLZXksIFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJUQVwiOiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyTWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkgKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBcIlVzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NZXNzYWdlc1wiO1xyXG5cclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZVwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuLy9kaXNwbGF5IGFsbCBjbGFzc2VzXHJcbiAgZ2V0QWxsQ2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIGFsbCBjbGFzc2VzXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICAvL2dldCBhbGwgY2xhc3NlcyBpbSByZWdpc3RlcmVkIGluIFxyXG4gIGdldE15Q2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSBcIlVzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeUNsYXNzZXNcIjtcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgbXkgcmVnaXN0ZXJlZCBjbGFzc2VzXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0U2NvcmUodWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpPT57XHJcbiAgICAgIGxldCBwYXRoID0gJ1VzZXJzLycrdWlkKycvTXlTY29yZXMnO1xyXG4gICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgdXNlciBzY29yZSBpc1wiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICB9KS5zaGFyZSgpOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclNjb3JlKHVpZDogc3RyaW5nLCB0aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSk9PntcclxuICAgICAgbGV0IHBhdGggPSAnVXNlcnMvJyt1aWQrJy9NeVNjb3Jlcyc7XHJcbiAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuc2NvcmVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgdGlkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2UgdXNlciBzY29yZSBpc1wiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICB9KS5zaGFyZSgpOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgY2xhc3NTbmFwc2hvdHMoZGF0YTogYW55KSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgaWYoQmFja2VuZFNlcnZpY2UudG9rZW4gPT09IHJlc3VsdC5VSUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICAvL2FkZCBxdWVzdGlvblxyXG4gIGFkZFF1ZXN0aW9uUmVxdWVzdChuYW1lOiBzdHJpbmcsIHRhZ3M6IHN0cmluZywgVElEOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSwgVUlEOiBzdHJpbmcsIHN0dWRlbnROdW06c3RyaW5nKXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICBcIi9SZXF1ZXN0c1wiLFxyXG4gICAge1wiTmFtZVwiOiBuYW1lLCBcIlRhZ3NcIjogdGFncywgXCJPcHRpb25cIjogb3B0aW9ucyxcIlVJRFwiOkJhY2tlbmRTZXJ2aWNlLlVpZCwgXHJcbiAgICBcIlRvcGljSURcIjogVElELCBcIkNsYXNzSURcIjogQmFja2VuZFNlcnZpY2UuQ0lELFxyXG4gICAgXCJCeVwiIDogQmFja2VuZFNlcnZpY2UuVW5hbWUsIFwiU3R1ZGVudE51bVwiOiBzdHVkZW50TnVtLCBcIkNsYXNzTmFtZVwiOiBCYWNrZW5kU2VydmljZS5DbmFtZVxyXG5cclxuICBcclxuICB9KVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdDphbnkpe1xyXG4gICAgICAgIHJldHVybiAnUXVlc3Rpb24gVXBsb2FkZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vYWRkIHF1ZXN0aW9uXHJcbiAgYWRkUXVlc3Rpb24obmFtZTogc3RyaW5nLCB0YWdzOiBzdHJpbmcsIFRJRDogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10sIFVJRDogc3RyaW5nKXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICBcIi9RdWVzdGlvbnNcIixcclxuICAgIHtcIk5hbWVcIjogbmFtZSwgXCJUYWdzXCI6IHRhZ3MsIFwiT3B0aW9uXCI6IG9wdGlvbnMsXCJVSURcIjpCYWNrZW5kU2VydmljZS5VaWQsIFwiVG9waWNJRFwiOiBUSUQsIFwiQ2xhc3NJRFwiOiBCYWNrZW5kU2VydmljZS5DSUR9KVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdDphbnkpe1xyXG4gICAgICAgIHJldHVybiAnUXVlc3Rpb24gQ3JlYXRlZCBhbmQgVXBsb2FkZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRRdWVzdGlvblJlcXVlc3RzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnUmVxdWVzdHMvJztcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5teVJlcXVlc3RTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2VcIiArSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIGdldENsYXNzcm9vbVF1ZXN0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnUXVlc3Rpb25zLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMubXlSZXF1ZXN0U25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCBxdWVzdGlvbnM6XCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBcclxuICBteVJlcXVlc3RTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLkNJRCA9PSByZXN1bHQuQ2xhc3NJRCl7IFxyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICBnZXRUb3BpY1F1ZXN0aW9ucyh0aWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnUXVlc3Rpb25zLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMucXVlc3Rpb25TbmFwc2hvdHMoc25hcHNob3QudmFsdWUsIHRpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBmaXJlYmFzZXNlcnZpY2VcIiArSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgIH0pLnNoYXJlKCk7IFxyXG5cclxuICB9XHJcblxyXG4gIHF1ZXN0aW9uU25hcHNob3RzKGRhdGE6IGFueSwgdGlkOiBzdHJpbmcpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICBpZih0aWQgPT09IHJlc3VsdC5Ub3BpY0lEKXtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9hZGQgc2NvcmVzIGZvciBxdWl6emVzIHVzZXJzIGhhdmUgdGFrZW4gZm9yIGVhY2hcclxuICBhZGRVc2VyU2NvcmUoQ0lEOiBzdHJpbmcsIFRJRDogc3RyaW5nLCBUb3BpYzogc3RyaW5nLCBzY29yZTogbnVtYmVyKXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFwiL1VzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeVNjb3Jlc1wiLCB7XHJcbiAgICAgIFwiVG9waWNcIjogVG9waWMsXHJcbiAgICAgIFwiQ0lEXCI6IENJRCxcclxuICAgICAgXCJTY29yZVwiOiBzY29yZSxcclxuICAgICAgXCJUSURcIjogVElELFxyXG4gICAgICBcIkRhdGVcIjogRGF0ZS5ub3coKVxyXG4gICAgfSkgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgcmV0dXJuICdVc2VyIFNjb3JlIHVwZGF0ZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pOyAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2NvcmVTbmFwc2hvdChkYXRhOiBhbnksIHRpZDpzdHJpbmcpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuXHJcbiAgICAgICAgaWYodGlkID09IHJlc3VsdC5USUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGlzaFVwZGF0ZXMoKSB7XHJcbiAgICAvLyBoZXJlLCB3ZSBzb3J0IG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxyXG4gICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAtMTtcclxuICAgICAgICBpZihhLkRhdGUgPiBiLkRhdGUpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pXHJcbiAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuX2l0ZW1zXSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoY2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvQ2xhc3Nyb29tL1wiK2NsYXNzcm9vbS5pZCtcIlwiKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH0gXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvKlxyXG4gIGdldE15Q2xhc3Nyb29tKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5fYWxsSXRlbXMuZmlsdGVyKHMgPT4gcy5pZCA9PT0gaWQpWzBdKTtcclxuICAgIH0pLnNoYXJlKCk7XHJcbiAgfSovXHJcblxyXG5cclxuICAgIFxyXG4vKlxyXG4gIGVkaXRDbGFzc3Jvb20oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpbWFnZXBhdGg6IHN0cmluZyl7XHJcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0NsYXNzcm9vbXMvXCIraWQrXCJcIix7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBpbWFnZXBhdGg6IGltYWdlcGF0aH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhpcyBDbGFzc3Jvb20hJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgfVxyXG4gIGVkaXREZXNjcmlwdGlvbihpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb21zL1wiK2lkK1wiXCIse1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbn0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhlIGRlc2NyaXB0aW9uISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gIH1cclxuKi9cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufSJdfQ==
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
