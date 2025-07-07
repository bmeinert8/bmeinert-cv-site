const contactButton = document.querySelector('.js-contact-btn');
const navButtons = document.querySelectorAll('.js-nav-button');
const sections = {
  about: document.querySelector ('.js-about'),
  projects: document.querySelector('.js-projects'),
  blog: document.querySelector('.js-blog')
};

// event listener for contact button

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

// event listener for nav buttons

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.getAttribute('data-section');

    navButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    for (const sectionKey in sections) {
      if (sectionKey === targetSection) {
        sections[sectionKey].classList.remove('hidden');
      } else {
        sections[sectionKey].classList.add('hidden');
      }
    }


  });
});
