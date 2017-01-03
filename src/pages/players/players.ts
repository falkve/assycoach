import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
  players;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,storageService : StorageService) {
    this.players = storageService.players;
  }
}


