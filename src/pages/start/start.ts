import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";
import {GamePositionsListPage} from "../game-positions-list/game-positions-list";
import {ListPlayersPage} from "../list-players/list-players";

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  team : Team;
  noPositions : boolean;
  noPlayers : boolean;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storageService : StorageService ) {
    this.team = storageService.getCurrentTeam();


    this.storageService.loadPlayers(this.team.id, (snapshot)=>{
      this.noPlayers = !snapshot.exists();
    });


    this.storageService.loadPositions(this.team.id, (snapshot)=>{
      this.noPositions = !snapshot.exists();

    });
  }

  addPositions(){
    this.navCtrl.pop();
    this.navCtrl.push(GamePositionsListPage);
  }

  addPlayers(){
    this.navCtrl.pop();
    this.navCtrl.push(ListPlayersPage);
  }
}
