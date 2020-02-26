console.clear();

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const optionInputs = document.querySelectorAll('.controls input[type="range"]');

function handleOption(e) {
  const {
    value,
    name
  } =
  e.currentTarget;
  options[name] = parseFloat(value);
}
optionInputs.forEach(input => input.addEventListener('input', handleOption));


console.log(optionInputs);

const options = {
  SIZE: 10,
  SCALE: 1.3,
}

// Make a new face detector
const faceDetector = new FaceDetector();

// Write a function that will popullate the user's video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 500,
      height: 500
    }
  });
  video.srcObject = stream;
  await video.play();

  //Resizing the canvas to the video size once video stream has been loaded. 
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  //ask the browser when the next animation frame is and tell it to run detect for us
  requestAnimationFrame(detect);
  faces.forEach(drawFace);
  faces.forEach(censor);
}

function drawFace(face) {
  const {
    width,
    height,
    top,
    left
  } = face.boundingBox;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

//Destructuring the bounding box into a new variable called face
function censor({
  boundingBox: face
}) {
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faceCtx.imageSmoothingEnabled = false;
  // Draw the small face
  // Take that face back out and draw it back at normal size
  faceCtx.drawImage(
    video, // pulling the image
    face.x,
    face.y,
    face.width,
    face.height,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE
  );
  //Draw the small face scaled up (so it's pixelated)
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height,
  )

}

populateVideo().then(detect);