/* ============================================
   spa estudio — Main JavaScript
   ============================================ */

// ==========================================
// EMAILJS — Inicialización
// ==========================================
(function () {
  const publicKey = 'TU_PUBLIC_KEY'; // TODO: Reemplazar con tu Public Key de EmailJS
  emailjs.init(publicKey);
})();

// ==========================================
// NAVBAR — Efecto de scroll
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
// SMOOTH SCROLL — Navegación fluida
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

        // Cerrar menú mobile si está abierto
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// ==========================================
// FILTROS — Proyectos del portafolio
// ==========================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Actualizar botón activo
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

      // Re-ajustar layout del grid después de la transición
      // (evita que elementos ocultos sigan ocupando espacio)
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

    // Deshabilitar botón mientras se envía
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    formMessage.classList.add('hidden');
    formMessage.classList.remove('success', 'error');

    // ==========================================
    // TODO: Reemplazar con tus credenciales de EmailJS
    // 1. Crea una cuenta en https://www.emailjs.com/
    // 2. Conecta un servicio de correo
    // 3. Crea un template de email
    // 4. Reemplaza los valores abajo
    // ==========================================
    const serviceID = 'TU_SERVICE_ID';   // TODO: Reemplazar con tu Service ID
    const templateID = 'TU_TEMPLATE_ID'; // TODO: Reemplazar con tu Template ID

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(
        function () {
          formMessage.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
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
// MOBILE MENU — Toggle
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
// INIT — Punto de entrada
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initSmoothScroll();
  initFilters();
  initContactForm();
  initMobileMenu();
});
