import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AddPlayerPage } from "../addplayer/addplayer";
import {StorageService} from "../../../www/assets/scripts/storageservice";

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  players;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.players = storageService.players;
  }

  addPlayer(){
    let profileModal = this.modalCtrl.create(AddPlayerPage);
    profileModal.present();
  }

  deletePlayer(player){
    this.players.remove(player);
  }
}


