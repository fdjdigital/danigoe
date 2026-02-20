/**
 * ANIMATIONS.JS - Dra. Dani Goe
 * SplitType text reveals, parallax, magnetic cursor,
 * confetti, 3D card tilt, gold particles
 */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;

  // ============================================
  // SPLIT TEXT REVEALS (data-split-text)
  // ============================================
  function initSplitText() {
    if (typeof SplitType === 'undefined') return;
    if (typeof gsap === 'undefined') return;

    var elements = document.querySelectorAll('[data-split-text]');
    elements.forEach(function (el) {
      var splitBy = el.dataset.splitText || 'chars';
      var types = splitBy === 'words' ? 'words' : splitBy === 'lines' ? 'lines' : 'chars,words';

      var split = new SplitType(el, { types: types });
      var targets = split[splitBy] || split.chars || split.words || split.lines;

      if (!targets || !targets.length) return;

      if (reducedMotion) {
        targets.forEach(function (t) {
          t.style.opacity = '1';
          t.style.transform = 'none';
        });
        return;
      }

      gsap.fromTo(targets,
        {
          opacity: 0,
          y: splitBy === 'lines' ? 30 : 20,
          rotateX: splitBy === 'chars' ? -40 : 0,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: splitBy === 'chars' ? 0.6 : 0.8,
          stagger: splitBy === 'chars' ? 0.03 : splitBy === 'words' ? 0.06 : 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });
  }

  // ============================================
  // MAGNETIC CURSOR (data-magnetic)
  // ============================================
  function initMagneticCursor() {
    if (isMobile || reducedMotion) return;
    if (typeof gsap === 'undefined') return;

    var magnets = document.querySelectorAll('[data-magnetic]');
    magnets.forEach(function (el) {
      var strength = parseFloat(el.dataset.magneticStrength) || 0.3;

      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      el.addEventListener('mouseleave', function () {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
        });
      });
    });
  }

  // ============================================
  // 3D CARD TILT
  // ============================================
  function initCardTilt() {
    if (isMobile || reducedMotion) return;

    var cards = document.querySelectorAll('.card--tilt');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;

        var rotateX = (0.5 - y) * 12;
        var rotateY = (x - 0.5) * 12;

        card.style.transform =
          'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      });
    });
  }

  // ============================================
  // GOLD PARTICLES
  // ============================================
  function initGoldParticles() {
    if (reducedMotion) return;

    var containers = document.querySelectorAll('.gold-particles');
    containers.forEach(function (container) {
      var count = parseInt(container.dataset.particleCount) || 20;

      for (var i = 0; i < count; i++) {
        var particle = document.createElement('span');
        particle.className = 'gold-particle';
        particle.style.setProperty('--duration', (6 + Math.random() * 6) + 's');
        particle.style.setProperty('--delay', (Math.random() * 5) + 's');
        particle.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
        particle.style.setProperty('--ty', (-100 - Math.random() * 200) + 'px');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = (60 + Math.random() * 30) + '%';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
      }
    });
  }

  // ============================================
  // CONFETTI BURST
  // ============================================
  function createConfetti(originX, originY) {
    if (reducedMotion) return;

    var container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    var colors = ['#daa520', '#b8860b', '#f0d060', '#e74c3c', '#27ae60', '#3498db', '#fff'];
    var count = 60;

    for (var i = 0; i < count; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti-piece';
      var angle = Math.random() * Math.PI * 2;
      var velocity = 200 + Math.random() * 400;
      piece.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
      piece.style.setProperty('--ty', Math.sin(angle) * velocity - 200 + 'px');
      piece.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      piece.style.setProperty('--duration', (1.5 + Math.random() * 1.5) + 's');
      piece.style.setProperty('--delay', (Math.random() * 0.3) + 's');
      piece.style.left = (originX || 50) + '%';
      piece.style.top = (originY || 40) + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.width = (4 + Math.random() * 8) + 'px';
      piece.style.height = piece.style.width;
      container.appendChild(piece);
    }

    setTimeout(function () {
      container.remove();
    }, 4000);
  }

  // Expose globally for use in page-specific JS
  window.createConfetti = createConfetti;

  // ============================================
  // HORIZONTAL SCROLL SECTIONS
  // ============================================
  function initHorizontalScroll() {
    if (isMobile || reducedMotion) return;
    if (typeof gsap === 'undefined') return;

    var sections = document.querySelectorAll('[data-horizontal-scroll]');
    sections.forEach(function (section) {
      var track = section.querySelector('.horizontal-track');
      if (!track) return;

      var cards = track.querySelectorAll('.horizontal-card');
      if (!cards.length) return;

      var totalScroll = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=' + totalScroll,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    });
  }

  // ============================================
  // CLIP-PATH REVEAL (data-clip-reveal)
  // ============================================
  function initClipReveal() {
    if (typeof gsap === 'undefined') return;

    var elements = document.querySelectorAll('[data-clip-reveal]');
    elements.forEach(function (el) {
      if (reducedMotion) {
        el.classList.add('is-revealed');
        return;
      }

      gsap.to(el, {
        clipPath: 'inset(0 0 0 0)',
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: function () {
            el.classList.add('is-revealed');
          },
        },
      });
    });
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    // Delay slightly to ensure GSAP + SplitType are ready
    initSplitText();
    initMagneticCursor();
    initCardTilt();
    initGoldParticles();
    initHorizontalScroll();
    initClipReveal();
  }

  // Wait for everything
  window.addEventListener('load', function () {
    setTimeout(init, 100);
  });
})();
