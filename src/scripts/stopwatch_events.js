let stopwatch_text = document.getElementById("stopwatch_text")

function stopwatchEvent(start, flag, object) {
  let anon_stopwatchRun = function () {
    return object.stopwatchRun()
  }
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      stopwatchIntervalCreate(anon_stopwatchRun)
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      stopwatchIntervalStop()
      stopwatch_text.innerHTML = 0 + ":" + 0 + ":" + 0
      object.setCounter(0)
      flag.disabled = true
      start.innerHTML = 'Start'
      deleteListFlags()
    }
  })
  flag.addEventListener('click', () => {
    createListFlags(object)
  })
}

function createListFlags(object) {
  let partial_time = document.getElementById('flags')
  let element_node = document.createElement('li')
  let text_node = document.createTextNode(object.getMins() + ":" + object.getSecs() + ":" + object.getMs())

  element_node.appendChild(text_node)
  partial_time.appendChild(element_node)
}

function deleteListFlags() {
  let partial_time = document.getElementById('flags')
  let elements_list = partial_time.getElementsByTagName('li')
  for (i = elements_list.length - 1; i >= 0; i--) {
    partial_time.removeChild(elements_list[i])
  }
}

function stopwatchIntervalCreate(stopwatch_run) {
  stopwatch_interval = setInterval(stopwatch_run, 10)
}

function stopwatchIntervalStop() {
  clearInterval(stopwatch_interval)
}