"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var register_component_1 = require("./register.component");
var registerRoutes = [
    { path: "", component: register_component_1.RegisterComponent },
];
exports.registerRouting = router_1.RouterModule.forChild(registerRoutes);
