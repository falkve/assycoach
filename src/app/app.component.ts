import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {LoginPage} from "../pages/login/login";
import {ListPlayersPage} from "../pages/list-players/list-players";
import {GamePositionsListPage} from "../pages/game-positions-list/game-positions-list";
import {ListGamesPage} from "../pages/list-games/list-games";
import {ListTeamsPage} from "../pages/list-teams/list-teams";
import {ListHistoryGamesPage} from "../pages/list-history-games/list-history-games";


@Component({
  templateUrl: 'app.html'
})
export class CoachAssistantApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = ListTeamsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Players', component: ListPlayersPage },
      { title: 'Positions', component: GamePositionsListPage },
      { title: 'Games', component: ListGamesPage },
      { title: 'History', component: ListHistoryGamesPage },
      { title: 'Switch Team', component: ListTeamsPage }
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
