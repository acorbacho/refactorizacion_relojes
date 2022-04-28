let watch_text = document.getElementById('watch_text')

function watchRun() {
  let date = new Date()
  let hours = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()
  watch_text.innerHTML = hours + ':' + mins + ':' + secs
}

function watchIntervalCreate() {
  watch_interval = setInterval(watchRun, 1000)
}

function watchIntervalStop() {
  clearInterval(watch_interval)
}