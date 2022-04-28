/*
  Esta función sirve para hacer la precarga de la página, ocultando los apartados que no son necesarios o cargando los que si
*/
function preload() {
  hideElements();
  timerSelectors();
}

function hideElements() {
  //Variables para almacenar los elementos HTML
  let watch, stopwatch, timer;
  watch = document.getElementById('watch');
  stopwatch = document.getElementById('stopwatch');
  timer = document.getElementById('timer');

  //Variables para comprobar que elementos deben ocultarse o si es la primera vez que se inicia
  let isWatch, isStopwatch, isTimer;
  isWatch = localStorage.getItem('isWatch');
  isStopwatch = localStorage.getItem('isStopwatch');
  isTimer = localStorage.getItem('isTimer');

  if (isWatch == null && isStopwatch == null && isTimer == null) {
    isWatch = 1;
    isStopwatch = 0;
    isTimer = 0;
    localStorage.setItem('isWatch', isWatch);
    localStorage.setItem('isStopwatch', isStopwatch);
    localStorage.setItem('isTimer', isTimer);
  }

  if (isWatch != 1) {
    watch.hidden = true;
  } else {
    watch.hidden = false;
  }
  if (isStopwatch != 1) {
    stopwatch.hidden = true;
  } else {
    stopwatch.hidden = false;
  }
  if (isTimer != 1) {
    timer.hidden = true;
  } else {
    timer.hidden = false;
  }
}

function timerSelectors() {
  for (let i = 0; i <= 24; i++) {
    let option = new Option(i, i);
    timer_hours_element.appendChild(option);
  }
  for (let i = 0; i <= 60; i++) {
    let option = new Option(i, i);
    timer_mins_element.appendChild(option);
  }
  for (let i = 0; i <= 60; i++) {
    let option = new Option(i, i);
    timer_secs_element.appendChild(option);
  }
}
