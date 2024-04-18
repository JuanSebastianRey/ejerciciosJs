import prompt from "prompt-sync";
import sumarArreglo from "./module/arreglosuma.js";

let input = prompt();
let opc = undefined;
do {
  let numeros = [];
  console.log("Ingrese los números del arreglo (ingrese 'fin' para terminar):");
  let numero = input();
  while (numero !== "fin") {
    numeros.push(Number(numero));
    numero = input();
  }
  console.log(`La suma de los elementos del arreglo [${numeros}] es: ${sumarArreglo(numeros)}`);

  console.log(`Desea ingresar un arreglo diferente? 1. Si 0. No`);
  opc = Number(input());
} while (opc);
