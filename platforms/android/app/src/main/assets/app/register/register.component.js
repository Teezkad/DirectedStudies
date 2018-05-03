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
        this.firstTx = "";
        this.firstTx1 = "";
        this.firstTx2 = "";
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
        if (this.passMatch == true && this.emailTxt == true && this.passLen == true) {
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
            this.routerExtensions.navigate(['login']);
        }
        else {
            this.message = "Validate your input";
        }
    };
    RegisterComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.firstTx = textField.text;
        this.validateEmail(this.firstTx);
    };
    RegisterComponent.prototype.onTextChange1 = function (args) {
        var textField = args.object;
        this.firstTx1 = textField.text;
        var length = this.firstTx1.length;
        if (length < 6) {
            this.passLen = false;
        }
        else {
            this.passLen = true;
        }
    };
    RegisterComponent.prototype.onTextChange2 = function (args) {
        var textField = args.object;
        this.firstTx2 = textField.text;
        if (this.firstTx2 == this.user.password) {
            this.passMatch = true;
        }
        else {
            this.passMatch = false;
        }
    };
    RegisterComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var res = re.test(email);
        if (res) {
            this.emailTxt = true;
        }
        else {
            this.emailTxt = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFJNUMsbUZBQWlGO0FBVWhGO0lBZ0JHLDJCQUFvQixlQUFnQyxFQUN4QyxnQkFBa0M7UUFEMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkOUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFlBQU8sR0FBRyxFQUFFLENBQUU7UUFDZCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQVV6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDeEIsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBRS9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3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QUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUdILENBQUM7SUFHQSxrQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFNUMsQ0FBQztJQXJIWSxpQkFBaUI7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUseUJBQXlCO1NBQ3ZDLENBQUM7eUNBa0J1QywwQkFBZTtZQUN0QixvQ0FBZ0I7T0FqQnBDLGlCQUFpQixDQXVIN0I7SUFBRCx3QkFBQztDQUFBLEFBdkhELElBdUhDO0FBdkhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy9Vc2VyLm1vZGVsJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZ2YtcmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbiBcclxuIGV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudHsgXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgcmVnaXN0ZXI6IFVzZXI7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIHBhc3N3b3JkMTtcclxuICAgIHB1YmxpYyBtZXNzYWdlID0gXCJcIiA7XHJcbiAgICBwdWJsaWMgZmlyc3RUeDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBmaXJzdFR4MTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBmaXJzdFR4Mjogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBlbWFpbFR4dDtcclxuICAgIHB1YmxpYyBwYXNzTGVuO1xyXG4gICAgcHVibGljIHBhc3NNYXRjaDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5maXJzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5sYXN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLmluc3RydWN0b3I9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5wcm9mZXNzb3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5maXJzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIubGFzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIuc3R1ZGVuTnVtID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLmluc3RydWN0b3I9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIucHJvZmVzc29yID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gc2lnblVwKCkge1xyXG4gIGlmKHRoaXMucGFzc01hdGNoID09IHRydWUgJiYgdGhpcy5lbWFpbFR4dCA9PSB0cnVlICYmIHRoaXMucGFzc0xlbiA9PSB0cnVlKXtcclxuXHJcbiAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMucmVnaXN0ZXIuZmlyc3ROYW1lLCB0aGlzLnJlZ2lzdGVyLmxhc3ROYW1lLFxyXG4gICAgdGhpcy5yZWdpc3Rlci5zdHVkZW5OdW0sIHRoaXMucmVnaXN0ZXIuaW5zdHJ1Y3RvciwgdGhpcy5yZWdpc3Rlci5wcm9mZXNzb3IpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFVzZXIodGhpcy51c2VyLmVtYWlsLCB0aGlzLnJlZ2lzdGVyLmZpcnN0TmFtZSwgdGhpcy5yZWdpc3Rlci5sYXN0TmFtZSxcclxuICAgICAgLy8gICB0aGlzLnJlZ2lzdGVyLnN0dWRlbk51bSwgdGhpcy5yZWdpc3Rlci5pbnN0cnVjdG9yLCB0aGlzLnJlZ2lzdGVyLnByb2Zlc3NvcikudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgIC8vICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgLy8gICAgICB9KSAgIFxyXG4gICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydsb2dpbiddKTtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gXCJWYWxpZGF0ZSB5b3VyIGlucHV0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIHRoaXMuZmlyc3RUeCA9IHRleHRGaWVsZC50ZXh0O1xyXG4gICAgdGhpcy52YWxpZGF0ZUVtYWlsKHRoaXMuZmlyc3RUeCk7XHJcbn1cclxuXHJcbnB1YmxpYyBvblRleHRDaGFuZ2UxKGFyZ3MpIHtcclxuICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgdGhpcy5maXJzdFR4MSA9IHRleHRGaWVsZC50ZXh0O1xyXG4gdmFyIGxlbmd0aCA9IHRoaXMuZmlyc3RUeDEubGVuZ3RoO1xyXG5cclxuIGlmKGxlbmd0aCA8IDYpe1xyXG4gIHRoaXMucGFzc0xlbiA9IGZhbHNlO1xyXG4gfWVsc2V7XHJcbiAgIHRoaXMucGFzc0xlbiA9IHRydWU7XHJcbiB9XHJcbn1cclxuXHJcbnB1YmxpYyBvblRleHRDaGFuZ2UyKGFyZ3MpIHtcclxuICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgdGhpcy5maXJzdFR4MiA9IHRleHRGaWVsZC50ZXh0O1xyXG5cclxuICBpZih0aGlzLmZpcnN0VHgyID09IHRoaXMudXNlci5wYXNzd29yZCl7XHJcbiAgICB0aGlzLnBhc3NNYXRjaCA9IHRydWU7XHJcbiAgfWVsc2V7XHJcbiAgICB0aGlzLnBhc3NNYXRjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICB2YXIgcmVzID0gcmUudGVzdChlbWFpbCk7XHJcblxyXG4gIGlmKHJlcyl7XHJcbiAgICB0aGlzLmVtYWlsVHh0ID0gdHJ1ZTtcclxuICB9ZWxzZXtcclxuICAgIHRoaXMuZW1haWxUeHQgPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4gZ29CYWNrKCl7XHJcbiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG5cclxuIH1cclxuXHJcbiB9XHJcblxyXG4gICAgIl19