/*1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20*/
const{ gets, print } = require('./funcoes-auxiliares1')

const numero = gets()

for (let i = 0; i <= 9; i++) {
    print(`${numero} + ${i} = ${numero + i}    ${i + numero} - ${numero} = ${i + numero - numero}    ${numero} x ${i} = ${numero * i}    ${numero * i} / ${numero} = ${numero * i/numero}`)
}
