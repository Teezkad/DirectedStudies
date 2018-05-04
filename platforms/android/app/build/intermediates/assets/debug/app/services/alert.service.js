"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUEwRDtBQUUxRCx3Q0FBdUM7QUFHdkM7SUFJSSxzQkFBb0IsTUFBYztRQUFsQyxpQkFhQztRQWJtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFCLFlBQU8sR0FBRyxJQUFJLGlCQUFPLEVBQU8sQ0FBQztRQUM3Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFHdEMsc0NBQXNDO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLHlDQUF5QztvQkFDekMsS0FBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztnQkFDM0MsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixjQUFjO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSx5QkFBaUM7UUFBakMsMENBQUEsRUFBQSxpQ0FBaUM7UUFDdEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLE9BQWUsRUFBRSx5QkFBaUM7UUFBakMsMENBQUEsRUFBQSxpQ0FBaUM7UUFDcEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUEvQlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO2lEQUttQixlQUFNO09BSnpCLFlBQVksQ0FnQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHByaXZhdGUga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBrZWVwIGZvciBhIHNpbmdsZSBsb2NhdGlvbiBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgYWxlcnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoeyB0eXBlOiAnc3VjY2VzcycsIHRleHQ6IG1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ2Vycm9yJywgdGV4dDogbWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxufSJdfQ==