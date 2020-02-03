console.log('it works');

const handleClick = e => {
  const filter = e.currentTarget.name;
  console.log(e.currentTarget.value);
  switch (filter) {
    case 'sarcastic':
      console.log(filter);
      break;
    case 'funky':
      console.log(filter);
      break;
    case 'unable':
      console.log(filter);
      break;
    default:
      break;
  }
};

const filters = document.querySelectorAll('[name=filter]');
filters.forEach(function(e) {
  e.addEventListener('click', handleClick);
});

const text = document.querySelector('[name=text]');

console.log(text);
