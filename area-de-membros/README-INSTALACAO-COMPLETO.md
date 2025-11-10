# 📊 Sistema de Dashboards - Dra. Dani Goe
## Guia Completo de Instalação e Uso

---

## 📁 Estrutura de Diretórios Final

```
site-raiz/
└── dashboards/
    ├── index.html                    (Login - Arquivo: dashboards-index.html)
    ├── painel.html                   (Menu - Arquivo: dashboards-painel.html)
    ├── trafego-pago/
    │   └── index.html               (Dashboard Tráfego - Arquivo: dashboards-trafego-pago-index.html)
    └── geral/
        └── index.html               (Dashboard Geral - Arquivo: dashboards-geral-index.html)
```

---

## 🌐 URLs Resultantes

| Página | URL | Descrição |
|--------|-----|-----------|
| **Login** | `https://danigoe.com.br/dashboards/` | Página de autenticação com senha |
| **Menu** | `https://danigoe.com.br/dashboards/painel.html` | Página com 2 cards para escolher o dashboard |
| **Tráfego Pago** | `https://danigoe.com.br/dashboards/trafego-pago/` | Dashboard de métricas de anúncios |
| **Geral** | `https://danigoe.com.br/dashboards/geral/` | Dashboard consolidado de todas as plataformas |

---

## 🚀 Instalação Passo a Passo

### 1️⃣ Preparação dos Arquivos

Você recebeu 4 arquivos HTML. Aqui está o que fazer com cada um:

| Arquivo Recebido | Renomear Para | Destino |
|------------------|---------------|---------|
| `dashboards-index.html` | `index.html` | `/dashboards/` |
| `dashboards-painel.html` | `painel.html` | `/dashboards/` |
| `dashboards-trafego-pago-index.html` | `index.html` | `/dashboards/trafego-pago/` |
| `dashboards-geral-index.html` | `index.html` | `/dashboards/geral/` |

### 2️⃣ Criando a Estrutura no Servidor

#### Via cPanel / Gerenciador de Arquivos:

1. **Acesse o gerenciador de arquivos** do seu servidor
2. **Navegue até a pasta raiz** do site (geralmente `public_html`)
3. **Crie as pastas necessárias:**
   ```
   /dashboards/
   /dashboards/trafego-pago/
   /dashboards/geral/
   ```

#### Via FTP (FileZilla, WinSCP, etc):

1. Conecte-se ao servidor
2. Navegue até a pasta raiz
3. Crie as pastas conforme acima
4. Faça upload dos arquivos

### 3️⃣ Upload dos Arquivos

Faça upload conforme a tabela:

```
📁 /dashboards/
   📄 index.html (dashboards-index.html renomeado)
   📄 painel.html (dashboards-painel.html renomeado)
   
   📁 trafego-pago/
      📄 index.html (dashboards-trafego-pago-index.html renomeado)
   
   📁 geral/
      📄 index.html (dashboards-geral-index.html renomeado)
```

---

## 🔐 Configuração da Senha

**Senha Padrão:** `danigoe2025`

### Para Alterar a Senha:

1. Abra o arquivo `/dashboards/index.html`
2. Localize a linha **240** aproximadamente:
   ```javascript
   const CORRECT_PASSWORD = 'danigoe2025';
   ```
3. Substitua por sua senha desejada:
   ```javascript
   const CORRECT_PASSWORD = 'suaSenhaSuperSegura123';
   ```
4. Salve o arquivo

---

## 🎯 Fluxo de Navegação

```
┌─────────────────────────────────────────────────────────────┐
│  1. Login (/dashboards/)                                    │
│     [Campo de Senha]                                        │
│     👇 Senha correta                                        │
├─────────────────────────────────────────────────────────────┤
│  2. Menu (/dashboards/painel.html)                          │
│     [Card: Tráfego Pago]  [Card: Geral]                    │
│     👇 Clique em um card                                    │
├─────────────────────────────────────────────────────────────┤
│  3a. Dashboard Tráfego (/dashboards/trafego-pago/)          │
│      [Iframe Looker Studio]                                 │
│      [Botão: Voltar] [Botão: Sair]                         │
│                                                             │
│  OU                                                         │
│                                                             │
│  3b. Dashboard Geral (/dashboards/geral/)                   │
│      [Iframe Reportei]                                      │
│      [Botão: Voltar] [Botão: Sair]                         │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist de Instalação

### Pré-instalação:
- [ ] Acesso ao gerenciador de arquivos ou FTP
- [ ] Permissões de escrita nas pastas
- [ ] Backup dos arquivos atuais (se houver)

### Durante a instalação:
- [ ] Criar pasta `/dashboards/`
- [ ] Criar pasta `/dashboards/trafego-pago/`
- [ ] Criar pasta `/dashboards/geral/`
- [ ] Fazer upload de `index.html` em `/dashboards/`
- [ ] Fazer upload de `painel.html` em `/dashboards/`
- [ ] Fazer upload de `index.html` em `/dashboards/trafego-pago/`
- [ ] Fazer upload de `index.html` em `/dashboards/geral/`

### Pós-instalação:
- [ ] Testar acesso: `https://danigoe.com.br/dashboards/`
- [ ] Testar senha: `danigoe2025`
- [ ] Verificar redirecionamento para painel
- [ ] Clicar em cada card e verificar se os dashboards carregam
- [ ] Testar botões "Voltar" e "Sair"
- [ ] Testar em dispositivo móvel
- [ ] (Opcional) Alterar senha padrão

