import { Component } from '@angular/core';
import {ChoosePlayersPage} from "../chooseplayer/chooseplayer";
import {ActiveGamePage} from "../activegame/activegame";
import {ActiveGameStatPage} from "../activegamestat/activegamestat";
import {Game, Team} from "../../../www/assets/scripts/gametypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePlayerStatListPage} from "../game-player-stat-list/game-player-stat-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  game : Game;
  team : Team;

  playerRoot: any = ChoosePlayersPage;
  activeGameRoot: any = ActiveGamePage;
  activePlayersPage : any = GamePlayerStatListPage;
  activeGameStatRoot: any = ActiveGameStatPage;

  constructor(storageService : StorageService) {
    this.team = storageService.getCurrentTeam();
    this.game = storageService.getCurrentGame();
  }

}
