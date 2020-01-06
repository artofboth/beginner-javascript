// Grabbing the canvas
const canvas = document.querySelector('#etch-a-sketch');

// Creating a drawing object
const ctx = canvas.getContext('2d');

// Starting coordinates at random points in the Canvas.
const width = canvas.getAttribute('width');
const height = canvas.getAttribute('height');
const randomY = Math.floor(Math.random() * height);
const randomX = Math.floor(Math.random() * width);

ctx.lineWidth = 40;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let x = randomX;
let y = randomY;

ctx.moveTo(randomX, randomY);

// Changing coordinates based on arrow keys
function handleKey(e) {
  const { key } = e;

  if (key === 'ArrowDown') {
    y += 5;
  } else if (key === 'ArrowUp') {
    y -= 5;
  } else if (key === 'ArrowRight') {
    x += 5;
  } else if (key === 'ArrowLeft') {
    x -= 5;
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

  //   let hue = 0;
  //   while (hue < 360) {
  //     hue += 45;
  //   }

  ctx.lineTo(x, y);
  ctx.stroke();

  //   console.log(hue);
}

// ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;

document.addEventListener('keydown', handleKey);
