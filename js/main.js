
import prompt from "prompt-sync";
import fizzBuzz from "./module/fizzbuzz.js";

let input = prompt();
let opc = undefined;
do {
  let m = input("Ingrese el numero: ");
  console.log(fizzBuzz(m));
  console.log("Desea ingresar un numero diferente? 1. Si 0. No");
  opc= Number(input())
  if (opc == 0){
    break;
  }
} while (true);
