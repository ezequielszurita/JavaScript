import saludar,{PI,usuario, Saludar} from "./constantes.js";
import{aritmetica as calculo, aritmetica} from "./aritmetica.js";

console.log("Archivo Modulos.js");
console.log(PI,usuario);

console.log(aritmetica.sumar(3,4)); 
console.log(calculo.sumar(3,4)); //es lo mismo que aritmetica.sumar

saludar();
let saludo = new Saludar();
saludo;