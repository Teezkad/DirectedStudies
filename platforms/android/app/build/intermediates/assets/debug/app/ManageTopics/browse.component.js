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
        if (backend_service_1.BackendService.instructor != true) {
            this.TAs$ = this.firebaseService1.getTAList();
            this.TAs$.subscribe(function (vals) {
                if (vals[0].TA != null) {
                    console.log(backend_service_1.BackendService.TA = JSON.parse(JSON.stringify(vals[0].TA)));
                }
            });
        }
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
        this.deleteQuestions(tag);
        this.firebaseService1.deleteTag(tag)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    BrowseComponent.prototype.deleteQuestions = function (tag) {
        var _this = this;
        this.quiz$ = this.firebaseService1.getTopicQuestions(tag.id);
        this.quiz$.subscribe(function (questions) {
            var question = questions;
            for (var q = 0; q < questions.length; q++) {
                _this.firebaseService1.deleteQuestion(question[q]);
            }
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
        var _this = this;
        this.firebaseService.setTAFalse(userId, backend_service_1.BackendService.CID).then(function (message) {
            alert(message);
            _this.firebaseService.unregisterTA(backend_service_1.BackendService.CID, firstname, lastname, userId, id).then(function (message) {
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUloRix3Q0FBNEM7QUFDNUMscUVBQStEO0FBRS9ELCtEQUE2RDtBQUM3RCxtRkFBaUY7QUFDakYsb0NBQXNDO0FBRXRDLDBDQUFrRTtBQVFsRTtJQTBCSSx5QkFBb0IsZ0JBQWtDLEVBQzFDLGVBQWdDLEVBQWUsZ0JBQWtDLEVBQ2pGLEtBQXFCO1FBRmIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBZSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBM0JqQyxnQkFBVyxHQUFHLGdDQUFjLENBQUMsS0FBSyxDQUFDO1FBQ25DLFVBQUssR0FBRyxnQ0FBYyxDQUFDLEtBQUssQ0FBQztRQWV0QixjQUFTLEdBQUcsZ0NBQWMsQ0FBQyxVQUFVLENBQUM7UUFDdEMsTUFBQyxHQUFHLEdBQUcsQ0FBQztRQUNSLE9BQUUsR0FBRyxnQ0FBYyxDQUFDLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBV2hCLENBQUM7SUFDTDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxLQUFLLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUEsQ0FBQyxnQ0FBYyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBSUQsQ0FBQztJQUVELHNCQUFJLGlEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksUUFBa0IsRUFBRSxJQUFZLEVBQUUsR0FBVSxFQUFFLGNBQXNCLEVBQUUsT0FBa0IsRUFBRSxHQUFXO1FBQWpILGlCQU9DO1FBTkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQVc7WUFDbkYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVSxFQUFFLElBQVk7UUFDaEMsZ0NBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVGLGdDQUFNLEdBQU4sVUFBTyxHQUFRO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNqQyxLQUFLLENBQUM7WUFDTCxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEdBQU87UUFBdkIsaUJBUUM7UUFQQyxJQUFJLENBQUMsS0FBSyxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQzFCLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUN6QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLEdBQVcsRUFBRSxTQUFpQjtRQUMxQyxJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsV0FBVyxFQUFFLFNBQVM7YUFDekI7U0FDRixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxRQUFnQjtRQUN2RCxJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksU0FBaUIsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxHQUFXO1FBRTFFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGdDQUFjLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQVc7WUFDbEcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxFQUFVO1FBQTdFLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdDQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBVztZQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQ0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ3RHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBRSxLQUFLLENBQUM7WUFDdEQsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLFVBQWtCLEVBQUUsS0FBYSxFQUFFLEVBQVUsRUFBRSxHQUFXO1FBQXhFLGlCQWVDO1FBZEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFBLENBQUM7WUFFckQsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLCtFQUErRTtnQkFDOUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBRUYsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBL0pzQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzREQUFDO0lBUnBELGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBMkJ3QyxvQ0FBZ0I7WUFDekIsMEJBQWUsRUFBaUMscUNBQWdCO1lBQzFFLHVCQUFjO09BNUJ4QixlQUFlLENBeUszQjtJQUFELHNCQUFDO0NBQUEsQUF6S0QsSUF5S0M7QUF6S1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb20sIE9wdGlvbnMsIFF1ZXN0aW9ufSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtUYWd9IGZyb20gJy4uL1RhZ3MvdGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlMX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UuMVwiXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9icm93c2UuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGN1cnJlbnRVc2VyID0gQmFja2VuZFNlcnZpY2UudG9rZW47XHJcbiAgICBDbmFtZSA9IEJhY2tlbmRTZXJ2aWNlLkNuYW1lO1xyXG4gICBcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHB1YmxpYyB1c2VycyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBteWNsYXNzcm9vbXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgdGFncyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBUQXMkOiBPYnNlcnZhYmxlIDxhbnk+O1xyXG4gICAgcHVibGljIHF1ZXN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyByZXF1ZXN0cyQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBjcmVhdG9ySWQgPSBCYWNrZW5kU2VydmljZS5pbnN0cnVjdG9yO1xyXG4gICAgcHVibGljIGkgPSAnYSc7XHJcbiAgICBwdWJsaWMgVEEgPSBCYWNrZW5kU2VydmljZS5UQTtcclxuICAgIHB1YmxpYyBtZXNzYWdlID0gXCJcIjtcclxuICAgIHB1YmxpYyBxdWl6JDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLCAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlMTogRmlyZWJhc2VTZXJ2aWNlMSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5teWNsYXNzcm9vbXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRDcmVhdGVkQ2xhc3NlcygpO1xyXG4gICAgICAgIHRoaXMudXNlcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRSZWdpc3RlcmVkVXNlcnMoQmFja2VuZFNlcnZpY2UuQ0lEKTtcclxuICAgICAgICB0aGlzLnRhZ3MkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVRhZ0xpc3QoKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0UXVlc3Rpb25SZXF1ZXN0cygpOyAgXHJcbiAgICAgICAgaWYoQmFja2VuZFNlcnZpY2UuaW5zdHJ1Y3RvciAhPSB0cnVlKXtcclxuICAgICAgICB0aGlzLlRBcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5nZXRUQUxpc3QoKTsgICAgIFxyXG4gICAgICAgIHRoaXMuVEFzJC5zdWJzY3JpYmUodmFscyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhbHNbMF0uVEEgIT1udWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coQmFja2VuZFNlcnZpY2UuVEEgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSh2YWxzWzBdLlRBKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2VGFnKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbiwgbmFtZTogc3RyaW5nLCBUYWc6c3RyaW5nLCBxdWVzdGlvblR5cGVJZDogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10sIFVJRDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRRdWVzdGlvbihuYW1lLCBUYWcsIHF1ZXN0aW9uVHlwZUlkLCBvcHRpb25zLCBVSUQpLnRoZW4oKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gY3JlYXRlZCBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYnJvd3NlXCJdKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlUXVlc3Rpb25SZXF1ZXN0KHF1ZXN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVRhZyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLlRJRCA9IGlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiBpcyBBY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgYWxlcnQobmFtZSArIFwiIGlzIEFjdGl2YXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgIGRlbGV0ZSh0YWc6IFRhZykge1xyXG4gICAgdGhpcy5kZWxldGVRdWVzdGlvbnModGFnKTtcclxuXHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlVGFnKHRhZylcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVF1ZXN0aW9ucyh0YWc6VGFnKXtcclxuICAgIHRoaXMucXVpeiQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlMS5nZXRUb3BpY1F1ZXN0aW9ucyh0YWcuaWQpO1xyXG4gICAgdGhpcy5xdWl6JC5zdWJzY3JpYmUocXVlc3Rpb25zID0+e1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHF1ZXN0aW9ucztcclxuICAgICAgICBmb3IodmFyIHEgPSAwOyBxIDwgcXVlc3Rpb25zLmxlbmd0aDsgcSsrKXtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UxLmRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uW3FdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdRdWVzdGlvbnModGlkOiBzdHJpbmcsIHRvcGljbmFtZTogc3RyaW5nKXtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIFwidGlkXCI6IHRpZCxcclxuICAgICAgICAgICAgXCJ0b3BpY25hbWVcIjogdG9waWNuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRJUyBzZW50IGlzIFwiKyB0aWQpO1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1widG9waWNRdWVzdGlvblwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHZpZXdVc2VyKHVpZDogc3RyaW5nLCBmaXJzdG5hbWU6IHN0cmluZywgbGFzdG5hbWU6IHN0cmluZyl7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBcInVpZFwiOiB1aWQsXHJcbiAgICAgICAgICAgIFwiZm5hbWVcIjogZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBcImxuYW1lXCI6IGxhc3RuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1widG9waWNTY29yZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgfVxyXG5cclxuICB1cGdyYWRlVXNlcihmaXJzdG5hbWU6IHN0cmluZywgbGFzdG5hbWU6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIFVJRDogc3RyaW5nKXtcclxuXHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3RlclRBKEJhY2tlbmRTZXJ2aWNlLkNJRCwgZmlyc3RuYW1lLCBsYXN0bmFtZSxVSUQsIHVzZXJJZCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRBIGNyZWF0ZWQgXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRvd25ncmFkZVVzZXIoZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBpZDogc3RyaW5nKXtcclxuICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2V0VEFGYWxzZSh1c2VySWQsIEJhY2tlbmRTZXJ2aWNlLkNJRCkudGhlbigobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS51bnJlZ2lzdGVyVEEoQmFja2VuZFNlcnZpY2UuQ0lELCBmaXJzdG5hbWUsIGxhc3RuYW1lLCB1c2VySWQsIGlkKS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQSBkb3duZ3JhZGVkIFwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG4gIHJlbW92ZVVzZXIodWlkOiBzdHJpbmcpe1xyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEuZGVsZXRlUmVnaXN0ZXJlZFVzZXJzKHVpZCkgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHVzZXIgZnJvbSB0aGlzIGNsYXNzLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm9tcHRNZXNzYWdlKHF1ZXN0aW9uSWQ6IHN0cmluZywgdG9waWM6IHN0cmluZywgYnk6IHN0cmluZywgVUlEOiBzdHJpbmcpe1xyXG4gICAgIGRpYWxvZ3MucHJvbXB0KFwiRW50ZXIgTWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2UpLnRoZW4oIHI9PiB7IFxyXG5cclxuICAgICBpZihyLnRleHQgPT0gbnVsbCB8fCByLnRleHQgPT0gXCJcIil7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gTWVzc2FnZVwiKTtcclxuICAgICB9ZWxzZXtcclxuICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubWVzc2FnZVRvUmVjZWl2ZXIocXVlc3Rpb25JZCwgdG9waWMsIGJ5LCBVSUQsIHIudGV4dCk7XHJcbiAgICAgICAgLy8gIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLm1lc3NhZ2VGcm9tU2VuZGVyKHF1ZXN0aW9uSWQsIHRvcGljLCBieSwgVUlELCByLnRleHQpO1xyXG4gICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZTEudXBkYXRlUXVlc3Rpb25SZXF1ZXN0KHF1ZXN0aW9uSWQpO1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGlzIFwiKyByLnRleHQpO1xyXG4gICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==