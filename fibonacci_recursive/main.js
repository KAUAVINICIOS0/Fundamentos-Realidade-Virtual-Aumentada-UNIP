function fibonacci(n){

    for(i=n; i>=0;i--){
        lts +=i
    }
    return lts
}
let lts = 0
let fin = parseInt(prompt('Digite o valor: '))

console.log(fibonacci(fin))

