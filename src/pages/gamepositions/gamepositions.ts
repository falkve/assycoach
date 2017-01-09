import { Component } from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePositionPage} from "../gameposition/gameposition";
import {Team} from "../../../www/assets/scripts/gametypes";
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-gamepositions',
  templateUrl: 'gamepositions.html'
})
export class GamePositionsPage {

  gamePositions;
  team : Team;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private alertCtrl: AlertController, public storageService : StorageService) {
    this.gamePositions = storageService.getGamePositions();
    this.team = storageService.getCurrentTeam();
  }

  addPosition(){
    let profileModal = this.modalCtrl.create(GamePositionPage);
    profileModal.present();
  }

  deletePosition(gamePosition){
    this.gamePositions.remove(gamePosition);
    this.navCtrl.pop();
    this.navCtrl.push(GamePositionsPage);
  }
}
