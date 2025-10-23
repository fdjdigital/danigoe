# CLAUDE.md

Este arquivo fornece orientações para o Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Visão Geral do Projeto

Este é um projeto de marketing digital para **Dra. Dani Goe**, profissional de medicina estética (CRM/SC 8908) especializada em estética facial em Florianópolis, Brasil. O repositório contém landing pages, materiais de marketing e conteúdo para promover consultas e procedimentos estéticos.

## Estrutura do Projeto

```
danigoe-main/
├── Páginas/           # Landing pages e páginas promocionais
│   ├── HTML/          # Landing pages HTML autônomas
│   └── Copy/          # Copywriting e textos de marketing
├── Texto/             # Conteúdo e documentação
│   └── danigoe-design-system.md  # Especificação completa do design system
├── Recursos/          # Planejamento estratégico e documentos de pesquisa
│   ├── plano_implementacao_dra_dani.md  # Plano de implementação 6 meses
│   └── Diversos documentos de pesquisa e persona
├── Imagens/           # Assets de imagens
├── Backup/            # Backup da implementação anterior do site
│   ├── css/           # Estilos baseados em Elementor
│   ├── js/            # Bibliotecas JavaScript
│   └── index.html     # Versão anterior do site
├── Arquivos/          # Arquivos gerais
└── Documentos/        # Documentação
```

## Google Tag Manager - OBRIGATÓRIO

**IMPORTANTE:** Todas as páginas HTML devem incluir o Google Tag Manager com o ID: **GTM-57PPF6KB**

### Implementação do GTM

**1. Script no `<head>` (logo após a tag de abertura):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-57PPF6KB');</script>
    <!-- End Google Tag Manager -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- resto do head -->
</head>
```

**2. Noscript no `<body>` (logo após a tag de abertura):**

```html
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57PPF6KB"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Header -->
    <header class="header">
        <!-- conteúdo do header -->
    </header>
    <!-- resto do body -->
</body>
```

### Checklist GTM

Ao criar ou modificar qualquer página HTML:
- [ ] Script GTM incluído no `<head>` logo após a tag de abertura
- [ ] Noscript GTM incluído no `<body>` logo após a tag de abertura
- [ ] ID correto: `GTM-57PPF6KB`
- [ ] Ambos os códigos (script e noscript) presentes

## Identidade Visual e Design System

O projeto segue um design system abrangente documentado em `Texto/danigoe-design-system.md`. **Sempre consulte este arquivo antes de criar ou modificar páginas.**

A página de referência principal é: `Páginas/HTML/Página 50% off Dani Goe.html`

### Paleta de Cores

**Cores Primárias:**
```css
--dourado-principal: #daa520;      /* Dourado - CTAs, destaques */
--dourado-escuro: #b8860b;         /* Dourado escuro - Hover, gradientes */
--dourado-light: #8b6914;          /* Dourado light - Textos em badges */
```

**Cores de Texto:**
```css
--texto-primario: #2c2c2c;         /* Texto principal - Títulos, corpo */
--texto-secundario: #6b6b6b;       /* Texto secundário - Descrições */
--texto-discreto: #999;            /* Texto discreto - Legal, placeholders */
```

**Cores de Background:**
```css
--background-principal: #faf9f7;   /* Background principal da página */
--background-secundario: #f5f3f0;  /* Background secundário */
--branco: #ffffff;                 /* Branco puro - Cards, formulários */
--divisor: #f0f0f0;               /* Linhas divisórias, borders */
```

**Cores de Feedback:**
```css
--sucesso: #27ae60;                /* Verde - Valor revertido, confirmações */
--urgencia: #e74c3c;               /* Vermelho - Urgência, alertas */
```

**Gradientes Principais:**
```css
/* Background da página */
background: linear-gradient(135deg, #faf9f7 0%, #f5f3f0 100%);

/* Gradiente CTA dourado */
background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);

/* Overlay dourado sutil no hero */
background: radial-gradient(circle at 30% 20%, rgba(218, 165, 32, 0.1) 0%, transparent 50%);
```

### Tipografia

**Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

**Hierarquia de Títulos:**

```css
/* H1 - Título Hero */
h1 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #2c2c2c;
    line-height: 1.2;
    margin-bottom: 20px;
}

/* H2 - Títulos de Seção */
h2 {
    font-size: 2.5rem;  /* Desktop */
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 40px;
    text-align: center;
}

@media (max-width: 768px) {
    h2 { font-size: 1.8rem; }
}

/* H3 - Títulos de Cards */
h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c2c2c;
    margin-bottom: 15px;
}
```

**Corpo de Texto:**
```css
/* Parágrafo principal */
p {
    font-size: 1.1rem;
    color: #6b6b6b;
    line-height: 1.8;
    margin-bottom: 20px;
}

/* Subtitle */
.subtitle {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    color: #6b6b6b;
    margin-bottom: 40px;
}
```

### Layout e Espaçamentos

**Container:**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Espaçamentos de Seções:**
```css
/* Desktop */
section {
    padding: 80px 0;
}

