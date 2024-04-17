
import prompt from "prompt-sync";
import imprimirArreglo from "./module/arreglo.js";

let input = prompt();
let array = [];
let opc = undefined;
do {
  const cadena = input("ingrese la frase: ");
  array.push(cadena);
  imprimirArreglo(...array); 
  console.log("Desea ingresar otra frase? 1. Si 0. No");
  opc= Number(input())
  if (opc == 0){
    break;
  }
} while (true);
