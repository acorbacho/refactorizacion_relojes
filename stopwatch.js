var stopwatch_activation_element

var stopwatch_start, stopwatch_flag

var stopwatch_text = document.getElementById("stopwatch_text")
var stopwatch_counter = 0
var stopwatch_mins = 0
var stopwatch_secs = 0
var stopwatch_ms = 0

function createListFlags() {
  var partial_time = document.getElementById('flags')
  var elementNode = document.createElement('li');
  var textNode = document.createTextNode(stopwatch_mins + ":" + stopwatch_secs + ":" + stopwatch_ms);

  elementNode.appendChild(textNode);
  partial_time.appendChild(elementNode);
}

function deleteListFlags() {
  var partial_time = document.getElementById('flags')
  var elements_list = partial_time.getElementsByTagName('li')
  for (i = elements_list.length - 1; i >= 0; i--) {
    partial_time.removeChild(elements_list[i]);
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
      contador_crono = 0
      stopwatch_mins = 0
      stopwatch_secs = 0
      stopwatch_ms = 0
      stopwatch_text.innerHTML = 0 + ":" + 0 + ":" + 0;
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
    stopwatch_ms = stopwatch_counter
  } else if (stopwatch_counter == 100) {
    stopwatch_counter = 0
    stopwatch_secs++
    if (stopwatch_secs == 60) {
      stopwatch_secs = 0
      stopwatch_mins++
    }
  }
  stopwatch_text.innerHTML = stopwatch_mins + ":" + stopwatch_secs + ":" + stopwatch_ms;
}

function stopwatchIntervalCreate() {
  stopwatch_interval = setInterval(stopwatchRun, 10)
}

function stopwatchIntervalStop() {
  clearInterval(stopwatch_interval)
}