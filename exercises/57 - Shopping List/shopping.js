console.log('it works');

// Grab elements we will use
const form = document.querySelector('.shopping');
const input = document.querySelector(`[name="item"]`);
const submit = document.querySelector(`[type="submit"]`);
const list = document.querySelector('.list');

// Creating an array to hold our state
let items = [];

function displayItems() {
  // Looping over each item in our items array and returning a list item with the name inside.
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input value=${item.id} type="checkbox"
      ${item.complete && 'checked'}
      >
      <span class="itemName">${item.name}</span>
      <button value=${item.id} aria-label="Remove ${item.name}">&times;</button>
      </li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html;
}

function submitHandler(e) {
  e.preventDefault();
  // * The item is accessible from the form element because of its name attribute
  const name = e.currentTarget.item.value;
  // Create an object with data about the item
  // We need to store the shopping items in the items array: we can't simply store a string, because we need to mark them as complete, remove them, etc.
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push item into our state
  items.push(item);
  // Clear the input fields
  e.target.reset();
  console.log(items);
  // Fire off a custom events that will inform other functions that the items have been updated.
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function localStorageMirror() {
  localStorage.setItem('items', JSON.stringify(items));
}

function localStorageRestore() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log(id);
  // Update items array filtering fopr every item that isn't the id.
  const newItems = items.filter(item => item.id !== id);
  items = newItems;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find(item => item.id === id);
  // A trick for toggling true and false: setting the itemRef.complete to the opposite of itself.
  itemRef.complete = !itemRef.complete;
  console.log(itemRef);
}

// It' best to listen to the submit event on the whole form, so that the user can utilise the keyboard or whatever means they have of submitting, instead of only clicks.
form.addEventListener('submit', submitHandler);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', localStorageMirror);

// Event Delegation
// Listening for the click on the ul, then delegating the click to the button to delete an item.
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

// Running on page load
localStorageRestore();

// Keep track of items.
