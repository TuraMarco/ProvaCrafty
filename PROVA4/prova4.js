// inizializzo crafty
Crafty.init(600, 400, document.getElementById("crafty-game"));

//TWEEN
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

//TIMER
//  L'oggetto Crafty.timer definisce tutti i tics dell'applicazione, esso
//  espone il metodo .FPS() è possibile ottenere il framerate bersaglio (non il framerate attuale)
//  Espone inoltre il metodo .simulateFrames(Number frames[, Number timestemp]) per far avanzare lo
//  stato dell'applicazione di un numero di frame specificati, il timestemp è la durata di ogni fotogramma
//  (defoult 20ms).
//  Un altro utile metodo è .step() che fà avanzare l'applicazione di un singolo step, definito da uno
//  o più fotogrammi seguiti da un render, il numero di frame dipenderà dal tipo di "steptype",
//  questo metodo trigghera una moltitudine di eventi come:
//      - EnterFrame
//      - ExitFrame
//      - PreRender
//      - RenderScene
//      - PostRender
//  Ci sono 3 diversi tipi di valore che possono essere associati a steptype e sono:
//      - fixed ---> ogni frame ha lo stesso valore di "dt" per cui puà triggerare diversi frame
//      - variable ---> trigghera un solo frame per ogni render
//      - semifixed ---> trigghera diversi frame per ogni renderizzazione, ed il tempo dalla scorsa renderizzazione è equamentediviso tra questi       
