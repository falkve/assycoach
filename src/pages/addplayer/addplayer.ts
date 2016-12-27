import { Component } from '@angular/core';
import {StorageService} from "../../assets/scripts/storageservice";



@Component({
  selector: 'page-player',
  templateUrl: 'addplayer.html'
})
export class AddPlayerPage {
  name:string;
  number:number;

  constructor(private storageService: StorageService) {

  }

  /*constructor(params: NavParams) {
    console.log('UserId', params.get('userId'));
  }*/

  addPlayer(){

//    storageService.storePlayers()
    console.log(this.name);
  }
}




