/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 10;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log('Média do aluno é ' + media + ', Reprovação.');
} else if (media >= 5 && media < 7) {
  console.log('Média do aluno é ' + media + ',Recuperação.');
} else {
  console.log('Média do aluno é ' + media + ', Aprovação.');
}

/*
    2) O imc – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do imc:
    imc = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    imc em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 47;
let altura = 1.6;
let imc = peso / Math.pow(altura,2);

if (imc < 18.5) {
  console.log("Abaixo de 18,5, abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Entre 18,5 e 25, peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Entre 25 e 30, Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Entre 30 e 40, Obeso");
} else {
  console.log("Acima de 40, Obesidade grave");
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/



let precoNormal = 100
let formaDePagamento = 1


function aplicarDesconto(valor, desconto){
  return valor - (valor * (desconto/100))
}

function aplicarJuros(valor, juros){
  return valor + (valor * (juros/100))
}



function calcularValorAPagar(precoNormal, formaDePagamento){
  if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoNormal,10))
  } else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoNormal,15))
  } else if(formaDePagamento === 3){
    console.log(precoNormal)
  }else if(formaDePagamento === 4){
    console.log(aplicarJuros(precoNormal,10))
  }

}

calcularValorAPagar(1000, 1)
calcularValorAPagar(1000, 2)
calcularValorAPagar(1000, 3)
calcularValorAPagar(1000, 4)