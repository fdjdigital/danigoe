/**
 * COMPONENTS.JS - Dra. Dani Goe
 * Header scroll, mobile menu, FAQ accordion,
 * form handling, scroll-to-top
 */

(function () {
  'use strict';

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var threshold = 80;

    function onScroll() {
      if (window.scrollY > threshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check on load
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('is-active');
      if (isOpen) {
        mobileNav.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        if (window.__lenis) window.__lenis.stop();
      } else {
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
        if (window.__lenis) window.__lenis.start();
      }
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-active');
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
        if (window.__lenis) window.__lenis.start();
      });
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        hamburger.click();
      }
    });
  }

  // ============================================
  // ACCORDION
  // ============================================
  function initAccordions() {
    var triggers = document.querySelectorAll('.accordion__trigger');
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var content = this.nextElementSibling;
        var inner = content.querySelector('.accordion__content-inner');
        var isActive = this.classList.contains('is-active');

        // Close all in same accordion
        var accordion = this.closest('.accordion');
        if (accordion) {
          accordion.querySelectorAll('.accordion__trigger').forEach(function (t) {
            t.classList.remove('is-active');
            t.setAttribute('aria-expanded', 'false');
          });
          accordion.querySelectorAll('.accordion__content').forEach(function (c) {
            c.style.maxHeight = '0';
          });
        }

        // Open this if wasn't active
        if (!isActive) {
          this.classList.add('is-active');
          this.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = inner.scrollHeight + 'px';
        }
      });
    });
  }

  // ============================================
  // FAQ
  // ============================================
  function initFAQ() {
    var questions = document.querySelectorAll('.faq-item__question');
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var inner = answer.querySelector('.faq-item__answer-inner');
        var icon = this.querySelector('i');
        var isActive = this.classList.contains('is-active');

        // Close all in same FAQ list
        var faqList = this.closest('.faq-list');
        if (faqList) {
          faqList.querySelectorAll('.faq-item__question').forEach(function (q) {
            q.classList.remove('is-active');
            var ic = q.querySelector('i');
            if (ic) ic.className = 'fas fa-plus';
          });
          faqList.querySelectorAll('.faq-item__answer').forEach(function (a) {
            a.style.maxHeight = '0';
          });
        }

        // Open this if wasn't active
        if (!isActive) {
          this.classList.add('is-active');
          if (icon) icon.className = 'fas fa-minus';
          answer.style.maxHeight = inner.scrollHeight + 'px';
        }
      });
    });
  }

  // ============================================
  // SCROLL TO TOP
  // ============================================
  function initScrollTop() {
    var btn = document.querySelector('.scroll-top');
    if (!btn) return;

    function toggleVisibility() {
      if (window.scrollY > 400) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    btn.addEventListener('click', function () {
      if (window.__lenis) {
        window.__lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ============================================
  // SMOOTH ANCHOR SCROLLING
  // ============================================
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href.length <= 1) return;

        var target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        var headerHeight = 80;
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { offset: -headerHeight });
        } else {
          var pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // WHATSAPP TRACKING
  // ============================================
  function initWhatsAppTracking() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'whatsapp_click',
            button_text: this.textContent.trim(),
          });
        }
      });
    });
  }

  // ============================================
  // TOC ACTIVE HIGHLIGHT
  // ============================================
  function initTOC() {
    var toc = document.querySelector('.toc');
    if (!toc) return;

    var links = toc.querySelectorAll('a');
    var sections = [];

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      var target = document.querySelector(href);
      if (target) sections.push({ link: link, target: target });
    });

    if (!sections.length) return;

    function onScroll() {
      var scrollPos = window.scrollY + 120;
      var active = null;

      sections.forEach(function (s) {
        if (s.target.offsetTop <= scrollPos) {
          active = s;
        }
      });

      links.forEach(function (l) { l.classList.remove('is-active'); });
      if (active) active.link.classList.add('is-active');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initHeader();
    initMobileMenu();
    initAccordions();
    initFAQ();
    initScrollTop();
    initSmoothAnchors();
    initWhatsAppTracking();
    initTOC();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
