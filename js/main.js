import prompt from "prompt-sync";
import removerCeros from "./module/remove0.js";

let input = prompt();
let opc = undefined;
do {
  let arr = [];
  let number = input("Ingrese los numeros del arreglo: ");
  while (number !== "fin") {
    arr.push(Number(number));
    number = input();
  }
  const arrSinCeros = removerCeros(arr);
  console.log(`Arreglo sin ceros: [${arrSinCeros}]`);
  console.log(`Desea ingresar un arreglo diferente? 1. Si 0. No`);
  opc = Number(input());
} while (opc);
