# Know Your Fan - Fúria Challenge 2

Este projeto é uma solução completa para o desafio **Know Your Fan** da Fúria, voltada para coleta e validação de dados de fãs, integração com redes sociais e análise de comportamento.

## 📦 Estrutura do Projeto

KnowYourFan-Challenge2-Furia/
│
├── backend/ # Backend Express + MongoDB
│ ├── controllers/ # Controladores de lógica de cada recurso
│ ├── models/ # Modelos Mongoose
│ ├── routes/ # Rotas da API
│ ├── services/ # Serviços (OCR, IA, validações)
│ ├── uploads/ # Uploads de documentos (PNG)
│ ├── .env # Variáveis de ambiente
│ └── index.js # Inicialização do servidor
│
├── frontend/ # Frontend em Next.js (App Router)
│ ├── src/
│ │ ├── app/ # Páginas organizadas por rota
│ │ │ ├── page.js # Landing page
│ │ │ ├── dados/ # Formulário de dados pessoais
│ │ │ ├── social/ # Integração com redes sociais
│ │ │ ├── upload/ # Upload de documento
│ │ │ ├── atividades/ # Atividades, eventos e compras
│ │ │ └── resumo/ # Resumo de dados enviados
│ ├── public/
│ ├── styles/ # Estilização em globals.css
│ └── next.config.js
│
├── README.md
└── .gitignore


## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js (App Router) + CSS puro
- **Backend:** Express.js + Mongoose + Multer
- **Banco de Dados:** MongoDB
- **Validações:** IA para conteúdo, OCR para documentos

## ✅ Funcionalidades

### Backend

- [x] Salvar dados pessoais (`/api/dados/save`)
- [x] Salvar redes sociais (`/api/social/`)
- [x] Validar redes sociais com IA (`/api/validate/`)
- [x] Upload e validação de documento (PNG) (`/api/upload/`)
- [x] Salvar atividades, eventos e compras (`/api/atividades/atividade`, `/evento`, `/compra`)
- [x] Recuperar resumo de dados para exibir no frontend (`/api/resumo/`)

### Frontend

- [x] Landing page com botão de entrada
- [x] Formulário de dados pessoais
- [x] Página de redes sociais
- [x] Página de upload de documento
- [x] Página de atividades, eventos e compras
- [x] Página final com resumo puxado da API

## 🛠️ Como rodar localmente

### Pré-requisitos

- Node.js
- MongoDB (local ou em nuvem)
- Yarn ou npm

### Backend

```bash
cd backend
cp .env.example .env
# edite o .env com a sua URI do MongoDB
npm install
npm npx nodemon index.js

cd frontend
npm install
npm run dev

Desenvolvido por [José Pedro Cunha do amaral].