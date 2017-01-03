import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Player} from "./playertypes";
import {Game, GamePosition} from "./gametypes";


/**
 * Created by vonfalk on 2016-12-27.
 */

@Injectable()
export class StorageService {

  players : FirebaseListObservable<Player[]>;
  games : FirebaseListObservable<Game[]>;
  gamePositions : FirebaseListObservable<GamePosition[]>;



  constructor(af: AngularFire){
    this.players = af.database.list('/players');
    this.games = af.database.list('/games');
    this.gamePositions = af.database.list('/positions');
  }
}

  /*constructor() {
    console.log("Initializing Firebase...");
    var config = {
      apiKey: "AIzaSyAZXxk_yvqzmzvljKQTa7zFtCE5pRVZuKQ",
      authDomain: "coachassistant-500d7.firebaseapp.com",
      databaseURL: "https://coachassistant-500d7.firebaseio.com",
      storageBucket: "coachassistant-500d7.appspot.com",
      messagingSenderId: "452645135599"
    };
    var defaultApp  = firebase.initializeApp(config);

    firebase.auth().signInAnonymously().catch(function(error) {
      var errorMessage = error.message;
      console.log(errorMessage);
    });

    console.log(defaultApp.name);
  }*/




  /*storePlayers(players : Players){

  }*/

  /*loadPlayers(){
    return firebase.database().ref('/players').once('value').then(function(snapshot){
      let players = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        let player = new Player(childData.name, parseInt(childData.number));
        players.push(player);
      });
    });
  }
}*/


//

/*this.storageService.loadPlayers().subscribe((data) => {
  console.log(data[0]);
});*/
