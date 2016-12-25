import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {AddPlayerPage} from "../addplayer/addplayer";


@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openAddPlayer(){
    console.log("button pressed");
    let profileModal = this.modalCtrl.create(AddPlayerPage, { userId: 8675309 });
    profileModal.present();
  }

}





