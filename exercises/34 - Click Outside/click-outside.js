//Selecting our buttons
const cardButtons = document.querySelectorAll('.card button');

//Looping over individual buttons to add an event listener
cardButtons.forEach(function attachListener(cardButton) {
  cardButton.addEventListener('click', handleButtonClick);
})

function handleButtonClick(e) {
  //Grabbing data from the clicked card to display. 
  const button = e.currentTarget;
  const card = button.closest('.card');
  //This is like querySelector for whatever is closest to the element. 
  const imgSrc = card.querySelector('img').src;
  const description = card.dataset.description;
  console.log(description);
  //Now populate the modal with this data. 

}