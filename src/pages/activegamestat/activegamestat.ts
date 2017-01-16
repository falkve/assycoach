import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-activegamestat',
  templateUrl: 'activegamestat.html'
})
export class ActiveGameStatPage {
  currentGame;
  currentTeam;
  currentGamePlayers;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public storageService : StorageService) {
    this.currentGame = storageService.getCurrentGame();
    this.currentTeam = storageService.getCurrentTeam();
    this.currentGamePlayers = storageService.getCurrentGamePlayers();
  }

  addGoal(who){
    if(who == this.currentTeam.name){
      this.currentGame.goals ++;
    } else {
      this.currentGame.goalsOpponent ++;
    }
    this.storageService.updateActiveGame(this.currentGame);
  }

  startGame(){
    this.currentGame.startTime = new Date().toDateString();
    this.storageService.updateActiveGame(this.currentGame);
    this.currentGamePlayers.forEach((snapshot) =>{
      for (let gamePlayer of snapshot) {
        gamePlayer.position.startTime = new Date().toDateString();
        this.storageService.updateCurrentGamePlayer(gamePlayer);
      }
    });
  }

}




