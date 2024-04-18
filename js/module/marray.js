export default function multiplicarArreglo(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
      mul *= arr[i];
    }
    return mul;
  }
  