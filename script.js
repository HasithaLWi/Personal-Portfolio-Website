document.addEventListener('DOMContentLoaded', () => {

  const heroSection = document.querySelector('.home');


  const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the element is visible
  };


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        heroSection.classList.add('is-visible');
      } else {

        heroSection.classList.remove('is-visible');
      }
    });
  }, observerOptions);


  if (heroSection) {
    observer.observe(heroSection);
  }
});

