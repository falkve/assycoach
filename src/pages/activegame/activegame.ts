import { Component } from '@angular/core';
import {ModalController, NavParams} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team, Game} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-activegame',
  templateUrl: 'activegame.html'
})
export class ActiveGamePage {

  gamePlayers;
  team : Team;
  game : Game;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params:NavParams, public storageService : StorageService) {
    this.game = storageService.getCurrentGame();
    this.team = storageService.getCurrentTeam();
    this.gamePlayers = storageService.getCurrentGamePlayers();

  }

  changePosition(gamePlayer){

  }
}


