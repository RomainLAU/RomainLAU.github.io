const letters = 'AZERTYUIOPMLKJHGFDSQWXCVBN';
const title = document.querySelector('#header-title');

let iterations = 0;

// setTimeout(() => {
const interval = setInterval(() => {
  title.innerText = title.innerText
    .split('')
    .map((letter, index) => {
      if (index < iterations) {
        return title.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join('');

  if (iterations >= title.dataset.value.length) clearInterval(interval);

  iterations += 1 / 2;
}, 50);
// }, 1000);
