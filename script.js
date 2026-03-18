
document.addEventListener('DOMContentLoaded', () => {
  

  const allSections = document.querySelectorAll('.visited-section');


// for resume section
    const resumeSection = document.querySelector('.my-resume');


// for other sections

  
  

  if (allSections.length === 0) return; 


  const handleIntersection = (entries) => {

    entries.forEach(entry => {
      const element = entry.target;

      if (entry.isIntersecting) {
        element.classList.add('is-visible');

        if (element === resumeSection) {
          resumeTransition();
        }
      } else {
        element.classList.remove('is-visible');

        if (element === resumeSection) {
          resetResumeTransition();
        }
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


function resumeTransition() {
  const resumeSection = document.querySelector('.my-resume'); 
  if (resumeSection) {
    resumeSection.classList.add('is-visible');
  }

  let transitionDelay = 0;
  
  for (let i = 1; i <= 3; i++) {

    transitionDelay += 100; 

    const activitiesBox = document.querySelector(`.activities-box-${i}`);
    if (activitiesBox) {
      setTimeout(() => {
        activitiesBox.classList.add('is-visible');
      }, transitionDelay);
    }

    const experienceBox = document.querySelector(`.experience-box-${i}`);
    if (experienceBox) {
      setTimeout(() => {
        experienceBox.classList.add('is-visible');
      }, transitionDelay);
    }

    const educationBox = document.querySelector(`.education-box-${i}`);
    if (educationBox) {
      setTimeout(() => {
        educationBox.classList.add('is-visible');
      }, transitionDelay);
    }
  }
}

function resetResumeTransition() {
  const resumeSection = document.querySelector('.my-resume');
  if (resumeSection) {
    resumeSection.classList.remove('is-visible');
  }

  // Loop through and remove the class from all boxes
  for (let i = 1; i <= 3; i++) {
    const activitiesBox = document.querySelector(`.activities-box-${i}`);
    if (activitiesBox) activitiesBox.classList.remove('is-visible');

    const experienceBox = document.querySelector(`.experience-box-${i}`);
    if (experienceBox) experienceBox.classList.remove('is-visible');

    const educationBox = document.querySelector(`.education-box-${i}`);
    if (educationBox) educationBox.classList.remove('is-visible');
  }
}


