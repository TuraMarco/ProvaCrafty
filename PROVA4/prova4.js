// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

// uso la funzione .tween() per animare ENTITY con PROPERTY 2D
var blackBox = Crafty.e("2D, Canvas, Color, Tween")
    .attr({x:50, y:50, w:50, h:50})
    .color("black")
    .tween({x:500}, 3000);  

var orangeBox = Crafty.e("2D, Canvas, Color, Tween")
    .attr({x:50, y:200, w:50, h:50})
    .color("orange")
    .tween({x:500, rotation:360}, 10000);
// .tween() accetta due argomenti, il primo è un oggetto 
// che definisce le specifiche di arrivo, mentre il secondo 
// definisce i tempi di transizione

// cambio il punto di rotazione con .origin()
var purpleBox = Crafty.e("2D, Canvas, Color, Tween")
    .attr({x:50, y:50, w:50, h:50})
    .color("purple")
    .origin(200, 200);  //definisce il punto di rotazione esprimendolo o come coordinata X/Y
                        // oppure come stringa 
                        //  "center" ---> centro dell'ENTITY
                        //  "bootom [left | right | center]"
                        //  "top [left | right | center]"
                        //  "middle [left | right | center]"

blackBox.destroy();
purpleBox.tween({rotation:360, x:500}, 3000);

//posso mettere in pausa, riavviare o distruggere un Tween con i metodi
purpleBox.pauseTweens();
purpleBox.resumeTweens();
purpleBox.cancelTween("rotation"); // passouna stringa con il nome del Tween da eliminare


