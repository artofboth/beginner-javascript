/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
  /* eslint-enable */
  

// 1. We grab all the relevant elements
const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

// 4. We  group all our filters into an object so each property will be the filter's value.
const filters = {
  sarcastic(char, index) {
    if (index % 2) {
      return char.toUpperCase();
    }
    // If this is even (i.e the result is zero), we will lowercase it.
    return char.toLowerCase();
  },
  funky() {},
  unable() {},
};

// 2. We make a function that takes in a text parameter and transfmrs it.
function transformText(text) {
  // const filter = document.querySelector('[name="filter"]:checked').value;
  const filter = filterInputs.find(input => input.checked).value;
  console.log(filter);
  const mod = Array.from(text).map(filters[filter]);
  result.textContent = mod.join('');
}

// 3. We listen for the user's input, then grab the result of that input and pass it on to our function that transforms text.
textArea.addEventListener('input', e => transformText(e.target.value));
