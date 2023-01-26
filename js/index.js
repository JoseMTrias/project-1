const bookmarkButton = document.querySelector('[data-js="bookmark_icon"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card_answer_button"]'
);
const answerText = document.querySelector('[data-js="answer_text"]');

bookmarkButton.addEventListener('click', () => {
  if (bookmarkButton.src.endsWith('assets/bookmark.png')) {
    bookmarkButton.src = 'assets/bookmark_filled.png';
  } else if (bookmarkButton.src.endsWith('assets/bookmark_filled.png')) {
    bookmarkButton.src = 'assets/bookmark.png';
  }
});

cardAnswerButton.addEventListener('click', () => {
  answerText.classList.toggle('hidden');
  if (cardAnswerButton.textContent === 'Show Answer') {
    cardAnswerButton.textContent = 'Hide Answer';
  } else {
    cardAnswerButton.textContent = 'Show Answer';
  }
});
