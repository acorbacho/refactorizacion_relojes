var watch_activation_element
var watch_text = document.getElementById("watch_text")

function watchRun() {
  var date = new Date()
  var hours = date.getHours()
  var mins = date.getMinutes()
  var secs = date.getSeconds()
  watch_text.innerHTML = hours + ":" + mins + ":" + secs
}

function watchIntervalCreate() {
  watch_interval = setInterval(watchRun, 1000)
}

function watchIntervalStop() {
  clearInterval(watch_interval)
}