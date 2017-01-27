import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import Timer = NodeJS.Timer;
import {Util} from "../../../www/assets/scripts/util";
import {Period, ActiveGamePosition} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-activegamestat',
  templateUrl: 'view-active-game-stat.html'
})
export class ViewActiveGameStatPage {
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
      this.currentGame.period.goals ++;
    } else {
      this.currentGame.goalsOpponent ++;
      this.currentGame.period.goalsOpponent ++;
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
     this.timer = Util.getElapsedTime(this.currentGame.period.startTime,d.getTime()).getTime();
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
    this.currentGame.period = new Period(1);
    this.currentGame.period.startTime = date;
    this.storageService.updateActiveGame(this.currentGame);
    this.startTimer();
  }

  endGame(){
    this.currentGame.endTime = new Date().getTime();

    if(this.currentGame.historyPeriods == null){
      this.currentGame.historyPeriods = new Array<Period>();
    }
    this.currentGame.historyPeriods.push(this.currentGame.period);
    this.currentGame.period = null;

    this.storageService.addHistoryGame(this.currentGame);
    this.storageService.removeActiveGame(this.currentGame);
    this.endTimer();
    //this.navCtrl.push(ListGamesPage);
  }

  endPeriod(){
    let date = new Date().getTime();
    this.currentGame.period.endTime = date;
    this.storageService.loadCurrentGamePlayers(this.currentTeam.id, this.currentGame.id, (snapshot)=>{
      snapshot.forEach((childSnapshot) => {
        let gamePlayer = childSnapshot.val();
        gamePlayer.position.endTime = date;
        if(gamePlayer.historyPositions == null){
          gamePlayer.historyPositions = new Array<ActiveGamePosition>();
        }
        gamePlayer.historyPositions.push(Util.cloneActiveGamePosition(gamePlayer.position));
        gamePlayer.position.startTime = null;
        gamePlayer.position.endTime = null;
        this.storageService.updateCurrentGamePlayer(gamePlayer);
      });
    });
    if(this.currentGame.historyPeriods == null){
      this.currentGame.historyPeriods = new Array<Period>();
    }
    this.currentGame.historyPeriods.push(this.currentGame.period);
    this.currentGame.period = null;
    this.storageService.updateActiveGame(this.currentGame);
    this.endTimer();
  }

  startPeriod(){
    let date = new Date().getTime();
    this.currentGame.period = new Period(this.currentGame.historyPeriods.length+1);
    this.currentGame.period.startTime = date;

    this.storageService.loadCurrentGamePlayers(this.currentTeam.id, this.currentGame.id, (snapshot)=>{
      snapshot.forEach((childSnapshot) => {
        let gamePlayer = childSnapshot.val();
        gamePlayer.position.startTime = date;
        gamePlayer.position.endTime = null;
        this.storageService.updateCurrentGamePlayer(gamePlayer);
      });
    });
    this.storageService.updateActiveGame(this.currentGame);
    this.startTimer();
  }



  ionViewWillEnter() {
    if (this.currentGame.period != null && this.timeIntervalId == null) {
      this.updateTime();
      this.startTimer();
    }
  }

  ionViewWillLeave(){
    this.endTimer();
  }



}




