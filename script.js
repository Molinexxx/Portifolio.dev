const projects = [
  {
    title: "BarberPro SaaS em PHP",
    type: "Sistema SaaS",
    cover: "PHP",
    image: "https://opengraph.githubassets.com/1/Molinexxx/Tcc-avanchtech-php",
    year: "2026",
    status: "Projeto completo",
    description:
      "Sistema para barbearias com autenticacao por sessao, dashboard, gestao de clientes, servicos, equipe e agendamentos com validacao de horarios.",
    stack: ["PHP", "MySQL", "PDO", "Bootstrap", "CSS"],
    demo: "https://github.com/Molinexxx/Tcc-avanchtech-php",
    repository: "https://github.com/Molinexxx/Tcc-avanchtech-php",
  },
  {
    title: "CRUD em Java",
    type: "Aplicacao Java",
    cover: "CRUD",
    image: "https://opengraph.githubassets.com/1/Molinexxx/Crud-em-java",
    year: "2026",
    status: "Estudo pratico",
    description:
      "Projeto de CRUD para praticar operacoes de cadastro, listagem, edicao e exclusao em uma estrutura simples com Java e interface web.",
    stack: ["Java", "HTML"],
    demo: "https://github.com/Molinexxx/Crud-em-java",
    repository: "https://github.com/Molinexxx/Crud-em-java",
  },
  {
    title: "TCC Avanca Tech Java",
    type: "Projeto academico",
    cover: "TCC",
    image: "https://opengraph.githubassets.com/1/Molinexxx/TCC-avanca-tech-Java",
    year: "2026",
    status: "TCC",
    description:
      "Repositorio de TCC com foco em Java, representando uma etapa importante da minha jornada de desenvolvimento e consolidacao da base backend.",
    stack: ["Java"],
    demo: "https://github.com/Molinexxx/TCC-avanca-tech-Java",
    repository: "https://github.com/Molinexxx/TCC-avanca-tech-Java",
  },
  {
    title: "Back-end Mercado List",
    type: "Backend",
    cover: "API",
    image: "https://opengraph.githubassets.com/1/Molinexxx/Back-end---Mercado-List",
    year: "2026",
    status: "Backend",
    description:
      "Projeto backend em Java voltado para praticar estrutura de aplicacoes, organizacao de codigo e fundamentos de sistemas de listagem e gerenciamento.",
    stack: ["Java"],
    demo: "https://github.com/Molinexxx/Back-end---Mercado-List",
    repository: "https://github.com/Molinexxx/Back-end---Mercado-List",
  },
  {
    title: "Aula PHP",
    type: "Estudos em PHP",
    cover: "PHP",
    image: "https://opengraph.githubassets.com/1/Molinexxx/Aula_PHP",
    year: "2026",
    status: "Laboratorio",
    description:
      "Repositorio com exercicios e praticas em PHP, HTML, CSS e JavaScript, mostrando exploracao de bases web e logica de aplicacao.",
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
    demo: "https://github.com/Molinexxx/Aula_PHP",
    repository: "https://github.com/Molinexxx/Aula_PHP",
  },
  {
    title: "Aula Java",
    type: "Estudos em Java",
    cover: "JAVA",
    image: "https://opengraph.githubassets.com/1/Molinexxx/aula_java",
    year: "2026",
    status: "Fundamentos",
    description:
      "Projeto voltado ao aprendizado da linguagem Java, com exercicios e estruturas para reforcar fundamentos de programacao e organizacao de codigo.",
    stack: ["Java"],
    demo: "https://github.com/Molinexxx/aula_java",
    repository: "https://github.com/Molinexxx/aula_java",
  },
];

const projectsGrid = document.querySelector("#projects-grid");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const stackItems = project.stack
    .map((item) => `<span>${item}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-cover">
      <img class="project-cover-image" src="${project.image}" alt="Capa do projeto ${project.title}">
      <div class="project-cover-overlay"></div>
      <span class="project-cover-badge">${project.cover}</span>
      <div class="project-cover-meta">
        <span class="project-year">${project.year}</span>
        <span class="project-status">${project.status}</span>
      </div>
    </div>
    <div class="project-body">
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-stack">${stackItems}</div>
      <div class="project-links">
        <a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Ver projeto</a>
        <a class="project-link" href="${project.repository}" target="_blank" rel="noreferrer">Repositorio</a>
      </div>
    </div>
  `;

  return card;
}

projects.forEach((project) => {
  projectsGrid.appendChild(createProjectCard(project));
});
