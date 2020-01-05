console.log('works');

//Grabbing the canvas
const canvas = document.querySelector('#etch-a-sketch');

//Creating a drawing object
const ctx = canvas.getContext('2d');

// Starting coordinates at random points in the Canvas.
const width = canvas.getAttribute('width');
const height = canvas.getAttribute('height');
let randomY = Math.floor(Math.random() * height);
let randomX = Math.floor(Math.random() * width);


// Changing coordinated based on arrow keys

// Ok, this is progress, but I made the mistake of keeping the line coordinated at the same origina point: the line needs to be drawn from the last coordinate to the next, not from the very first start point. How? 

let x = randomX;
let y = randomY;


function handleKey(e) {
    const key = e.key;
    if (key === 'ArrowDown') {
        y = y + 5;
    } else if (key === 'ArrowUp') {
        y = y - 5;
    } else if (key === 'ArrowRight') {
        x = x + 5;
    } else if (key === 'ArrowLeft') {
        x = x - 5;
    }

    console.log(x, y);

    ctx.lineWidth = 20;
    ctx.moveTo(randomX, randomY);
    ctx.lineTo(x, y);
    ctx.stroke();
}

document.addEventListener('keydown', handleKey);