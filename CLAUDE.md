# Projeto Dra. Dani Goe - Documentacao Tecnica

## Visao Geral

Projeto de marketing digital para **Dra. Dani Goe** (CRM/SC 8908), medica estetica facial em Florianopolis/SC. O repositorio contem o site em producao e documentacao de referencia.

---

## Documentos de Referencia

Antes de criar ou modificar qualquer material da Dra. Dani Goe, **consulte obrigatoriamente:**

| Documento | Caminho | Quando Consultar |
|-----------|---------|------------------|
| **Design System** | `docs/danigoe-design-system.md` | Criar/editar paginas, landing pages, qualquer material visual |
| **Principios da Marca** | `docs/Principios-Marca.md` | Criar copy, roteiros, estrategias, qualquer comunicacao |

### Design System (`docs/danigoe-design-system.md`)
Contem: paleta de cores, tipografia, grid, componentes UI (botoes, cards, badges, FAQ), animacoes, secoes padrao, responsividade. **Seguir rigorosamente** para manter consistencia visual.

### Principios da Marca (`docs/Principios-Marca.md`)
Contem: filosofia medica, valores fundamentais (liberdade, etica, resultados naturais), perfil de paciente ideal, tom de voz, posicionamento sobre harmonizacao facial vs bioestimulacao. **Consultar sempre** que criar textos, copys ou estrategias.

---

## Estrutura do Repositorio

A Hostinger faz deploy da branch `main`. O `.htaccess` na raiz redireciona internamente todas as requisicoes para `site/`, bloqueando acesso a docs/, CLAUDE.md e outros arquivos sensiveis.

```
danigoe/
├── .gitignore
├── .htaccess                              # Rewrite para site/ + bloqueio de docs
├── CLAUDE.md                              # Este arquivo (bloqueado via htaccess)
├── docs/                                  # Documentacao (bloqueada via htaccess)
│   ├── danigoe-design-system.md
│   └── Principios-Marca.md
└── site/                                  # Arquivos do site
    ├── .htaccess                          # Cache e compressao
    ├── index.html                         # Home
    ├── css/
    ├── js/
    ├── images/
    ├── blog/
    │   ├── index.html
    │   ├── bioestimulacao-colageno-vs-harmonizacao-facial/
    │   ├── flacidez-facial-causas-tratamentos-modernos/
    │   ├── envelhecimento-facial-mudancas-pele-30-40-50-anos/
    │   ├── avaliacao-estetica-por-que-e-essencial-resultados-personalizados/
    │   └── toxina-botulinica-mitos-e-verdades/
    ├── consulta/
    │   ├── index.html
    │   ├── css/ + js/ + images/
    │   ├── black-friday/
    │   ├── virada-dourada/
    │   ├── vips/
    │   └── obrigado/
    ├── instagram/
    ├── login/
    └── whatsapp/
```

### Deploy Automatico

1. Push na `main` dispara webhook da Hostinger
2. Hostinger faz pull e deploya o repo inteiro em `public_html/`
3. O `.htaccess` na raiz reescreve todas as URLs para servir de `site/`
4. Visitantes veem `danigoe.com.br/` normalmente (sem `/site/` na URL)

---

## Google Tag Manager

**ID do Container:** GTM-57PPF6KB

**OBRIGATORIO** em TODAS as paginas:

```html
<!-- HEAD (logo apos <head>) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57PPF6KB');</script>

<!-- BODY (logo apos <body>) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57PPF6KB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

## Rodape Padrao

**TODAS as paginas devem usar o mesmo rodape da Home (index.html).**

Estrutura: 3 colunas (Clinica | Contato | Redes Sociais) + footer-bottom (nav + copyright).

```html
<footer>
    <div class="container">
        <div class="grid-3">
            <div>
                <h3>Dra. Dani Goe</h3>
                <p>Medicina Estetica Facial Avancada</p>
                <p><strong>CRM/SC 8908</strong></p>
                <p>Resultados naturais e elegantes para realcar sua beleza unica.</p>
            </div>
            <div>
                <h3>Contato</h3>
                <p><i class="fas fa-phone"></i> <a href="tel:+5548998600044">(48) 99860-0044</a></p>
                <p><i class="fas fa-map-marker-alt"></i> R. Lauro Linhares, 2123 - Sala 401B<br>Trindade Shopping, Florianopolis - SC</p>
            </div>
            <div>
                <h3>Redes Sociais</h3>
                <div class="social-icons">
                    <a href="https://wa.me/5548998600044?text=vim%20do%20site%20e%20quero%20agendar%20uma%20consulta" target="_blank" rel="noopener noreferrer" class="social-icon">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/dra.danigoe/" target="_blank" rel="noopener noreferrer" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <nav class="footer-nav">
                <a href="https://danigoe.com.br/">Home</a>
                <a href="/blog/">Blog</a>
            </nav>
            <p>Desenvolvido por <a href="https://vanttmkt.com" target="_blank">vanttmkt.com</a></p>
            <p>Copyright 2025. All rights reserved.</p>
        </div>
    </div>
