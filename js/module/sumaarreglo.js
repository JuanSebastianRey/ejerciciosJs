export default function sumarArreglo(arr, inicio, fin) {
  let suma = 0;
  if (inicio === fin){
    return 0;
  }
  for (let i = inicio; i <= fin; i++) {
    suma += arr[i];
  }
  return suma;
}
