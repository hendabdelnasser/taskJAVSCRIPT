function person(_name , _age)
{
    var name = _name;
    var age = _age;
    if(this instanceof person)
    {
        throw "abstracted";
    }

   this.setName = function(_name) 
   {
       this.name = _name;
   }
   this.getName = function()
   {
       return name;
   }
   this.setAge = function(_age)
   {
       this.age =_age;
   }
   this.getAge = function()
   {
       return age;
   }
this.tostring = function()
{
    console.log("the name is " + this.name + "the age is " + this.age);
}
}



// literal object
var Depart = 
{
    name: "hend",
    location: "Draw",
    Address:{
        city:"Aswan",
        street:"ggg",
        zipCode : 123
    },
    display : function()
    {
        console.log("name" + this.name + "location" + this.location + "Address" + this.city + this.street + this.zipCode);
    }
}