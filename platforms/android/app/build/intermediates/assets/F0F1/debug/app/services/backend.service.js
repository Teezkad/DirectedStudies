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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQW9GO0FBSXBGLHdEQUFxRDtBQUNyRCxzQ0FBaUQ7QUFFakQsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGlCQUFpQjtBQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsbUJBQW1CO0FBQ25CLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixpQkFBaUI7QUFDakIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLHVDQUF1QztBQUN2QyxJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDaEMsMkJBQTJCO0FBQzNCLElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQUloQztJQUNFLHdCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhCLFVBQUssR0FBc0MsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNELGNBQVMsR0FBcUIsRUFBRSxDQUFDO0lBSHZDLENBQUM7SUFLSSx5QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBOEJELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQWhDQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzthQThCRCxVQUFpQixPQUFlO1lBQzlCLGdDQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRSxDQUFBO1FBQzdCLENBQUM7OztPQWhDQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBOEJELFVBQWUsTUFBYztZQUMzQixnQ0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FoQ0E7SUFFRCxzQkFBVyxxQkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzthQThCRCxVQUFlLE1BQWM7WUFDM0IsZ0NBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BaENBO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBOEJELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQWhDQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBOEJELFVBQWUsTUFBYztZQUMzQixnQ0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FoQ0E7SUFFRCxzQkFBVyw0QkFBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUE4QkQsVUFBc0IsYUFBc0I7WUFDMUMsaUNBQVUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BaENBO0lBRUQsc0JBQVcsNEJBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBOEJELFVBQXNCLGFBQXFCO1lBQ3pDLGdDQUFTLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQWhDQTtJQTFDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGNBQWMsQ0E0RTFCO0lBQUQscUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCBnZXRCb29sZWFuLCBzZXRCb29sZWFuIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIsIENsYXNzcm9vbSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL3N0b3JlcyBVSURcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcbmNvbnN0IFVpZCA9IFwiVWlkXCI7XHJcbmNvbnN0IFVuYW1lID0gXCJuYW1lXCI7XHJcbi8vc3RvcmVzIGNsYXNzIElEXHJcbmNvbnN0IENJRCA9IFwiQ0lEXCI7XHJcbi8vc3RvcmVzIGNsYXNzIG5hbWVcclxuY29uc3QgQ25hbWUgPSBcIkNuYW1lXCI7XHJcbi8vc3RvcmVzIHRvcGljIGlkXHJcbmNvbnN0IFRJRCA9IFwiVElEXCI7XHJcbi8vY2hlY2sgaWYgdXNlciBpcyBjcmVhdG9yIG9mIGNsYXNzcm9vbVxyXG5jb25zdCBpbnN0cnVjdG9yID0gXCJpbnN0cnVjdG9yXCI7XHJcbi8vc3RvcmUgdXNlciBzdHVkZW50IG51bWJlclxyXG5jb25zdCBzdHVkZW50TnVtID0gXCJzdHVkZW50TnVtXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICApe31cclxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENsYXNzcm9vbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PENsYXNzcm9vbT4gPSBbXTtcclxuICBcclxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBVbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIm5hbWVcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENJRCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ0lEXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBUSUQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIlRJRFwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgQ25hbWUoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIkNuYW1lXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBVaWQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIlVpZFwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW5zdHJ1Y3RvcigpOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGdldEJvb2xlYW4oXCJpbnN0cnVjdG9yXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHVkZW50TnVtKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJzdHVkZW50TnVtXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0aGVUb2tlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFVuYW1lKHRoZU5hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJuYW1lXCIsIHRoZU5hbWUgKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBDSUQodGhlQ0lEOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwiQ0lEXCIsIHRoZUNJRCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFRJRCh0aGVUSUQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJUSURcIiwgdGhlVElEKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgQ25hbWUodGhlQ25hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDbmFtZVwiLCB0aGVDbmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFVpZCh0aGVVaWQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJVaWRcIiwgdGhlVWlkKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgaW5zdHJ1Y3Rvcih0aGVpbnN0cnVjdG9yOiBib29sZWFuKXtcclxuICAgIHNldEJvb2xlYW4oXCJpbnN0cnVjdG9yXCIsIHRoZWluc3RydWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBzdHVkZW50TnVtKHRoZVN0dWRlbnROdW06IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKFwic3R1ZGVudE51bVwiLCB0aGVTdHVkZW50TnVtKTtcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==