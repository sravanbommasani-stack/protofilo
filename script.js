/**
 * Bommasani Sravan Kumar - Simple Portfolio Script
 * Mobile Navigation, Typewriter Effect, Smooth Scroll, and Contact Form
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Footer Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  }

  // 3. Active Nav Link on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

      if (navItem) {
        if (scrollPos >= top && scrollPos < top + height) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 4. Hero Section Typewriter Effect
  const typedTextSpan = document.getElementById('typed-text');
  if (typedTextSpan) {
    const textArray = [
      'Artificial Intelligence & ML',
      'Python & C Programming',
      'Data Structures & Algorithms',
      'SkillGap AI Project',
      'Intelligent Software Systems'
    ];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1800;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500);
      }
    }

    setTimeout(type, 1000);
  }

  // 5. Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const sendBtn = document.getElementById('send-btn');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();

      // Show sending state
      if (sendBtn) {
        sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        sendBtn.disabled = true;
      }

      setTimeout(() => {
        if (sendBtn) {
          sendBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
          sendBtn.disabled = false;
        }

        formStatus.className = 'form-status success';
        formStatus.textContent = `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      }, 800);
    });
  }

});
