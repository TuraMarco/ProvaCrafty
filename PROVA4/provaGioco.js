// inizializzo crafty
var stageWidth = 600;
var stageHeight = 600;
var point = 0;
Crafty.init(600, 600, document.getElementById("crafty-game"));

var playerBox = Crafty.e("2D, Canvas, Color, Fourway, Collision")
    .attr({x:30, y:30, w:35, h:35})
    .color("black")
    .fourway(200)
    .bind("EnterFrame", function (eventData) //impedisce che esca dal campo
    {
        if(this.x <= 0) 
        {
            this.x = 0;
        }
        if(this.y <= 0) 
        {
            this.y = 0;
        }
        if(this.x >= (stageWidth - this.w)) //stageWidht è la larghezza dell'area di gioco
        {
            this.x = stageWidth - this.w;
        }
        if(this.y >= (stageHeight - this.h)) //stageHeight è l'altezza dell'area di gioco
        {
            this.y = stageHeight - this.h;
        }
    });
    
var foodBox = Crafty.e("2D, Canvas, Color, _food")
    .attr({x:300, y:300, w:15, h:15})
    .origin("center")
    .color("red")
    .bind("EnterFrame", function(eventData) 
    {
        this.rotation += 4;    
    });

var textBox = Crafty.e("2d, Canvas, Text")
    .attr({x:0, y:0, w:20, h:20})
    .textAlign("start")
    .textFont("size", "20px")
    .textColor("blue")
    .text(point);

playerBox
    .checkHits("_food")
    .bind("HitOn", function (eventData) 
    {
        textBox.text(++point);
        foodBox.x = Math.random() * (stageWidth - foodBox.w);
        foodBox.y = Math.random() * (stageHeight - foodBox.h);
    });
    
