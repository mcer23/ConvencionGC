function login(event)
{
    event.preventDefault();
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(correo==="prueba@coppel.com" && password==="1234"){
        let loginData={
            email:correo,
            expiresAt:Date.now()+24*60*60*1000
        }
        localStorage.setItem("userSession", JSON.stringify(loginData)); // Guardar en localStorage



        window.location="popup.html";
    }
    else if (correo!=="prueba@coppel.com"){
        console.warn("correo incorrecto");
    }
    else if (password!=="1234"){
        console.warn("Contraseña incorrecta");
    }
    else{
        console.error("Datos incorrectos");
    }
}
function sessionCheck(){
    let session = localStorage.getItem("loginData");
    if(session){
        let loginData=JSON.parse(session);
        let tiempoActual= Date.now();
        
        if(tiempoActual < loginData.expiresAt){
            window.location.href = "popup.html";
        } else{
            localStorage.removeItem("userSession");
        }
    }
}
sessionCheck();







const usuarios = [
    { email: "prueba@coppel.com", password: "1234" }
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