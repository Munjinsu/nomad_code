const rangeFormInput = document.getElementById('range-num');
const guessForm = document.getElementById('guess-form');
const guessFormInput = document.getElementById('guess-num');
const uptateInfom = document.querySelector('.uptate-infom');
const playBtn = document.getElementById('play-btn');
const result = document.querySelector('.result');
const restartForm = document.getElementById('re-start');

function onGuessNumberSubmit(event) {
  event.preventDefault();
  const rangeNum = parseInt(rangeFormInput.value);
  const userChose = parseInt(guessFormInput.value);
  const machineChose = Math.round(Math.random() * rangeNum);

  // 숫자 범위 체크
  if (
    rangeNum < 0 ||
    rangeNum < userChose ||
    isNaN(userChose) ||
    isNaN(rangeNum)
  ) {
    alert('Please select a number again');
    guessFormInput.value = '';
    uptateInfom.innerText = `Please select a number again`;
  } else {
    paintUpdate(userChose, machineChose);
    paintResult(userChose, machineChose, rangeNum);
  }
}
function paintUpdate(mine, machine) {
  uptateInfom.innerHTML = `You chose ${mine}, the machine chose ${machine}`;
}
function paintResult(mine, machine, rangeNum) {
  if (mine === machine) {
    result.innerText = `congratulate !!!! You Won`;
    rangeFormInput.disabled = true;
    guessFormInput.disabled = true;
    playBtn.disabled = true;
    restartForm.style.display = 'block';
  } else {
    result.innerText = 'You lost';
  }
}

guessForm.addEventListener('submit', onGuessNumberSubmit);
