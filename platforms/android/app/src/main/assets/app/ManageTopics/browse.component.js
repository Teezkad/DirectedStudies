"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var firebase_service_1_1 = require("../services/firebase.service.1");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(routerExtensions, firebaseService, firebaseService1, route) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.firebaseService1 = firebaseService1;
        this.route = route;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.i = 'a';
        this.TA = backend_service_1.BackendService.TA;
        this.message = "";
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    BrowseComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.myclassrooms$ = this.firebaseService.getCreatedClasses();
        this.users$ = this.firebaseService.getRegisteredUsers(backend_service_1.BackendService.CID);
        this.tags$ = this.firebaseService.getMyTagList();
        this.requests$ = this.firebaseService.getQuestionRequests();
    };
    Object.defineProperty(BrowseComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    BrowseComponent.prototype.navTag = function () {
        this.routerExtensions.navigate(["/tag"]);
    };
    BrowseComponent.prototype.addQuestion = function (question, name, Tag, questionTypeId, options, UID) {
        var _this = this;
        this.firebaseService.addQuestion(name, Tag, questionTypeId, options, UID).then(function (message) {
            alert(message);
            console.log("Question created ");
            _this.routerExtensions.navigate(["browse"]);
        });
        this.firebaseService1.deleteQuestionRequest(question);
    };
    BrowseComponent.prototype.activateTag = function (id, name) {
        backend_service_1.BackendService.TID = id;
        console.log(name + " is Activated");
        alert(name + " is Activated");
    };
    BrowseComponent.prototype.delete = function (tag) {
        this.firebaseService1.deleteTag(tag)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    BrowseComponent.prototype.viewQuestions = function (tid, topicname) {
        var navigationExtras = {
            queryParams: {
                "tid": tid,
                "topicname": topicname
            }
        };
        console.log("TIS sent is " + tid);
        this.routerExtensions.navigate(["topicQuestion"], navigationExtras);
    };
    BrowseComponent.prototype.viewUser = function (uid, firstname, lastname) {
        var navigationExtras = {
            queryParams: {
                "uid": uid,
                "fname": firstname,
                "lname": lastname
            }
        };
        this.routerExtensions.navigate(["topicScore"], navigationExtras);
    };
    BrowseComponent.prototype.upgradeUser = function (firstname, lastname, userId, UID) {
        this.firebaseService.registerTA(backend_service_1.BackendService.CID, firstname, lastname, UID, userId).then(function (message) {
            alert(message);
            console.log("TA created ");
        });
    };
    BrowseComponent.prototype.downgradeUser = function (firstname, lastname, userId, id) {
        this.firebaseService.unregisterTA(backend_service_1.BackendService.CID, firstname, lastname, userId, id).then(function (message) {
            alert(message);
            console.log("TA downgraded ");
        });
    };
    BrowseComponent.prototype.removeUser = function (uid) {
        this.firebaseService1.deleteRegisteredUsers(uid).catch(function () {
            alert("An error occurred while deleting user from this class.");
        });
    };
    BrowseComponent.prototype.promptMessage = function (question, questionName, questionOptions, topic, by, UID) {
        var navigationExtras = {
            queryParams: {
                "QuestionName": questionName,
                "QuestionId": question,
                "QuestionOption": questionOptions,
                "Sent": true
            }
        };
        this.routerExtensions.navigate(["question"], navigationExtras);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], BrowseComponent.prototype, "drawerComponent", void 0);
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            moduleId: module.id,
            templateUrl: "./browse.component.html",
            styleUrls: ["./browse.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, firebase_service_1_1.FirebaseService1,
            router_1.ActivatedRoute])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMscUVBQStEO0FBRS9ELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFFakYsMENBQWtFO0FBUWxFO0lBcUJJLHlCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBZSxnQkFBa0MsRUFDakYsS0FBcUI7UUFGYixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF0QmpDLGdCQUFXLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsVUFBSyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBY3RCLGNBQVMsR0FBRyxnQ0FBYyxDQUFDLFVBQVUsQ0FBQztRQUN0QyxNQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1IsT0FBRSxHQUFHLGdDQUFjLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFPaEIsQ0FBQztJQUNMOztrRUFFOEQ7SUFDOUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdDQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FB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QWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBc0J3QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBaUMscUNBQWdCO1lBQzFFLHVCQUFjO09BdkJ4QixlQUFlLENBbUkzQjtJQUFELHNCQUFDO0NBQUEsQUFuSUQsSUFtSUM7QUFuSVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UuMVwiXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9icm93c2UuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG4gICBcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgdGFncyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBxdWVzdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcmVxdWVzdHMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwdWJsaWMgY3JlYXRvcklkID0gQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvcjtcclxuICAgIHB1YmxpYyBpID0gJ2EnO1xyXG4gICAgcHVibGljIFRBID0gQmFja2VuZFNlcnZpY2UuVEE7XHJcbiAgICBwdWJsaWMgbWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2UxOiBGaXJlYmFzZVNlcnZpY2UxLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm15Y2xhc3Nyb29tcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldENyZWF0ZWRDbGFzc2VzKCk7XHJcbiAgICAgICAgdGhpcy51c2VycyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFJlZ2lzdGVyZWRVc2VycyhCYWNrZW5kU2VydmljZS5DSUQpO1xyXG4gICAgICAgIHRoaXMudGFncyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15VGFnTGlzdCgpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRRdWVzdGlvblJlcXVlc3RzKCk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXHJcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdlRhZygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFnXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb24sIG5hbWU6IHN0cmluZywgVGFnOnN0cmluZywgcXVlc3Rpb25UeXBlSWQ6IHN0cmluZywgb3B0aW9uczogT3B0aW9uc1tdLCBVSUQ6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuYWRkUXVlc3Rpb24obmFtZSwgVGFnLCBxdWVzdGlvblR5cGVJZCwgb3B0aW9ucywgVUlEKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGNyZWF0ZWQgXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVF1ZXN0aW9uUmVxdWVzdChxdWVzdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVUYWcoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKXtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5USUQgPSBpZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgaXMgQWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIGFsZXJ0KG5hbWUgKyBcIiBpcyBBY3RpdmF0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICBkZWxldGUodGFnOiBUYWcpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVUYWcodGFnKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmlld1F1ZXN0aW9ucyh0aWQ6IHN0cmluZywgdG9waWNuYW1lOiBzdHJpbmcpe1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgXCJ0aWRcIjogdGlkLFxyXG4gICAgICAgICAgICBcInRvcGljbmFtZVwiOiB0b3BpY25hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVElTIHNlbnQgaXMgXCIrIHRpZCk7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ0b3BpY1F1ZXN0aW9uXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdmlld1VzZXIodWlkOiBzdHJpbmcsIGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nKXtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIFwidWlkXCI6IHVpZCxcclxuICAgICAgICAgICAgXCJmbmFtZVwiOiBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgIFwibG5hbWVcIjogbGFzdG5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ0b3BpY1Njb3JlXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4gIHVwZ3JhZGVVc2VyKGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgVUlEOiBzdHJpbmcpe1xyXG5cclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyVEEoQmFja2VuZFNlcnZpY2UuQ0lELCBmaXJzdG5hbWUsIGxhc3RuYW1lLFVJRCwgdXNlcklkKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEEgY3JlYXRlZCBcIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG93bmdyYWRlVXNlcihmaXJzdG5hbWU6IHN0cmluZywgbGFzdG5hbWU6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGlkOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UudW5yZWdpc3RlclRBKEJhY2tlbmRTZXJ2aWNlLkNJRCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgdXNlcklkLCBpZCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRBIGRvd25ncmFkZWQgXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVVzZXIodWlkOiBzdHJpbmcpe1xyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlUmVnaXN0ZXJlZFVzZXJzKHVpZCkgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHVzZXIgZnJvbSB0aGlzIGNsYXNzLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm9tcHRNZXNzYWdlKHF1ZXN0aW9uOiBRdWVzdGlvbiwgcXVlc3Rpb25OYW1lOiBzdHJpbmcsIHF1ZXN0aW9uT3B0aW9uczpPcHRpb25zLCB0b3BpYzogc3RyaW5nLCBieTogc3RyaW5nLCBVSUQ6IHN0cmluZyl7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBcIlF1ZXN0aW9uTmFtZVwiOiBxdWVzdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIFwiUXVlc3Rpb25JZFwiOiBxdWVzdGlvbixcclxuICAgICAgICAgICAgXCJRdWVzdGlvbk9wdGlvblwiOiBxdWVzdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgIFwiU2VudFwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wicXVlc3Rpb25cIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxufVxyXG4iXX0=