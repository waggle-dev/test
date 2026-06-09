/* animations.js — scroll reveal con IntersectionObserver */

(function () {
  'use strict';

  /* Rispetta prefers-reduced-motion: nessuna animazione */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  /* Observer per scroll reveal */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* Stagger progressivo sui gruppi di card */
  document.querySelectorAll('.valori-grid, .aree-grid, .servizi-grid, .team-grid').forEach(function (grid) {
    grid.querySelectorAll('.reveal').forEach(function (item, i) {
      item.style.transitionDelay = (i * 0.1) + 's';
    });
  });

})();
