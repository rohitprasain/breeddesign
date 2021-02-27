openhamburger = document.querySelector(".openhamburger");
menu = document.querySelector(".menu");
closehamburger = document.querySelector(".closehamburger");

presents = document.getElementById("present");
donatebtn = document.querySelector(".btn");

donatebtn.addEventListener("click", () => {
  menu.style.top = "-100%";
});
openhamburger.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.top = "0";
  presents.style.opacity = "0";
});

closehamburger.addEventListener("click", () => {
  menu.style.top = "-100%";
  presents.style.opacity = "0";

  //scroll to top
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;

//refresh the window
  window.location.href = 'index.html'
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

var myScrollFunc = function () {
  navbar = document.getElementById("navbar");

  var y = window.scrollY;
  if (menu.style.display != "flex") {
    if (y < 250) {
      navbar.style.opacity = "1";

      navbar.style.width = "90%";
    } else if (y > 250 && y < 900) {
      navbar.style.opacity = "0";
    } else {
      navbar.style.width = "100%";
      navbar.style.opacity = "1";
    }
  }
};

window.addEventListener("scroll", myScrollFunc);