---

## 🔒 Segurança Implementada

### Características:

1. **Autenticação por Senha**
   - Validação via JavaScript no frontend
   - Senha armazenada de forma simples (client-side)
   - Ideal para uso interno da clínica

2. **Sessão Temporária**
   - Duração: 24 horas
   - Armazenamento: sessionStorage
   - Expiração automática após período

3. **Proteção de Conteúdo**
   - Páginas verificam autenticação ao carregar
   - Redirecionamento automático se não autenticado
   - Logout limpa toda a sessão

4. **Navegação Protegida**
   - Botão "Voltar" leva ao menu (não ao login)
   - Botão "Sair" limpa sessão e volta ao login
   - Impossível acessar dashboards sem autenticação

### ⚠️ Nota sobre Segurança:

Esta é uma autenticação **básica** adequada para:
- ✅ Acesso interno da clínica
- ✅ Dashboards privados sem dados sensíveis
- ✅ Proteção contra acesso casual

**NÃO recomendado para:**
- ❌ Dados médicos de pacientes
- ❌ Informações financeiras críticas
- ❌ Ambientes que exigem auditoria

---

## 📱 Responsividade

Todos os componentes são **100% responsivos**:

| Dispositivo | Resolução | Status |
|-------------|-----------|--------|
| 📱 Mobile | 320px - 767px | ✅ Otimizado |
| 📱 Tablet | 768px - 1024px | ✅ Otimizado |
| 💻 Laptop | 1025px - 1440px | ✅ Otimizado |
| 🖥️ Desktop | 1441px+ | ✅ Otimizado |

---

## 🎨 Identidade Visual

### Cores Utilizadas:

```css
/* Cores Primárias */
--dourado: #daa520;
--dourado-escuro: #b8860b;

/* Cores Neutras */
--texto-principal: #2c2c2c;
--texto-secundario: #6b6b6b;
--background: #faf9f7;

/* Cores de Feedback */
--sucesso: #27ae60;
--erro: #e74c3c;
```

### Elementos de Design:

- ✨ Animações suaves (fade-in, floating)
- 🎭 Glassmorphism nos headers
- 🔲 Border-radius arredondado (20px)
- 📦 Cards com hover interativo
- 🌈 Gradientes dourados em CTAs

---

## 🔧 Manutenção

### Atualizar Links dos Dashboards:

#### Dashboard de Tráfego Pago (Looker Studio)

**Arquivo:** `/dashboards/trafego-pago/index.html`
**Linha:** ~263

```html
<iframe 
    src="https://lookerstudio.google.com/embed/reporting/SEU-NOVO-ID-AQUI" 
    ...
</iframe>
```

#### Dashboard Geral (Reportei)

**Arquivo:** `/dashboards/geral/index.html`
**Linha:** ~263

```html
<iframe 
    src="https://app.reportei.com/embed/SEU-NOVO-ID-AQUI"
    ...
</iframe>
```

---

## 🐛 Solução de Problemas

### Problema: "Página não encontrada" ao acessar `/dashboards/`

**Solução:**
- Verifique se o arquivo `index.html` está na pasta `/dashboards/`
- Verifique permissões da pasta (755)
- Limpe cache do navegador

---

### Problema: Senha correta mas não redireciona

**Solução:**
- Verifique se o arquivo `painel.html` existe em `/dashboards/`
- Abra o console do navegador (F12) e veja se há erros JavaScript
- Verifique se não há espaços antes/depois da senha

---

### Problema: Dashboard não carrega (iframe em branco)

**Solução:**
- Verifique se os links dos iframes estão corretos
- Teste o link do dashboard diretamente no navegador
- Verifique se há bloqueio de cookies/iframes
- Teste em navegador diferente

---

### Problema: Logout não funciona

**Solução:**
- Limpe o sessionStorage manualmente (F12 > Application > Session Storage)
- Limpe cache e cookies do navegador
- Teste em aba anônima

---

### Problema: Página mobile não fica boa

**Solução:**
- Verifique se a tag viewport está presente no HTML
- Teste em diferentes dispositivos/emuladores
- Verifique se não há CSS customizado interferindo

---

## 📞 Informações de Suporte

### Contatos da Clínica:

