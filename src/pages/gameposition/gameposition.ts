import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {GamePosition} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-gameposition',
  templateUrl: 'gameposition.html'
})
export class GamePositionPage {

  name:string;
  shorty:string;

  gamePositions;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, storageService : StorageService) {
    this.gamePositions = storageService.gamePositions;
  }

  createShortVersion(){
    this.shorty = this.name.substring(0,0);
  }

  addGamePosition(){
    let gamePosition = new GamePosition(this.name, this.shorty);
    this.gamePositions.push(gamePosition);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}




