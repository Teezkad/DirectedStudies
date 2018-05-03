// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import {LoginModule} from "./login/login.module";
const topmost = require("ui/frame").topmost;

platformNativeScriptDynamic().bootstrapModule(AppModule);

import { BackendService } from "./services/backend.service";
import { Router } from "@angular/router";
import firebase = require("nativescript-plugin-firebase");
import * as app from "application";

firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  persist: false,
  storageBucket: 'gs://quizroom-4493b.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      BackendService.token = data.user.uid;
    } else {
      BackendService.token = "";

    }
  }
}).then(
  function(instance) {
    console.log("firebase.init done");
  },
  function(error) {
    console.log("firebase.init error: " + error);
  }
  );
  