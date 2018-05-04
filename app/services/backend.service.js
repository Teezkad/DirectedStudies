"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    BackendService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFvRjtBQUlwRix3REFBcUQ7QUFDckQsc0NBQWlEO0FBRWpELFlBQVk7QUFDWixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDekIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUNyQixpQkFBaUI7QUFDakIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLG1CQUFtQjtBQUNuQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsaUJBQWlCO0FBQ2pCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsQix1Q0FBdUM7QUFDdkMsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ2hDLDJCQUEyQjtBQUMzQixJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFFaEMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBSWhCO0lBQ0Usd0JBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEIsVUFBSyxHQUFzQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0QsY0FBUyxHQUFxQixFQUFFLENBQUM7SUFIdkMsQ0FBQztJQUtJLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFrQ0QsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO2FBa0NELFVBQWlCLE9BQWU7WUFDOUIsZ0NBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUE7UUFDN0IsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFrQ0QsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXBDQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBa0NELFVBQWUsTUFBYztZQUMzQixnQ0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFrQ0QsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFrQ0QsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXBDQTtJQUVELHNCQUFXLDRCQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLGlDQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQzthQWtDRCxVQUFzQixhQUFzQjtZQUMxQyxpQ0FBVSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyxvQkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLGlDQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQzthQWtDRCxVQUFjLEtBQWM7WUFDMUIsaUNBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcsNEJBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBa0NELFVBQXNCLGFBQXFCO1lBQ3pDLGdDQUFTLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQXBDQTtJQTlDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7aURBR08sYUFBTTtPQUZiLGNBQWMsQ0FvRjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCBnZXRCb29sZWFuLCBzZXRCb29sZWFuIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIsIENsYXNzcm9vbSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL3N0b3JlcyBVSURcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcbmNvbnN0IFVpZCA9IFwiVWlkXCI7XHJcbmNvbnN0IFVuYW1lID0gXCJuYW1lXCI7XHJcbi8vc3RvcmVzIGNsYXNzIElEXHJcbmNvbnN0IENJRCA9IFwiQ0lEXCI7XHJcbi8vc3RvcmVzIGNsYXNzIG5hbWVcclxuY29uc3QgQ25hbWUgPSBcIkNuYW1lXCI7XHJcbi8vc3RvcmVzIHRvcGljIGlkXHJcbmNvbnN0IFRJRCA9IFwiVElEXCI7XHJcbi8vY2hlY2sgaWYgdXNlciBpcyBjcmVhdG9yIG9mIGNsYXNzcm9vbVxyXG5jb25zdCBpbnN0cnVjdG9yID0gXCJpbnN0cnVjdG9yXCI7XHJcbi8vc3RvcmUgdXNlciBzdHVkZW50IG51bWJlclxyXG5jb25zdCBzdHVkZW50TnVtID0gXCJzdHVkZW50TnVtXCI7XHJcblxyXG5jb25zdCBUQSA9IFwiVEFcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICl7fVxyXG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8Q2xhc3Nyb29tPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICBcclxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8Q2xhc3Nyb29tPiA9IFtdO1xyXG4gIFxyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFVuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwibmFtZVwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgQ0lEKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJDSURcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFRJRCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVElEXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBDbmFtZSgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ25hbWVcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFVpZCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVWlkXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbnN0cnVjdG9yKCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImluc3RydWN0b3JcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFRBKCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZ2V0Qm9vbGVhbihcIlRBXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHVkZW50TnVtKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJzdHVkZW50TnVtXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0aGVUb2tlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFVuYW1lKHRoZU5hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJuYW1lXCIsIHRoZU5hbWUgKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBDSUQodGhlQ0lEOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwiQ0lEXCIsIHRoZUNJRCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFRJRCh0aGVUSUQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJUSURcIiwgdGhlVElEKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgQ25hbWUodGhlQ25hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDbmFtZVwiLCB0aGVDbmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFVpZCh0aGVVaWQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJVaWRcIiwgdGhlVWlkKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgaW5zdHJ1Y3Rvcih0aGVpbnN0cnVjdG9yOiBib29sZWFuKXtcclxuICAgIHNldEJvb2xlYW4oXCJpbnN0cnVjdG9yXCIsIHRoZWluc3RydWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBUQSh0aGVUQTogYm9vbGVhbil7XHJcbiAgICBzZXRCb29sZWFuKFwiVEFcIiwgdGhlVEEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBzdHVkZW50TnVtKHRoZVN0dWRlbnROdW06IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKFwic3R1ZGVudE51bVwiLCB0aGVTdHVkZW50TnVtKTtcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
