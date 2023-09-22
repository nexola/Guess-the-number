'use strict';

let numeroAleatorio = Math.floor(Math.random() * 20 + 1);

let pontuacaoMaxima = 0;

let pontuacao = 20;

const resultado = document.querySelector('.message');

const pontuacaoHtml = document.querySelector('.score span');

const chute = document.querySelector('.guess');

const numero = document.querySelector('.number');

function jogar() {
  // Se o jogador vencer
  if (chute.value == numeroAleatorio) {
    resultado.textContent = '🎉 Acertou!';
    numero.textContent = numeroAleatorio;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (pontuacao > pontuacaoMaxima) {
      document.querySelector('.highscore').textContent = pontuacao;
      pontuacaoMaxima = pontuacao;
    }

    // Se o chute for menos que o número aleatório
  } else if (chute.value < numeroAleatorio && chute.value) {
    if (pontuacao > 1) {
      resultado.textContent = '📈 Mais!';
      pontuacao--;
      pontuacaoHtml.textContent = pontuacao;
    } else {
      resultado.textContent = '💥 Você perdeu o jogo!';
      pontuacaoHtml.textContent = 0;
      numero.textContent = numeroAleatorio;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#913436';
    }

    // Se o chute for maior que o número aleatório
  } else if (chute.value > numeroAleatorio) {
    if (pontuacao > 1) {
      resultado.textContent = '📉 Menos!';
      pontuacao--;
      pontuacaoHtml.textContent = pontuacao;
    } else {
      resultado.textContent = '💥 Você perdeu o jogo!';
      pontuacaoHtml.textContent = 0;
      numero.textContent = numeroAleatorio;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#913436';
    }

    // Se não houver valor no input
  } else if (!chute.value) {
    resultado.textContent = '⛔ Insira um número!';
  }
}

function resetar() {
  numeroAleatorio = Math.floor(Math.random() * 20 + 1);
  pontuacao = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  numero.textContent = '?';
  chute.value = null;
  resultado.textContent = 'Comece a adivinhar...';
  pontuacaoHtml.textContent = pontuacao;
}

document.querySelector('.check').addEventListener('click', jogar);

document.querySelector('.again').addEventListener('click', resetar);
