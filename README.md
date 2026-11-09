# Portifolio.dev

Portfólio pessoal de Kaua Molina com foco em backend, sistemas web e exibição automática de projetos publicados no GitHub.

## Demo

- Site publicado: [molinexxx.github.io/Portifolio.dev](https://molinexxx.github.io/Portifolio.dev/)

## Visão geral

Este portfólio foi construído como um site estático e apresenta:

- hero com apresentação profissional
- seção de projetos sincronizada com repositórios públicos do GitHub
- projetos principais em destaque com estudos de caso
- ordenação por relevância para os projetos secundários
- cache local para reduzir chamadas excessivas à API do GitHub
- imagens UML personalizadas para projetos selecionados
- visualização ampliada das imagens ao clicar na capa do projeto

## Destaques atuais

- `Projeto SaaS Barbearia`
- `Assistência Gtech`
- `Jogo da Memória`

## Recursos implementados

- Integração com a API do GitHub para buscar repositórios públicos
- Curadoria de destaques com prioridade manual
- Fallback com cache local quando a API falha ou atinge limite
- Exibição de:
  - estrelas
  - forks
  - linguagem principal
  - data de atualização
- Selos visuais de relevância e categoria nos cards
- Lightbox para ampliar imagens dos projetos

## Estrutura do projeto

```text
Portifolio.dev/
|- index.html
|- styles.css
|- script.js
|- README.md
|- assets/
   |- kaua-molina.jpeg
   |- projects/
      |- README.md
      |- project-barbearia.svg
      |- Assistencia-Gtech.svg
      |- Jogo_da_memoria-uml.svg
      |- Jogo_da_memoria.svg
      |- imagem_jogo-da_memoria.png
```

## Como rodar localmente

Como o projeto atual é estático, não precisa de `npm` nem `package.json`.

Você pode abrir `index.html` no navegador. Para servir o site localmente, execute o comando abaixo na raiz do repositório, com Python instalado no Windows:

```powershell
py -m http.server 5500
```

Depois abra:

- [http://localhost:5500](http://localhost:5500)

## Como atualizar os projetos

- publique ou atualize um repositório no GitHub
- abra o portfólio
- clique no botão `Atualizar projetos`

O portfólio:

- busca os repositórios públicos
- reorganiza os destaques
- aplica ordenação por relevância
- atualiza a grade secundária automaticamente

## Imagens dos projetos

As imagens locais dos projetos ficam em `assets/projects/`.

O portfólio tenta usar primeiro imagens locais com o nome do repositório. Se as imagens locais falharem, tenta carregar a capa gerada pelo GitHub. O card mantém uma capa visual própria caso essa tentativa também falhe.

Exemplos:

- `project-barbearia.svg`
- `Assistencia-Gtech.svg`
- `Jogo_da_memoria-uml.svg`

## Diagramas UML

Foram adicionadas imagens UML conceituais para:

- `Projeto SaaS Barbearia`
- `Assistência Gtech`
- `Jogo da Memória`

## Tecnologias

- `HTML`
- `CSS`
- `JavaScript`
- `API do GitHub`
- `localStorage`
- `GitHub Pages`

## Objetivo

Apresentar projetos reais, evolução técnica e capacidade de construir sistemas web com foco em:

- Java
- PHP
- MySQL
- CRUD
- organização de código
- backend e desenvolvimento web
