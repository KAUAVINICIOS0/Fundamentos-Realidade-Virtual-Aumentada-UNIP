const readline = require('readline-sync')
const asciichart = require('asciichart')
let fat = 10
let constante = 1n
let dados = []

let inicio = Date.now()
const usedHeapStart = process.memoryUsage().heapUsed
for( i=fat; i>=1; i--){
    constante = constante * BigInt(i)
    dados.push(constante.toString().length)
}
let fim = Date.now()
const usedHeapEnd = process.memoryUsage().heapUsed

console.log("-------------------------------")
console.log("Gráfico do crescimento do número de dígitos do fatorial:")
console.log(asciichart.plot(dados))
console.log("-------------------------------")
console.log("O tempo de execução foi: " + (fim - inicio) / 1000 + " segundos")
console.log("-------------------------------")
console.log('Memória heap inicial: ' + (usedHeapStart / 1000000).toFixed(2) + ' MB')
console.log('Memória heap final: ' + (usedHeapEnd / 1000000).toFixed(2) + ' MB')
console.log('Memória heap usada pelo loop: ' + ((usedHeapEnd - usedHeapStart) / 1000000).toFixed(2) + ' MB')
console.log("-------------------------------")
console.log(`O fatorial de ${fat} é: ${constante}`)