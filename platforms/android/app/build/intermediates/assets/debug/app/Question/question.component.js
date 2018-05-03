"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("../models/");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var backend_service_1 = require("../services/backend.service");
var router_2 = require("@angular/router");
var questionComponent = /** @class */ (function () {
    function questionComponent(routerExtensions, firebaseService, router, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.tid = params["Tid"];
            _this.tname = params["Tname"];
        });
        this.option1 = new _1.Options();
        this.option1.name = "";
        this.option1.questionId;
        this.option1.isAnswer = false;
        this.option2 = new _1.Options();
        this.option2.name = "";
        this.option2.questionId;
        this.option2.isAnswer = false;
        this.option3 = new _1.Options();
        this.option3.name = "";
        this.option3.questionId;
        this.option3.isAnswer = false;
        this.option4 = new _1.Options();
        this.option4.name = "";
        this.option4.questionId;
        this.option4.isAnswer = false;
        this.question = new _1.Question();
        this.question.name = "";
        this.question.questionTypeId = this.tid; //recieves tag id from tag page
        this.question.Tags = this.tname; //recieve tag name from tag page
        this.question.CID = backend_service_1.BackendService.CID;
        this.question.UID = backend_service_1.BackendService.token;
        this.question.options = [this.option1, this.option2, this.option3, this.option4];
    }
    questionComponent.prototype.onChange1 = function () {
        this.option1.isAnswer = !this.option1.isAnswer;
    };
    questionComponent.prototype.onChange2 = function () {
        this.option2.isAnswer = !this.option2.isAnswer;
        console.log(this.option2.isAnswer);
    };
    questionComponent.prototype.onChange3 = function () {
        this.option3.isAnswer = !this.option3.isAnswer;
    };
    questionComponent.prototype.onChange4 = function () {
        this.option4.isAnswer = !this.option4.isAnswer;
    };
    questionComponent.prototype.submitQuestion = function () {
        var _this = this;
        if (backend_service_1.BackendService.instructor == true) {
            this.firebaseService.addQuestion(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["search"]);
            });
        }
        else {
            this.firebaseService.addQuestionRequest(this.question.name, this.question.Tags, this.question.questionTypeId, this.question.options, this.question.UID, backend_service_1.BackendService.studentNum).then(function (message) {
                alert(message);
                console.log("Question created ");
                _this.router.navigate(["search"]);
            });
        }
        // console.log(this.option1.isAnswer);
        // console.log(this.option2.isAnswer);
        // console.log(this.option3.isAnswer);
        // console.log(this.option4.isAnswer);
    };
    questionComponent = __decorate([
        core_1.Component({
            selector: "question",
            moduleId: module.id,
            templateUrl: 'question.component.html',
            styleUrls: ["./question.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router, router_2.ActivatedRoute])
    ], questionComponent);
    return questionComponent;
}());
exports.questionComponent = questionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLCtCQUFtRDtBQUVuRCx3Q0FBNEM7QUFFNUMsbUZBQWlGO0FBS2pGLDBDQUF1QztBQUt2QywrREFBNkQ7QUFHN0QsMENBQStDO0FBVy9DO0lBVUcsMkJBQW9CLGdCQUFrQyxFQUM3QyxlQUFnQyxFQUNoQyxNQUFjLEVBQVUsS0FBcUI7UUFGdEQsaUJBc0NFO1FBdENrQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFFakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FB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QUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQ3ZHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLGdDQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztnQkFFbEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQztRQUNILHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsc0NBQXNDO1FBQ3RDLHNDQUFzQztJQUkxQyxDQUFDO0lBaEdRLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FZdUMsb0NBQWdCO1lBQzVCLDBCQUFlO1lBQ3hCLGVBQU0sRUFBaUIsdUJBQWM7T0FaNUMsaUJBQWlCLENBa0c3QjtJQUFELHdCQUFDO0NBQUEsQUFsR0QsSUFrR0M7QUFsR1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlciwgUXVlc3Rpb24sIE9wdGlvbnN9IGZyb20gJy4uL21vZGVscy8nO1xyXG5pbXBvcnQge0NsYXNzcm9vbX0gZnJvbSAnLi4vbW9kZWxzL0NsYXNzcm9vbS5tb2RlbCdcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xyXG5pbXBvcnQgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcbmltcG9ydCBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJxdWVzdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAncXVlc3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBxdWVzdGlvbkNvbXBvbmVudHtcclxuXHJcbiAgIHB1YmxpYyBxdWVzdGlvbiA6IFF1ZXN0aW9uO1xyXG4gICBwdWJsaWMgb3B0aW9uMSA6IE9wdGlvbnM7XHJcbiAgIHB1YmxpYyBvcHRpb24yIDogT3B0aW9ucztcclxuICAgcHVibGljIG9wdGlvbjMgOiBPcHRpb25zO1xyXG4gICBwdWJsaWMgb3B0aW9uNCA6IE9wdGlvbnM7XHJcbiAgIHB1YmxpYyB0aWQ7XHJcbiAgIHB1YmxpYyB0bmFtZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aWQgPSBwYXJhbXNbXCJUaWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudG5hbWUgPSBwYXJhbXNbXCJUbmFtZVwiXTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbjEgPSBuZXcgT3B0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbjEubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uMS5xdWVzdGlvbklkIDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb24xLmlzQW5zd2VyID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbjIgPSBuZXcgT3B0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbjIubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uMi5xdWVzdGlvbklkO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbjIuaXNBbnN3ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uMyA9IG5ldyBPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uMy5uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb24zLnF1ZXN0aW9uSWQ7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uMy5pc0Fuc3dlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb240ID0gbmV3IE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb240Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbjQucXVlc3Rpb25JZCA7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uNC5pc0Fuc3dlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24ubmFtZT0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbi5xdWVzdGlvblR5cGVJZCA9IHRoaXMudGlkOyAvL3JlY2lldmVzIHRhZyBpZCBmcm9tIHRhZyBwYWdlXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24uVGFncyA9IHRoaXMudG5hbWU7IC8vcmVjaWV2ZSB0YWcgbmFtZSBmcm9tIHRhZyBwYWdlXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24uQ0lEPSBCYWNrZW5kU2VydmljZS5DSUQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24uVUlEPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbi5vcHRpb25zID0gW3RoaXMub3B0aW9uMSwgdGhpcy5vcHRpb24yLCB0aGlzLm9wdGlvbjMsIHRoaXMub3B0aW9uNF07XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZTEoKXtcclxuICAgIHRoaXMub3B0aW9uMS5pc0Fuc3dlciA9ICF0aGlzLm9wdGlvbjEuaXNBbnN3ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2hhbmdlMigpe1xyXG4gICAgICAgIHRoaXMub3B0aW9uMi5pc0Fuc3dlciA9ICF0aGlzLm9wdGlvbjIuaXNBbnN3ZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb24yLmlzQW5zd2VyKTtcclxuICAgICAgICB9XHJcbiAgICBwdWJsaWMgb25DaGFuZ2UzKCl7XHJcbiAgICAgICAgdGhpcy5vcHRpb24zLmlzQW5zd2VyID0gIXRoaXMub3B0aW9uMy5pc0Fuc3dlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgcHVibGljIG9uQ2hhbmdlNCgpe1xyXG4gICAgICAgIHRoaXMub3B0aW9uNC5pc0Fuc3dlciA9ICF0aGlzLm9wdGlvbjQuaXNBbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdFF1ZXN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmIChCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFF1ZXN0aW9uKHRoaXMucXVlc3Rpb24ubmFtZSx0aGlzLnF1ZXN0aW9uLlRhZ3MsIHRoaXMucXVlc3Rpb24ucXVlc3Rpb25UeXBlSWQsXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5vcHRpb25zLCB0aGlzLnF1ZXN0aW9uLlVJRCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGNyZWF0ZWQgXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2hcIl0pO1xyXG4gICAgICAgICAgfSkgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFF1ZXN0aW9uUmVxdWVzdCh0aGlzLnF1ZXN0aW9uLm5hbWUsdGhpcy5xdWVzdGlvbi5UYWdzLCB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uVHlwZUlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbi5vcHRpb25zLCB0aGlzLnF1ZXN0aW9uLlVJRCwgQmFja2VuZFNlcnZpY2Uuc3R1ZGVudE51bSkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbiBjcmVhdGVkIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2hcIl0pO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3B0aW9uMS5pc0Fuc3dlcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vcHRpb24yLmlzQW5zd2VyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbjMuaXNBbnN3ZXIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3B0aW9uNC5pc0Fuc3dlcik7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59Il19