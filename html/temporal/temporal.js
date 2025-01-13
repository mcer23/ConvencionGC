/*  editar perfil   */
const editButton = document.getElementById('editButton');
        const saveButton = document.getElementById('saveButton');
        const inputs = document.querySelectorAll('input');

        // Habilitar edición
        editButton.addEventListener('click', () => {
            inputs.forEach(input => input.disabled = false);
            editButton.style.display = 'none';
            saveButton.style.display = 'inline-block';
        });

        // Guardar cambios
        saveButton.addEventListener('click', () => {
            inputs.forEach(input => input.disabled = true);
            saveButton.style.display = 'none';
            editButton.style.display = 'inline-block';
            alert('Los cambios se han guardado correctamente.');
        });
/*  Seleccional panel  */    
const submitButton = document.getElementById('submitButton');
        const errorMessage = document.getElementById('errorMessage');
        const checkboxes = document.querySelectorAll('.checkbox');

        // Permitir solo una selección por sección
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const sectionName = checkbox.name;
                const sectionCheckboxes = document.querySelectorAll(`input[name="${sectionName}"]`);
                sectionCheckboxes.forEach(cb => {
                    if (cb !== checkbox) cb.checked = false;
                });
            });
        });

        // Confirmar selección
        submitButton.addEventListener('click', () => {
            const section1Selected = document.querySelector('input[name="section1"]:checked');
            const section2Selected = document.querySelector('input[name="section2"]:checked');

            if (section1Selected && section2Selected) {
                [section1Selected, section2Selected].forEach(checkbox => {
                    const panel = checkbox.parentElement;
                    let capacity = parseInt(panel.dataset.capacity);

                    if (capacity > 0) {
                        capacity -= 1;
                        panel.dataset.capacity = capacity;
                        panel.querySelector('span').textContent = capacity;

                        if (capacity === 0) {
                            panel.classList.add('disabled');
                            checkbox.disabled = true;
                            checkbox.checked = false;
                        }
                    }
                });
                errorMessage.style.display = 'none';
                alert('Selección confirmada.');
            } else {
                errorMessage.style.display = 'block';
            }
        });    