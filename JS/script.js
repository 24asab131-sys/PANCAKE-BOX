const botonResultado = document.getElementById("btnResultado");

if (botonResultado) {

    botonResultado.addEventListener("click", function() {

        let correctas = 0;

        const respuestas = {
            p1: "a",
            p2: "a",
            p3: "b",
            p4: "b",
            p5: "a",
            p6: "b",
            p7: "b",
            p8: "a"
        };

        for (let pregunta in respuestas) {

            const respuesta = document.querySelector(
                'input[name="' + pregunta + '"]:checked'
            );

            if (respuesta && respuesta.value === respuestas[pregunta]) {
                correctas++;
            }
        }

        document.getElementById("resultado").innerHTML =
            "Obtuviste " + correctas + " de 8 respuestas correctas. 🎉";
    });
}// ================================
// MODO CLARO Y OSCURO
// ================================

function cambiarModo() {
    document.body.classList.toggle("modo-oscuro");
}


// ================================
// DESPLAZAMIENTO SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// ANIMACIÓN AL APARECER
// ================================

window.addEventListener("scroll", function () {

    const elementos = document.querySelectorAll(
        ".producto-card, .porque-card, .tecnologia-card"
    );

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        if (posicion < alturaVentana - 80) {
            elemento.classList.add("mostrar");
        }

    });

});
const imagenesPancakes = [
    "Imagenes/pancakes.jpeg",
    "Imagenes/berry.jpeg",
    "Imagenes/choco.jpeg",
    "Imagenes/banana.jpeg"
];

let indiceImagen = 0;

function cambiarImagen(direccion) {
    indiceImagen += direccion;

    if (indiceImagen >= imagenesPancakes.length) {
        indiceImagen = 0;
    }

    if (indiceImagen < 0) {
        indiceImagen = imagenesPancakes.length - 1;
    }

    const imagen = document.getElementById("imagenCarrusel");

    if (imagen) {
        imagen.src = imagenesPancakes[indiceImagen];
    }
}

// ================================
// TRADUCTOR ESPAÑOL / INGLÉS
// ================================

function cambiarIdioma() {
    const idiomaActual = localStorage.getItem("idiomaSitio") || "es";
    const idiomaDestino = idiomaActual === "es" ? "en" : "es";
    const selectorIdioma = document.querySelector(".goog-te-combo");

    localStorage.setItem("idiomaSitio", idiomaDestino);
    document.documentElement.lang = idiomaDestino;
    actualizarBotonIdioma(idiomaDestino);

    if (selectorIdioma) {
        selectorIdioma.value = idiomaDestino;
        selectorIdioma.dispatchEvent(new Event("change"));
    }
}

function actualizarBotonIdioma(idiomaActual) {
    const botonIdioma = document.getElementById("cambiarIdioma");

    if (botonIdioma) {
        const idiomaDestino = idiomaActual === "es" ? "en" : "es";
        botonIdioma.textContent = idiomaDestino === "en" ? "🌐 English" : "🌐 Español";
        botonIdioma.setAttribute(
            "aria-label",
            idiomaDestino === "en" ? "Traducir página al inglés" : "Translate page to Spanish"
        );
    }
}

function traducirAlIdiomaGuardado(intentos = 0) {
    const idiomaGuardado = localStorage.getItem("idiomaSitio") || "es";
    const selectorIdioma = document.querySelector(".goog-te-combo");

    actualizarBotonIdioma(idiomaGuardado);

    if (idiomaGuardado === "en" && selectorIdioma) {
        selectorIdioma.value = "en";
        selectorIdioma.dispatchEvent(new Event("change"));
    } else if (idiomaGuardado === "en" && intentos < 40) {
        window.setTimeout(() => traducirAlIdiomaGuardado(intentos + 1), 250);
    }
}

function configurarTraductor() {
    const navegacion = document.querySelector("header .navbar");

    if (!navegacion) {
        return;
    }

    const botonIdioma = document.createElement("button");
    botonIdioma.id = "cambiarIdioma";
    botonIdioma.className = "traductor-btn";
    botonIdioma.type = "button";
    botonIdioma.addEventListener("click", cambiarIdioma);
    navegacion.appendChild(botonIdioma);

    const contenedorTraductor = document.createElement("div");
    contenedorTraductor.id = "google_translate_element";
    contenedorTraductor.setAttribute("aria-hidden", "true");
    document.body.appendChild(contenedorTraductor);

    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: "es",
            includedLanguages: "en,es",
            autoDisplay: false
        }, "google_translate_element");

        traducirAlIdiomaGuardado();
    };

    const scriptTraductor = document.createElement("script");
    scriptTraductor.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    scriptTraductor.async = true;
    document.body.appendChild(scriptTraductor);

    actualizarBotonIdioma(localStorage.getItem("idiomaSitio") || "es");
}

configurarTraductor();
