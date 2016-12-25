import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';



@Component({
  selector: 'page-player',
  templateUrl: 'addplayer.html'
})
export class AddPlayerPage {
  name:string;
  number:number;

  constructor(params: NavParams) {
    console.log('UserId', params.get('userId'));
  }

  addPlayer(){
    console.log(this.name);
  }
}


