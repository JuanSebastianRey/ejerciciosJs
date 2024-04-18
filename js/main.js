
import prompt from "prompt-sync";
import sumarArreglo from "./module/sumaarreglo.js";

let input = prompt();
let opc = undefined;

do {
  let arr = [];
  let number = input("Ingrese los números del arreglo: ");
  while (number !== "fin") {
    arr.push(Number(number));
    number = input();
  }

  const inicio = Number(input("Ingrese la posición inicial: "));
  const fin = Number(input("Ingrese la posición final: "));

  const suma = sumarArreglo(arr, inicio, fin);
  console.log(`La suma de los números en el rango [${inicio}, ${fin}] es: ${suma}`);

  console.log(`Desea ingresar un arreglo diferente? 1. Sí 0. No`);
  opc = Number(input());
} while (opc);
