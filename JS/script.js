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

const traduccionesEn = {
    "Inicio": "Home",
    "Producto": "Products",
    "JavaScript": "JavaScript",
    "jQuery": "jQuery",
    "JSON": "JSON",
    "Hosting & Dominios": "Hosting & Domains",
    "Hosting y Dominios": "Hosting & Domains",
    "Cuestionario": "Quiz",
    "Contacto": "Contact",
    "Google": "Google",
    "Pequeños pancakes, grandes antojos.": "Little pancakes, big cravings.",
    "BIENVENIDO A": "WELCOME TO",
    "Descubre nuestros deliciosos mini pancakes acompañados de frutas, chocolate y tus toppings favoritos.": "Discover our delicious mini pancakes served with fruit, chocolate, and your favorite toppings.",
    "Ver nuestros productos": "See our products",
    "Imagen anterior": "Previous image",
    "Imagen siguiente": "Next image",
    "Anterior": "Previous",
    "Siguiente": "Next",
    "NUESTROS FAVORITOS": "OUR FAVORITES",
    "Elige tu Pancake Box": "Choose your Pancake Box",
    "Disfruta nuestros mini pancakes con diferentes combinaciones de frutas, chocolate y toppings.": "Enjoy our mini pancakes with different combinations of fruit, chocolate, and toppings.",
    "Mini pancakes acompañados de fresas, chocolate y un toque dulce.": "Mini pancakes served with strawberries, chocolate, and a touch of sweetness.",
    "Mini pancakes con chocolate, galletas y toppings deliciosos.": "Mini pancakes with chocolate, cookies, and delicious toppings.",
    "Mini pancakes con banana, chocolate y marshmallows.": "Mini pancakes with banana, chocolate, and marshmallows.",
    "Ver más": "Learn more",
    "CONOCE NUESTRA MARCA": "GET TO KNOW OUR BRAND",
    "¿Qué es Pancake Box?": "What is Pancake Box?",
    "Pancake Box es una marca dedicada a la preparación de mini pancakes acompañados de frutas, chocolate y diferentes toppings. Creamos combinaciones deliciosas y atractivas para disfrutar de un postre especial en cualquier momento.": "Pancake Box is a brand dedicated to making mini pancakes served with fruit, chocolate, and a variety of toppings. We create delicious, eye-catching combinations so you can enjoy a special dessert anytime.",
    "Nuestra propuesta busca combinar sabor, creatividad y una presentación práctica para que cada cajita sea una experiencia diferente.": "Our goal is to combine flavor, creativity, and a convenient presentation so that every box is a unique experience.",
    "NUESTRA PROPUESTA": "OUR PROMISE",
    "¿Por qué elegir Pancake Box?": "Why choose Pancake Box?",
    "Deliciosos": "Delicious",
    "Mini pancakes preparados para disfrutar de un sabor dulce y especial.": "Mini pancakes made for a sweet and special treat.",
    "Variedad": "Variety",
    "Diferentes frutas, chocolates y toppings para crear combinaciones.": "Different fruits, chocolates, and toppings to create new combinations.",
    "Especiales": "Special",
    "Una presentación atractiva que convierte cada cajita en un momento especial.": "An appealing presentation that makes every box a special moment.",
    "CONOCE EL PROYECTO": "LEARN ABOUT THE PROJECT",
    "Tecnologías de nuestra web": "Technologies behind our website",
    "También puedes conocer las tecnologías utilizadas para crear y publicar este sitio web.": "You can also learn about the technologies used to build and publish this website.",
    "Interactividad y comportamiento.": "Interactivity and behavior.",
    "Efectos y funciones simplificadas.": "Effects and simplified functions.",
    "Intercambio de información.": "Information exchange.",
    "Publicación de sitios en internet.": "Publishing websites online.",
    "PON A PRUEBA LO APRENDIDO": "TEST WHAT YOU'VE LEARNED",
    "¿Cuánto sabes sobre desarrollo web?": "How much do you know about web development?",
    "Visita nuestro cuestionario y comprueba cuánto aprendiste sobre JavaScript, jQuery, JSON, Hosting y Dominios.": "Visit our quiz and see how much you learned about JavaScript, jQuery, JSON, hosting, and domains.",
    "Visita nuestro cuestionario y comprueba cuánto aprendiste sobre JavaScript, jQuery, JSON, Hosting y Dominios.": "Visit our quiz and see how much you learned about JavaScript, jQuery, JSON, hosting, and domains.",
    "Ir al cuestionario": "Take the quiz",
    "© 2026 Pancake Box | Proyecto de Desarrollo Web": "© 2026 Pancake Box | Web Development Project",
    "Proyecto de Desarrollo Web | 2026": "Web Development Project | 2026",
    "TECNOLOGÍA WEB": "WEB TECHNOLOGY",
    "Pancake Box | Pequeños pancakes, grandes antojos": "Pancake Box | Little pancakes, big cravings",
    "Contacto | Pancake Box": "Contact | Pancake Box",
    "Contáctanos para resolver tus dudas sobre Pancake Box.": "Contact us with any questions about Pancake Box.",
    "ESTAMOS PARA AYUDARTE": "WE'RE HERE TO HELP",
    "¡Contáctanos! 💗": "Contact us! 💗",
    "¿Tienes alguna pregunta sobre nuestros mini pancakes?": "Do you have a question about our mini pancakes?",
    "Cuéntanos cómo podemos ayudarte y te responderemos pronto.": "Tell us how we can help, and we'll get back to you soon.",
    "Tu mensaje llegará directamente a nuestro equipo.": "Your message will go straight to our team.",
    "Tu nombre": "Your name",
    "Escribe tu nombre": "Enter your name",
    "Tu correo electrónico": "Your email address",
    "Asunto": "Subject",
    "¿Sobre qué nos escribes?": "What are you writing to us about?",
    "Tu mensaje": "Your message",
    "Escribe tu mensaje aquí...": "Write your message here...",
    "Deja este campo vacío": "Leave this field blank",
    "Enviar mensaje 💌": "Send message 💌",
    "Cuestionario | Pancake Box": "Quiz | Pancake Box",
    "Comprueba cuánto aprendiste sobre JavaScript, jQuery, JSON, Hosting y Dominios.": "See how much you learned about JavaScript, jQuery, JSON, hosting, and domains.",
    "Cuestionario Web": "Web Quiz",
    "Ver resultados": "See results",
    "¿Qué es JavaScript?": "What is JavaScript?",
    "1. ¿Qué es JavaScript?": "1. What is JavaScript?",
    "a) Un lenguaje de programación que permite agregar interactividad a las páginas web.": "a) A programming language that adds interactivity to web pages.",
    "b) Un programa para diseñar imágenes.": "b) A program for designing images.",
    "c) Un tipo de servidor.": "c) A type of server.",
    "¿Cuál de estos es un evento de JavaScript?": "Which of these is a JavaScript event?",
    "2. ¿Cuál de estos es un evento de JavaScript?": "2. Which of these is a JavaScript event?",
    "a) click": "a) click",
    "b) color": "b) color",
    "c) imagen": "c) image",
    "¿Qué es jQuery?": "What is jQuery?",
    "3. ¿Qué es jQuery?": "3. What is jQuery?",
    "a) Un lenguaje diferente a JavaScript.": "a) A language different from JavaScript.",
    "b) Una biblioteca de JavaScript.": "b) A JavaScript library.",
    "c) Un servidor web.": "c) A web server.",
    "¿Para qué sirve slideToggle() en jQuery?": "What does slideToggle() do in jQuery?",
    "4. ¿Para qué sirve slideToggle() en jQuery?": "4. What does slideToggle() do in jQuery?",
    "a) Para cambiar el color de una página.": "a) It changes a page's color.",
    "b) Para mostrar u ocultar un elemento con un efecto de deslizamiento.": "b) It shows or hides an element with a sliding effect.",
    "c) Para crear una base de datos.": "c) It creates a database.",
    "¿Qué es JSON?": "What is JSON?",
    "5. ¿Qué es JSON?": "5. What is JSON?",
    "a) Un formato utilizado para almacenar e intercambiar información.": "a) A format used to store and exchange information.",
    "b) Un lenguaje para crear estilos.": "b) A language for creating styles.",
    "c) Un navegador web.": "c) A web browser.",
    "¿Cómo se representa normalmente un dato en JSON?": "How is data usually represented in JSON?",
    "6. ¿Cómo se representa normalmente un dato en JSON?": "6. How is data usually represented in JSON?",
    "a) Con una función y un evento.": "a) With a function and an event.",
    "b) Con una clave y un valor.": "b) With a key and a value.",
    "c) Con una imagen y un color.": "c) With an image and a color.",
    "¿Qué es el Web Hosting?": "What is web hosting?",
    "7. ¿Qué es el Web Hosting?": "7. What is web hosting?",
    "a) Un lenguaje de programación.": "a) A programming language.",
    "b) Un servicio que permite almacenar un sitio web para que pueda estar disponible en internet.": "b) A service that stores a website and makes it available on the internet.",
    "c) Un tipo de imagen.": "c) A type of image.",
    "¿Qué función cumple el DNS?": "What does DNS do?",
    "8. ¿Qué función cumple el DNS?": "8. What does DNS do?",
    "a) Ayuda a relacionar un dominio con la dirección del servidor correspondiente.": "a) It links a domain name to the address of its server.",
    "b) Sirve para cambiar el diseño de una página.": "b) It changes a page's design.",
    "b) Sirve para cambiar el diseño de una página.": "b) It changes a page's design.",
    "c) Sirve para crear imágenes.": "c) It creates images.",
    "Hosting y Dominios | Pancake Box": "Hosting & Domains | Pancake Box",
    "Descubre cómo una página web llega desde nuestro computador hasta Internet.": "Learn how a website gets from our computer to the internet.",
    "¿Cómo llega una página web a Internet?": "How does a website get on the internet?",
    "Cuando creamos una página web en nuestro computador, los archivos necesitan estar almacenados en un servidor para que otras personas puedan acceder a ellos desde Internet.": "When we create a website on our computer, its files need to be stored on a server so other people can access them over the internet.",
    "1. Crear": "1. Create",
    "Creamos los archivos HTML, CSS y JavaScript.": "We create the HTML, CSS, and JavaScript files.",
    "2. Hosting": "2. Hosting",
    "Los archivos se almacenan en un servidor.": "The files are stored on a server.",
    "3. Internet": "3. Internet",
    "Las personas pueden visitar nuestra página.": "People can visit our website.",
    "¿Qué es Web Hosting?": "What is web hosting?",
    "El Web Hosting o alojamiento web es un servicio que permite almacenar los archivos de una página web en un servidor conectado a Internet.": "Web hosting is a service that stores website files on a server connected to the internet.",
    "Gracias al hosting, los usuarios pueden acceder a una página utilizando un navegador desde diferentes dispositivos.": "Hosting lets users access a website from different devices using a browser.",
    "Tipos de Hosting": "Types of hosting",
    "Hosting compartido": "Shared hosting",
    "Varios sitios web utilizan los recursos de un mismo servidor. Es una opción sencilla y económica.": "Multiple websites use the resources of the same server. It is a simple, affordable option.",
    "VPS": "VPS",
    "Un servidor físico se divide en varios servidores virtuales. Cada uno tiene recursos asignados.": "A physical server is divided into several virtual servers, each with its own allocated resources.",
    "Cloud Hosting": "Cloud hosting",
    "Utiliza varios servidores conectados para ofrecer recursos y mayor flexibilidad.": "It uses several connected servers to provide resources and greater flexibility.",
    "¿Cómo funciona Vercel?": "How does Vercel work?",
    "Vercel es una plataforma que permite publicar proyectos web en Internet. Puede conectarse con un repositorio de GitHub para facilitar la publicación y actualización de un sitio.": "Vercel is a platform for publishing web projects online. It can connect to a GitHub repository to make publishing and updating a site easier.",
    "Guardamos nuestro proyecto.": "We save our project.",
    "Conectamos el repositorio.": "We connect the repository.",
    "Página publicada": "Published website",
    "Obtenemos una dirección pública.": "We get a public address.",
    "¿Qué es un dominio?": "What is a domain?",
    "Un dominio es la dirección que utilizan las personas para encontrar un sitio web en Internet.": "A domain is the address people use to find a website on the internet.",
    "Por ejemplo, una página puede tener una dirección como:": "For example, a website can have an address such as:",
    "Partes de un dominio": "Parts of a domain",
    "Nombre elegido para identificar el sitio.": "The name chosen to identify the site.",
    "Extensión o dominio de nivel superior.": "The extension, or top-level domain.",
    "¿Qué es un TLD?": "What is a TLD?",
    "Muy utilizado por sitios comerciales y proyectos generales.": "Commonly used by commercial websites and general projects.",
    "Comúnmente utilizado por organizaciones.": "Commonly used by organizations.",
    "Relacionado con instituciones educativas.": "Related to educational institutions.",
    "¿Qué es un subdominio?": "What is a subdomain?",
    "Un subdominio es una parte adicional que se coloca antes del dominio principal y permite organizar diferentes secciones de un sitio web.": "A subdomain is an additional part placed before the main domain to organize different sections of a website.",
    "En este ejemplo, blog es el subdominio.": "In this example, blog is the subdomain.",
    "¿Qué es el DNS?": "What is DNS?",
    "El DNS, o Sistema de Nombres de Dominio, permite relacionar nombres de dominio fáciles de recordar con las direcciones que utilizan los servidores.": "DNS, or Domain Name System, connects easy-to-remember domain names with the addresses used by servers.",
    "Cuando se configura un dominio, los cambios pueden tardar un tiempo en actualizarse y llegar a diferentes servidores de DNS. A este proceso se le conoce como propagación DNS.": "After a domain is configured, changes can take time to reach DNS servers around the world. This process is called DNS propagation.",
    "Flujo de propagación DNS": "DNS propagation flow",
    "Dominio": "Domain",
    "Se configura el dominio.": "The domain is configured.",
    "Se actualizan los registros.": "The records are updated.",
    "Actualización": "Update",
    "Los servidores van reconociendo el cambio.": "Servers begin to recognize the change.",
    "Acceso": "Access",
    "El usuario puede acceder al sitio.": "The user can access the website.",
    "Pancake Box en Internet": "Pancake Box on the internet",
    "TLD significa Top-Level Domain, es decir, dominio de nivel superior. Es la parte final de una dirección web.": "TLD stands for Top-Level Domain. It is the final part of a web address.",
    "Para publicar nuestro proyecto, podemos guardar el código en GitHub y conectarlo con Vercel. De esta manera podemos obtener una dirección pública para compartir nuestra página.": "To publish our project, we can save the code on GitHub and connect it to Vercel. This gives us a public address to share our website.",
    "Nuestro proceso": "Our process",
    "VS Code → Creamos la página": "VS Code → We build the website",
    "GitHub → Guardamos el proyecto": "GitHub → We save the project",
    "Vercel → Publicamos el proyecto": "Vercel → We publish the project",
    "Dominio → Dirección para acceder al sitio": "Domain → Address used to access the website",
    "Creamos la página": "We build the website",
    "Guardamos el proyecto": "We save the project",
    "Publicamos el proyecto": "We publish the project",
    "Dirección para acceder al sitio": "Address used to access the website",
    "JavaScript | Pancake Box": "JavaScript | Pancake Box",
    "El lenguaje que permite agregar interactividad y comportamiento a las páginas web.": "The language that adds interactivity and behavior to web pages.",
    "CONCEPTOS BÁSICOS": "BASIC CONCEPTS",
    "JavaScript es un lenguaje de programación utilizado principalmente para crear páginas web interactivas. Permite que una página pueda responder a las acciones que realiza el usuario.": "JavaScript is a programming language mainly used to create interactive websites. It allows a page to respond to user actions.",
    "Por ejemplo, JavaScript puede utilizarse para mostrar mensajes, cambiar contenido, validar formularios, realizar cálculos y crear efectos dentro de una página.": "For example, JavaScript can display messages, change content, validate forms, perform calculations, and create effects on a page.",
    "Se encarga de crear la estructura y el contenido de una página web.": "It creates the structure and content of a web page.",
    "Se utiliza para darle diseño, colores, tamaños y estilos a la página.": "It adds design, colors, sizes, and styles to the page.",
    "Permite agregar interactividad y comportamiento a los elementos.": "It adds interactivity and behavior to elements.",
    "ELEMENTOS IMPORTANTES": "IMPORTANT ELEMENTS",
    "Variables y funciones": "Variables and functions",
    "Una variable permite guardar información que puede utilizarse posteriormente dentro de un programa.": "A variable stores information that can be used later in a program.",
    "Funciones": "Functions",
    "Una función es un bloque de código que realiza una tarea específica y puede ejecutarse cuando sea necesario.": "A function is a block of code that performs a specific task and can be run whenever needed.",
    "INTERACCIÓN": "INTERACTION",
    "Eventos en JavaScript": "JavaScript events",
    "Los eventos permiten que JavaScript responda a las acciones realizadas por el usuario.": "Events let JavaScript respond to actions performed by the user.",
    "Se ejecuta cuando el usuario hace clic sobre un elemento.": "It runs when the user clicks an element.",
    "Puede utilizarse para detectar cuando el usuario coloca el cursor sobre un elemento.": "It can detect when the user moves the cursor over an element.",
    "EJEMPLO PRÁCTICO": "PRACTICAL EXAMPLE",
    "JavaScript en acción": "JavaScript in action",
    "El siguiente botón utiliza JavaScript para cambiar el mensaje que aparece en pantalla.": "The following button uses JavaScript to change the message displayed on the screen.",
    "🥞 Haz clic aquí": "🥞 Click here",
    "Aquí aparecerá un mensaje.": "A message will appear here.",
    "¿Cómo funciona?": "How does it work?",
    "Primero se selecciona el botón mediante su identificador. Después se agrega un evento click. Cuando el usuario presiona el botón, JavaScript cambia el texto del mensaje.": "First, the button is selected by its ID. Then a click event is added. When the user presses the button, JavaScript changes the message text.",
    "¡Gracias por visitar Pancake Box! 🥞": "Thanks for visiting Pancake Box! 🥞",
    "Modo oscuro": "Dark mode",
    "🌙 Modo oscuro": "🌙 Dark mode",
    "☀️ Modo claro": "☀️ Light mode",
    "jQuery | Pancake Box": "jQuery | Pancake Box",
    "Una biblioteca de JavaScript que facilita la creación de páginas web interactivas.": "A JavaScript library that makes it easier to create interactive web pages.",
    "¿Qué es jQuery?": "What is jQuery?",
    "jQuery es una biblioteca de JavaScript creada para facilitar el desarrollo de páginas web. Permite realizar acciones sobre los elementos HTML de una página utilizando menos código.": "jQuery is a JavaScript library created to make web development easier. It lets you work with HTML elements using less code.",
    "Fue muy utilizada porque simplificaba tareas como modificar elementos, responder a eventos, crear efectos y realizar solicitudes a servidores.": "It became popular because it simplified tasks such as changing elements, responding to events, creating effects, and making server requests.",
    "¿Por qué fue creado?": "Why was it created?",
    "jQuery fue creado para hacer más sencillo el trabajo con JavaScript y evitar que los desarrolladores tuvieran que escribir mucho código para realizar tareas comunes.": "jQuery was created to make JavaScript easier to work with and to reduce the amount of code developers needed for common tasks.",
    "Menos código": "Less code",
    "Permite realizar algunas acciones con instrucciones más cortas.": "It lets you perform some actions with shorter instructions.",
    "Efectos": "Effects",
    "Facilita la creación de efectos visuales en una página.": "It makes it easier to create visual effects on a page.",
    "Eventos": "Events",
    "Permite trabajar fácilmente con acciones como clics.": "It makes it easy to handle actions such as clicks.",
    "La sintaxis $()": "The $() syntax",
    "Una de las características más conocidas de jQuery es el uso del símbolo $. Se utiliza para seleccionar elementos HTML y trabajar con ellos.": "One of jQuery's best-known features is the $ symbol. It is used to select and work with HTML elements.",
    "En este ejemplo, #titulo selecciona el elemento que tiene el identificador titulo.": "In this example, #titulo selects the element with the ID titulo.",
    "jQuery vs JavaScript moderno": "jQuery vs. modern JavaScript",
    "Característica": "Feature",
    "Uso": "Use",
    "Velocidad": "Speed",
    "Actualidad": "Today",
    "Puede ser más corta": "Can be shorter",
    "Utiliza funciones propias del lenguaje": "Uses built-in language features",
    "Facilita tareas comunes": "Simplifies common tasks",
    "Permite trabajar directamente con el navegador": "Works directly with the browser",
    "Necesita cargar la biblioteca": "Requires loading the library",
    "No necesita una biblioteca adicional": "Does not require an additional library",
    "Se utiliza en algunos proyectos": "Used in some projects",
    "Es la opción principal para proyectos modernos": "The main choice for modern projects",
    "Ventajas y desventajas": "Advantages and disadvantages",
    "Ventajas": "Advantages",
    "Desventajas": "Disadvantages",
    "Su sintaxis puede ser sencilla, facilita algunos efectos y permite trabajar fácilmente con elementos HTML y eventos.": "Its syntax can be simple, it makes some effects easier, and it helps with working with HTML elements and events.",
    "Es necesario cargar una biblioteca adicional y muchas funciones que antes requerían jQuery ahora pueden realizarse directamente con JavaScript.": "An additional library must be loaded, and many tasks that once required jQuery can now be done directly with JavaScript.",
    "Ejemplo: fadeIn()": "Example: fadeIn()",
    "El efecto fadeIn() permite mostrar progresivamente un elemento.": "The fadeIn() effect gradually displays an element.",
    "Mostrar ejemplo": "Show example",
    "¡Hola! Esta caja apareció con un efecto.": "Hello! This box appeared with an effect.",
    "Ejemplo: slideToggle()": "Example: slideToggle()",
    "slideToggle() permite mostrar u ocultar un elemento utilizando un efecto deslizante.": "slideToggle() shows or hides an element with a sliding effect.",
    "Mostrar / Ocultar": "Show / Hide",
    "Esta información puede aparecer o desaparecer.": "This information can appear or disappear.",
    "Ejemplo de código jQuery": "jQuery code example",
    "En este ejemplo, cuando el usuario hace clic en el botón, el elemento con el identificador mensaje aparece o desaparece utilizando un efecto deslizante.": "In this example, when the user clicks the button, the element with the ID mensaje appears or disappears with a sliding effect.",
    "JSON | Pancake Box": "JSON | Pancake Box",
    "Una forma sencilla y organizada de almacenar e intercambiar información.": "A simple, organized way to store and exchange information.",
    "¿Qué es JSON?": "What is JSON?",
    "JSON significa JavaScript Object Notation. Es un formato de texto utilizado para almacenar y transmitir información de una manera sencilla y organizada.": "JSON stands for JavaScript Object Notation. It is a text format used to store and transmit information simply and in an organized way.",
    "JSON es muy utilizado en páginas web y aplicaciones para enviar información entre un servidor y un navegador.": "JSON is widely used by websites and applications to send information between a server and a browser.",
    "¿Por qué se utiliza como estándar?": "Why is it used as a standard?",
    "JSON se utiliza ampliamente porque es fácil de leer y escribir tanto para las personas como para los programas.": "JSON is widely used because it is easy for both people and programs to read and write.",
    "Además, puede utilizarse con diferentes lenguajes de programación, por lo que facilita el intercambio de información entre sistemas.": "It can also be used with different programming languages, making it easier to exchange information between systems.",
    "Clave y valor": "Key and value",
    "Los datos en JSON se organizan principalmente mediante pares de clave y valor.": "JSON data is mainly organized into key-value pairs.",
    "En este ejemplo, producto, precio y disponible son las claves. Sus respectivos datos son los valores.": "In this example, producto, precio, and disponible are the keys. Their corresponding data are the values.",
    "Objetos y arrays": "Objects and arrays",
    "Objeto": "Object",
    "Un objeto contiene información organizada mediante claves y valores.": "An object contains information organized by keys and values.",
    "Array": "Array",
    "Un array permite guardar varios elementos dentro de una lista.": "An array lets you store multiple items in a list.",
    "JavaScript vs JSON": "JavaScript vs. JSON",
    "Aunque JSON está basado en la sintaxis de los objetos de JavaScript, no son exactamente lo mismo.": "Although JSON is based on JavaScript object syntax, they are not exactly the same.",
    "Es un lenguaje de programación.": "It is a programming language.",
    "Es un formato para representar datos.": "It is a format for representing data.",
    "Puede contener funciones.": "It can contain functions.",
    "No contiene funciones.": "It does not contain functions.",
    "Puede ejecutar instrucciones.": "It can execute instructions.",
    "Se utiliza principalmente para almacenar e intercambiar información.": "It is mainly used to store and exchange information.",
    "Ejemplo visual": "Visual example",
    "Observa la diferencia entre un objeto de JavaScript y un texto escrito en formato JSON.": "See the difference between a JavaScript object and text written in JSON format.",
    "¿Cómo utilizan JSON las aplicaciones web?": "How do web applications use JSON?",
    "Las aplicaciones web pueden utilizar JSON para enviar y recibir información entre el navegador y un servidor.": "Web applications can use JSON to send and receive information between a browser and a server.",
    "Por ejemplo, una página de una tienda puede solicitar al servidor información sobre sus productos. El servidor puede responder enviando esos datos en formato JSON.": "For example, a store website can request product information from a server. The server can respond by sending that data in JSON format.",
    "Navegador": "Browser",
    "Solicita información.": "Requests information.",
    "Servidor": "Server",
    "Procesa la solicitud.": "Processes the request.",
    "Transporta los datos.": "Carries the data.",
    "JSON en Pancake Box 🥞": "JSON at Pancake Box 🥞",
    "En una página como Pancake Box, JSON podría utilizarse para guardar información de nuestros productos.": "On a website like Pancake Box, JSON could be used to store product information.",
    "De esta manera, una aplicación podría recibir fácilmente información sobre el producto y mostrarla en la página.": "This way, an application could easily receive product information and display it on the page.",
    "Herramientas de Google | Pancake Box": "Google tools | Pancake Box",
    "Herramientas de Google": "Google tools",
    "Google ofrece diferentes herramientas que ayudan a estudiar, organizar tareas, comunicarse y crear contenido. En esta sección conocerás 15 herramientas y algunos de sus usos principales.": "Google offers a range of tools for studying, organizing tasks, communicating, and creating content. This section introduces 15 tools and some of their main uses.",
    "Conocer herramienta": "Explore tool",
    "HERRAMIENTA 01": "TOOL 01",
    "HERRAMIENTA 02": "TOOL 02",
    "HERRAMIENTA 03": "TOOL 03",
    "HERRAMIENTA 04": "TOOL 04",
    "HERRAMIENTA 05": "TOOL 05",
    "HERRAMIENTA 06": "TOOL 06",
    "HERRAMIENTA 07": "TOOL 07",
    "HERRAMIENTA 08": "TOOL 08",
    "HERRAMIENTA 09": "TOOL 09",
    "HERRAMIENTA 10": "TOOL 10",
    "HERRAMIENTA 11": "TOOL 11",
    "HERRAMIENTA 12": "TOOL 12",
    "HERRAMIENTA 13": "TOOL 13",
    "HERRAMIENTA 14": "TOOL 14",
    "HERRAMIENTA 15": "TOOL 15",
    "Ayuda a organizar clases, compartir materiales, entregar tareas y consultar calificaciones.": "It helps organize classes, share materials, submit assignments, and check grades.",
    "Permite guardar archivos en línea, crear carpetas y compartir documentos.": "It lets you store files online, create folders, and share documents.",
    "Sirve para escribir trabajos, editar textos y colaborar con otras personas.": "It is used to write assignments, edit text, and collaborate with others.",
    "Permite organizar datos en tablas, realizar operaciones y crear gráficos.": "It lets you organize data in tables, perform calculations, and create charts.",
    "Ayuda a preparar presentaciones con textos, imágenes y otros elementos visuales.": "It helps create presentations with text, images, and other visuals.",
    "Sirve para crear formularios, encuestas y cuestionarios que recopilan respuestas.": "It is used to create forms, surveys, and quizzes that collect responses.",
    "Permite hacer videollamadas, reuniones y clases virtuales.": "It lets you make video calls, hold meetings, and attend virtual classes.",
    "Ayuda a organizar horarios, eventos, actividades y fechas importantes.": "It helps organize schedules, events, activities, and important dates.",
    "Permite crear sitios web sencillos para presentar información y proyectos.": "It lets you create simple websites to present information and projects.",
    "Sirve para guardar notas, listas y recordatorios de manera rápida.": "It is used to quickly save notes, lists, and reminders.",
    "Permite enviar mensajes y comunicarse con compañeros de estudio o trabajo.": "It lets you send messages and communicate with classmates or coworkers.",
    "Es un servicio de correo electrónico para enviar y recibir mensajes y archivos.": "It is an email service for sending and receiving messages and files.",
    "Es un asistente de inteligencia artificial que puede ayudar a explicar temas y generar ideas.": "It is an AI assistant that can help explain topics and generate ideas.",
    "Es una herramienta para crear videos y presentar ideas de forma visual. Su disponibilidad puede variar según la cuenta.": "It is a tool for creating videos and presenting ideas visually. Availability may vary by account.",
    "Ayuda a buscar lugares, consultar direcciones y planificar rutas.": "It helps find places, get directions, and plan routes.",
    "¿Cómo se utilizan estas herramientas?": "How are these tools used?",
    "Para comenzar, se puede abrir el enlace de la herramienta y acceder con una cuenta de Google cuando sea necesario. Después, se siguen las opciones que aparecen en pantalla para crear documentos, compartir archivos, organizar actividades o comunicarse.": "To get started, open the tool's link and sign in with a Google account if needed. Then follow the on-screen options to create documents, share files, organize activities, or communicate.",
    "Importante: las funciones disponibles dependen del servicio, del tipo de cuenta y de las condiciones de la institución. Algunas funciones avanzadas de Google Workspace for Education requieren planes de pago; eso no significa que todas estas herramientas sean de pago.": "Important: available features depend on the service, account type, and institution. Some advanced Google Workspace for Education features require paid plans; that does not mean all of these tools are paid.",
    "Pancakes de Pancake Box": "Pancake Box pancakes",
    "Mini pancakes de Pancake Box": "Pancake Box mini pancakes",
    "Pancakes con frutas": "Pancakes with fruit",
    "Pancakes con chocolate": "Pancakes with chocolate",
    "Pancakes con banana": "Pancakes with banana",
    "Logo Pancake Box": "Pancake Box logo",
    "Logo de Pancake Box": "Pancake Box logo",
    "Berry Box": "Berry Box",
    "Choco Box": "Choco Box",
    "Banana Sweet": "Banana Sweet",
    "Nombre": "Name",
    "Enviar mensaje": "Send message",
    "Enviando tu mensaje...": "Sending your message...",
    "¡Mensaje enviado! Gracias por escribirnos. 💗": "Message sent! Thanks for reaching out. 💗",
    "No se pudo enviar tu mensaje.": "Your message could not be sent.",
    "No se pudo enviar el mensaje. Intenta de nuevo.": "The message could not be sent. Please try again."
};

