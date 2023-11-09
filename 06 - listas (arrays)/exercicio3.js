// Faça um programa que dado uma lide nomes is nomes que começem com a letra "V"

// nomes = ['Raphael', 'Valentina', 'Julliana', 'Maria Luiza', 'Victor']

// for (let i = 0; i < nomes.length; i++) {
//     const nome = nomes[i]
//     if (nome.startsWith('V')) {
//         console.log(nome)
//     }
// }

// Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;


// const lista = []

// for (let i = 0; i <= 50; i++) {
//     lista[i] = i;
//     const pares = lista[i]
//     if(pares % 2 === 0) {
//         console.log(pares)
//     }
// }

// Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).

// notaMedia = [2, 7, 3, 8, 10, 4]

// for (let i = 0; i < notaMedia.length; i++) {
//     const media = notaMedia[i];
//     if(media < 5){
//         console.log(media)
//     }
// }

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
// Ex de lista de notas = [2, 7, 3, 8, 10, 4]


notaMedia = [2, 127, 3, 8, 10, 4, 25, 39]

const maiorNota = Math.max(...notaMedia)

console.log(maiorNota)