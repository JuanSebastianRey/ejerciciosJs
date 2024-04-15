import prompt from "prompt-sync"
import contraseñaValida from "./module/contraseña.js"
let input = prompt();
let opc = undefined;
do{
    let data = input("Ingrese la contraseña: ")
    console.log(contraseñaValida(data));
    console.log(`1. Repetir la validacion\n0. Terminar`);
    opc = Number(input())
}while(opc)
