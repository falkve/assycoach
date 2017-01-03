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
  hasPositions : boolean;
  hasPlayers : boolean;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storageService : StorageService ) {
    this.team = storageService.currentTeam;

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    this.storageService.loadPlayers(this.team.id, (snapshot)=>{
      console.log(snapshot.exists());
      this.hasPlayers = snapshot.exists();
      loading.dismiss();
    });

    loading.present();
    this.storageService.loadPositions(this.team.id, (snapshot)=>{
      console.log(snapshot.exists());
      this.hasPositions = snapshot.exists();
      loading.dismiss();
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
