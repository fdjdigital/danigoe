# Design System - Dra. Dani Goe
## Guia de Identidade Visual e Padrões de Design

---

## 📋 ÍNDICE
1. [Paleta de Cores](#paleta-de-cores)
2. [Tipografia](#tipografia)
3. [Espaçamentos e Grid](#espacamentos-e-grid)
4. [Componentes UI](#componentes-ui)
5. [Animações](#animacoes)
6. [Seções Padrão](#secoes-padrao)
7. [Responsividade](#responsividade)
8. [Elementos Visuais](#elementos-visuais)

---

## 🎨 PALETA DE CORES

### Cores Primárias
```css
--primary-gold: #daa520;           /* Dourado principal - CTAs, destaques */
--primary-gold-dark: #b8860b;      /* Dourado escuro - Hover, gradientes */
--primary-gold-light: #8b6914;     /* Dourado light - Textos em badges */
```

### Cores Secundárias
```css
--purple-gradient-start: #667eea;  /* Roxo - Início gradiente seção estatísticas */
--purple-gradient-end: #764ba2;    /* Roxo escuro - Fim gradiente */
--blue-gradient-start: #74b9ff;    /* Azul claro - Quote section */
--blue-gradient-end: #0984e3;      /* Azul escuro - Quote section */
--blue-cta: #3498db;               /* Azul - CTAs secundários */
```

### Cores Neutras
```css
--text-primary: #2c2c2c;           /* Texto principal - Títulos, corpo */
--text-secondary: #6b6b6b;         /* Texto secundário - Descrições */
--text-muted: #999;                /* Texto discreto - Legal info, placeholders */
--background-primary: #faf9f7;     /* Background principal da página */
--background-secondary: #f5f3f0;   /* Background secundário */
--white: #ffffff;                  /* Branco puro - Cards, formulários */
--divider: #f0f0f0;                /* Linhas divisórias, borders */
```

### Cores de Feedback
```css
--success: #27ae60;                /* Verde - Valor revertido, confirmações */
--warning: #e74c3c;                /* Vermelho - Urgência, alertas */
```

### Backgrounds e Overlays
```css
/* Background gradiente principal */
background: linear-gradient(135deg, #faf9f7 0%, #f5f3f0 100%);

/* Background dourado com opacidade (badges, highlights) */
background: rgba(218, 165, 32, 0.1);

/* Overlay dourado sutil */
background: radial-gradient(circle at 30% 20%, rgba(218, 165, 32, 0.1) 0%, transparent 50%);

/* Background branco com blur (glassmorphism) */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);

/* Gradiente estatísticas (roxo) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Gradiente CTA dourado */
background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);

/* Gradiente quote (azul) */
background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
```

---

## 🔤 TIPOGRAFIA

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Hierarquia de Títulos

#### H1 - Hero Title
```css
font-size: clamp(2.5rem, 4vw, 3.5rem);
font-weight: 700;
color: #2c2c2c;
margin-bottom: 20px;
line-height: 1.2;
```

#### H2 - Section Titles
```css
font-size: 2.5rem;
font-weight: 700;
color: #2c2c2c;
margin-bottom: 40px;
text-align: center;

/* Mobile */
@media (max-width: 768px) {
    font-size: 1.8rem;
}
```

#### H3 - Card/Item Titles
```css
font-size: 1.4rem;
font-weight: 600;
color: #2c2c2c;
margin-bottom: 15px;
```

#### H5 - Procedure Titles
```css
font-size: 1.1rem;
font-weight: 600;
color: #2c2c2c;
text-align: center;
margin-top: 15px;
```

### Corpo de Texto

#### Parágrafo Principal
```css
font-size: 1.1rem;
color: #6b6b6b;
line-height: 1.8;
margin-bottom: 20px;
```

#### Subtitle
```css
font-size: clamp(1.1rem, 2vw, 1.3rem);
color: #6b6b6b;
margin-bottom: 40px;
max-width: 800px;
margin-left: auto;
margin-right: auto;
```

#### Small Text (Legal)
```css
font-size: 0.9rem;
color: #999;
line-height: 1.4;
```

---

## 📏 ESPAÇAMENTOS E GRID

### Container Principal
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Espaçamentos de Seções
```css
/* Padrão de padding vertical para seções */
padding: 80px 0;

/* Mobile */
@media (max-width: 768px) {
    padding: 60px 0;
}
```

### Grid Layouts

#### Grid 2 Colunas (Doctor, Location)
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: center;

/* Mobile */
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
}
```

#### Grid Auto-fit (Procedures, Testimonials)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 30px;
```

---

## 🧩 COMPONENTES UI

### Header Fixo
```css
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 15px 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid rgba(218, 165, 32, 0.1);
}

/* Scroll effect */
.header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.logo {
    height: 60px;
    width: auto;
}
```

### Botões (CTAs)

#### CTA Primário (Dourado)
```css
.cta-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
    color: white;
    padding: 18px 40px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.3);
    border: none;
    cursor: pointer;
}

.cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(218, 165, 32, 0.4);
}
```

#### CTA Secundário (Outline)
```css
.cta-secondary {
    background: transparent;
    color: #daa520;
    border: 2px solid #daa520;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1rem;
}

.cta-secondary:hover {
    background: #daa520;
    color: white;
}
```

#### CTA Azul
```css
.cta-blue {
    background-color: #3498db;
    /* Restante igual ao cta-primary */
}
```

### Cards

#### Card Básico
```css
.card {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(218, 165, 32, 0.2);
}
```

#### Card com Ícone (Procedures)
```css
.procedure-card {
    /* Mesmas propriedades do card básico */
}

.procedure-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    display: block;
}

.procedure-note {
    font-size: 0.95rem;
    color: #daa520;
    font-weight: 600;
    background: rgba(218, 165, 32, 0.1);
    padding: 10px 15px;
    border-radius: 10px;
}
```

### Badges e Tags

#### Badge Dourado
```css
.credential-item {
    background: rgba(218, 165, 32, 0.1);
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 0.9rem;
    color: #8b6914;
    font-weight: 500;
}
```

#### Badge Discount (Flutuante)
```css
.badge-discount {
    display: inline-block;
    margin-bottom: 30px;
}

.badge-discount img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    filter: drop-shadow(0 10px 30px rgba(218, 165, 32, 0.3));
}

/* Mobile */
@media (max-width: 768px) {
    .badge-discount img {
        width: 180px;
        height: 180px;
        border-radius: 15px;
    }
}
```

### Formulários

#### Input Fields
```css
.form-group input,
.form-group select {
    width: 100%;
    padding: 15px;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #daa520;
}
```

#### Form Container
```css
.form-container {
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

/* Mobile */
@media (max-width: 768px) {
    .form-container {
        padding: 30px 20px;
    }
}
```

### Price Comparison Box
```css
.price-comparison {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto 40px;
}

.price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
}

.old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 1.5rem;
}

.new-price {
    color: #daa520;
    font-size: 2rem;
    font-weight: 700;
}
```

### FAQ Accordion
```css
.faq-item {
    background: white;
    margin-bottom: 20px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-question {
    padding: 25px;
    font-weight: 600;
    color: #2c2c2c;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faq-answer {
    padding: 0 25px 25px;
    color: #6b6b6b;
    line-height: 1.6;
    display: none; /* Toggle com JavaScript */
}
```

### Testimonial Card
```css
.testimonial {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.stars {
    color: #daa520;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.testimonial-text {
    font-style: italic;
    color: #6b6b6b;
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.6;
}

.testimonial-author {
    color: #daa520;
    font-weight: 600;
}
```

---

## 🎬 ANIMAÇÕES

### Fade In (Entrada de Elementos)
```css
.fade-in {
    animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Com Intersection Observer */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Floating (Badges, Imagens)
```css
.floating {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

### Hover Effects

#### Card Hover
```css
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}
```

#### Button Hover
```css
.cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(218, 165, 32, 0.4);
}
```

---

## 📱 SEÇÕES PADRÃO

### Hero Section
```css
.hero {
    padding: 120px 0 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(218, 165, 32, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 2;
}
```

### Doctor/About Section
```css
.doctor-section {
    padding: 80px 0;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
}

.doctor-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.doctor-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}
```

### Statistics Section (Gradiente Roxo)
```css
.statistics-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stats-container {
    display: flex;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
    color: white;
}

.stat-number {
    font-size: 48px;
    font-weight: 700;
}

.stat-label {
    font-size: 18px;
    margin-bottom: 10px;
}
```

### Quote Section (Gradiente Azul)
```css
.quote-section {
    padding: 80px 0;
    text-align: center;
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
}

.quote-section h2 {
    color: white;
    font-size: 32px;
    margin-bottom: 20px;
    font-style: italic;
}

.quote-author {
    color: #ddd;
    font-size: 18px;
}
```

### Footer
```css
.footer {
    background: #2c2c2c;
    color: white;
    padding: 40px 0;
    text-align: center;
}

.contact-item {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: white !important;
}

.contact-item a {
    color: white !important;
    text-decoration: none !important;
}

.legal-info {
    font-size: 0.9rem;
    color: #999;
    line-height: 1.4;
}
```

---

## 📐 RESPONSIVIDADE

### Breakpoints
```css
/* Mobile (padrão começa aqui) */
@media (max-width: 767px) {
    /* Estilos mobile */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    /* Estilos tablet */
}

/* Desktop */
@media (min-width: 1025px) {
    /* Estilos desktop */
}
```

### Grid Mobile
```css
@media (max-width: 768px) {
    .doctor-content,
    .location-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .procedures-grid,
    .testimonials-grid,
    .included-grid {
        grid-template-columns: 1fr;
    }
}
```

### Tipografia Responsiva
```css
/* Usar clamp() para títulos */
font-size: clamp(2rem, 4vw, 3.5rem);

/* Mobile overrides para seções */
@media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.3rem; }
}
```

---

## 🎨 ELEMENTOS VISUAIS

### Imagens

#### Image Styling Padrão
```css
img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}
```

#### Ícones de Procedimentos
```css
/* Usar emojis ou font-awesome */
✨ (sparkles) - Toxina Botulínica
💎 (gem) - Preenchimento Facial
🔥 (fire) - Laser
🌟 (star) - Bioestimulador
🍃 (leaf) - Peelings
👑 (crown) - Banco de Colágeno
```

#### Location Icons
```css
📍 (pin) - Endereço
🅿️ (parking) - Estacionamento
☕ (coffee) - Amenidades
🛋️ (couch) - Ambiente
🕐 (clock) - Horário
```

### Sombras (Shadows)

#### Shadow Suave (Cards)
```css
box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
```

#### Shadow Hover (Cards)
```css
box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
```

#### Shadow Botões
```css
box-shadow: 0 8px 25px rgba(218, 165, 32, 0.3);
```

#### Shadow Header
```css
box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
```

#### Drop Shadow para Badges
```css
filter: drop-shadow(0 10px 30px rgba(218, 165, 32, 0.3));
```

### Border Radius

#### Padrões de Arredondamento
```css
border-radius: 50px;   /* Botões (pill) */
border-radius: 25px;   /* Badges pequenos */
border-radius: 20px;   /* Cards, containers */
border-radius: 15px;   /* Cards menores, FAQ */
border-radius: 10px;   /* Inputs, elementos pequenos */
border-radius: 5px;    /* Elementos discretos */
```

---

## 🔧 JAVASCRIPT NECESSÁRIO

### Intersection Observer (Fade-in)
```javascript
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

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});
```

### Header Scroll Effect
```javascript
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});
```

### FAQ Toggle
```javascript
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('span:last-child');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            // Fechar outros FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-question span:last-child').forEach(i => i.textContent = '+');
            
            // Abrir este FAQ
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});
```

### Smooth Scrolling
```javascript
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
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Ao criar uma nova página, certifique-se de:

#### Estrutura HTML
- [ ] Incluir meta viewport para responsividade
- [ ] Usar estrutura semântica (header, section, footer)
- [ ] Adicionar classes fade-in nos elementos que devem animar
- [ ] Incluir todas as seções necessárias na ordem correta

#### CSS
- [ ] Copiar toda a paleta de cores do Design System
- [ ] Usar font-family system padrão
- [ ] Aplicar espaçamentos de seção (80px desktop, 60px mobile)
- [ ] Implementar grid layouts responsivos
- [ ] Adicionar todas as animações (fade-in, floating, hover)
- [ ] Configurar breakpoints mobile/tablet/desktop

#### Componentes
- [ ] Usar CTAs com estilos corretos (primary/secondary)
- [ ] Aplicar estilos de cards com hover effects
- [ ] Configurar formulários com validação visual
- [ ] Adicionar badges e tags quando necessário
- [ ] Implementar FAQ accordion se aplicável

#### JavaScript
- [ ] Adicionar Intersection Observer para fade-in
- [ ] Implementar scroll effect no header
- [ ] Configurar smooth scrolling para âncoras
- [ ] Adicionar toggle do FAQ se presente
- [ ] Testar todas as interações

#### Responsividade
- [ ] Testar em mobile (< 768px)
- [ ] Testar em tablet (768px - 1024px)
- [ ] Testar em desktop (> 1024px)
- [ ] Verificar imagens responsivas
- [ ] Garantir que textos usem clamp()

#### Acessibilidade
- [ ] Alt text em todas as imagens
- [ ] Labels nos formulários
- [ ] Contraste adequado de cores
- [ ] Navegação por teclado funcionando
- [ ] ARIA labels quando necessário

---

## 🎯 PRINCÍPIOS DE DESIGN

### Consistência Visual
- Sempre usar a mesma paleta de cores
- Manter hierarquia tipográfica consistente
- Aplicar mesmo estilo de cards e componentes
- Usar mesmos valores de border-radius

### Espaçamento Harmonioso
- Seções com 80px de padding (60px mobile)
- Gap de 60px em grids 2 colunas
- Gap de 30px em grids auto-fit
- Margens de 20-40px em elementos internos

### Interatividade Sutil
- Hover effects em todos os elementos clicáveis
- Transições suaves (0.3s ease)
- Transform translateY para lift effect
- Animações sutis e profissionais

### Hierarquia Clara
- Títulos grandes e pesados (700)
- Subtítulos médios (600)
- Corpo de texto legível (400)
- Cores que guiam o olhar (dourado para CTAs)

### Mobile First
- Design pensado primeiro para mobile
- Progressive enhancement para desktop
- Grids que colapsam em 1 coluna
- Touch targets adequados (44px mínimo)

---

## 📋 TEMPLATE BASE

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página - Dra. Dani Goe</title>
    <meta name="description" content="Descrição SEO">
    <style>
        /* INSERIR TODO O CSS DO DESIGN SYSTEM AQUI */
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <img src="logo.png" alt="Logo Dra. Dani Goe" class="logo">
        </div>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <div class="hero-content fade-in">
                <h1>Título Principal</h1>
                <p class="subtitle">Subtítulo explicativo</p>
                <a href="#" class="cta-primary">CALL TO ACTION</a>
            </div>
        </div>
    </section>

    <!-- Mais seções conforme necessário -->

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- Conteúdo do footer -->
            </div>
        </div>
    </footer>

    <script>
        /* INSERIR TODO O JAVASCRIPT NECESSÁRIO AQUI */
    </script>
</body>
</html>
```

---

## 📝 NOTAS FINAIS

Este Design System deve ser seguido rigorosamente em todos os sites criados para a Dra. Dani Goe. A consistência visual fortalece a marca e cria uma experiência profissional e confiável para as pacientes.

**Última atualização:** Outubro 2025  
**Versão:** 1.0  
**Criado por:** Equipe Digital To You