
import prompt from "prompt-sync";
import numeroDeCaracteres from "./module/caracteres.js";

let input = prompt();
let opc = undefined;
do {
  let cadena = input("Ingrese una cadena de texto: ");
  let caracter = input("Ingrese un caracter: ");
  console.log(`El número de veces que aparece el caracter "${caracter}" en "${cadena}" es: ${numeroDeCaracteres(cadena, caracter)}`);
  console.log(`Desea ingresar una cadena diferente? 1. Si 0. No`);
  opc = Number(input());
} while (opc);

