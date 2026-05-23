// Exercicio 1
let titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Hora do Desafio! 👩‍💻';

// Exercicio 2
function exibirNoConsole() {
	console.log('O botão foi clicado.');
}

// Exercicio 3
function exibirAlerta() {
	alert('Eu amo JavaScript.');
}

// Exercicio 4
function perguntarCidade() {
	cidade = prompt('Me fale uma cidade do Brasil:');
	alert(`Estive em ${cidade} e lembrei de você.`)
}

// Exercicio 5
function fazerSoma(){
	num1 = parseInt(prompt('Fale o primeiro número:'));
	num2 = parseInt(prompt('Fale outro número'));
	let resultado = num1 + num2;
	alert(`A soma de ${num1} e ${num2} é igual a ${resultado}.`);
}
