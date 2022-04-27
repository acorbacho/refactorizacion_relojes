class Stopwatch {
  constructor(stopwatch_props) {
    this.mins = stopwatch_props.mins
    this.secs = stopwatch_props.secs
    this.ms = stopwatch_props.ms
    this.element = stopwatch_props.element
    this.counter = 0
  }

  getMins() {
    return this.mins
  }

  getSecs() {
    return this.secs
  }

  getMs() {
    return this.ms
  }

  getCounter() {
    return this.counter
  }

  setMins(mins) {
    this.stopwatch_mins = mins
  }

  setSecs(secs) {
    this.stopwatch_secs = secs
  }

  setMs(ms) {
    this.stopwatch_ms = ms
  }

  setCounter(n) {
    this.counter = n
  }

  stopwatchRun() {
    this.counter++
    if (this.counter < 100) {
      this.ms++
    } else if (this.counter == 100) {
      this.counter = 0
      this.ms = 0
      this.secs++
      if (this.secs == 60) {
        this.secs = 0
        this.mins++
      }
    }
    //Mejorar esto.
    (this.element.innerHTML = this.mins + ":" + this.secs + ":" + this.ms)
  }
}