"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    UtilsService = __decorate([
        core_1.Injectable()
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsZ0NBQWtDO0FBR2xDO0lBQUE7SUFVQSxDQUFDO0lBUlEsa0NBQVcsR0FBbEIsVUFBbUIsSUFBWTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsTUFBTSxDQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxTQUFJLFFBQVUsQ0FBQztJQUMzRCxDQUFDO0lBVFUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO09BQ0EsWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZpbGUtc3lzdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBnZXRGaWxlbmFtZShwYXRoOiBzdHJpbmcpIHtcclxuICAgIGxldCBwYXJ0cyA9IHBhdGguc3BsaXQoJy8nKTtcclxuICAgIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb2N1bWVudHNQYXRoKGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgJHtmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aH0vJHtmaWxlbmFtZX1gO1xyXG4gIH1cclxufVxyXG4iXX0=