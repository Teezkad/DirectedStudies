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
        for (var i = 0; i < this.cLength; i++) {
            if (this.allClass[i].Name == this.create.name) {
                this.validName = false;
            }
            else {
                this.validName = true;
            }
        }
        this.addClass();
    };
    classroomComponent.prototype.addClass = function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nyb29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFHeEMsNkRBQW1EO0FBQ25ELHdDQUE0QztBQUU1QyxtRkFBaUY7QUFLakYsMENBQXVDO0FBSXZDLCtEQUE2RDtBQVk3RDtJQVdHLDRCQUFvQixnQkFBa0MsRUFDN0MsZUFBZ0MsRUFDaEMsTUFBYztRQUZILHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIseUNBQXlDO0lBRWhELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFTCxtQ0FBTSxHQUFOO1FBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFDckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztnQkFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLDZCQUE2QixDQUFDO1FBQ2pELENBQUM7SUFDVCxDQUFDO0lBR0Qsb0NBQU8sR0FBUCxVQUFRLFNBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDNUYsMkRBQTJEO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGdDQUFjLENBQUMsR0FBRyxFQUFFLGdDQUFjLENBQUMsS0FBSyxFQUFFLGdDQUFjLENBQUMsVUFBVSxDQUFDO2FBQ3RILElBQUksQ0FBQyxVQUFDLE9BQVc7WUFFbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hCLHFEQUFxRDtZQUN4RCxtRUFBbUU7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQXpFWSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBYXVDLG9DQUFnQjtZQUM1QiwwQkFBZTtZQUN4QixlQUFNO09BYmIsa0JBQWtCLENBMkU5QjtJQUFELHlCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzLyc7XHJcbmltcG9ydCB7Q2xhc3Nyb29tfSBmcm9tICcuLi9tb2RlbHMvQ2xhc3Nyb29tLm1vZGVsJ1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCAgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XHJcbmltcG9ydCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjbGFzc3Jvb21cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsYXNzcm9vbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBjbGFzc3Jvb21Db21wb25lbnQge1xyXG5cclxuICAgcHVibGljIGNyZWF0ZSA6IENsYXNzcm9vbTtcclxuICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgIHB1YmxpYyBhbGxDbGFzcztcclxuICAgcHVibGljIGNMZW5ndGg7XHJcbiAgIHB1YmxpYyB2YWxpZE5hbWU7XHJcbiAgIHB1YmxpYyBmaXJzdFR4dDtcclxuICAgcHVibGljIG1lc3NhZ2U7XHJcblxyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gbmV3IENsYXNzcm9vbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5pZCA9ICBOdW1iZXIobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLm5hbWU9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLnByb2Zlc3NvciA9IEJhY2tlbmRTZXJ2aWNlLlVuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5pbnN0aXR1dGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLm1lbWJlcnM9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5jbGFzc0NvZGUgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS55ZWFyID0gXCJcIjtcclxuICAgICAgICAgICAvL3RoaXMuY3JlYXRlLlVJRCA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxDbGFzc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbXMkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsbENsYXNzID0gdmFsO1xyXG4gICAgICAgICAgICB0aGlzLmNMZW5ndGggPSB2YWwubGVuZ3RoO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuc3VibWl0KCl7XHJcbiAgICBmb3IodmFyIGkgPTA7IGk8dGhpcy5jTGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKHRoaXMuYWxsQ2xhc3NbaV0uTmFtZSA9PSB0aGlzLmNyZWF0ZS5uYW1lKXtcclxuICAgICAgICAgICAgdGhpcy52YWxpZE5hbWUgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52YWxpZE5hbWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZENsYXNzKCk7XHJcbn1cclxuXHJcbmFkZENsYXNzKCl7XHJcbiAgICBpZih0aGlzLnZhbGlkTmFtZSA9PSB0cnVlKXtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZENsYXNzcm9vbSh0aGlzLmNyZWF0ZS5pZCwgdGhpcy5jcmVhdGUubmFtZSwgdGhpcy5jcmVhdGUucHJvZmVzc29yLFxyXG4gICAgICAgIHRoaXMuY3JlYXRlLmluc3RpdHV0aW9uLCAgdGhpcy5jcmVhdGUubWVtYmVycywgdGhpcy5jcmVhdGUuY2xhc3NDb2RlLCB0aGlzLmNyZWF0ZS55ZWFyLCBcclxuICAgICAgICB0aGlzLmNyZWF0ZS5VSUQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsYXNzcm9vbSBcIiArIHRoaXMuY3JlYXRlLm5hbWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiQ2xhc3MgbmFtZSBhbHJlYWR5IGV4aXN0cyEhXCI7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuaW5DbGFzcyhjbGFzc3Jvb206IENsYXNzcm9vbSwgaWQ6IHN0cmluZywgQ25hbWU6IHN0cmluZywgUHJvZjogc3RyaW5nLCBZZWFyOiBzdHJpbmcsIHVpZDogc3RyaW5nKXtcclxuICAgIC8vdXBkYXRlIHRoZSBjbGFzc3Jvb20gbm9kZSB0byBpbmNsdWRlIHVzZXJzIHdobyByZWdpc3RlcmVkXHJcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJDbGFzc3Jvb20oY2xhc3Nyb29tLCBCYWNrZW5kU2VydmljZS5VaWQsIEJhY2tlbmRTZXJ2aWNlLlVuYW1lLCBCYWNrZW5kU2VydmljZS5zdHVkZW50TnVtKVxyXG4gICAgLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcblxyXG4gICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgIC8vdXBkYXRlIHRoZSB1c2VyJ3Mgbm9kZSB0byBpbmNsdWRlIGEgbGlzdCBvZiBjbGFzc2VzXHJcbi8vICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnVzZXJSZWdpc3RlcihpZCwgQ25hbWUsIFByb2YsIFllYXIsIHVpZClcclxuICAgY29uc29sZS5sb2coXCJDbGFzc3Jvb20gc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRcIik7XHJcbiB9KSBcclxufVxyXG5cclxufSJdfQ==