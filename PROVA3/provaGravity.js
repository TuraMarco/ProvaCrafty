Crafty.init(600, 400, document.getElementById("crafty-game"));

var floor = Crafty.e("2D, Canvas, Color, _floor") 
    .attr({x:0, y:390, w:600, h:10})
    .color("orange");

var temp = Crafty.e("2D, Canvas, Color, Twoway, Gravity")
    .attr({x:200, y:200, w:50, h:50})
    .color("green")
    .gravity("_floor")
    .twoway(200);

temp.removeComponent("Twoway", false) 
temp.removeComponent("Gravity", false) 

///// NON SI RIMUOVE ///////

