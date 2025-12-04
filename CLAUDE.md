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

## Rodapé Padrão (Footer)

### ⚠️ REGRA OBRIGATÓRIA

**TODAS AS PÁGINAS DO SITE DEVEM TER O MESMO RODAPÉ DA PÁGINA HOME (index.html).**

Esta é uma regra **OBRIGATÓRIA** para manter a padronização visual e de informações em todo o site.

### Estrutura do Rodapé

O rodapé padrão possui a seguinte estrutura:

#### 1. Três Colunas Principais:
- **Coluna 1 - Informações da Clínica:** Nome, especialidade, CRM e descrição
- **Coluna 2 - Contato:** Telefone e endereço completo
- **Coluna 3 - Redes Sociais:** Ícones do WhatsApp e Instagram

#### 2. Parte Inferior (footer-bottom):
- Links de navegação (Home e Blog)
- Copyright

### Código do Rodapé Padrão

```html
<!-- FOOTER -->
<footer>
    <div class="container">
        <div class="grid-3">
            <div>
                <h3>Dra. Dani Goe</h3>
                <p>Medicina Estética Facial Avançada</p>
                <p><strong>CRM/SC 8908</strong></p>
                <p>Resultados naturais e elegantes para realçar sua beleza única.</p>
            </div>

            <div>
                <h3>Contato</h3>
                <p><i class="fas fa-phone"></i> <a href="tel:+5548998600044">(48) 99860-0044</a></p>
                <p><i class="fas fa-map-marker-alt"></i> R. Lauro Linhares, 2123 - Sala 401B<br>Trindade Shopping, Florianópolis - SC</p>
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
            <p>Copyright © 2025. All rights reserved.</p>
        </div>
    </div>
</footer>
```

### CSS Necessário para o Rodapé

O rodapé utiliza os seguintes estilos CSS (já incluídos no index.html):

```css
/* FOOTER */
footer {
    background: var(--texto-primario);
    color: white;
    padding: 60px 0 40px;
}

footer h3 {
    color: white;
    margin-bottom: 20px;
}

footer p {
    color: rgba(255, 255, 255, 0.8);
}

footer a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

footer a:hover {
    color: var(--dourado-principal);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 40px;
    padding-top: 30px;
    text-align: center;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.social-icon {
    background: var(--dourado-principal);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.1rem;
}

.social-icon:hover {
    background: var(--dourado-escuro);
    transform: scale(1.1);
}
```

### ✅ Checklist ao Criar Novas Páginas

Ao criar qualquer nova página do site Dra. Dani Goe, **SEMPRE** verifique:

- [ ] O rodapé completo foi copiado da página Home
- [ ] Todos os links estão funcionando corretamente
- [ ] Os ícones do Font Awesome estão carregando (WhatsApp, Instagram, Phone, Location)
- [ ] O CSS do rodapé está incluído ou referenciado
- [ ] As classes CSS necessárias estão presentes (.container, .grid-3, .footer-bottom, .social-icons, .social-icon)
- [ ] O copyright está atualizado com o ano corrente
- [ ] Os links de navegação (Home e Blog) estão corretos

### 🚫 O QUE NÃO FAZER

❌ **NUNCA** altere a estrutura do rodapé sem atualizar todas as páginas
❌ **NUNCA** remova informações do rodapé (telefone, endereço, redes sociais)
❌ **NUNCA** crie um rodapé diferente para páginas específicas
❌ **NUNCA** altere os links de contato sem autorização

### 📝 Observações Importantes

1. **Font Awesome:** O rodapé utiliza ícones do Font Awesome. Certifique-se de que a biblioteca está carregada no `<head>` da página:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

2. **Variáveis CSS:** O rodapé utiliza variáveis CSS definidas no `:root`:
   - `--texto-primario`
   - `--dourado-principal`
   - `--dourado-escuro`

