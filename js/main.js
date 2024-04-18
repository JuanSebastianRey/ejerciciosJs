
import prompt from "prompt-sync";
import numeroDeAes from "./module/aes.js";

let input = prompt();
let opc = undefined;
do {
  let cadena = input("Ingrese una cadena de texto: ");
  console.log(`El número de veces que aparece la letra "a" en "${cadena}" es: ${numeroDeAes(cadena)}`);
  console.log(`Desea ingresar una cadena diferente? 1. Si 0. No`);
  opc = Number(input());
} while (opc);
