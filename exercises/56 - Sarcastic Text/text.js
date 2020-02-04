console.log('it works');
const text = document.querySelector('[name=text]');

const handleClick = e => {
  const filter = e.currentTarget.id;
  const words = new Array(...text.value);
  function filtering(char, i) {
    if (filter === 'sarcastic') {
      i % 3 === 0 ? (char = char.toUpperCase()) : char;
    } else if (filter === 'funky') {
      char = 'a';
    } else {
      char = 'u';
    }
    return char;
  }

  const filteredWords = words.map(filtering);
  const result = filteredWords.join('');

  text.value = result;
};

const filters = document.querySelectorAll('[name=filter]');

filters.forEach(function(e) {
  e.addEventListener('click', handleClick);
});

// function handleChange() {
//   const words = new Array(...text.value);

//   const filterWords = words.map(function uppercase(e, i) {
//     i % 3 === 0 ? (e = e.toUpperCase()) : e;
//     return e;
//   });
//   console.log(filterWords.join(''));
// }

// How can I make this function modular?

// text.addEventListener('input', handleFilter('sarcastic'));
