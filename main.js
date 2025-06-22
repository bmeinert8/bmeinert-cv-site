const contactButton = document.querySelector('.js-contact-btn');

contactButton.addEventListener('click', () => {
  const contactDisplay = document.querySelector('.js-contact-info');
  contactDisplay.classList.toggle('contact-info-active');
  contactButton.innerText = `Hide Contact`;
  setTimeout(() => {
    if (!contactDisplay.classList.contains('contact-info-active')) {
      contactButton.innerText = `Show Contact`;
    }
  }, 275);
});
