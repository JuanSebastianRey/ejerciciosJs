export default function contarRango(inicio, fin) {
  let contador = 0;
  
    for (let i = inicio + 1; i < fin; i++) {
      contador++;
    }
   
  return contador;
}
