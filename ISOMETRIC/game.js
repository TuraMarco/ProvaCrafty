//pro tip: see also this work in progress by Hex http://jsfiddle.net/hexaust/HV4TX/
window.onload = function() 
{
	Crafty.init();

    //128 è la dimensione di un riquadro, [0,0,1,1] sono le coordinate del riquadro da associare ad un COMPONENT
	Crafty.sprite(128, "images/sprite.png", {
		_grass: [0,0,1,1],
		_stone: [1,0,1,1]
	});

    iso = Crafty.isometric.size(128); // definisco la dimensione della griglia isometrica (usare potenze di 2)
    for(var i = 20; i >= 0; i--) //numero di elementi per riga (21)
    {
        for(var y = 0; y < 20; y++) //20
        {
			var which = Crafty.math.randomInt(0,1);
			var tile = Crafty.e("2D, Canvas, "+ (!which ? "_grass" : "_stone") +", Mouse") //scielgo in modo randomico il tipo di COMPONENET da associare all'elemento
			.attr('z',i+1 * y+1)    //crea la sovrapposizione tra gli sprite incrementando z per ogni istanza
            .areaMap(64,0,128,32,128,96,64,128,0,96,0,32) //seleziono l'area in cui triggherare gli eventi del mouse (ogni punto è espresso da una coppia di argomenti)
            .bind("Click", function(e) 
            {
                //destroy on right click
                //right click seems not work in Mac OS
                //delete it
                console.log(e.mouseButton);
                /*if(e.button === 2)*/ this.destroy();
            })
            .bind("MouseOver", function() 
            {
                if(this.has("_grass")) {
                    this.sprite(0,1,1,1);
                    this.y -= 3;
                } 
                else 
                {
                    this.sprite(1,1,1,1);
                    this.y -= 3;
                }
            })
            .bind("MouseOut", function() 
            {
                if(this.has("_grass")) 
                {
                    this.sprite(0,0,1,1);
                    this.y += 3;
                } 
                else 
                {
                    this.sprite(1,0,1,1);
                    this.y += 3;
                }
            });
            
            iso.place(i,y,0, tile); //inserisco l'ELEMENT appena creato nella griglia isometrica nelle coordinate "i" ed "y", il terzo argomento esprime l'altezza
        }
	}
    
    //Crafty.stage.elem -----> cr-stage (ossia l'elemto HTML dove è inserita l'applicazione)

    //spostarsi con la mappa usandpo il mouse
	Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function()     //associol'evento per muovere la griglia isometrica
    {
        Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e) {
            if(e.button > 1) return;
            var base = {x: e.clientX, y: e.clientY};
    
            function scroll(e) {
                var dx = base.x - e.clientX,
                    dy = base.y - e.clientY;
                    base = {x: e.clientX, y: e.clientY};
                Crafty.viewport.x -= dx;
                Crafty.viewport.y -= dy;
            };
    
            Crafty.addEvent(this, Crafty.stage.elem, "mousemove", scroll);
            Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function() {
                Crafty.removeEvent(this, Crafty.stage.elem, "mousemove", scroll);
            });
        });
    });
}