var activar_temporizador

var start_temp, stop_temp, restart_temp

var horas_temporizador
var minutos_temporizador
var segundos_temporizador

var select_horas_temporizador = document.getElementById("horas_temporizador");
var select_minutos_temporizador = document.getElementById("minutos_temporizador");
var select_segundos_temporizador = document.getElementById("segundos_temporizador");

function evento_temporizador(start, stop, restart, pause) {
  start.addEventListener('click', () => {
    horas_temporizador = select_horas_temporizador.value
    minutos_temporizador = select_minutos_temporizador.value
    segundos_temporizador = select_segundos_temporizador.value
    var time = ((horas_temporizador * 3600 + minutos_temporizador * 60 + segundos_temporizador) * 1000)
    text_temporizador.innerHTML = horas_temporizador + ":" + minutos_temporizador + ":" + segundos_temporizador;
    crearTemporizador(time)
    pause.disabled = false
    stop.disabled = false
    restart.disabled = false
    start.disabled = true
  })

  stop.addEventListener('click', () => {
    pause.innerHTML = 'Pause'
    stopTemporizador()
    text_temporizador.innerHTML = 0 + ":" + 0 + ":" + 0;
    start.disabled = false
  })

  restart.addEventListener('click', () => {
    pause.innerHTML = 'Pause'
    stopTemporizador()
    horas_temporizador = select_horas_temporizador.value
    minutos_temporizador = select_minutos_temporizador.value
    segundos_temporizador = select_segundos_temporizador.value
    var time = ((horas_temporizador * 3600 + minutos_temporizador * 60 + segundos_temporizador) * 1000)
    text_temporizador.innerHTML = horas_temporizador + ":" + minutos_temporizador + ":" + segundos_temporizador;
    crearTemporizador(time)
  })

  pause.addEventListener('click', () => {
    if (pause.innerHTML == 'Pause') {
      stopTemporizador()
      pause.innerHTML = 'Resume'
    } else {
      pause.innerHTML = 'Pause'
      var time = ((horas_temporizador * 3600 + minutos_temporizador * 60 + segundos_temporizador) * 1000)
      text_temporizador.innerHTML = horas_temporizador + ":" + minutos_temporizador + ":" + segundos_temporizador;
      crearTemporizador(time)
    }
  })
}

function resetBotonesTemp(start, stop, restart, pause) {
  pause.disabled = true
  stop.disabled = true
  restart.disabled = true
  start.disabled = false
}

function activarTemp() {
  if (segundos_temporizador > 0) {
    segundos_temporizador--
  } else if (segundos_temporizador == 0 && minutos_temporizador > 0) {
    minutos_temporizador--
    segundos_temporizador = 59
  } else if (segundos_temporizador == 0 && minutos_temporizador == 0 && horas_temporizador > 0) {
    horas_temporizador--
    minutos_temporizador = 59
    segundos_temporizador = 59
  }
  if (segundos_temporizador == 0 && minutos_temporizador == 0 && horas_temporizador == 0) {
    alert('¡SE ACABÓ EL TIEMPO!')
    resetBotonesTemp(start_temp, stop_temp, restart_temp, pause_temp)
  }
  text_temporizador.innerHTML = horas_temporizador + ":" + minutos_temporizador + ":" + segundos_temporizador;
}

function crearTemporizador(time) {
  intervalo_temporizador = setInterval(activarTemp, 1000)
  temporizador_temporizador = setTimeout(stopTemporizador, time)
}

function stopTemporizador() {
  clearInterval(intervalo_temporizador)
  clearTimeout(temporizador_temporizador)
}