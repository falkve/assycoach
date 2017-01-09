import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {GamePosition, Team, Game, GamePlayer} from "../../../www/assets/scripts/gametypes";
import {Player} from "../../../www/assets/scripts/playertypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";






@Component({
  selector: 'page-choosegameposition',
  templateUrl: 'choosegameposition.html'
})
export class ChooseGamePositionPage {

  positions = new Array <GamePosition>();
  team : Team;
  game : Game;
  player : Player;

  currentGamePlayers;

  nofPositionsSize = 0;
  usedPositions = new Array<GamePosition>();

  constructor(public navCtrl: NavController, params: NavParams, public viewCtrl: ViewController, private ele: ElementRef, public storageService : StorageService) {
    this.player = params.get('player');
    this.team = storageService.getCurrentTeam();
    this.game = storageService.currentGame;
    this.currentGamePlayers = storageService.getCurrentGamePlayers();


    this.storageService.loadCurrentGamePlayers(this.team.id, this.game.id, (snapshot)=>{
      snapshot.forEach((childSnapshot) => {
        let position = childSnapshot.val().position;
        this.usedPositions.push(position);
      });
    });

    storageService.loadPositions(this.team.id, (snapshot)=>{
      snapshot.forEach((childSnapshot) => {

        this.nofPositionsSize++;
        let exists = false;
        let position = childSnapshot.val();
        for( let i=this.usedPositions.length-1; i>=0; i--) {
          if(position.id == this.usedPositions[i].id){
            exists = true;
            break;
          }
        }
        if(!exists){
          this.positions.push(position);
        }
      });
    });

    let position = new GamePosition('Bench', 'B');
    position.id = 'Bench';
    this.positions.push(position);

  }

  ngAfterViewInit() {
    this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_choosegameposition "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }

  addPosition(position){
    let gamePlayer = new GamePlayer(this.player, position);
    console.log('Adding position')
    this.currentGamePlayers.push(gamePlayer).then(ref => {
      if(this.usedPositions.length >= (this.nofPositionsSize-1)){
        this.game.isTeamComplete = true;
        this.close();
        /*console.log('Adding position 2')
        this.storageService.updateActiveGame(this.game, ()=>{
          console.log('Adding position 3')

        });*/
      } else{
        this.close();
      }

    });
  }

  close(){
    this.viewCtrl.dismiss();
  }







}
