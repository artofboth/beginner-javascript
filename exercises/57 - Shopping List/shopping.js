console.log('it works');

// Grab elements we will use
const form = document.querySelector('.shopping');
const input = document.querySelector(`[name="item"]`);
const submit = document.querySelector(`[type="submit"]`);
const list = document.querySelector('.list');

// Creating an array to hold our state
const items = [];

function submitHandler(e) {
  e.preventDefault();
  // * The item is accessible from the form element because of its name attribute
  const name = e.currentTarget.item.value;
  // Create an object with data about the item
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push item into our state
  items.push(item);
  // Clear the input field
  e.target.reset();

  console.log(items);
}

function displayItems() {
  // Looping over each item in our items array and returning a list item with the name inside.
  const html = items.map(item => `<li>${item.name}</li>`);
  console.log(html);
}

form.addEventListener('submit', submitHandler);
// It' best to listen to the submit event on the whole form, so that the user can utilise the keyboard or whatever means they have of submitting, instead of only clicks.

// We need to store the shopping items in the items array: we can't simply store a string, because we need to mark them as complete, remove them, etc.

// Keep track of items.
