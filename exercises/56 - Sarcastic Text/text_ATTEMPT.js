console.log('it works');
const text = document.querySelector('[name=text]');

let words = [...text.value];
const filters = document.querySelectorAll('[name=filter]');

let filter = 'sarcastic';

filters.forEach(function(e) {
  e.addEventListener('click', function getFilterName(e) {
    filter = e.currentTarget.id;
    console.log(filter);
  });
});

function wordUpdater() {
  words = [...text.value];

  function filtering(char, i) {
    if (filter === 'sarcastic') {
      i % 3 === 0 ? (char = char.toUpperCase()) : char;
    } else if (filter === 'unable') {
      char === ' ' ? (char = '...') : char;
    }
    return char;
  }

  const filteredWords = words.map(filtering);
  const result = filteredWords.join('');
  text.value = result;
}

text.addEventListener('input', wordUpdater);

// const handleChange = e => {
//   const filter = e.currentTarget.id;

//   function filtering(char, i) {
//     if (filter === 'sarcastic') {
//       i % 3 === 0 ? (char = char.toUpperCase()) : char;
//     } else if (filter === 'funky') {
//       char = 'a';
//     } else {
//       char = 'u';
//     }
//     return char;
//   }

//   const filteredWords = words.map(filtering);
//   const result = filteredWords.join('');

//   text.value = result;
// };

// filters.forEach(function(e) {
//   e.addEventListener('click', wordUpdater);
// });

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
