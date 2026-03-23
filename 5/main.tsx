function fibonacci5(numero: number): number { 

  if (numero <= 1) return numero; 

  return fibonacci5(numero - 2) + fibonacci5(numero - 1) 

  

} 

console.log(fibonacci5(1))

console.log(fibonacci5(10))

console.log(fibonacci5(30))

console.log(fibonacci5(40))
