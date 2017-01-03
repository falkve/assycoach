import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePositionPage} from "../gameposition/gameposition";


@Component({
  selector: 'page-gamepositions',
  templateUrl: 'gamepositions.html'
})
export class GamePositionsPage {

  gamePositions;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storageService : StorageService) {
    this.gamePositions = storageService.gamePositions;
  }

  addPosition(){
    let profileModal = this.modalCtrl.create(GamePositionPage);
    profileModal.present();
  }

  deletePosition(gamePosition){
    this.gamePositions.remove(gamePosition);
  }

}
