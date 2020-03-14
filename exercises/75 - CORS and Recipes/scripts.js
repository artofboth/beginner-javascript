console.log('hey');

const form = document.querySelector('form.search');
const submitButton = document.querySelector('[name="submit"]');
const recipesGrid = document.querySelector('.recipes');

const baseEndPoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndPoint}?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const element = event.currentTarget;
  fetchAndDisplay(form.query.value);
};

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const HTML = recipes.map(recipe => {
    return `
    <div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}">`}
    <a href="${recipe.href}" target="_blank">View Recipe</a>
    </div>
    `
  })
  recipesGrid.innerHTML = HTML.join('');
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');