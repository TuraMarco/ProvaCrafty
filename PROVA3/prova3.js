45// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

// creo una ENTITY pavimento con COMPONENT custom "_floor"
var floorBox = Crafty.e("2D, Canvas, Color, _floor") 
    .attr({x:0, y:390, w:600, h:10})
    .color("orange")

// creo un altra ENTITY con COMPONENT "Twoway" che gli permette di muoversi in sole 2 direzioni o saltare
var box = Crafty.e("2D, Canvas, Color, Twoway, Gravity")
    .attr({x:200, y:50, w:50, h:50})
    .color("black")
    .twoway(200,100)                // twoway accetta 2 argomenti, velocità orizzontale, e la velocità di salto, di defoult impostata al doppio di quella orizzontale 
    .gravity("_floor");

// distruggo la ENTITY "floorBox" e modifico la box per essere "Fourway" e non più "Twoway"   
box.removeComponent("Twoway");
box.removeComponent("Gravity", false)
floorBox.destroy();
box.addComponent("Fourway");
box.fourway(200);                   // accetta un solo argomento che è la velocità di scorrimento in tutte le direzioni

// modifico la box per essere "Multiway" e non più "Fourway" 
box.removeComponent("Fourway", false);
box.addComponent("Multiway");
box.multiway(200, {D:0, X:45, S:90, Z:135, A:180, Q:225, W:270, E:315});    // accetta come primo argomento un oggetto velocità su asse "x" ed "y", come secondo un oggetto 
                                                                            // per l'associazione tasto/direzione (in senso orario)
                            
// modifico la velocità diversificandola tra asse X ed Y di un Multiway
box.speed({x:200, y:50});

// disabilito il controllo con i tasti
box.disableControl();

