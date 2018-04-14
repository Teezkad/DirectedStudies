"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var fs = require("file-system");
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getFilename = function (path) {
        var parts = path.split('/');
        return parts[parts.length - 1];
    };
    UtilsService.prototype.documentsPath = function (filename) {
        return fs.knownFolders.documents().path + "/" + filename;
    };
    UtilsService = tslib_1.__decorate([
        core_1.Injectable()
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWlEO0FBQ2pELGdDQUFrQztBQUdsQztJQUFBO0lBVUEsQ0FBQztJQVJRLGtDQUFXLEdBQWxCLFVBQW1CLElBQVk7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLG9DQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ25DLE1BQU0sQ0FBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksU0FBSSxRQUFVLENBQUM7SUFDM0QsQ0FBQztJQVRVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FVeEI7SUFBRCxtQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmaWxlLXN5c3RlbSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgZ2V0RmlsZW5hbWUocGF0aDogc3RyaW5nKSB7XHJcbiAgICBsZXQgcGFydHMgPSBwYXRoLnNwbGl0KCcvJyk7XHJcbiAgICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG9jdW1lbnRzUGF0aChmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYCR7ZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGh9LyR7ZmlsZW5hbWV9YDtcclxuICB9XHJcbn1cclxuIl19