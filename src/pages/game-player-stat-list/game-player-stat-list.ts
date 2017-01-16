import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePlayerStatPage} from "../game-player-stat/game-player-stat";


@Component({
  selector: 'page-game-player-stat-list',
  templateUrl: 'game-player-stat-list.html'
})
export class GamePlayerStatListPage {

  currentGamePlayers;

  constructor(public navCtrl: NavController, storageService : StorageService) {
    this.currentGamePlayers = storageService.getCurrentGamePlayers();
  }


  showPlayerStat(player){
    this.navCtrl.push(GamePlayerStatPage,{
      player: player
    });
  }
}
