'use strict';

let numeroAleatorio = Math.floor(Math.random() * 20 + 1);

console.log(numeroAleatorio);

const resultado = document.querySelector('.message');

const chute = document.querySelector('.guess');

const btnCheck = document.querySelector('.check');

const numero = document.querySelector('.number');

function checar() {
  if (chute.value == numeroAleatorio) {
    resultado.textContent = '🎉 Acertou!';
    numero.textContent = numeroAleatorio;
  } else if (chute.value < numeroAleatorio && chute.value) {
    resultado.textContent = 'Mais!';
  } else if (chute.value > numeroAleatorio) {
    resultado.textContent = 'Menos!';
  } else if (!chute.value) {
    resultado.textContent = '⛔ Insira um número!';
  }
}

btnCheck.addEventListener('click', checar);