const traduccionesEs = Object.fromEntries(
    Object.entries(traduccionesEn).map(([espanol, ingles]) => [ingles, espanol])
);
const contenidoOriginal = new Map();
const atributosOriginales = new Map();
const textoOriginal = new WeakMap();
const elementosTraducibles = "h1, h2, h3, h4, p, a, button, label, th, td, span";
const idiomaInicial = localStorage.getItem("idiomaSitio") || "es";

function normalizarTexto(texto) {
    return texto.replace(/\s+/g, " ").trim();
}

function obtenerTraduccion(texto, idioma) {
    const frase = normalizarTexto(texto);
    const diccionario = idioma === "en" ? traduccionesEn : traduccionesEs;
    const traduccion = diccionario[frase];

    if (traduccion) {
        return traduccion;
    }

    const resultadoQuiz = frase.match(/^Obtuviste (\d+) de 8 respuestas correctas\. 🎉$/);
    if (idioma === "en" && resultadoQuiz) {
        return `You got ${resultadoQuiz[1]} out of 8 answers correct. 🎉`;
    }

    const resultadoQuizIngles = frase.match(/^You got (\d+) out of 8 answers correct\. 🎉$/);
    if (idioma === "es" && resultadoQuizIngles) {
        return `Obtuviste ${resultadoQuizIngles[1]} de 8 respuestas correctas. 🎉`;
    }

    return null;
}

