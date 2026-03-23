const projects = [
  {
    title: "BarberPro SaaS em PHP",
    type: "Sistema SaaS",
    cover: "PHP",
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
      <span class="project-cover-badge">${project.cover}</span>
    </div>
    <span class="project-type">${project.type}</span>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-stack">${stackItems}</div>
    <div class="project-links">
      <a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Ver projeto</a>
      <a class="project-link" href="${project.repository}" target="_blank" rel="noreferrer">Repositorio</a>
    </div>
  `;

  return card;
}

projects.forEach((project) => {
  projectsGrid.appendChild(createProjectCard(project));
});
