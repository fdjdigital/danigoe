// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('span:last-child');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-question span:last-child').forEach(i => i.textContent = '+');

            // Open this FAQ
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    if (!el.classList.contains('bounce-in')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Floating animation for badges
document.querySelectorAll('.floating').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
});

// Newsletter form submission (if exists on page)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button');
        const originalText = button.textContent;

        // Simulate form submission
        button.textContent = 'Cadastrando...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = '✅ Cadastrado!';
            button.style.background = '#27ae60';

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = 'white';
                this.querySelector('input[type="email"]').value = '';
            }, 2000);
        }, 1500);
    });
}

// Confetti effect for success page
function createConfetti() {
    const colors = ['#daa520', '#27ae60', '#3498db', '#e74c3c', '#9b59b6'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.transition = 'all 3s ease-out';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.transform = 'rotate(720deg)';
                confetti.style.opacity = '0';
            }, 100);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

// Trigger confetti on success page
if (document.querySelector('.success-section')) {
    window.addEventListener('load', () => {
        setTimeout(createConfetti, 500);
    });
}

// Script para ajustar altura do iframe dinamicamente (VIP page)
window.addEventListener('message', function(event) {
    if (event.origin === 'https://docs.google.com') {
        const iframe = document.querySelector('iframe');
        if (iframe && event.data && event.data.height) {
            iframe.style.height = event.data.height + 'px';
        }
    }
});

// Animação suave ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        el.style.animationDelay = (index * 0.2) + 's';
    });
});
