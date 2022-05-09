function login(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
   localStorage.setItem("username" , JSON.stringify(name));
   localStorage.setItem("password" , JSON.stringify(pass));

    var date = new Date();
    date.setDate(date.getDate()+10)

document.cookie = "username" + username + "password" + password ; expires = "+date.toDateString()+";

}





var connect=new XMLHttpRequest();
connect.open("GET","https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")

connect.onreadystatechange=function()
{
    if(connect.readyState==4&&connect.status==200)
    {
        var products=JSON.parse(connect.responseText)
        for(var i=0;i<products.length;i++)
        {
            var newdiv=document.createElement("div");
            var newtxt=document.createElement("h3");
            var Price=document.createTextNode(products[i].price)
            var titl=document.createTextNode(products[i].name)
            newtxt.appendChild(Price);
            newtxt.appendChild(titl);
            var img=document.createElement("img");
            img.setAttribute("src",products[i].image)
            newdiv.appendChild(newtxt);
            newdiv.appendChild(img);
            newdiv.style. border="Solid  10px black";
            newdiv.style. background="red";
            newdiv.style. display="flex";
            newdiv.style. width="30%";
            document.body.appendChild(newdiv)
            img.style.borderRadius="50px";
            img.style.width="35%";
            
            
          


        }   
    }
}
connect.send()

// var connect=new XMLHttpRequest();
// connect.open("GET" , "https://www.googleapis.com/books/v1/volumes?q=${bookName}")

// connect.onreadystatechange=function()
// {
//     if(connect.readyState==4&&connect.status==200){
//     var book = JSON.parse(connect.responseText);
//     for(var i =0; i < book.length; i++){
//         console.log(book)
//     }
    
// } 
// }
// connect.send()

var todos = new XMLHttpRequest();
todos.open("GET" , "https://jsonplaceholder.typicode.com/todos")
todos.onreadystatechange = function(){
    if(todos.readyState==4&&todos.status==200){
        var res = JSON.parse(todos.responseText)
        for(var i=0; i<res.length;i++)
        if(res[i].completed==true)
        console.log(res[i])
    }
}
todos.send()

