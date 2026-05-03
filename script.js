
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


// open new tab function
function openNewTab(url) {
  window.open(url, '_blank');
}


function validateContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill all the fields');
    return false;
  } else if (name.length < 3) {
    alert('Name must be at least 3 characters long');
    return false;
  } else if (!email.includes('@')) {
    alert('Invalid email');
    return false;
  } else {
    return true;
  }
}



function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (validateContactForm()) {
    const serviceID = "service_ulcjp0h";
    const templateID = "template_s30y7dc";

    const params = {
      name: name,
      from_email: email,
      from_name: 'Personal Portfolio Website',
      message: message,
      title: message.substring(0, 12) + "...",
      time: new Date().toLocaleString(),
    }
    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });


  }
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}




