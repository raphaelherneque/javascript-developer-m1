const precoCombustivel = 5.79;
const mediaKmCombustivel = 10;
const kmDistancia = 100;

const valorGasto = (kmDistancia/mediaKmCombustivel) * precoCombustivel;

console.log(valorGasto.toFixed(2));