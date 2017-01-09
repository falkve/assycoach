import {Component, ElementRef} from '@angular/core';
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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private ele: ElementRef, public storageService : StorageService) {
    this.teams = storageService.getTeams();
  }

  ngAfterViewInit() {
    this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_team "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }


  addTeam(){
    let team = new Team(this.name);
    this.storageService.addTeam(team);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }



}




