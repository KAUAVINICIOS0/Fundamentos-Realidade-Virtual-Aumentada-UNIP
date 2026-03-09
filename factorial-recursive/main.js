const readline = require('readline-sync')
const asciichart = require('asciichart')

function factorial(n) {
    let constante = 1n
    const dados = []
    let inicio = Date.now()
    const usedHeapStart = process.memoryUsage().heapUsed

    for (let i = n; i >= 1; i--) {
        constante = constante * BigInt(i)
        dados.push(constante.toString().length)
    }
    const usedHeapEnd = process.memoryUsage().heapUsed
    let fim = Date.now()
    return { constante, dados, inicio, fim, usedHeapStart, usedHeapEnd }
}

let fat = 10
let resultado = factorial(fat)

console.log("-------------------------------")
console.log("Gráfico do crescimento do número de dígitos do fatorial:")
console.log(asciichart.plot(resultado.dados))
console.log("-------------------------------")
console.log("O tempo de execução foi: " + (resultado.fim - resultado.inicio) / 1000 + " segundos")
console.log("-------------------------------")
console.log('Memória heap inicial: ' + (usedHeapStart / 1000000).toFixed(2) + ' MB')
console.log('Memória heap final: ' + (usedHeapEnd / 1000000).toFixed(2) + ' MB')
console.log('Memória heap usada pelo loop: ' + ((usedHeapEnd - usedHeapStart) / 1000000).toFixed(2) + ' MB')
console.log("-------------------------------")
console.log("O fatorial de " + fat + " é: " + resultado.constante)