import {Game} from "./gametypes";
import {Player} from "../../../www/assets/scripts/playertypes";
import {GamePlayer, ActiveGamePosition} from "../../../www/assets/scripts/gametypes";
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
      newGame.goals = game.goals;
      newGame.goalsOpponent = game.goalsOpponent;
      return newGame;
  }

  public static clonePlayer(player){
    let newPlayer = new Player(player.name, player.number);
    newPlayer.id = player.id;
    return newPlayer;
  }

  public static cloneActiveGamePosition(activePosition){
    let newPosition = new ActiveGamePosition(activePosition.name, activePosition.shorty);
    newPosition.id = activePosition.id;
    newPosition.startTime = activePosition.startTime;
    newPosition.endTime = activePosition.endTime;
    return newPosition;
  }

  public static cloneGamePlayer(gamePlayer){
    let newPlayer = Util.clonePlayer(gamePlayer.player);
    let newPosition = Util.cloneActiveGamePosition(gamePlayer.position);
    let newGamePlayer = new GamePlayer(newPlayer, newPosition);
    newGamePlayer.id = gamePlayer.id;
    return newGamePlayer;
  }


}
