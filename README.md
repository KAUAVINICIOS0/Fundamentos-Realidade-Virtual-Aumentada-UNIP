# 📌 Algoritmos Matemáticos em JavaScript

Este repositório contém implementações de algoritmos matemáticos clássicos utilizando **JavaScript**.

## 📚 Algoritmos Implementados

- 🔢 Fibonacci (Iterativo)
- 🔁 Fibonacci (Recursivo)
- ✖️ Fatorial (Iterativo)
- 🔄 Fatorial (Recursivo)

---

# 🔢 Fibonacci

A sequência de Fibonacci é uma sequência numérica onde cada número é a soma dos dois anteriores.

Exemplo da sequência:


## 📌 Fibonacci (Iterativo)

```javascript
let fin = parseInt(prompt('Digite o valor: '))
let lts = 0

for(i = fin; i >= 0; i--){
    console.log(i)
    lts += i
}
```
```javascript
function fibonacci(n){
    let lts = 0

    for(i = n; i >= 0; i--){
        lts += i
    }
    return lts
}

let lts = 0
let fin = parseInt(prompt('Digite o valor: '))

console.log(fibonacci(fin))
```
```javascript
let fat = parseInt(prompt('Digite o fatorial desejado: '))
let constante = 1

for(i = fat; i >= 1; i--){
    constante = constante * i
}
```
```javascript
function factorial(n){
    let constante = 1

    for(i = n; i >= 1; i--){
        constante = constante * i
    }
    return constante
}

let fat = parseInt(prompt('Digite o fatorial desejado: '))
```
