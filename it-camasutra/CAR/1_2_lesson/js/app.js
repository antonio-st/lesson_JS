
var startButton = document.querySelector('#start-car');
var statusLabel = document.querySelector('#status');
startButton.addEventListener('click', carSartListener);


function carSartListener() {
  var randomNumber = Math.random();
  if (randomNumber > 0.5) {
    carStarted();
  } else {
    carCannotBeStarted();
  }
}

function drawStatus(status) {
  statusLabel.innerHTML = status;
}

function devLog(message) {
  console.log(message);
}

function carStarted() {
  startButton.classList.add('hide');
  drawStatus('Car have started');
  devLog('Car have started');
  function engineCrashed() {
    devLog('engine crashed');
    drawStatus('Engine have crashed. Car have stopped');
    startButton.classList.remove('hide');
  }
  window.setTimeout(engineCrashed, 5000);
  devLog('we wait crash');
}

function carCannotBeStarted() {
  devLog('Something wrong');
  drawStatus('Car can\'t bee started. Try again!');
}