3. **Grid Responsivo:** A classe `.grid-3` cria um layout de 3 colunas que se adapta automaticamente em dispositivos móveis.

---

## Estrutura do Projeto

### ⚠️ PADRÃO DE ORGANIZAÇÃO

**TODAS AS PÁGINAS DO SITE DEVEM ESTAR ORGANIZADAS EM PASTAS COM `index.html`**

Esta é a estrutura padrão para URLs amigáveis e melhor organização. Cada página deve estar dentro de sua própria pasta, sempre com o nome `index.html`.

### Estrutura Atual

```
danigoe/
├── public_html/
│   ├── index.html                          # Página principal (Home)
│   ├── blog/
│   │   ├── index.html                      # Lista de artigos do blog
│   │   ├── bioestimulacao-colageno-vs-harmonizacao-facial/
│   │   │   └── index.html                  # Artigo sobre bioestimulação
│   │   └── flacidez-facial-causas-tratamentos-modernos/
│   │       └── index.html                  # Artigo sobre flacidez facial
│   └── consulta/
│       ├── index.html                      # Página de consulta
│       ├── black-friday/
│       │   └── index.html                  # Ofertas Black Friday
│       ├── virada-dourada/
│       │   └── index.html                  # Ofertas Virada Dourada
│       ├── vips/
│       │   └── index.html                  # Formulário para clientes VIP
│       └── obrigado/
│           └── index.html                  # Página de agradecimento
```

### URLs Resultantes

Com esta estrutura, as URLs ficam limpas e amigáveis:

- `https://danigoe.com.br/` → Home
- `https://danigoe.com.br/blog/` → Lista de artigos
- `https://danigoe.com.br/blog/bioestimulacao-colageno-vs-harmonizacao-facial/` → Artigo
- `https://danigoe.com.br/blog/flacidez-facial-causas-tratamentos-modernos/` → Artigo
- `https://danigoe.com.br/consulta/` → Página de consulta
- `https://danigoe.com.br/consulta/black-friday/` → Black Friday
- `https://danigoe.com.br/consulta/vips/` → Clientes VIP
- `https://danigoe.com.br/consulta/obrigado/` → Agradecimento

### Criando Novas Páginas

Ao criar uma nova página, siga este padrão:

1. **Crie uma pasta com o nome da página** (use hífens para separar palavras)
2. **Dentro da pasta, crie um arquivo `index.html`**
3. **Ajuste os links relativos** de acordo com a profundidade da pasta

**Exemplo:** Para criar uma página sobre "Preenchimento Labial":

```bash
mkdir -p blog/preenchimento-labial
# Criar o arquivo index.html dentro desta pasta
```

URL resultante: `https://danigoe.com.br/blog/preenchimento-labial/`

### Links Relativos

Dependendo da profundidade da pasta, ajuste os links:

#### Páginas no nível raiz (`/index.html`):
```html
<a href="blog/">Blog</a>
<a href="consulta/">Consulta</a>
```

#### Páginas em subpasta (`/blog/index.html`):
```html
<a href="../index.html">Home</a>
<a href="../consulta/">Consulta</a>
```

#### Páginas em subpasta de subpasta (`/blog/artigo/index.html`):
```html
<a href="../../index.html">Home</a>
<a href="../index.html">Blog</a>
<a href="../../consulta/">Consulta</a>
```

### 🚫 O QUE NÃO FAZER

❌ **NUNCA** crie arquivos `.html` soltos (ex: `artigo.html`)
❌ **NUNCA** misture estruturas (pastas com index.html + arquivos .html soltos)
❌ **NUNCA** use espaços ou caracteres especiais nos nomes de pastas
✅ **SEMPRE** use pastas com `index.html` para páginas novas
✅ **SEMPRE** use hífens (`-`) para separar palavras nas pastas
✅ **SEMPRE** teste os links relativos após criar uma nova página

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

*Última atualização: 2025-12-04*
