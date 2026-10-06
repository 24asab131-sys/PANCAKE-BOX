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
}