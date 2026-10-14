const formularioContacto = document.getElementById("formularioContacto");

if (formularioContacto) {
    const botonEnviar = document.getElementById("enviarContacto");
    const estadoContacto = document.getElementById("estadoContacto");

    formularioContacto.addEventListener("submit", async function (evento) {
        evento.preventDefault();
        botonEnviar.disabled = true;
        estadoContacto.textContent = "Enviando tu mensaje...";
        estadoContacto.classList.remove("error");

        const datosFormulario = new FormData(formularioContacto);
        const mensaje = {
            nombre: datosFormulario.get("nombre"),
            correo: datosFormulario.get("correo"),
            asunto: datosFormulario.get("asunto"),
            mensaje: datosFormulario.get("mensaje"),
            website: datosFormulario.get("website")
        };

        try {
            const respuesta = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mensaje)
            });
            const resultado = await respuesta.json();

            if (!respuesta.ok) {
                throw new Error(resultado.error || "No se pudo enviar tu mensaje.");
            }

            formularioContacto.reset();
            estadoContacto.textContent = "¡Mensaje enviado! Gracias por escribirnos. 💗";
        } catch (error) {
            estadoContacto.textContent = error.message || "No se pudo enviar el mensaje. Intenta de nuevo.";
            estadoContacto.classList.add("error");
            console.error("Error al enviar el formulario de contacto:", error);
        } finally {
            botonEnviar.disabled = false;
        }
    });
}
