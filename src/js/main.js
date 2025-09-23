/* Your JS here. */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// wechat QR code popup out
document.getElementById('icon-link').addEventListener('click', function(event){
  event.preventDefault();
  var popup = document.getElementById('image-popup');
  popup.style.display = 'flex';
});

// Close the popup when clicking anywhere on the screen
document.getElementById('image-popup').addEventListener('click', function(){
  this.style.display = 'none';
});

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .lifestyles-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['College Student', 'Videographer', 'Photographer','Programmer'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// dark mode toggle
const toggle = document.querySelector('#dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
});

// smooth scroll
// smooth scroll (ignore anchors with href '#' or missing targets)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // if href is just '#' or empty, don't attempt to querySelector it
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});