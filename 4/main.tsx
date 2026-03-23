let pessoas: Array<string> = [
    "Gabriel",
    "Felipe",
    "Vanessa",
    "Talita",
    "Joana",
    "Gustavo",
    "Juliana",
    "Luiz",
    "Paola",
    "Cris"
];

function combinar(nomes: Array<string>): void {
    let combinacao = 0;
    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < nomes.length; j++) {
            if (i != j) {
                combinacao++;
                console.log(`#${combinacao}: ${nomes[i]} & ${nomes[j]}`);
            }
        }
    }
}

combinar(pessoas); 