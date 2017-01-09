import {FirebaseListObservable} from "angularfire2";
import {Player} from "./playertypes";
/**
 * Created by vonfalk on 2017-01-01.
 */
export class Game{
  public id : string;
  public opponent: string;
  public startTime : string = '';
  public endTime : string = '';
  public isTeamComplete;

  constructor(opponent: string) {
    this.opponent = opponent;
  }
}

export class GamePosition{
  public name: string;
  public shorty : string
  public id : string;
  constructor(name: string, shorty : string) {
    this.name = name;
    this.shorty = shorty;
  }
}

export class Team{
  public id : string;
  public name : String;
  public players : FirebaseListObservable<Player[]>;

  constructor(name: string) {
      this.name = name;
  }
}

export class GamePlayer{
  public player : Player;
  public position : Position;
  public startTime : Date;
  public endTime : Date;
  public id : string;

  constructor(player: Player, position: Position) {
    this.player = player;
    this.position = position;
  }

}



