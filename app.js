// cria uma lista vazia
let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;

function exibirNaTela(tag, texto) {
	// tag e texto - são parametros que a função precisa receber para que ela funcione
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
} 


function gerarNumeroSecreto(){
	
	let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

	// length - mostra o tamanho da lista (quanidade de elementos)
	let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

	// se a quantidade de elemtos for igual ao número maximo reinicia a lista
	if (quantidadeDeElementosDaLista == numeroMaximo){
		listaDeNumerosSorteados = [];
	}

	// includes - verifica se um número já tem na lista
	if (listaDeNumerosSorteados.includes(numeroEscolhido)){
		return gerarNumeroSecreto();
	} else {

		// push - adiciona um número na lista
		listaDeNumerosSorteados.push(numeroEscolhido);
		return numeroEscolhido;
	}

}

function exibirMensagemInicial() {
	exibirNaTela('.titulo_do_jogo', 'Jogo do Número Secreto'); 
	exibirNaTela('.texto__paragrafo', `Esolha um número entre 1 e ${numeroMaximo}:`);
}

exibirMensagemInicial();


function verificarChute() {
	
	// value - pega o VALOR do input
	let chute = document.querySelector('input').value;

	if (chute == numeroSecreto) {
		let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
		let mensagemTentativa = `Você acertou o número secreto em ${tentativa} ${palavraTentativa}!`;

		exibirNaTela('.titulo_do_jogo', 'Você acertou!');
		exibirNaTela('.texto__paragrafo', mensagemTentativa);

		// getElementById - busca um id no html
		// removeAttribute - remove o atributo de um elemento html
		// disabled = desabilitado
		document.getElementById('reiniciar').removeAttribute('disabled');

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

function novoJogo(){
	numeroSecreto = gerarNumeroSecreto();
	limparCampo();
	exibirMensagemInicial();
	tentativa = 1;
	document.getElementById('reiniciar').setAttribute('disabled', true)
}
