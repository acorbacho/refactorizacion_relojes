class Timer {
  constructor(timer_props) {
    this.secs = timer_props.secs
    this.mins = timer_props.mins
    this.hours = timer_props.hours
    this.elemento = timer_props.elemento
  }

  setSecs(secs) {
    this.secs = secs
  }

  setMins(mins) {
    this.mins = mins
  }

  setHours(hours) {
    this.hours = hours
  }

  getSecs() {
    return this.secs
  }

  getMins() {
    return this.mins
  }

  getHours() {
    return this.hours
  }

  timerRun() {
    if (this.secs > 0) {
      this.secs--
    } else if (this.secs == 0 && this.mins > 0) {
      this.mins--
      this.secs = 59
    } else if (this.secs == 0 && this.mins == 0 && this.hours > 0) {
      this.hours--
      this.mins = 59
      this.secs = 59
    }
    if (this.secs == 0 && this.mins == 0 && this.hours == 0) {
      alert('TIME IS OVER!')
    }
    //Mejorar esto.
    (this.elemento.innerHTML = this.hours + ':' + this.mins + ':' + this.secs)
  }
}