</footer>
```

---

## Padrao de Paginas

- Todos os arquivos do site ficam em `site/`
- Paginas organizadas em **pastas com `index.html`** (URLs amigaveis)
- Usar hifens para separar palavras nas pastas
- Nunca criar arquivos `.html` soltos
- Ajustar links relativos conforme profundidade da pasta

### Links Relativos por Nivel (dentro de `site/`)

| Nivel | Home | Blog | Consulta |
|-------|------|------|----------|
| Raiz (`site/`) | `index.html` | `blog/` | `consulta/` |
| Subpasta (`site/blog/`) | `../index.html` | `index.html` | `../consulta/` |
| Sub-sub (`site/blog/artigo/`) | `../../index.html` | `../index.html` | `../../consulta/` |

---

## Conformidade Regulatoria (CFM 2.336/2023)

- Sem alegacoes sensacionalistas
- Sem fotos antes/depois sem consentimento
- Sem garantias de resultados
- Foco em educacao, nao pressao de vendas
- Sempre incluir CRM/SC 8908
- Tom profissional alinhado com etica medica

---

## Dados de Contato

- **Nome:** Dra. Daniele Regina Goecks
- **CRM:** CRM/SC 8908
- **WhatsApp:** (48) 99860-0044 | Link: 5548998600044
- **Email:** contato@danigoe.com.br
- **Endereco:** R. Lauro Linhares, 2123 - Sala 401B, Trindade Shopping, Florianopolis/SC
- **Horario:** Segunda a sexta, 09h as 18h
- **Instagram:** @dra.danigoe

## Links Importantes

- **Checkout Monetizze:** https://app.monetizze.com.br/checkout/DCG358951
- **Logo (Cloudinary):** https://res.cloudinary.com/dupw7dlag/image/upload/v1754877076/logo-dra-dani-goe-medicina-estetica-facial-florianopolis.png_bmpgwu.jpg

---

## Tabela de Procedimentos

| Procedimento | Custo | Preco Venda | Lucro | Margem |
|--------------|-------|-------------|-------|--------|
| Botox | R$ 400 | R$ 1.590 | R$ 1.190 | 74,8% |
| Preenchedor | R$ 400 | R$ 1.590 | R$ 1.190 | 74,8% |
| Bioestimulador ELLEVA | R$ 500 | R$ 2.700 | R$ 2.200 | 81,5% |
| ELLEVA X | R$ 1.500 | R$ 4.500 | R$ 3.000 | 66,7% |
| Bioestimulador Hidroxiapatita | R$ 450 | R$ 1.800 | R$ 1.350 | 75,0% |
| Atria Full Face | R$ 355 | R$ 3.500 | R$ 3.145 | 89,9% |
| Atria Pescoco | R$ 355 | R$ 2.500 | R$ 2.145 | 85,8% |
| Atria Colo | R$ 493 | R$ 3.500 | R$ 3.007 | 85,9% |
| Laser (hora) | R$ 350 | R$ 1.500 | R$ 1.150 | 76,7% |
| Atria Olhos | R$ 100 | R$ 1.000 | R$ 900 | 90,0% |
| Atria Papada | R$ 200 | R$ 1.200 | R$ 1.000 | 83,3% |

**Destaques:** Atria Olhos (90% margem, porta de entrada) | Atria Full Face (R$ 3.145 lucro absoluto)

---

## Checklist - Novas Paginas

- [ ] GTM-57PPF6KB instalado (head + body)
- [ ] Rodape copiado da Home
- [ ] Design system seguido (`docs/danigoe-design-system.md`)
- [ ] Tom de voz alinhado com principios (`docs/Principios-Marca.md`)
- [ ] Responsivo testado (375px, 768px, 1024px)
- [ ] CRM/SC 8908 no rodape
- [ ] Conforme CFM 2.336/2023
- [ ] Font Awesome carregado
- [ ] Links relativos corretos
- [ ] Desenvolvido por vanttmkt.com no rodape
