var i = 0;
 setInterval(function()
 {
   document.images[i+1].src="./marble/marble3.jpg";
   document.images[i].src="./marble/marble1.jpg";
        i++;
   
    if(i== 3)
    {
       
    
         document.images[i].src="./marble/marble2.jpg";

       

        i = 0;
        document.images[i].src="./marble/marble3.jpg";

    }
    
},1000)
function stop(){
    clearInterval(int);
}