var timer_activation_element

var timer_start, timer_stop, timer_restart, timer_pause

var timer_hours
var timer_mins
var timer_secs

var timer_hours_element = document.getElementById("timer_hours")
var timer_mins_element = document.getElementById("timer_mins")
var timer_secs_element = document.getElementById("timer_secs")
var timer_text = document.getElementById("timer_text")

function timerEvent(start, stop, restart, pause) {
  start.addEventListener('click', () => {
    timer_hours = timer_hours_element.value
    timer_mins = timer_mins_element.value
    timer_secs = timer_secs_element.value
    var time = ((timer_hours * 3600 + timer_mins * 60 + timer_secs) * 1000)
    timer_text.innerHTML = timer_hours + ":" + timer_mins + ":" + timer_secs
    timerCreate(time)
    pause.disabled = false
    stop.disabled = false
    restart.disabled = false
    start.disabled = true
  })

  stop.addEventListener('click', () => {
    pause.innerHTML = 'Pause'
    timerStop()
    timer_text.innerHTML = 0 + ":" + 0 + ":" + 0
    start.disabled = false
    restart.disabled = true
    pause.disabled = true
    stop.disabled = true
  })

  restart.addEventListener('click', () => {
    pause.innerHTML = 'Pause'
    timerStop()
    timer_hours = timer_hours_element.value
    timer_mins = timer_mins_element.value
    timer_secs = timer_secs_element.value
    var time = ((timer_hours * 3600 + timer_mins * 60 + timer_secs) * 1000)
    timer_text.innerHTML = timer_hours + ":" + timer_mins + ":" + timer_secs
    timerCreate(time)
  })

  pause.addEventListener('click', () => {
    if (pause.innerHTML == 'Pause') {
      timerStop()
      pause.innerHTML = 'Resume'
    } else {
      pause.innerHTML = 'Pause'
      var time = ((timer_hours * 3600 + timer_mins * 60 + timer_secs) * 1000)
      timer_text.innerHTML = timer_hours + ":" + timer_mins + ":" + timer_secs
      timerCreate(time)
    }
  })
}

function timerButtonReset(start, stop, restart, pause) {
  pause.disabled = true
  stop.disabled = true
  restart.disabled = true
  start.disabled = false
}

function timerRun() {
  if (timer_secs > 0) {
    timer_secs--
  } else if (timer_secs == 0 && timer_mins > 0) {
    timer_mins--
    timer_secs = 59
  } else if (timer_secs == 0 && timer_mins == 0 && timer_hours > 0) {
    timer_hours--
    timer_mins = 59
    timer_secs = 59
  }
  if (timer_secs == 0 && timer_mins == 0 && timer_hours == 0) {
    alert('TIME IS OVER!')
    timerButtonReset(timer_start, timer_stop, timer_restart, timer_pause)
  }
  timer_text.innerHTML = timer_hours + ":" + timer_mins + ":" + timer_secs
}

function timerCreate(time) {
  timer_interval = setInterval(timerRun, 1000)
  timer_timer = setTimeout(timerStop, time)
}

function timerStop() {
  clearInterval(timer_interval)
  clearTimeout(timer_timer)
}