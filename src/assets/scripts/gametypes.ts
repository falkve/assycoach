/**
 * Created by vonfalk on 2017-01-01.
 */
export class Game{

  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public  fromJson(gameJson: any): Game {
    var player = new Game(gameJson.name);
    return player;
  }

  public toJson(){
    return JSON.stringify(this);
  }
}

export class GamePosition{

  public name: string;
  public shorty : string
  constructor(name: string, shorty : string) {
    this.name = name;
    this.shorty = shorty;
  }

  public  fromJson(gameJson: any): GamePosition {
    var gamePosition = new GamePosition(gameJson.name, gameJson.shorty);
    return gamePosition;
  }

  public toJson(){
    return JSON.stringify(this);
  }
}



