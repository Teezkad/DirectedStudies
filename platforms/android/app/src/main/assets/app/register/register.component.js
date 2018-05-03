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
