
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var x = Math.floor(Math.random(arr)*10);
// console.log(x);

var dateTime = new Date()
document.write(dateTime);
document.write("<br>");

//  var Fullname = prompt("Please Your Name");
//  var checkName = /\w{3,}/;
//  document.write(checkName.test(Fullname));
//  document.write("<br>");
//  var reg = /@/;
//  var Email = prompt("Please Your mail");
//  document.write(reg.test( "Email : " + Email));

 document.write("<br>");

 var brith = new Date();
 console.log(brith.getFullYear());
  var arr = [{Name:"hend" , degree:90} , {Name :"hadeer" , degree:100} , {Name:"aaa" , degree:100} , {Name:"ddd" , degree:88} , {Name:"kkk" , degree:90}];

  for(i = 0 ; i<arr.length ; i++){
      if(arr[i].degree >=90  || arr[i].degree == 100 )
   console.log(arr[i]);
   
    }

    arr.push({Name:"nasser" , degree:100});
    console.log(arr)
    arr.pop();
    console.log(arr);

    
    document.write("<br>");

    var d = parseInt(prompt("Day"));
    function weekDays(d){
        switch(d){
            case 0 :
                document.write("Saturday")
                break;
                case 1 :
                    document.write("SUN")
                    break;
                    case 2:
                       document.write("MON")
                        break;
                        case 3 :
                            document.write("TUES")
                            break; 
                            case 4 :
                                document.write("Wendnes")
                                break;
                            case 5 :
                                document.write("THURS")
                                break; 

                                case 6 :
                                    document.write("Funday")
                                    break;  
                                                                                      
        }
    

    }
   weekDays(d);

arr = [60,100,15,10,85];
arr.sort(function(x,y){
    return x - y;
});

var min = 0;
var flag = false;
var max = arr.length - 1;

while(min < max ){
    var x = Math.floor((min + max) / 2);
if (arr[x] == 100){
    flag = true ;
    break;
}

else if(arr[x] > 100)
max = x - 1
else
min = x+1;
}