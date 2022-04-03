var stopwatch_activation_element

var stopwatch_start, stopwatch_flag

var stopwatch_counter = 0

var stopwatch_object = document.getElementById("stopwatch_text")
class Stopwatch {
  constructor(stopwatch_props) {
    this.stopwatch_mins = stopwatch_props.mins
    this.stopwatch_secs = stopwatch_props.secs
    this.stopwatch_ms = stopwatch_props.ms
  }

  setStopwatchMins(mins) {
    this.stopwatch_mins = mins
  }

  setStopwatchSecs(secs) {
    this.stopwatch_secs = secs
  }

  setStopwatchMs(ms) {
    this.stopwatch_ms = ms
  }

  getStopwatchMins() {
    return this.stopwatch_mins
  }

  getStopwatchSecs() {
    return this.stopwatch_secs
  }

  getStopwatchMs() {
    return this.stopwatch_ms
  }
}

var stopwatch_object = new Stopwatch({
  mins: 0,
  secs: 0,
  ms: 0
})

function createListFlags() {
  var partial_time = document.getElementById('flags')
  var elementNode = document.createElement('li')
  var textNode = document.createTextNode(stopwatch_object.getStopwatchMins() + ":" + stopwatch_object.getStopwatchSecs() + ":" + stopwatch_object.getStopwatchMs())

  elementNode.appendChild(textNode)
  partial_time.appendChild(elementNode)
}

function deleteListFlags() {
  var partial_time = document.getElementById('flags')
  var elements_list = partial_time.getElementsByTagName('li')
  for (i = elements_list.length - 1; i >= 0; i--) {
    partial_time.removeChild(elements_list[i])
  }
}

function stopwatchEvent(start, flag) {
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      stopwatchIntervalCreate()
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      stopwatchIntervalStop()
      stopwatch_object = new Stopwatch({
        mins: 0,
        secs: 0,
        ms: 0
      })
      stopwatch_text.innerHTML = 0 + ":" + 0 + ":" + 0
      stopwatch_counter = 0
      start.innerHTML = 'Start'
      deleteListFlags()
    }
  })

  flag.addEventListener('click', () => {
    createListFlags()
  })
}

function stopwatchRun() {
  stopwatch_counter++
  if (stopwatch_counter < 100) {
    stopwatch_object.setStopwatchMs(stopwatch_object.getStopwatchMs() + 1)
  } else if (stopwatch_counter == 100) {
    stopwatch_counter = 0
    stopwatch_object.setStopwatchMs(0)
    stopwatch_object.setStopwatchSecs(stopwatch_object.getStopwatchSecs() + 1)
    if (stopwatch_object.getStopwatchSecs() == 60) {
      stopwatch_object.setStopwatchSecs(0)
      stopwatch_object.setStopwatchMins(stopwatch_object.getStopwatchMins() + 1)
    }
  }
  stopwatch_text.innerHTML = stopwatch_object.getStopwatchMins() + ":" + stopwatch_object.getStopwatchSecs() + ":" + stopwatch_object.getStopwatchMs()
}

function stopwatchIntervalCreate() {
  stopwatch_interval = setInterval(stopwatchRun, 10)
}

function stopwatchIntervalStop() {
  clearInterval(stopwatch_interval)
}