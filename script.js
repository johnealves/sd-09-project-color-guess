function createDivsBall(n) {
  for (let i = 0; i < n; i += 1) {
    const divContainerBall = document.querySelector('#conteiner-ball');
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divContainerBall.appendChild(divBall);
  }
}

function colorRandom(n) {
  const rgbColorlist = [];
  for (let i = 0; i < n; i += 1) {
    let rgbColor = [];
    for ( let j = 0; j < 3; j += 1) {
      rgbColor.push(Math.floor(Math.random() * 256));
    }
    rgbColorlist.push(rgbColor);
  }
  return rgbColorlist;
}

function colorBalls() {
  const arrayBalls = document.querySelectorAll('.ball');
  const rgbColorlist = colorRandom(arrayBalls.length);
  for (let i = 0; i < arrayBalls.length; i += 1) {
    arrayBalls[i].style.backgroundColor = `rgb(${rgbColorlist[i]})`;
  }
  return rgbColorlist;
}

function reset() {
  colorBalls();
  colorToFind()
}

function createBalls(amount) {
  createDivsBall(amount);
  colorRandom(amount);
  colorBalls();
  colorToFind()

}

function colorToFind() {
  const textColorToFind = document.querySelector('#rgb-color');
  const colorList = colorBalls();
  textColorToFind.innerHTML = `(${colorList[Math.floor(Math.random() * 6 )].join(', ')})`;
}

function checkChoice (event) {
   let choice = event.target.style.backgroundColor;

  const rgbColor = `rgb${document.getElementById('rgb-color').innerText}`;

  console.log(rgbColor, 'pc');
  console.log(choice, 'Escolha');

  if (choice === rgbColor) {
    console.log('Acertou')
    scorePoints();
  }
}

const scorePoints = () => {
  const scoreTextElement = document.getElementById('score');
  let scoreText = parseInt(scoreTextElement.innerText);
  scoreText += 3;
  scoreTextElement.innerText = scoreText;
  console.log(scoreText)
}

window.onload = () => {

  const btnReset = document.querySelector('#reset-game');
  btnReset.addEventListener('click', reset);

  createBalls(6);

  const arrayBalls = document.querySelector('#conteiner-ball');
  arrayBalls.addEventListener('click', checkChoice);
}
