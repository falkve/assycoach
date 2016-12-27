import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PlayerPage } from '../pages/player/player';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddPlayerPage} from "../pages/addplayer/addplayer";
import {StorageService} from "../assets/scripts/storageservice";
import {BrowserModule} from "@angular/platform-browser";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyAZXxk_yvqzmzvljKQTa7zFtCE5pRVZuKQ",
  authDomain: "coachassistant-500d7.firebaseapp.com",
  databaseURL: "https://coachassistant-500d7.firebaseio.com",
  storageBucket: "coachassistant-500d7.appspot.com",
  messagingSenderId: "452645135599"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StorageService]
})
export class AppModule {}



