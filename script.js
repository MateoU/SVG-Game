var namespace = "http://www.w3.org/2000/svg"

var flyingSaucer = document.getElementById("ufo");
var fs = 500;
var fy = 250;

function randomNumber(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

var foodEaten = 0;
var textArea = document.getElementById("bleh");


document.addEventListener("keydown", function(e){
  var anotherAlien = document.getElementById("alien2");
  var aX = Number(anotherAlien.getAttribute("x"));
  var aY = Number(anotherAlien.getAttribute("y"));

  var ufoThing = document.getElementById("ufo");
  var uX = Number(ufoThing.getAttribute("x")) + 32;
  var uY = Number(ufoThing.getAttribute("y")) + 32;



  if(e.keyCode == 37){
    fs = fs - 15;
    flyingSaucer.setAttribute("x", fs);

  } else if(e.keyCode == 39){
    fs = fs + 15;
    flyingSaucer.setAttribute("x", fs);
  }

  if(e.keyCode == 38){
    fy = fy - 15;
    flyingSaucer.setAttribute("y", fy);
  } else if(e.keyCode == 40){
    fy = fy + 15;
    flyingSaucer.setAttribute("y", fy);
  }

    if(uX < aX + 32 && uX > aX){
      console.log("x-intercepted");
      if(uY < aY + 32 && uY > aY){
        console.log("y-intercepted");
        foodEaten += 1;
        console.log(foodEaten);
        textArea.innerHTML = "Food Eaten: " + foodEaten;
      }
    }

});
