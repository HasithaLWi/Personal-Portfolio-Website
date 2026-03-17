// document.addEventListener('DOMContentLoaded', () => {

//   const heroSection = document.querySelector('.home');


//   const observerOptions = {
//     root: null, 
//     rootMargin: '0px',
//     threshold: 0.1 // Triggers when 10% of the element is visible
//   };


//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {

//         heroSection.classList.add('is-visible');
//       } else {

//         heroSection.classList.remove('is-visible');
//       }
//     });
//   }, observerOptions);


//   if (heroSection) {
//     observer.observe(heroSection);
//   }
// });


document.addEventListener('DOMContentLoaded', () => {
  

  const allSections = document.querySelectorAll('.animate-section');
  

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

