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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFJNUMsbUZBQWlGO0FBUWhGO0lBT0csMkJBQW9CLGVBQWdDLEVBQ3hDLGdCQUFrQztRQUQxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUw5QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLCtCQUErQjtRQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUUsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBR04sa0NBQU0sR0FBTjtRQUFBLGlCQW1CRTtRQWxCRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUN2RyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUN4RSxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILGlHQUFpRztRQUNqRyx3R0FBd0c7UUFFeEcseUJBQXlCO1FBRXpCLGFBQWE7UUFFYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0Ysa0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUF0RFksaUJBQWlCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN2QyxDQUFDO3lDQVN1QywwQkFBZTtZQUN0QixvQ0FBZ0I7T0FScEMsaUJBQWlCLENBd0Q3QjtJQUFELHdCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL1VzZXIubW9kZWwnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2dmLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG4gXHJcbiBleHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnR7IFxyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIHJlZ2lzdGVyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmZpcnN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmxhc3ROYW1lID0gXCJcIjtcclxuICAgICAgICAvLyB0aGlzLnVzZXIuaW5zdHJ1Y3Rvcj0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLnByb2Zlc3NvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3Rvcj0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiBzaWduVXAoKSB7XHJcbiAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMucmVnaXN0ZXIuZmlyc3ROYW1lLCB0aGlzLnJlZ2lzdGVyLmxhc3ROYW1lLFxyXG4gICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0sIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3RvciwgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFVzZXIodGhpcy51c2VyLmVtYWlsLCB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSwgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSxcclxuICAgICAgLy8gICB0aGlzLnJlZ2lzdGVyLnN0dWRlbk51bSwgdGhpcy5yZWdpc3Rlci5pbnN0cnVjdG9yLCB0aGlzLnJlZ2lzdGVyLnByb2Zlc3NvcikudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgIC8vICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgLy8gICAgICB9KSAgIFxyXG4gICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydob21lJ10pO1xyXG4gIH1cclxuXHJcblxyXG4gZ29CYWNrKCl7XHJcbiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG5cclxuIH1cclxuXHJcbiB9XHJcblxyXG4gICAgIl19