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