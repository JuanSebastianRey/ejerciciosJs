export default function bmi(peso, altura) {
    let masa=undefined;
    masa = peso/altura**2;
    if (masa < 18.5){
        return "Bajo de peso"
    }else if (masa >= 18.5 && masa<=24.9){
        return "Normal"
    }else if (masa >= 25 && masa<=29.9){
        return "Sobrepeso"
    }else if (masa >= 30){
        return "Obesidad"
    }
    
  }