const asciichart = require('asciichart')

function factorial(n) {
    let constante = 1n
    const dados = []
    let inicio = Date.now()
    const usedHeapSize = process.memoryUsage().heapUsed;

    for (let i = n; i >= 1; i--) {
        constante = constante * BigInt(i)
        dados.push(constante.toString().length)
    }

    let fim = Date.now()
    return { constante, dados, inicio, fim, usedHeapSize }
}

let fat = 10
let resultado = factorial(fat)

console.log("-------------------------------")
console.log("Gráfico do crescimento do número de dígitos do fatorial:")
console.log(asciichart.plot(resultado.dados))
console.log("-------------------------------")
console.log("O tempo de execução foi: " + (resultado.fim - resultado.inicio) / 1000 + " segundos")
console.log("-------------------------------")
console.log(`Memória heap JS usada: ${resultado.usedHeapSize / 1000000} MB`)
console.log("-------------------------------")
console.log("O fatorial de " + fat + " é: " + resultado.constante)