let tituloJogo = document.querySelector('.titulo_do_jogo'); 
// document - referencia o documento HTML
// querySelector - busca alguma coisa no HTML
tituloJogo.innerHTML = 'Jogo do número secreto';
// innerHTML - adiciona algo ao HTML

let paragrafo = document.querySelector('.texto__paragrafo');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
	// verificarChute - exibe mensagem quando o botão no HTML for clicado
	console.log('Deu bom');
}