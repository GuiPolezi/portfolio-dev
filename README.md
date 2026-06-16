# 🚀 Portfolio DEV

> Portfólio pessoal desenvolvido com **React** — apresentando projetos, stack tecnológica e formas de contato.

🌐 **Acesse em:** [guipolezi.com](https://guipolezi.com)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Páginas](#estrutura-de-páginas)
- [Como Rodar Localmente](#como-rodar-localmente)
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
- [x] Responsividade completa em todas as áreas
- [x] Conteúdos reais em todas as páginas

---

## Estrutura de Páginas

| Página | Rota | Status |
|---|---|---|
| Home | `/` | ✅ Concluída |
| Projetos | `/projects` | ✅ Concluída |
| Contato | `/contact` | ✅ Concluída |
| LAB | `/lab` | ✅ Concluída |
| Info | `/info` | ✅ Concluída |
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

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<p align="center">Feito com ❤️ e muito café ☕</p>