import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CoachAssistantApp } from './app.component';
import { PlayerPage } from '../pages/player/player';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddPlayerPage} from "../pages/addplayer/addplayer";
import {BrowserModule} from "@angular/platform-browser";
import {AngularFireModule} from "angularfire2";
import {LoginPage} from "../pages/login/login";
import {PlayersPage} from "../pages/players/players";
import {StartPage} from "../pages/start/start";
import {StorageService} from "../../www/assets/scripts/storageservice";
import {GamePositionPage} from "../pages/gameposition/gameposition";
import {GamePage} from "../pages/game/game";
import {GamesPage} from "../pages/games/games";
import {GamePositionsPage} from "../pages/gamepositions/gamepositions";
import {TeamPage} from "../pages/team/team";
import {TeamsPage} from "../pages/teams/teams";

export const firebaseConfig = {
  apiKey: "AIzaSyAZXxk_yvqzmzvljKQTa7zFtCE5pRVZuKQ",
  authDomain: "coachassistant-500d7.firebaseapp.com",
  databaseURL: "https://coachassistant-500d7.firebaseio.com",
  storageBucket: "coachassistant-500d7.appspot.com",
  messagingSenderId: "452645135599"
};

@NgModule({
  declarations: [
    CoachAssistantApp,
    GamePositionsPage,
    GamePositionPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage,
    LoginPage,
    PlayersPage,
    StartPage,
    GamePage,
    GamesPage,
    TeamPage,
    TeamsPage
  ],
  imports: [
    IonicModule.forRoot(CoachAssistantApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CoachAssistantApp,
    GamePositionsPage,
    GamePositionPage,
    PlayerPage,
    HomePage,
    TabsPage,
    AddPlayerPage,
    LoginPage,
    PlayersPage,
    StartPage,
    GamePage,
    GamesPage,
    TeamPage,
    TeamsPage
  ],
  providers: [StorageService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}



