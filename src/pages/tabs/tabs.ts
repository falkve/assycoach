import { Component } from '@angular/core';
import {PlayersPage} from "../players/players";
import {PlayerPage} from "../player/player";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  playersRoot: any = PlayersPage;
  playerRoot: any = PlayerPage;
//  positionsRoot: any = PositionsPage;

  constructor() {

  }
}
