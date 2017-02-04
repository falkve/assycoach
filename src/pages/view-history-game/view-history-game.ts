import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-view-history-game',
  templateUrl: 'view-history-game.html'
})
export class ViewHistoryGamePage {

  currentHistoryGame;
  currentTeam;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public storageService : StorageService) {
    this.currentHistoryGame = storageService.getCurrentHistoryGame();
    this.currentTeam = storageService.getCurrentTeam();
  }

  formatTime(time){
    let d = new Date(time);
    return d.toLocaleTimeString();
  }

  formatDate(time){
    let d = new Date(time);
    return d.toLocaleDateString();
  }

}
