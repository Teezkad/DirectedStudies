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
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQTREO0FBSTVELHdEQUFxRDtBQUNyRCxzQ0FBaUQ7QUFFakQsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGlCQUFpQjtBQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsbUJBQW1CO0FBQ25CLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixpQkFBaUI7QUFDakIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBSWxCO0lBQ0Usd0JBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEIsVUFBSyxHQUFzQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0QsY0FBUyxHQUFxQixFQUFFLENBQUM7SUFIdkMsQ0FBQztJQUtJLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFzQkQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BeEJBO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO2FBc0JELFVBQWlCLE9BQWU7WUFDOUIsZ0NBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUE7UUFDN0IsQ0FBQzs7O09BeEJBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFzQkQsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXhCQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBc0JELFVBQWUsTUFBYztZQUMzQixnQ0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0F4QkE7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFzQkQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BeEJBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFzQkQsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXhCQTtJQWxDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGNBQWMsQ0E0RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIsIENsYXNzcm9vbSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL3N0b3JlcyBVSURcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcbmNvbnN0IFVpZCA9IFwiVWlkXCI7XHJcbmNvbnN0IFVuYW1lID0gXCJuYW1lXCI7XHJcbi8vc3RvcmVzIGNsYXNzIElEXHJcbmNvbnN0IENJRCA9IFwiQ0lEXCI7XHJcbi8vc3RvcmVzIGNsYXNzIG5hbWVcclxuY29uc3QgQ25hbWUgPSBcIkNuYW1lXCI7XHJcbi8vc3RvcmVzIHRvcGljIGlkXHJcbmNvbnN0IFRJRCA9IFwiVElEXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICApe31cclxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENsYXNzcm9vbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PENsYXNzcm9vbT4gPSBbXTtcclxuICBcclxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBVbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIm5hbWVcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENJRCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ0lEXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBUSUQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIlRJRFwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgQ25hbWUoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIkNuYW1lXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBVaWQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcIlVpZFwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdGhlVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBVbmFtZSh0aGVOYW1lOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwibmFtZVwiLCB0aGVOYW1lIClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgQ0lEKHRoZUNJRDogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIkNJRFwiLCB0aGVDSUQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBUSUQodGhlVElEOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwiVElEXCIsIHRoZVRJRCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IENuYW1lKHRoZUNuYW1lOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwiQ25hbWVcIiwgdGhlQ25hbWUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBVaWQodGhlVWlkOiBzdHJpbmcpe1xyXG4gICAgc2V0U3RyaW5nKFwiVWlkXCIsIHRoZVVpZCk7XHJcbiAgfVxyXG4gICBcclxufVxyXG4iXX0=