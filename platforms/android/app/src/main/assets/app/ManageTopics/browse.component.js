"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(routerExtensions, firebaseService, route) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.i = 'a';
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
        this.questions$ = this.firebaseService.getClassroomQuestion();
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
        this.firebaseService.deleteQuestionRequest(question);
    };
    BrowseComponent.prototype.activateTag = function (id, name) {
        backend_service_1.BackendService.TID = id;
        console.log(name + " is Activated");
        alert(name + " is Activated");
    };
    BrowseComponent.prototype.delete = function (tag) {
        this.firebaseService.deleteTag(tag)
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
        this.routerExtensions.navigate(["Score"], navigationExtras);
    };
    BrowseComponent.prototype.upgradeUser = function (firstname, lastname, userId, UID) {
        var _this = this;
        this.firebaseService.registerTA(backend_service_1.BackendService.CID, firstname, lastname, UID, userId).then(function (message) {
            alert(message);
            console.log("TA created ");
            _this.routerExtensions.navigate(["browse"]);
        });
    };
    BrowseComponent.prototype.downgradeUSer = function () {
    };
    BrowseComponent.prototype.removeUser = function (uid) {
        this.firebaseService.deleteRegisteredUsers(uid).catch(function () {
            alert("An error occurred while deleting user from this class.");
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], BrowseComponent.prototype, "drawerComponent", void 0);
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            moduleId: module.id,
            templateUrl: "./browse.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFFNUMsK0RBQTZEO0FBQzdELG1GQUFpRjtBQUNqRiwwQ0FBa0U7QUFPbEU7SUFtQkkseUJBQW9CLGdCQUFrQyxFQUMxQyxlQUFnQyxFQUFVLEtBQXFCO1FBRHZELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFuQjNFLGdCQUFXLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsVUFBSyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBY3RCLGNBQVMsR0FBRyxnQ0FBYyxDQUFDLFVBQVUsQ0FBQztRQUN0QyxNQUFDLEdBQUcsR0FBRyxDQUFDO0lBUVgsQ0FBQztJQUNMOztrRUFFOEQ7SUFDOUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdDQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxD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Q0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFhLEdBQWI7SUFFQSxDQUFDO0lBQ0Qsb0NBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBRSxLQUFLLENBQUM7WUFDckQsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0dzQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzREQUFDO0lBUnBELGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBb0J3QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBaUIsdUJBQWM7T0FwQmxFLGVBQWUsQ0FvSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztBQXBIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG4gICBcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgdGFncyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBxdWVzdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcmVxdWVzdHMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwdWJsaWMgY3JlYXRvcklkID0gQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvcjtcclxuICAgIHB1YmxpYyBpID0gJ2EnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cclxuICAgICAgICBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0Q3JlYXRlZENsYXNzZXMoKTtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0UmVnaXN0ZXJlZFVzZXJzKEJhY2tlbmRTZXJ2aWNlLkNJRCk7XHJcbiAgICAgICAgdGhpcy50YWdzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlUYWdMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0cyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFF1ZXN0aW9uUmVxdWVzdHMoKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldENsYXNzcm9vbVF1ZXN0aW9uKCk7IFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbiwgbmFtZTogc3RyaW5nLCBUYWc6c3RyaW5nLCBxdWVzdGlvblR5cGVJZDogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10sIFVJRDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRRdWVzdGlvbihuYW1lLCBUYWcsIHF1ZXN0aW9uVHlwZUlkLCBvcHRpb25zLCBVSUQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gY3JlYXRlZCBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYnJvd3NlXCJdKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGVRdWVzdGlvblJlcXVlc3QocXVlc3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVElEID0gaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIEFjdGl2YXRlZFwiKTtcclxuICAgICAgICBhbGVydChuYW1lICsgXCIgaXMgQWN0aXZhdGVkXCIpO1xyXG4gICAgfVxyXG4gICBkZWxldGUodGFnOiBUYWcpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZVRhZyh0YWcpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3UXVlc3Rpb25zKHRpZDogc3RyaW5nLCB0b3BpY25hbWU6IHN0cmluZyl7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBcInRpZFwiOiB0aWQsXHJcbiAgICAgICAgICAgIFwidG9waWNuYW1lXCI6IHRvcGljbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coXCJUSVMgc2VudCBpcyBcIisgdGlkKTtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInRvcGljUXVlc3Rpb25cIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxuICBcclxuICBcclxuICB2aWV3VXNlcih1aWQ6IHN0cmluZywgZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcpe1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICBcImZuYW1lXCI6IGZpcnN0bmFtZSxcclxuICAgICAgICAgICAgXCJsbmFtZVwiOiBsYXN0bmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIlNjb3JlXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4gIHVwZ3JhZGVVc2VyKGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgVUlEOiBzdHJpbmcpe1xyXG5cclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyVEEoQmFja2VuZFNlcnZpY2UuQ0lELCBmaXJzdG5hbWUsIGxhc3RuYW1lLFVJRCwgdXNlcklkKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEEgY3JlYXRlZCBcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJyb3dzZVwiXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG93bmdyYWRlVVNlcigpe1xyXG5cclxuICB9XHJcbiAgcmVtb3ZlVXNlcih1aWQ6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZVJlZ2lzdGVyZWRVc2Vycyh1aWQpIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyB1c2VyIGZyb20gdGhpcyBjbGFzcy5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=