function traducirElemento(elemento, idioma) {
    if (elemento.matches("script, style, code, pre, input, textarea, select") ||
        elemento.closest("script, style, code, pre") ||
        elemento.querySelector("img, code, pre")) {
        return;
    }

    if (elemento.querySelector("input, textarea, select")) {
        elemento.childNodes.forEach(nodo => {
            if (nodo.nodeType === Node.TEXT_NODE) {
                traducirNodoTexto(nodo, idioma);
            }
        });
        return;
    }

    const traduccion = obtenerTraduccion(elemento.textContent, idioma);
    if (!traduccion) {
        return;
    }

    if (idioma === "en") {
        if (!contenidoOriginal.has(elemento)) {
            contenidoOriginal.set(elemento, elemento.innerHTML);
        }
        elemento.textContent = traduccion;
    } else if (contenidoOriginal.has(elemento)) {
        elemento.innerHTML = contenidoOriginal.get(elemento);
    } else {
        elemento.textContent = traduccion;
    }
}

function traducirNodoTexto(nodo, idioma) {
    if (nodo.parentElement && nodo.parentElement.closest("script, style, code, pre")) {
        return;
    }

    const traduccion = obtenerTraduccion(nodo.data, idioma);
    if (!traduccion || traduccion === normalizarTexto(nodo.data)) {
        return;
    }

    if (!textoOriginal.has(nodo)) {
        textoOriginal.set(nodo, nodo.data);
    }

    if (idioma === "en") {
        const espaciosIniciales = nodo.data.match(/^\s*/)[0];
        const espaciosFinales = nodo.data.match(/\s*$/)[0];
        nodo.data = `${espaciosIniciales}${traduccion}${espaciosFinales}`;
    } else {
        nodo.data = textoOriginal.get(nodo) || traduccion;
    }
}

