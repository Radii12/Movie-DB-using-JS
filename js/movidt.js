'use strict';

// indexbody.addEventListener("load",()=>{
//   console.log("hello")
//   var favoriteIcon = document.getElementById('favoriteIcon');
//   favoriteIcon.setAttribute("id",'favoriteIcon{i}')
//   i++;
// });
// console.log(navigator.cookieEnabled);
let myArray = [];
var moviesId=new Object();
var movieGeners=[];
var idMovie=getUrl();
var movie=JSON.parse(localStorage.getItem("movie"));

function Movies(){ 
  var xhr =new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200)
    {
      var movies=xhr.responseText;
      var jsonData=JSON.parse(movies);
   
      movies=jsonData.results;
      // pass(movies)
      getmoviesId(movies);
      if(window.location.href!='file:///E:/ITI%20Courses/js/project2/index.html'){
        
        getMovieById(movies)
            
      }
    }
  };
  var url="https://api.themoviedb.org/3/trending/all/day?api_key=5dbd5f8e86d889ca13a96e7e9e4448fa";
  xhr.open("get", url, true);
  xhr.send();	
}

function MovieGeners()
{ 
  
  var xhr =new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200)
    {
      var movie=xhr.responseText;
      var movie=JSON.parse(movie);
      for(var i=0;i<movie.genres.length;i++){
       movieGeners.push(movie.genres[i].name);
      }  
      
    }
  };
  var url="https://api.themoviedb.org/3/movie/"+idMovie+"?api_key=5dbd5f8e86d889ca13a96e7e9e4448fa";
  xhr.open("get", url, true);
  xhr.send();	
}


/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

/* soad*/



function getmoviesId(movies){

  var moviesId= new Object();
  for (var index = 0; index < 16; index++) {
   
      moviesId[index]=movies[index].id;
      
    }
    changemoviescard(moviesId);
   
}
function  changemoviescard(moviesId){
  
  var moviescard = document.querySelectorAll("div[class='movie-card'] > a");
 
  moviescard.forEach(Myfunction)
  function Myfunction(value, index, array) {
    moviescard[index].setAttribute("href","./movie-details.html?id="+moviesId[index]);
  }

}
if(idMovie!=undefined){
  MovieGeners();
}

function getMovieDetails(movie){
  
var movieDetails=document.querySelector("section[class='movie-detail']");
var movieBanner=document.querySelector("section[class='movie-detail'] figure[class='movie-detail-banner'] img");
movieBanner.setAttribute("src","https://image.tmdb.org/t/p/original/"+movie.backdrop_path);

var movieheading=document.querySelector("[class='h1 detail-title']");
var movieOverview=document.querySelector("[class='storyline']");
movieheading.innerHTML=movie.title|| movie.name;
movieheading.style="font-size:30px";
movieOverview.innerHTML=movie.overview;

var generWrapper=document.querySelector("[class='ganre-wrapper'] ");
var moviegeners=document.querySelector("[class='ganre-wrapper'] a");
var ancor;

movieGeners.forEach((ele)=> {
  ancor=moviegeners.cloneNode();
  ancor.innerHTML=ele;
   generWrapper.appendChild(ancor);
} )
}

function getUrl(){
  var getId=((window.location.href).split("?id="))[1];
  return getId;
}
function getMovieById(movies){
  var movieId=getUrl();
  var movie = movies;
  var movie = movie.filter((obj) => {if(obj.id == movieId){return obj;}})[0];
  localStorage.setItem("movie", JSON.stringify(movie));
  var favoriteIcon = document.getElementById('favoriteIcon');   
  favoriteIcon.setAttribute("id","favoriteIcon "+movie.id)
  getMovieDetails(movie);

}

// function heart() {
//   const heart = document.getElementById('heart');
//   heart.addEventListener('click', function() {
//     heart.classList.toggle('red');
//   });

// };

// function setCookies(name,value){

// document.cookie=name+"="+value+"; path=/ ;HttpOnly";
// console.log(document.cookie);
// }
sessionStorage.setItem("Username", "Soad");
var user=sessionStorage.getItem("Username");
function deletesession(){
  sessionStorage.removeItem("Username");
   user=""
}
// deletesession()
// console.log(user);

