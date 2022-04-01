function main() {
  /*
  Reset se crea aquí por se una función específica, pues hará que los valores de los relojes vuelvan a por defecto
  */
  function reset() {
    var date = new Date();
    document.getElementById("watch_text").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("stopwatch_text").innerHTML = "00:00:00";
    document.getElementById("stopwatch_text").innerHTML = "00:00:00";
  }

  /*
  Permite crear el evento que muestre el primer argumento y oculte los otros dos
  */
  function activationEvent(show, hide1, hide2) {
    var div_show, div_hide1, div_hide2;

    div_show = document.getElementById(show.id.split("_")[0]);
    div_hide1 = document.getElementById(hide1.id.split("_")[0]);
    div_hide2 = document.getElementById(hide2.id.split("_")[0]);
    //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
    //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
    show.addEventListener('click', () => {
      reset();
      div_show.hidden = false;
      div_hide1.hidden = true;
      div_hide2.hidden = true;
    });

  }

  /* 
  Función para establecer la funcionalidad de los botones
  */
  function initialButtonActivation() {
    //Botones de acción.
    stopwatch_start = document.getElementById("stopwatch_start");
    stopwatch_flag = document.getElementById("stopwatch_flag");
    timer_start = document.getElementById("timer_start");
    timer_stop = document.getElementById("timer_stop");
    timer_restart = document.getElementById("timer_restart");
    timer_pause = document.getElementById("timer_pause");

    //Botones de selección.
    watch_activation_element = document.getElementById("watch_activation");
    stopwatch_activation_element = document.getElementById("stopwatch_activation");
    timer_activation_element = document.getElementById("timer_activation");

    //Funciones de eventos activar.
    activationEvent(watch_activation_element, stopwatch_activation_element, timer_activation_element);
    activationEvent(stopwatch_activation_element, watch_activation_element, timer_activation_element);
    activationEvent(timer_activation_element, stopwatch_activation_element, watch_activation_element);

    //Funcion de eventos de acción.
    stopwatchEvent(stopwatch_start, stopwatch_flag)
    timerEvent(timer_start, timer_stop, timer_restart, timer_pause)
  }

  preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
  reset();
  initialButtonActivation();

  //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
  //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

  window.watch_interval = null;
  window.stopwatch_interval = null;
  window.timer_timer = null;
  window.timer_interval = null;

  //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS

  watchIntervalCreate(); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
}
main()