document.addEventListener("DOMContentLoaded", function () {
    // Validación de formulario de contacto
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let nombre = document.getElementById("txNombre").value.trim();
            let correo = document.getElementById("txCorreo").value.trim();
            let telefono = document.getElementById("txTelefono").value.trim();
            let mensaje = document.getElementById("txtMensaje").value.trim();

            if (!nombre || !correo || !telefono || !mensaje) {
                alert("Por favor, completa todos los campos.");
                return;
            }
            alert("Mensaje enviado con éxito");
            form.reset();
        });
    }

    // Animación de cohete en index.html
    const cohete = document.querySelector(".cohete");
    if (cohete) {
        cohete.addEventListener("mouseover", function () {
            cohete.style.transform = "scale(1.1)";
            cohete.style.transition = "transform 0.3s ease";
        });
        cohete.addEventListener("mouseout", function () {
            cohete.style.transform = "scale(1)";
        });
    }

    // Filtrado de proyectos en proyectos.html
    const main = document.querySelector("main");
    if (main) {
        main.insertBefore(filtroInput, main.firstChild);
    }

    filtroInput.addEventListener("input", function () {
        let filtro = filtroInput.value.toLowerCase();
        proyectos.forEach(proyecto => {
            let titulo = proyecto.querySelector("h2").textContent.toLowerCase();
            if (titulo.includes(filtro)) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }
        });
    });
});