/* Mobile */
@media (max-width: 768px) {
    section {
        padding: 60px 0;
    }
}
```

**Grid Layouts:**
```css
/* Grid 2 colunas (Doctor, Location) */
.doctor-content,
.location-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

/* Grid auto-fit (Procedures, Testimonials) */
.procedures-grid,
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

/* Mobile - Colapsa para 1 coluna */
@media (max-width: 768px) {
    .doctor-content,
    .location-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}
```

### Componentes UI

**Header Fixo:**
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

.logo {
    height: 60px;
    width: auto;
}
```

**Botões CTA:**
```css
/* CTA Primário (Dourado) */
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
}

.cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(218, 165, 32, 0.4);
}

/* CTA Secundário (Outline) */
.cta-secondary {
    background: transparent;
    color: #daa520;
    border: 2px solid #daa520;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-secondary:hover {
    background: #daa520;
    color: white;
}
```

**Cards:**
```css
.card,
.procedure-card,
.testimonial {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.card:hover,
.procedure-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(218, 165, 32, 0.2);
}
```

**Badges de Desconto:**
```css
.badge-discount img,
.guarantee-badges img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    filter: drop-shadow(0 10px 30px rgba(218, 165, 32, 0.3));
}

/* Mobile */
@media (max-width: 768px) {
    .badge-discount img,
    .guarantee-badges img {
        width: 180px;
        height: 180px;
        border-radius: 15px;
    }
}
```

**Badges de Credenciais:**
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

**Comparação de Preços:**
```css
.price-comparison {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto 40px;
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

**FAQ Accordion:**
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
}
```

### Animações

**Fade In (Entrada de Elementos):**
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
```

**Floating (Badges):**
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

### JavaScript Funcionalidades

**Intersection Observer (Fade-in ao Scroll):**
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

**FAQ Toggle:**
```javascript
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('span:last-child');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            // Fecha outros FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-question span:last-child').forEach(i => i.textContent = '+');

            // Abre este FAQ
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});
```

**Header Scroll Effect:**
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

**Smooth Scrolling:**
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

## Estrutura de Seções das Landing Pages

Todas as landing pages devem seguir esta estrutura padrão:

1. **Header Fixo** - Logo centralizada, fundo branco translúcido com blur
2. **Hero Section** - Badge de desconto flutuante, título H1, subtítulo, CTA primário
3. **Doctor Section** - Grid 2 colunas (imagem + texto sobre Dra. Dani), badges de credenciais
4. **Offer Section** - Comparação de preços, badges de garantia flutuantes
5. **Procedures Section** - Grid de cards com ícones de emojis, descrição e nota sobre crédito
6. **Included Section** - Grid de itens incluídos na avaliação
7. **Testimonials** - Grid de depoimentos com estrelas e citações
8. **Location Section** - Grid 2 colunas (info + imagem), detalhes de localização com ícones
9. **Form/CTA Section** - Texto de urgência, container do formulário, botões CTA
10. **FAQ Section** - Accordion com perguntas frequentes
11. **Footer** - Fundo escuro (#2c2c2c), informações de contato, CTA final, legal info

## Assets e Imagens

**CDN de Imagens:** Cloudinary (`res.cloudinary.com/dupw7dlag/`)

**Imagens Principais:**
- Logo: `logo-dra-dani-goe-medicina-estetica-facial-florianopolis.png`
- Badge 50%: `dra-dani-goe-desconto-50-porcento-consulta-estetica-florianopolis.png`
- Dra. Dani consultório: `dra-dani-goe-medica-estetica-facial-consultorio-florianopolis.jpg`
- Dra. Dani atendimento: `dra-dani-goe-atendimento-avaliacao-estetica-crm-sc-8908.jpg`
- Badges de garantia: `dra-dani-goe-garantia-valor-revertido-procedimentos-esteticos.png`
- Badge vagas limitadas: `dra-dani-goe-vagas-limitadas-consulta-estetica-trindade-shopping.png`
- Badge tempo limitado: `dra-dani-goe-oferta-tempo-limitado-medicina-estetica-florianopolis.png`

**Ícones de Procedimentos (Emojis):**
- ✨ Toxina Botulínica (Botox)
- 💎 Preenchimento Facial
- 🔥 Laser de Rejuvenescimento
- 🌟 Bioestimulador de Colágeno
- 🍃 Peelings Químicos
- 👑 Banco de Colágeno

**Ícones de Localização:**
- 📍 Endereço
- 🅿️ Estacionamento
- ☕ Amenidades
- 🛋️ Ambiente
- 🕐 Horário

## Diretrizes de Desenvolvimento

### Criando Novas Landing Pages

1. **Use a página de referência** como template: `Páginas/HTML/Página 50% off Dani Goe.html`
2. **OBRIGATÓRIO: Inclua o Google Tag Manager GTM-57PPF6KB** (script no head + noscript no body)
3. **Estrutura autônoma** - Todas as páginas são arquivos HTML únicos com CSS e JS inline
4. **Siga o design system rigorosamente** - cores, tipografia, espaçamentos, animações
5. **Inclua todas as seções padrão** listadas acima
6. **Meta tags** - Sempre inclua título e descrição otimizados para SEO

### Responsividade

**Breakpoint Principal:** `768px`

```css
/* Mobile First - Ajustes para desktop */
@media (max-width: 768px) {
    /* Grids colapsam para 1 coluna */
    .doctor-content,
    .location-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    /* Títulos menores */
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }

    /* Badges menores */
    .badge-discount img,
    .guarantee-badges img {
        width: 180px;
        height: 180px;
    }

    /* Padding reduzido */
    section { padding: 60px 0; }
    .form-container { padding: 30px 20px; }
}
```

### Conformidade Regulatória

**CRÍTICO**: Todo conteúdo deve estar em conformidade com a resolução CFM 2.336/2023:

- ❌ Sem alegações sensacionalistas
- ❌ Sem fotos antes/depois sem consentimento
- ❌ Sem garantias de resultados
- ✅ Foco em educação, não pressão de vendas
- ✅ Tom profissional alinhado com ética médica
- ✅ Sempre incluir CRM/SC 8908 no rodapé
- ✅ Aviso de conformidade com CFM no footer

## Contexto de Negócio

### Plano de Transformação Digital (6 Meses)

Referência: `Recursos/plano_implementacao_dra_dani.md`

**Status Atual:**
- Faturamento mensal: R$ 100k
- Seguidores Instagram: 10.700
- Site básico com potencial de otimização

**Iniciativas Estratégicas Chave:**
1. **Mês 1**: Landing pages para oferta de consulta com 50% desconto
2. **Mês 2**: Funis especializados (Laser, Banco de Colágeno)
3. **Mês 3**: Diversificação de tráfego (Meta Ads, Google Ads)
4. **Mês 4**: Lançamento de newsletter premium
5. **Mês 5**: Implementação de CRM e treinamento de equipe
6. **Mês 6**: Sistematização para escala e transição espiritual

### Valores da Marca

- **Resultados naturais** sobre aparência artificial
- **Consulta ética** sem pressão de vendas
- **Liberdade profissional** e autonomia
- **Abordagem holística** para beleza e bem-estar
- Preparação para futura transição para foco em espiritualidade

### Público-Alvo

**Primário:** Mulheres 35-65 anos, renda média-alta, Florianópolis/SC

Características:
- Buscam realce estético natural
- Valorizam autenticidade e profissionalismo
- Interessadas em envelhecimento consciente
- Preferem atendimento personalizado

## Tarefas Comuns

### Criar Nova Landing Page

```bash
# Referenciar página existente
cp "Páginas/HTML/Página 50% off Dani Goe.html" "Páginas/HTML/nova-pagina.html"

