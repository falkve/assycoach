import { Component } from '@angular/core';
import {NavController, LoadingController, ModalController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {TeamPage} from "../team/team";
import {StartPage} from "../start/start";

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams;

  constructor(public navCtrl: NavController, public storageService : StorageService, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.teams = storageService.teams;

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.storageService.loadTeams((snapshot)=>{
      console.log(snapshot.exists());

      if(snapshot.exists()){
        snapshot.forEach((childSnapshot)=> {
          //var childData = childSnapshot.val();
        });
      } else {
        this.openAddTeam();
      }
      loading.dismiss();
    });
  }

  chooseTeam(team){
    this.storageService.initiate(team);
    this.navCtrl.pop();
    this.navCtrl.push(StartPage);
  }

  openAddTeam(){
    let profileModal = this.modalCtrl.create(TeamPage);
    profileModal.present();
  }

}
