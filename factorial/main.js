const asciichart = require('asciichart')
let fat = 10
let constante = 1n
let dados = []

let inicio = Date.now()
const usedHeapSize = process.memoryUsage().heapUsed;
for( i=fat; i>=1; i--){
    constante = constante * BigInt(i)
    dados.push(constante.toString().length)
}
let fim = Date.now()

console.log("-------------------------------")
console.log("Gráfico do crescimento do número de dígitos do fatorial:")
console.log(asciichart.plot(dados))
console.log("-------------------------------")
console.log("O tempo de execução foi: " + (fim - inicio) / 1000 + " segundos")
console.log("-------------------------------")
console.log(`Memória heap JS usada: ${usedHeapSize / 1000000} MB`);
console.log("-------------------------------")
console.log(`O fatorial de ${fat} é: ${constante}`)