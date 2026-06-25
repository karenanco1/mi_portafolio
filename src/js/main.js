/* ============================================
   Karen Ñanco Vásquez — Main JavaScript
   ============================================ */

// ==========================================
// EMAILJS
// ==========================================
(function () {
  const publicKey = 'm062kPwL_MQgVVeCi'; // TODO: Reemplazar con tu Public Key de EmailJS
  emailjs.init(publicKey);
})();

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');

  function updateNavbar() {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY > heroBottom - 120) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// ==========================================
// FILTROS — Portafolio
// ==========================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      const filter = this.dataset.filter;

      cards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });
}

// ==========================================
// FORMULARIO — EmailJS
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    formMessage.classList.add('hidden');
    formMessage.classList.remove('success', 'error');

    // ==========================================
    // TODO: Reemplazar con tus credenciales de EmailJS
    // Crea una cuenta en https://www.emailjs.com/
    // Conecta un servicio, crea un template y completa:
    // ==========================================
    const serviceID = 'service_3s2ce1g';   // TODO
    const templateID = 'template_ggyznhe'; // TODO

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(
        function () {
          formMessage.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
          formMessage.className = 'success';
          formMessage.classList.remove('hidden');
          form.reset();
        },
        function (err) {
          console.error('EmailJS error:', err);
          formMessage.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
          formMessage.className = 'error';
          formMessage.classList.remove('hidden');
        }
      )
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensaje';
      });
  });
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
}

// ==========================================
// SCROLL ANIMATIONS — IntersectionObserver
// ==========================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initSmoothScroll();
  initFilters();
  initContactForm();
  initMobileMenu();
  initScrollAnimations();
});
