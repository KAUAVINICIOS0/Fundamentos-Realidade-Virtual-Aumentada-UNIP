## 📌 Algoritmos Matemáticos em JavaScript (Node.js)

Este repositório contém implementações de algoritmos matemáticos clássicos em **JavaScript (Node.js)**, com foco em **comparar versões iterativas e recursivas** e em **analisar desempenho** (tempo de execução e uso de memória) com **visualização em gráfico ASCII**.

---

## 📚 Algoritmos Implementados

- **Fibonacci (Iterativo)** – cálculo de `F(n)` usando laço iterativo com `BigInt`.
- **Fibonacci (Recursivo)** – cálculo de `F(n)` de forma recursiva (com memoização).
- **Fatorial (Iterativo)** – cálculo de `n!` com laço iterativo, mostrando o crescimento do número de dígitos.
- **Fatorial (Recursivo)** – cálculo de `n!` de forma recursiva (com memoização), também analisando o crescimento dos dígitos.

Cada script mostra:

- **Tempo de execução** (em segundos).
- **Memória heap inicial e final** (em MB).
- **Memória heap usada** durante o cálculo.
- Um **gráfico ASCII** (via `asciichart`) com a evolução do tamanho dos resultados.

---

## 🛠 Tecnologias e Bibliotecas

- **Node.js**
- **Bibliotecas NPM**:
  - `asciichart` – gráficos em ASCII no terminal.
  - `readline-sync` – entrada interativa pelo terminal (quando disponível).

---

## 📂 Estrutura do Projeto

```text
.
├── factorial/
│   └── main.js              # Fatorial iterativo
├── factorial-recursive/
│   └── main.js              # Fatorial recursivo
├── fibonacci/
│   └── main.js              # Fibonacci iterativo
├── fibonacci_recursive/
│   └── main.js              # Fibonacci recursivo
├── package.json
├── package-lock.json
└── README.md
```

---

## ✅ Pré-requisitos

- **Node.js** instalado.
- **NPM** instalado.

Instale as dependências na raiz:

```bash
npm install
```

---

## ▶️ Como Executar

Você pode passar o valor de entrada:

- **Pelo argumento na linha de comando** (ex.: `node main.js 10`), ou
- **Interativamente** pelo terminal (quando suportado), usando `readline-sync`.

### Fatorial (Iterativo)

```bash
cd factorial
node main.js 10   # calcula 10!
# ou, sem argumento (usa input interativo / valor padrão)
node main.js
```

### Fatorial (Recursivo)

```bash
cd factorial-recursive
node main.js 10
# ou
node main.js
```

### Fibonacci (Iterativo)

```bash
cd fibonacci
node main.js 10   # calcula F(10)
# ou
node main.js
```

### Fibonacci (Recursivo)

```bash
cd fibonacci_recursive
node main.js 10
# ou
node main.js
```

Cada execução imprime:

- O **resultado final** (`F(n)` ou `n!`).
- Um **gráfico ASCII** mostrando o crescimento dos dígitos ao longo da sequência.
- **Tempo de execução**.
- **Uso de memória heap**.

---

## 🎯 Objetivo

Este projeto é voltado para:

- Estudo de **algoritmos iterativos vs recursivos**.
- Visualização do **crescimento** de `F(n)` e `n!`.
- Experimentos básicos de **desempenho em Node.js** com números grandes usando `BigInt`.
