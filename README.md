# 🚀 Portfolio DEV

> Portfólio pessoal desenvolvido com **React** — apresentando projetos, stack tecnológica e formas de contato.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Páginas](#estrutura-de-páginas)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Roadmap](#roadmap)
- [Licença](#licença)

---

## Sobre o Projeto

Portfólio desenvolvido para apresentar projetos, habilidades técnicas e experiências de forma elegante e responsiva. Conta com suporte a tema claro/escuro e uma área de experimentos (LAB) para projetos criativos.

---

## Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF7043?style=for-the-badge&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## Funcionalidades

- [x] Página inicial (Home)
- [x] Listagem de projetos
- [x] Tema claro / escuro (Dark Mode)
- [x] Página de Contato com formulário + EmailJS
- [x] reCAPTCHA no formulário de contato
- [x] Página LAB (experimentos criativos)
- [x] Loading screen no `index.html`
- [x] Página de Skills
- [ ] Responsividade completa em todas as áreas
- [ ] Conteúdos reais em todas as páginas

---

## Estrutura de Páginas

| Página | Rota | Status |
|---|---|---|
| Home | `/` | ✅ Concluída |
| Projetos | `/projects` | ✅ Concluída |
| Contato | `/contact` | ✅ Estrutura pronta — ⚠️ conteúdo pendente |
| LAB | `/lab` | ✅ Estrutura pronta — ⚠️ conteúdo pendente |
| Info | `/info` | ✅ Estrutura pronta — ⚠️ conteúdo pendente |
| Skills | `/skills` | ✅ Concluída |

---

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/GuiPolezi/portfolio-dev.git

# Acesse a pasta do projeto
cd portfolio-dev

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes chaves:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
VITE_RECAPTCHA_SITE_KEY=sua_site_key
```

---

## Roadmap

### 🚧 Em Progresso

#### 📱 Responsividade
- [ ] Ajustar layout do header para mobile
- [ ] Adaptar grid de projetos para telas menores
- [ ] Revisar tipografia e espaçamentos em breakpoints menores
- [ ] Testar e corrigir em dispositivos iOS e Android

#### ✍️ Conteúdo real nas páginas
Todas as páginas estão com estrutura pronta, mas ainda com dados fictícios ou placeholder.
- [ ] Home — textos, bio e links reais
- [ ] Projects — projetos reais com descrição, links e tecnologias
- [ ] Info — experiências, formação e sobre mim
- [ ] LAB — projetos experimentais reais com preview
- [ ] Contact — links de redes sociais reais (GitHub, LinkedIn, Instagram)

---

### ⚠️ Lembretes de Deploy

> Antes de publicar o site, lembrar de:

- **reCAPTCHA:** Acessar o [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin), ir em **Domínios** e adicionar:
  - `localhost` (para desenvolvimento local)
  - O domínio real do site (ex: `guilhermepolezi.com.br`)
- Configurar as variáveis de ambiente na plataforma de deploy (Vercel, Netlify, etc.)

---

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<p align="center">Feito com ❤️ e muito café ☕</p>