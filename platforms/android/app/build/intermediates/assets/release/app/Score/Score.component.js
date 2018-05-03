"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var services_1 = require("../services");
var backend_service_1 = require("../services/backend.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var moment = require("moment");
var now = moment().format('LLLL');
var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(routerExtensions, firebaseService, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.route = route;
        this.currentUser = backend_service_1.BackendService.token;
        this.Cname = backend_service_1.BackendService.Cname;
        this.creatorId = backend_service_1.BackendService.instructor;
        this.route.queryParams.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.tname = params["name"];
            _this.fname = params["fname"];
            _this.lname = params["lname"];
            _this.tid = params["tid"];
        });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.score$ = this.firebaseService.getUserScore(this.uid, this.tid);
        // this.users$ = <any>this.firebaseService.getRegisteredUsers(BackendService.CID);
        this.score$.subscribe(function (val) {
            _this.graph$ = val;
            _this.length = val.length;
            if (_this.length != 0) {
                var dated = JSON.stringify(val[0].Date);
                var timestamp = moment(parseInt(dated));
                for (var i = 0; i < val.length; i++) {
                    var a = new Date(JSON.parse(JSON.stringify(_this.graph$[i].Date)));
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var year = a.getFullYear();
                    var month = months[a.getMonth()];
                    var date = a.getDate();
                    var hour = a.getHours();
                    var min = a.getMinutes();
                    var sec = a.getSeconds();
                    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
                    console.log("Date is " + time + " Timestamp is " + _this.graph$[i].Date);
                    _this.graph$[i].Datetime = time;
                }
                _this.getAverage();
            }
        });
    };
    ScoreComponent.prototype.getAverage = function () {
        var sum = 0;
        var maxi = 0;
        for (var i = 0; i < this.length; i++) {
            var score = JSON.parse(JSON.stringify(this.graph$[i].Score));
            sum += score;
            if (score > maxi) {
                maxi = score;
            }
        }
        this.max = maxi;
        this.avg = sum / this.length;
    };
    Object.defineProperty(ScoreComponent.prototype, "sideDrawerTransition", {
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
    ScoreComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ScoreComponent.prototype.onPageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = this.graph$;
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ScoreComponent.prototype, "drawerComponent", void 0);
    ScoreComponent = __decorate([
        core_1.Component({
            selector: "Score.component",
            moduleId: module.id,
            templateUrl: "./Score.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService, router_1.ActivatedRoute])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
