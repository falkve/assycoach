///<reference path="../assets/scripts/firebasestorage.ts"/>
import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  //players : Map<string, boolean>;
  players;

  rootPage = TabsPage;

  //constructor(platform: Platform, af: AngularFire) {
    constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
