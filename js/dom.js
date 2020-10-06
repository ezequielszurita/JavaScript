//Clase 60 - WEB APIs

/*  console.log(window);
      console.log(document);

      const texto = "Hola, soy tu amigo y docente digital, Jonatan Mircha";
      const hablar = (texto) =>
          speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

      hablar(texto);*/
//Clase 61 - Dom-Introducción
/*
    console.log("****************Elementos del Documento ****************");
    console.log(window.document);
    console.log(document);
    console.log(document.head);
    console.log(document.body);
    console.log(document.documentElement);
    console.log(document.doctype);
    console.log(document.charset);
    console.log(document.title);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);
    setTimeout(() => {
        console.log(document.getSelection().toString());
    }, 3000);
    document.write("<h2>Hola mundo desde el DOM</h2>")*/

//Clase 62-DOM: Nodos, Elementos y Selectores

/*
    console.log(document.getElementsByTagName("li")); //viejo
    console.log(document.getElementsByClassName("card")); //viejo
    console.log(document.getElementsByName("nombre")); //viejo
    console.log(document.getElementById("menu")); //se debe seguir usando
    console.log(document.querySelector("#menu")); //mas nuevo, pero mas lento q elementbyid
    console.log(document.querySelector("a")); //solo trae la primera referncia a
    console.log(document.querySelectorAll("a")); // trae todos las referncia a
    console.log(document.querySelectorAll("a").length); //trae la cantidad
    document.querySelectorAll("a").forEach(el => console.log(el));
    console.log(document.querySelector(".card"));
    console.log(document.querySelectorAll(".card"));
    console.log(document.querySelectorAll(".card")[2]);
    console.log(document.querySelector("#menu li"));
    console.log(document.querySelectorAll("#menu li"));
    */
//Clase 63 -DOM: Atributos y Data-Attributes
/*
    console.log(document.documentElement.lang);
    console.log(document.documentElement.getAttribute("lang"));
    console.log(document.querySelector(".link-dom").href);
    console.log(document.querySelector(".link-dom").getAttribute("href"));

    document.documentElement.lang = "en";
    console.log(document.documentElement.lang);
    document.documentElement.setAttribute("lang", "es-MX");
    console.log(document.documentElement.lang);

    const $linkDOM = document.querySelector(".link-dom"); //es una buena practica ponerle $ a las variables del dom


    $linkDOM.setAttribute("target", "_blank");
    $linkDOM.setAttribute("rel", "noopener"); //no hay dependecia entre la ventana actual y la q se va abrir
    $linkDOM.setAttribute("href", "https://www.youtube.com/jonmircha");
    console.log($linkDOM.hasAttribute("rel"));
    $linkDOM.removeAttribute("rel");
    console.log($linkDOM.hasAttribute("rel"));

    // Data-Attributes
    console.log($linkDOM.getAttribute("data-description"));
    console.log($linkDOM.dataset.description);
    $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento"); //manera a
    console.log($linkDOM.dataset.description);
    $linkDOM.dataset.description = "Subscribete a mi canal y compartelo" //manera b
    console.log($linkDOM.dataset.description);
    console.log($linkDOM.hasAttribute("data-id"));
    console.log($linkDOM.removeAttribute("data-id"));
    console.log($linkDOM.hasAttribute("data-id"));*/

//Clase 64. DOM: Estilos y Variables CSS
/*
const $linkDOM = document.querySelector(".link-dom"); //es una buena practica ponerle $ a las variables del dom
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style")); //este es el q me gusta mas para ver propiedades
console.log($linkDOM.style.backgroundColor); // muestre como estan solo los elementos modificados de css
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); //muestra como estan todos los todos los valores actuales de css
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color")); //muestra como estan todos los todos los colores actuales de css
$linkDOM.style.setProperty("text-decoration", "none"); //setear q no se subraye el href
$linkDOM.style.setProperty("display", "block"); //elemento de bloque que ocupa toda pantalla
$linkDOM.style.width = "50%"; //ocupa la mitad del ancho de pantalla
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto"; //centrar
$linkDOM.style.marginRight = "auto"; //centrar
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style")); //este es el q me gusta mas para ver propiedades
console.log(window.getComputedStyle($linkDOM));

//Variables CSS-Custom Properties CSS
const $html = document.documentElement, //representa etiqueta html
  $body = document.documentElement;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), //accedo a propiedades de html - acceder a css siempre va con -- antes
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/
//Clase 65 - DOM: Clases CSS
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45")); //consulto si tiene esa clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); //consulto si tiene esa clase
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); //consulto si tiene esa clase
$card.classList.toggle("rotate-45"); //evalua si la clase tiene rotate, si no tiene la agrega, pero si la tiene, la elimina
console.log($card.classList.contains("rotate-45")); //consulto si tiene esa clase
$card.classList.toggle("rotate-45"); //evalua si la clase tiene rotate, si no tiene la agrega, pero si la tiene, la elimina
console.log($card.classList.contains("rotate-45")); //consulto si tiene esa clase
$card.classList.toggle("rotate-45"); //evalua si la clase tiene rotate, si no tiene la agrega, pero si la tiene, la elimina
$card.classList.replace("rotate-45", "rotate-135"); // reemplaza la clase 45 por 135
$card.classList.add("opacity-80", "sepia"); //agrega varias clases al mismo tiempo, remove funciona igual
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
*/
//Clase 66. DOM: Texto y HTML

/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

//$whatIsDOM.innerText = text; //se usaba en IE - no reconoce las etiquetas html - no es parte del estandar
$whatIsDOM.textContent = text; // es el estandar - no interpreta las etiquetas html
$whatIsDOM.innerHTML = text; // este si interpreta el html
$whatIsDOM.outerHTML = text; //reemplaza todo complemtamente, no es un paraffaro dentro de otro. ahora es solo uno
*/
// Clase 67
const $cards = document.querySelector(".cards");

console.log($cards);
//console.log($cards.childNodes); //children NODES hace referencia a los NODOS hijos
console.log($cards.children); //children hace referencia a los hijos elementos
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild); //trae el salto de linea "enter" es el primer nodo
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling); //trae el anterior de los hijos
console.log($cards.nextElementSibling); //trae el siguiente , el salto de linea de los hijos
console.log($cards.closest("div")); //metodo que busca el ancestro del tipo de selector que le indicamos
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));