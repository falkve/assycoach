import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {StorageService} from "../../../www/assets/scripts/storageservice";



@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  players;
  hasPlayers : boolean;


  constructor(public navCtrl: NavController, private storageService : StorageService) {
    this.players = this.storageService.players;
  }
  ngOnInit() {

  }
}
