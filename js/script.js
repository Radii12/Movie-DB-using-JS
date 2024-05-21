////////////////////////////////////////////////api///////////////////////////////////////////////////////////////////////////

var myHttpupcoming = new XMLHttpRequest();
var myHtttop_rated = new XMLHttpRequest();
var apicontainer;
myHttpupcoming.open('GET', 'https://api.themoviedb.org/3/trending/all/day?api_key=5dbd5f8e86d889ca13a96e7e9e4448fa');
myHtttop_rated.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=5dbd5f8e86d889ca13a96e7e9e4448fa');
myHttpupcoming.send();
myHtttop_rated.send();
myHttpupcoming.addEventListener('readystatechange', function () {
   if (myHttpupcoming.readyState == 4) {
      var myres = JSON.parse(myHttpupcoming.response)
      console.log(myres);
      apicontainer = myres.results;
      console.log(apicontainer);
      display();
   }
})
function display() {
   addEventListener
   var box = ``;
   for (var i = 0; i < apicontainer.length; i++) {
      if (apicontainer[i].poster_path !== null && apicontainer[i].popularity !== null && apicontainer[i].release_date && apicontainer[i].popularity) {
         box += `
         <div onmouseover="eye(this)" onmouseleave="eyeleave(this)" onclick="getid(this)"  style="  display: inline-block;  margin:20px ;">
         <div> <i  class="eye fas fa-eye"></i> <img class="img" style="  width:300px;  height: 400px; border-radius: 20px; " src="${"https://image.tmdb.org/t/p/w500/" + apicontainer[i].poster_path}" alt="Moon Knight movie poster"></div>
            <h3><span hidden class="id">${apicontainer[i].id}</span></h3>
               <h3><span>${apicontainer[i].title.split(' ').splice(0,3).join(' ')}</span></h3>
               <time datetime="${apicontainer[i].release_date}">${apicontainer[i].release_date}</time>
               <div><span><i class="fas fa-user"></span></i> ${apicontainer[i].popularity}</div>

       </div><br>`

         document.getElementById('showdata').innerHTML = box;

      }
      else {

      }

   }
}
// style="  width:300px;  height: 500px;   background-color:red ; 
myHtttop_rated.addEventListener('readystatechange', function () {
   if (myHtttop_rated.readyState == 4) {
      var myrestop_rated = JSON.parse(myHtttop_rated.response)
      console.log(myrestop_rated);
      apicontainerop_rated = myrestop_rated.results;
      console.log(apicontainerop_rated);

      display2();
   }
})
function display2() {
   addEventListener
   var box = ``;
   for (var i = 0; i < apicontainerop_rated.length; i++) {
      if (apicontainerop_rated[i].poster_path !== null && apicontainerop_rated[i].vote_average !== null && apicontainerop_rated[i].release_date && apicontainerop_rated[i].popularity) {
         box += `
            <div onmouseover="eye(this)" onmouseleave="eyeleave(this)" onclick="getid(this)"   style="  display: inline-block;  margin:30px ;">
            <div><i  class="eye fas fa-eye"></i> <img class="img" style="  width:300px;  height: 400px; border-radius: 20px; " src="${"https://image.tmdb.org/t/p/w500/" + apicontainerop_rated[i].poster_path}" alt="Moon Knight movie poster"></div>
               <h3><span hidden class="id">${apicontainerop_rated[i].id}</span></h3>
                  <h3><span>${apicontainerop_rated[i].title.split(' ').splice(0,2).join(' ')}</span></h3>
                  <time datetime="${apicontainerop_rated[i].release_date}">${apicontainerop_rated[i].release_date}</time>
                  <div><span><i class="fas fa-user"></span></i> ${apicontainerop_rated[i].popularity}</div>
   
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
var scrolpoinyer1 = document.getElementById("scrolpoinyer1");
scrolpoinyer.addEventListener('click', function () {
   window.scrollTo(0, 0);
 })
scrolpoinyer1.addEventListener('click', function () {
window.location.href="favo.html"})
var x = document.getElementById("home");
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
// document.getElementById("Signup").addEventListener("click",function(){
//    // window.open("js");
//    window.location.href="";
// });
// var counter=0;
// var arr=[];
// var myValue =arr;
// var myKey = "nam";
// var x=localStorage.getItem(myKey, myValue);
/////////////////////////////////////////////--id--////////////////////////////////////////////////////
function getid(e) {
   var id = e.querySelector(".id")
var i=id.innerText;
  console.log(i)
 window.location.href="http://127.0.0.1:5502/movie-details.html?id="+i
}

// var counter=0;
// var arr=[];
// var myValue =arr;
// var myKey = "nam";
// var x=localStorage.getItem(myKey, myValue);
// /////////////////////////////////////////////--id--////////////////////////////////////////////////////
// function getid(e) {
//    var id = e.querySelector(".id")
// arr[counter]=id.innerText+"sss";
//   // console.log(arr)
//   console.log(x+=localStorage.getItem(myKey, myValue));
//    console.log(x+=localStorage.getItem(myKey, myValue));
// localStorage.setItem(myKey, myValue);
// counter++;
// console.log(localStorage.getItem(myKey, myValue));
// }
// document.getElementsByTagName("img").addEventListener("dbclick",function(){
//    console.log("eye");
// })
// ele.style.removeProperty("property-name");
// scrolpoinyer.style.display="none";
document.getElementById("Signin").addEventListener("click",function(){
   window.location.href="./login/Login.html";
});


