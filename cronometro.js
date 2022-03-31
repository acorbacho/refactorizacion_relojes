var activar_cronometro

var start_crono, flag_crono

var contador_crono = 0
var minutos_crono = 0
var segundos_crono = 0
var milisegundos_crono = 0
var text_cronometro = document.getElementById("text_cronometro");

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

function crearIntervaloCrono() {
  intervalo_cronometro = setInterval(activarCrono, 10)
}

function stopIntervaloCrono() {
  clearInterval(intervalo_cronometro)
}