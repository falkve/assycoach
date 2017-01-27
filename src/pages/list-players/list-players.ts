import {Component} from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AddPlayerPage } from "../add-player/add-player";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-player',
  templateUrl: 'list-players.html'
})
export class ListPlayersPage {

  players;
  team : Team;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.players = storageService.getPlayers();
    this.team = storageService.getCurrentTeam();
  }

  addPlayer(){
    let profileModal = this.modalCtrl.create(AddPlayerPage);
    profileModal.present();
  }

  deletePlayer(player){
    this.players.remove(player);
  }
}


