var win;
function message(){
    win = window. open("" , "" , "width=300px , height=250px , top=350px");
   var string = "Welcoming visitors is an excellent way of improving user experience";
   var i =0 
   var count= setInterval(function(){
       win.focus();
     win.document.write(string[i])
      
       i++;
       if(string.length == i)
       {
           clearInterval(count)
       }
   },1000) 
    
}