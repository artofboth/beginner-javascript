//Selecting elements
const modal = document.querySelector('.modal');
const galleries = document.querySelectorAll('.gallery')
const images = document.querySelectorAll('.gallery1 img');

//Modal Elements
const modalImg = document.querySelector('.modal img');
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalNext = document.querySelector('.modal .next');
const modalPrev = document.querySelector('.modal .prev');

//Array to store image data. 
const imgData = [];

//Make a function that gets the data from each individual image into an object and pushes that object into our imgData array. 
const makeDataObject = function (img) {
  const src = img.src;
  const title = img.title;
  const description = img.dataset.description;
  let imgObject = {
    src,
    title,
    description
  };
  imgData.push(imgObject);
}

//Opening modal
const openElement = function (element) {
  element.classList.add('open');
}

const closeElement = function (element) {
  element.classList.remove('open');
}

let i;
let modalData;

const handleClick = function (e) {
  openElement(modal);
  const clickedImgSrc = e.target.src;
  const clickedImg = imgData.find(img => img.src === clickedImgSrc);
  i = imgData.indexOf(clickedImg);
  populateModal(i);
}

const handleArrow = function (e) {
  if (e.target === modalNext && i < imgData.length - 1) {
    i++;
  } else if (e.target === modalPrev && i > 0) {
    i--;
  } else if (e.target === modalPrev && i === 0) {
    i = imgData.length - 1;
  } else {
    i = 0;
  }
  populateModal(i);
}

// Get the data of this specific image and populate the modal with it.
function populateModal(index) {
  modalData = imgData[index];
  modalImg.src = modalData.src;
  modalTitle.textContent = modalData.title;
  modalDescription.textContent = modalData.description;
}

//Loop over each individual image with the function above. 
images.forEach(makeDataObject);
images.forEach(image = (e) => e.addEventListener('click', handleClick));

const handleModalClick = function (e) {
  console.log(e.code)
  if (!e.target.closest('.modalInner')) {
    closeElement(modal)
  } else if (
    e.target === modalNext ||
    e.target === modalPrev
  ) {
    handleArrow(e);
  }
}

modal.addEventListener('click', handleModalClick);