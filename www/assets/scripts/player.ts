import {StorageService} from "./storageservice";
/**
 * Created by vonfalk on 2016-12-25.
 */
export class Player {

  public name: string;
  public number: number;

  constructor(name: string, number: number) {
    this.name = name;
    this.number = number;
  }

  public  fromJson(userJson: any): Player {
    var player = new Player(userJson.name, userJson.number);
    return player;
  }

  public toJson(){
    return JSON.stringify(this);
  }
}

export class Players{

  players = new Array<Player>();

  addPlayer(player :Player){
    this.players.push(player);
  }

  toJson(){
    return JSON.stringify(this.players);
  }

  fromJson(playerString : string){
    this.players = JSON.parse(playerString);
  }

  getPlayer(index : number){
    return this.players[index];
  }

}
