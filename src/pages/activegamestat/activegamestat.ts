import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {Game} from "../../../www/assets/scripts/gametypes";
import {FirebaseListObservable} from "angularfire2";
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-activegamestat',
  templateUrl: 'activegamestat.html'
})
export class ActiveGameStatPage {
  opponent : string;
  activeGames : FirebaseListObservable<Game[]>;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, storageService : StorageService) {
    this.activeGames = storageService.getActiveGames();
  }


}




