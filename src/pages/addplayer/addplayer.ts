import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {Player} from "../../../www/assets/scripts/playertypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-addplayer',
  templateUrl: 'addplayer.html'
})
export class AddPlayerPage {
  name:string;
  number:number;

  players;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, storageService : StorageService) {
    this.players = storageService.players;
  }


  addPlayer(){
    let player = new Player(this.name, this.number);
    this.players.push(player);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}




