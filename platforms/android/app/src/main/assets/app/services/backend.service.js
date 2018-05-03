"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var core_1 = require("@angular/core");
//stores UID
var tokenKey = "token";
var Uid = "Uid";
var Uname = "name";
//stores class ID
var CID = "CID";
//stores class name
var Cname = "Cname";
//stores topic id
var TID = "TID";
//check if user is creator of classroom
var instructor = "instructor";
//store user student number
var studentNum = "studentNum";
var TA = "TA";
var BackendService = /** @class */ (function () {
    function BackendService(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "Uname", {
        get: function () {
            return application_settings_1.getString("name");
        },
        set: function (theName) {
            application_settings_1.setString("name", theName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "CID", {
        get: function () {
            return application_settings_1.getString("CID");
        },
        set: function (theCID) {
            application_settings_1.setString("CID", theCID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "TID", {
        get: function () {
            return application_settings_1.getString("TID");
        },
        set: function (theTID) {
            application_settings_1.setString("TID", theTID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "Cname", {
        get: function () {
            return application_settings_1.getString("Cname");
        },
        set: function (theCname) {
            application_settings_1.setString("Cname", theCname);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "Uid", {
        get: function () {
            return application_settings_1.getString("Uid");
        },
        set: function (theUid) {
            application_settings_1.setString("Uid", theUid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "instructor", {
        get: function () {
            return application_settings_1.getBoolean("instructor");
        },
        set: function (theinstructor) {
            application_settings_1.setBoolean("instructor", theinstructor);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "TA", {
        get: function () {
            return application_settings_1.getBoolean("TA");
        },
        set: function (theTA) {
            application_settings_1.setBoolean("TA", theTA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "studentNum", {
        get: function () {
            return application_settings_1.getString("studentNum");
        },
        set: function (theStudentNum) {
            application_settings_1.setString("studentNum", theStudentNum);
        },
        enumerable: true,
        configurable: true
    });
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
