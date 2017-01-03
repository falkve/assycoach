import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";


@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  games;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addGame(){
    let profileModal = this.modalCtrl.create(GamePage);
    profileModal.present();
  }

  deleteGame(game){
    this.games.remove(game);
  }
}


