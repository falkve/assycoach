import {Player} from "./playertypes";
/**
 * Created by vonfalk on 2017-01-01.
 */
export class Game{
  public id : string;
  public opponent: string;
  public startTime : string = '';
  public endTime : string = '';

  public goals : number = 0;
  public goalsOpponent : number = 0;

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

export class ActiveGamePosition extends GamePosition{
  public startTime : string = '';
  public endTime : string = '';
}

export class Team{
  public id : string;
  public name : String;

  constructor(name: string) {
      this.name = name;
  }
}

export class GamePlayer{
  public id : string;
  public name : string;
  public player : Player;
  public position : ActiveGamePosition;


  constructor(player: Player, position: ActiveGamePosition) {
    this.player = player;
    this.position = position;
    this.name = player.name; //For sorting
  }

}



