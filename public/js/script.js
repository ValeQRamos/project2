document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ModuleProject2 JS imported successfully!");
  },
  false
);

// mobile menu index.hbs
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click',() => {
  navbarMenu.classList.toggle('is-active') //add remove
})