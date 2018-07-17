// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

//TWOWAY
// creo una ENTITY pavimento con COMPONENT custom "_floor"
var floorBox = Crafty.e("2D, Canvas, Color, _floor") 
    .attr({x:0, y:390, w:600, h:10})
    .color("orange")

// creo un altra ENTITY con COMPONENT "Twoway" che gli permette di muoversi in sole 2 direzioni o saltare
var box = Crafty.e("2D, Canvas, Color, Twoway, Gravity")
    .attr({x:200, y:50, w:50, h:50})
    .color("black")
    .twoway(200,100)                // twoway accetta 2 argomenti, velocità orizzontale, e la velocità di salto, di defoult impostata al doppio di quella orizzontale 
//  .gravity("_floor");             

//FOURWAY
// distruggo la ENTITY "floorBox" e modifico la box per essere "Fourway" e non più "Twoway"   
box.removeComponent("Twoway", false);
box.removeComponent("Gravity", false)   //NON SO PERCHE MA GRAVITY NON SI RIMUOVE!!!!!!!!!!!!
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

//distruggo le box precedenti
box.destroy();
floorBox.destroy();

//KEYBOARD
// creo un ENTITY con PROPERTY Keyboard per creare comportamenti aggiuntivi all'uso dei tasti
var keyboardBox = Crafty.e("2D, Canvas, Color, Keyboard")
    .attr({x:100, y:100, w:15, h:15})
    .color("purple");

//  Keyboard espone 2 eventi che sono:
//  - KeyDown
//  - KeyUp
keyboardBox.bind("KeyDown", function () 
{
    //.isDown() permette di capire quale tasto viene premuto
    if(this.isDown(Crafty.keys.LEFT_ARROW))
    {
        this.w -= 5;
    }
    else if(this.isDown(Crafty.keys.RIGHT_ARROW))
    {
        this.w += 5;
    }
    else if(this.isDown(Crafty.keys.UP_ARROW))
    {
        this.h -= 5;
    }
    else if(this.isDown(Crafty.keys.DOWN_ARROW))
    {
        this.h += 5;
    }
    else if(this.isDown('R')) //posso anche passare la lettera associata al tasto
    {
        this.h = 15;
        this.w = 15;
    }
});

//TEXT
//Creiamo un ENTITY con Text per scrivere testo arbitrario
var textElement = Crafty.e("2D, Canvas, Text") //il Canvas potrebbe dare problemi con certi Font, nel caso usa DOM
    .attr({x:10, y:10})
    .textColor("red")   //setto il colore del testo
    .textAlign("start") //setto l'allineamento, vanno bene: start, end, left, right
    .textFont("type", "italic") //setto parametri di font con chiavi/valore
    .textFont({size: '20px', weight: 'bold'}) //setto parametri di font con un oggetto
    .text("TESTO A CASO!!!"); //converte automaticamente un numero in stringa

