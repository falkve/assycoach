import * as firebase from "firebase";
import {Player} from "../../../www/assets/scripts/playertypes";
import {Observable} from "rxjs";

export class FirebaseStorage {

  constructor() {
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
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

    console.log(defaultApp.name);

  }




  storePlayers(object : string){

  }


  public loadPlayers(){
    let players = [];
    firebase.database().ref('/players').once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          let player = new Player(childData.name, parseInt(childData.number));
          players.push(player);
      });
    });
    return Observable.create(observer => {observer.next(players); observer.complete();});
  }


  public loadPositions(){

  }

  storePositions(ref: string, object : string){

  }

}

