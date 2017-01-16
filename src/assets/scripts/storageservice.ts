import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Player} from "./playertypes";
import {Game, GamePosition, Team} from "./gametypes";
import {GamePlayer} from "../../../www/assets/scripts/gametypes";
import {Util} from "./util";


/**
 * Created by vonfalk on 2016-12-27.
 */

@Injectable()
export class StorageService {

  af: AngularFire;

  private players : FirebaseListObservable<Player[]>;
  private gamePositions : FirebaseListObservable<GamePosition[]>;
  private teams : FirebaseListObservable<Team[]>;

  private activeGames : FirebaseListObservable<Game[]>;

  private currentTeam : Team;
  currentGame : Game;

  private currentGamePlayers : FirebaseListObservable<GamePlayer[]>;


  constructor(af: AngularFire) {
    this.af = af;
    this.teams = this.af.database.list('/teams', {
      query: {
        orderByChild: 'name'
      }
    });
  }

  initiate(team : Team){
    this.currentTeam = team;

    let teamId = team.id;
    this.players = this.af.database.list('/' + teamId + '/players', {
      query: {
        orderByChild: 'name'
      }
    });

    this.gamePositions = this.af.database.list('/' + teamId + '/positions',{
      query: {
        orderByChild: 'name'
      }
    });

    this.activeGames = this.af.database.list('/' + teamId + '/activegames', {
      query: {
        orderByChild: 'opponent'
      }
    });
  }

  public loadTeams(callbackFunc){
    firebase.database().ref('/teams').orderByChild('name').once('value', callbackFunc, this);
  }

  public loadPositions(teamId, callbackFunc){
    firebase.database().ref('/'+teamId+'/positions').orderByChild('name').once('value', callbackFunc, this);
  }

  public loadPlayers(teamId, callbackFunc){
    firebase.database().ref('/'+teamId+'/players').orderByChild('name').once('value', callbackFunc, this);
  }

  public loadCurrentGamePlayers(teamId, currentGameId, callbackFunc){
    firebase.database().ref('/'+teamId+'/' + currentGameId + '/currentgameplayers').orderByChild('name').once('value', callbackFunc, this);
  }


  getPlayers(){
    return this.players;
  }
  addPlayer(player){
    this.players.push(player).then(ref => {
      player.id = ref.key;
      this.players.update(player.id, player);
    });
  }

  getGamePositions(){
    return this.gamePositions;
  }
  addGamePosition(position){
    this.gamePositions.push(position).then(ref => {
      position.id = ref.key;
      this.gamePositions.update(position.id, position);
    });
  }

  getTeams(){
    return this.teams;
  }
  addTeam(team){
    this.teams.push(team).then(ref => {
      team.id = ref.key;
      this.teams.update(team.id, team);
    });
  }


  getActiveGames(){
    return this.activeGames;
  }

  addActiveGame(game, setActive){
    this.activeGames.push(game).then(ref => {
      game.id = ref.key;
      this.activeGames.update(game.id, game);
      if(setActive){
        this.setCurrentGame(game);
      }
    });
  }
  updateActiveGame(game){
    var copy = Util.cloneGame(game);
    this.activeGames.update(copy.id, copy);
  }

  public setCurrentGame(game){
    this.currentGame = game;
    this.currentGamePlayers = this.af.database.list('/' + this.currentTeam.id + '/' + game.id + '/currentgameplayers');
  }

  public getCurrentGame(){
    return this.currentGame;
  }

  getCurrentGamePlayers(){
    return this.currentGamePlayers;
  }

  addCurentGamePlayer(gamePlayer, callbackFunc){
    this.currentGamePlayers.push(gamePlayer).then(ref => {
      gamePlayer.id = ref.key;
      this.currentGamePlayers.update(gamePlayer.id, gamePlayer).then(callbackFunc);
    });
  }
  updateCurrentGamePlayer(gamePlayer){
    var copy = Util.cloneGamePlayer(gamePlayer);
    this.currentGamePlayers.update(copy.id, copy);
  }

  getCurrentTeam(){
    return this.currentTeam;
  }


}












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




