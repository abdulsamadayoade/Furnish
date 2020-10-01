// MENU TOGGLE
const myMenu = document.querySelector('.menu-toggle');
const myList = document.querySelector('.nav-list');

myMenu.addEventListener('click', () => {
    myMenu.classList.toggle('show');
    myList.classList.toggle('show');
});

// LOGIN AND SIGN UP FORM SLIDER
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");


function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}