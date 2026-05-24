// let titulo = document.querySelector('.titulo');
// titulo.innerHTML = 'Hora do Desafio! 👩‍💻';

// Exercicio 1

function calcularImc(peso, altura){
	resultado = peso / (altura * altura);
	return resultado.toFixed(2);
}
let IMC = calcularImc(70, 1.75);
console.log(IMC);


// Exercicio 2
function calcularFatorial(numero){

	if (numero == 0 || numero == 1){
		return 1;
	}

	let resultadoDaFatoracao = 1;

	for (let i = 2; i <= numero; i++){
		resultadoDaFatoracao *= i;
	}

	return resultadoDaFatoracao;

}
let fatoracao = calcularFatorial(5);
console.log(fatoracao)



// Exercicio 3

function converterParaDolar(valor){

	let conversao = valor * 4.80;

	return conversao;
}
let valorEmReais = converterParaDolar(20);
console.log(valorEmReais);


// Exercicio 4

function calcularArea(altura, comprimento){

	let area = altura * comprimento;

	return area;

}
function calcularPerimetro(altura, comprimento){

	let perimetro = 2 * (altura + comprimento);

	return perimetro;

}
let area = calcularArea(4, 5);
let perimetro = calcularPerimetro(4 , 5);
console.log(area);
console.log(perimetro);


// Exercicio 5

function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}
let raio = 4;
calcularAreaPerimetroSalaCircular(raio);


// Exercicio 6

function calcularTabuada(num){


	for (let i = 1; i <= 10; i++){

		let resultadoDaTabuada = num * i;
		console.log(`${num} x ${i} = ${resultadoDaTabuada}`);
	}

}
let tabuada = calcularTabuada(5);