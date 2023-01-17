class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {this.currentTime += 1;
    if (typeof printTimeCallback === "function") {
      printTimeCallback();
    }}, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if(this.currentTime < 60) {
      return this.currentTime
    }
    else if (this.currentTime >= 60) {
      return this.currentTime % 60
    }
   
  }
  computeTwoDigitNumber(value) {
    if(value > 9){
      return value.toString()
    }
    else {
      let output = value.toString()
      return ('0' + output).slice(-2)
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
    
  }
}
