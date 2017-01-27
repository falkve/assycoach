import {Player} from "./playertypes";
/**
 * Created by vonfalk on 2017-01-01.
 */
export class Game{
  public id : string;
  public opponent: string;
  public startTime : number = 0;
  public endTime : number = 0;

  public goals : number = 0;
  public goalsOpponent : number = 0;

  public period : Period;

  public historyPeriods : Array<Period>;

  constructor(opponent: string) {
    this.opponent = opponent;
    this.historyPeriods = new Array<Period>();
  }
}


export class Period{
  public period : number = 0;
  public startTime : number = 0;
  public endTime : number = 0;

  public goals : number = 0;
  public goalsOpponent : number = 0;

  constructor(period: number) {
    this.period = period;
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
  public startTime : number = 0;
  public endTime : number = 0;
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

  public historyPositions : Array<ActiveGamePosition>;


  constructor(player: Player, position: ActiveGamePosition) {
    this.player = player;
    this.position = position;
    this.name = player.name; //For sorting
    this.historyPositions = new Array<ActiveGamePosition>();
  }

}



