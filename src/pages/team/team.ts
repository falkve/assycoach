import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {StorageService} from "../../../www/assets/scripts/storageservice";
import {Team} from "../../../www/assets/scripts/gametypes";


@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage {
  name:string;

  teams;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public storageService : StorageService) {
    this.teams = storageService.teams;
  }


  addTeam(){
    let team = new Team(this.name);
    this.teams.push(team);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }



}




