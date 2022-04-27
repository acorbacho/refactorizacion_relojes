let timer_hours_element = document.getElementById("timer_hours")
let timer_mins_element = document.getElementById("timer_mins")
let timer_secs_element = document.getElementById("timer_secs")
let timer_text = document.getElementById("timer_text")
let time = 0

function timerEvent(timer_event_props, object) {
  let anon_timerRun = function () {
    return object.timerRun()
  }
  timer_event_props.start.addEventListener('click', () => {
    object.setHours(timer_hours_element.value)
    object.setMins(timer_mins_element.value)
    object.setSecs(timer_secs_element.value)
    time = ((object.getHours() * 3600 + object.getMins() * 60 + object.getSecs()) * 1000)
    timer_text.innerHTML = object.getHours() + ":" + object.getMins() + ":" + object.getSecs()
    timerCreate(anon_timerRun, time)
    timer_event_props.pause.disabled = false
    timer_event_props.stop.disabled = false
    timer_event_props.restart.disabled = false
    timer_event_props.start.disabled = true
  })

  timer_event_props.stop.addEventListener('click', () => {
    timer_event_props.pause.innerHTML = 'Pause'
    timerStop()
    timer_text.innerHTML = 0 + ":" + 0 + ":" + 0
    timer_event_props.start.disabled = false
    timer_event_props.restart.disabled = true
    timer_event_props.pause.disabled = true
    timer_event_props.stop.disabled = true
  })

  timer_event_props.restart.addEventListener('click', () => {
    timer_event_props.pause.innerHTML = 'Pause'
    timerStop()
    object.setHours(timer_hours_element.value)
    object.setMins(timer_mins_element.value)
    object.setSecs(timer_secs_element.value)
    time = ((object.getHours() * 3600 + object.getMins() * 60 + object.getSecs()) * 1000)
    timer_text.innerHTML = object.getHours() + ":" + object.getMins() + ":" + object.getSecs()
    timerCreate(anon_timerRun, time)
  })

  timer_event_props.pause.addEventListener('click', () => {
    if (timer_event_props.pause.innerHTML == 'Pause') {
      timerStop()
      timer_event_props.pause.innerHTML = 'Resume'
    } else {
      timer_event_props.pause.innerHTML = 'Pause'
      time = ((object.getHours() * 3600 + object.getMins() * 60 + object.getSecs()) * 1000)
      timer_text.innerHTML = object.getHours() + ":" + object.getMins() + ":" + object.getSecs()
      timerCreate(anon_timerRun, time)
    }
  })
}

function timerCreate(timer_run, time) {
  timer_interval = setInterval(timer_run, 1000)
  timer_timer = setTimeout(timerStop, time)
}

function timerStop() {
  clearInterval(timer_interval)
  clearTimeout(timer_timer)
}