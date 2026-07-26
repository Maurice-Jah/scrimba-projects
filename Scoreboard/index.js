const homeDisplay = document.querySelector('.home__display');
const guestDisplay = document.querySelector('.guest__display');
const homeBtns = document.querySelector('.home__btns');
const guestBtns = document.querySelector('.guest__btns');
const newGame = document.querySelector('.new-game');

let homeScore = 0;
let guestScore = 0;

homeBtns.addEventListener('click', (e) => {
  if (e.target.className === 'btn') {
    const score = parseInt(e.target.dataset.points);
    homeScore += score;
    homeDisplay.textContent = homeScore;
  }
});

guestBtns.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const score = parseInt(e.target.dataset.points);
    guestScore += score;
    guestDisplay.textContent = guestScore;
  }
});

newGame.addEventListener('click', (e) => {
  homeScore = 0;
  guestScore = 0;
  homeDisplay.textContent = 0;
  guestDisplay.textContent = 0;
});
