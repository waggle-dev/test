/* main.js — navigazione, hamburger drawer, form */

(function () {
  'use strict';

  // ── Hamburger e drawer mobile ──────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const drawer    = document.getElementById('mobile-drawer');
  const overlay   = document.getElementById('drawer-overlay');
  const closeBtn  = document.querySelector('.mobile-drawer-close');

  function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger && hamburger.focus();
  }

  hamburger && hamburger.addEventListener('click', openDrawer);
  closeBtn  && closeBtn.addEventListener('click', closeDrawer);
  overlay   && overlay.addEventListener('click', closeDrawer);

  /* Chiudi con Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  /* Chiudi cliccando su link del drawer */
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ── Navbar ombra allo scroll ───────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Form contatti ──────────────────────────────────────────────
  window.handleFormSubmit = function (e) {
    e.preventDefault();
    var success = document.getElementById('form-success');
    if (success) {
      success.classList.add('show');
      e.target.reset();
      setTimeout(function () { success.classList.remove('show'); }, 6000);
    }
  };

})();
