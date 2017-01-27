import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Util} from "../../../www/assets/scripts/util";


@Component({
  selector: 'page-game-player-stat',
  templateUrl: 'game-player-stat.html'
})
export class GamePlayerStatPage {

  gamePlayer;
  constructor(public navCtrl: NavController,  params: NavParams) {
    this.gamePlayer = params.get('player');
  }

  ionViewDidLoad() {
    console.log('Hello GamePlayerStatPage Page');
  }


  calcTime(from, to){
    return Util.getElapsedTime(from,to).getTime();
  }

  formatDate(dateLong){
    let d = new Date(dateLong);
    return d;
  }

}
