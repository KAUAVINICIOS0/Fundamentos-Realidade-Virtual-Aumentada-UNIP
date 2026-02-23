function factorial(n){
    let constante = 1
    
    for( i=n; i>=1; i--){
        constante = constante * i
    }
    return constante
}
let fat = parseInt(prompt('Digite o fatorial desejado: '))

console.log(factorial(fat))