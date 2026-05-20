<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Streaming Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="login-container">
        <h1>MovieStream</h1>

        <input type="text" id="username" placeholder="Usuario">
        <input type="password" id="password" placeholder="Contraseña">

        <button onclick="login()">Iniciar Sesión</button>

        <p id="message"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
