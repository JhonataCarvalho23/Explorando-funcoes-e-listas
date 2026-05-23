let numeroSecreto = gerarNumeroSecreto();

function exibirNaTela(tag, texto) {
	// tag e texto - são parametros que a função precisa receber para que ela funcione
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
} 

function gerarNumeroSecreto(){
	// return - retorna alguma coisa quando a função é chamada
	return parseInt(Math.random() * 10 + 1);
}

// chamando a função e definindo parametro a ela
exibirNaTela('.titulo_do_jogo', 'Jogo do Número Secreto'); 
exibirNaTela('.texto__paragrafo', 'Esolha um número entre 1 e 10:');


function verificarChute() {
	
	// value - pega o VALOR do input
	let chute = document.querySelector('input').value;

	if (chute == numeroSecreto) {
		alert('Você acertou');
	} else {
		if (chute < numeroSecreto) {
			alert('Errou. Tente um número maior');
		} else {
			alert('Errou. Tente um número menor');
		}
	}
}