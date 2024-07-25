 let listaDeNumerosSorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;

 function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML= texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
   exibirTextoNaTela ('h1','jogo do numero secreto');
   exibirTextoNaTela ('p', 'escolha o numero entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute () {
    let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'acertou!');
       let palavraTentativa = tentativas > 1 ?'tentativas': 'tentativa';
       let mensagenTentativas = `voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
          if (chute > numeroSecreto){
            exibirTextoNaTela('P', 'O NÚMERO SECRETO É MENOR'); 
    } else { 
           exibirTextoNaTela ('p', 'O NÚMERO SECRETO É MAIOR');
       } 
       tentativas++;
       LimparCampo();
     }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadesDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
    }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function LimparCampo() {
  chute = document.querySelector('input');
  chute.value = '';

}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  LimparCampo();
  tentativas=1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}