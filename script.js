const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const contactForm = document.querySelector("#contactForm");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Your name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Your email"]').value.trim();
    const message = contactForm.querySelector('textarea[placeholder="Your message"]').value.trim();
    const subject = `New inquiry from ${name || "website visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:allahditta@alfareedtraders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    contactForm.reset();
  });
}

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween : 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Responsive breakpoints
  breakpoints : {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});