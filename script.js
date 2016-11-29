var timeStart = Date.now();
var namespace = "http://www.w3.org/2000/svg"

var flyingSaucer = document.getElementById("ufo");
var fs = 500;
var fy = 250;

function randomNumber(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

var timeThing = 0;
var foodEaten = 10;
var aliensSaved = 0;

var textArea = document.getElementById("bleh");

setInterval(minusOne, 1000);

function minusOne() {
  foodEaten -= 1;
  textArea.innerHTML = "Score: " + foodEaten;
  if(foodEaten == 0){endGame()}
  timeThing += 1;
}

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
      //console.log("x-intercepted");
      if(uY < aY + 32 && uY > aY){
        //console.log("y-intercepted");
        foodEaten += 3;
        //console.log(foodEaten);
        textArea.innerHTML = "Score: " + foodEaten;
        var newXPos = randomNumber(100, 978);
        anotherAlien.setAttribute("x", newXPos);
        anotherAlien.setAttribute("y", 0);
        aliensSaved += 1;
      }
    }
    if(foodEaten == 0){endGame()}
});

function endGame(){

    document.getElementById("thing").pauseAnimations()
    var timeStop = Date.now();
    var newThing = timeStop - timeStart;
    var newnewThing = newThing / 1000;
    var new3Thing = Math.round(newnewThing);
    $("#slideDown").slideDown();
    $("#slideDown").css("display", "block");
    document.getElementById("middleThing").innerHTML = "You saved " + aliensSaved + " aliens." + "<br>" + "You survived for " + timeThing + " seconds.";
}

function reloadPage() {
    location.reload();
}
