var win;
var img = document.getElementById("myImg");
var current =1;
var mytimer;
function Start() {
    mytimer = setInterval(move, 2000)
    setTimeout(function(){
        clearInterval(mytimer)
    }, 10000);
}
function move() {
    current++;
    if(current ==7)
    {
        current=1;
    }
    img.setAttribute("src",current+".jpg")//.jpg
}
function Stop(){
    clearInterval(mytimer)
}