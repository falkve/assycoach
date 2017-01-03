import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {Game} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  name:string;

  games;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }


  addGame(){
    let game = new Game(this.name);
    this.games.push(game);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}




