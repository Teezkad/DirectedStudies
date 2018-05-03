"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Classroom_model_1 = require("../models/Classroom.model");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var classroomComponent = /** @class */ (function () {
    function classroomComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.create = new Classroom_model_1.Classroom();
        this.create.id = Number(new Date());
        this.create.name = "";
        this.create.professor = backend_service_1.BackendService.Uname;
        this.create.institution = "";
        this.create.members = [];
        this.create.classCode = "";
        this.create.year = "";
        //this.create.UID = BackendService.token;
    }
    classroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.classrooms$.subscribe(function (val) {
            _this.allClass = val;
            _this.cLength = val.length;
        });
    };
    classroomComponent.prototype.submit = function () {
        if (this.cLength == 0) {
            this.validName = true;
        }
        for (var i = 0; i < this.cLength; i++) {
            if (this.allClass[i].Name == this.create.name) {
                this.validName = false;
            }
            else if (this.addClass == null || this.allClass[i].Name == this.create.name) {
                this.validName = true;
                console.log("Valid class name");
            }
        }
        this.addClass();
    };
    classroomComponent.prototype.addClass = function () {
        var _this = this;
        console.log("Valid name is " + this.validName);
        if (this.validName == true) {
            this.firebaseService.addClassroom(this.create.id, this.create.name, this.create.professor, this.create.institution, this.create.members, this.create.classCode, this.create.year, this.create.UID).then(function (message) {
                alert(message);
                console.log("Classroom " + _this.create.name);
            });
            this.routerExtensions.navigate(["/home"]);
        }
        else {
            this.message = "Class name already exists!!";
        }
    };
    classroomComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year, uid) {
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom, backend_service_1.BackendService.Uid, backend_service_1.BackendService.Uname, backend_service_1.BackendService.studentNum)
            .then(function (message) {
            alert(message);
            //update the user's node to include a list of classes
            //    this.firebaseService.userRegister(id, Cname, Prof, Year, uid)
            console.log("Classroom successfully registered");
        });
    };
    classroomComponent = __decorate([
        core_1.Component({
            selector: "classroom",
            moduleId: module.id,
            templateUrl: 'classroom.component.html'
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router])
    ], classroomComponent);
    return classroomComponent;
}());
exports.classroomComponent = classroomComponent;
