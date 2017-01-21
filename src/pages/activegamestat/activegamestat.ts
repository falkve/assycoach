import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import Timer = NodeJS.Timer;
import {Util} from "../../../www/assets/scripts/util";


@Component({
  selector: 'page-activegamestat',
  templateUrl: 'activegamestat.html'
})
export class ActiveGameStatPage {
  currentGame;
  currentTeam;
  currentGamePlayers;

  timeIntervalId : Timer = null;
  timer : string = ' ';



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
  startTimer(){
    this.timeIntervalId = setInterval(()=>this.updateTime(), 1000);
  }

  endTimer(){
    clearInterval(this.timeIntervalId);
    this.timeIntervalId = null;
  }

  private updateTime(){
     let d = new Date()
     this.timer = Util.getElapsedTime(this.currentGame.startTime,d.getTime()).getTime();
  }

  get currentTime(){
    return this.timer;
  }

  startGame(){


    let date = new Date().getTime();

    this.storageService.loadCurrentGamePlayers(this.currentTeam.id, this.currentGame.id, (snapshot)=>{
      snapshot.forEach((childSnapshot) => {
        let gamePlayer = childSnapshot.val();
        gamePlayer.position.startTime = date;
        this.storageService.updateCurrentGamePlayer(gamePlayer);
      });
    });
    this.currentGame.startTime = date;
    this.storageService.updateActiveGame(this.currentGame);
    this.startTimer();
  }

  endGame(){
    this.currentGame.endTime = new Date().getTime();
    this.storageService.addHistoryGame(this.currentGame);
    this.storageService.removeActiveGame(this.currentGame);
    this.endTimer();
    //this.navCtrl.push(GamesPage);
  }

  endPeriod(){

  }



  ionViewWillEnter() {
    if (this.currentGame.startTime > 0 && this.timeIntervalId == null) {
      this.updateTime();
      this.startTimer();
    }
  }

  ionViewWillLeave(){
    this.endTimer();
  }



}




