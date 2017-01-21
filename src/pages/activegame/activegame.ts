import { Component } from '@angular/core';
import {ModalController, NavParams} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team, Game} from "../../../www/assets/scripts/gametypes";
import {ChangeGamePositionPage} from "../change-game-position/change-game-position";
import {Util} from "../../../www/assets/scripts/util";
import Timer = NodeJS.Timer;


@Component({
  selector: 'page-activegame',
  templateUrl: 'activegame.html'
})
export class ActiveGamePage {

  gamePlayers;
  team : Team;
  game : Game;
  date : Date = new Date();
  timeIntervalId : Timer = null;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params:NavParams, public storageService : StorageService) {
    this.game = storageService.getCurrentGame();
    this.team = storageService.getCurrentTeam();
    this.gamePlayers = storageService.getCurrentGamePlayers();
  }

  changePosition(gamePlayer){
    let profileModal = this.modalCtrl.create(ChangeGamePositionPage, { player: gamePlayer });
    profileModal.present();
  }

  calcTime(dateTime){
    if(dateTime != 0){
      return Util.getElapsedTime(dateTime,this.date.getTime()).getTime();
    } else {
      return '';
    }
  }
  ionViewWillEnter() {
    this.timeIntervalId = setInterval(()=>{
      this.date = new Date();
    },1000);
  }

  ionViewWillLeave(){
    clearInterval(this.timeIntervalId);
    this.timeIntervalId = null;
  }
}


