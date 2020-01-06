// Grabbing the canvas
const canvas = document.querySelector('#etch-a-sketch');
const button = document.querySelector('.shake');
// Creating a drawing object
const ctx = canvas.getContext('2d');

// Starting coordinates at random points in the Canvas.
const width = canvas.getAttribute('width');
const height = canvas.getAttribute('height');
const MOVE_AMOUNT = 20;

function shakeCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true } // calls removeEventListener for you every time it is run.
  );
}

button.addEventListener('click', shakeCanvas);

let y = Math.floor(Math.random() * height);
let x = Math.floor(Math.random() * width);

ctx.lineWidth = 40;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
let hue = 0;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Changing coordinates based on arrow keys
function handleKey(e) {
  const { key } = e;

  e.preventDefault();

  ctx.beginPath();
  ctx.moveTo(x, y);

  if (hue < 360) {
    hue += 45;
  } else {
    hue = 0;
  }

  if (key === 'ArrowDown') {
    y += MOVE_AMOUNT;
  } else if (key === 'ArrowUp') {
    y -= MOVE_AMOUNT;
  } else if (key === 'ArrowRight') {
    x += MOVE_AMOUNT;
  } else if (key === 'ArrowLeft') {
    x -= MOVE_AMOUNT;
  }

  const border = 20;

  if (x > width) {
    x -= border;
  } else if (x < 0) {
    x += border;
  }
  if (y < 0) {
    y += border;
  } else if (y > height) {
    y -= border;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

ctx.moveTo(x, y);

document.addEventListener('keydown', handleKey);
