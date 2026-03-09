const readline = require('readline-sync')
const asciichart = require('asciichart')

const dados = []

function fibonacci(n){
    let inicio = Date.now()
    const usedHeapStart = process.memoryUsage().heapUsed
    for(i=n; i>=0;i--){
        lts +=BigInt(i)
        dados.push(Number(lts))
    }

    let fim = Date.now()
    const usedHeapEnd = process.memoryUsage().heapUsed
   return { lts, dados, inicio, fim, usedHeapStart, usedHeapEnd }
}
let lts = 0n
let fin = 10n
let resultado = fibonacci(fin)

console.log('-------------------------------')
console.log('Valor de fibonacci desde 0 até '+fin+" é: " + resultado.lts)
console.log('-------------------------------')
console.log('Gráfico da soma acumulada:')
console.log(asciichart.plot(dados))
console.log('-------------------------------')
console.log('Tempo de execução: ' + (resultado.fim - resultado.inicio) / 1000 + ' segundos')
console.log('-------------------------------')
console.log('Memória heap inicial: ' + (resultado.usedHeapStart / 1000000).toFixed(2) + ' MB')
console.log('Memória heap final: ' + (resultado.usedHeapEnd / 1000000).toFixed(2) + ' MB')
console.log('Memória heap usada pelo loop: ' + ((resultado.usedHeapEnd - resultado.usedHeapStart) / 1000000).toFixed(2) + ' MB')
console.log('-------------------------------')

