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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQW9GO0FBSXBGLHdEQUFxRDtBQUNyRCxzQ0FBaUQ7QUFFakQsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGlCQUFpQjtBQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsbUJBQW1CO0FBQ25CLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixpQkFBaUI7QUFDakIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLHVDQUF1QztBQUN2QyxJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDaEMsMkJBQTJCO0FBQzNCLElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQUVoQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFJaEI7SUFDRSx3QkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4QixVQUFLLEdBQXNDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzRCxjQUFTLEdBQXFCLEVBQUUsQ0FBQztJQUh2QyxDQUFDO0lBS0kseUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQWtDRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFrQ0QsVUFBaUIsT0FBZTtZQUM5QixnQ0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUUsQ0FBQTtRQUM3QixDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyxxQkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzthQWtDRCxVQUFlLE1BQWM7WUFDM0IsZ0NBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFrQ0QsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXBDQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQWtDRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyxxQkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzthQWtDRCxVQUFlLE1BQWM7WUFDM0IsZ0NBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BcENBO0lBRUQsc0JBQVcsNEJBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBa0NELFVBQXNCLGFBQXNCO1lBQzFDLGlDQUFVLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQXBDQTtJQUVELHNCQUFXLG9CQUFFO2FBQWI7WUFDRSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBa0NELFVBQWMsS0FBYztZQUMxQixpQ0FBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FwQ0E7SUFFRCxzQkFBVyw0QkFBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7YUFrQ0QsVUFBc0IsYUFBcUI7WUFDekMsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BcENBO0lBOUNVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHTyxhQUFNO09BRmIsY0FBYyxDQW9GMUI7SUFBRCxxQkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4gfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVXNlciwgQ2xhc3Nyb29tIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vc3RvcmVzIFVJRFxyXG5jb25zdCB0b2tlbktleSA9IFwidG9rZW5cIjtcclxuY29uc3QgVWlkID0gXCJVaWRcIjtcclxuY29uc3QgVW5hbWUgPSBcIm5hbWVcIjtcclxuLy9zdG9yZXMgY2xhc3MgSURcclxuY29uc3QgQ0lEID0gXCJDSURcIjtcclxuLy9zdG9yZXMgY2xhc3MgbmFtZVxyXG5jb25zdCBDbmFtZSA9IFwiQ25hbWVcIjtcclxuLy9zdG9yZXMgdG9waWMgaWRcclxuY29uc3QgVElEID0gXCJUSURcIjtcclxuLy9jaGVjayBpZiB1c2VyIGlzIGNyZWF0b3Igb2YgY2xhc3Nyb29tXHJcbmNvbnN0IGluc3RydWN0b3IgPSBcImluc3RydWN0b3JcIjtcclxuLy9zdG9yZSB1c2VyIHN0dWRlbnQgbnVtYmVyXHJcbmNvbnN0IHN0dWRlbnROdW0gPSBcInN0dWRlbnROdW1cIjtcclxuXHJcbmNvbnN0IFRBID0gXCJUQVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKXt9XHJcbiAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxDbGFzc3Jvb20+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gIFxyXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxDbGFzc3Jvb20+ID0gW107XHJcbiAgXHJcbiAgc3RhdGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgVW5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJuYW1lXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBDSUQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIkNJRFwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgVElEKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJUSURcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENuYW1lKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJDbmFtZVwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgVWlkKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJVaWRcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGluc3RydWN0b3IoKTogYm9vbGVhbntcclxuICAgIHJldHVybiBnZXRCb29sZWFuKFwiaW5zdHJ1Y3RvclwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgVEEoKTogYm9vbGVhbntcclxuICAgIHJldHVybiBnZXRCb29sZWFuKFwiVEFcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0dWRlbnROdW0oKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInN0dWRlbnROdW1cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgVW5hbWUodGhlTmFtZTogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIm5hbWVcIiwgdGhlTmFtZSApXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IENJRCh0aGVDSUQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDSURcIiwgdGhlQ0lEKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgVElEKHRoZVRJRDogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIlRJRFwiLCB0aGVUSUQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBDbmFtZSh0aGVDbmFtZTogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIkNuYW1lXCIsIHRoZUNuYW1lKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgVWlkKHRoZVVpZDogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIlVpZFwiLCB0aGVVaWQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBpbnN0cnVjdG9yKHRoZWluc3RydWN0b3I6IGJvb2xlYW4pe1xyXG4gICAgc2V0Qm9vbGVhbihcImluc3RydWN0b3JcIiwgdGhlaW5zdHJ1Y3Rvcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFRBKHRoZVRBOiBib29sZWFuKXtcclxuICAgIHNldEJvb2xlYW4oXCJUQVwiLCB0aGVUQSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHN0dWRlbnROdW0odGhlU3R1ZGVudE51bTogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJzdHVkZW50TnVtXCIsIHRoZVN0dWRlbnROdW0pO1xyXG4gIH1cclxuICAgXHJcbn1cclxuIl19