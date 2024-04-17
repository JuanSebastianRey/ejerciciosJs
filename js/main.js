
import prompt from "prompt-sync";
import likes from "./module/likes.js";

let input = prompt();
let opc = undefined;
do {
  let like = input("Ingrese la cantidad de likes: ");
  console.log(likes(like));
  console.log("Desea ingresar likes diferentes? 1. Si 0. No");
  opc= Number(input())
  if (opc == 0){
    break;
  }
} while (true);
