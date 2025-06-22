const contactButton = document.querySelector('.js-contact-btn');

contactButton.addEventListener('click', () => {
  const contactDisplay = document.querySelector('.js-contact-info');
  contactDisplay.classList.toggle('visually-hidden');
});
