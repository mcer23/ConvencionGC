const usuarios = [
    { email: "prueba1@example.com", password: "1234" },
    { email: "maria.lopez@example.com", password: "abcd" }
];
document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el usuario ya ha iniciado sesión
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const popupShown = localStorage.getItem("popupShown");

    if (isLoggedIn === "true" && popupShown !== "true") {
        // Mostrar el popup solo una vez
        window.open("popup.html", "_blank", "width=500,height=500");
        localStorage.setItem("popupShown", "true");
    }
});

// Manejar el formulario de inicio de sesión
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    // Lógica de validación simple
    if (email && password) {
        // Guardar estado de inicio de sesión
        localStorage.setItem("isLoggedIn", "true");

        // Redirigir a la misma página
        window.location.reload();
    } else {
        alert("Por favor, ingresa datos válidos.");
    }
});