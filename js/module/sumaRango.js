export default function sumarRango(inicio, fin) {
    if (inicio === fin){
        return 0
    }
    let suma = 0;
    
      for (let i = inicio; i <= fin; i++) {
        suma += i;
      }
     
    return suma;
  }
  