"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var firebase_service_1_1 = require("../services/firebase.service.1");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var dialogs = require("ui/dialogs");
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
    BrowseComponent.prototype.promptMessage = function (questionId, topic, by, UID) {
        var _this = this;
        dialogs.prompt("Enter Message", this.message).then(function (r) {
            if (r.text == null || r.text == "") {
                console.log("No Message");
            }
            else {
                _this.firebaseService.messageToReceiver(questionId, topic, by, UID, r.text);
                //  this.firebaseService.messageFromSender(questionId, topic, by, UID, r.text);
                _this.firebaseService1.updateQuestionRequest(questionId);
                console.log("Message is " + r.text);
                _this.ngOnInit();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMscUVBQStEO0FBRS9ELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFDakYsb0NBQXNDO0FBQ3RDLDBDQUFrRTtBQVFsRTtJQXFCSSx5QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQWUsZ0JBQWtDLEVBQ2pGLEtBQXFCO1FBRmIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBZSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBdEJqQyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFVBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQWN0QixjQUFTLEdBQUcsZ0NBQWMsQ0FBQyxVQUFVLENBQUM7UUFDdEMsTUFBQyxHQUFHLEdBQUcsQ0FBQztRQUNSLE9BQUUsR0FBRyxnQ0FBYyxDQUFDLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBT2hCLENBQUM7SUFDTDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxLQUFLLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZ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QUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUUsK0VBQStFO2dCQUM5RSxLQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFFRixDQUFDLENBQUUsQ0FBQTtJQUNMLENBQUM7SUEvSHNCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7NERBQUM7SUFScEQsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FzQndDLG9DQUFnQjtZQUN6QiwwQkFBZSxFQUFpQyxxQ0FBZ0I7WUFDMUUsdUJBQWM7T0F2QnhCLGVBQWUsQ0F3STNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXIsIENsYXNzcm9vbSwgT3B0aW9ucywgUXVlc3Rpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vVGFncy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2UxfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZS4xXCJcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2Jyb3dzZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY3VycmVudFVzZXIgPSBCYWNrZW5kU2VydmljZS50b2tlbjtcclxuICAgIENuYW1lID0gQmFja2VuZFNlcnZpY2UuQ25hbWU7XHJcbiAgIFxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIHVzZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG15Y2xhc3Nyb29tcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB0YWdzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHF1ZXN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyByZXF1ZXN0cyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBjcmVhdG9ySWQgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG4gICAgcHVibGljIGkgPSAnYSc7XHJcbiAgICBwdWJsaWMgVEEgPSBCYWNrZW5kU2VydmljZS5UQTtcclxuICAgIHB1YmxpYyBtZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSwgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTE6IEZpcmViYXNlU2VydmljZTEsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubXljbGFzc3Jvb21zJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0Q3JlYXRlZENsYXNzZXMoKTtcclxuICAgICAgICB0aGlzLnVzZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0UmVnaXN0ZXJlZFVzZXJzKEJhY2tlbmRTZXJ2aWNlLkNJRCk7XHJcbiAgICAgICAgdGhpcy50YWdzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlUYWdMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0cyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFF1ZXN0aW9uUmVxdWVzdHMoKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbiwgbmFtZTogc3RyaW5nLCBUYWc6c3RyaW5nLCBxdWVzdGlvblR5cGVJZDogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10sIFVJRDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRRdWVzdGlvbihuYW1lLCBUYWcsIHF1ZXN0aW9uVHlwZUlkLCBvcHRpb25zLCBVSUQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gY3JlYXRlZCBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYnJvd3NlXCJdKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlUXVlc3Rpb25SZXF1ZXN0KHF1ZXN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVRhZyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRJRCA9IGlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBpcyBBY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgYWxlcnQobmFtZSArIFwiIGlzIEFjdGl2YXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVRhZyh0YWcpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3UXVlc3Rpb25zKHRpZDogc3RyaW5nLCB0b3BpY25hbWU6IHN0cmluZyl7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBcInRpZFwiOiB0aWQsXHJcbiAgICAgICAgICAgIFwidG9waWNuYW1lXCI6IHRvcGljbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coXCJUSVMgc2VudCBpcyBcIisgdGlkKTtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInRvcGljUXVlc3Rpb25cIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxuICBcclxuICBcclxuICB2aWV3VXNlcih1aWQ6IHN0cmluZywgZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcpe1xyXG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgXCJ1aWRcIjogdWlkLFxyXG4gICAgICAgICAgICBcImZuYW1lXCI6IGZpcnN0bmFtZSxcclxuICAgICAgICAgICAgXCJsbmFtZVwiOiBsYXN0bmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInRvcGljU2NvcmVcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxuXHJcbiAgdXBncmFkZVVzZXIoZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBVSUQ6IHN0cmluZyl7XHJcblxyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXJUQShCYWNrZW5kU2VydmljZS5DSUQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsVUlELCB1c2VySWQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQSBjcmVhdGVkIFwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb3duZ3JhZGVVc2VyKGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgaWQ6IHN0cmluZyl7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS51bnJlZ2lzdGVyVEEoQmFja2VuZFNlcnZpY2UuQ0lELCBmaXJzdG5hbWUsIGxhc3RuYW1lLCB1c2VySWQsIGlkKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEEgZG93bmdyYWRlZCBcIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVXNlcih1aWQ6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5kZWxldGVSZWdpc3RlcmVkVXNlcnModWlkKSAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdXNlciBmcm9tIHRoaXMgY2xhc3MuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb21wdE1lc3NhZ2UocXVlc3Rpb25JZDogc3RyaW5nLCB0b3BpYzogc3RyaW5nLCBieTogc3RyaW5nLCBVSUQ6IHN0cmluZyl7XHJcbiAgICAgZGlhbG9ncy5wcm9tcHQoXCJFbnRlciBNZXNzYWdlXCIsIHRoaXMubWVzc2FnZSkudGhlbiggcj0+IHsgXHJcblxyXG4gICAgIGlmKHIudGV4dCA9PSBudWxsIHx8IHIudGV4dCA9PSBcIlwiKXtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJObyBNZXNzYWdlXCIpO1xyXG4gICAgIH1lbHNle1xyXG4gICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5tZXNzYWdlVG9SZWNlaXZlcihxdWVzdGlvbklkLCB0b3BpYywgYnksIFVJRCwgci50ZXh0KTtcclxuICAgICAgICAvLyAgdGhpcy5maXJlYmFzZVNlcnZpY2UubWVzc2FnZUZyb21TZW5kZXIocXVlc3Rpb25JZCwgdG9waWMsIGJ5LCBVSUQsIHIudGV4dCk7XHJcbiAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlMS51cGRhdGVRdWVzdGlvblJlcXVlc3QocXVlc3Rpb25JZCk7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgaXMgXCIrIHIudGV4dCk7XHJcbiAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICB9XHJcblxyXG4gICAgfSApXHJcbiAgfVxyXG59XHJcbiJdfQ==