menu.onclick = function myFunction(){
let x = document.getElementById('myTopnav');
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav"
}
}

/*let buttonHome = document.querySelector('home')
buttonHome.onclick = function() {
    window.scrollTo(0, 0)
}

let buttonAbout = document.querySelector('about')
buttonAbout.onclick = function() {
    window.scrollTo(0, 1100)
}

let buttonHome = document.querySelector('home')
buttonHome.onclick = function() {
    window.scrollTo(0, 0)
}

let buttonHome = document.querySelector('home')
buttonHome.onclick = function() {
    window.scrollTo(0, 0)
}

let buttonHome = document.querySelector('home')
buttonHome.onclick = function() {
    window.scrollTo(0, 0)
}

let buttonContact = document.querySelector('contact_button')
buttonContact.onclick = function () {
    window.scrollTo(10, 5500);
}*/