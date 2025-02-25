/*  Perfil   */
document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector("#editButton");
    const saveButton = document.querySelector("#saveButton");
    const inputs = document.querySelectorAll(".profile-info input");

    // Cargar datos almacenados
    inputs.forEach(input => {
        const storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue;
        }
    });

    editButton.addEventListener("click", function () {
        inputs.forEach(input => input.removeAttribute("disabled"));
        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
    });

    saveButton.addEventListener("click", function () {
        inputs.forEach(input => {
            localStorage.setItem(input.id, input.value);
            input.setAttribute("disabled", "true");
        });

        editButton.style.display = "inline-block";
        saveButton.style.display = "none";
    });
});
/*  Paneles   */
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("#submitButton");

    submitButton.addEventListener("click", function () {
        const horarios = document.querySelectorAll(".main--panel");
        let validSelection = true;
        let selectedPanels = [];

        horarios.forEach((horario, index) => {
            const checkboxes = horario.querySelectorAll(".checkbox:checked");
            if (checkboxes.length !== 1) {
                validSelection = false;
            } else {
                selectedPanels.push(checkboxes[0].nextElementSibling.href);
            }
        });

        if (!validSelection) {
            alert("Selecciona 1 panel por horario");
        } else {
            localStorage.setItem("selectedPanels", JSON.stringify(selectedPanels));
            alert("Selección guardada con éxito");
        }
    });
});

