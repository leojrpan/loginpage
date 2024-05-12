const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");
const loginSection = document.getElementById("login-section");

loginButton.addEventListener("click", () => {
    loginSection.style.transform = "translateY(-97%)";
})

signupButton.addEventListener("click", () =>{
    loginSection.style.transform = "translateY(-15%)";
})