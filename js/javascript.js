var msgModal = {};
var difModal = {};
var confModal = {};
// --------------

var opt = 0; // 1-> Instrucciones 0-> Reiniciar

var g = 1.622;
var dt = 0.016683;

var timer = null;
var timerFuel = null;

var pause = false;      // Bandera de pausa
var playing = false;     // Bandera que indica que aun se esta jugando
var difficult = 5;

var nave = {
    y :  10,    // Altura inicial de la nave
    v :   0,    // Velocidad
    c : 100,    // Combustible
    a :  g,    // Aceleracion en el eje 'y'

    // Marcadores
    velocidad   : null,         // Variables para obtener  
    altura      : null,         // dichos elementos del 
    combustible : null,         // DOM.
    
    // funciones
    setMotor : function(){ 
        if (pause || nave.c <= 0)
            return;
		
        if (timerFuel == null) {
            timerFuel = setInterval(updFuel, 10);
            document.getElementById("nave_img").src = "img/navegif.gif";
            nave.a = -g;
        }	       
    },    
    clearMotor : function(){
        if (pause)
            return;
		
        if (timerFuel != null) {
            document.getElementById("nave_img").src = "img/naveed.png";
        }
        clearInterval(timerFuel);
        timerFuel=null;
        nave.a = g;
    }
};

function updFuel(){
    if (pause)
        return;	
    if (nave.c <= 0){
        nave.clearMotor();
    } else {
		nave.c -= 0.1;
	}
}
        
function mainloop() {
    if (pause) {        
        return;
    }

    nave.v += nave.a * dt;
    nave.y += nave.v * dt;    

    nave.velocidad.innerHTML = Math.round(nave.v);
    nave.altura.innerHTML = Math.round(nave.y);
    nave.combustible.innerHTML = Math.round(nave.c);

    if ( Math.round(nave.y) <= 70) { 
        document.getElementById("nave").style.top = nave.y+"%"; 
    } else { 
        if (Math.round(nave.v) > difficult) {
            document.getElementById("nave_img").src = "img/explosion.png";
            msgModal.msg.style.color = "red";
            msgModal.msg.innerHTML = "Has fallado :(";
            msgModal.modal.style.display = "block";
        } else {
            msgModal.msg.style.color = "greenyellow";
            msgModal.msg.innerHTML = "Felicidades, aterrizaje exitoso :) !!!";
            msgModal.modal.style.display = "block";
        }
        stop();
    }    
}

function stop() {
    playing = false;
    document.onkeydown = null;
    document.onkeyup   = null;
    clearInterval(timer); timer = null;
    clearInterval(timerFuel); timerFuel = null;
}

function confirmar(chs) {
	
	confModal.modal.style.display = "none";
	
	switch (opt) {
		case 0:	//Reiniciar
			if (chs) {
				window.location = "lunarlander.html";
			}
			break;
		case 1:	// Instrucciones
			if (chs) {
				window.location = "instrucciones.html";
			}
			break;
	}
	
	pause = ~pause;
	
	if (nave.a == g) 
		nave.setMotor();
	else
		nave.clearMotor();	
}

window.onload = function() {
    //Mostrar modal de dificultad
	difModal.modal = document.getElementById('difModal');
	difModal.modal.style.display = "block";
	
	// Obteniendo el modal de mensaje
    msgModal.modal = document.getElementById("congratsModal");
    msgModal.span = document.getElementsByClassName("close")[0];
    msgModal.msg = document.getElementById("msgModal");      
    msgModal.span.onclick = function() {
        msgModal.modal.style.display = "none";	// Cerrar modal cuando se hace click en (X) 
    }	
	
	// Obteniendo el modal de confirmacion
	confModal.modal = document.getElementById("confModal");
	confModal.msgConfModal = document.getElementById("confMsg");
	confModal.btnY = document.getElementById("confY");
	confModal.btnN = document.getElementById("confN");
	
	// Encender/apagar
    document.onkeydown = function(key){
		if (key.which != 32)	//32-> space key
			return;
		
		if (!playing || window.screen.width < 920) 
			return;
		
		nave.setMotor();	//Encender motor
		};
    document.onkeyup   = function(key){
		if (key.which != 32)	//32-> space key
			return;
		
		if (!playing || window.screen.width < 920) 
			return;
		
		nave.clearMotor();	// Apagar motor
		};
	
	nave.velocidad   = document.getElementById("velocidad");
    nave.altura      = document.getElementById("altitud");
    nave.combustible = document.getElementById("fuel");
    nave.g = g;
	
	window.onclick = function(event) {		
        if (event.target == msgModal.modal) {	// -> En el modal de mensaje
            msgModal.modal.style.display = "none";
        } else if (event.target == document.getElementById("spritepausa")) {	// -> En el boton de pausa
            pause = ~pause;
        } else if(event.target == document.getElementById("spriteinstrucciones")) {	// -> Boton de instrucciones
            pause = ~pause;
			confModal.msgConfModal.innerHTML = "Mediante esta acción se saldrá del juego. Continuar?";
			confModal.modal.style.display = "block";
			opt = 1;
        } else if(event.target == document.getElementById("spriterestart")) {	// -> Boton de reiniciar
            pause = ~pause;
			confModal.msgConfModal.innerHTML = "Esta acción reiniciará el juego. Continuar?";
			confModal.modal.style.display = "block";
			opt = 0;
        }	
    }
	
	window.onmousedown = function(event) {		
		if(event.target != document.getElementById("energia") || !playing)
			return;
		nave.setMotor();
	}	
	window.onmouseup = function(event) {
		if(event.target != document.getElementById("energia") || !playing)
			return;		
		nave.clearMotor();
	}
}

function play(dif) {
	difModal.modal.style.display = "none";
	difficult = dif;
	document.getElementById("nave_img").src = "img/naveed.png";
	playing = true;	
	timer = setInterval(mainloop, dt*1000);
}
