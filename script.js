var namespace = "http://www.w3.org/2000/svg"

var flyingSaucer = document.getElementById("ufo");
var fs = 500;
var fy = 250
document.addEventListener("keydown", function(e){
  if(e.keyCode == 37){
    fs = fs - 15;
    flyingSaucer.setAttribute("x", fs);
    console.log("fds");
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
});
