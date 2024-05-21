var users=[
    {"id": 1, "Name": "soad","Email":"soadahmed1498@gmail.com","Password":"1234"} ,
    {"id": 2, "Name": "ahmed","Email":"ahmed1997@gmail.com","Password":"1234"} ,
    {"id": 3, "Name": "kasem","Email":"kasem1997@gmail.com","Password":"1234"} ,
    {"id": 3, "Name": "rady","Email":"rady1997@gmail.com","Password":"1234"} ,
    { "id": 3, "Name": "sara","Email":"sara1997@gmail.com","Password":"1234"} 
]

console.log(users)
localStorage.setItem("users", JSON.stringify(users));
usersreturned=JSON.parse(localStorage.getItem("users"));

var errors=[];
let login = document.getElementById("login")
let error=document.getElementById("error")

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault();
// validation
var userEmail=document.getElementById("email").value;
var password=document.getElementById("password").value;
var username=document.getElementById("username").value;
// console.log(username,userEmail,password)

if(userEmail===""||userEmail===null )
{
    
    error.style.color="red";
    errors[0]=("pleas enter the email");
}
if(password===""||password===null){
    error.style.color="red";
    errors[1]=("pleas enter the password");

}
if(username===""||username===null){
    error.style.color="red";
    errors[2]=("pleas enter your username");

}

if(errors.length !=0){
    console.log(errors)
    error.innerHTML=errors.join(" , ");
}
if(errors.length == 0){
   users.forEach((ele)=>{
   if(ele.Name==username && ele.Email ==userEmail && ele.Password == password){
    window.location.href="../index.html";
    error.style.color="green";
    error.innerHTML="login successful";
    
    JSON.parse(localStorage.setItem("user",ele));
   }
   else if(ele.Name!=username || ele.Email !=userEmail || ele.Password != password){
   error.innerHTML="You Are not authorized";
   }
   }) 
}

});


// const fullName = document.getElementById('email');

// fullName.addEventListener('focus', function () {
//     fullName.style.background = 'red';
    
// });
// fullName.addEventListener('blur', function () {
//     fullName.style.background = 'white';
//     error.style.color="red";
//     error.innerHTML="pleas enter the email";})