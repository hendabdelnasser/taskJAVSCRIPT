
/// ما اشتغلتش///

function open(){
    var win = window.open("" , "" , "width=300px , height=250px , top=350px");
    var User = document.getElementById("username");
win.document.write(User.value);
document.write("<br>");
var Uaddress = document.getElementById("name");
win.document.write(Uaddress.value);
document.write("<br>");
var Ugender = document.getElementById("id");
win.document.write(Ugender.value);
document.write("<br>");
var Umail = document.getElementById("email");
win.document.write(Umail.value);
document.write("<br>");
var Umobile = document.getElementById("phone");
win.document.write( Umobile.value);

}




