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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQTREO0FBSTVELHdEQUFxRDtBQUNyRCxzQ0FBaUQ7QUFFakQsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGlCQUFpQjtBQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsbUJBQW1CO0FBQ25CLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUd0QjtJQUNFLHdCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhCLFVBQUssR0FBc0MsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNELGNBQVMsR0FBcUIsRUFBRSxDQUFDO0lBSHZDLENBQUM7SUFLSSx5QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBa0JELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQXBCQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzthQWtCRCxVQUFpQixPQUFlO1lBQzlCLGdDQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRSxDQUFBO1FBQzdCLENBQUM7OztPQXBCQTtJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBa0JELFVBQWUsTUFBYztZQUMzQixnQ0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFrQkQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BcEJBO0lBRUQsc0JBQVcscUJBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFrQkQsVUFBZSxNQUFjO1lBQzNCLGdDQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQXBCQTtJQTlCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGNBQWMsQ0FvRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIsIENsYXNzcm9vbSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL3N0b3JlcyBVSURcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcbmNvbnN0IFVpZCA9IFwiVWlkXCI7XHJcbmNvbnN0IFVuYW1lID0gXCJuYW1lXCI7XHJcbi8vc3RvcmVzIGNsYXNzIElEXHJcbmNvbnN0IENJRCA9IFwiQ0lEXCI7XHJcbi8vc3RvcmVzIGNsYXNzIG5hbWVcclxuY29uc3QgQ25hbWUgPSBcIkNuYW1lXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICl7fVxyXG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8Q2xhc3Nyb29tPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICBcclxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8Q2xhc3Nyb29tPiA9IFtdO1xyXG4gIFxyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFVuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwibmFtZVwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgQ0lEKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJDSURcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENuYW1lKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJDbmFtZVwiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgVWlkKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJVaWRcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgVW5hbWUodGhlTmFtZTogc3RyaW5nKXtcclxuICAgIHNldFN0cmluZyhcIm5hbWVcIiwgdGhlTmFtZSApXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IENJRCh0aGVDSUQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDSURcIiwgdGhlQ0lEKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgQ25hbWUodGhlQ25hbWU6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJDbmFtZVwiLCB0aGVDbmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IFVpZCh0aGVVaWQ6IHN0cmluZyl7XHJcbiAgICBzZXRTdHJpbmcoXCJVaWRcIiwgdGhlVWlkKTtcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==