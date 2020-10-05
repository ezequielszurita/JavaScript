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
