
document.addEventListener('DOMContentLoaded', () => {

  const allSections = document.querySelectorAll('.visited-section');

  if (allSections.length === 0) return;

  const handleIntersection = (entries) => {

    entries.forEach(entry => {
      const element = entry.target;

      if (entry.isIntersecting) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  for (const section of allSections) {
    observer.observe(section);
  }

});

console.log('Script loaded successfully');
console.log('All sections:', document.querySelectorAll('.visited-section'));
