// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  marca;
  cor;
  mediaKmPorLitro;

  constructor(marca, cor, mediaKmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.mediaKmPorLitro = 1 / mediaKmPorLitro;
  }

  calculoGastoDeDeslocamento(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.mediaKmPorLitro * precoCombustivel;
  }
}

const clio = new Carro("Renault", "Prata", 14.1);
console.log(clio.calculoGastoDeDeslocamento(102, 5.45).toFixed(2));

// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc(calcularImc) {
    if (this.calcularImc() < 18.5) {
        return 'Abaixo do peso';
    } else if (this.calcularImc() >= 18.5 && this.calcularImc() < 25) {
        return 'Peso normal';
    } else if (this.calcularImc() >= 25 && this.calcularImc() < 30) {
        return 'Acima do peso';
    } else if (this.calcularImc() >= 30 && this.calcularImc() < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(` Meu nome é ${jose.nome}, eu tenho ${jose.calcularImc().toFixed(0)} de IMC, me classificando como ${jose.classificarImc()}`);
