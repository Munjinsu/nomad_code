const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(yourName){
    greeting.innerHTML = `<span>Hellow</span> ${yourName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}




