// Esperamos a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleccionamos los botones
    let editButton = document.getElementById("editButton");
    let saveButton = document.getElementById("saveButton");

    // Seleccionamos los inputs que se pueden editar
    let nombre = document.getElementById("nombre");
    let apellidoP = document.getElementById("apellidoP");
    let apellidoM = document.getElementById("apellidoM");

    // Evento para el botón Editar
    editButton.addEventListener("click", function () {
        // Activamos solo los campos permitidos
        nombre.disabled = false;
        apellidoP.disabled = false;
        apellidoM.disabled = false;

        // Cambiamos los colores para mostrar que están activos
        nombre.style.background = "#f3f3f3";
        apellidoP.style.background = "#f3f3f3";
        apellidoM.style.background = "#f3f3f3";

        // Ocultamos el botón Editar y mostramos el botón Guardar
        editButton.style.display = "none";
        saveButton.style.display = "block";
    });

    // Evento para el botón Guardar
    saveButton.addEventListener("click", function () {
        // Bloqueamos los inputs
        nombre.disabled = true;
        apellidoP.disabled = true;
        apellidoM.disabled = true;

        // Quitamos el color de fondo
        nombre.style.background = "";
        apellidoP.style.background = "";
        apellidoM.style.background = "";

        // Mostramos de nuevo el botón Editar y ocultamos Guardar
        editButton.style.display = "block";
        saveButton.style.display = "none";
        
        // Opcional: Mensaje de alerta
        alert("Datos guardados correctamente");
    });
});

