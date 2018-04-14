"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var User_model_1 = require("../models/User.model");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = false;
        this.isAuthenticating = false;
        this.user = new User_model_1.User();
        this.user.email = "";
        this.user.password = "";
        // this.user.firstName = "";
        // this.user.lastName = "";
        // this.user.instructor= false;
        // this.user.professor = false;
        this.register = new User_model_1.User();
        this.register.email = "";
        this.register.password = "";
        this.register.firstName = "";
        this.register.lastName = "";
        this.register.studenNum = "";
        this.register.instructor = false;
        this.register.professor = false;
    }
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user, this.user.email, this.register.firstName, this.register.lastName, this.register.studenNum, this.register.instructor, this.register.professor)
            .then(function () {
            _this.isAuthenticating = false;
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
        // this.firebaseService.addUser(this.user.email, this.register.firstName, this.register.lastName,
        //   this.register.studenNum, this.register.instructor, this.register.professor).then((message:any) => {
        //        alert(message);
        //      })   
        this.routerExtensions.navigate(['home']);
    };
    RegisterComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(['/login']);
    };
    RegisterComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gf-register',
            templateUrl: 'register.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF3QztBQUV4QyxtREFBMEM7QUFDMUMsd0NBQTRDO0FBSTVDLG1GQUFpRjtBQVFoRjtJQU9HLDJCQUFvQixlQUFnQyxFQUN4QyxnQkFBa0M7UUFEMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMOUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFFL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFFLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUdOLGtDQUFNLEdBQU47UUFBQSxpQkFtQkU7UUFsQkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDdkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDeEUsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVoQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxPQUFXO1lBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxpR0FBaUc7UUFDakcsd0dBQXdHO1FBRXhHLHlCQUF5QjtRQUV6QixhQUFhO1FBRWIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdGLGtDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBdERZLGlCQUFpQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQztpREFTdUMsMEJBQWU7WUFDdEIsb0NBQWdCO09BUnBDLGlCQUFpQixDQXdEN0I7SUFBRCx3QkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy9Vc2VyLm1vZGVsJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdnZi1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuIFxyXG4gZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50eyBcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICByZWdpc3RlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5maXJzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5sYXN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmluc3RydWN0b3I9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5wcm9mZXNzb3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5maXJzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIubGFzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIuc3R1ZGVuTnVtID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmluc3RydWN0b3I9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIucHJvZmVzc29yID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gc2lnblVwKCkge1xyXG4gIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlciwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSwgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSxcclxuICAgIHRoaXMucmVnaXN0ZXIuc3R1ZGVuTnVtLCB0aGlzLnJlZ2lzdGVyLmluc3RydWN0b3IsIHRoaXMucmVnaXN0ZXIucHJvZmVzc29yKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRVc2VyKHRoaXMudXNlci5lbWFpbCwgdGhpcy5yZWdpc3Rlci5maXJzdE5hbWUsIHRoaXMucmVnaXN0ZXIubGFzdE5hbWUsXHJcbiAgICAgIC8vICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0sIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3RvciwgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAvLyAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgIC8vICAgICAgfSkgICBcclxuICAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnaG9tZSddKTtcclxuICB9XHJcblxyXG5cclxuIGdvQmFjaygpe1xyXG4gIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuXHJcbiB9XHJcblxyXG4gfVxyXG5cclxuICAgICJdfQ==