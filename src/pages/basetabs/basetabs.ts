import { Component } from '@angular/core';
import {Team, Game} from "../../../www/assets/scripts/gametypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {PlayerPage} from "../player/player";
import {GamePositionsPage} from "../gamepositions/gamepositions";

/*
  Generated class for the Basetabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-basetabs',
  templateUrl: 'basetabs.html'
})
export class BasetabsPage {

  game : Game;
  team : Team;

  playerRoot: any = PlayerPage;
  positionRoot: any = GamePositionsPage;

  constructor(storageService : StorageService) {
    this.team = storageService.getCurrentTeam();
    this.game = storageService.getCurrentGame();
  }

}
