"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var Tag = /** @class */ (function () {
    function Tag() {
        this.Cname = backend_service_1.BackendService.Cname;
    }
    return Tag;
}());
exports.Tag = Tag;
var tagComponent = /** @class */ (function () {
    function tagComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.tag = new Tag();
        //this.create.id = 0;
        this.tag.name = "";
        this.tag.CID = backend_service_1.BackendService.CID;
        this.tag.questions = [];
        // this.create.UID = BackendService.token;
    }
    tagComponent.prototype.addTag = function () {
        var _this = this;
        this.firebaseService.addTag(this.tag.name, this.tag.CID, backend_service_1.BackendService.Uid, this.instructor).then(function (message) {
            alert(message);
            console.log("Tag created " + _this.tag.name);
        });
        this.routerExtensions.navigate(["/browse"]);
    };
    tagComponent.prototype.onChange = function () {
        this.instructor = !this.instructor;
    };
    tagComponent = __decorate([
        core_1.Component({
            selector: "tag",
            moduleId: module.id,
            templateUrl: 'tag.component.html'
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router])
    ], tagComponent);
    return tagComponent;
}());
exports.tagComponent = tagComponent;
