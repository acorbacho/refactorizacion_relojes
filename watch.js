var watch_activation_element

function watchRun() {
  var watch_text = document.getElementById("watch_text");
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  watch_text.innerHTML = hours + ":" + mins + ":" + secs;
}

function watchIntervalCreate() {
  watch_interval = setInterval(watchRun, 1000);
}

function watchIntervalStop() {
  clearInterval(watch_interval);
}