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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFJeEMsd0NBQTRDO0FBRTVDLG1GQUFpRjtBQUtqRiwwQ0FBdUM7QUFJdkMsK0RBQTZEO0FBSzdEO0lBQUE7UUFLVyxVQUFLLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUFELFVBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGtCQUFHO0FBY2hCO0lBS0csc0JBQW9CLGdCQUFrQyxFQUM3QyxlQUFnQyxFQUNoQyxNQUFjO1FBRkgscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRSxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxFQUFFLENBQUM7UUFDeEIsMENBQTBDO0lBRWpELENBQUM7SUFPTCw2QkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQ0FBYyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztZQUV2RyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBbkNBLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FPdUMsb0NBQWdCO1lBQzVCLDBCQUFlO1lBQ3hCLGVBQU07T0FQYixZQUFZLENBb0N4QjtJQUFELG1CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyLCBRdWVzdGlvbn0gZnJvbSAnLi4vbW9kZWxzLyc7XHJcbmltcG9ydCB7Q2xhc3Nyb29tfSBmcm9tICcuLi9tb2RlbHMvQ2xhc3Nyb29tLm1vZGVsJ1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCAgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XHJcbmltcG9ydCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhZyB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ0lEOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBRdWVzdGlvbiBbXTtcclxuICAgIHB1YmxpYyBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRhZ1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndGFnLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIHRhZ0NvbXBvbmVudHtcclxuXHJcbiAgIHB1YmxpYyB0YWcgOiBUYWc7XHJcbiAgIHB1YmxpYyBpbnN0cnVjdG9yOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGFnID0gbmV3IFRhZygpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3JlYXRlLmlkID0gMDtcclxuICAgICAgICAgICAgdGhpcy50YWcubmFtZT0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy50YWcuQ0lEPSBCYWNrZW5kU2VydmljZS5DSUQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFnLnF1ZXN0aW9ucz0gW107XHJcbiAgICAgICAgICAgLy8gdGhpcy5jcmVhdGUuVUlEID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cclxuYWRkVGFnKCl7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRUYWcodGhpcy50YWcubmFtZSwgdGhpcy50YWcuQ0lELCBCYWNrZW5kU2VydmljZS5VaWQsdGhpcy5pbnN0cnVjdG9yICkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFnIGNyZWF0ZWQgXCIgKyB0aGlzLnRhZy5uYW1lKTtcclxuICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9icm93c2VcIl0pO1xyXG59ICAgIFxyXG5cclxucHVibGljIG9uQ2hhbmdlKCl7XHJcbiAgICB0aGlzLmluc3RydWN0b3IgPSAhdGhpcy5pbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbn0iXX0=