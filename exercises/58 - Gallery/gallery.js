//Selecting elements
const modal = document.querySelector('.modal');
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

const openModal = function (e) {
  modal.classList.toggle('open');
}

let modalData = imgData[i];
let i = 0;

const handleClick = function (e) {
  openModal(e);

  const clickedImgSrc = e.target.src;
  const clickedImg = imgData.find(img => img.src === clickedImgSrc);
  i = imgData.indexOf(clickedImg);

  modalData = imgData[i];
  console.log(modalData);

  populateModal(modalData);
}

// Get the data of this specific image and populate the modal with it.
const populateModal = function (modalData) {
  modalImg.src = modalData.src;
  modalTitle.textContent = modalData.title;
  modalDescription.textContent = modalData.description;
}

//Loop over each individual image with the function above. 
images.forEach(makeDataObject);
images.forEach(img = (e) => addEventListener('click', handleClick));
modalNext.addEventListener('click', handleClick);