import {FirebaseListObservable} from "angularfire2";
import {Player} from "./playertypes";
/**
 * Created by vonfalk on 2017-01-01.
 */
export class Game{

  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class GamePosition{
  public name: string;
  public shorty : string
  constructor(name: string, shorty : string) {
    this.name = name;
    this.shorty = shorty;
  }
}

export class Team{
  id : string;
  name : String;
  players : FirebaseListObservable<Player[]>;

  constructor(name: string) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for(var i = 0; i < 36; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.id = text;
      this.name = name;
  }
}



