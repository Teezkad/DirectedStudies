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
