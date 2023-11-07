// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.72;
const precoGasolina = 5.57;
const tipoCombustivel = "gasolina";
let mediaKmPorLitro = 14.3;
const kmDistancia = 100;

if (tipoCombustivel === "gasolina") {
  precoCombustivel = precoGasolina;
  mediaKmPorLitro = 14.3;
} else {
  precoCombustivel = precoEtanol;
  mediaKmPorLitro = 9.6;
}

const valorGasto = (kmDistancia / mediaKmPorLitro) * precoCombustivel;

console.log(valorGasto.toFixed(2));
