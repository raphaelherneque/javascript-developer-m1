
const{ gets, print } = require('./funcoes-auxuliares2');


const listaDeNumeros = gets();
let menorNumero = gets()
let maiorNumero = 0

for (let i = 0; i < gets(); i++) {
    const numero = gets() ;
    if (numero > maiorNumero) {
        maiorNumero = numero
    }   
    if (numero <= menorNumero) {
        menorNumero = numero
    }
}



print(`Maior número: ${maiorNumero}`)
print(`Menor número ${menorNumero}`)