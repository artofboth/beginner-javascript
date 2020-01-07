// Selecting our buttons
const cardButtons = document.querySelectorAll('.card button');
const modal = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// Grabbing our modal

// Creating elements within the modal
const modalImg = document.createElement('img');
const modalTitle = document.createElement('h2');
const modalTxt = document.createElement('p');

modal.appendChild(modalImg);
modal.appendChild(modalTitle);
modal.appendChild(modalTxt);

function handleButtonClick(e) {
  // Grabbing data from the clicked card to display.
  const button = e.currentTarget;
  const card = button.closest('.card');
  // This is like querySelector for whatever is closest to the element.
  const imgSrc = card.querySelector('img').src;
  const title = card.querySelector('h2').innerHTML;
  const { description } = card.dataset;

  // Now populate the modal with this data.
  modalImg.setAttribute('src', `${imgSrc.replace('200', '600')}`);
  modalImg.setAttribute('width', '600');
  modalImg.setAttribute('height', '600');
  modalTitle.innerHTML = `${title}`;
  modalTxt.innerHTML = `${description}`;

  // Open the Modal
  modalOuter.classList.add('open');
}

// Looping over individual buttons to add an event listener
cardButtons.forEach(function attachListener(cardButton) {
  cardButton.addEventListener('click', handleButtonClick);
});

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
  // Creating a boolean that detects if user is clicking inside our outside our element.
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
