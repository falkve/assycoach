import {Injectable} from "@angular/core";
import {Players} from "./player";
import {FirebaseStorage} from "./firebasestorage";
/**
 * Created by vonfalk on 2016-12-27.
 */

@Injectable()
export class StorageService {

  firebaseStorage;

  constructor() {
    this.firebaseStorage = new FirebaseStorage();
  }

  storePlayers(players : Players){
    this.firebaseStorage.storePlayers(players.toJson());
  }

  loadPlayers(){
    let jsonData = this.firebaseStorage.loadPlayers();
    let players = new Players();
    return players.fromJson(jsonData);
  }

}

