window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  //Check if there is browser support
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech recognition');
    return;
  }
  console.log('starting...');

  // Make a new speech reco
  const recognition = new SpeechRecognition();≈
  // Recognition settings 
  recognition.continuous = true;
  recognition.intermResults = true;
  recognition.onresult = handleResult;
  recognition.start();

}

start();