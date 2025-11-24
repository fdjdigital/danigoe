# Projeto Dra. Dani Goe - Documentação Técnica

## Google Tag Manager (GTM)

O projeto utiliza o Google Tag Manager para rastreamento e análise de páginas.

### Configuração do GTM

**ID do Container:** GTM-57PPF6KB

### Implementação

Todas as páginas do site possuem o código GTM instalado em duas posições:

#### 1. Código no `<head>`
Instalado logo após a abertura da tag `<head>`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57PPF6KB');</script>
<!-- End Google Tag Manager -->
```

#### 2. Código no `<body>` (noscript)
Instalado logo após a abertura da tag `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57PPF6KB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### Páginas com GTM Instalado

Todas as páginas do site possuem o GTM instalado:

1. `/consulta/black-friday/index.html` - Página de ofertas Black Friday
2. `/consulta/blog/index.html` - Lista de artigos do blog
3. `/consulta/blog/bioestimulacao-colageno-vs-harmonizacao-facial.html` - Artigo sobre bioestimulação
4. `/consulta/vips/index.html` - Formulário para clientes VIP
5. `/consulta/obrigado/index.html` - Página de confirmação de agendamento

### Instruções para Novas Páginas

Sempre que criar uma nova página HTML no projeto, certifique-se de adicionar ambos os códigos GTM:
- O código JavaScript no início do `<head>`
- O código noscript no início do `<body>`

---

## Estrutura do Projeto

```
danigoe/
├── consulta/
│   ├── black-friday/
│   │   └── index.html
│   ├── blog/
│   │   ├── index.html
│   │   └── bioestimulacao-colageno-vs-harmonizacao-facial.html
│   ├── vips/
│   │   └── index.html
│   ├── obrigado/
│   │   └── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── Recursos/
├── Texto/
└── Páginas/
```

## Informações de Contato

- **WhatsApp:** (48) 99860-0044
- **Número formatado para links:** 5548998600044
- **Email:** contato@danigoe.com.br
- **Endereço:** Trindade Shopping - Sala 401, Bloco B - Florianópolis/SC

## Links Importantes

- **Checkout Monetizze:** https://app.monetizze.com.br/checkout/DCG358951
- **Logo (Cloudinary):** https://res.cloudinary.com/dupw7dlag/image/upload/v1754877076/logo-dra-dani-goe-medicina-estetica-facial-florianopolis.png_bmpgwu.jpg

## Dados Profissionais

- **Nome:** Dra. Daniele Regina Goecks
- **CRM:** CRM/SC 8908
- **Especialidade:** Medicina Estética Facial Avançada

---

*Última atualização: 2025-11-24*
