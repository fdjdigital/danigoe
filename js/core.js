/**
 * CORE.JS - Dra. Dani Goe
 * Lenis smooth scroll, GSAP ScrollTrigger setup,
 * reveal system, counter animations
 */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  // ============================================
  // LENIS SMOOTH SCROLL
  // ============================================
  let lenis;

  function initLenis() {
    if (reducedMotion) return;
    if (typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    window.__lenis = lenis;
  }

  // ============================================
  // GSAP SCROLLTRIGGER SETUP
  // ============================================
  function initGSAP() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Default settings
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
    });
  }

  // ============================================
  // REVEAL SYSTEM (data-reveal)
  // ============================================
  function initReveals() {
    var reveals = document.querySelectorAll('[data-reveal]');
    if (!reveals.length) return;

    if (reducedMotion || typeof gsap === 'undefined') {
      // Fallback: just show everything
      reveals.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    reveals.forEach(function (el) {
      var type = el.dataset.reveal || 'up';
      var fromVars = { opacity: 0 };
      var toVars = { opacity: 1, x: 0, y: 0, scale: 1 };

      switch (type) {
        case 'left':
          fromVars.x = -60;
          break;
        case 'right':
          fromVars.x = 60;
          break;
        case 'scale':
          fromVars.scale = 0.85;
          break;
        case 'none':
          break;
        default: // 'up' or empty
          fromVars.y = 40;
      }

      gsap.fromTo(el, fromVars, Object.assign({}, toVars, {
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
          onComplete: function () {
            el.classList.add('is-revealed');
          },
        },
      }));
    });
  }

  // ============================================
  // STAGGER SYSTEM (data-stagger-parent/child)
  // ============================================
  function initStaggers() {
    var parents = document.querySelectorAll('[data-stagger-parent]');
    if (!parents.length) return;

    if (reducedMotion || typeof gsap === 'undefined') {
      document.querySelectorAll('[data-stagger-child]').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    parents.forEach(function (parent) {
      var children = parent.querySelectorAll('[data-stagger-child]');
      if (!children.length) return;

      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
            once: true,
            onComplete: function () {
              children.forEach(function (c) { c.classList.add('is-revealed'); });
            },
          },
        }
      );
    });
  }

  // ============================================
  // COUNTER ANIMATION (data-count-to)
  // ============================================
  function initCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    counters.forEach(function (el) {
      var target = parseInt(el.dataset.countTo, 10);
      var suffix = el.dataset.countSuffix || '';
      var prefix = el.dataset.countPrefix || '';
      var duration = parseFloat(el.dataset.countDuration) || 2;

      if (isNaN(target)) return;

      // Set initial display
      el.textContent = prefix + '0' + suffix;

      if (reducedMotion || typeof gsap === 'undefined') {
        // Fallback: show final value with IntersectionObserver
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              el.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
              obs.unobserve(el);
            }
          });
        }, { threshold: 0.5 });
        obs.observe(el);
        return;
      }

      var obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        onUpdate: function () {
          el.textContent = prefix + Math.round(obj.val).toLocaleString('pt-BR') + suffix;
        },
      });
    });
  }

  // ============================================
  // PARALLAX (data-parallax)
  // ============================================
  function initParallax() {
    if (reducedMotion || isMobile) return;
    if (typeof gsap === 'undefined') return;

    var elements = document.querySelectorAll('[data-parallax]');
    elements.forEach(function (el) {
      var speed = parseFloat(el.dataset.parallax) || 0.2;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  // ============================================
  // PIN SECTIONS (data-pin-section)
  // ============================================
  function initPinSections() {
    if (reducedMotion || isMobile) return;
    if (typeof gsap === 'undefined') return;

    var sections = document.querySelectorAll('[data-pin-section]');
    sections.forEach(function (section) {
      var pinDuration = section.dataset.pinDuration || '100%';
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=' + pinDuration,
        pin: true,
        pinSpacing: true,
      });
    });
  }

  // ============================================
  // READING PROGRESS BAR
  // ============================================
  function initReadingProgress() {
    var bar = document.querySelector('.article-progress');
    if (!bar) return;

    var article = document.querySelector('article') || document.querySelector('.article-content');
    if (!article) return;

    if (typeof gsap !== 'undefined') {
      gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: article,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    } else {
      // Fallback
      window.addEventListener('scroll', function () {
        var rect = article.getBoundingClientRect();
        var total = article.offsetHeight - window.innerHeight;
        var progress = Math.max(0, Math.min(1, -rect.top / total));
        bar.style.transform = 'scaleX(' + progress + ')';
      });
    }
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initGSAP();
    initLenis();
    initReveals();
    initStaggers();
    initCounters();
    initParallax();
    initPinSections();
    initReadingProgress();
  }

  // Wait for DOM + libs
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Small delay to ensure CDN libs are loaded
    setTimeout(init, 50);
  }

  // Re-init on window load (ensures all libs are ready)
  window.addEventListener('load', function () {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
})();
