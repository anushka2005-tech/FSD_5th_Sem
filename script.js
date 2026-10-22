document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("message");

    if(name === "" || email === "" || password === ""){
        message.style.color = "red";
        message.innerHTML = "Please fill all fields.";
        return;
    }

    if(password.length < 6){
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration Successful!";

    document.getElementById("registerForm").reset();

});