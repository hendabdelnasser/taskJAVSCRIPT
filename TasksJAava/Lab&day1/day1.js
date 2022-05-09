// One///
alert("Welcome to my site")
var n = prompt("Enter your Name")
document.write("welcome" + n)

// Two//
var temperature = 1<=30 ?"HOT" : "Cold";
console.log(temperature)

document.write("<br>")

//three//

var faculty = prompt("Enter Your faculty")
switch (faculty)
{
    case "FCI":
    document.write("You’re eligible to Programing tracks")
    break;
    case "Engineering":
        document.write("You’re eligible to Network and Embedded tracks")
        break;
        case "Commerce":
            document.write("You’re eligible to ERP and Social media tracks")
            break;
            default:
            document.write("You’re eligible to SW fundamentals track")
            break;
}
    
// four//
var user=prompt("Enter your Name")
var four =isFinite(user);
document.write("<br>")

// if(four==false){
//     document.write(user)
// }elseif(four==true)
// prompt("Enter your Name")
// document.write(user)



var yearNow = 2022;
do{
 var brith = parseInt(prompt("Enter his birth year"))  
 document.write("<br>")

}while (brith > 2010) {
    document.write("Birth year : " + brith)
    document.write("<br>")
    document.write("Age: " + (yearNow - brith))

}
document.write("<br>")

// five//

var num1 = parseInt(prompt("Enter Your start Number"))  
var num2 = parseInt(prompt("Enter Your end Number"))  
for(var i = num1; i<=num2; i++){
    if(i%2==1){
        document.write(i)
        document.write("<br>")

    }
}
document.write("<br>")

//six//

var expression = eval("3+4*5/10*8")
document.write(expression)


//seven//
var x = 5; 
console.log(x); 
console.log(y); 
var y = 7; 

// eight//

var num1 = parseInt(prompt("Enter Your One Number")) 
var num2 = parseInt(prompt("Enter Your Two Number"))  
var num3 = parseInt(prompt("Enter Your three Number"))  
if(num1 == num2 && num2== num3){
    alert("triangle is  equilateral")
elseif(num1 == num2 || num2 == num3)
    alert("triangle is  isosceles ")

}else{
    alert("triangle is scalene ")
 
}









 

