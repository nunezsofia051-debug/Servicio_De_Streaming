function registerUser(){

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    // Validaciones
    if(username === "" || email === "" || password === ""){

        message.style.color = "tomato";
        message.textContent = "Completa todos los campos";
        return;
    }

    if(password.length < 6){

        message.style.color = "orange";
        message.textContent = "La contraseña debe tener mínimo 6 caracteres";
        return;
    }

    // Obtener usuarios guardados
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar email repetido
    const userExists = users.find(user => user.email === email);

    if(userExists){

        message.style.color = "tomato";
        message.textContent = "Ese correo ya está registrado";
        return;
    }

    // Crear nuevo usuario
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    // Guardar usuario
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "lightgreen";
    message.textContent = "Usuario registrado correctamente";

    // Limpiar campos
    document.getElementById("username").value = "";
    document.getElementById("email").value =
    document.getElementById("password").value = "";

    console.log(users);
}