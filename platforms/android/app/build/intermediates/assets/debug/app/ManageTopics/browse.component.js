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
    BrowseComponent.prototype.promptMessage = function (question) {
        var msg = prompt("Enter Message", this.message);
        if (msg == null || msg == "") {
            console.log("No Message");
        }
        else {
            this.firebaseService.messageToReceiver(question, msg);
            this.firebaseService.messageFromSender(question, msg);
            this.firebaseService1.updateQuestionRequest(question);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMscUVBQStEO0FBRS9ELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFDakYsMENBQWtFO0FBUWxFO0lBcUJJLHlCQUFvQixnQkFBa0MsRUFDMUMsZUFBZ0MsRUFBZSxnQkFBa0MsRUFDakYsS0FBcUI7UUFGYixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFlLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF0QmpDLGdCQUFXLEdBQUcsZ0NBQWMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsVUFBSyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBY3RCLGNBQVMsR0FBRyxnQ0FBYyxDQUFDLFVBQVUsQ0FBQztRQUN0QyxNQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1IsT0FBRSxHQUFHLGdDQUFjLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFPaEIsQ0FBQztJQUNMOztrRUFFOEQ7SUFDOUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdDQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxzQkFBSSxpREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFFBQWtCLEVBQUUsSUFBWSxFQUFFLEdBQVUsRUFBRSxjQUFzQixFQUFFLE9BQWtCLEVBQUUsR0FBVztRQUFqSCxpQkFPQztRQU5HLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ25GLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVUsRUFBRSxJQUFZO1FBQ2hDLGdDQUFjLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsQ0FBQztRQUNwQyxLQUFLLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRixnQ0FBTSxHQUFOLFVBQU8sR0FBUTtRQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQ2pDLEtBQUssQ0FBQztZQUNMLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsU0FBaUI7UUFDMUMsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULEtBQUssRUFBRSxHQUFHO2dCQUNWLFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1NBQ0YsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFHRCxrQ0FBUSxHQUFSLFVBQVMsR0FBVyxFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDdkQsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixPQUFPLEVBQUUsUUFBUTthQUNwQjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsR0FBVztRQUUxRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQ0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ2xHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBVTtRQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQ0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ3BHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxvQ0FBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUUsS0FBSyxDQUFDO1lBQ3RELEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxRQUFrQjtRQUM3QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSixDQUFDO0lBeEhzQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzREQUFDO0lBUnBELGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBc0J3QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBaUMscUNBQWdCO1lBQzFFLHVCQUFjO09BdkJ4QixlQUFlLENBaUkzQjtJQUFELHNCQUFDO0NBQUEsQUFqSUQsSUFpSUM7QUFqSVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UuMVwiXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYnJvd3NlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYnJvd3NlLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlciA9IEJhY2tlbmRTZXJ2aWNlLnRva2VuO1xyXG4gICAgQ25hbWUgPSBCYWNrZW5kU2VydmljZS5DbmFtZTtcclxuICAgXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwdWJsaWMgdXNlcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgbXljbGFzc3Jvb21zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHRhZ3MkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHJlcXVlc3RzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIGNyZWF0b3JJZCA9IEJhY2tlbmRTZXJ2aWNlLmluc3RydWN0b3I7XHJcbiAgICBwdWJsaWMgaSA9ICdhJztcclxuICAgIHB1YmxpYyBUQSA9IEJhY2tlbmRTZXJ2aWNlLlRBO1xyXG4gICAgcHVibGljIG1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRDcmVhdGVkQ2xhc3NlcygpO1xyXG4gICAgICAgIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRSZWdpc3RlcmVkVXNlcnMoQmFja2VuZFNlcnZpY2UuQ0lEKTtcclxuICAgICAgICB0aGlzLnRhZ3MkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVRhZ0xpc3QoKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0UXVlc3Rpb25SZXF1ZXN0cygpOyAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xyXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZUYWcoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RhZ1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUXVlc3Rpb24ocXVlc3Rpb246IFF1ZXN0aW9uLCBuYW1lOiBzdHJpbmcsIFRhZzpzdHJpbmcsIHF1ZXN0aW9uVHlwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSwgVUlEOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFF1ZXN0aW9uKG5hbWUsIFRhZywgcXVlc3Rpb25UeXBlSWQsIG9wdGlvbnMsIFVJRCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbiBjcmVhdGVkIFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJicm93c2VcIl0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVRdWVzdGlvblJlcXVlc3QocXVlc3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuVElEID0gaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArIFwiIGlzIEFjdGl2YXRlZFwiKTtcclxuICAgICAgICBhbGVydChuYW1lICsgXCIgaXMgQWN0aXZhdGVkXCIpO1xyXG4gICAgfVxyXG4gICBkZWxldGUodGFnOiBUYWcpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVUYWcodGFnKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmlld1F1ZXN0aW9ucyh0aWQ6IHN0cmluZywgdG9waWNuYW1lOiBzdHJpbmcpe1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgXCJ0aWRcIjogdGlkLFxyXG4gICAgICAgICAgICBcInRvcGljbmFtZVwiOiB0b3BpY25hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVElTIHNlbnQgaXMgXCIrIHRpZCk7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ0b3BpY1F1ZXN0aW9uXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdmlld1VzZXIodWlkOiBzdHJpbmcsIGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nKXtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIFwidWlkXCI6IHVpZCxcclxuICAgICAgICAgICAgXCJmbmFtZVwiOiBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgIFwibG5hbWVcIjogbGFzdG5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ0b3BpY1Njb3JlXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4gIHVwZ3JhZGVVc2VyKGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgVUlEOiBzdHJpbmcpe1xyXG5cclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyVEEoQmFja2VuZFNlcnZpY2UuQ0lELCBmaXJzdG5hbWUsIGxhc3RuYW1lLFVJRCwgdXNlcklkKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEEgY3JlYXRlZCBcIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG93bmdyYWRlVXNlcihmaXJzdG5hbWU6IHN0cmluZywgbGFzdG5hbWU6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGlkOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UudW5yZWdpc3RlclRBKEJhY2tlbmRTZXJ2aWNlLkNJRCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgdXNlcklkLCBpZCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRBIGRvd25ncmFkZWQgXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcmVtb3ZlVXNlcih1aWQ6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVSZWdpc3RlcmVkVXNlcnModWlkKSAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdXNlciBmcm9tIHRoaXMgY2xhc3MuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb21wdE1lc3NhZ2UocXVlc3Rpb246IFF1ZXN0aW9uKXtcclxuICAgICB2YXIgbXNnID0gcHJvbXB0KFwiRW50ZXIgTWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2UpO1xyXG5cclxuICAgICBpZihtc2cgPT0gbnVsbCB8fCBtc2cgPT0gXCJcIil7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gTWVzc2FnZVwiKTtcclxuICAgICB9ZWxzZXtcclxuICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubWVzc2FnZVRvUmVjZWl2ZXIocXVlc3Rpb24sIG1zZyk7XHJcbiAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLm1lc3NhZ2VGcm9tU2VuZGVyKHF1ZXN0aW9uLCBtc2cpO1xyXG4gICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEudXBkYXRlUXVlc3Rpb25SZXF1ZXN0KHF1ZXN0aW9uKTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==