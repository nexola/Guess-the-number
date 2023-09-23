'use strict';

let numeroAleatorio = Math.floor(Math.random() * 20 + 1);

let pontuacaoMaxima = 0;

let pontuacao = 20;

const mostrarMensagem = function (mensagem) {
  document.querySelector('.message').textContent = mensagem;
};

const mensagemPontuacao = function (mensagem) {
  document.querySelector('.score span').textContent = mensagem;
};

const chute = document.querySelector('.guess');

const numero = document.querySelector('.number');

function jogar() {
  // Se o jogador vencer
  if (chute.value == numeroAleatorio) {
    mostrarMensagem('🎉 Acertou!');
    numero.textContent = numeroAleatorio;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (pontuacao > pontuacaoMaxima) {
      document.querySelector('.highscore').textContent = pontuacao;
      pontuacaoMaxima = pontuacao;
    }
    document.querySelector('.check').style.display = 'none';
    chute.style.display = 'none';

    // Se o chute for errado
  } else if (chute.value !== numeroAleatorio) {
    if (pontuacao > 1) {
      mostrarMensagem(chute.value < numeroAleatorio ? '📈 Mais!' : '📉 Menos!');
      pontuacao--;
      mensagemPontuacao(pontuacao);
    } else {
      mostrarMensagem('💥 Você perdeu o jogo!');
      mensagemPontuacao(0);
      numero.textContent = numeroAleatorio;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#913436';
      document.querySelector('.check').style.display = 'none';
      chute.style.display = 'none';
    }
    // Se não houver valor no input
  } else if (!chute.value) {
    mostrarMensagem('⛔ Insira um número!');
  }
}

function resetar() {
  numeroAleatorio = Math.floor(Math.random() * 20 + 1);
  pontuacao = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  numero.textContent = '?';
  chute.value = null;
  mostrarMensagem('Comece a adivinhar...');
  mensagemPontuacao(pontuacao);
  document.querySelector('.check').style.display = 'block';
  chute.style.display = 'block';
}

document.querySelector('.check').addEventListener('click', jogar);

document.querySelector('.again').addEventListener('click', resetar);
