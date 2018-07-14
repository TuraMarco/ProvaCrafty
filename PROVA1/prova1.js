// Le entità sono elementi reali nel gioco, i componenti sono elementi 
// che astraggono un ncomportamento da associare ad entità

// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

// creo la prima entity
Crafty.e("2D, Canvas, Color, Twoway, _pavimento")    // definisco i parametri della entity, "_pavimento" (componente custom) fa si che funga da pavimento.
    .attr({x:200, y:340, w:200, h:50})          // specifico la posizione.
    .color("orange")                            // specifico il colore.
    .twoway(300);                               // specifico la possibilità di muovere l'entità con il WASD, posso limitare i gradi di movimento con "twoway(speed)", 
                                                //      ovviamnete inizializzandolo.


// creo la entity soggetta alla gravità
Crafty.e("2D, Canvas, Color, Gravity")
    .attr({x:200, y:50, w:50, h:50})
    .color("black")
    .gravity("_pavimento");