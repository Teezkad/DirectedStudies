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
    FirebaseService1.prototype.delete = function (classroom) {
        return firebase.remove("/Classroom/" + classroom.id + "")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyZWJhc2Uuc2VydmljZS4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELHFEQUFtRDtBQUNuRCx1REFBMEQ7QUFDMUQsOENBQTJDO0FBQzNDLHdEQUFxRDtBQUdyRCxtQ0FBaUM7QUFHakM7SUFDRSwwQkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4QixVQUFLLEdBQXNDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzRCxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBSmxCLENBQUM7SUFRSCx1Q0FBWSxHQUFaLFVBQWEsR0FBVyxFQUFFLEdBQVc7UUFBckMsaUJBYUM7UUFaQyxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBYTtZQUNsQyxJQUFJLElBQUksR0FBRyxRQUFRLEdBQUMsR0FBRyxHQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNWLElBQUksTUFBTSxHQUFTLE1BQU8sQ0FBQztvQkFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDekUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7WUFDRixRQUFRLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLE1BQUksSUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxD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LENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsTUFBTSxTQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdELHVDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaElVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUdPLGFBQU07T0FGYixnQkFBZ0IsQ0FpSTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpJRCxJQWlJQztBQWpJWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4uL3RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZTEge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICApe31cclxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENsYXNzcm9vbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PENsYXNzcm9vbT4gPSBbXTtcclxuICBwcml2YXRlIF9pdGVtcyA9IFtdO1xyXG5cclxuXHJcblxyXG4gIGdldFVzZXJTY29yZSh1aWQ6IHN0cmluZywgdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpPT57XHJcbiAgICAgIGxldCBwYXRoID0gJ1VzZXJzLycrdWlkKycvTXlTY29yZXMnO1xyXG4gICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnNjb3JlU25hcHNob3Qoc25hcHNob3QudmFsdWUsIHRpZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gZmlyZWJhc2VzZXJ2aWNlIHVzZXIgc2NvcmUgaXNcIiArSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgfSkuc2hhcmUoKTsgICAgICBcclxuICB9XHJcblxyXG4gIHNjb3JlU25hcHNob3QoZGF0YTogYW55LCB0aWQ6c3RyaW5nKSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XHJcblxyXG4gICAgICAgIGlmKHRpZCA9PSByZXN1bHQuVElEKXtcclxuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuICB9XHJcblxyXG4gIGdldFRvcGljUXVlc3Rpb25zKHRpZDogc3RyaW5nKXtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICdRdWVzdGlvbnMvJztcclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5xdWVzdGlvblNuYXBzaG90cyhzbmFwc2hvdC52YWx1ZSwgdGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIGZpcmViYXNlc2VydmljZVwiICtKU09OLnN0cmluZ2lmeShyZXN1bHRzKSlcclxuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xyXG4gICAgfSkuc2hhcmUoKTsgXHJcblxyXG4gIH1cclxuXHJcbiAgcXVlc3Rpb25TbmFwc2hvdHMoZGF0YTogYW55LCB0aWQ6IHN0cmluZykge1xyXG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxyXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4gICAgICAgIGlmKHRpZCA9PT0gcmVzdWx0LlRvcGljSUQpe1xyXG4gICAgICAgICAgdGhpcy5fYWxsSXRlbXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGVRdWVzdGlvblJlcXVlc3QocXVlc3Rpb246IHN0cmluZyl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFxyXG4gICAgICBcIi9SZXF1ZXN0cy9cIitxdWVzdGlvbitcIi9cIixcclxuICAgIHtcIkZpeGVkXCI6IHRydWVcclxuICB9KVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdDphbnkpe1xyXG4gICAgICAgIHJldHVybiAnUXVlc3Rpb24gVXBsb2FkZWQnO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gXHJcbiAgZGVsZXRlKGNsYXNzcm9vbTogQ2xhc3Nyb29tKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0NsYXNzcm9vbS9cIitjbGFzc3Jvb20uaWQrXCJcIilcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9IFxyXG5cclxuICBkZWxldGVRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb24pe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnJlbW92ZShcIi9RdWVzdGlvbnMvXCIrcXVlc3Rpb24uaWQrXCJcIilcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSZWdpc3RlcmVkVXNlcnModWlkOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnJlbW92ZShcIi9DbGFzc3Jvb20vXCIrQmFja2VuZFNlcnZpY2UuQ0lEK1wiL01lbWJlcnMvXCIrdWlkKVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVF1ZXN0aW9uUmVxdWVzdChxdWVzdGlvbjogUXVlc3Rpb24pe1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnJlbW92ZShcIi9SZXF1ZXN0cy9cIitxdWVzdGlvbi5pZCtcIlwiKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUYWcodGFnOiBUYWcpIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvVGFncy9cIit0YWcuaWQrXCJcIilcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9IFxyXG5cclxuICBwdWJsaXNoVXBkYXRlcygpIHtcclxuICAgIC8vIGhlcmUsIHdlIHNvcnQgbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXHJcbiAgICB0aGlzLl9pdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIGlmKGEuRGF0ZSA8IGIuRGF0ZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmKGEuRGF0ZSA+IGIuRGF0ZSkgcmV0dXJuIDE7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSlcclxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5faXRlbXNdKTtcclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59Il19