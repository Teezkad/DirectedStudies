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
            _this.addUser(result.key, email, firstName, lastName, studentNum, instructor, professor);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    //login in user with email and password
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    //logs out user
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        backend_service_1.BackendService.Uname = "";
        backend_service_1.BackendService.CID = "";
        firebase.logout();
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
    FirebaseService.prototype.getMyUserList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Users';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.userSnapshot(snapshot.value);
                    console.log("From firebaseservice users" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getRegisteredUsers = function (ClassKey) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Classroom/' + backend_service_1.BackendService.CID + '/Members';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    //     let result = (<any>Object).assign({id: id}, data[id]);
                    var result = Object;
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log("Users in class" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
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
    FirebaseService.prototype.userSnapshot = function (data) {
        //empty array, then fill with current user
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
        return firebase.push("/Classroom/" + classroom.id + "/Members", {
            "FirstName": backend_service_1.BackendService.Uname,
            "LastName": backend_service_1.BackendService.Uname,
            "Number": number,
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
        return firebase.push("/Classroom/" + classroom + "/TAs", {
            "FirstName": firstName,
            "LastName": lastName,
            "CID": classroom,
            "UID": UID
        })
            .then(function (result) {
            console.log("User key is" + result.key);
            _this.setTATrue(userkey, classroom, result.key);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.unregisterTA = function (classroom, firstName, lastName, UID, userkey, studentkey) {
        this.setTAFalse(userkey, classroom);
        return firebase.remove("/Classroom/" + classroom + "/TAs/" + studentkey)
            .then(function (result) {
            return 'You have successfully promoted this user';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    //update TA field for classroom member
    FirebaseService.prototype.setTATrue = function (fieldKey, classroom, key) {
        return firebase.update("/Classroom/" + classroom + "/Members/" + fieldKey, {
            "TA": true,
            "TAKey": key
        }).then(function (result) {
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.setTAFalse = function (fieldKey, classroom) {
        return firebase.update("/Classroom/" + classroom + "/Members/" + fieldKey, {
            "TA": false
        }).then(function (result) {
        }, function (errorMessage) {
            console.log(errorMessage);
        });
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
                    // console.log("From firebaseservice" +JSON.stringify(results))
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
                    // console.log("From firebaseservice my registered classes" +JSON.stringify(results))
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
    FirebaseService.prototype.getUserScore = function (uid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Users/' + uid + '/MyScores';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.scoreSnapshot(snapshot.value);
                    console.log("From firebaseservice user score is" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
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
            "By": backend_service_1.BackendService.Uname, "StudentNum": studentNum
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
    FirebaseService.prototype.getTopicQuestions = function (tid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Questions/';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.questionSnapshots(snapshot.value, tid);
                    console.log("From firebaseservice" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.questionSnapshots = function (data, tid) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (tid === result.TopicID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    //add scores for quizzes users have taken for each
    FirebaseService.prototype.addUserScore = function (CID, TID, Topic, score) {
        return firebase.push("/Users/" + backend_service_1.BackendService.Uid + "/MyScores", {
            "Topic": Topic,
            "CID": CID,
            "Score": score,
            "TID": TID,
            "Date": 0 - Date.now()
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
    FirebaseService.prototype.scoreSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                this._allItems.push(result);
            }
            this.publishUpdates();
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
    FirebaseService.prototype.delete = function (classroom) {
        return firebase.remove("/Classroom/" + classroom.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.deleteQuestion = function (question) {
        return firebase.remove("/Questions/" + question.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.deleteRegisteredUsers = function (uid) {
        return firebase.remove("/Classroom/" + backend_service_1.BackendService.CID + "/Members/" + uid)
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.deleteQuestionRequest = function (question) {
        return firebase.remove("/Requests/" + question.id + "").catch(this.handleErrors);
    };
    FirebaseService.prototype.deleteTag = function (tag) {
        return firebase.remove("/Tags/" + tag.id + "")
            .catch(this.handleErrors);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBR3JELG1DQUFpQztBQUdqQztJQUNFLHlCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhCLFVBQUssR0FBc0MsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNELGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFKbEIsQ0FBQztJQU1ILHNGQUFzRjtJQUN0RixrQ0FBUSxHQUFSLFVBQVMsSUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsVUFBa0IsRUFBRSxVQUFtQixFQUFFLFNBQWtCO1FBQXBJLGlCQWFDO1FBWkMsSUFBSSxHQUFHLENBQUM7UUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFGLENBQUMsRUFDRCxVQUFVLFlBQWdCO1lBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCx1Q0FBdUM7SUFDdkMs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LEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdnBCVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGVBQWUsQ0F3cEIzQjtJQUFELHNCQUFDO0NBQUEsQUF4cEJELElBd3BCQztBQXhwQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4uL3RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICl7fVxyXG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8Q2xhc3Nyb29tPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICBcclxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8Q2xhc3Nyb29tPiA9IFtdO1xyXG4gIHByaXZhdGUgX2l0ZW1zID0gW107XHJcbiAgXHJcbiAgLy9yZWdpc3RlcnMgdXNlcidzIGVtYWlsIGFubWQgcGFzc3dvcmQgb25seSwgdGhpcyBpc3N0b3JlZCBpbiBmaXJlYmFzZSBhdXRoZW50aWNhdGlvbnNcclxuICByZWdpc3Rlcih1c2VyOiBVc2VyLCBlbWFpbDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgc3R1ZGVudE51bTogc3RyaW5nLCBpbnN0cnVjdG9yOiBib29sZWFuLCBwcm9mZXNzb3I6IGJvb2xlYW4pIHtcclxuICAgIHZhciB1aWQ7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLCBcclxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBrZXkgaXNcIisgcmVzdWx0LmtleSk7XHJcbiAgICAgICAgICAgdGhpcy5hZGRVc2VyKCByZXN1bHQua2V5LCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3R1ZGVudE51bSwgaW5zdHJ1Y3RvciwgcHJvZmVzc29yKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICAvL2xvZ2luIGluIHVzZXIgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcclxuICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vbG9ncyBvdXQgdXNlclxyXG4gIGxvZ291dCgpe1xyXG4gICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xyXG4gICAgQmFja2VuZFNlcnZpY2UuVW5hbWU9IFwiXCI7XHJcbiAgICBCYWNrZW5kU2VydmljZS5DSUQgPSBcIlwiO1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpOyAgICBcclxuICB9XHJcbiAgXHJcbiAgLy91c2VyIGNhbiByZXNldCB0aGVpciBwYXNzd29yZFxyXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgZW1haWw6IGVtYWlsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL3RoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gdG8gYWRkIG90aGVyIGF0dHJpYnV0ZXMgb2YgYSB1c2VyXHJcbiAgYWRkVXNlciggVUlEOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBzdHVkZW50TnVtOiBzdHJpbmcsIGluc3RydWN0b3I6IGJvb2xlYW4sIHByb2Zlc3NvcjogYm9vbGVhbikgeyAgIFxyXG4gXHJcbiAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgXCIvVXNlcnNcIixcclxuICAgICAgICB7IFwiRW1haWxcIjogZW1haWwsIFwiRmlyc3ROYW1lXCI6IGZpcnN0TmFtZSwgXCJMYXN0TmFtZVwiOiBsYXN0TmFtZSwgXCJzdHVkZW50TnVtXCI6IHN0dWRlbnROdW0sIFwiSW5zdHJ1Y3RvclwiOiBpbnN0cnVjdG9yLCBcIlVJRFwiOlVJRH1cclxuICAgICAgKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1VzZXIgYWRkZWQnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7IFxyXG4gIH1cclxuXHJcblxyXG4gICAgLy9kaXNwbGF5IGFsbCB1c2Vyc1xyXG4gICAgZ2V0TXlVc2VyTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdVc2Vycyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMudXNlclNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIHVzZXJzXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIGdldFJlZ2lzdGVyZWRVc2VycyhDbGFzc0tleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLycrQmFja2VuZFNlcnZpY2UuQ0lEKycvTWVtYmVycyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJVc2VycyBpbiBjbGFzc1wiKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL2Rpc3BsYXkgY3VycmVudCB1c2VyXHJcbiAgICBnZXRjdXJyZW50VXNlckxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnVXNlcnMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiRnJvbSBCYWNrZW5kc2VydmljZVwiKyBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIHVzZXJTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgICAgLy9lbXB0eSBhcnJheSwgdGhlbiBmaWxsIHdpdGggY3VycmVudCB1c2VyXHJcbiAgICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLnRva2VuID09PSByZXN1bHQuVUlEKXsgXHJcbiAgICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAvL2FkZCB0YWdzXHJcbiAgYWRkVGFnKG5hbWU6IHN0cmluZywgY2lkOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICBcIi9UYWdzXCIsXHJcbiAgICAgIHsgXCJOYW1lXCI6IG5hbWUsIFwiQ2xhc3NJRFwiOiBjaWQsIFwiVUlEXCIgOiB1aWR9XHJcbiAgICApLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdDphbnkpe1xyXG4gICAgICAgIHJldHVybiAnVG9waWMgJysgbmFtZSsnIHN1Y2Nlc3NmdWxseSBDcmVhdGVkJztcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICAgIC8vZGlzcGxheSBhbGwgdXNlcnNcclxuICAgICAgZ2V0TXlUYWdMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgcGF0aCA9ICdUYWdzJztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnRhZ1NuYXBzaG90cyhzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlXCIgICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICAgICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRhZ1NuYXBzaG90cyhkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgICAgICBpZihCYWNrZW5kU2VydmljZS5DSUQgPT09IHJlc3VsdC5DbGFzc0lEKXtcclxuICAgICAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbiAgXHJcbiAgICAgIH1cclxuXHJcbiAgLy9hZGQgdG9waWMgYXR0cmlidXRlIHRvIGNsYXNzZXNcclxuICB1cGRhdGVDbGFzc1RvcGljKG5hbWU6IHN0cmluZywgY2lkOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCIvQ2xhc3Nyb29tL1wiICsgY2lkKyBcIlRvcGljc1wiLCB7XHJcbiAgICAgIFwiVG9waWNcIjogbmFtZVxyXG4gICAgfSkudGhlbiggXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgUmVnaXN0ZXJlZCBmb3IgdGhpcyBjbGFzcyEnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pOyAgXHJcbiAgICAgXHJcbiAgfVxyXG5cclxuICAgIC8vYWRkcyBjbGFzc3Jvb21cclxuICAgIGFkZENsYXNzcm9vbShJRDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHByb2Zlc3Nvcjogc3RyaW5nLCBpbnN0aXR1dGlvbjogc3RyaW5nLCBtZW1iZXJzOiBVc2VyW10sIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHllYXI6IHN0cmluZywgVUlEOiBzdHJpbmcpe1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICBcIi9DbGFzc3Jvb21cIixcclxuICAgICAgICB7XCJJRFwiOklELFwiTmFtZVwiOiBuYW1lLCBcIlByb2Zlc3NvclwiOiBwcm9mZXNzb3IsIFwiSW5zdGl0dXRpb25cIjogaW5zdGl0dXRpb24sIFwiTWVtYmVyc1wiOiBtZW1iZXJzLCBcIkRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLCBcIlllYXJcIjogeWVhcixcclxuICAgICAgXCJVSURcIjogQmFja2VuZFNlcnZpY2UudG9rZW59XHJcbiAgICAgICkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBrZXkgaXNcIisgcmVzdWx0LmtleSk7XHJcbiAgICAgICAgdGhpcy51c2VyUmVnaXN0ZXIocmVzdWx0LmtleSwgbmFtZSwgcHJvZmVzc29yLCB5ZWFyLCBCYWNrZW5kU2VydmljZS50b2tlbiwgSUQpOyAgICBcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgKVxyXG4gICAgfVxyXG5cclxuICAgICAgLy91cGRhdGVzIGNsYXNzZXMgaW4gdXNlcnNcclxuICB1c2VyUmVnaXN0ZXIoaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIFVJRDogc3RyaW5nLCBJRDogbnVtYmVyKXtcclxuICAgXHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcIi9Vc2Vycy9cIitCYWNrZW5kU2VydmljZS5VaWQrXCIvTXlDbGFzc2VzXCIsIHtcclxuICAgICAgXCJDbGFzc05hbWVcIjogQ25hbWUsXHJcbiAgICAgIFwiQ0lEXCI6IGlkLFxyXG4gICAgICBcIlByb2Zlc3NvclwiOiBQcm9mLFxyXG4gICAgICBcIlllYXJcIjogWWVhcixcclxuICAgICAgXCJVSURcIjogVUlELFxyXG4gICAgICBcIklEXCI6IElEXHJcbiAgICB9KSAudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhZGRlZCB0aGlzIGNsYXNzIHRvIHlvdXIgY2xhc3Nlcyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7ICBcclxuXHJcbiAgfVxyXG5cclxuICAgIC8vc3R1ZGVudHMgY2FuIHJlZ2lzdGVyIGluIGNsYXNzZXNcclxuICAgIHJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbTogQ2xhc3Nyb29tLCBrZXk6IHN0cmluZywgbmFtZTogc3RyaW5nLCBudW1iZXI6IHN0cmluZyl7XHJcbiAgICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFwiL0NsYXNzcm9vbS9cIitjbGFzc3Jvb20uaWQrXCIvTWVtYmVyc1wiLHtcclxuICAgICAgICBcIkZpcnN0TmFtZVwiOiBCYWNrZW5kU2VydmljZS5VbmFtZSxcclxuICAgICAgICBcIkxhc3ROYW1lXCI6IEJhY2tlbmRTZXJ2aWNlLlVuYW1lLFxyXG4gICAgICAgIFwiTnVtYmVyXCI6IG51bWJlcixcclxuICAgICAgICBcIlRBXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiS0VZXCI6IGtleSxcclxuICAgICAgICBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlblxyXG4gICAgICB9KS50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgUmVnaXN0ZXJlZCBmb3IgdGhpcyBjbGFzcyEnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyB0YWtlcyBpbiB1c2VycyB0b2tlbiBrZXkgYXMgVUlEIGFuZCBzdHJvZXMgaXQgaW4gYSB0cmVlXHJcbiAgICAvL2NsYXNzcm9vbSBpcyBjbGFzc2lkLCBVSUQgaXMgdXNlcnMgdG9rZW4sIHVzZXJrZXkgaXMgdGhlIGtleSBmb3IgdGhlIHVzZXIgaW4gdGhlIE1lbWJlcnMgbGlzdCBmb3JcclxuICAgIHJlZ2lzdGVyVEEoY2xhc3Nyb29tOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBVSUQ6IHN0cmluZywgdXNlcmtleTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCIvQ2xhc3Nyb29tL1wiK2NsYXNzcm9vbStcIi9UQXNcIix7XHJcblxyXG4gICAgICAgIFwiRmlyc3ROYW1lXCI6IGZpcnN0TmFtZSxcclxuICAgICAgICBcIkxhc3ROYW1lXCI6IGxhc3ROYW1lLFxyXG4gICAgICAgIFwiQ0lEXCI6IGNsYXNzcm9vbSxcclxuICAgICAgICBcIlVJRFwiOiBVSURcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIga2V5IGlzXCIrIHJlc3VsdC5rZXkpO1xyXG4gICAgICAgIHRoaXMuc2V0VEFUcnVlKHVzZXJrZXksIGNsYXNzcm9vbSwgcmVzdWx0LmtleSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXJUQShjbGFzc3Jvb206IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIFVJRDogc3RyaW5nLCB1c2Vya2V5OiBzdHJpbmcsIHN0dWRlbnRrZXk6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuc2V0VEFGYWxzZSh1c2Vya2V5LCBjbGFzc3Jvb20pO1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0NsYXNzcm9vbS9cIitjbGFzc3Jvb20rXCIvVEFzL1wiK3N0dWRlbnRrZXkpXHJcbiAgICAgIC50aGVuKCBcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgcHJvbW90ZWQgdGhpcyB1c2VyJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGUgVEEgZmllbGQgZm9yIGNsYXNzcm9vbSBtZW1iZXJcclxuICAgIHNldFRBVHJ1ZShmaWVsZEtleTogc3RyaW5nLCBjbGFzc3Jvb206IHN0cmluZywga2V5OiBzdHJpbmcpe1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0NsYXNzcm9vbS9cIitjbGFzc3Jvb20rXCIvTWVtYmVycy9cIitmaWVsZEtleSwgXHJcbiAgICAgIHtcclxuICAgICAgICBcIlRBXCI6IHRydWUsXHJcbiAgICAgICAgXCJUQUtleVwiOiBrZXlcclxuICAgICAgfSkudGhlbiggXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VEFGYWxzZShmaWVsZEtleTogc3RyaW5nLCBjbGFzc3Jvb206IHN0cmluZyl7XHJcblxyXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0NsYXNzcm9vbS9cIitjbGFzc3Jvb20rXCIvTWVtYmVycy9cIitmaWVsZEtleSwgXHJcbiAgICAgIHtcclxuICAgICAgICBcIlRBXCI6IGZhbHNlXHJcbiAgICAgIH0pLnRoZW4oIFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuLy9kaXNwbGF5IGFsbCBjbGFzc2VzXHJcbiAgZ2V0QWxsQ2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICAvL2dldCBhbGwgY2xhc3NlcyBpbSByZWdpc3RlcmVkIGluIFxyXG4gIGdldE15Q2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSBcIlVzZXJzL1wiK0JhY2tlbmRTZXJ2aWNlLlVpZCtcIi9NeUNsYXNzZXNcIjtcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5teUNsYXNzU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIG15IHJlZ2lzdGVyZWQgY2xhc3Nlc1wiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgLy9nZXQgYWxsIGNsYXNzZXMgdXNlciBoYXMgY3JlYXRlZFxyXG4gIGdldENyZWF0ZWRDbGFzc2VzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tLyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuY2xhc3NTbmFwc2hvdHMoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyU2NvcmUodWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpPT57XHJcbiAgICAgIGxldCBwYXRoID0gJ1VzZXJzLycrdWlkKycvTXlTY29yZXMnO1xyXG4gICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnNjb3JlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZSB1c2VyIHNjb3JlIGlzXCIgK0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gIH0pLnNoYXJlKCk7ICAgICAgXHJcbiAgfVxyXG5cclxuICBjbGFzc1NuYXBzaG90cyhkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XHJcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG5cclxuICB9XHJcblxyXG4gIG15Q2xhc3NTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICAvL2FkZCBxdWVzdGlvblxyXG4gIGFkZFF1ZXN0aW9uUmVxdWVzdChuYW1lOiBzdHJpbmcsIHRhZ3M6IHN0cmluZywgVElEOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSwgVUlEOiBzdHJpbmcsIHN0dWRlbnROdW06c3RyaW5nKXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICBcIi9SZXF1ZXN0c1wiLFxyXG4gICAge1wiTmFtZVwiOiBuYW1lLCBcIlRhZ3NcIjogdGFncywgXCJPcHRpb25cIjogb3B0aW9ucyxcIlVJRFwiOkJhY2tlbmRTZXJ2aWNlLlVpZCwgXHJcbiAgICBcIlRvcGljSURcIjogVElELCBcIkNsYXNzSURcIjogQmFja2VuZFNlcnZpY2UuQ0lELFxyXG4gICAgXCJCeVwiIDogQmFja2VuZFNlcnZpY2UuVW5hbWUsIFwiU3R1ZGVudE51bVwiOiBzdHVkZW50TnVtXHJcblxyXG4gIFxyXG4gIH0pXHJcbiAgICAudGhlbihcclxuICAgICAgZnVuY3Rpb24ocmVzdWx0OmFueSl7XHJcbiAgICAgICAgcmV0dXJuICdRdWVzdGlvbiBVcGxvYWRlZCc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy9hZGQgcXVlc3Rpb25cclxuICBhZGRRdWVzdGlvbihuYW1lOiBzdHJpbmcsIHRhZ3M6IHN0cmluZywgVElEOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSwgVUlEOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgIFwiL1F1ZXN0aW9uc1wiLFxyXG4gICAge1wiTmFtZVwiOiBuYW1lLCBcIlRhZ3NcIjogdGFncywgXCJPcHRpb25cIjogb3B0aW9ucyxcIlVJRFwiOkJhY2tlbmRTZXJ2aWNlLlVpZCwgXCJUb3BpY0lEXCI6IFRJRCwgXCJDbGFzc0lEXCI6IEJhY2tlbmRTZXJ2aWNlLkNJRH0pXHJcbiAgICAudGhlbihcclxuICAgICAgZnVuY3Rpb24ocmVzdWx0OmFueSl7XHJcbiAgICAgICAgcmV0dXJuICdRdWVzdGlvbiBDcmVhdGVkIGFuZCBVcGxvYWRlZCc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXN0aW9uUmVxdWVzdHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICdSZXF1ZXN0cy8nO1xyXG4gICAgICBcclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLm15UmVxdWVzdFNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZVwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3Nyb29tUXVlc3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICdRdWVzdGlvbnMvJztcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5teVJlcXVlc3RTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIHF1ZXN0aW9uczpcIiArSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIFxyXG4gIG15UmVxdWVzdFNuYXBzaG90KGRhdGE6IGFueSkge1xyXG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgaWYoQmFja2VuZFNlcnZpY2UuQ0lEID09IHJlc3VsdC5DbGFzc0lEKXsgXHJcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG5cclxuICB9XHJcblxyXG4gIGdldFRvcGljUXVlc3Rpb25zKHRpZDogc3RyaW5nKXtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICdRdWVzdGlvbnMvJztcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5xdWVzdGlvblNuYXBzaG90cyhzbmFwc2hvdC52YWx1ZSwgdGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZVwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgXHJcblxyXG4gIH1cclxuXHJcbiAgcXVlc3Rpb25TbmFwc2hvdHMoZGF0YTogYW55LCB0aWQ6IHN0cmluZykge1xyXG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgIGlmKHRpZCA9PT0gcmVzdWx0LlRvcGljSUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICAvL2FkZCBzY29yZXMgZm9yIHF1aXp6ZXMgdXNlcnMgaGF2ZSB0YWtlbiBmb3IgZWFjaFxyXG4gIGFkZFVzZXJTY29yZShDSUQ6IHN0cmluZywgVElEOiBzdHJpbmcsIFRvcGljOiBzdHJpbmcsIHNjb3JlOiBudW1iZXIpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXCIvVXNlcnMvXCIrQmFja2VuZFNlcnZpY2UuVWlkK1wiL015U2NvcmVzXCIsIHtcclxuICAgICAgXCJUb3BpY1wiOiBUb3BpYyxcclxuICAgICAgXCJDSURcIjogQ0lELFxyXG4gICAgICBcIlNjb3JlXCI6IHNjb3JlLFxyXG4gICAgICBcIlRJRFwiOiBUSUQsXHJcbiAgICAgIFwiRGF0ZVwiOiAwIC0gRGF0ZS5ub3coKVxyXG4gICAgfSkgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgcmV0dXJuICdVc2VyIFNjb3JlIHVwZGF0ZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pOyAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2NvcmVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGlzaFVwZGF0ZXMoKSB7XHJcbiAgICAvLyBoZXJlLCB3ZSBzb3J0IG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxyXG4gICAgdGhpcy5faXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAtMTtcclxuICAgICAgICBpZihhLkRhdGUgPiBiLkRhdGUpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pXHJcbiAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuX2l0ZW1zXSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoY2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvQ2xhc3Nyb29tL1wiK2NsYXNzcm9vbS5pZCtcIlwiKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH0gXHJcblxyXG4gIGRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbil7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL1F1ZXN0aW9ucy9cIitxdWVzdGlvbi5pZCtcIlwiKVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJlZ2lzdGVyZWRVc2Vycyh1aWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0NsYXNzcm9vbS9cIitCYWNrZW5kU2VydmljZS5DSUQrXCIvTWVtYmVycy9cIit1aWQpXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUXVlc3Rpb25SZXF1ZXN0KHF1ZXN0aW9uOiBRdWVzdGlvbil7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL1JlcXVlc3RzL1wiK3F1ZXN0aW9uLmlkK1wiXCIpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRhZyh0YWc6IFRhZykge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnJlbW92ZShcIi9UYWdzL1wiK3RhZy5pZCtcIlwiKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgLypcclxuICBnZXRNeUNsYXNzcm9vbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XHJcbiAgICB9KS5zaGFyZSgpO1xyXG4gIH0qL1xyXG5cclxuXHJcbiAgICBcclxuLypcclxuICBlZGl0Q2xhc3Nyb29tKGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaW1hZ2VwYXRoOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb21zL1wiK2lkK1wiXCIse1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgaW1hZ2VwYXRoOiBpbWFnZXBhdGh9KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoaXMgQ2xhc3Nyb29tISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gIH1cclxuICBlZGl0RGVzY3JpcHRpb24oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKXtcclxuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvQ2xhc3Nyb29tcy9cIitpZCtcIlwiLHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoZSBkZXNjcmlwdGlvbiEnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7ICBcclxuICB9XHJcbiovXHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn0iXX0=