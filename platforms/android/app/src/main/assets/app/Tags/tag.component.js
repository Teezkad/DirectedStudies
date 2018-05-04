"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
        this.instructor = false;
        this.tag = new Tag();
        //this.create.id = 0;
        this.tag.name;
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
<<<<<<< HEAD
    tagComponent.prototype.onChange = function () {
        this.instructor = !this.instructor;
    };
    tagComponent = __decorate([
=======
    tagComponent = tslib_1.__decorate([
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
        core_1.Component({
            selector: "tag",
            moduleId: module.id,
            templateUrl: 'tag.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router])
    ], tagComponent);
    return tagComponent;
}());
exports.tagComponent = tagComponent;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXdDO0FBSXhDLHdDQUE0QztBQUU1QyxtRkFBaUY7QUFLakYsMENBQXVDO0FBSXZDLCtEQUE2RDtBQUs3RDtJQUFBO0lBS0EsQ0FBQztJQUFELFVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLGtCQUFHO0FBYWhCO0lBSUcsc0JBQW9CLGdCQUFrQyxFQUM3QyxlQUFnQyxFQUNoQyxNQUFjO1FBRkgscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRSxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxFQUFFLENBQUM7UUFDeEIsMENBQTBDO0lBRWpELENBQUM7SUFPTCw2QkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQ0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQVc7WUFFdEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE5QlksWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO2lEQU11QyxvQ0FBZ0I7WUFDNUIsMEJBQWU7WUFDeEIsZUFBTTtPQU5iLFlBQVksQ0ErQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXIsIFF1ZXN0aW9ufSBmcm9tICcuLi9tb2RlbHMvJztcclxuaW1wb3J0IHtDbGFzc3Jvb219IGZyb20gJy4uL21vZGVscy9DbGFzc3Jvb20ubW9kZWwnXHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsICB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFnIHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDSUQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBxdWVzdGlvbnM6IFF1ZXN0aW9uIFtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRhZ1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndGFnLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIHRhZ0NvbXBvbmVudHtcclxuXHJcbiAgIHB1YmxpYyB0YWcgOiBUYWc7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSBuZXcgVGFnKCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jcmVhdGUuaWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRhZy5uYW1lPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnRhZy5DSUQ9IEJhY2tlbmRTZXJ2aWNlLkNJRDtcclxuICAgICAgICAgICAgdGhpcy50YWcucXVlc3Rpb25zPSBbXTtcclxuICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZS5VSUQgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblxyXG5hZGRUYWcoKXtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFRhZyh0aGlzLnRhZy5uYW1lLCB0aGlzLnRhZy5DSUQsIEJhY2tlbmRTZXJ2aWNlLlVpZCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFnIGNyZWF0ZWQgXCIgKyB0aGlzLnRhZy5uYW1lKTtcclxuICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9icm93c2VcIl0pO1xyXG59ICAgIFxyXG59Il19
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
