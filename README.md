# Media Catalog

## Sobre o projeto

**Media Catalog** é uma plataforma para organização, gerenciamento e acompanhamento de conteúdos multimídia.

O sistema foi projetado para catalogar diferentes tipos de mídia, como:

* Filmes
* Animes
* Donghuas
* Manhuas
* Livros

A arquitetura do projeto busca permitir a inclusão de novas categorias futuramente.

## Funcionalidades

Funcionalidades planejadas para o sistema:

* [ ] Cadastro de usuários
* [ ] Sistema de login
* [ ] Cadastro de conteúdos
* [ ] Categorias personalizadas
* [ ] Sistema de busca
* [ ] Filtros por gênero
* [ ] Favoritos
* [ ] Avaliações
* [ ] Controle de acompanhamento
* [ ] Gerenciamento de permissões

## Tecnologias

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* NestJS
* TypeScript
* Prisma ORM

### Banco de dados

* PostgreSQL

### Infraestrutura

* Docker
* GitHub Actions

## Arquitetura

O sistema utiliza uma arquitetura separada entre **frontend**, **backend** e **banco de dados**.

```text
┌──────────────────────┐
│       Frontend       │
│ Next.js + React + TS │
└──────────┬───────────┘
           │
           │ HTTP / API
           ▼
┌──────────────────────┐
│       Backend        │
│    NestJS + TS       │
└──────────┬───────────┘
           │
           │ Prisma ORM
           ▼
┌──────────────────────┐
│      PostgreSQL      │
└──────────────────────┘
```

### Frontend

Responsável pela interface e pela experiência do usuário.

### Backend

Responsável pelas regras de negócio, autenticação e comunicação com o banco de dados.

### Banco de dados

Responsável pelo armazenamento persistente das informações da aplicação.

Mais detalhes estão disponíveis em `docs/architecture.md`.

## Estrutura do projeto

A estrutura planejada do repositório é:

```text
media-catalog/
│
├── frontend/
│
├── backend/
│
├── docs/
│   ├── architecture.md
│   ├── database.md
│   └── roadmap.md
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

> A estrutura está sendo construída progressivamente durante o desenvolvimento.

## Banco de dados

O projeto utiliza **PostgreSQL** como banco de dados principal e **Prisma ORM** para acesso e gerenciamento dos dados.

As entidades inicialmente planejadas são:

* User
* Content
* Category
* Genre
* Review

A modelagem continuará evoluindo conforme os requisitos do domínio forem definidos.

Mais detalhes estão disponíveis em `docs/database.md`.

## Como executar

O projeto ainda está em desenvolvimento.

As instruções completas para instalação e execução local serão adicionadas conforme os módulos forem implementados e o ambiente de desenvolvimento for estabilizado.

## Roadmap

### Fase 1 — Planejamento

* [x] Planejamento inicial do projeto
* [x] Definição inicial da arquitetura
* [x] Documentação inicial

### Fase 2 — Configuração do ambiente

* [ ] Estruturação completa do ambiente de desenvolvimento
* [ ] Configuração do banco de dados
* [ ] Configuração da infraestrutura local

### Fase 3 — Backend

* [ ] Estrutura do backend
* [ ] Banco de dados
* [ ] Usuários
* [ ] Autenticação
* [ ] Sistema de catálogo
* [ ] Favoritos
* [ ] Avaliações
* [ ] Acompanhamento

### Fase 4 — Frontend

* [ ] Estrutura do frontend
* [ ] Interface principal
* [ ] Integração com a API
* [ ] Autenticação
* [ ] Interface do catálogo

### Etapas posteriores

* [ ] Testes
* [ ] CI/CD
* [ ] Deploy

O planejamento detalhado continuará sendo atualizado em `docs/roadmap.md`.

## Documentação

A documentação técnica está localizada em:

```text
docs/
├── architecture.md
├── database.md
└── roadmap.md
```

### `architecture.md`

Documenta a arquitetura e as principais tecnologias utilizadas.

### `database.md`

Documenta o planejamento e a modelagem do banco de dados.

### `roadmap.md`

Documenta as fases de desenvolvimento do projeto.

## Status

**Em desenvolvimento**

O projeto encontra-se atualmente na fase de construção da infraestrutura e do backend.

## Autor

**Ademir Neumann**

Projeto desenvolvido para estudo e aplicação de arquitetura de software moderna.
