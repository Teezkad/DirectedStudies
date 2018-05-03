"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var Observable_1 = require("rxjs/Observable");
var services_1 = require("../services");
var firebase = require("nativescript-plugin-firebase");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, firebaseService, backendService, firebaseService1) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.backendService = backendService;
        this.firebaseService1 = firebaseService1;
        this.currentUser = backend_service_1.BackendService.token;
        this.person = firebase.getCurrentUser();
        this.human = JSON.stringify(this.person);
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        backend_service_1.BackendService.TA == false;
        backend_service_1.BackendService.instructor = false;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.classrooms$ = this.firebaseService.getAllClassList();
        this.myclassrooms$ = this.firebaseService.getMyClassList();
        this.users$ = this.firebaseService.getMyUserList(backend_service_1.BackendService.token);
        this.users$.subscribe(function (val) {
            console.log(backend_service_1.BackendService.Uid = JSON.parse(JSON.stringify(val[0].id)));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
            backend_service_1.BackendService.Uname = JSON.parse(JSON.stringify(val[0].FirstName)) + " " + JSON.parse(JSON.stringify(val[0].LastName));
            backend_service_1.BackendService.studentNum = JSON.parse(JSON.stringify(val[0].studentNum));
        });
        console.log("My uid is" + backend_service_1.BackendService.Uid);
        console.log("Login successful");
        this.myclassrooms$.subscribe(function (my) {
            _this.len = my.length;
            _this.myClass = my;
        });
        this.classrooms$.subscribe(function (clas) {
            _this.allClass = clas;
            _this.allClass1 = clas;
            _this.leng = clas.length;
            _this.showclasses();
        });
        var user = firebase.fetchProvidersForEmail("kadiri@gmail.com");
        console.log("Firebase return for real user is " + JSON.stringify(user));
        var user2 = firebase.fetchProvidersForEmail("BHILGYUIK@gmail.com");
        console.log("Firebase return for fake user is " + JSON.stringify(user2));
    };
    HomeComponent.prototype.refreshMe = function (args) {
        var _this = this;
        console.log("refreshing");
        setTimeout(function () { return _this.ngOnInit(); }, 2000);
    };
    HomeComponent.prototype.showclasses = function () {
        console.log("all classes size is  " + this.leng);
        console.log("my class length is " + this.len);
        if (this.myclassrooms$ == null) {
            this.ngOnInit();
        }
        for (var i = 0; i < this.leng; i++) {
            var all = JSON.parse(JSON.stringify(this.allClass1[i].ID));
            for (var j = 0; j < this.len; j++) {
                var my = JSON.parse(JSON.stringify(this.myClass[j].ID));
                if (all == my) {
                    this.allClass[i].registered = true;
                }
            }
        }
    };
    HomeComponent.prototype.logOut = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    //delete classroo
    HomeComponent.prototype.deleteCl = function (classroom) {
        console.log("deleting");
        this.firebaseService1.delete(classroom)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    HomeComponent.prototype.navclass = function () {
        this.routerExtensions.navigate(["/classroom"]);
    };
    HomeComponent.prototype.navques = function () {
        this.routerExtensions.navigate(["/search"]);
    };
    HomeComponent.prototype.inClass = function (classroom, id, Cname, Prof, Year, uid, ID) {
        //update the classroom node to include users who registered
        this.firebaseService.registerClassroom(classroom, backend_service_1.BackendService.Uid, backend_service_1.BackendService.Uname, backend_service_1.BackendService.studentNum)
            .then(function (message) {
            alert(message);
            console.log("Classroom successfully registered");
        });
        this.firebaseService.userRegister(id, Cname, Prof, Year, uid, ID);
        this.ngOnInit();
    };
    //to store all available data for each user, use backend service to store the value of each attrinute 
    //for every users
    //this is to turn off the delete button 
    HomeComponent.prototype.navTag = function () {
        this.routerExtensions.navigate(["/tag"]);
    };
    HomeComponent.prototype.validateClass = function (id, name, uid) {
        var exists = false;
        for (var a = 0; a < this.leng; a++) {
            if (id == this.allClass[a].id) {
                var exists = true;
                console.log("Class exists");
            }
        }
        return exists;
    };
    HomeComponent.prototype.activateClass = function (id, name, uid) {
        if (this.validateClass(id, name, uid)) {
            backend_service_1.BackendService.CID = id;
            backend_service_1.BackendService.Cname = name;
            console.log(id + " is now active class ID");
            console.log(name + " is now active class");
            alert(name + " is now active class");
            if (uid == backend_service_1.BackendService.token) {
                backend_service_1.BackendService.instructor = true;
                var navigationExtras = {
                    queryParams: {
                        "uid": uid,
                    }
                };
                this.routerExtensions.navigate(["browse"], navigationExtras);
            }
            else {
                this.TAs$ = this.firebaseService1.getTAList();
                this.TAs$.subscribe(function (vals) {
                    if (vals[0].TA != null) {
                        console.log(backend_service_1.BackendService.TA = JSON.parse(JSON.stringify(vals[0].TA)));
                    }
                });
                this.routerExtensions.navigate(["/search"]);
            }
        }
        else {
            alert("Classroom does not exist");
        }
    };
    HomeComponent.prototype.delete = function (tag) {
        this.firebaseService1.deleteTag(tag)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    HomeComponent.prototype.deleteClass = function (room) {
        this.firebaseService1.deleteMyclass(room);
    };
    HomeComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        console.log("Search value is" + searchValue);
        if (searchValue !== "") {
            this.allClass2 = new Observable_1.Observable();
            var count = 0;
            for (var i = 0; i < this.leng; i++) {
                if (JSON.stringify(this.allClass1[i].Name).toLowerCase().indexOf(searchValue) !== -1) {
                    console.log("search result is " + JSON.stringify(this.allClass1[i].Name));
                    // this.allClass2.push(this.allClass1[i]);
                    this.allClass2[count] = this.allClass1[i];
                    console.log("All results are " + JSON.stringify(this.allClass2[count]));
                    count++;
                }
            }
        }
    };
    HomeComponent.prototype.onClear = function (args) {
        var _this = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Search Available classes";
        this.allClass2 = new Observable_1.Observable();
        var i = 0;
        this.allClass1.forEach(function (item) {
            _this.allClass2[i] = item;
            i++;
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, backend_service_1.BackendService,
            services_1.FirebaseService1])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
