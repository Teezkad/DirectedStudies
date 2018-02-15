"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var core_1 = require("@angular/core");
//stores UID
var tokenKey = "token";
var Uname = "name";
//stores class ID
var CID = "CID";
//stores class name
var Cname = "Cname";
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
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQTREO0FBSTVELHdEQUFxRDtBQUNyRCxzQ0FBaUQ7QUFFakQsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDckIsaUJBQWlCO0FBQ2pCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsQixtQkFBbUI7QUFDbkIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBR3RCO0lBQ0Usd0JBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEIsVUFBSyxHQUFzQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0QsY0FBUyxHQUFxQixFQUFFLENBQUM7SUFIdkMsQ0FBQztJQUtJLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFjRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FoQkE7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFjRCxVQUFpQixPQUFlO1lBQzlCLGdDQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRSxDQUFBO1FBQzdCLENBQUM7OztPQWhCQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBY0QsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQWhCQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQWNELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQWhCQTtJQTFCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGNBQWMsQ0E2QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIsIENsYXNzcm9vbSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL3N0b3JlcyBVSURcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcblxyXG5jb25zdCBVbmFtZSA9IFwibmFtZVwiO1xyXG4vL3N0b3JlcyBjbGFzcyBJRFxyXG5jb25zdCBDSUQgPSBcIkNJRFwiO1xyXG4vL3N0b3JlcyBjbGFzcyBuYW1lXHJcbmNvbnN0IENuYW1lID0gXCJDbmFtZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICApe31cclxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENsYXNzcm9vbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PENsYXNzcm9vbT4gPSBbXTtcclxuICBcclxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBVbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIm5hbWVcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENJRCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ0lEXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBDbmFtZSgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ25hbWVcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgVW5hbWUodGhlTmFtZTogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIm5hbWVcIiwgdGhlTmFtZSApXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IENJRCh0aGVDSUQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDSURcIiwgdGhlQ0lEKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgQ25hbWUodGhlQ25hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDbmFtZVwiLCB0aGVDbmFtZSk7XHJcbiAgfVxyXG5cclxuICAgXHJcbn1cclxuIl19