# Requisitos

Crear una versión final de Lunar Lander aplicando la codificación en JavaScript al proyecto añadiendo las siguientes propiedades:
+ Velocidad de caída (Vn+1 = Vn + a * dt) donde:
  * Vn+1 es la velocidad después de un intervalo de tiempo dt.
  * Vn es la velocidad inicial (o anterior).
  * __a__ es la aceleración que vale __g__ con el motor apagado y __-g__ con el motor encendido. __g__ es la gravedad lunar, 1.622 m/s2.

+ Posicón (Yn+1 = Yn + Vn * dt) donde:
  * Yn+1 es la posición después de un intervalo de tiempo dt.
  * Yn es la posición inicial (o anterior).
  * Vn es la velocidad inicial (o anterior).

Las unidades son % de pantalla, 1% de pantalla representa 1 metro, el tiempo se mide en segundo... disponéis de todo lo necesario para comenzar al repositorio:

https://github.com/urbinapro/lunar-landing-javascript

Crear un nuevo repositorio y completar el juego a partir de tu proyecto anterior y el código suministrado siguiendo las instrucciones que hay en el mismo README. Entregar la url de Github de la versión final.

__*Criterios de cualificación:*__
+ Hacer todas las tareas del README dando una buena presentación y adaptación a todo tipo de dispositivos (hasta 9 puntos).
+ Disponer de la versión principal (master) indentada y una ramificación (branch) con código minimificado (+1 punto).
+ Documentación en tu README (+1 punto).

__*Aspectos que restan puntos:*__
+ No valida, suspendido.
+ Faltas de ortografía, mala redacción.
+ Código desordenado, mal indentado.
+ El código no tiene reacción al pasar el ratón por encima (hover, etc.).
+ Funcionalidad no esperada: la nave no aterriza, cuando aterriza vuelve a despegar, etc.
+ Tamaño inadecuado y/o mala adaptación de los elementos.
+ Superposición de los menús, superposición de elementos (z-index mal usado o no usado).
+ Paleta de colores no adecuada.
+ Imágenes no comprimidas.

## Lunar lander con html, css y javascript
Versión esqueleto del juego Lunar Landing que incluye:

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* Js: programación realista básica necesaria para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* No dispone de imágenes.

Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas a desarrollar:
* Ponerlo bonito según vuestro diseño anterior. No te olvides de optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Poner los menús (móvil y escritorio) según vuestro diseño anterior.
* Al pulsar una tecla, hacer click en el botón de power o bien hacer click en la pantalla la nave debe cambiar de aspecto a *nave con motor encendido* y debe cambiar la aceleración de g a -g (ejecutar motorOn).
* Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.
* Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *reiniciar*
* Debes poder elegir diferentes valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil.
* Debe haber una página de *How to play* y una página de *About* accesibles desde el menú (vas a otras páginas saliendo del juego con un avisador o mensaje de comfirmación de que sales de la partida).

Cualquier otra funcionalidad o cambio debe quedar debidamente documentado.

### Lunar-Lander

+ Se ha reducido el tamaño de la imagen 'FONDO.jpg' (1920px x 1082px y 385 KB) ya que no guarda relación de tamaño con el resto de elementos. Se ha recortado la nueva imagen de fondo ya que se mostraban en la parte inferior unas montañas que no deberían aparecer. La nueva imagen es 'fondoed.jpg', con un tamaño de 1024px x 768px y un peso de 151 KB.
+ Se descarta el uso de la imagen 'MENUOFI.png'. Se emplea un menú más atractivo con barra de progreso para "Fuel".
+ Se han editado los botones 'pausa.png' y 'restart.png' ya que en su borde exterior aparecían unos píxeles en blanco y destacaban sobre el fondo negro. Los nuevos botones son 'pausaed.png' y 'restarted.png'.
+ Se ha descartado el uso del botón 'instruccions.png' porque no comparte relación de aspecto con el resto de botones. El nuevo botón es 'instruccionesed.png'.
+ Se ha mejorado el contorno de la imagen 'cohet.png' ya que tena píxeles en blanco que destacaban sobre el fondo negro de la aplicación. Así mismo, también se ha mejorado los colores de la nave pero siempre respetando el diseño original. La nueva imagen es 'naveed.png'.
+ Se ha diseñado una nueva imagen 'navegif.gif' que sustituirá a 'cohetfoc1.png'. 'navegif.gif' es una imagen animada compuesta por 4 imágenes.
+ Se ha creado el botón 'atras.png' el cual permitirá navegar en la aplicación.
+ Se ha creado el botón 'acercade.png' el cual estará situado en la ventana de 'instrucciones.html' y mostrará información sobre el autor de la aplicación.
+ Se ha creado el botón 'energia.png' el cual sustituye al uso de la barra espacio para dispositivos de pantalla vertical. Su posición en la pantalla se ha hecho pensando en la ergonomía.
+ Se ha creado un 'sprite' que agrupa a todos los botones de la aplicación, añadiendo animaciones a los botones en el caso de "hover".
+ Todos los archivos html y css han sido validados a través de https://validator.w3.org/ y https://jigsaw.w3.org/css-validator/ .
+ Se incluye una versión minimificada en un branch del repositorio.
