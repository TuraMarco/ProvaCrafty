// Posso utilizzare la funzione ".has(nomeComponente)" su un entità per sapere 
// se questa ha un COMPONENT o meno.
// Se aggiungo un COMPONENT più volte non succede nulla.
// Se rimuovo un COMPONENT in modo soft faccio solo si che ".has(nomeCompoennte)" 
// mi ritorni "false" senza cancellare le PROPERTY associate a quel COMPONENT.
// Se rimuovo un COMPONENT in modo Hard ottengo un eliminazione completa, 
// anche delle PROPERTY associate al COMPONENT.
// La PROPERTY "z" di una ENTITY serve per definire il primo e secondo piano,
// maggiore è "z" piu è disegnata in alto la ENTITY (proimo piano).

// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

//creo un ENTITY e la associo ad una variabile
var playerBox = Crafty.e("2D, Canvas, Color, Fourway")
    .attr({ x: 50, y: 50, w: 50, h: 50 })
    .color("black")
    .fourway(200);

// aggiungo COMPONENT all'element
playerBox.addComponent("Jumper, Gravity, Collision");       // aggiungo piu COMPONENT contemporaneamente
playerBox.addComponent("Jumper", "Gravity" , "Collision");  // aggiungo un COMPONENT alla volta

// rimuovo COMPONENT da un element
playerBox.removeComponent("Jumper, Gravity, Collision", false);  // il secondo argomento discrimina tra una rimozione soft(true) o una hard(false), defoult SOFT
playerBox.addComponent("Jumper", "Gravity" , "Collision", "_eater");

//modifico le PROPERTY di una ENTITY 
playerBox.z = 2;                    // una alla volta
playerBox.attr({x:50, y:50, z:2})   // o tutte assieme

// creo una ENTITY con COMPONENT custom "_food" e la associo ad una variabile
var foodBox = Crafty.e("2D, Canvas, Color, _food")
    .attr({ x: 150, y: 250, w: 10, h: 10 })
    .color("red");

// modivico le PROPERTY della "foodBox"
foodBox.attr({z:1, rotation:45});

// associo un EVENT ad una ENTITY
playerBox.bind('KeyDown', function (e) {    // associo la funzione all'evento "keyDown"
    if(e.key == Crafty.keys.T)
    {
        this.alpha = 0.5;                   // gestisco l'opacità (canale alpha) della ENTITY passata alla funzione
    }
    else if(e.key == Crafty.keys.O)
    {
        this.alpha = 1;
    }
});

// associo EVENT di collisione ad una ENTITY nei confronti di un altra specifica ENTITY
playerBox.checkHits("_food")                //controllo solo le collisioni nei confronti di "_food"
    .bind("HitOn", function (hitData) {     // gestisco l'evento di "HitOn" (inizio collisione)
        this.color("green");
        this.w += 3;
        this.h += 3;
        console.log(typeof(hitData));       // ritorna la stringa "_food"
    });

playerBox.checkHits("_food")                // controllo solo le collisioni nei confronti di "_food"
    .bind("HitOff", function (hitData) {    // gestisco l'evento di "HitOff" (fine collisione)
        this.color("black");
        this.w += 3;
        this.h += 3;

        foodBox.destroy()                   // distruggo la ENTITY "foodBox" con la funzione ".destroy()"
    });

// cambio una PROPERTY in ogni ENTITY caratterizzata da uno o più COMPONENT specifici
Crafty("_food").each(function() {           
    if(this.x > 100) {
        this.color("purple");
    }
});

Crafty("_food").get() // prelevo la collection di tutte le ENTITY con PROPERTY "_food"
Crafty("_food").get(0) // prelevo la prima ENTITY della collection di tutte le ENTITY con PROPERTY "_food"

