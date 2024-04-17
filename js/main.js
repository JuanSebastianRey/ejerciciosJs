import prompt from "prompt-sync"
import bmi from "./module/masaCorporal.js"
let input = prompt();
let opc = undefined;
do{
    let peso = input("Ingrese su peso: ");
    let alt = input("Ingrese sus altura: ");
    console.log(bmi(peso, alt));
    console.log(`1. Repetir la validacion\n0. Terminar`);
    opc = Number(input())
}while(opc)
