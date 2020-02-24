function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider detected.');
  }
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
