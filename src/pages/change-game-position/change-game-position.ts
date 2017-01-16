import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";

/*
  Generated class for the ChangeGamePosition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-game-position',
  templateUrl: 'change-game-position.html'
})
export class ChangeGamePositionPage {

  gamePlayers;
  player;
  constructor(public navCtrl: NavController, private ele: ElementRef, public storageService : StorageService, params: NavParams, public viewCtrl : ViewController) {
    this.gamePlayers = storageService.getCurrentGamePlayers();
    this.player = params.get('player');

  }

  changePosition(gamePlayer){
      let position = gamePlayer.position;
      gamePlayer.position = this.player.position;
      this.player.position = position;
      this.storageService.updateCurrentGamePlayer(this.player);
      this.storageService.updateCurrentGamePlayer(gamePlayer);
      this.close();
  }

  ngAfterViewInit() {
    //this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_changeegameposition "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