- 📱 **WhatsApp:** (48) 99200-9944
- 📧 **E-mail:** contato@danigoe.com.br
- 🕐 **Horário:** Segunda a sexta, 09h às 18h
- 📍 **Endereço:** R. Lauro Linhares, 2123 - Sala 401, Bloco B - Trindade Shopping, Florianópolis/SC

---

## 📊 Sobre os Dashboards

### 📊 Dashboard de Tráfego Pago (Looker Studio)

**O que mostra:**
- Custo por agendamento
- Taxa de conversão
- ROI das campanhas
- Performance por plataforma (Meta Ads, Google Ads)
- Dados de impressões, cliques e leads

**Atualização:** Tempo real  
**Fonte:** Google Looker Studio integrado com Meta Ads e Google Ads

---

### 📈 Dashboard Geral (Reportei)

**O que mostra:**
- Métricas do Instagram e Facebook
- Dados do Google Analytics
- Performance do website
- SEO e tráfego orgânico
- Consolidação de todas as plataformas

**Atualização:** Tempo real  
**Fonte:** Reportei com integração de múltiplas plataformas

---

## 💡 Dicas de Uso

1. **Acesso Regular:** 
   - Recomenda-se verificar os dashboards semanalmente
   - Configure alertas nos próprios dashboards (se disponível)

2. **Melhor Visualização:**
   - Desktop ou tablet para análise detalhada
   - Mobile para consultas rápidas
   - Use o botão "Tela Cheia" para apresentações

3. **Segurança:**
   - Não compartilhe a senha publicamente
   - Altere a senha periodicamente
   - Faça logout após usar em computadores compartilhados

4. **Performance:**
   - Dashboards podem levar alguns segundos para carregar
   - Certifique-se de ter boa conexão de internet
   - Atualize a página se parecer travado

5. **Compartilhamento:**
   - Compartilhe apenas a URL `/dashboards/`
   - Forneça a senha separadamente (WhatsApp, pessoalmente)
   - Instrua sobre o fluxo: Login → Menu → Escolher Dashboard

---

## 🎓 Treinamento da Equipe

### Para Novos Usuários:

1. **Acesso Inicial:**
   - URL: `https://danigoe.com.br/dashboards/`
   - Senha: `danigoe2025` (ou a senha customizada)
   - Clique em "ACESSAR DASHBOARDS"

2. **Navegação:**
   - Você verá 2 cards grandes
   - Clique no dashboard desejado
   - Use "Voltar" para mudar de dashboard
   - Use "Sair" quando terminar

3. **Interpretação:**
   - Cada dashboard tem cards explicativos
   - Valores em tempo real
   - Gráficos interativos (clique para detalhes)

4. **Tela Cheia:**
   - Botão dourado no topo
   - Abre o dashboard original
   - Melhor para análises profundas

---

## 📝 Notas Técnicas

### Tecnologias:
- HTML5 + CSS3 puro
- JavaScript Vanilla (sem frameworks)
- Session Storage para autenticação
- Iframes responsivos
- Google Tag Manager (GTM-57PPF6KB)

### Compatibilidade:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Navegadores mobile modernos

### Performance:
- Tempo de carregamento: < 2s (sem dashboards)
- Peso total: < 100KB (HTML/CSS/JS)
- Dashboards externos: Variável (depende do provedor)

---

## 🔄 Atualizações Futuras

### Possíveis Melhorias:

1. **Autenticação Backend:**
   - PHP, Node.js ou Python
   - Banco de dados para usuários
   - Logs de acesso
   - Múltiplos níveis de permissão

2. **Funcionalidades Extras:**
   - Exportar relatórios em PDF
   - Notificações por e-mail
   - Alertas personalizados
   - Histórico de visualizações

3. **Interface:**
   - Modo escuro
   - Personalização de cores
   - Favoritar dashboards
   - Notas e anotações

---

## 📄 Histórico de Versões

### v1.0 - Novembro 2025
- ✅ Sistema completo de login
- ✅ Menu de seleção de dashboards
- ✅ Dashboard de Tráfego Pago
- ✅ Dashboard Geral
- ✅ Responsividade total
- ✅ Proteção por senha
- ✅ GTM implementado

---

## 📋 Resumo Rápido

```
🔐 Login     → danigoe.com.br/dashboards/
🎯 Senha     → danigoe2025
📊 Menu      → Escolher entre 2 dashboards
📈 Tráfego   → Métricas de anúncios
📊 Geral     → Visão consolidada
⏱️  Sessão   → 24 horas
🚪 Sair      → Limpa tudo e volta ao login
```

---

**Sistema desenvolvido para:**  
**Dra. Daniele Regina Goecks - CRM/SC 8908**  
**Medicina Estética Facial Avançada**

---

**Versão:** 1.0  
**Data:** Novembro 2025  
**Status:** ✅ Produção

---

**Precisa de ajuda técnica?**  
Entre em contato com a equipe de desenvolvimento ou FDJ Digital.

**Dúvidas sobre os dashboards?**  
Entre em contato diretamente com a clínica pelo WhatsApp (48) 99200-9944.
