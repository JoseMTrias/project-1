const switchButton = document.querySelector('[data-js="switchButton"]');
const body = document.querySelector('body');

switchButton.addEventListener('click', () => {
  const status = switchButton.checked;
  if (status) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});
