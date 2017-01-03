import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  games;
  team : Team;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.games = storageService.games;
    this.team = storageService.currentTeam;
  }

  addGame(){
    let profileModal = this.modalCtrl.create(GamePage);
    profileModal.present();
  }

  deleteGame(game){
    this.games.remove(game);
  }
}


