import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";
import {TabsPage} from "../tabs/tabs";
import {Util} from "../../../www/assets/scripts/util";
import Timer = NodeJS.Timer;



@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  games;
  team : Team;
  timeIntervalId : Timer = null;
  date : Date = new Date();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.games = storageService.getActiveGames();
    this.team = storageService.getCurrentTeam();
  }

  addGame(){
    let profileModal = this.modalCtrl.create(GamePage);

    profileModal.onDidDismiss(data => {
      this.navCtrl.push(TabsPage);
    });

    profileModal.present();
  }

  deleteGame(game){
    this.games.remove(game);
  }


  goToGame(game){
    this.storageService.setCurrentGame(game);
    this.navCtrl.pop();
    this.navCtrl.push(TabsPage);
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


