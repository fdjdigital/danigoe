/* ===================================================
   REFERRAL.JS - Pagina Indicacao
   Calculadora, milestones, form, FAQ, particles, scroll
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ============ PARTICLES ============
  const particlesEl = document.getElementById('particles');
  if (particlesEl) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 8 + 3;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      particlesEl.appendChild(p);
    }
  }

  // ============ CALCULADORA / MILESTONES ============
  const milestones = document.querySelectorAll('.milestone');
  const progressBar = document.getElementById('stepperProgress');
  const counterValue = document.getElementById('counterValue');
  const tierTitle = document.getElementById('tierTitle');
  const tierReward = document.getElementById('tierReward');
  const tierValue = document.getElementById('tierValue');

  const tierData = [
    { step: 1, title: '1a Indicacao', reward: '1x Atria Olhos', value: 'R$ 1.000', amount: 1000 },
    { step: 2, title: '2a Indicacao', reward: '2x Atria Olhos', value: 'R$ 2.000', amount: 2000 },
    { step: 3, title: '3a Indicacao', reward: '3x Atria Olhos', value: 'R$ 3.000', amount: 3000 },
    { step: 4, title: '4a Indicacao', reward: '3x Atria Olhos + 1x Botox', value: 'R$ 4.590', amount: 4590 },
  ];

  let currentStep = 0;

  function animateCounter(target) {
    const duration = 800;
    const start = performance.now();
    const startVal = parseInt(counterValue.textContent.replace(/\D/g, '')) || 0;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      counterValue.textContent = 'R$ ' + current.toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function selectMilestone(step) {
    currentStep = step;
    const data = tierData[step - 1];
    const progressPercent = ((step - 1) / (milestones.length - 1)) * 100;

    if (progressBar) progressBar.style.width = progressPercent + '%';

    milestones.forEach((m, i) => {
      m.classList.remove('active', 'completed');
      if (i + 1 < step) m.classList.add('completed');
      else if (i + 1 === step) m.classList.add('active');
    });

    if (tierTitle) tierTitle.textContent = data.title;
    if (tierReward) tierReward.textContent = data.reward;
    if (tierValue) tierValue.textContent = data.value;
    animateCounter(data.amount);

    if (step === 4) launchConfetti();
  }

  milestones.forEach(m => {
    m.addEventListener('click', () => {
      const step = parseInt(m.dataset.step);
      selectMilestone(step);
    });
  });

  // ============ CONFETTI ============
  function launchConfetti() {
    const colors = ['#daa520', '#b8860b', '#f0d060', '#fff', '#ffd700'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.classList.add('confetti-piece');
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-10px';
      piece.style.width = (Math.random() * 8 + 4) + 'px';
      piece.style.height = (Math.random() * 12 + 6) + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }

  // ============ FORM VALIDATION ============
  const form = document.getElementById('referralForm');
  const btnSubmit = document.getElementById('btnSubmit');
  const formCard = document.getElementById('formCard');
  const shareZone = document.getElementById('shareZone');

  function validateField(input) {
    const val = input.value.trim();
    const feedbackEl = document.getElementById(input.id + 'Feedback');
    const errorEl = document.getElementById(input.id + 'Error');
    let valid = false;

    if (input.type === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    } else if (input.type === 'tel') {
      valid = val.replace(/\D/g, '').length >= 10;
    } else {
      valid = val.length >= 3;
    }

    input.classList.toggle('valid', valid);
    input.classList.toggle('invalid', !valid && val.length > 0);

    if (feedbackEl) {
      feedbackEl.textContent = valid ? '\u2713' : (val.length > 0 ? '\u2717' : '');
      feedbackEl.classList.toggle('show', val.length > 0);
    }
    if (errorEl) errorEl.classList.toggle('show', !valid && val.length > 0);

    return valid;
  }

  // Phone mask
  const telInput = document.getElementById('telefone');
  if (telInput) {
    telInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) v = '(' + v.slice(0, 2) + ') ' + v.slice(2, 7) + '-' + v.slice(7);
      else if (v.length > 2) v = '(' + v.slice(0, 2) + ') ' + v.slice(2);
      else if (v.length > 0) v = '(' + v;
      e.target.value = v;
    });
  }

  if (form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) allValid = false;
      });

      if (!allValid) return;

      btnSubmit.classList.add('loading');
      btnSubmit.disabled = true;

      // Simulate submit (replace with real endpoint)
      setTimeout(() => {
        form.style.display = 'none';
        if (shareZone) shareZone.classList.add('active');
        launchConfetti();
        btnSubmit.classList.remove('loading');
        btnSubmit.disabled = false;
      }, 1500);
    });
  }

  // ============ SHARE BUTTONS ============
  const btnCopy = document.getElementById('btnCopy');
  const shareMessage = document.getElementById('shareMessage');
  const btnWhatsappShare = document.getElementById('btnWhatsappShare');
  const btnNativeShare = document.getElementById('btnNativeShare');

  if (btnCopy && shareMessage) {
    btnCopy.addEventListener('click', () => {
      const text = shareMessage.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        btnCopy.classList.add('copied');
        btnCopy.querySelector('span').textContent = 'COPIADO!';
        setTimeout(() => {
          btnCopy.classList.remove('copied');
          btnCopy.querySelector('span').textContent = 'COPIAR MENSAGEM';
        }, 3000);
      });
    });
  }

  if (btnWhatsappShare && shareMessage) {
    const text = encodeURIComponent(shareMessage.textContent.trim());
    btnWhatsappShare.href = 'https://wa.me/?text=' + text;
  }

  if (btnNativeShare && navigator.share) {
    btnNativeShare.style.display = 'inline-flex';
    btnNativeShare.addEventListener('click', () => {
      navigator.share({
        title: 'Indique e Ganhe - Dra. Dani Goe',
        text: shareMessage.textContent.trim(),
      });
    });
  }

  // ============ FAQ ACCORDION ============
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const icon = q.querySelector('i');
      const isActive = q.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-question').forEach(oq => {
        oq.classList.remove('active');
        oq.nextElementSibling.classList.remove('active');
        const oi = oq.querySelector('i');
        if (oi) { oi.classList.remove('fa-minus'); oi.classList.add('fa-plus'); }
      });

      if (!isActive) {
        q.classList.add('active');
        answer.classList.add('active');
        if (icon) { icon.classList.remove('fa-plus'); icon.classList.add('fa-minus'); }
      }
    });
  });

  // ============ SCROLL TO TOP ============
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 600);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ STICKY MOBILE CTA ============
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.querySelector('.hero-referral');
  if (stickyCta && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        stickyCta.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    observer.observe(heroSection);
  }

});
