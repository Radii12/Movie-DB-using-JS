
var z=localStorage.getItem("nam");

let jsonString = z;
var  apicontainer;
// Split the string into an array of strings representing individual JSON objects
let jsonStrings = jsonString.match(/({[^}]*})/g);

// Parse each JSON object and push it into an array
let arrayOfObjects = [];
jsonStrings.forEach(jsonStr => {
  let jsonObject = JSON.parse(jsonStr);
  arrayOfObjects.push(jsonObject);
    
});
apicontainer = arrayOfObjects;
console.log(apicontainer)

    
      display();



function display() {
   addEventListener
   var box = ``;
   for (var i = 0; i < apicontainer.length; i++) {
      if (apicontainer[i].poster_path !== null && apicontainer[i].popularity !== null && apicontainer[i].release_date && apicontainer[i].popularity) {
         box += `
         <div onmouseover="eye(this)" onmouseleave="eyeleave(this)" onclick="getid(this)"  style="  display: inline-block;  margin:20px ;">
         <div> <i  class="eye fas fa-eye"></i> <img class="img" style="  width:300px;  height: 400px; border-radius: 20px; " src="${"https://image.tmdb.org/t/p/w500/" + apicontainer[i].poster_path}" alt="Moon Knight movie poster"></div>
            <h3><span hidden class="id">${apicontainer[i].id}</span></h3>
               <h3><span>${apicontainer[i].title}</span></h3>
               <time datetime="${apicontainer[i].release_date}">${apicontainer[i].release_date}</time>
               <div><span><i class="fas fa-user"></span></i> ${apicontainer[i].popularity}</div>

       </div><br>`

         document.getElementById('showdata2').innerHTML = box;

      }
      else {

      }

   }
}

////////////////////////////////////////////nav&scroll////////////////////////////////////////////////////////////////
var nav = document.getElementById("nav");
var scrolpoinyer = document.getElementById("scrolpoinyer");

scrolpoinyer.addEventListener('click', function () {
  window.scrollTo(0, 0);
})
var x = document.getElementById("nav");
var z = x.offsetTop;
console.log(z);
// console.log(z);
window.addEventListener('scroll', function () {
   if (window.scrollY > z) {
      scrolpoinyer.style.display = null;
      nav.style.backgroundColor = "hsl(207, 19%, 11%)";
      // nav.animate({"backgroundColor":"hsl(207, 19%, 11%)"},1000);
   }
   else {
      scrolpoinyer.style.display = "none";
      nav.style.backgroundColor = "";
   }
})

/////////////////////////////////////////////////style/////////////////////////////////////////////////////////
function eye(e) {
   var img = e.querySelector(".img");
   var eye = e.querySelector(".eye")
   eye.style.zIndex = "9";
   img.style.opacity = ".4";
   // eye.style.transition="1s";


}
function eyeleave(e) {
   var img = e.querySelector(".img");
   var eye = e.querySelector(".eye")
   eye.style.zIndex = "-1";
   img.style.opacity = "1";

}
setInterval(() => {
   var x=document.querySelector(".servic2")
   x.style.opacity=".2";

}, 500);
setInterval(() => {
   var x=document.querySelector(".servic2")
   x.style.opacity="1";

}, 1000);
// document.getElementById("Signin").addEventListener("click",function(){
//    // window.open("js");
//    window.location.href="./project2/index.html";
// });
document.getElementById("back").addEventListener("click",function(){
   // window.open("index.html");
   window.location.href="index.html";
});
// console.log("sdfjdskhf")