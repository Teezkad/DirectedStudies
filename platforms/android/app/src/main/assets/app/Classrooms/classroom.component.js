"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    classroomComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "classroom",
            moduleId: module.id,
            templateUrl: 'classroom.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router])
    ], classroomComponent);
    return classroomComponent;
}());
exports.classroomComponent = classroomComponent;
<<<<<<< HEAD
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nyb29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXdDO0FBR3hDLDZEQUFtRDtBQUNuRCx3Q0FBNEM7QUFFNUMsbUZBQWlGO0FBS2pGLDBDQUF1QztBQUl2QywrREFBNkQ7QUFXN0Q7SUFJRyw0QkFBb0IsZ0JBQWtDLEVBQzdDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGSCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWxCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwyQkFBUyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2Qix5Q0FBeUM7SUFFaEQsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUNyRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBRTlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUE7UUFJRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLFNBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDNUYsMkRBQTJEO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGdDQUFjLENBQUMsR0FBRyxFQUFFLGdDQUFjLENBQUMsS0FBSyxFQUFFLGdDQUFjLENBQUMsVUFBVSxDQUFDO2FBQ3pILElBQUksQ0FBQyxVQUFDLE9BQVc7WUFFaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWYscURBQXFEO1lBQ3hELG1FQUFtRTtZQUVoRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBL0NZLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQztpREFNdUMsb0NBQWdCO1lBQzVCLDBCQUFlO1lBQ3hCLGVBQU07T0FOYixrQkFBa0IsQ0FpRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvJztcclxuaW1wb3J0IHtDbGFzc3Jvb219IGZyb20gJy4uL21vZGVscy9DbGFzc3Jvb20ubW9kZWwnXHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsICB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuaW1wb3J0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNsYXNzcm9vbVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnY2xhc3Nyb29tLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGNsYXNzcm9vbUNvbXBvbmVudCB7XHJcblxyXG4gICBwdWJsaWMgY3JlYXRlIDogQ2xhc3Nyb29tO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gbmV3IENsYXNzcm9vbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5pZCA9ICBOdW1iZXIobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLm5hbWU9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLnByb2Zlc3NvciA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmluc3RpdHV0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUubWVtYmVycz0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmNsYXNzQ29kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLnllYXIgPSBcIlwiO1xyXG4gICAgICAgICAgIC8vdGhpcy5jcmVhdGUuVUlEID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcblxyXG4gICAgfVxyXG5cclxuYWRkQ2xhc3MoKXtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZENsYXNzcm9vbSh0aGlzLmNyZWF0ZS5pZCwgdGhpcy5jcmVhdGUubmFtZSwgdGhpcy5jcmVhdGUucHJvZmVzc29yLFxyXG4gICAgICAgIHRoaXMuY3JlYXRlLmluc3RpdHV0aW9uLCAgdGhpcy5jcmVhdGUubWVtYmVycywgdGhpcy5jcmVhdGUuY2xhc3NDb2RlLCB0aGlzLmNyZWF0ZS55ZWFyLCBcclxuICAgICAgICB0aGlzLmNyZWF0ZS5VSUQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBcIiArIHRoaXMuY3JlYXRlLm5hbWUpO1xyXG4gICAgICAgICAgfSkgXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxufVxyXG5cclxuaW5DbGFzcyhjbGFzc3Jvb206IENsYXNzcm9vbSwgaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgIC8vdXBkYXRlIHRoZSBjbGFzc3Jvb20gbm9kZSB0byBpbmNsdWRlIHVzZXJzIHdobyByZWdpc3RlcmVkXHJcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiBcclxuICAgYWxlcnQobWVzc2FnZSk7XHJcblxyXG4gICAvL3VwZGF0ZSB0aGUgdXNlcidzIG5vZGUgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY2xhc3Nlc1xyXG4vLyAgICB0aGlzLmZpcmViYXNlU2VydmljZS51c2VyUmVnaXN0ZXIoaWQsIENuYW1lLCBQcm9mLCBZZWFyLCB1aWQpXHJcblxyXG4gICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuIH0pIFxyXG59XHJcblxyXG59Il19
>>>>>>> fd2fda5f77cc179161a237313fc4d1e4517647a6
