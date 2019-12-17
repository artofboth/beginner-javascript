// Make a div
const wrapperDiv = document.createElement('div');

// add a class of wrapper to it
wrapperDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(wrapperDiv);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
list.innerHTML = `
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
`;

// put that list into the above wrapper
wrapperDiv.appendChild(list);

// create an image
const puppyImage = document.createElement('img');

// set the source to an image
puppyImage.setAttribute('src', 'https://images.unsplash.com/photo-1558236714-d1a6333fce68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')

// set the width to 250
puppyImage.setAttribute('width', '250px')

// add a class of cute
puppyImage.classList.add('cute');

// add an alt of Cute Puppy

puppyImage.setAttribute('alt', 'Cute Puppy');

// Append that image to the wrapper
wrapperDiv.appendChild(puppyImage);

// with HTML string, make a div, with two paragraphs inside of it
const textDiv = document.createElement('div');

textDiv.innerHTML = `
     <p></p>
     <p></p>
`;

// put this div before the unordered list from above

list.insertAdjacentElement("beforebegin", textDiv);

// add a class to the second paragraph called warning
const secondP = textDiv.lastElementChild;
secondP.classList.add('warning');

// remove the first paragraph
const firstP = textDiv.firstElementChild;
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

const generatePlayerCard = function (name, height, age) {

    const playerCard = document.createElement('div');
    playerCard.classList.add('playerCard');

    let playerTitle = `${name} - ${age}`;
    let dogAge = age * 7;
    let ageInDogYears = `${dogAge} years old`;
    let playerHeight = `${height}ft tall`

    playerCard.innerHTML = `
        <h2>${playerTitle}</h2>
        <p>${name} is ${playerHeight} and ${age} years old. In dog years this person would be ${ageInDogYears}. That would be an old dog!</p>
        <button class="delete-this">Delete</button>
    `
    return playerCard;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
const cardOne = generatePlayerCard('Júlia', 5, 27);
const cardTwo = generatePlayerCard('Lara', 5, 25);
const cardThree = generatePlayerCard('Angelo', 6, 25);
const cardFour = generatePlayerCard('Jason', 6, 42);

// append those cards to the div
cards.appendChild(cardOne);
cards.appendChild(cardTwo);
cards.appendChild(cardThree);
cards.appendChild(cardFour);

// put the div into the DOM just before the wrapper element
wrapperDiv.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteButton = function () {
    console.log('it works');
    this.parentNode.remove();
}

const buttons = document.querySelectorAll('.delete-this');

for (var i = 0; i < 4; i++) {
    buttons[i].addEventListener('click', deleteButton);
}


// select all the buttons!
// make out delete function
// loop over them and attach a listener