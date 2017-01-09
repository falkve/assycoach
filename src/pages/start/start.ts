import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";
import {GamePositionsPage} from "../gamepositions/gamepositions";
import {PlayerPage} from "../player/player";

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
    this.navCtrl.push(GamePositionsPage);
  }

  addPlayers(){
    this.navCtrl.pop();
    this.navCtrl.push(PlayerPage);
  }
}