# Editar mantendo design system e GTM
# Consultar: Texto/danigoe-design-system.md
```

### Nomenclatura de Arquivos

- **Páginas HTML:** Nomes descritivos em português com espaços (ex: "Página de Captura Dra. Dani Goe.html")
- **Documentação:** kebab-case para docs técnicos, descritivo para conteúdo
- **Imagens:** Nomes descritivos com palavras-chave SEO no alt text

## Checklist de Qualidade

Antes de finalizar qualquer página:

- [ ] **Google Tag Manager GTM-57PPF6KB incluído (script + noscript)**
- [ ] Todas as cores e tipografia do design system aplicadas corretamente
- [ ] Responsivo testado (375px, 768px, 1024px, 1440px)
- [ ] Todas as animações funcionando (fade-in, floating, hover)
- [ ] FAQ accordion expandindo/colapsando corretamente
- [ ] Smooth scrolling para âncoras funcionando
- [ ] Efeito de scroll no header ativo
- [ ] Todos os links funcionais (ou marcados com `#` para integração)
- [ ] Rodapé legal completo com CRM/SC 8908
- [ ] Conforme com regulamentação CFM
- [ ] Meta tags de título e descrição presentes
- [ ] Alt text em todas as imagens
- [ ] Testado no Chrome, Safari, Firefox
- [ ] Performance: página carrega em menos de 3 segundos

## Informações de Contato

**Dra. Daniele Regina Goecks**
- **CRM/SC:** 8908
- **WhatsApp:** (48) 99200-9944
- **E-mail:** contato@danigoe.com.br
- **Endereço:** R. Lauro Linhares, 2123 - Sala 401, Bloco B, Trindade Shopping, Florianópolis/SC - CEP: 88036-003
- **Horário:** Segunda a sexta, 09h às 18h

## Notas Importantes

- Este é um **projeto de marketing**, não uma aplicação de software - sem ferramentas de build ou package managers
- Todas as páginas são **arquivos HTML autônomos** com CSS/JS inline
- **Todas as páginas devem ter Google Tag Manager GTM-57PPF6KB**
- Foco em **otimização de conversão** mantendo ética médica
- O design system é **prescritivo** - siga exatamente para consistência de marca
- Trabalho futuro incluirá **conteúdo espiritual/holístico** conforme evolução do negócio
- **Sempre consulte** `Texto/danigoe-design-system.md` e `Páginas/HTML/Página 50% off Dani Goe.html` como referências principais
