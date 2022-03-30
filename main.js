var contador_crono = 0
var minutos_crono = 0
var segundos_crono = 0
var milisegundos_crono = 0
var text_cronometro = document.getElementById("text_cronometro");

var select_horas_temporizador = document.getElementById("horas_temporizador");
var select_minutos_temporizador = document.getElementById("minutos_temporizador");
var select_segundos_temporizador = document.getElementById("segundos_temporizador");

var horas_temporizador
var minutos_temporizador
var segundos_temporizador

var activar_reloj, activar_cronometro, activar_temporizador
var start_crono, flag_crono, start_temp, stop_temp, restart_temp

/*
Reset se crea aquí por se una función específica, pues hará que los valores de los relojes vuelvan a por defecto
*/
function reset() {
  var fecha = new Date();
  document.getElementById("text_reloj").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  document.getElementById("text_cronometro").innerHTML = "00:00:00";
  document.getElementById("text_temporizador").innerHTML = "00:00:00";
}

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function evento_activar(show, hide1, hide2) {
  var div_show, div_hide1, div_hide2;

  div_show = document.getElementById(show.id.split("_")[1]);
  div_hide1 = document.getElementById(hide1.id.split("_")[1]);
  div_hide2 = document.getElementById(hide2.id.split("_")[1]);
  //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
  //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
  show.addEventListener("click", () => {
    reset();
    div_show.hidden = false;
    div_hide1.hidden = true;
    div_hide2.hidden = true;
  });

}

function createlistaFlags() {
  var tiempo_parcial = document.getElementById('tiempos_parciales')
  var elementoNodo = document.createElement('li');
  var textoNodo = document.createTextNode(minutos_crono + ":" + segundos_crono + ":" + milisegundos_crono);

  elementoNodo.appendChild(textoNodo);
  tiempo_parcial.appendChild(elementoNodo);
}

function deletelistaFlags() {
  var tiempo_parcial = document.getElementById('tiempos_parciales')
  var elementos_lista = tiempo_parcial.getElementsByTagName('li')
  for (i = elementos_lista.length - 1; i >= 0; i--) {
    tiempo_parcial.removeChild(elementos_lista[i]);
  }
}

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

function evento_crono(start, flag) {
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      crearIntervaloCrono()
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      stopIntervaloCrono()
      contador_crono = 0
      minutos_crono = 0
      segundos_crono = 0
      milisegundos_crono = 0
      text_cronometro.innerHTML = 0 + ":" + 0 + ":" + 0;
      contador_crono = 0
      start.innerHTML = 'Start'
      deletelistaFlags()
    }
  })

  flag.addEventListener('click', () => {
    createlistaFlags()
  })
}

/* 
Función para establecer la funcionalidad de los botones
*/
function botones() {

  //Botones de acción.
  start_crono = document.getElementById("start_cronometro");
  flag_crono = document.getElementById("flag_cronometro");
  start_temp = document.getElementById("start_temporizador");
  stop_temp = document.getElementById("stop_temporizador");
  restart_temp = document.getElementById("restart_temporizador");
  pause_temp = document.getElementById("pause_temporizador");

  //Botones de selección.
  activar_reloj = document.getElementById("activar_reloj");
  activar_cronometro = document.getElementById("activar_cronometro");
  activar_temporizador = document.getElementById("activar_temporizador");

  //Funciones de eventos activar.
  evento_activar(activar_reloj, activar_cronometro, activar_temporizador);
  evento_activar(activar_cronometro, activar_reloj, activar_temporizador);
  evento_activar(activar_temporizador, activar_cronometro, activar_reloj);

  //Funcion de eventos de acción.
  evento_crono(start_crono, flag_crono)
  evento_temporizador(start_temp, stop_temp, restart_temp, pause_temp)
}

function activarReloj() {
  var text_reloj = document.getElementById("text_reloj");
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  text_reloj.innerHTML = hora + ":" + minutos + ":" + segundos;

}

function activarCrono() {
  contador_crono++
  if (contador_crono < 100) {
    milisegundos_crono = contador_crono
  } else if (contador_crono == 100) {
    contador_crono = 0
    segundos_crono++
    if (segundos_crono == 60) {
      segundos_crono = 0
      minutos_crono++
    }
  }
  text_cronometro.innerHTML = minutos_crono + ":" + segundos_crono + ":" + milisegundos_crono;
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

function crearIntervaloReloj() {
  intervalo_reloj = setInterval(activarReloj, 1000);
}

function stopIntervaloReloj() {
  clearInterval(intervalo_reloj);
}

function crearIntervaloCrono() {
  intervalo_cronometro = setInterval(activarCrono, 10)
}

function stopIntervaloCrono() {
  clearInterval(intervalo_cronometro)
}

function crearTemporizador(time) {
  intervalo_temporizador = setInterval(activarTemp, 1000)
  temporizador_temporizador = setTimeout(stopTemporizador, time)
}

function stopTemporizador() {
  clearInterval(intervalo_temporizador)
  clearTimeout(temporizador_temporizador)
}

function __main__() {

  preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
  reset();
  botones();

  //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
  //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

  window.intervalo_reloj = null;
  window.intervalo_cronometro = null;
  window.temporizador_temporizador = null;
  window.intervalo_temporizador = null;

  //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS

  crearIntervaloReloj(); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
}

__main__();