var win;
var I;

function openWin(){
    win = open("" , "" , "width=150px , height=150px , top=250px")
    move();
}

function move(){
    console.log("")
    var i = 10;
    I = setInterval(function(){
        win.moveBy(i,i);
        i+=200;
    },2000)
}

function stop(){
    clearInterval(I);
}