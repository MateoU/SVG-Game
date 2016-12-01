var timeStart = Date.now();
var namespace = "http://www.w3.org/2000/svg"

var increasingN = 5;
var increasingN2 = 5;

var flyingSaucer = document.getElementById("ufo");
var fs = 500;
var fy = 250;

function randomNumber(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

var timeThing = 0;
var foodEaten = 20;
var aliensSaved = 0;

var textArea = document.getElementById("bleh");

setInterval(tMinusOne, 1000);
setInterval(tMinusPointOne, 10);

function tMinusPointOne(){
  var meteorThing2 = document.getElementById("meteor");
  var mX2 = Number(meteorThing2.getAttribute("x")) + 17;
  var mY2 = Number(meteorThing2.getAttribute("y")) + 17;

  var ufoThing2 = document.getElementById("ufo");
  var uX2 = Number(ufoThing2.getAttribute("x")) + 32;
  var uY2 = Number(ufoThing2.getAttribute("y")) + 32;
  if(mX2 < uX2 + 32 && mX2 > uX2){
    //console.log("fdsfjkl");
    if(mY2 < uY2 + 32 && mY2 > uY2){
      //console.log("collided");
      endGame();
    }
  }
}

function tMinusOne() {
  foodEaten -= 1;
  textArea.innerHTML = "Score: " + foodEaten;
  if(foodEaten == 0){endGame()}
  timeThing += 1;
}

document.addEventListener("keydown", function(e){
  var anotherAlien = document.getElementById("alien2");
  var aX = Number(anotherAlien.getAttribute("x"));
  var aY = Number(anotherAlien.getAttribute("y"));
  var alienAnim = document.getElementById("goDown2");

  var ufoThing = document.getElementById("ufo");
  var uX = Number(ufoThing.getAttribute("x")) + 32;
  var uY = Number(ufoThing.getAttribute("y")) + 32;

  var meteorThing = document.getElementById("meteor");
  var mX = Number(meteorThing.getAttribute("x")) + 17;
  var mY = Number(meteorThing.getAttribute("y")) + 17;

  var alien = document.getElementById("alien");
  var aX2 = Number(alien.getAttribute("x"));
  var aY2 = Number(alien.getAttribute("y"));
  var alienAnim2 = document.getElementById("goDown");

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
        var otherThing = increasingN -= 0.2;
        //console.log("y-intercepted");
        foodEaten += 3;
        //console.log(foodEaten);
        textArea.innerHTML = "Score: " + foodEaten;
        var newXPos = randomNumber(100, 978);
        anotherAlien.setAttribute("x", newXPos);
        anotherAlien.setAttribute("y", 0);
        aliensSaved += 1;
        var newXPos2 = randomNumber(100, 978);
        meteorThing.setAttribute("x", newXPos2);
        //console.log("qwerty");
        alienAnim.setAttribute("dur", otherThing);
      }
    }

    if(uX < aX2 + 32 && uX > aX2){
      //console.log("x-intercepted");
      if(uY < aY2 + 32 && uY > aY2){
        var otherThing2 = increasingN2 -= 0.2;
        //console.log("y-intercepted");
        foodEaten += 3;
        //console.log(foodEaten);
        textArea.innerHTML = "Score: " + foodEaten;
        var newXPos3 = randomNumber(100, 978);
        alien.setAttribute("x", newXPos3);
        alien.setAttribute("y", 0);
        aliensSaved += 1;
        var newXPos2 = randomNumber(100, 978);
        meteorThing.setAttribute("x", newXPos2);
        //console.log("qwerty");
        alienAnim.setAttribute("dur", otherThing2);
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
    document.getElementById("middleThing").innerHTML = "You saved " + aliensSaved + " aliens." + "<br>" + "You survived for " + new3Thing + " seconds.";
}

function reloadPage() {
    location.reload();
}
