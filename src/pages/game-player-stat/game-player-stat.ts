import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-game-player-stat',
  templateUrl: 'game-player-stat.html'
})
export class GamePlayerStatPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GamePlayerStatPage Page');
  }

}