// function favourite(movie){
  
//   var fav=document.getElementById("heart");
//   fav.addEventListener("click",()=>{
//     var css_object=getComputedStyle(fav)
//     var favColor=css_object["color"];
//     switch(favColor){
//       case 'rgb(255, 255, 255)':
//         (function addMovie (){
//           favouriteMovies.push(movie);
//           console.log(favouriteMovies);
//         })();
//         break;
//       case 'rgb(255, 0, 0)':
//         (function deleteMovie (){
//           console.log("hellos");
//         })();
//       break;
//     }
//   })
  
// }
// console.log(favouriteMovies);
// var neww=[];
//get current movie
var counter=0;
var myKey = "nam";
var x;
// localStorage.getItem(myKey, myValue);
/////////////////////////////////////////////--id--////////////////////////////////////////////////////
function toggleFavorite(e) {
  e.style.color="red";
  e.classList.contains('fa-regular') ;
    e.classList.remove('fa-regular');
    e.classList.add('fa-solid');
  var myValue=JSON.stringify(movie);
  localStorage.setItem(myKey, myValue + localStorage.getItem(myKey, myValue));
   var s=localStorage.getItem(myKey, myValue);
  console.log(s);

}





// var counter=0;
// var arr=[];
// var myValue =arr;
// var myKey = "id";
// var x=localStorage.getItem(myKey, myValue);

// function toggleFavorite() {
//   arr[counter]=JSON.stringify(movie);
//   console.log(arr)
//   console.log(x+=localStorage.getItem(myKey, myValue));
// localStorage.setItem(myKey, JSON.stringify(movie));
// counter++;
// console.log(localStorage.getItem(myKey, myValue));

// }
// Function to toggle favorite status and save to local storage
function toggleFavoritee() {
  // function pass(movies){
  
  //   this.movies.forEach((movie)=>{
  //    console.log(movie.id)
  //   })
  // }
 
    var favoriteIcon = document.getElementById('favoriteIcon '+movie.id);

    // Toggle the icon style
    if (favoriteIcon.classList.contains('fa-regular')) {
        favoriteIcon.classList.remove('fa-regular');
        favoriteIcon.classList.add('fa-solid');
        favoriteIcon.style.color="red";
        // Add the movie to the favorites array 
        //  pushElement(movie);
    
        // localStorage.setItem(myKey, JSON.stringify(movie));
        //  const index = myArray.findIndex(obj => obj.id === movie.id);
       //     console.log(myArray)
       //     var x = localStorage.getItem("myArray");
        //    neww=x;
      //      console.log(neww)
         //   console.log("movie exist befor")
          
       
       
    } else {
        favoriteIcon.classList.remove('fa-solid');
        favoriteIcon.classList.add('fa-regular');
        favoriteIcon.style.color="white";
        
        // Remove the movie from the favorites array 
        const index = myArray.findIndex(obj => obj.id === movie.id);
        // const index = favoriteMovies.findIndex((favMovie) => favMovie.id=== movie.id ); // return first index in array if its true
        if (index !== -1) {
          //  console.log(index);
            // console.log(mindex)
            //  delete favoriteMovies[countr];
            //  var favoriteMovies = favoriteMovies.filter(function (el) {
            //   return el != null;
            // });
            // console.log(favoriteMovies)
        }
    }
    
    // Save the updated favorites array to local storage
    // saveFavorites();
    
}



// var x=()=>{
//   toggleFavorite();
// }
// Function to save favorites to local storage
// function saveFavorites() {
//     localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
// }
// localStorage.removeItem("favoriteMovies")

// Global array


// Function to push an element to the global array
function pushElement(element) {
    myArray.push(element);
    saveArrayToLocalStorage();
}

// Function to save the entire array to local storage
function saveArrayToLocalStorage() {
    localStorage.setItem('myArray', JSON.stringify(myArray));
}


saveArrayToLocalStorage();
// document.getElementById("back").addEventListener("click",function(){
//   window.location.href="index.html"
// })
// var j=window.location.href;

// console.log("fff");


/////////////////////////////////////////////--id--////////////////////////////////////////////////////


   


