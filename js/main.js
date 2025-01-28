import { skills } from "./servicesPage.js";
import { filters } from "./filter.js";

let icon = document.querySelector ('.hamburgre-icon');
let close = document.querySelector ('#close-icon');
let nav = document.querySelector ('.nav-side');
let links = document.querySelectorAll ('ul li a');
let header = document.querySelector ('.header');
links.forEach (element => {
  element.addEventListener ('click', function () {
    nav.style.display = 'none';
  });
});

icon.addEventListener ('click', function () {
  nav.style.display = 'block';
});
close.addEventListener ('click', function () {
  nav.style.display = 'none';
});
window.addEventListener ('scroll', function () {
  if (window.scrollY > window.innerHeight * 0.8) {
   
    header.style.backgroundColor = '#1B1B1B';
    header.style.top = '0px';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.top = '20px';
  }
});


