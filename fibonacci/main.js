const readline = require('readline-sync')
const asciichart = require('asciichart')
let fin = 10
let somaAcumulada = 0n
const dados = []
let inicio = Date.now()
const usedHeapStart = process.memoryUsage().heapUsed

for (let i = fin; i >= 0; i--) {
    somaAcumulada += BigInt(i)
    dados.push(Number(somaAcumulada)) 
}
let fim = Date.now()
const usedHeapEnd = process.memoryUsage().heapUsed
console.log('-------------------------------')
console.log('Soma total:', somaAcumulada)
console.log('-------------------------------')
console.log('Gráfico da soma acumulada:')
console.log(asciichart.plot(dados))
console.log('-------------------------------')
console.log('Tempo de execução: ' + (fim - inicio) / 1000 + ' segundos')
console.log('-------------------------------')
console.log('Memória heap inicial: ' + (usedHeapStart / 1000000).toFixed(2) + ' MB')
console.log('Memória heap final: ' + (usedHeapEnd / 1000000).toFixed(2) + ' MB')
console.log('Memória heap usada pelo loop: ' + ((usedHeapEnd - usedHeapStart) / 1000000).toFixed(2) + ' MB')
console.log('-------------------------------')