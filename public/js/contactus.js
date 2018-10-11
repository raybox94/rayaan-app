/*
this code is written by Rayaan Ahmed
contact:raybox94@gmail.com

*/
function clicked()
{

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let question = document.getElementById("question").value;

if(name === "" || email === "" || question === "")
{
    alert("You need to fill all fields")
}else{
        alert("Name: "+name+"\nEmail: "+email+"\nQuestion: "+question);
}
}//end of function