function randomColor() {
  const rComponent = Math.round(Math.random() * 255);
  const gComponent = Math.round(Math.random() * 255);
  const bComponent = Math.round(Math.random() * 255);
  return `(${rComponent}, ${gComponent}, ${bComponent})`;
}

/*
Método para embralhar array descrito no vídeo abaixo:

https://www.youtube.com/watch?v=5sNGqsMpW1E&feature=emb_logo
*/
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function setOptions(secretColor) {
  const balls = document.querySelectorAll('.ball');
  let ballsColors = [secretColor];
  for (let index = 1; index < balls.length; index += 1) {
    ballsColors.push(randomColor());
  }
  ballsColors = shuffle(ballsColors);
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb${ballsColors[index]}`;
  }
}

window.onload = function () {
  // Cria rgb da cor secreta
  const mainContent = document.querySelector('.main-content');
  const rgbColor = document.createElement('p');
  rgbColor.id = 'rgb-color';
  rgbColor.innerText = randomColor();
  mainContent.prepend(rgbColor);

  // Popula opções
  setOptions(rgbColor.innerText);
};

// Evento de click nas opções
function checkGuess(event) {
  const selectedOption = event.target;
  const answer = document.querySelector('#answer');
  const secretColor = document.querySelector('#rgb-color');
  if (selectedOption.style.backgroundColor === `rgb${secretColor.innerText}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function ballsEvent() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', checkGuess);
  }
}

ballsEvent();

//Refresh das cores
function resetGameEvent() {
  const refreshBtn = document.querySelector('#reset-game');
  refreshBtn.addEventListener('click', function () {
    const rgbColor = document.querySelector('#rgb-color');
    rgbColor.innerText = randomColor();
    setOptions(rgbColor.innerText);
    const answer = document.querySelector('#answer');
    answer.innerText = 'Escolha uma cor';
  });
}

resetGameEvent();
