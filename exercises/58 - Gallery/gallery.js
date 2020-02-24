//Creating a function that is scoped to a specific gallery, so it can run on both and not interfere with each other. 

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery detected.')
    return;
  }

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    //Checking if the modal is open
    if (modal.matches('.open')) {
      return; //Stop the function from running
    }
    modal.classList.add('open');
    //Binding event listener when opening modal
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
    window.addEventListener('keyup', handleKeyUp);
  }

  function closeModal() {
    modal.classList.remove('open');
    //TODO event listener for keyboard and click
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
    window.removeEventListener('keyup', handleKeyUp);
  }

  function handleClickOutsideModal(event) {
    //If the thing the user clicked is the same as the thing you are listening on (the modal), this means the user hasn't clicked on anything in the inner Modal. 
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    //Adding the word return stops the function from running further if the condition was met. 
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(element) {
    if (!element) {
      console.info('No image to show.');
      return;
    }
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figure p').textContent = element.dataset.description;
    //Keeping track of whatever the current image is. 
    currentImage = element;
    openModal();
  }

  //Event Listener
  images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));
  modal.addEventListener('click', handleClickOutsideModal);

  //Loop over each image
  images.forEach(image => {
    //Attach an event listener to each
    image.addEventListener('keyup', e => {
      //Check if the key is enter, if it is, show the image
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    })
  })



}
//Referencing whatever gallery you'd like to use

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));