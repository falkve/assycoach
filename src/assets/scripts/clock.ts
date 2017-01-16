/**
 * Created by vonfalk on 2017-01-14.
 */

export class Clock{
  public classDate = new Date();
  timerToken;

  constructor(){
    console.log(this.classDate);
    this.classDate = new Date();
    this.startClock();
  }

  startClock(){
    console.log(this.classDate);
    this.timerToken = setInterval(()=>this.showClock(), 1000);
    console.log(this.timerToken);
  }

  showClock(){
    let currentTime = new Date();
    console.log(this.classDate);
    console.log(currentTime);
    let millis = currentTime.getMilliseconds() - this.classDate.getMilliseconds();
    console.log(millis);
  }

  stopClock(){
      clearInterval(this.timerToken);
  }
}
