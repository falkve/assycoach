import {Game} from "./gametypes";
/**
 * Created by vonfalk on 2017-01-04.
 */


export class Util{

  static generateId(prefix){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 36; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text = prefix + '_' + text;
    return text;
  }

  public static cloneGame(game){
      let newGame = new Game(game.opponent);
      newGame.id = game.id;
      newGame.startTime = game.startTime;
      newGame.endTime = game.endTime;
      newGame.isTeamComplete = game.isTeamComplete;
      return newGame;
  }


}
