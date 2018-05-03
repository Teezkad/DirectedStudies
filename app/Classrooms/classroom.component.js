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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nyb29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFHeEMsNkRBQW1EO0FBQ25ELHdDQUE0QztBQUU1QyxtRkFBaUY7QUFLakYsMENBQXVDO0FBSXZDLCtEQUE2RDtBQVk3RDtJQVdHLDRCQUFvQixnQkFBa0MsRUFDN0MsZUFBZ0MsRUFDaEMsTUFBYztRQUZILHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIseUNBQXlDO0lBRWhELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzFC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LENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFoRlksa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWF1QyxvQ0FBZ0I7WUFDNUIsMEJBQWU7WUFDeEIsZUFBTTtPQWJiLGtCQUFrQixDQWtGOUI7SUFBRCx5QkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy8nO1xyXG5pbXBvcnQge0NsYXNzcm9vbX0gZnJvbSAnLi4vbW9kZWxzL0NsYXNzcm9vbS5tb2RlbCdcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xyXG5pbXBvcnQgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2xhc3Nyb29tXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGFzc3Jvb20uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgY2xhc3Nyb29tQ29tcG9uZW50IHtcclxuXHJcbiAgIHB1YmxpYyBjcmVhdGUgOiBDbGFzc3Jvb207XHJcbiAgIHB1YmxpYyBjbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICBwdWJsaWMgYWxsQ2xhc3M7XHJcbiAgIHB1YmxpYyBjTGVuZ3RoO1xyXG4gICBwdWJsaWMgdmFsaWROYW1lO1xyXG4gICBwdWJsaWMgZmlyc3RUeHQ7XHJcbiAgIHB1YmxpYyBtZXNzYWdlO1xyXG5cclxuXHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZSA9IG5ldyBDbGFzc3Jvb20oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUuaWQgPSAgTnVtYmVyKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5uYW1lPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5wcm9mZXNzb3IgPSBCYWNrZW5kU2VydmljZS5VbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUuaW5zdGl0dXRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5tZW1iZXJzPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUuY2xhc3NDb2RlID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUueWVhciA9IFwiXCI7XHJcbiAgICAgICAgICAgLy90aGlzLmNyZWF0ZS5VSUQgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsQ2xhc3NMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc3Jvb21zJC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbGxDbGFzcyA9IHZhbDtcclxuICAgICAgICAgICAgdGhpcy5jTGVuZ3RoID0gdmFsLmxlbmd0aDtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbnN1Ym1pdCgpe1xyXG5cclxuICAgIGlmKHRoaXMuY0xlbmd0aCA9PSAwKXtcclxuICAgICAgICB0aGlzLnZhbGlkTmFtZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IodmFyIGkgPTA7IGk8dGhpcy5jTGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKHRoaXMuYWxsQ2xhc3NbaV0uTmFtZSA9PSB0aGlzLmNyZWF0ZS5uYW1lKXtcclxuICAgICAgICAgICAgdGhpcy52YWxpZE5hbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hZGRDbGFzcz09IG51bGwgfHwgdGhpcy5hbGxDbGFzc1tpXS5OYW1lID09IHRoaXMuY3JlYXRlLm5hbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkTmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmFsaWQgY2xhc3MgbmFtZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRDbGFzcygpO1xyXG59XHJcblxyXG5hZGRDbGFzcygpe1xyXG4gICAgY29uc29sZS5sb2coXCJWYWxpZCBuYW1lIGlzIFwiICsgdGhpcy52YWxpZE5hbWUpO1xyXG4gICAgaWYodGhpcy52YWxpZE5hbWUgPT0gdHJ1ZSl7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRDbGFzc3Jvb20odGhpcy5jcmVhdGUuaWQsIHRoaXMuY3JlYXRlLm5hbWUsIHRoaXMuY3JlYXRlLnByb2Zlc3NvcixcclxuICAgICAgICB0aGlzLmNyZWF0ZS5pbnN0aXR1dGlvbiwgIHRoaXMuY3JlYXRlLm1lbWJlcnMsIHRoaXMuY3JlYXRlLmNsYXNzQ29kZSwgdGhpcy5jcmVhdGUueWVhciwgXHJcbiAgICAgICAgdGhpcy5jcmVhdGUuVUlEKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGFzc3Jvb20gXCIgKyB0aGlzLmNyZWF0ZS5uYW1lKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkNsYXNzIG5hbWUgYWxyZWFkeSBleGlzdHMhIVwiO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbmluQ2xhc3MoY2xhc3Nyb29tOiBDbGFzc3Jvb20sIGlkOiBzdHJpbmcsIENuYW1lOiBzdHJpbmcsIFByb2Y6IHN0cmluZywgWWVhcjogc3RyaW5nLCB1aWQ6IHN0cmluZyl7XHJcbiAgICAvL3VwZGF0ZSB0aGUgY2xhc3Nyb29tIG5vZGUgdG8gaW5jbHVkZSB1c2VycyB3aG8gcmVnaXN0ZXJlZFxyXG4gICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyQ2xhc3Nyb29tKGNsYXNzcm9vbSwgQmFja2VuZFNlcnZpY2UuVWlkLCBCYWNrZW5kU2VydmljZS5VbmFtZSwgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSlcclxuICAgIC50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAvL3VwZGF0ZSB0aGUgdXNlcidzIG5vZGUgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY2xhc3Nlc1xyXG4vLyAgICB0aGlzLmZpcmViYXNlU2VydmljZS51c2VyUmVnaXN0ZXIoaWQsIENuYW1lLCBQcm9mLCBZZWFyLCB1aWQpXHJcbiAgIGNvbnNvbGUubG9nKFwiQ2xhc3Nyb29tIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gfSkgXHJcbn1cclxuXHJcbn0iXX0=