const possibleCarLanes = [
  canvas.width * (11 / 50),
  canvas.width * (19 / 50),
  canvas.width * (11 / 20),
];

let current = 0;

const myCarAnimate = () => {
  let x = possibleCarLanes[current];
  let y = myCarY;
  ctx.drawImage(carImage, x, myCarY);

  speedHandler();
  currentScore = Math.trunc(score / 5);
  if (speedChange) {
    carSpeed += 2;
    speedChange = false;
  } 
  requestAnimationFrame(myCarAnimate);
};

const speedHandler = () => {
let nextSpeed;
  if (mode === 2 && score !== 0) {
        if (parseInt(scoreEl.innerHTML) % 10 === 0) {
        nextScore = parseInt(scoreEl.innerHTML)
        if(currentScore !== nextScore) {
            speedChange = true;
        }           
    }
  }
};