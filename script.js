'use strict';

const numeroAleatorio = Math.floor(Math.random() * 20 + 1);

let pontuacao = 20;

console.log(numeroAleatorio);

const resultado = document.querySelector('.message');

const pontuacaoHtml = document.querySelector('.score span');

const chute = document.querySelector('.guess');

const btnCheck = document.querySelector('.check');

const numero = document.querySelector('.number');

function jogar() {
  // Se o jogador vencer
  if (chute.value == numeroAleatorio) {
    resultado.textContent = '🎉 Acertou!';
    numero.textContent = numeroAleatorio;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Se o chute for menos que o número aleatório
  } else if (chute.value < numeroAleatorio && chute.value) {
    if (pontuacao > 1) {
      resultado.textContent = 'Mais!';
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
      resultado.textContent = 'Menos!';
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

btnCheck.addEventListener('click', jogar);
