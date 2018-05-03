import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { BackendService } from "./services/backend.service";
import { topmost } from "ui/frame";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private routerExtensions: RouterExtensions) { }

  canActivate() {
    if (BackendService.isLoggedIn()) {
      return true;
    }
    else {
      this.routerExtensions.navigate(["/login"]);
      console.log("Navigating to login");
      return false;
    }
  }
}
