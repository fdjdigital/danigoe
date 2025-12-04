/**
 * ========================================
 * Dra. Dani Goe - Main JavaScript
 * Baseado em CLAUDE.md
 * Versão: 2.0 - Completa
 * ========================================
 */

(function() {
    'use strict';

    console.log('🚀 Dra. Dani Goe - Scripts carregando...');

    /* ===================================
       INTERSECTION OBSERVER - Animações ao Scroll
       =================================== */

    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('elementor-animated');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observa elementos invisíveis do Elementor
        const invisibleElements = document.querySelectorAll('.elementor-invisible');
        invisibleElements.forEach(el => observer.observe(el));

        console.log('✅ Animações de scroll inicializadas');
    }

    /* ===================================
       HEADER SCROLL EFFECT
       =================================== */

    function initHeaderScroll() {
        const header = document.querySelector('.elementor-element-a9046b4, section[data-id="a9046b4"]');

        if (!header) {
            console.warn('⚠️ Header não encontrado');
            return;
        }

        function updateHeader() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Executa na carga
        updateHeader();

        // Executa no scroll
        window.addEventListener('scroll', updateHeader, { passive: true });

        console.log('✅ Header scroll effect ativado');
    }

    /* ===================================
       ACCORDION / FAQ TOGGLE
       =================================== */

    function initAccordion() {
        const accordionTitles = document.querySelectorAll('.elementor-tab-title');

        if (accordionTitles.length === 0) {
            console.warn('⚠️ Nenhum accordion encontrado');
            return;
        }

        accordionTitles.forEach(title => {
            title.addEventListener('click', function(e) {
                e.preventDefault();

                const content = this.nextElementSibling;
                const isActive = this.classList.contains('elementor-active');

                // Fecha todos os accordions
                document.querySelectorAll('.elementor-tab-title').forEach(t => {
                    t.classList.remove('elementor-active');
                    t.setAttribute('aria-expanded', 'false');
                });

                document.querySelectorAll('.elementor-tab-content').forEach(c => {
                    c.classList.remove('elementor-active');
                    c.style.display = 'none';
                });

                // Abre este se não estava ativo
                if (!isActive && content) {
                    this.classList.add('elementor-active');
                    this.setAttribute('aria-expanded', 'true');
                    content.classList.add('elementor-active');
                    content.style.display = 'block';

                    // Scroll suave até o accordion
                    setTimeout(() => {
                        this.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 100);
                }
            });
        });

        console.log(`✅ ${accordionTitles.length} accordions inicializados`);
    }

    /* ===================================
       SMOOTH SCROLLING para Âncoras
       =================================== */

    function initSmoothScrolling() {
        const anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Ignora # vazio ou apenas #!
                if (href === '#' || href === '#!' || href === './index.html') {
                    e.preventDefault();
                    return;
                }

                // Procura elemento âncora do Elementor
                const targetId = href.replace('#', '');
                const target = document.getElementById(targetId) ||
                              document.querySelector(`[id="${targetId}"]`) ||
                              document.querySelector(`.elementor-menu-anchor#${targetId}`);

                if (target) {
                    e.preventDefault();

                    // Calcula posição considerando header fixo
                    const headerHeight = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        console.log(`✅ Smooth scrolling ativado em ${anchors.length} links`);
    }

    /* ===================================
       LAZY LOADING de Imagens
       =================================== */

    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser suporta lazy loading nativo
            const images = document.querySelectorAll('img[loading="lazy"]');
            console.log(`✅ Lazy loading nativo: ${images.length} imagens`);
            return;
        }

        // Fallback para browsers antigos
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }

                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }

                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => imageObserver.observe(img));

            console.log(`✅ Lazy loading (fallback): ${images.length} imagens`);
        }
    }

    /* ===================================
       WHATSAPP BUTTON TRACKING
       =================================== */

    function initWhatsAppTracking() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');

        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonLocation = this.closest('section')?.dataset?.id || 'unknown';

                // Google Tag Manager tracking
                if (typeof window.dataLayer !== 'undefined') {
                    window.dataLayer.push({
                        'event': 'whatsapp_click',
                        'button_location': buttonLocation,
                        'button_text': this.textContent.trim()
                    });
                }

                // Google Analytics tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'WhatsApp',
                        'event_label': buttonLocation
                    });
                }

                console.log('📱 WhatsApp button clicado:', buttonLocation);
            });
        });

        console.log(`✅ Tracking ativado em ${whatsappButtons.length} botões WhatsApp`);
    }

    /* ===================================
       COUNTER ANIMATION
       =================================== */

    function initCounterAnimation() {
        const counters = document.querySelectorAll('.elementor-counter-number');

        if (counters.length === 0) {
            return;
        }

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const targetText = counter.dataset.toValue || counter.textContent;
                    const target = parseInt(targetText.replace(/[^\d]/g, ''));

                    if (isNaN(target)) return;

                    const duration = 2000; // 2 segundos
                    const fps = 60;
                    const increment = target / (duration / (1000 / fps));
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };

                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));

        console.log(`✅ ${counters.length} counters animados`);
    }

    /* ===================================
       SCROLL TO TOP BUTTON
       =================================== */

    function initScrollToTop() {
        // Verifica se já existe
        let scrollBtn = document.querySelector('.scroll-to-top');

        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '↑';
            scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
            scrollBtn.title = 'Voltar ao topo';

            // Estilos inline
            Object.assign(scrollBtn.style, {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #daa520 0%, #b8860b 100%)',
                color: 'white',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                opacity: '0',
                visibility: 'hidden',
                transition: 'all 0.3s ease',
                zIndex: '999',
                boxShadow: '0 4px 15px rgba(218, 165, 32, 0.3)',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            });

            document.body.appendChild(scrollBtn);
        }

        // Mostra/esconde baseado no scroll
        function toggleButton() {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        }

        window.addEventListener('scroll', toggleButton, { passive: true });
        toggleButton(); // Executa imediatamente

        // Scroll ao clicar
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(218, 165, 32, 0.4)';
        });

        scrollBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(218, 165, 32, 0.3)';
        });

        console.log('✅ Botão "Voltar ao topo" criado');
    }

    /* ===================================
       FLOATING BADGES ANIMATION
       =================================== */

    function initFloatingBadges() {
        const badges = document.querySelectorAll('.elementor-animation-float img, img[src*="badge"], img[src*="desconto"], img[src*="garantia"]');

        badges.forEach(badge => {
            badge.style.animation = 'floating 3s ease-in-out infinite';
        });

        if (badges.length > 0) {
            console.log(`✅ ${badges.length} badges flutuantes animados`);
        }
    }

    /* ===================================
       EXTERNAL LINKS (Abrir em nova aba)
       =================================== */

    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');

        externalLinks.forEach(link => {
            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });

        if (externalLinks.length > 0) {
            console.log(`✅ ${externalLinks.length} links externos configurados`);
        }
    }

    /* ===================================
       FORM VALIDATION
       =================================== */

    function initFormValidation() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                let firstInvalidField = null;

                requiredFields.forEach(field => {
                    const value = field.value.trim();

                    if (!value) {
                        isValid = false;
                        field.classList.add('error');
                        field.style.borderColor = '#e74c3c';

                        if (!firstInvalidField) {
                            firstInvalidField = field;
                        }
                    } else {
                        field.classList.remove('error');
                        field.style.borderColor = '';
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    alert('Por favor, preencha todos os campos obrigatórios.');

                    if (firstInvalidField) {
                        firstInvalidField.focus();
                    }
                }
            });

            // Remove erro ao digitar
            const fields = form.querySelectorAll('input, textarea, select');
            fields.forEach(field => {
                field.addEventListener('input', function() {
                    this.classList.remove('error');
                    this.style.borderColor = '';
                });
            });
        });

        if (forms.length > 0) {
            console.log(`✅ Validação ativada em ${forms.length} formulários`);
        }
    }

    /* ===================================
       MENU MOBILE (se necessário)
       =================================== */

    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle, .mobile-menu-toggle');
        const menu = document.querySelector('.menu, nav');

        if (menuToggle && menu) {
            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('active');
                this.classList.toggle('active');
            });

            console.log('✅ Menu mobile inicializado');
        }
    }

    /* ===================================
       PERFORMANCE MONITORING (Dev)
       =================================== */

    function initPerformanceMonitoring() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            if ('PerformanceObserver' in window) {
                try {
                    const perfObserver = new PerformanceObserver((list) => {
                        list.getEntries().forEach((entry) => {
                            console.log(`⚡ Performance: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
                        });
                    });

                    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
                } catch (e) {
                    console.error('Performance monitoring error:', e);
                }
            }
        }
    }

    /* ===================================
       ELEMENTOR COMPATIBILITY
       =================================== */

    function ensureElementorCompatibility() {
        // Garante que as classes do Elementor funcionem corretamente
        const elementorSections = document.querySelectorAll('.elementor-section');

        elementorSections.forEach(section => {
            // Adiciona evento para seções invisíveis
            if (section.classList.contains('elementor-invisible')) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('elementor-animated');
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(section);
            }
        });

        console.log('✅ Compatibilidade Elementor verificada');
    }

    /* ===================================
       FIX PARA LINKS DE TELEFONE/EMAIL
       =================================== */

    function initContactLinks() {
        // Links de telefone
        const telLinks = document.querySelectorAll('a[href^="tel:"]');
        telLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (typeof window.dataLayer !== 'undefined') {
                    window.dataLayer.push({
                        'event': 'phone_click',
                        'phone_number': this.getAttribute('href')
                    });
                }
            });
        });

        // Links de email
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (typeof window.dataLayer !== 'undefined') {
                    window.dataLayer.push({
                        'event': 'email_click',
                        'email': this.getAttribute('href')
                    });
                }
            });
        });

        const totalLinks = telLinks.length + emailLinks.length;
        if (totalLinks > 0) {
            console.log(`✅ ${totalLinks} links de contato rastreados`);
        }
    }

    /* ===================================
       ANALYTICS PAGE VIEW
       =================================== */

    function trackPageView() {
        // GTM Page View
        if (typeof window.dataLayer !== 'undefined') {
            window.dataLayer.push({
                'event': 'page_view',
                'page_title': document.title,
                'page_location': window.location.href
            });
        }

        // GA4 Page View
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: window.location.pathname
            });
        }

        console.log('📊 Page view tracked');
    }

    /* ===================================
       INICIALIZAÇÃO PRINCIPAL
       =================================== */

    function init() {
        console.log('🎨 Dra. Dani Goe - Inicializando...');

        // Aguarda Elementor carregar completamente
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {
                console.log('✅ Elementor carregado');
            });
        }

        // Inicializa todos os módulos
        initScrollAnimations();
        initHeaderScroll();
        initAccordion();
        initSmoothScrolling();
        initLazyLoading();
        initWhatsAppTracking();
        initCounterAnimation();
        initScrollToTop();
        initFloatingBadges();
        initExternalLinks();
        initFormValidation();
        initMobileMenu();
        initContactLinks();
        ensureElementorCompatibility();
        trackPageView();

        // Performance monitoring (apenas em dev)
        initPerformanceMonitoring();

        console.log('✅ Todos os scripts carregados com sucesso!');
        console.log('🎉 Site Dra. Dani Goe pronto!');
    }

    /* ===================================
       EXECUTE ON DOM READY
       =================================== */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM já carregado
        init();
    }

    // Também executa quando a página terminar de carregar completamente
    window.addEventListener('load', function() {
        console.log('🌟 Página totalmente carregada');

        // Re-inicializa algumas funcionalidades após load completo
        initScrollAnimations();
        initFloatingBadges();
    });

})();
