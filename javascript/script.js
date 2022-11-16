// type writer effect
var i = 0;
var txt = "Frontend Web Developer"; /* The text */
var speed = 16; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector(".work").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

let typed = new Typed(".work", {
  strings: ["Frontend Web Developer", "UX-UI Designer"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
});

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const navitems = document.querySelector(".navItems");
const closebtn = document.querySelector(".close");
const a = document.querySelectorAll(".navItems a");

hamburger.addEventListener("click", () => {
  if (navitems.style.right != "0%") {
    navitems.style.right = "0%";
    menu.style.visibility = "hidden";
    closebtn.style.visibility = "visible";
  } else {
    navitems.style.right = "-200%";
    menu.style.visibility = "visible";
    closebtn.style.visibility = "hidden";
  }
});
a.forEach((element) => {
  element.addEventListener("click", () => {
    navitems.style.right = "-200%";
    menu.style.visibility = "visible";
    closebtn.style.visibility = "hidden";
  });
});
