//Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
//Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

window.watch_interval = null
window.stopwatch_interval = null
window.timer_timer = null
window.timer_interval = null


let timer_object = new Timer({
  'secs': timer_secs_element.value,
  'mins': timer_mins_element.value,
  'hours': timer_hours_element.value,
  'elemento': timer_text
})

let stopwatch_object = new Stopwatch({
  'mins': 0,
  'secs': 0,
  'ms': 0,
  'element': stopwatch_text
})

preload() //preload debe ser una función puramente gráfica, no funcional generalmente
reset()
initialButtonActivation()

//AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS

watchIntervalCreate() //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso