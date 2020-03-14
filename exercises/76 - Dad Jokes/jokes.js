const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const jokeButtonText = document.querySelector('.getJoke__text');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchData() {
  jokeButtonText.classList.add('hidden');
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeButtonText.classList.remove('hidden');
  return data;
}

//Function that takes in an array and something it should not be
function randomItemFromArray(array, not) {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  // If the next item is the same as the one you don't want
  // run the function again.
  if (item === not) {
    console.log('We used that one last time. Look again.')
    return randomItemFromArray(array, not);
  }
  console.log(item);
  return item;
}

async function handleClick() {
  // Grabbing only the joke property of the object, instead of all its data
  // Through destructuring the joke into a variable. 
  const {
    joke
  } = await fetchData();
  jokeHolder.textContent = joke;
  console.log(joke);
  jokeButtonText.textContent = randomItemFromArray(buttonText, jokeButtonText.textContent);
}

jokeButton.addEventListener('click', handleClick);