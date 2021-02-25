
openhamburger = document.querySelector(".openhamburger");

menu = document.querySelector(".menu");
// main = document.querySelector('.main');
nav = document.querySelector(".nav");

closehamburger = document.querySelector(".closehamburger");

openhamburger.addEventListener("click", () => {

  menu.style.display = "flex";
  menu.style.top = "0";
});

closehamburger.addEventListener("click", () => {
  menu.style.top = "-100%";
  presents.style.opacity = "1";

});


//shaky number
helping = document.querySelector(".helping");
number = document.querySelector(".number");

helping.addEventListener("mouseover", () => {
  number.style.animation = "shake 0.5s 3";
  number.style.color = "red";
});

helping.addEventListener("mouseout", () => {
  number.style.animation = "none";
  number.style.color = "green";
});


//hide ashika foundation presents
presents = document.getElementById("present");

var myScrollFunc = function () {
  var y = window.scrollY;
  
  if (y < 250) {
    presents.style.opacity = "1";
  } else {
    presents.style.opacity = "0.1";
  }
  if(menu.style.display=="flex"){
    presents.style.opacity = "0";

  }
 
};

window.addEventListener("scroll", myScrollFunc);
