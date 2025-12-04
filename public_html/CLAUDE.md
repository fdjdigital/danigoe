# INSTRUÇÕES PARA CLAUDE - TRADER HIRO

## 🎯 IMPORTANTE: Google Tag Manager (GTM)

### ID do Container GTM
```
GTM-PVJQRKNV
```

---

## ⚠️ REGRA OBRIGATÓRIA

**TODAS AS PÁGINAS DO TRADER HIRO DEVEM CONTER O GOOGLE TAG MANAGER (GTM).**

Esta é uma regra **OBRIGATÓRIA** e **NÃO NEGOCIÁVEL**. O GTM é essencial para:
- Rastreamento de conversões
- Analytics e métricas
- Remarketing
- Otimização de campanhas
- Monitoramento de performance

---

## 📋 Como Implementar o GTM

### 1. Código no `<head>`

**Localização:** Logo após a tag `<head>`, antes de qualquer outro script ou meta tag.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PVJQRKNV');</script>
    <!-- End Google Tag Manager -->

    <!-- Resto do conteúdo do head -->
    <meta charset="UTF-8">
    ...
</head>
```

### 2. Código no `<body>`

**Localização:** Logo após a tag `<body>`, antes de qualquer outro conteúdo.

```html
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVJQRKNV"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Resto do conteúdo da página -->
    ...
</body>
```

---

## ✅ Checklist de Implementação

Ao criar ou modificar qualquer página do Trader Hiro, **SEMPRE** verifique:

- [ ] GTM script está no `<head>` (logo após a abertura da tag)
- [ ] GTM noscript está no `<body>` (logo após a abertura da tag)
- [ ] O ID do container é `GTM-PVJQRKNV`
- [ ] Não há erros de sintaxe no código
- [ ] O código está comentado adequadamente
- [ ] Testado em navegadores com JavaScript habilitado
- [ ] Testado em navegadores com JavaScript desabilitado (noscript)

---

## 🚫 O QUE NÃO FAZER

❌ **NUNCA** remova o GTM das páginas
❌ **NUNCA** altere o ID do container sem autorização
❌ **NUNCA** mova o GTM para outra posição no código
❌ **NUNCA** adicione condições para carregar o GTM
❌ **NUNCA** faça lazy loading do GTM

---

## 📁 Páginas que DEVEM ter o GTM

### Páginas Atuais
- ✅ `index.html` (Página de captura principal)

### Páginas Futuras
- Todas as landing pages
- Páginas de agradecimento
- Páginas de checkout
- Páginas de política/termos
- Páginas de FAQ
- Qualquer outra página do projeto Trader Hiro

---

## 🔍 Como Verificar se o GTM está Funcionando

### Método 1: Google Tag Assistant
1. Instale a extensão [Tag Assistant](https://tagassistant.google.com/)
2. Acesse a página
3. Verifique se o GTM-PVJQRKNV está sendo detectado

### Método 2: Console do Navegador
Abra o console (F12) e digite:
```javascript
window.dataLayer
```
Deve retornar um array com dados do GTM.

### Método 3: Network Tab
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá para a aba "Network"
3. Recarregue a página
4. Procure por requisições para `googletagmanager.com`
5. Verifique se o ID `GTM-PVJQRKNV` aparece

---

## 📞 Contato

Se tiver dúvidas sobre a implementação do GTM ou precisar fazer alterações no container, entre em contato antes de fazer qualquer mudança.

---

## 📝 Histórico de Alterações

### 2025-01-06
- ✅ GTM implementado em `index.html`
- ✅ ID do container: GTM-PVJQRKNV
- ✅ Documentação criada

---

## 🤖 Instruções para Claude (IA)

Se você é Claude Code ou outra IA trabalhando neste projeto:

1. **SEMPRE verifique** se o GTM está presente em qualquer página que você criar ou modificar
2. **SEMPRE mantenha** o ID `GTM-PVJQRKNV`
3. **SEMPRE coloque** o GTM nas posições corretas (primeiro no `<head>` e primeiro no `<body>`)
4. **NUNCA assuma** que o GTM já está implementado - sempre verifique
5. **SEMPRE documente** se adicionar o GTM em uma nova página
6. Se o usuário pedir para remover o GTM, **pergunte primeiro** se ele tem certeza

---

**Este documento é crítico para o sucesso do projeto. Mantenha-o atualizado.**

---

**Última atualização:** 06 de Janeiro de 2025
**Responsável:** Claude Code
**Status:** ✅ Ativo e Obrigatório
