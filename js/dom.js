    //Clase 60 - WEB APIs

    /*  console.log(window);
      console.log(document);

      const texto = "Hola, soy tu amigo y docente digital, Jonatan Mircha";
      const hablar = (texto) =>
          speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

      hablar(texto);*/
    //Clase 61 - Dom-Introducción

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
    document.write("<h2>Hola mundo desde el DOM</h2>")