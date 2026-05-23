let titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Hora do Desafio! 👩‍💻';

// Exercicio 1

function exibirNoConsole() {
	console.log('Olá, mundo!');
}


// Exercicio 2

function saudar(nome){
	console.log(`Olá, ${nome}!`);
}
saudar('Jhonata');


// Exercicio 3

function verDobro(numero){
	return numero * 2;
}
let dobro = verDobro(2);
console.log(dobro);


// Exercicio 4

function verMedia(num1, num2, num3){
	return (num1 + num2 + num3) / 3;
}
let media = verMedia(5, 7, 9);
console.log(`A média dos números 5, 7 e 9 é ${media}`);


// Exercicio 5

function verMaiorNumero(numero1, numero2){
	return Math.max(numero1, numero2);
}
let maior = verMaiorNumero(10, 20);
console.log(`O maior número é ${maior}`);


// Exercicio 6

function multiplicar(num) {
	return num * num;
}
let multiplicacao = multiplicar(2);
console.log(`O número 2 multiplicado por ele mesmo é igual a ${multiplicacao}`);