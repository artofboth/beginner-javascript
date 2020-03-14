function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));;
}

// Getting a random number between two specific numbers
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

// ------- ASYNC FOR LOOP ----------- //
// async function draw(el) {
//     console.log(el);
//     const text = el.textContent;
//     let soFar = '';
//     // Looping over text one letter at a time
//     // and adding it on to the text content of the element. 
//     for (const letter of text) {
//         soFar += letter;
//         el.textContent = soFar;
//         // Wait for some amount of time
//         // before adding each letter.
//         console.log(el.dataset);
//         const {
//             typeMin,
//             typeMax
//         } = el.dataset;
//         const timeToWait = getRandomBetween(typeMin, typeMax);
//         await wait(timeToWait);
//     }
// }

// ------- ASYNC RECURSION ----------- //
function draw(el) {
    // We're gonna keep an index inside of it 
    // that will be incremented once every single time. 
    let index = 1;
    const text = el.textContent;
    const {
        typeMin,
        typeMax
    } = el.dataset;

    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index += 1;
        const ms = getRandomBetween(typeMin, typeMax);
        await wait(ms)
        // The function calls itself until an exit condition is met.
        if (index <= text.length) {
            drawLetter();
        }
    }
    //  When this function draw() runs, kick off drawLetter()
    drawLetter();
}

// Grab all our elements in the page and run the drawing function for each
const els = document.querySelectorAll('[data-type]').forEach(draw);