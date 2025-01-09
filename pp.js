let menuButton = document.querySelector(".menuButton");
let navBar = document.querySelector("nav");

menuButton.addEventListener('click', function(){
    navBar.classList.toggle("menuDisplay");
    
    if(navBar.classList.contains("menuDisplay")){
        menuButton.classList.add("fixedButton");
    }
    else{
        menuButton.classList.remove("fixedButton");
    }
})

