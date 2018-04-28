"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.message = "";
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
        if (this.password1 == this.register.password) {
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
            this.routerExtensions.navigate(['/login']);
        }
        else {
            this.message = "Passwords Do Not Match";
        }
    };
    RegisterComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(['/login']);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gf-register',
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFJNUMsbUZBQWlGO0FBUWhGO0lBU0csMkJBQW9CLGVBQWdDLEVBQ3hDLGdCQUFrQztRQUQxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVA5QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFbEIsWUFBTyxHQUFHLEVBQUUsQ0FBRTtRQU1qQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDeEIsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBRS9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRSxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFHTixrQ0FBTSxHQUFOO1FBQUEsaUJBeUJFO1FBeEJELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBRTdDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQ3ZHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUN4RSxJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUVoQyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztnQkFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxpR0FBaUc7WUFDakcsd0dBQXdHO1lBRXhHLHlCQUF5QjtZQUV6QixhQUFhO1lBRWIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFN0MsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUdGLGtDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBOURZLGlCQUFpQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQzt5Q0FXdUMsMEJBQWU7WUFDdEIsb0NBQWdCO09BVnBDLGlCQUFpQixDQWdFN0I7SUFBRCx3QkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy9Vc2VyLm1vZGVsJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdnZi1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuIFxyXG4gZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50eyBcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICByZWdpc3RlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQxO1xyXG4gICAgcHVibGljIG1lc3NhZ2UgPSBcIlwiIDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmZpcnN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmxhc3ROYW1lID0gXCJcIjtcclxuICAgICAgICAvLyB0aGlzLnVzZXIuaW5zdHJ1Y3Rvcj0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLnByb2Zlc3NvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3Rvcj0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiBzaWduVXAoKSB7XHJcbiAgaWYodGhpcy5wYXNzd29yZDEgPT0gdGhpcy5yZWdpc3Rlci5wYXNzd29yZCl7XHJcblxyXG4gIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlciwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSwgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSxcclxuICAgIHRoaXMucmVnaXN0ZXIuc3R1ZGVuTnVtLCB0aGlzLnJlZ2lzdGVyLmluc3RydWN0b3IsIHRoaXMucmVnaXN0ZXIucHJvZmVzc29yKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRVc2VyKHRoaXMudXNlci5lbWFpbCwgdGhpcy5yZWdpc3Rlci5maXJzdE5hbWUsIHRoaXMucmVnaXN0ZXIubGFzdE5hbWUsXHJcbiAgICAgIC8vICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0sIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3RvciwgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAvLyAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgIC8vICAgICAgfSkgICBcclxuICAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBcIlBhc3N3b3JkcyBEbyBOb3QgTWF0Y2hcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIGdvQmFjaygpe1xyXG4gIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuXHJcbiB9XHJcblxyXG4gfVxyXG5cclxuICAgICJdfQ==