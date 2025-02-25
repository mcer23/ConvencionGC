document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const correoInput = document.getElementById("correo");
        const passwordInput = document.getElementById("password");
        const errorCorreo = document.getElementById("error-correo");
        const errorPassword = document.getElementById("error-password");

        const correoCorrecto = "prueba@coppel.com";
        const passwordCorrecta = "1234";

        let valid = true;

        // Resetear mensajes de error
        errorCorreo.textContent = "";
        errorPassword.textContent = "";

        if (correoInput.value !== correoCorrecto) {
            errorCorreo.textContent = "El correo es incorrecto";
            valid = false;
        }

        if (passwordInput.value !== passwordCorrecta) {
            errorPassword.textContent = "La contraseña es incorrecta";
            valid = false;
        }

        if (valid) {
            // Redirigir a popup.html si las credenciales son correctas
            window.location.href = "html/temporal/popup.html";
        }
    });
});

