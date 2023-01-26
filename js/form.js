const submitButton = document.querySelector('[data-js="form"]');

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('yeah');

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const newCard = document.createElement('section');
  newCard.classList.add('card');
  document.body.append(newCard);

  const newCardHeading = document.createElement('h2');
  newCardHeading.classList.add('card_heading');
  newCardHeading.textContent = data.yourQuestion;
  newCard.append(newCardHeading);

  const newCardAnswer = document.createElement('button');
  newCardAnswer.classList.add('card_answer');
  newCardAnswer.textContent = 'Show Answer';
  newCard.append(newCardAnswer);

  const newCardAnswerText = document.createElement('p');
  newCardAnswerText.classList.add('hidden');
  newCard.append(newCardAnswerText);

  const newCardBookmark = document.createElement('div');
  newCardBookmark.classList.add('bookmark');
  newCard.append(newCardBookmark);

  const newCardBookmarkButton = document.createElement('button');
  newCardBookmarkButton.classList.add('bookmark_button');
  newCardBookmark.append(newCardBookmarkButton);

  const newCardBookmarkButtonImage = document.createElement('img');
  newCardBookmarkButtonImage.src = '/assets/bookmark.png';
  newCardBookmarkButton.append(newCardBookmarkButtonImage);

  const newCardTag = document.createElement('div');
  newCardTag.classList.add('tags');
  newCard.append(newCardTag);

  const newCardTagButton = document.createElement('button');
  newCardTagButton.textContent = '#' + data.tags;
  newCardTag.append(newCardTagButton);

  event.target.reset();
});

console.clear();

const counterOne = document.querySelector('#your-question');
const amountLeft1 = document.querySelector('[data-js="amountLeft1"]');
const maxLength = counterOne.getAttribute('maxlength');

const updateAmountLeft1 = (value) => {
  amountLeft1.innerText = value;
};

updateAmountLeft1(maxLength);

counterOne.addEventListener('input', () => {
  updateAmountLeft1(maxLength - counterOne.value.length);
});

const counterTwo = document.querySelector('#your-answer');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');

const updateAmountLeft2 = (value) => {
  amountLeft2.innerText = value;
};

updateAmountLeft2(maxLength);

counterTwo.addEventListener('input', () => {
  updateAmountLeft2(maxLength - counterTwo.value.length);
});
