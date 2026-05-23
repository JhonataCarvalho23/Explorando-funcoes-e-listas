let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;

function exibirNaTela(tag, texto) {
	// tag e texto - são parametros que a função precisa receber para que ela funcione
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
} 


function gerarNumeroSecreto(){
	// return - retorna alguma coisa quando a função é chamada
	return parseInt(Math.random() * 20 + 1);
}

console.log(numeroSecreto)

// chamando a função e definindo parametro a ela
exibirNaTela('.titulo_do_jogo', 'Jogo do Número Secreto'); 
exibirNaTela('.texto__paragrafo', 'Esolha um número entre 1 e 100:');


function verificarChute() {
	
	// value - pega o VALOR do input
	let chute = document.querySelector('input').value;

	if (chute == numeroSecreto) {
		let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
		let mensagemTentativa = `Você acertou o número secreto em ${tentativa} ${palavraTentativa}!`;

		exibirNaTela('.titulo_do_jogo', 'Você acertou!');
		exibirNaTela('.texto__paragrafo', mensagemTentativa);

	} else {
		if (chute < numeroSecreto) {
			exibirNaTela('.texto__paragrafo', 'Errou. Tente um número maior');
		} else {
			exibirNaTela('.texto__paragrafo', 'Errou. Tente um número menor');
		}
		tentativa++;
		limparCampo();
	}
}

function limparCampo(){
	let chute = document.querySelector('input');
	chute.value = '';
}