import * as firebase from "firebase";
export class FirebaseStorage {

  constructor() {

  }

  init(){
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



    /*let firebaseStorage = new FirebaseStorage();
    firebaseStorage.init();*/


    //var defaultDatabase = firebase.database();
  }



  storePlayers(object : string){
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var playersRef = storageRef.child('players');

    playersRef.putString(object).then(function (done){
      console.log('Uploaded players!');
    });
  }


  public loadPlayers(){
    var storage = firebase.storage();
    var storageRef = storage.ref();

    storageRef.child('players').getDownloadURL().then(function(url) {


    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = function(event) {
      //var jsonData = xhr.responseText;
    };
    xhr.open('GET', url);
    xhr.send();

      return url;
    }).catch(function(error) {
      // Handle any errors
    });
    return "";
  }


  public loadPositions(){

  }

  storePositions(ref: string, object : string){
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var positionsRef = storageRef.child('positions');
    var positionRef = positionsRef.child(ref);

    positionRef.putString(object).then(function (done){
      console.log('Uploaded positions!');
    });

  }

}

