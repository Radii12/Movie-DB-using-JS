

var users=[];
//make array that get  data  from userArr
if(localStorage.getItem("user")){

    var userArr=JSON.parse (localStorage.getItem("user"))||[]
}
//getElemenyById
var errorEmail=document.getElementById("showTxt")
var userEmail=document.getElementById("signUpEmail");
var password=document.getElementById("password");
let confermPassword = document.getElementById("confirm");
//declar the variable that take the value
var userEmailValue
var passwordValue
var passwordConfirmValue
var error=document.getElementById('error')

var signUp=document.getElementById("signUpButton");
//function on click
signUp.addEventListener("click",function(event){
event.preventDefault();
userEmailValue=userEmail.value;
passwordValue=password.value;
passwordConfirmValue=confermPassword.value;




var arrCheck=[];
/////////////////   //validation/////////

if(userEmailValue===""&&passwordValue===""&&passwordConfirmValue==="")
{
    error.style.color="red";
    error.innerHTML="Their is no data"
    arrCheck.push("ar")
}else if(userEmailValue===""){
    error.style.color="red";
    error.innerHTML="Pleas enter the Email"
    arrCheck.push("ar")
}else if(passwordValue===""||passwordValue===null){
    error.style.color="red";
    error.innerHTML="Pleas enter the password"
    arr.push("ar")
}else if(passwordValue.length<6){
    error.style.color="red";
    error.innerHTML="= the password less than 6 character"
    arrCheck.push("ar")
}
else if(password.length>20){
    error.style.color="red";
    error.innerHTML="the password is more than 20 character"
    arrCheck.push("ar")
}
else if(passwordConfirmValue===""||passwordConfirmValue===null){
    error.style.color="red";
    error.innerHTML="Pleas enter the confirm password"
    arrCheck.push("ar")
}
console.log(userArr.length)

for(var i=0;i<userArr.length;i++)
{
    if(userEmailValue===userArr[i].userEmail)
    {
        alert("the email found")
        arrCheck.push("ar")
        break;

    }
    
}

if(passwordConfirmValue !== passwordValue){
    error.style.color="red";
    error.innerHTML="The confirm password do not match with the password"
    arrCheck.push("ar")
}


if(arrCheck.length == 0)
{
    var user ={
        userEmail:userEmailValue,
        password:passwordValue,
        
    }
    users.push(user)
    localStorage.setItem("user",JSON.stringify(users));
    console.log(localStorage)   
}

var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(userEmail.value.match(mailformat))
{
return true;
}
else
{
    

 errorEmail.style.color="red";
 errorEmail.innerHTML="The email is wrong";
document.form1. text1.focus();
return false;
};

});

    
var log =document.getElementById("log");
console.log(log)
log.addEventListener("click",function(){
    window.location.href="index.html";
});

const fullName = document.getElementById('signUpEmail');

fullName.addEventListener('focus', function () {
    fullName.style.background = 'red';
    
});
fullName.addEventListener('blur', function () {
    fullName.style.background = 'white';
    error.style.color="red";
    error.innerHTML="pleas enter the email";})