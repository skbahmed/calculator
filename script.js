// NUMBER FUNCTION
function zero(){
    document.querySelector(".inputOutput").value += 0;
}
function one(){
    document.querySelector(".inputOutput").value += 1;
}
function two(){
    document.querySelector(".inputOutput").value += 2;
}
function three(){
    document.querySelector(".inputOutput").value += 3;
}
function four(){
    document.querySelector(".inputOutput").value += 4;
}
function five(){
    document.querySelector(".inputOutput").value += 5;
}
function six(){
    document.querySelector(".inputOutput").value += 6;
}
function seven(){
    document.querySelector(".inputOutput").value += 7;
}
function eight(){
    document.querySelector(".inputOutput").value += 8;
}
function nine(){
    document.querySelector(".inputOutput").value += 9;
}
function dot(){
    document.querySelector(".inputOutput").value += ".";
}

//OPERATORS FUNCTION 
function ac(){
    document.querySelector(".inputOutput").value ="";
    document.querySelector(".resultOutput").value ="";
}
function perenthisisStart(){
    document.querySelector(".inputOutput").value +="("
}
function perenthisisEnd(){
    document.querySelector(".inputOutput").value +=")"
}
function mod(){
    document.querySelector(".inputOutput").value +="%"
}
function cut(){
    document.querySelector(".inputOutput").value = document.querySelector(".inputOutput").value.substring(0, document.querySelector(".inputOutput").value.length - 1)
}
function fraction(){
    document.querySelector(".inputOutput").value +="1/"
}
function dblZero(){
    document.querySelector(".inputOutput").value +="00"
}
function pi(){
    document.querySelector(".inputOutput").value +="3.1416"
}
function random(){
    document.querySelector(".inputOutput").value = Math.floor(Math.random() * 1000000000) + 1
}
function sqrt(){
    document.querySelector(".inputOutput").value +="Math.sqrt("
}
function power(){
    document.querySelector(".inputOutput").value +="Math.pow("
}
function cbrt(){
    document.querySelector(".inputOutput").value +="Math.cbrt("
}
function log(){
    document.querySelector(".inputOutput").value +="Math.log("
}
function sin(){
    document.querySelector(".inputOutput").value +="Math.sin("
}
function cos(){
    document.querySelector(".inputOutput").value +="Math.cos("
}
function tan(){
    document.querySelector(".inputOutput").value +="Math.tan("
}
function exp(){
    document.querySelector(".inputOutput").value +="Math.exp("
}
function comma(){
    document.querySelector(".inputOutput").value += ",";
}
function add(){
    document.querySelector(".inputOutput").value += "+";
}
function sub(){
document.querySelector(".inputOutput").value += "-";
}
function multiple(){
    document.querySelector(".inputOutput").value += "*";
}
function divide(){
    document.querySelector(".inputOutput").value += "/";
}
function equal(){
document.querySelector(".resultOutput").value = eval(document.querySelector(".inputOutput").value);
}