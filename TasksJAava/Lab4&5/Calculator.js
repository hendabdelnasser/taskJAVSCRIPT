function EnterEqual(){
    var x = document.getElementById("Answer").value
    if(x){
        document.getElementById("Answer").value = eval(x)
    }
}
 var S = ""
function EnterNumber(num){
    S +=num;
    document.getElementById("Answer").value = S;
}

function EnterClear(){
    document.getElementById("Answer").value ="";
}

