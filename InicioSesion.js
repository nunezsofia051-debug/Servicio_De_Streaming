function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Usuario y contraseña de prueba
    const correctUser = "admin";
    const correctPassword = "1234";

    if(username === correctUser && password === correctPassword){

        localStorage.setItem("loggedUser", username);

        message.style.color = "lightgreen";
        message.textContent = "Inicio de sesión exitoso";

        // Redirección simulada
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);

    } else {

        message.style.color = "tomato";
        message.textContent = "Usuario o contraseña incorrectos";

    }
}
