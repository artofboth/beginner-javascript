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

// This is working on the console, but not for the actual line: I think I am misunderstanding the lineTo() method, and wether it just gets updated whenever I update the variable. Need to create a function that runs the method each time a key is pressed, perhaps? Will try this in the afternoon.

let x = 0;
let y = 0;

function handleKey(e) {
    const key = e.key;
    if (key === 'ArrowDown') {
        y++;
        console.log(y);
    } else if (key === 'ArrowUp') {
        y--;
    } else if (key === 'ArrowRight') {
        x++;
    } else if (key === 'ArrowLeft') {
        x--;
    }

    console.log(x, y);
}

document.addEventListener('keydown', handleKey);

ctx.lineWidth = 20;
ctx.moveTo(randomX, randomY);
ctx.lineTo(randomX + x, randomY + y);
ctx.stroke();