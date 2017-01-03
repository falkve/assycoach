import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Player} from "./playertypes";
import {Game, GamePosition, Team} from "./gametypes";


/**
 * Created by vonfalk on 2016-12-27.
 */

@Injectable()
export class StorageService {

  af: AngularFire;

  players : FirebaseListObservable<Player[]>;
  games : FirebaseListObservable<Game[]>;
  gamePositions : FirebaseListObservable<GamePosition[]>;
  teams : FirebaseListObservable<Team[]>;

  currentTeam : Team;

  initiate(team : Team){
    this.currentTeam = team;

    let teamId = team.id;
    this.players = this.af.database.list('/' + teamId + '/players');
    this.games = this.af.database.list('/' + teamId + '/games');
    this.gamePositions = this.af.database.list('/' + teamId + '/positions');

  }

  constructor(af: AngularFire) {
    this.af = af;
    this.teams = this.af.database.list('/teams');
    /*var config = {
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

    console.log(defaultApp.name);*/
  }

  public loadTeams(callbackFunc){
    firebase.database().ref('/teams').once('value', callbackFunc, this);
  }

  public loadPositions(teamId, callbackFunc){
    firebase.database().ref('/'+teamId+'/positions').once('value', callbackFunc, this);
  }

  public loadPlayers(teamId, callbackFunc){
    firebase.database().ref('/'+teamId+'/players').once('value', callbackFunc, this);
  }
}






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
