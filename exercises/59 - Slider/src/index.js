function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider detected.');
  }
  // Variables to keep track of the slider
  let current;
  let previous;
  let next;
  //Elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    console.log(current, previous, next)
  }

  function applyClasses() {
    current.classList.add('current');
    next.classList.add('next');
    previous.classList.add('prev');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    // [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
    previous.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      //Destructuring our variables into an array of their new values.
      [previous, current, next] = [previous.previousElementSibling || slides.lastElementChild, previous, current];
    } else if (direction === 'forward') {
      [previous, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', () => move('forward'));
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));