function traducirAtributos(idioma) {
    document.querySelectorAll("[alt], [placeholder], [aria-label], [title], [content]").forEach(elemento => {
        ["alt", "placeholder", "aria-label", "title", "content"].forEach(nombre => {
            if (!elemento.hasAttribute(nombre)) {
                return;
            }

            const clave = `${nombre}:${elemento.getAttribute(nombre)}`;
            if (!atributosOriginales.has(clave)) {
                atributosOriginales.set(clave, elemento.getAttribute(nombre));
            }

            const original = atributosOriginales.get(clave);
            const traduccion = obtenerTraduccion(original, idioma);
            if (traduccion) {
                elemento.setAttribute(nombre, traduccion);
            }
        });
    });
}

function aplicarIdioma(idioma) {
    document.documentElement.lang = idioma;

    if (idioma === "en") {
        const tituloTraducido = obtenerTraduccion(document.title, "en");
        if (tituloTraducido) {
            document.title = tituloTraducido;
        }
    } else {
        const tituloEspanol = obtenerTraduccion(document.title, "es");
        if (tituloEspanol) {
            document.title = tituloEspanol;
        }
        contenidoOriginal.forEach((html, elemento) => {
            if (elemento.isConnected) {
                elemento.innerHTML = html;
            }
        });
    }

    document.querySelectorAll(elementosTraducibles).forEach(elemento => {
        traducirElemento(elemento, idioma);
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        traducirNodoTexto(walker.currentNode, idioma);
    }
    traducirAtributos(idioma);
    actualizarBotonIdioma(idioma);
}

function cambiarIdioma() {
    const idiomaDestino = document.documentElement.lang === "es" ? "en" : "es";
    localStorage.setItem("idiomaSitio", idiomaDestino);
    aplicarIdioma(idiomaDestino);
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

    const observadorTraduccion = new MutationObserver(cambios => {
        if (document.documentElement.lang !== "en") {
            return;
        }

        cambios.forEach(cambio => {
            if (cambio.type === "characterData") {
                traducirNodoTexto(cambio.target, "en");
            }

            cambio.addedNodes.forEach(nodo => {
                if (nodo.nodeType === Node.TEXT_NODE) {
                    traducirNodoTexto(nodo, "en");
                } else if (nodo.nodeType === Node.ELEMENT_NODE) {
                    if (nodo.matches(elementosTraducibles)) {
                        traducirElemento(nodo, "en");
                    }
                    nodo.querySelectorAll(elementosTraducibles).forEach(elemento => {
                        traducirElemento(elemento, "en");
                    });
                }
            });
        });
    });
    observadorTraduccion.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    });

    aplicarIdioma(idiomaInicial);
}

configurarTraductor();
