"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_model_1 = require("../models/User.model");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new User_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (services_1.BackendService.isLoggedIn()) {
            this.routerExtensions.navigate(['/home']);
        }
    };
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
    };
    LoginComponent.prototype.register = function () {
        this.routerExtensions.navigate(['/register']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isAuthenticating = true;
        var id = firebase.getCurrentUser;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            console.log("My uid is" + services_1.BackendService.token);
            console.log("Login successful");
            console.log("Login id is" + id);
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    //   forgotPassword() {
    //     prompt({
    //       title: "Forgot Password",
    //       message: "Enter the email address you used to register for Giftler to reset your password.",
    //       defaultText: "",
    //       okButtonText: "Ok",
    //       cancelButtonText: "Cancel"
    //     }).then((data) => {
    //       if (data.result) {
    //         this.firebaseService.resetPassword(data.text.trim())
    //           .then((result:any) => {
    //             if(result){
    //               alert(result);
    //             }
    //          });
    //       }
    //     });
    //  }
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Get a reference to the RadSideDrawer view and
    * use the showDrawer() function to open the app drawer section.
    *************************************************************/
    LoginComponent.prototype.logOut = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'gf-login',
            moduleId: module.id,
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEQ7QUFFNUQsbUZBQWlGO0FBTWpGLHVEQUEwRDtBQWExRDtJQU9FLHdCQUFvQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBUWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMseUJBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFWiwrQkFBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0osQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBRUEsOEJBQUssR0FBTDtRQUFBLGlCQWVFO1FBZEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRSx5QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVwRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxPQUFXO1lBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMscUdBQXFHO0lBQ3JHLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0RBQStEO0lBQy9ELG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixLQUFLO0lBRUwsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFHSDs7OztrRUFJOEQ7SUFDOUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7SUFDdEUsQ0FBQztJQW5GWSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDO3lDQVFxQywwQkFBZTtZQUNkLG9DQUFnQjtPQVIzQyxjQUFjLENBcUYxQjtJQUFELHFCQUFDO0NBQUEsQUFyRkQsSUFxRkM7QUFyRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlLCBCYWNrZW5kU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBMb2dpblZpZXdNb2RlbCB9IGZyb20gXCIuL2xvZ2luLXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2YtbG9naW4nLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgaWYgKEJhY2tlbmRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBcclxuIH1cclxuXHJcbnJlZ2lzdGVyKCl7XHJcbiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3JlZ2lzdGVyJ10pO1xyXG5cclxufVxyXG5cclxuIGxvZ2luKCkge1xyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgIHZhciBpZCA9IGZpcmViYXNlLmdldEN1cnJlbnRVc2VyO1xyXG4gICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgdWlkIGlzXCIrIEJhY2tlbmRTZXJ2aWNlLnRva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBpZCBpc1wiICsgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcblxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbi8vICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbi8vICAgICBwcm9tcHQoe1xyXG4vLyAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuLy8gICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR2lmdGxlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4vLyAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbi8vICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuLy8gICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbi8vICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4vLyAgICAgICAgICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgICBhbGVydChyZXN1bHQpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gIH1cclxuICBcclxudG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICB9XHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xyXG4qIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBSYWRTaWRlRHJhd2VyIHZpZXcgYW5kXHJcbiogdXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5sb2dPdXQoKSB7XHJcbiAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9nb3V0KCk7XHJcbiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG59XHJcblxyXG59Il19