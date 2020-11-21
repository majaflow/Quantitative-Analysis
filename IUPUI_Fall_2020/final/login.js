const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "cool" && password === "password") {
        alert("You have successfully logged in.");
        window.location.assign("./gradeview.html")
    } else if (username != "cool" && password != "password") {
        loginErrorMsg.innerHTML = "Username and Password are Incorrect"
        loginErrorMsg.style.opacity = 1;
    } else if (username != "cool") {
        loginErrorMsg.innerHTML = "Username is Incorrect"
        loginErrorMsg.style.opacity = 1;
    } else {
        loginErrorMsg.innerHTML = "Password is Incorrect"
        loginErrorMsg.style.opacity = 1;
    }
})