let carSpeed = 0;
let roadTop = 0;

const roadBg = new Image();
roadBg.src = 'img/road.gif';
roadBg.onload = roadAnimate;

let roadLanes = [360, 475, 590];

function roadAnimate(){
  requestAnimationFrame(roadAnimate);
  ctx.drawImage(roadBg, canvas.width/4, roadTop, canvas.width/2, 2 * canvas.height);
  roadTop += 2;
  if( roadTop >= 0) roadTop = -canvas.height;

  //main player car

  const player = new Image();
  player.src = 'img/main-car.gif';
  const playerY = canvas.height - 80;
  ctx.drawImage(player, x ,playerY);

}

let roadLanes = [360, 475, 590];
let current = 1;
document.addEventListener('keydown', (event) => {
  let x;
  let key = event.key;

  if (key === 'a') {
    if (current !== 0) {
      current -= 1;
      x = roadLanes[current];
    }
  } else if (key === 'd') {
    if (current !== 2) {
      current += 1;
      x = roadLanes[current];
    }
  }
  roadAnimate();
});