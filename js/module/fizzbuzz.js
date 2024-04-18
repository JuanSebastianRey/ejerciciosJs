export default function fizzBuzz (m){
    if (m % 3 === 0 && m % 5 !=0 ){
        return "fizz"
    }else if (m % 5 === 0 && m % 3 !=0){
        return "buzz"
    }else if (m % 3 === 0 && m % 5 === 0){
        return "fizzbuzz"
    }else {
        return m
    }
}