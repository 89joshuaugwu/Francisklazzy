/* script.js - Interactivity for Jesse Scentique landing page
   Features:
   - Smooth scrolling for internal links
   - Back-to-top button
   - Simple lightbox/modal preview for product images
   - Scroll reveal animations using IntersectionObserver
*/

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for nav and any internal anchor
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        // collapse navbar on small screens if open
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).toggle();
        }
      }
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
  });
  backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Lightbox: open modal when product image clicked
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const bsModal = new bootstrap.Modal(lightboxModal);

  // Mapping of local filenames to remote fallback URLs (Unsplash source queries)
  const remoteFallbacks = {
    'images/hero.jpg': 'https://source.unsplash.com/1600x900/?perfume,bottle,luxury',
    'images/oud-royale.jpg': 'https://source.unsplash.com/1400x900/?oud,perfume',
    'images/coco-bloom.jpg': 'https://source.unsplash.com/1400x900/?floral,perfume',
    'images/midnight-essence.jpg': 'https://source.unsplash.com/1400x900/?night,perfume',
    'images/amber-rose.jpg': 'https://source.unsplash.com/1400x900/?amber,rose,perfume',
    'images/dubai-oud.jpg': 'https://source.unsplash.com/1400x900/?arabian,oud,perfume',
    'images/gold-temptation.jpg': 'https://source.unsplash.com/1400x900/?gold,luxury,perfume'
  };

  // Setup product image click + fallback on error
  document.querySelectorAll('.product-img').forEach(function (img) {
    // click opens lightbox
    img.addEventListener('click', function () {
      const src = this.dataset.src || this.src;
      const title = this.dataset.product || this.alt || '';
      lightboxImg.src = src;
      lightboxTitle.textContent = title;
      bsModal.show();
    });

    // if local image is missing, replace with remote fallback
    img.addEventListener('error', function () {
      const current = this.getAttribute('src');
      if (remoteFallbacks[current]) {
        this.src = remoteFallbacks[current];
        // also update data-src used by lightbox
        this.dataset.src = remoteFallbacks[current];
      }
    });
  });

  // About image fallback (if missing)
  const aboutImg = document.querySelector('.about-img');
  if (aboutImg) {
    aboutImg.addEventListener('error', function () {
      this.src = 'https://source.unsplash.com/1000x800/?perfume,bottles,brand';
    });
  }

  // Hero background: try loading local hero.jpg; fallback to remote if it errors
  (function checkHeroBackground() {
    const heroLocal = 'images/hero.jpg';
    const img = new Image();
    img.onload = function () {
      // local hero exists — nothing to do
    };
    img.onerror = function () {
      // set remote hero as background on .hero
      const heroEl = document.querySelector('.hero');
      if (heroEl && remoteFallbacks[heroLocal]) {
        heroEl.style.backgroundImage = `linear-gradient(rgba(8,6,6,0.45), rgba(8,6,6,0.45)), url('${remoteFallbacks[heroLocal]}')`;
      }
    };
    img.src = heroLocal;
  })();

  // Scroll reveal for elements with .reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section, .product-card, .about-img, .contact-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Accessibility: allow closing lightbox with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      bsModal.hide();
    }
  });
});

/* End of script.js */
