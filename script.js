function kwadrat(){
var x = document.getElementById("bokkwadrat")
var y = document.getElementById("wynikkwadrat")
if(document.getElementById("obwod").checked){
 y.value = x*2
}
}

function kwadrat1(){
    var x = document.getElementById("bokkwadrat")
    var y = document.getElementById("wynikkwadrat")
    if(document.getElementById("obwod").checked){
     y.value = x*4
    }
    }

function trapez(){
    
}
function rownoleglobok(){
    
}
function prostokat(){
    
}
function trojkatrownoboczny(){
    
}
function romb(){
    
}
function kolo(){
    
}
function szescian(){
    
}
function kula(){
    
}


function ukryj1(){
   
    var a = $("#kwadrat");
  if (a.css("display") == "none") {
    a.css("display", "block").animate({opacity: 1}, 500);
  } else {
    a.animate({opacity: 0}, 500, function() {
      $(this).css("display", "none");
    });
  }
}
    

function ukryj2(){
   
    var a = $("#prostokat");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
  }
    

function ukryj3(){
    var a = $("#trojkat");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
    
}
function ukryj4(){
    var a = $("#rownoleglobok");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}
function ukryj5(){
    var a = $("#trapez");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}
function ukryj6(){
    var a = $("#romb");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}
function ukryj7(){
    var a = $("#szescian");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}
function ukryj8(){
    var a = $("#kolo");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}
function ukryj9(){
    var a = $("#kula");
    if (a.css("display") == "none") {
      a.css("display", "block").animate({opacity: 1}, 500);
    } else {
      a.animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      });
    }
}