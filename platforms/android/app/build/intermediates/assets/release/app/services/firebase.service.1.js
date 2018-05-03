"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var FirebaseService1 = /** @class */ (function () {
    function FirebaseService1(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
        this._items = [];
    }
    FirebaseService1.prototype.getUserScore = function (uid, tid) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Users/' + uid + '/MyScores';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.scoreSnapshot(snapshot.value, tid);
                    console.log("From firebaseservice user score is" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService1.prototype.scoreSnapshot = function (data, tid) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (tid == result.TID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService1.prototype.getTopicQuestions = function (tid) {
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
    FirebaseService1.prototype.questionSnapshots = function (data, tid) {
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
    FirebaseService1.prototype.updateQuestionRequest = function (question) {
        return firebase.update("/Requests/" + question + "/", { "Fixed": true
        })
            .then(function (result) {
            return 'Question Uploaded';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService1.prototype.fixedQuestionRequest = function (question, questionName, options) {
        return firebase.update("/Requests/" + question + "/", {
            "Option": options,
            "Name": questionName,
            "Fixed": false
        })
            .then(function (result) {
            return 'Request Fix Uploaded';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService1.prototype.messageSeen = function (mid) {
        return firebase.update("/Messages/" + mid + "/", {
            "Seen": false
        })
            .then(function (result) {
            return 'Request Fix Uploaded';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService1.prototype.getTAList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "Members";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var result = Object;
                    var results = _this.TASnapshot(snapshot.value);
                    console.log("From firebaseservice TA is" + JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService1.prototype.TASnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (result.UID == backend_service_1.BackendService.token && result.CID == backend_service_1.BackendService.CID) {
                    this._allItems.push(result);
                }
            }
            // this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService1.prototype.delete = function (classroom) {
        return firebase.remove("/Classroom/" + classroom.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteMyclass = function (classroom) {
        return firebase.remove("/Users/" + backend_service_1.BackendService.Uid + "/MyClasses/" + classroom.id)
            .catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteQuestion = function (question) {
        return firebase.remove("/Questions/" + question.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteRegisteredUsers = function (uid) {
        return firebase.remove("/Classroom/" + backend_service_1.BackendService.CID + "/Members/" + uid)
            .catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteQuestionRequest = function (question) {
        return firebase.remove("/Requests/" + question.id + "").catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteMessage = function (mid) {
        return firebase.remove("/Messages/" + mid + "").catch(this.handleErrors);
    };
    FirebaseService1.prototype.deleteTag = function (tag) {
        return firebase.remove("/Tags/" + tag.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService1.prototype.publishUpdates = function () {
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
    FirebaseService1.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    FirebaseService1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService1);
    return FirebaseService1;
}());
exports.FirebaseService1 = FirebaseService1;
