import {Component, ElementRef} from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {Game} from "../../../www/assets/scripts/gametypes";
import {FirebaseListObservable} from "angularfire2";
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  opponent : string;
  activeGames : FirebaseListObservable<Game[]>;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private ele: ElementRef, public storageService : StorageService) {
    this.activeGames = storageService.getActiveGames();
  }

  ngAfterViewInit() {
    this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_game "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }

  addGame(){
    let game = new Game(this.opponent);
    this.storageService.addActiveGame(game, true);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}




