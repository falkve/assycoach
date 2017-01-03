import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePositionPage} from "../gameposition/gameposition";
import {Team} from "../../../www/assets/scripts/gametypes";



@Component({
  selector: 'page-gamepositions',
  templateUrl: 'gamepositions.html'
})
export class GamePositionsPage {

  gamePositions;
  team : Team;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.gamePositions = storageService.gamePositions;
    this.team = storageService.currentTeam;
  }

  addPosition(){
    let profileModal = this.modalCtrl.create(GamePositionPage);
    profileModal.present();
  }

  deletePosition(gamePosition){
    this.gamePositions.remove(gamePosition);
  }

}
