import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Util} from "../../../www/assets/scripts/util";
import {ActiveGamePosition} from "../../../www/assets/scripts/gametypes";
import 'rxjs/add/operator/map'

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
  currentGame;
  constructor(public navCtrl: NavController, private ele: ElementRef, public storageService : StorageService, params: NavParams, public viewCtrl : ViewController) {
    this.gamePlayers = storageService.getCurrentGamePlayers();
    this.player = params.get('player');
    this.currentGame = storageService.getCurrentGame();
  }


  changePosition(gamePlayer){

    if(this.currentGame.startTime != null){
      let endTime = new Date().getTime();

      gamePlayer.position.endTime = endTime;
      this.player.position.endTime = endTime;

      if(gamePlayer.historyPositions == null){
        gamePlayer.historyPositions = new Array<ActiveGamePosition>();
      }
      if(this.player.historyPositions == null){
        this.player.historyPositions = new Array<ActiveGamePosition>();
      }
      gamePlayer.historyPositions.push(Util.cloneActiveGamePosition(gamePlayer.position));
      this.player.historyPositions.push(Util.cloneActiveGamePosition(this.player.position));


      let newDate = new Date().getTime();
      gamePlayer.position.startTime = newDate;
      this.player.position.startTime = newDate;
      gamePlayer.position.endTime = 0;
      this.player.position.endTime = 0;

    }

    let position = gamePlayer.position;
    gamePlayer.position = this.player.position;
    this.player.position = position;

    this.storageService.updateCurrentGamePlayer(gamePlayer);
    this.storageService.updateCurrentGamePlayer(this.player);

    this.close();
  }

  ngAfterViewInit() {
    //this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_changeegameposition "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
