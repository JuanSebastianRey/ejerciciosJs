
import prompt from "prompt-sync";
import contarRango from "./module/rango.js";

let input = prompt();
let opc = undefined;
do {
  let i = Number(input("Ingrese el primer numero: "));
  let f = Number (input("Ingrese el segundo numero: "));
  console.log(contarRango(i, f));
  console.log(`Desea ingresar un numero diferente? 1. Si 0. No`);
  opc= Number(input())
} while (opc);
