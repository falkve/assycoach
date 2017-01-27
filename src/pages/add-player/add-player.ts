import {Component, ElementRef} from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {Player} from "../../../www/assets/scripts/playertypes";
import {StorageService} from "../../../www/assets/scripts/storageservice";


@Component({
  selector: 'page-addplayer',
  templateUrl: 'add-player.html'
})
export class AddPlayerPage {
  name:string;
  number:number;

  players;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private ele: ElementRef,public storageService : StorageService) {
    this.players = storageService.getPlayers();
  }


  addPlayer(){
    let player = new Player(this.name, this.number);
    this.storageService.addPlayer(player);
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  ngAfterViewInit() {
    this.ele.nativeElement.parentElement.setAttribute("class","OVERRIDE_addplayer "+ this.ele.nativeElement.parentElement.getAttribute("class"));
  }

}




