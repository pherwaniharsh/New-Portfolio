let menuButton = document.querySelector(".menuButton");
let navBar = document.querySelector("nav");

menuButton.addEventListener('click', function(){
    navBar.classList.toggle("menuDisplay");
})