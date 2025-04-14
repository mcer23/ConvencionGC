document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector("#editButton");
    const saveButton = document.querySelector("#saveButton");

    // Select all editable inputs including the WhatsApp checkbox and phone input
    const editableInputs = [
        "nombreColab", 
        "apellidoPColab", 
        "apellidoMColab",
        "mensajeWA",  // WhatsApp checkbox
        "numeroWA"    // WhatsApp phone input
    ];
    const inputs = editableInputs.map(id => document.getElementById(id));

    // Load stored data
    inputs.forEach(input => {
        if (input.type !== "checkbox") {  // For text inputs
            const storedValue = localStorage.getItem(input.id);
            if (storedValue) {
                input.value = storedValue;
            }
        }
    });

    // Load WhatsApp preferences
    const whatsappCheckbox = document.getElementById("mensajeWA");
    const phoneInput = document.getElementById("numeroWA");
    
    // Load stored WhatsApp preference
    const whatsappPref = localStorage.getItem("whatsappNotification");
    if (whatsappPref === "true") {
        whatsappCheckbox.checked = true;
        phoneInput.disabled = false;
        
        // Load stored phone number if exists
        const storedPhone = localStorage.getItem("whatsappPhone");
        if (storedPhone) {
            phoneInput.value = storedPhone;
        }
    } else {
        whatsappCheckbox.checked = false;
        phoneInput.disabled = true;
    }

    // WhatsApp toggle function
    function togglePhoneInput() {
        phoneInput.disabled = !whatsappCheckbox.checked;
        
        if (!whatsappCheckbox.checked) {
            phoneInput.value = "";
            localStorage.removeItem("whatsappPhone");
        }
    }

    // Save phone number when changed
    phoneInput.addEventListener("change", function() {
        if (whatsappCheckbox.checked && phoneInput.value.length >= 10) {
            localStorage.setItem("whatsappPhone", phoneInput.value);
        }
    });

    // Edit button event
    editButton.addEventListener("click", function () {
        inputs.forEach(input => {
            input.removeAttribute("disabled");
            if (input.id === "numeroWA" && !whatsappCheckbox.checked) {
                input.disabled = true;  // Keep phone disabled if checkbox isn't checked
            }
        });
        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
    });

    // Save button event
    saveButton.addEventListener("click", function () {
        // Quitamos el color de fondo
        nombre.style.background = "";
        apellidoP.style.background = "";
        apellidoM.style.background = "";
        numeroWA.style.background ="";
        
        // Save all values
        inputs.forEach(input => {
            if (input.type === "checkbox") {
                localStorage.setItem("whatsappNotification", input.checked);
            } else {
                localStorage.setItem(input.id, input.value);
                input.setAttribute("disabled", "true");
            }
        });

        // Disable the WhatsApp checkbox after saving
        whatsappCheckbox.setAttribute("disabled", "true");
        
        editButton.style.display = "inline-block";
        saveButton.style.display = "none";

        alert("Datos guardados correctamente");
    });

    // Initialize the WhatsApp checkbox state
    whatsappCheckbox.addEventListener("change", togglePhoneInput);
    whatsappCheckbox.setAttribute("disabled", "true");  // Start disabled
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


