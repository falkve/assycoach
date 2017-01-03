import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {LoginPage} from "../pages/login/login";
import {PlayerPage} from "../pages/player/player";
import {GamePositionsPage} from "../pages/gamepositions/gamepositions";
import {GamesPage} from "../pages/games/games";
import {TeamsPage} from "../pages/teams/teams";


@Component({
  templateUrl: 'app.html'
})
export class CoachAssistantApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = TeamsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Players', component: PlayerPage },
      { title: 'Positions', component: GamePositionsPage },
      { title: 'Match', component: GamesPage },
      { title: 'Switch Team', component: TeamsPage }
     // { title: 'History', component: TabsPage }
      //{ title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
