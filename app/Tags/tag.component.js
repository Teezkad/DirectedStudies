"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var Tag = /** @class */ (function () {
    function Tag() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFJeEMsd0NBQTRDO0FBRTVDLG1GQUFpRjtBQUtqRiwwQ0FBdUM7QUFJdkMsK0RBQTZEO0FBSzdEO0lBQUE7SUFLQSxDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksa0JBQUc7QUFhaEI7SUFLRyxzQkFBb0IsZ0JBQWtDLEVBQzdDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGSCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWxCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFFLGdDQUFjLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLEVBQUUsQ0FBQztRQUN4QiwwQ0FBMEM7SUFFakQsQ0FBQztJQU9MLDZCQUFNLEdBQU47UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdDQUFjLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBRXZHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFuQ0EsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQU91QyxvQ0FBZ0I7WUFDNUIsMEJBQWU7WUFDeEIsZUFBTTtPQVBiLFlBQVksQ0FvQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXIsIFF1ZXN0aW9ufSBmcm9tICcuLi9tb2RlbHMvJztcclxuaW1wb3J0IHtDbGFzc3Jvb219IGZyb20gJy4uL21vZGVscy9DbGFzc3Jvb20ubW9kZWwnXHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsICB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFnIHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDSUQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBxdWVzdGlvbnM6IFF1ZXN0aW9uIFtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRhZ1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndGFnLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIHRhZ0NvbXBvbmVudHtcclxuXHJcbiAgIHB1YmxpYyB0YWcgOiBUYWc7XHJcbiAgIHB1YmxpYyBpbnN0cnVjdG9yOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGFnID0gbmV3IFRhZygpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3JlYXRlLmlkID0gMDtcclxuICAgICAgICAgICAgdGhpcy50YWcubmFtZT0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy50YWcuQ0lEPSBCYWNrZW5kU2VydmljZS5DSUQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFnLnF1ZXN0aW9ucz0gW107XHJcbiAgICAgICAgICAgLy8gdGhpcy5jcmVhdGUuVUlEID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cclxuYWRkVGFnKCl7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRUYWcodGhpcy50YWcubmFtZSwgdGhpcy50YWcuQ0lELCBCYWNrZW5kU2VydmljZS5VaWQsdGhpcy5pbnN0cnVjdG9yICkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFnIGNyZWF0ZWQgXCIgKyB0aGlzLnRhZy5uYW1lKTtcclxuICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9icm93c2VcIl0pO1xyXG59ICAgIFxyXG5cclxucHVibGljIG9uQ2hhbmdlKCl7XHJcbiAgICB0aGlzLmluc3RydWN0b3IgPSAhdGhpcy5pbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbn0iXX0=