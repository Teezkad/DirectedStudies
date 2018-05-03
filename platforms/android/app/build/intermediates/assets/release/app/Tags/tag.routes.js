"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tag_component_1 = require("./tag.component");
var routes = [
    { path: "", component: tag_component_1.tagComponent },
];
var tagRouting = /** @class */ (function () {
    function tagRouting() {
    }
    tagRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], tagRouting);
    return tagRouting;
}());
exports.tagRouting = tagRouting;
