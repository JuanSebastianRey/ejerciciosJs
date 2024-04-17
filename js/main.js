import prompt from "prompt-sync"
import calcularImpuestos from "./module/impuestos.js"
let input = prompt();
let opc = undefined;
do{
    let edad = input("Ingrese su edad: ");
    let ing = input("Ingrese sus ingresos: ");
    console.log(calcularImpuestos(edad, ing));
    console.log(`1. Repetir la validacion\n0. Terminar`);
    opc = Number(input())
}while(opc)
