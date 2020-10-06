export const PI = Math.PI;

export let usuario = "Jon";
const password = "qwerty";
//export default password;

const hello = () => console.log("Hola"); 


export default function saludar(){ //solo se puede tener una exportacion por default
    console.log("Hola Modulos +ES6");
};

export class Saludar{
    constructor(){
    console.log("Hola Clases +ES6");
}};
