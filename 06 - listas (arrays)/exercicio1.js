// 1) Crie um programa que dado um número imprima a sua tabuada.
// const tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numero = 1

for (let i = 0; i <= 9; i++) {
    console.log((`${numero} + ${i} =`), numero + i, (`${i + numero} - ${numero} =`), i + numero - numero, (`${numero} x ${i} =`), numero * i, (`${numero * i} / ${numero} =`), (numero * i)/numero)
}