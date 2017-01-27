import {Component, ViewChild} from '@angular/core';
import {ChoosePlayersPage} from "../choose-player/choose-player";
import {ViewActiveGamePage} from "../view-active-game/view-active-game";
import {ViewActiveGameStatPage} from "../view-active-game-stat/view-active-game-stat";
import {Game, Team} from "../../../www/assets/scripts/gametypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {ListGamePlayerStatPage} from "../list-game-player-stat/list-game-player-stat";
import {NavController} from "ionic-angular";
import {Tabs} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('gametabs') tabRef: Tabs;

  game : Game;
  team : Team;

  playerRoot: any = ChoosePlayersPage;
  activeGameRoot: any = ViewActiveGamePage;
  activePlayersPage : any = ListGamePlayerStatPage;
  activeGameStatRoot: any = ViewActiveGameStatPage;

  constructor(storageService : StorageService, private nav: NavController) {
    this.team = storageService.getCurrentTeam();
    this.game = storageService.getCurrentGame();

  }

  ionViewDidEnter() {
    if(this.game.startTime == 0) {
      this.tabRef.select(3);
    }
  }

}
